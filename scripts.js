async function fetchCompanyInfo(companyName) {
  const response = await fetch(
    `/api/fetchCompanyInfo?companyName=${encodeURIComponent(companyName)}`
  );
  const data = await response.text();
  return data;
}

document.getElementById("company-form").addEventListener("submit", async function (event) {
  event.preventDefault(); // 阻止表单默认提交行为

  const companyName = document.getElementById("company-name").value;
  const companyInfo = await fetchCompanyInfo(companyName);
  document.getElementById("result").innerText = companyInfo;
});

