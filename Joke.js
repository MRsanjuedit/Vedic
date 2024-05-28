const { Telegraf } = require('telegram');
const axios = require('axios');
 //sanjujokes_bot
const telegram_tocken = "Telegram - token here from Talluri Keshavardhan Mojesh"
const bot = new Telegraf(telegram_tocken);

bot.start((msg) => {
  msg.reply('Welcome to Joke Bot! Type /joke to get a joke.');
});

bot.command('joke', async (msg) => {
  try {
    const response = await axios.get('https://v2.jokeapi.dev/joke/Any?type=single');
    const joke = response.data.joke || response.data.setup + ' ' + response.data.delivery;
    msg.reply(joke);
  } catch (error) {
    console.error('Error fetching joke:', error.message);
    msg.reply('Sorry, something went wrong. Please try again later.');
  }
});

bot.launch();
