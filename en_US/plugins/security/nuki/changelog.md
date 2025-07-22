# Changelog Nuki

>**Important**
>
>As a reminder if there is no information on the update, it means that it only concerns the updating of documentation, translation or text

## 11/18/2024

- Minor optimizations to avoid warnings in the event that a lock cannot be reached (battery failure for example))
- Jeedom version 4.4 required
- Update of the equipment configuration page for Jeedom >= 4.3
- Adding a command *Binary gate state* on the smart lock
- Addition of a plugin config for the request timeout as well as the number of attempts for action commands
- Setting default generic types on commands (only for newly created commands)
- Fix: orders were not created after the first sync, it needed a second sync.

# 07/18/2020

- Support for nuki Opener

# 10/23/2019

- Jeedom V4 support

# 07/30/2018

- Correction of the bug which displayed the equipment page at the bottom when the left banner was unfolded

# 07/03/2018

- Fixed a bug that multiplied locks during sync
- Addition of command for homekit
