// Simulated data update logic
setInterval(() => {
  const gas = Math.floor(Math.random() * 200);
  const impact = (Math.random() * 3).toFixed(2);
  const temp = (30 + Math.random() * 5).toFixed(1);

  document.getElementById("gas").innerText = gas;
  document.getElementById("impact").innerText = impact;
  document.getElementById("temp").innerText = temp + "°C";

  const statusDiv = document.querySelector(".status");
  if (impact > 2.5 || gas > 180) {
    statusDiv.className = "status alert";
    statusDiv.innerText = "Status: ALERT";
  } else {
    statusDiv.className = "status safe";
    statusDiv.innerText = "Status: SAFE";
  }
}, 2000);
