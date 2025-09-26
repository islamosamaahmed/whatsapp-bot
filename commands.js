const simageCommand = require('./commands/simage');
const kickCommand = require('./commands/kick');
const muteCommand = require('./commands/mute');
const unmuteCommand = require('./commands/unmute');
const banCommand = require('./commands/ban');
const unbanCommand = require('./commands/unban');
const helpCommand = require('./commands/help');
const stickerCommand = require('./commands/sticker');
const warningsCommand = require('./commands/warnings');
const warnCommand = require('./commands/warn');
const ttsCommand = require('./commands/tts');
const deleteCommand = require('./commands/delete');
const attpCommand = require('./commands/attp');
const settingsCommand = require('./commands/settings');
const anticallCommand = require('./commands/anticall');
const pmblockerCommand = require('./commands/pmblocker');
const ownerCommand = require('./commands/owner');
const tagAllCommand = require('./commands/tagall');
const tagNotAdminCommand = require('./commands/tagnotadmin');
const hideTagCommand = require('./commands/hidetag');
const tagCommand = require('./commands/tag');
const { handleAntilinkCommand } = require('./commands/antilink');
const { handleAntitagCommand } = require('./commands/antitag');
const memeCommand = require('./commands/meme');
const jokeCommand = require('./commands/joke');
const quoteCommand = require('./commands/quote');
const factCommand = require('./commands/fact');
const weatherCommand = require('./commands/weather');
const newsCommand = require('./commands/news');
const { tictactoeCommand, handleTicTacToeMove } = require('./commands/tictactoe');
const { topMembers } = require('./commands/topmembers');
const { startHangman, guessLetter } = require('./commands/hangman');
const { startTrivia, answerTrivia } = require('./commands/trivia');
const { complimentCommand } = require('./commands/compliment');
const { insultCommand } = require('./commands/insult');
const { eightBallCommand } = require('./commands/eightball');
const { lyricsCommand } = require('./commands/lyrics');
const { simpCommand } = require('./commands/simp');
const { stupidCommand } = require('./commands/stupid');
const { dareCommand } = require('./commands/dare');
const { truthCommand } = require('./commands/truth');
const { clearCommand } = require('./commands/clear');
const { promoteCommand } = require('./commands/promote');
const { demoteCommand } = require('./commands/demote');
const pingCommand = require('./commands/ping');
const aliveCommand = require('./commands/alive');
const blurCommand = require('./commands/img-blur');
const welcomeCommand = require('./commands/welcome');
const goodbyeCommand = require('./commands/goodbye');
const githubCommand = require('./commands/github');
const antibadwordCommand = require('./commands/antibadword');
const { handleChatbotCommand } = require('./commands/chatbot');
const takeCommand = require('./commands/take');
const { flirtCommand } = require('./commands/flirt');
const characterCommand = require('./commands/character');
const wastedCommand = require('./commands/wasted');
const shipCommand = require('./commands/ship');
const groupInfoCommand = require('./commands/groupinfo');
const resetlinkCommand = require('./commands/resetlink');
const staffCommand = require('./commands/staff');
const urlCommand = require('./commands/url');
const emojimixCommand = require('./commands/emojimix');
const stickerTelegramCommand = require('./commands/stickertelegram');
const viewOnceCommand = require('./commands/viewonce');
const clearSessionCommand = require('./commands/clearsession');
const { autoStatusCommand } = require('./commands/autostatus');
const textmakerCommand = require('./commands/textmaker');
const { handleAntideleteCommand } = require('./commands/antidelete');
const clearTmpCommand = require('./commands/cleartmp');
const setProfilePicture = require('./commands/setpp');
const { setGroupDescription, setGroupName, setGroupPhoto } = require('./commands/groupmanage');
const instagramCommand = require('./commands/instagram');
const { igsCommand } = require('./commands/igs');
const facebookCommand = require('./commands/facebook');
const playCommand = require('./commands/play');
const spotifyCommand = require('./commands/spotify');
const songCommand = require('./commands/song');
const videoCommand = require('./commands/video');
const tiktokCommand = require('./commands/tiktok');
// const aiCommand = require('./commands/ai');
const { handleTranslateCommand } = require('./commands/translate');
const { handleSsCommand } = require('./commands/ss');
const { handleAreactCommand } = require('./lib/reactions');
const sudoCommand = require('./commands/sudo');
const { goodnightCommand } = require('./commands/goodnight');
const { shayariCommand } = require('./commands/shayari');
const { rosedayCommand } = require('./commands/roseday');
const imagineCommand = require('./commands/imagine');
const { autotypingCommand } = require('./commands/autotyping');
const { autoreadCommand } = require('./commands/autoread');
const { handleHeart, miscCommand } = require('./commands/misc');
const { animeCommand } = require('./commands/anime');
const stickercropCommand = require('./commands/stickercrop');
const { piesCommand, piesAlias } = require('./commands/pies');
const updateCommand = require('./commands/update');
const removebgCommand = require('./commands/removebg');
const { reminiCommand } = require('./commands/remini');
const soraCommand = require('./commands/sora');

const commands = {
  simage: simageCommand,
  kick: kickCommand,
  mute: muteCommand,
  unmute: unmuteCommand,
  ban: banCommand,
  unban: unbanCommand,
  help: helpCommand,
  menu: helpCommand,
  bot: helpCommand,
  list: helpCommand,
  sticker: stickerCommand,
  s: stickerCommand,
  warnings: warningsCommand,
  warn: warnCommand,
  tts: ttsCommand,
  delete: deleteCommand,
  del: deleteCommand,
  attp: attpCommand,
  settings: settingsCommand,
  anticall: anticallCommand,
  pmblocker: pmblockerCommand,
  owner: ownerCommand,
  tagall: tagAllCommand,
  tagnotadmin: tagNotAdminCommand,
  hidetag: hideTagCommand,
  tag: tagCommand,
  antilink: handleAntilinkCommand,
  antitag: handleAntitagCommand,
  meme: memeCommand,
  joke: jokeCommand,
  quote: quoteCommand,
  fact: factCommand,
  weather: weatherCommand,
  news: newsCommand,
  ttt: tictactoeCommand,
  tictactoe: tictactoeCommand,
  move: handleTicTacToeMove,
  topmembers: topMembers,
  hangman: startHangman,
  guess: guessLetter,
  trivia: startTrivia,
  answer: answerTrivia,
  compliment: complimentCommand,
  insult: insultCommand,
  '8ball': eightBallCommand,
  lyrics: lyricsCommand,
  simp: simpCommand,
  stupid: stupidCommand,
  itssostupid: stupidCommand,
  iss: stupidCommand,
  dare: dareCommand,
  truth: truthCommand,
  clear: clearCommand,
  promote: promoteCommand,
  demote: demoteCommand,
  ping: pingCommand,
  alive: aliveCommand,
  blur: blurCommand,
  welcome: welcomeCommand,
  goodbye: goodbyeCommand,
  git: githubCommand,
  github: githubCommand,
  sc: githubCommand,
  script: githubCommand,
  repo: githubCommand,
  antibadword: antibadwordCommand,
  chatbot: handleChatbotCommand,
  take: takeCommand,
  flirt: flirtCommand,
  character: characterCommand,
  waste: wastedCommand,
  ship: shipCommand,
  groupinfo: groupInfoCommand,
  infogp: groupInfoCommand,
  infogrupo: groupInfoCommand,
  resetlink: resetlinkCommand,
  revoke: resetlinkCommand,
  anularlink: resetlinkCommand,
  staff: staffCommand,
  admins: staffCommand,
  listadmin: staffCommand,
  tourl: urlCommand,
  url: urlCommand,
  emojimix: emojimixCommand,
  emix: emojimixCommand,
  tg: stickerTelegramCommand,
  stickertelegram: stickerTelegramCommand,
  tgsticker: stickerTelegramCommand,
  telesticker: stickerTelegramCommand,
  vv: viewOnceCommand,
  clearsession: clearSessionCommand,
  clearsesi: clearSessionCommand,
  autostatus: autoStatusCommand,
  metallic: (sock, chatId, message, userMessage) => textmakerCommand(sock, chatId, message, userMessage, 'metallic'),
  ice: (sock, chatId, message, userMessage) => textmakerCommand(sock, chatId, message, userMessage, 'ice'),
  snow: (sock, chatId, message, userMessage) => textmakerCommand(sock, chatId, message, userMessage, 'snow'),
  impressive: (sock, chatId, message, userMessage) => textmakerCommand(sock, chatId, message, userMessage, 'impressive'),
  matrix: (sock, chatId, message, userMessage) => textmakerCommand(sock, chatId, message, userMessage, 'matrix'),
  light: (sock, chatId, message, userMessage) => textmakerCommand(sock, chatId, message, userMessage, 'light'),
  neon: (sock, chatId, message, userMessage) => textmakerCommand(sock, chatId, message, userMessage, 'neon'),
  devil: (sock, chatId, message, userMessage) => textmakerCommand(sock, chatId, message, userMessage, 'devil'),
  purple: (sock, chatId, message, userMessage) => textmakerCommand(sock, chatId, message, userMessage, 'purple'),
  thunder: (sock, chatId, message, userMessage) => textmakerCommand(sock, chatId, message, userMessage, 'thunder'),
  leaves: (sock, chatId, message, userMessage) => textmakerCommand(sock, chatId, message, userMessage, 'leaves'),
  '1917': (sock, chatId, message, userMessage) => textmakerCommand(sock, chatId, message, userMessage, '1917'),
  arena: (sock, chatId, message, userMessage) => textmakerCommand(sock, chatId, message, userMessage, 'arena'),
  hacker: (sock, chatId, message, userMessage) => textmakerCommand(sock, chatId, message, userMessage, 'hacker'),
  sand: (sock, chatId, message, userMessage) => textmakerCommand(sock, chatId, message, userMessage, 'sand'),
  blackpink: (sock, chatId, message, userMessage) => textmakerCommand(sock, chatId, message, userMessage, 'blackpink'),
  glitch: (sock, chatId, message, userMessage) => textmakerCommand(sock, chatId, message, userMessage, 'glitch'),
  fire: (sock, chatId, message, userMessage) => textmakerCommand(sock, chatId, message, userMessage, 'fire'),
  antidelete: handleAntideleteCommand,
  surrender: (sock, chatId, senderId) => handleTicTacToeMove(sock, chatId, senderId, 'surrender'),
  cleartmp: clearTmpCommand,
  setpp: setProfilePicture,
  setgdesc: setGroupDescription,
  setgname: setGroupName,
  setgpp: setGroupPhoto,
  instagram: instagramCommand,
  insta: instagramCommand,
  ig: instagramCommand,
  igsc: (sock, chatId, message) => igsCommand(sock, chatId, message, true),
  igs: (sock, chatId, message) => igsCommand(sock, chatId, message, false),
  fb: facebookCommand,
  facebook: facebookCommand,
  music: playCommand,
  spotify: spotifyCommand,
  play: songCommand,
  mp3: songCommand,
  ytmp3: songCommand,
  song: songCommand,
  video: videoCommand,
  ytmp4: videoCommand,
  tiktok: tiktokCommand,
  tt: tiktokCommand,
  // gpt: aiCommand,
  // gemini: aiCommand,
  translate: (sock, chatId, message, userMessage) => handleTranslateCommand(sock, chatId, message, userMessage.slice(10)),
  trt: (sock, chatId, message, userMessage) => handleTranslateCommand(sock, chatId, message, userMessage.slice(4)),
  ss: (sock, chatId, message, userMessage) => handleSsCommand(sock, chatId, message, userMessage.slice(3).trim()),
  ssweb: (sock, chatId, message, userMessage) => handleSsCommand(sock, chatId, message, userMessage.slice(6).trim()),
  screenshot: (sock, chatId, message, userMessage) => handleSsCommand(sock, chatId, message, userMessage.slice(11).trim()),
  areact: handleAreactCommand,
  autoreact: handleAreactCommand,
  autoreaction: handleAreactCommand,
  sudo: sudoCommand,
  goodnight: goodnightCommand,
  lovenight: goodnightCommand,
  gn: goodnightCommand,
  shayari: shayariCommand,
  shayri: shayariCommand,
  roseday: rosedayCommand,
  imagine: imagineCommand,
  flux: imagineCommand,
  dalle: imagineCommand,
  jid: async (sock, chatId, message) => {
    const groupJid = message.key.remoteJid;
    if (!groupJid.endsWith('@g.us')) {
      return await sock.sendMessage(chatId, {
        text: "❌ This command can only be used in a group."
      });
    }
    await sock.sendMessage(chatId, {
      text: `✅ Group JID: ${groupJid}`
    }, {
      quoted: message
    });
  },
  autotyping: autotypingCommand,
  autoread: autoreadCommand,
  heart: handleHeart,
  horny: (sock, chatId, message) => miscCommand(sock, chatId, message, ['horny', ...message.text.split(' ').slice(1)]),
  circle: (sock, chatId, message) => miscCommand(sock, chatId, message, ['circle', ...message.text.split(' ').slice(1)]),
  lgbt: (sock, chatId, message) => miscCommand(sock, chatId, message, ['lgbt', ...message.text.split(' ').slice(1)]),
  lolice: (sock, chatId, message) => miscCommand(sock, chatId, message, ['lolice', ...message.text.split(' ').slice(1)]),
  simpcard: (sock, chatId, message) => miscCommand(sock, chatId, message, ['simpcard', ...message.text.split(' ').slice(1)]),
  tonikawa: (sock, chatId, message) => miscCommand(sock, chatId, message, ['tonikawa', ...message.text.split(' ').slice(1)]),
  'its-so-stupid': (sock, chatId, message) => miscCommand(sock, chatId, message, ['its-so-stupid', ...message.text.split(' ').slice(1)]),
  namecard: (sock, chatId, message) => miscCommand(sock, chatId, message, ['namecard', ...message.text.split(' ').slice(1)]),
  oogway2: (sock, chatId, message) => miscCommand(sock, chatId, message, ['oogway2', ...message.text.split(' ').slice(1)]),
  oogway: (sock, chatId, message) => miscCommand(sock, chatId, message, ['oogway', ...message.text.split(' ').slice(1)]),
  tweet: (sock, chatId, message) => miscCommand(sock, chatId, message, ['tweet', ...message.text.split(' ').slice(1)]),
  ytcomment: (sock, chatId, message) => miscCommand(sock, chatId, message, ['youtube-comment', ...message.text.split(' ').slice(1)]),
  comrade: (sock, chatId, message) => miscCommand(sock, chatId, message, ['comrade', ...message.text.split(' ').slice(1)]),
  gay: (sock, chatId, message) => miscCommand(sock, chatId, message, ['gay', ...message.text.split(' ').slice(1)]),
  glass: (sock, chatId, message) => miscCommand(sock, chatId, message, ['glass', ...message.text.split(' ').slice(1)]),
  jail: (sock, chatId, message) => miscCommand(sock, chatId, message, ['jail', ...message.text.split(' ').slice(1)]),
  passed: (sock, chatId, message) => miscCommand(sock, chatId, message, ['passed', ...message.text.split(' ').slice(1)]),
  triggered: (sock, chatId, message) => miscCommand(sock, chatId, message, ['triggered', ...message.text.split(' ').slice(1)]),
  animu: animeCommand,
  nom: (sock, chatId, message) => animeCommand(sock, chatId, message, ['nom']),
  poke: (sock, chatId, message) => animeCommand(sock, chatId, message, ['poke']),
  cry: (sock, chatId, message) => animeCommand(sock, chatId, message, ['cry']),
  kiss: (sock, chatId, message) => animeCommand(sock, chatId, message, ['kiss']),
  pat: (sock, chatId, message) => animeCommand(sock, chatId, message, ['pat']),
  hug: (sock, chatId, message) => animeCommand(sock, chatId, message, ['hug']),
  wink: (sock, chatId, message) => animeCommand(sock, chatId, message, ['wink']),
  facepalm: (sock, chatId, message) => animeCommand(sock, chatId, message, ['face-palm']),
  'face-palm': (sock, chatId, message) => animeCommand(sock, chatId, message, ['face-palm']),
  animuquote: (sock, chatId, message) => animeCommand(sock, chatId, message, ['quote']),
  loli: (sock, chatId, message) => animeCommand(sock, chatId, message, ['loli']),
  crop: stickercropCommand,
  pies: piesCommand,
  china: (sock, chatId, message) => piesAlias(sock, chatId, message, 'china'),
  indonesia: (sock, chatId, message) => piesAlias(sock, chatId, message, 'indonesia'),
  japan: (sock, chatId, message) => piesAlias(sock, chatId, message, 'japan'),
  korea: (sock, chatId, message) => piesAlias(sock, chatId, message, 'korea'),
  hijab: (sock, chatId, message) => piesAlias(sock, chatId, message, 'hijab'),
  update: updateCommand,
  removebg: removebgCommand.exec,
  rmbg: removebgCommand.exec,
  nobg: removebgCommand.exec,
  remini: reminiCommand,
  enhance: reminiCommand,
  upscale: reminiCommand,
  sora: soraCommand,
};

module.exports = commands;