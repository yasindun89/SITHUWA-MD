const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || '94761516805'  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://SithumKalhara:97531@cluster0.iva7dbo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'Sithumkalhara271@gmail.com'
global.github = 'https://github.com/Sithuwa/SITHUWA-MD'
global.location = 'Sri Lanka'
global.gurl = 'https://instagram.com' // add your username
global.sudo = process.env.SUDO || "94761516805"
global.devs = '94761516805';
global.website = 'https://github.com/Sithuwa/SITHUWA-MD' //wa.me/+94000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/15b1dd8aeaa47888d75d7.jpg'
module.exports = {
  sessionName: process.env.SESSION_ID || "SITHUWA-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0VocERqS2hybUZwL1NxZC80OGNSR2s3SHRaTnJYZ3JwdERTdFZoeXNHUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicDAyYlRVOGpMUisvaHhoZzQ4SWQyUlhWQWFCb2gyKzBQQVZ1Rmo1cTJncz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXRHpmVXcwQnF6d3hoaHdJZ1FaZVN3bHJrenNOREJpMUt2VWw5OXZsMkgwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2a2FlSFFlQlJhTytYUnVHb3YzUFlnWmFySldKWXBUVzdUc1NXSE1SWXlZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBFekYwNTUzTjN6Zjd5NzJkeDVFbm03bU55WER3aksySVFoc1B0aDN5MGM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlUxQmphT1VMQTlmYkRSYWVKYUNlSU5NTUxTNFYrbU15Q3NESnFTSXc4Q1k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0tXTDlHU0pNVEVlSEVwZHpPbTRWMVJQaTNkTG5SdWlyeDBqRXBKY05Waz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYXVCM21xYjlrL2pvVENMRTc0cEV2d05pWnhhQWZJdmovdWdIRlBqOW1RWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZ2SnRscEl6dnpPWUNSNjJYQ2FEUkV6K3lnMjV0YnFrOTFnNzBmUGVUUVk2UU9KOUVWeXlhRDZaWjltV0Nyc0RWYjhTTnY2WHpYR29yVEZEUnUvYkRRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjYsImFkdlNlY3JldEtleSI6InJuNDhKREpkWlQ2aUJpd3RjZ1Z2VWpCanVJUjUyVFZUWkU0bmxCUGs0bzA9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3NzA1MDk3MTFAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiODg1OUM0Njc3RDQ0RkRGQ0E1ODc5MkMxMDk0MDYxMzIifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcwODA1MjY2OX1dLCJuZXh0UHJlS2V5SWQiOjE0OCwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjE0OCwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJSbGg1N1hnZFFQR1VhNHR4bDlZR2xBIiwicGhvbmVJZCI6ImIwMWQ5MGE2LWVmNjUtNGEwYy05ZTNhLTNjNmIxZmRkMDg4ZSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJmYUJiamlXbithU2Y0NnQydkNjTXhpS0lUamc9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5CWkE1d0wyclZXSEpWWDhFVHI4TXBsYmwvWT0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0pyeHFvVUZFTGlodTY0R0dBd2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjBtTlV2VUl2NzNJTjRteUVRN0VpejM4dVlINTdkVUlpUFllQ2xmL3RHVGc9IiwiYWNjb3VudFNpZ25hdHVyZSI6IllLbjliYWhvc1dFSi9XTWxHT3JkZmZzMmJBdzRpckk4c0dhVGtDaWR5KzVDVE9sRC9zenBhaENlQklxNWFDUmI4TFZSS3dGMXVtV3NQMlhaNjV4ekJRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJiWk1pdlBEaTBiMjFlZGdGQ3hUNUVvcDN5aHdhUjFWSmVDTGNmQlN0QlYrVkZMNElkMFRYbVBMTDVkWFV3Q2x1Yk5wcTVyYWtCaFBLZ2N5TXlLd3lBZz09In0sIm1lIjp7ImlkIjoiOTQ3NzA1MDk3MTE6NTlAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoieWFzaW5kdSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc3MDUwOTcxMTo1OUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJkSmpWTDFDTCs5eURlSnNoRU94SXM5L0xtQitlM1ZDSWoySGdwWC83Ums0In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzA4MDU4MTQxLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUZLcSJ9",      //Put Your Session Id Here
  author:  process.env.PACK_AUTHER ||  'SITHUWA BOT',
  packname:  process.env.PACK_NAME || 'MADE BY SITHUM KALHARA',
  
  botname:   process.env.BOT_NAME === undefined ? "SITHUWA-MD" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'sithumkalhara' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? true : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '234' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  caption :process.env.CAPTION || "\t*•ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱɪᴛʜᴜᴡᴀ-ᴍᴅ•* ",   //*『sᴜʙsᴄʀɪʙᴇ • ʙʟᴀᴅᴇ ᴛᴇᴄʜ』*\n youtube.com/@blade444"),	
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'sithuwa-md',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
 
