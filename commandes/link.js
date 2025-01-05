const {
  mediafireDl
} = require("../framework/dl/Function");
const {
  zokou
} = require("../framework/zokou");
const getFBInfo = require("@xaviabot/fb-downloader");
zokou({
  'nomCom': 'insta',
  'categorie': 'Download'
}, async (_0x4f0a8f, _0x1283f0, _0x5dcbf9) => {
  const {
    ms: _0x186c2f,
    repondre: _0x15b50d,
    arg: _0x369fe5
  } = _0x5dcbf9;
  let _0x1448fc = _0x369fe5.join(" ");
  if (!_0x369fe5[0x0]) {
    _0x15b50d("Please insert an Instagram video link");
    return;
  }
  ;
  try {
    const _0x34e950 = await fetch("https://api.maher-zubair.xyz/download/instagram?url=" + _0x1448fc);
    const _0x1415e2 = await _0x34e950.json();
    if (_0x1415e2 && _0x1415e2.result && _0x1415e2.result.data && _0x1415e2.result.data.length > 0x0) {
      const _0x14c3a7 = _0x1415e2.result.data[0x0];
      if (_0x14c3a7.type === "video") {
        _0x1283f0.sendMessage(_0x4f0a8f, {
          'video': {
            'url': _0x14c3a7.url
          },
          'caption': "Here is your Instagram Video.\n _Downloaded by_ *GMAX_MD*",
          'gifPlayback': false
        }, {
          'quoted': _0x186c2f
        });
      } else {
        _0x1283f0.sendMessage(_0x4f0a8f, {
          'image': {
            'url': _0x14c3a7.url
          },
          'caption': "Here is your Instagram Image!\n _Downloaded by_ *GMAX_MD*"
        });
      }
    } else {
      throw new Error("No media found in the response data");
    }
  } catch (_0x55f86c) {
    console.error("An error occurred while downloading:", _0x55f86c);
  }
});
zokou({
  'nomCom': 'twitter',
  'categorie': "Download"
}, async (_0x2eba4e, _0x37f532, _0x715501) => {
  const {
    ms: _0x217842,
    repondre: _0x1c600f,
    arg: _0x391c82
  } = _0x715501;
  let _0x775e9d = _0x391c82.join(" ");
  if (!_0x391c82[0x0]) {
    _0x1c600f("Please insert a *TWITTER Video Link* for *GMAX_MD* to download ");
    return;
  }
  try {
    const _0x32dae2 = await fetch("https://api.maher-zubair.xyz/download/twitter?url=" + _0x775e9d);
    const _0x3792d4 = await _0x32dae2.json();
    if (_0x3792d4 && _0x3792d4.data && _0x3792d4.data.HD) {
      const _0x2eb2e5 = _0x3792d4.data.HD;
      _0x37f532.sendMessage(_0x2eba4e, {
        'video': {
          'url': _0x2eb2e5
        },
        'caption': "Here is your Twitter Video.\n _Downloaded by_ *GMAX_MD*",
        'gifPlayback': false
      }, {
        'quoted': _0x217842
      });
    }
  } catch (_0x1d1bf0) {
    _0x1c600f("I am unable to download your media. \n " + _0x1d1bf0);
  }
});
france({
  'nomCom': "tiktok",
  'categorie': "Download"
}, async (_0x205e43, _0x3acb1c, _0x19f1be) => {
  const {
    ms: _0xf766be,
    repondre: _0x5c1fd7,
    arg: _0x15752a
  } = _0x19f1be;
  let _0x172b96 = _0x15752a.join(" ");
  if (!_0x15752a[0x0]) {
    _0x5c1fd7("Please insert a Tik Tok video link");
    return;
  }
  ;
  const _0x71017d = await fetch("https://api.maher-zubair.xyz/download/tiktok2?url=" + _0x172b96);
  const _0x4d1099 = await _0x71017d.json();
  try {
    if (_0x4d1099 && _0x4d1099.result && _0x4d1099.result.url && _0x4d1099.result.url.nowm) {
      const _0x170522 = _0x4d1099.result.url.nowm;
      _0x3acb1c.sendMessage(_0x205e43, {
        'video': {
          'url': _0x170522
        },
        'caption': "Here is your Tiktok Video.\n _Downloaded by_ *GMAX_MD*",
        'gifPlayback': false
      }, {
        'quoted': _0xf766be
      });
    }
  } catch (_0x12986d) {
    _0x5c1fd7("I am unable to download the file. \n " + _0x12986d);
  }
});
zokou({
  'nomCom': "mediafire",
  'categorie': "Download"
}, async (_0x212b7e, _0x452e70, _0x5a3e91) => {
  const {
    ms: _0x595354,
    repondre: _0x2502b2,
    arg: _0x379b65
  } = _0x5a3e91;
  let _0x17d2a8 = _0x379b65.join(" ");
  if (!_0x379b65[0x0]) {
    _0x2502b2("Provide mediafire link\n\nmediafire <valid mediafire link>");
    return;
  }
  ;
  try {
    const _0x33899d = await mediafireDl(_0x17d2a8);
    if (_0x33899d[0x0].size.split('MB')[0x0] >= 0x64) {
      return m.reply("File tooooo big");
    }
    await _0x452e70.sendMessage(_0x212b7e, {
      'document': {
        'url': _0x33899d[0x0].link
      },
      'fileName': _0x33899d[0x0].nama,
      'mimetype': _0x33899d[0x0].mime,
      'caption': "Downloaded by GMAX_MD: " + _0x33899d[0x0].nama
    }, {
      'quoted': _0x595354
    });
  } catch (_0x282bc6) {
    _0x2502b2("I am unable to download the file. \n " + _0x282bc6);
  }
});
zokou({
  'nomCom': "fbdl",
  'categorie': "Download",
  'reaction': "🎞️"
}, async (_0x5d9e2e, _0x172b43, _0x4338a5) => {
  const {
    repondre: _0x2ff6f1,
    ms: _0x5d788e,
    arg: _0x1f3aa8
  } = _0x4338a5;
  if (!_0x1f3aa8[0x0]) {
    _0x2ff6f1("Insert a public facebook video link!");
    return;
  }
  const _0x1ef9d5 = _0x1f3aa8.join(" ");
  try {
    getFBInfo(_0x1ef9d5).then(_0x34516a => {
      let _0x4cd419 = "\n        titre: " + _0x34516a.title + "\n        Lien: " + _0x34516a.url + "\n      ";
      _0x172b43.sendMessage(_0x5d9e2e, {
        'image': {
          'url': _0x34516a.thumbnail
        },
        'caption': _0x4cd419
      }, {
        'quoted': _0x5d788e
      });
      _0x172b43.sendMessage(_0x5d9e2e, {
        'video': {
          'url': _0x34516a.hd
        },
        'caption': "facebook video downloader\n powered by *GMAX_MD*"
      }, {
        'quoted': _0x5d788e
      });
    })["catch"](_0x54302c => {
      console.log("Error:", _0x54302c);
      _0x2ff6f1("try fbdl2 on this link");
    });
  } catch (_0xfb5e9f) {
    console.error("An error occurred while *GMAX_MD* was downloading your media:", _0xfb5e9f);
    _0x2ff6f1("An error occurred while downloading your media.", _0xfb5e9f);
  }
});
france({
  'nomCom': "fbdl2",
  'categorie': "Download",
  'reaction': "🎞️"
}, async (_0xc0adf, _0x31a944, _0x2973ca) => {
  const {
    repondre: _0x559883,
    ms: _0x338af7,
    arg: _0x53173f
  } = _0x2973ca;
  if (!_0x53173f[0x0]) {
    _0x559883("Insert a public facebook video link! !");
    return;
  }
  const _0x4a885b = _0x53173f.join(" ");
  try {
    getFBInfo(_0x4a885b).then(_0x1c5e02 => {
      let _0x2d6279 = "\n        titre: " + _0x1c5e02.title + "\n        Lien: " + _0x1c5e02.url + "\n      ";
      _0x31a944.sendMessage(_0xc0adf, {
        'image': {
          'url': _0x1c5e02.thumbnail
        },
        'caption': _0x2d6279
      }, {
        'quoted': _0x338af7
      });
      _0x31a944.sendMessage(_0xc0adf, {
        'video': {
          'url': _0x1c5e02.sd
        },
        'caption': "facebook video downloader powered by *GMAX_MD*"
      }, {
        'quoted': _0x338af7
      });
    })["catch"](_0x394bb5 => {
      console.log("Error:", _0x394bb5);
      _0x559883(_0x394bb5);
    });
  } catch (_0x2d2707) {
    console.error("An error occurred while POPKID_MD was downloading your media:", _0x2d2707);
    _0x559883("An error occurred while Popkid_Md was downloading your media.", _0x2d2707);
  }
});
