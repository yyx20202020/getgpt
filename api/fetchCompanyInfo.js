const fetch = require('node-fetch');

module.exports = async (req, res) => {
  const companyName = req.query.companyName;

  const response = await fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer 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`,
    },
    body: JSON.stringify({
      prompt: `Tell me about the company ${companyName}`,
      max_tokens: 50,
      n: 1,
      stop: null,
      temperature: 0.8,
    }),
  });

  const data = await response.json();
  res.status(200).send(data.choices[0].text);
};
