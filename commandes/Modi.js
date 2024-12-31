/**
require("dotenv").config();
const {
  zokou
} = require("../framework/zokou");
const yts = require("yt-search");
const BaseUrl = process.env.GITHUB_GIT;
const giftedapikey = process.env.BOT_OWNER;
function validateConfig() {
  if (!BaseUrl || !giftedapikey) {
    throw new Error("Configuration error: Missing BaseUrl or API key.");
  }
}
validateConfig();
zokou({
  'nomCom': "video",
  'categorie': "Search",
  'reaction': '🎥'
}, async (_0xbb369d, _0x42b03f, _0x2d6c0a) => {
  const {
    ms: _0x254c5b,
    repondre: _0x57df79,
    arg: _0xb409de
  } = _0x2d6c0a;
  if (!_0xb409de[0]) {
    return _0x57df79("Please insert a song/video name.");
  }
  try {
    const _0x4e0cb4 = await yts(_0xb409de.join(" "));
    const _0x2b1d32 = _0x4e0cb4.videos;
    if (_0x2b1d32.length === 0) {
      return _0x57df79("No videos found.");
    }
    const _0x12ce80 = _0x2b1d32[0].url;
    const _0x271039 = await fetch(BaseUrl + "/api/download/ytmp4?url=" + encodeURIComponent(_0x12ce80) + "&apikey=" + giftedapikey);
    const _0x4c1213 = await _0x271039.json();
    if (_0x4c1213.status === 200 && _0x4c1213.success) {
      const _0x57446c = _0x4c1213.result.download_url;
      await _0x42b03f.sendMessage(_0xbb369d, {
        'image': {
          'url': _0x2b1d32[0].thumbnail
        },
        'caption': "╭─────═━┈┈━═──━┈⊷\n┇ 『 *DOWLODER* 』\n┇ *Bot name : GMAX AI* \n┇ *Owner: Mr Gmax* \n╰─────═━┈┈━═──━┈⊷"
      }, {
        'quoted': _0x254c5b
      });
      await _0x42b03f.sendMessage(_0xbb369d, {
        'video': {
          'url': _0x57446c
        },
        'mimetype': "video/mp4"
      }, {
        'quoted': _0x254c5b
      });
      _0x57df79("Downloaded Successfully ✅");
    } else {
      _0x57df79("Failed to download the video.");
    }
  } catch (_0x5c2df8) {
    console.error("Error:", _0x5c2df8);
    _0x57df79("An error occurred while processing your request.");
  }
});
zokou({
  'nomCom': "play",
  'categorie': "Download",
  'reaction': '🎧'
}, async (_0x44d29d, _0x9b0b4e, _0x435a18) => {
  const {
    ms: _0x37b28a,
    repondre: _0x4c482e,
    arg: _0x308fe7
  } = _0x435a18;
  if (!_0x308fe7[0]) {
    return _0x4c482e("Please insert a song name.");
  }
  try {
    const _0x39822b = await yts(_0x308fe7.join(" "));
    const _0x46a94d = _0x39822b.videos;
    if (_0x46a94d.length === 0) {
      return _0x4c482e("No audio found.");
    }
    const _0x1d9387 = _0x46a94d[0].url;
    const _0x2ca4e2 = await fetch(BaseUrl + "/api/download/ytmp3?url=" + encodeURIComponent(_0x1d9387) + "&apikey=" + giftedapikey);
    const _0x567315 = await _0x2ca4e2.json();
    if (_0x567315.status === 200 && _0x567315.success) {
      const _0x2eb7b4 = _0x567315.result.download_url;
      await _0x9b0b4e.sendMessage(_0x44d29d, {
        'image': {
          'url': _0x46a94d[0].thumbnail
        },
        'caption': "╭─────═━┈┈━═──━┈⊷\n┇ 『 *DOWLODER* 』\n┇ *Bot name : GMAX AI* \n┇ *Owner: Mr Gmax* \n╰─────═━┈┈━═──━┈⊷"
      }, {
        'quoted': _0x37b28a
      });
      await _0x9b0b4e.sendMessage(_0x44d29d, {
        'audio': {
          'url': _0x2eb7b4
        },
        'mimetype': "audio/mp4"
      }, {
        'quoted': _0x37b28a
      });
      _0x4c482e("Downloaded Successfully ✅");
    } else {
      _0x4c482e("Failed to download audio. Try again later.");
    }
  } catch (_0x417ab9) {
    console.error("Error:", _0x417ab9);
    _0x4c482e("An error occurred while processing your request.");
  }
});
zokou({
  'nomCom': "song",
  'categorie': "Download",
  'reaction': '🎸'
}, async (_0x1ce0d2, _0xf6a5fa, _0x476360) => {
  const {
    ms: _0x7bdead,
    repondre: _0x52d5e8,
    arg: _0x24166d
  } = _0x476360;
  if (!_0x24166d[0]) {
    return _0x52d5e8("Please insert a song name.");
  }
  try {
    const _0x136f7a = await yts(_0x24166d.join(" "));
    const _0x5c635a = _0x136f7a.videos;
    if (_0x5c635a.length === 0) {
      return _0x52d5e8("No audio found.");
    }
    const _0x271fea = _0x5c635a[0].url;
    const _0x2251d8 = await fetch(BaseUrl + "/api/download/ytmp3?url=" + encodeURIComponent(_0x271fea) + "&apikey=" + giftedapikey);
    const _0x4fea27 = await _0x2251d8.json();
    if (_0x4fea27.status === 200 && _0x4fea27.success) {
      const _0x2bf646 = _0x4fea27.result.download_url;
      await _0xf6a5fa.sendMessage(_0x1ce0d2, {
        'image': {
          'url': _0x5c635a[0].thumbnail
        },
        'caption': "╭─────═━┈┈━═──━┈⊷\n┇ 『 *DOWLODER* 』\n┇ *Bot name : GMAX AI* \n┇ *Owner: Mr Gmax* \n╰─────═━┈┈━═──━┈⊷"
      }, {
        'quoted': _0x7bdead
      });
      await _0xf6a5fa.sendMessage(_0x1ce0d2, {
        'audio': {
          'url': _0x2bf646
        },
        'mimetype': "audio/mp4"
      }, {
        'quoted': _0x7bdead
      });
      _0x52d5e8("Downloaded Successfully ✅");
    } else {
      _0x52d5e8("Failed to download audio. Try again later.");
    }
  } catch (_0x25251d) {
    console.error("Error:", _0x25251d);
    _0x52d5e8("An error occurred while processing your request.");
  }
});
**/
