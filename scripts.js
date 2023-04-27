async function fetchCompanyInfo(companyName) {
    const response = await fetch(`/api/fetchCompanyInfo?companyName=${encodeURIComponent(companyName)}`);
    const data = await response.text();
    return data;
  }
  
  document.getElementById('submit').addEventListener('click', async function() {
    const companyName = document.getElementById('company-name').value;
    const companyInfo = await fetchCompanyInfo(companyName);
    document.getElementById('result').innerText = companyInfo;
  });
