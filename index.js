const { Client, Intents } = require('discord.js')
const client = new Client({ intents: Object.keys(Intents.FLAGS) })
const config = require('./config.json');

client.on('ready', () => {
  console.log(`${client.user.tag} でログインしています。`)
})


client.on('messageCreate', async msg => {
  if (msg.content === '死にたい') {
    setTimeout( function() {
      msg.channel.send('生きてるだけで偉いんだから生きろ')
      setTimeout( function() {
        msg.channel.send('本当はね、苦しいはずなんだよ今')
          setTimeout( function() {
            msg.channel.send('でも、生きてる')
            setTimeout( function() {
              msg.channel.send('頑張らなくてもいいから')
                setTimeout( function() {
                  msg.channel.send('困った時は俺に相談してこい')
                }, 4000 );
            }, 3000 );
          }, 2000 );
      }, 6000 );
  }, 20000 );
  } 
})

client.on('messageCreate', async msg => {
  if (msg.content === 'ありがとう') {
    setTimeout( function() {
      msg.channel.send('またいつでも話してこい')
    }, 5000 );
  }
})

client.on('messageCreate', async msg => {
  if (msg.content === '助けて') {
    setTimeout( function() {
      msg.channel.send('どうした？')
    }, 5000 );
  }
})

client.on('messageCreate', async msg => {
  if (msg.content === 'もう無理') {
    setTimeout( function() {
      msg.channel.send('お前ならできる、頑張れ')
    }, 5000 );
  }
})

client.on('messageCreate', async msg => {
  if (msg.content === '疲れた') {
    setTimeout( function() {
      msg.channel.send('そんな時は温泉に行こう')
    }, 5000 );
  }
})

client.login(config.token)