document.getElementById('company-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const companyName = document.getElementById('company-name').value;
    const resultElement = document.getElementById('result');
    
    // 调用 OpenAI API
    const response = await fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+'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'
        },
        body: JSON.stringify({
            prompt: `查询关于 ${companyName} 的信息`,
            max_tokens: 50,
            n: 1,
            stop: null,
            temperature: 0.8
        })
    });

    const data = await response.json();
    const result = data.choices[0].text.trim();
    resultElement.textContent = result;
});
