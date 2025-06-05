import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { AzureOpenAI } from 'openai';
import systemAndExamples from './systemAndExamples.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const client = new AzureOpenAI({
  endpoint: process.env.AZURE_OPENAI_ENDPOINT,
  apiKey: process.env.AZURE_OPENAI_API_KEY,
  apiVersion: process.env.AZURE_OPENAI_API_VERSION,
  deployment: process.env.AZURE_OPENAI_DEPLOYMENT
});

app.post('/api/chat', async (req, res) => {
  const { messages } = req.body;

  const fullPrompt = [...systemAndExamples, ...messages];

  try {
    const result = await client.chat.completions.create({
      messages: fullPrompt,
      max_tokens: 8192,
      temperature: 0.7,
      top_p: 0.95
    });

    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'OpenAI request failed' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});

