# Nuki plugin

This plugin lets you control Nuki smart locks using the bridge.

## Plugin configuration

After downloading the plugin, simply activate it and then configure the bridge settings.

This information is available in the mobile app when configuring the bridge after enabling API access on it.

![nuki1](../images/nuki1.png)

Next, you need to click the "Configure the bridge" button to tell the bridge the Jeedom address for feedback.

## Equipment configuration

You can access lock synchronization from the Plugins > Security > Nuki menu:

![nuki2](../images/nuki2.png)

> **Note**
>
> Commands are created automatically; there is no need to add them manually.

## Possible values for the *Status* command

|     | **smart lock** | **opener**  | **door sensor** |
|-----|---------------------------|-------------|----------------|
| 0   | Not calibrated | Not calibrated | - |
| 1   | Locked | Online    | Disabled     |
| 2   | Unlock | - | Closed |
| 3   | Unlocked | RTO active | Open |
| 4   | Locking | - | Unknown |
| 5   | Unlocked (latch)    | Open | Calibration |
| 6   | Unlocked (lock n go) | - | - |
| 7   | Unlock (latch)   | Open   | - |
| 16  | - | - | Not calibrated    |
| 240 | - | - | Deleted |
| 253 | - | Start   | - |
| 254 | Motor Locked | - | - |
| 255 | Unknown | Unknown     | - |
