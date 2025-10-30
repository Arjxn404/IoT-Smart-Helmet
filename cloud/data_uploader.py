import json
import time
import requests

# Simulated data
data = {
    "helmet_id": "HLT_01",
    "gas_level": 145,
    "impact_force": 2.8,
    "temperature": 33.2,
    "status": "SAFE"
}

print("Simulating cloud upload...")

try:
    # Replace with your Firebase endpoint or server URL
    url = "https://your-cloud-endpoint.com/upload"
    response = requests.post(url, json=data)
    print("Data sent successfully!" if response.ok else "Failed to send data.")
except Exception as e:
    print("Upload failed:", e)

