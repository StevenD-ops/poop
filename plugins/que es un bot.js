let PhoneNumber = require('awesome-phonenumber')
let levelling = require('../lib/levelling')

let handler = async (m, { conn, usedPrefix }) => {

  let pp = './Bot.jpeg'
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  try {
//    pp = await conn.getProfilePicture(who)
  } catch (e) {

  } finally {
    let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
    let { name, limit, exp, banned, lastclaim, registered, regTime, age, level } = global.DATABASE.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let username = conn.getName(who)
    let str = `
*â::Â¿ðð®ðÌ ðð¬ ð®ð§ ðð¨ð­ ðð ðð¡ðð­ð¬ðð©ð©?::â*

- ðð§ ðð¨ð­ ðð¬ ð®ð§ð ð¢ð§ð­ðð¥ð¢ð ðð§ðð¢ð ðð«ð­ð¢ðð¢ðð¢ðð¥ ðªð®ð ð«ððð¥ð¢ð³ð ð­ðð«ððð¬ ðªð®ð ð¥ð ð¢ð§ðð¢ðªð®ð ðð¨ð§ ðð¨ð¦ðð§ðð¨ð¬, ðð§ ðð¥ ððð¬ð¨ ðð ðð¡ðð­ð¬ðð©ð© ð©ð®ðððð¬ ðð«ððð« ð¬ð­ð¢ðð¤ðð«ð¬, ððð¬ððð«ð ðð« ð¦ð®Ìð¬ð¢ðð, ð¯ð¢ððð¨ð¬, ðð«ððð« ð¥ð¨ð ð¨ð¬ ð©ðð«ð¬ð¨ð§ðð¥ð¢ð³ððð¨ð¬ ð² ð¦ð®ðð¡ð¨ ð¦ðð¬, ðð¬ð­ð¨ ðð ðð¨ð«ð¦ð ðð®ð­ð¨ð¦ðð­ð¢ð³ððð, ð¨ ð¬ðð ðªð®ð ð®ð§ ð¡ð®ð¦ðð§ð¨ ð§ð¨ ð¢ð§ð­ðð«ðð¢ðð«ð ðð§ ðð¥ ð©ð«ð¨ððð¬ð¨ 

- ððð«ð ð¯ðð« ðð¥ ð¦ðð§ð®Ì ðð ðð¨ð¦ðð§ðð¨ð¬ ð©ð®ðððð¬ ð®ð¬ðð« #menu

*_ã Â©Jhusz X-X ÍÍÍÍ   ã_*`.trim()
    let mentionedJid = [who]
    conn.sendFile(m.chat, pp, 'lp.jpeg', str, m, false, { contextInfo: { mentionedJid }})
  }
}
handler.customPrefix = /Â¿QuÃ© es un Bot?|Â¿quÃ© es un Bot?|quÃ© es un Bot|que es un Bot|QuÃ© es un Bot?|Que es un Bot?/i
handler.command = new RegExp

handler.fail = null

module.exports = handler