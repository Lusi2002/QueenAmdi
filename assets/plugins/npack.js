const thiccysapi = require('textmaker-thiccy'); // Import NPM Package

const Asena = require('../events');

const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');

const fs = require('fs');

const Config = require('../config')

const axios = require('axios')

const request = require('request');

const os = require('os');

var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '' }    

var ggg = Buffer.from(clh.cd, 'base64')

var ddd = ggg.toString('utf-8')

clh.pay = ddd

var desc_msg = ''

if (Config.LANG == 'TR') desc_msg = 'Sınırsız erişime sahip textmaker araçlarını gösterir.'

if (Config.LANG == 'EN') desc_msg = 'සුපිරිම logo සෙට් එකක් තමා ඉතිම් '

if (Config.LANG == 'RU') desc_msg = 'Показывает инструменты для создания текстов с неограниченным доступом.'

if (Config.LANG == 'AZ') desc_msg = 'Sınırsız girişi olan textmaker alətləri göstərir.'

if (Config.LANG == 'PT') desc_msg = 'Mostra ferramentas textmaker com acesso ilimitado.'

if (Config.LANG == 'ID') desc_msg = 'Menampilkan alat pembuat teks dengan akses tak terbatas.'

if (Config.LANG == 'ML') desc_msg = 'പരിധിയില്ലാത്ത ആക്സസ് ഉള്ള ടെക്സ്റ്റ് മേക്കർ ഉപകരണങ്ങൾ കാണിക്കുന്നു.'

if (Config.LANG == 'HI') desc_msg = 'असीमित एक्सेस के साथ टेक्स्टमेकर टूल दिखाता है।'

if (Config.LANG == 'ES') desc_msg = 'Muestra herramientas de creación de textos con acceso ilimitado.'

if (os.userInfo().homedir !== clh.pay) return;

let wk = Config.WORKTYPE == 'public' ? false : true

Asena.addCommand({pattern: 'npack$', fromMe: wk, desc: desc_msg}, (async (message, match) => {

    var t1 = ''

    var t2 = ''

    var t3 = ''

    var t4 = ''

    var t5 = ''

    var t6 = ''

    var t7 = ''

    var t8 = ''

    var t9 = ''

    var t10 = ''

    var t11 = ''

    var t12 = ''

    var t13 = ''

    var t14 = ''

    var t15 = ''

    var t16 = ''

    var t17 = ''

    var t18 = ''

    var t19 = ''

    var t20 = ''

    var t21 = ''

    var t22 = ''

    var t23 = ''

    var t24 = ''

    var t25 = ''

    var t26 = ''

    var t27 = ''

    var t28 = ''

    var t29 = ''

    var usage_cmd = ''

    var command_cmd = ''

    var desc_cmd = ''

    if (Config.LANG == 'TR' || Config.LANG == 'AZ') {

        usage_cmd = '🍕 *Örnek:* _'

        command_cmd = '🫐 *Komut:* '

    } else { 

        usage_cmd = '🍕 *Example:* _'

        command_cmd = '🫐 *Command:* '

    }

    const msg = command_cmd + '```.ngold``` \n' + usage_cmd + '.ngold Lusifer_\n' + '===============\n\n' +

        command_cmd + '```.nsilver``` \n'  +  usage_cmd + '.nsilver Lusifer_\n' + '===============\n\n' +

        command_cmd + '```.nglue``` \n' +  usage_cmd + '.nglue Lusifer_\n' + '===============\n\n' +

        command_cmd + '```.ncloud``` \n'  + usage_cmd + '.ncloud Lusifer_\n' + '===============\n\n' +

        command_cmd + '```.nclub``` \n' + usage_cmd + '.nclub Lusifer_\n' + '===============\n\n' +

        command_cmd + '```.nroad``` \n' + usage_cmd + '.nroad Lusifer_\n' + '===============\n\n' +

        command_cmd + '```.nblood``` \n'  + usage_cmd + '.nblood Lusifer_\n' + '===============\n\n' +

        command_cmd + '```.n2bld``` \n'  + usage_cmd + '.n2bld Lusifer_\n' + '===============\n\n' +

        command_cmd + '```.ngreen``` \n'  + usage_cmd + '.ngreen Lusifer_\n' + '===============\n\n' +

          command_cmd + '```.ngalaxy``` \n'  + usage_cmd + '.ngalaxy Lusifer_\n' + '===============\n\n' +

          command_cmd + '```.nsnow``` \n'  + usage_cmd + '.nsnow Lusifer_\n' + '===============\n\n' +

    command_cmd + '```.navo``` \n'  + usage_cmd + '.navo Lusifer_\n' + '===============\n\n' +

    command_cmd + '```.nleaf``` \n'  + usage_cmd + '.nleaf Lusifer_\n' + '===============\n\n' +

        command_cmd + '```.nsand``` \n'  + usage_cmd + '.nsand Lusifer_\n' +  '===============\n\n' +

        command_cmd + '```.nlux``` \n' + usage_cmd + '.nlux Lusifer_\n' + '===============\n\n' +

          command_cmd + '```.ntoxic``` \n' + usage_cmd + '.ntoxic Lusifer_\n' + '===============\n\n' +

          command_cmd + '```.ndark``` \n' + usage_cmd + '.ndark Lusifer_\n' + '===============\n\n' 

    await message.client.sendMessage(message.jid,msg, MessageType.text, { quoted: message.data })

}));

//Text pro me web site scraped-------------------------------------------------------------------

Asena.addCommand({pattern: 'ngold ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {

    var top 

    if (match[1].includes(';')) {

        var split = match[1].split(';');

        topText = split[0];

        bottomText = split[1];

    } else {

        topText = match[1];

        bottomText = 'ㅤ';

    }

    thiccysapi.textpro("https://textpro.me/text-logo-3d-metal-gold-944.html",

        [`${topText}`, `By Lusifer`]

        ).then(async (data) => { 

          try { 

              var download = async(uri, filename, callback) => {

                  await request.head(uri, async(err, res, body) => {    

                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);

                  });

              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/tt2.jpg', async() => {                          

                await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/tt2.jpg'), MessageType.image, { caption: '🦹 *Created by Lusifer* 🧙 \n      🔥 *Powered By X-troid*' })

            })

        } catch(err) { 

            console.log(err)

        } 

  });

}));

Asena.addCommand({pattern: 'nsilver ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {

    var top 

    if (match[1].includes(';')) {

        var split = match[1].split(';');

        topText = split[0];

        bottomText = split[1];

    } else {

        topText = match[1];

        bottomText = 'ㅤ';

    }

    thiccysapi.textpro("https://textpro.me/create-text-logo-3d-metal-online-957.html",

        [`${topText}`, `By Lusifer`]

        ).then(async (data) => { 

          try { 

              var download = async(uri, filename, callback) => {

                  await request.head(uri, async(err, res, body) => {    

                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);

                  });

              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/tt2.jpg', async() => {                          

                await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/tt2.jpg'), MessageType.image, { caption: '🦹 *Created by Lusifer* 🧙 \n      🔥 *Powered By X-troid*' })

            })

        } catch(err) { 

            console.log(err)

        } 

  });

}));

Asena.addCommand({pattern: 'nglue ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {

    thiccysapi.textpro("https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html",

        `${match[1]}`

        ).then(async (data) => { 

          try { 

              var download = async(uri, filename, callback) => {

                  await request.head(uri, async(err, res, body) => {    

                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);

                  });

              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/devil.jpg', async() => {                          

                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/devil.jpg'), MessageType.image,{ quoted: message.data }, { caption: '🦹 *Created by Lusifer* 🧙 \n      🔥 *Powered By X-troid*' })

              })

          } catch(err) { 

              console.log(err)

          } 

    });

}));

Asena.addCommand({pattern: 'nclub ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {

    thiccysapi.textpro("https://textpro.me/create-3d-neon-light-text-effect-online-1028.html",

        `${match[1]}`

        ).then(async (data) => { 

          try { 

              var download = async(uri, filename, callback) => {

                  await request.head(uri, async(err, res, body) => {    

                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);

                  });

              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/devil.jpg', async() => {                          

                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/devil.jpg'), MessageType.image,{ quoted: message.data }, { caption: '🦹 *Created by Lusifer* 🧙 \n      🔥 *Powered By X-troid*' })

              })

          } catch(err) { 

              console.log(err)

          } 

    });

}));

Asena.addCommand({pattern: 'n2bld ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {

    thiccysapi.textpro("https://textpro.me/horror-blood-text-effect-online-883.html",

        `${match[1]}`

        ).then(async (data) => { 

          try { 

              var download = async(uri, filename, callback) => {

                  await request.head(uri, async(err, res, body) => {    

                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);

                  });

              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/devil.jpg', async() => {                          

                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/devil.jpg'), MessageType.image,{ quoted: message.data }, { caption: '🦹 *Created by Lusifer* 🧙 \n      🔥 *Powered By X-troid*' })

              })

          } catch(err) { 

              console.log(err)

          } 

    });

}));

//Lol human rest api----------------------------------------------------------------------------

Asena.addCommand({ pattern: 'ngreen ?(.*)', fromMe: wk,dontAddCommandList: true }, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.lolhuman.xyz/api/textprome/greenneon?apikey=ShiroNeko&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image,{ quoted: message.data }, { mimetype: Mimetype.jpg, caption: '🦹 *Created by Lusifer* 🧙 \n      🔥 *Powered By X-troid*' })

}));

Asena.addCommand({ pattern: 'nsand ?(.*)', fromMe: wk,dontAddCommandList: true }, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.lolhuman.xyz/api/textprome/sandengraved?apikey=ShiroNeko&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image,{ quoted: message.data }, { mimetype: Mimetype.jpg, caption: '🦹 *Created by Lusifer* 🧙 \n      🔥 *Powered By X-troid*' })

}));

Asena.addCommand({ pattern: 'nblood ?(.*)', fromMe: wk,dontAddCommandList: true }, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.lolhuman.xyz/api/textprome/bloodfrosted?apikey=ShiroNeko&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image,{ quoted: message.data }, { mimetype: Mimetype.jpg, caption: '🦹 *Created by Lusifer* 🧙 \n      🔥 *Powered By X-troid*' })

}));

Asena.addCommand({ pattern: 'nlux ?(.*)', fromMe: wk,dontAddCommandList: true }, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.lolhuman.xyz/api/textprome/luxury?apikey=ShiroNeko&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image,{ quoted: message.data }, { mimetype: Mimetype.jpg, caption: '🦹 *Created by Lusifer* 🧙 \n      🔥 *Powered By X-troid*' })

}));

Asena.addCommand({ pattern: 'nroad ?(.*)', fromMe: wk,dontAddCommandList: true }, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.lolhuman.xyz/api/textprome/roadwarning?apikey=ShiroNeko&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image,{ quoted: message.data }, { mimetype: Mimetype.jpg, caption: '🦹 *Created by Lusifer* 🧙 \n      🔥 *Powered By X-troid*' })

}));

Asena.addCommand({ pattern: 'ntoxic ?(.*)', fromMe: wk,dontAddCommandList: true }, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.lolhuman.xyz/api/textprome/toxic?apikey=ShiroNeko&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image,{ quoted: message.data }, { mimetype: Mimetype.jpg, caption: '🦹 *Created by Lusifer* 🧙 \n      🔥 *Powered By X-troid*' })

}));

Asena.addCommand({ pattern: 'ncloud ?(.*)', fromMe: wk,dontAddCommandList: true }, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.lolhuman.xyz/api/textprome/cloud?apikey=ShiroNeko&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image,{ quoted: message.data }, { mimetype: Mimetype.jpg, caption: '🦹 *Created by Lusifer* 🧙 \n      🔥 *Powered By X-troid*' })

}));

Asena.addCommand({ pattern: 'ndark ?(.*)', fromMe: wk,dontAddCommandList: true }, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.lolhuman.xyz/api/textprome/metaldark?apikey=ShiroNeko&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image,{ quoted: message.data }, { mimetype: Mimetype.jpg, caption: '🦹 *Created by Lusifer* 🧙 \n      🔥 *Powered By X-troid*' })

}));

Asena.addCommand({ pattern: 'nleaf ?(.*)', fromMe: wk,dontAddCommandList: true }, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.lolhuman.xyz/api/photooxy1/fallleaves?apikey=ShiroNeko&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image,{ quoted: message.data }, { mimetype: Mimetype.jpg, caption: '🦹 *Created by Lusifer* 🧙 \n      🔥 *Powered By X-troid*' })

}));

Asena.addCommand({ pattern: 'navo ?(.*)', fromMe: wk,dontAddCommandList: true }, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.lolhuman.xyz/api/ephoto1/aovwall?apikey=ShiroNeko&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image,{ quoted: message.data }, { mimetype: Mimetype.jpg, caption: '🦹 *Created by Lusifer* 🧙 \n      🔥 *Powered By X-troid*' })

}));

Asena.addCommand({ pattern: 'nsnow ?(.*)', fromMe: wk,dontAddCommandList: true }, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.lolhuman.xyz/api/ephoto1/snow3d?apikey=ShiroNeko&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image,{ quoted: message.data }, { mimetype: Mimetype.jpg, caption: '🦹 *Created by Lusifer* 🧙 \n      🔥 *Powered By X-troid*' })

}));

Asena.addCommand({ pattern: 'ngalaxy ?(.*)', fromMe: wk,dontAddCommandList: true }, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.lolhuman.xyz/api/ephoto1/galaxystyle?apikey=ShiroNeko&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image,{ quoted: message.data }, { mimetype: Mimetype.jpg, caption: '🦹 *Created by Lusifer* 🧙 \n      🔥 *Powered By X-troid*' })

}));
