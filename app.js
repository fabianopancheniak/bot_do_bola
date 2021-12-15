const Telegraf = require('telegraf')
const Extra = require('telegraf')
const Markup = require('telegraf/markup')
const Scene = require('telegraf')
const env = require('./dotenv')


const bot = new Telegraf(env.token)

    bot.start(async ctx => {
        const from = ctx.update.message.from

    
    //gambiarra bem feia pq o OR e o AND funcionava vez sim vez nao
    if(from.id = '1351450134'){
        ctx.reply(`Fala galera! Meu nome é Marcos Chiesa e essas são as cinco dicas de como criar um bot de telegram\n 
        Bot ouve as palavras: Zé, foto e o emoji 😡\n
        Bot tem funções de: Responder texto, localização, contato, comando de voz, foto, sticker, e /falafiote\n
        Bot não atende a listas, comandos de grupo, wizards, scenes e stages`)
        await ctx.reply(`Qual foi o seu quadro preferido do boleta?`,
        Markup.keyboard(['5 maneiras','O impostor']).resize().oneTime().extra())
    }
    else if(from.id = '2088126260'){
        ctx.reply(`Fala galera! Meu nome é Marcos Chiesa e essas são as cinco dicas de como criar um bot de telegram\n 
        Bot ouve as palavras: Zé, foto e o emoji 😡\n
        Bot tem funções de: Responder texto, localização, contato, comando de voz, foto, sticker, e /falafiote\n
        Bot não atende a listas, comandos de grupo, wizards, scenes e stages`)
        await ctx.reply(`Qual foi o seu quadro preferido do boleta?`,
        Markup.keyboard(['5 maneiras','O impostor']).resize().oneTime().extra())
    } else {
        ctx.reply(`Vaza daqui meu`)
    }
})

bot.hears('O impostor', async ctx => {
    await ctx.reply(`Tá sabendo legal`)  
})

bot.hears('5 maneiras', async ctx => {
    await ctx.reply(`Ah vá, é memo?`)  
})

bot.on('text', async (ctx, next) => {
    await ctx.replyWithHTML(`<b>HÁ HÁ HÁ</b>`)
    next()
})

bot.on('location', async ctx => {
    const loc = ctx.update.message.location
    console.log(loc)
    await ctx.replyWithLocation(-23.562630001459343, -46.65069121182645)  
})

bot.on('contact', ctx => {
    const cont = ctx.update.message.contact
    console.log(cont)
    ctx.reply(`Liga a cobrar pra ele meu`)
})

bot.command('falafiote', ctx => {
    ctx.reply('/falafiote: Fala fiote, cê ta bão?')
})

bot.on('voice', async ctx => {
    const voz = ctx.update.message.voice
    console.log(voz)
    await ctx.replyWithMarkdown(' ```DIGITAANIMAL```')
})

bot.on('photo', ctx => {
    const foto = ctx.update.message.photo
        ctx.reply(`Boa milhaça`)        
})

bot.on('sticker', async ctx => {
    const stic = ctx.update.message.sticker
    console.log(stic)
    await ctx.replyWithPhoto('http://www.museudatv.com.br/wp-content/uploads/2017/03/marcos-chiesa.jpg',{caption: 'Há há, show de bola!'})
})

bot.hears(['Zé'], ctx => {
    ctx.reply('Parabéns, Zé! HÁ HÁ HÁ HÁ!\n Vai ser pai de novo HÁ HÁ HÁ')
})

bot.hears('😡', ctx => {
    ctx.reply('Bicho tá seco, tá grosso, véio!')
})

bot.hears('foto', ctx =>{
    console.log(ctx.from)
    let animalMessage = `Escolha uma imagem do bola`
    bot.telegram.sendMessage(
        ctx.chat.id,
        animalMessage,
        {
            reply_markup:{
                inline_keyboard:[
                    [
                        {   
                            text: "Rindo",
                            callback_data: 'bolaRindo'
                        },
                        {   
                            text: "Sério",
                            callback_data: 'bolaSerio'
                        }
                        
                    ],
                ]
            }
        }
    )
})

bot.action('bolaRindo', ctx =>{
    bot.telegram.sendPhoto(
        ctx.chat.id,
        {
            source: "res/bola.jpg"
        }
    )
})

bot.action('bolaSerio', ctx =>{
    bot.telegram.sendPhoto(
        ctx.chat.id,
        {
            source: "res/bolaSerio.jpg"
        }
    )
})

bot.startPolling()