const axios = require('axios');
const readline = require('readline');

//Clave Api
const API_KEY = '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'; // Clave API
// Preparar la consola para leer al usuario
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Preguntar
rl.question('> Ask me something: ', async (question) => {
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: question }]
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${API_KEY}`
        }
      }
    );

    const answer = response.data.choices[0].message.content;
    console.log({ answer: answer.trim() });

  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
  } finally {
    rl.close();
  }
});
