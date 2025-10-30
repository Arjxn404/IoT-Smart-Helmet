# IoT-Smart-Helmet
# IoT Smart Helmet with Hazard Detection and Wi-Fi Reporting

## 📘 Project Overview
This project aims to design a next-gen IoT-enabled smart helmet using **Silicon Labs SiWx917 Wi-Fi 6 + BLE SoC**.  
The helmet detects accidents, gas leaks, and high-impact falls, and transmits real-time alerts via Wi-Fi to a cloud dashboard.

## 🧩 Key Features
- Accident / Impact Detection using MPU6050
- Gas Leak Detection using MQ-135
- Temperature & Humidity Monitoring via DHT22
- Wi-Fi Reporting using SiWx917 SoC
- Cloud Logging + Web Dashboard Visualization

## ⚙️ Hardware Setup
| Component | Function |
|------------|-----------|
| SiWx917-DK2605A | Main controller + Wi-Fi |
| MPU6050 | Detect fall / impact |
| MQ-135 | Detect harmful gases |
| DHT22 | Temperature & humidity |
| Li-ion Battery | Power supply |

## 💻 Firmware Logic
```c
// Pseudo-code (concept phase)
setup() {
  initWiFi();
  initSensors();
}
loop() {
  readSensors();
  if (hazardDetected()) {
    sendAlertToCloud();
  }
}
