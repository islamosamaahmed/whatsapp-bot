const { default: makeWASocket, useMultiFileAuthState } = require("@whiskeysockets/baileys")
const express = require("express")
const qrcode = require("qrcode")

async function startBot() {
  const { state, saveCreds } = await useMultiFileAuthState("auth")
  const sock = makeWASocket({ auth: state })
  
  sock.ev.on("connection.update", (update) => {
    const { qr } = update
    if (qr) {
      console.log("Scan this QR code in WhatsApp:")
      qrcode.toString(qr, { type: "terminal" }, (err, url) => {
        console.log(url)
      })
    }
  })
  
  sock.ev.on("creds.update", saveCreds)
  sock.ev.on("messages.upsert", (m) => {
    console.log("New message:", m)
  })
}

startBot()

// Web server for Render
const app = express()
app.get("/", (req, res) => res.send("✅ Bot is running"))
app.listen(3000, () => console.log("Web server started on port 3000"))
