'use strict';

Object.defineProperty(exports, '__esModule', {
  'value': true
});
const {
  zokou
} = require("../framework/zokou");
zokou({
  'nomCom': "wallpaper1",
  'reaction': '🎞',
  'nomFichier': __filename
}, async (_0x3f2339, _0x51b3e1, _0x5531c7) => {
  console.log("Commande saisie !!!s");
  await _0x51b3e1.sendMessage(_0x3f2339, {
    'image': {
      'url': "https://telegra.ph/file/a1d930988ec6f8aeb64b7.jpg"
    },
    'caption': "🏞𝗥𝗮𝗻𝗱𝗼𝗺 𝘄𝗮𝗹𝗹𝗽𝗮𝗽𝗲𝗿 \n\n 🏞Download it and set it to your wallpaper 𝗙𝗿𝗼𝗺 (𝕃𝕌ℂ𝕂𝕐 𝕄𝔻)🏞MADE BY FREDIE TECH"
  });
});
console.log("mon test");
