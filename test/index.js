const extract = require('..');
const images = {
  Imgur: 'https://imgur.com/EQFdt2W',
  Snaggy: 'https://snag.gy/7AyQk8.jpg',
  Pasteboard: 'https://pasteboard.co/GRnUSdqN.png',
  IMG42: 'https://img42.com/bJ59b',
  Gyazo: 'https://gyazo.com/9a0187b816def3ea0b0451820318cecd',
  LightShot: 'https://prnt.sc/h438tq'
};

(async () => {
  for (const host in images) {
    console.log([
      `Host: ${host}`,
      `  Source: ${images[host]}`,
      `  Extracted: ${await extract(images[host])}`,
      ''
    ].join('\n'));
  }
})();