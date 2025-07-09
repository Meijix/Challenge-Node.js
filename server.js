const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;

//leer JSON
app.use(express.json());

//clave API de OpenAI
const API_KEY = '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'; // Reemplázala si es necesario

// Ruta POST /ask
app.post('/ask', async (req, res) => {
  const userQuestion = req.body.question;

  if (!userQuestion) {
    return res.status(400).json({ error: 'Missing question in body.' });
  }

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: userQuestion }]
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${API_KEY}`
        }
      }
    );

    const answer = response.data.choices[0].message.content.trim();
    res.json({ answer });

  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
    res.status(500).json({ error: 'Error fetching from OpenAI' });
  }
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
