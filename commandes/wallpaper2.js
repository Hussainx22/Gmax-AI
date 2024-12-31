'use strict';

Object.defineProperty(exports, "__esModule", {
  'value': true
});
const {
  zokou
} = require("../framework/zokou");
zokou({
  'nomCom': "wallpaper2",
  'reaction': '🎞',
  'nomFichier': __filename
}, async (_0x280690, _0x2af0fc, _0x3db31b) => {
  console.log("Commande saisie !!!s");
  await _0x2af0fc.sendMessage(_0x280690, {
    'image': {
      'url': "https://telegra.ph/file/c90fdab5f133a946d6f4f.jpg"
    },
    'caption': "⬅️𝗥𝗮𝗻𝗱𝗼𝗺 𝘄𝗮𝗹𝗹𝗽𝗮𝗽𝗲𝗿 \n\n ⬅️Download it and set it to your wallpaper 𝗙𝗿𝗼𝗺 (GMAX-AI)⬅️MADE BY FREDIE 𝗧𝗘𝗖𝗛"
  });
});
console.log("mon test");
