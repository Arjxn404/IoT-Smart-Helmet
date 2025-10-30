#include <stdio.h>
#include <stdbool.h>
void initWiFi() {
    printf("Wi-Fi Initialized.\n");
}
void initSensors() {
    printf("Sensors Initialized.\n");
}
bool hazardDetected() {
    // Placeholder logic
    return false; // change to true to simulate alert
}
void sendAlertToCloud() {
    printf("ALERT: Hazard Detected! Sending data via Wi-Fi...\n");
}
int main() {
    printf("IoT Smart Helmet Starting...\n");
    initWiFi();
    initSensors();

    while (1) {
        if (hazardDetected()) {
            sendAlertToCloud();
        }
        // simulate delay
    }

    return 0;
}
