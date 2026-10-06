# OCPP Changelog

>**IMPORTANT**
>
>If there is no information about the update, it means that the update only involves documentation, translations, or text.

## 06/10/2026 ***(1.0.0)***

- First stable release
- **Permissions**: various fixes and optimizations related to registration
- **Daemon**: Optimizing the handling of potential communication errors with the gateway

## 05/07/2026 ***(0.9.6)***

- **Transactions**: real-time updates to the list of transactions *(open/close)*

## 04/07/2026 ***(0.9.5)***

- **Permissions**: Optimizing the backup of permission groups and lists

## 03/07/2026 ***(0.9.4)***

- **Transactions**: Added an icon for active transactions *(green = in progress, orange = more than 24 hours ago, red = more than 48 hours ago)*
- **Transactions**: Added an icon for completed transactions that displays the reason for completion when hovered over

## 02/07/2026 ***(0.9.3)***

- **Permissions**: Option to add a human-readable name associated with the ID *(used in the list of transactions and users who can start a load, if provided)*
- **Permissions**: Fixed column sorting
- **Commands**: Automatic update of the list of users who can start a load

## 01/07/2026 ***(0.9.1)***

- **Authorizations**: Usernames are no longer case-sensitive when authorizing a transaction
- **Permissions**: Fixed a potential issue where credentials might be lost during backup
- **Transactions**: Automatic closure of any uncompleted transaction
- **Terminal**: improved management of (re)connection to the central system
- **Terminal**: Optimized handling of replacements with the same identifier

## 05/12/2025 ***(0.8.8)***

- **Transactions**: Added a delete button
- **Events**: Fixed a bug related to the "listeners" in an OCPP transaction
- **Commands**: Improved management of load limits *(A/W)*

## 24/11/2025 ***(0.8.5)***

- **Controls**: Added commands to manage current and/or maximum power during charging *(SmartCharging-compatible terminals only)*
- **Commands**: Added commands to restart the gateway *(software/hardware)*
- **Commands**: Defining the list of users who can start the load
- **Documentation**: writing documentation

## 20/11/2025 ***(0.6.5)***

- **Dependencies**: version update *(OCPP 2.0.0 & WebSockets 15.0.1)*

## 25/06/2025 ***(0.6.2)***

- **Authorizations**: Added a checkbox per identifier to allow simultaneous concurrent transactions
- **Permissions**: Added tooltips
- **Terminal**: Optimization of statuses sent during an authorization request

## 15/04/2025 ***(0.5)***

- **Permissions**: Permission management by groups

## 17/05/2024

- Start of development
