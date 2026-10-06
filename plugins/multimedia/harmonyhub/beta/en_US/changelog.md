# Harmony Hub Changelog

>**IMPORTANT**
>
>As a reminder, if there is no information about the update, it means that the update only involves changes to the documentation, translations, or text.

# 18/05/2026

- Verifying connectivity between the daemon and the hub when sending commands

# 10/07/2025

- Fixes a crash when the daemon starts up if a hub is misconfigured or unreachable: the daemon will start up with the other hubs if they exist, or will shut down gracefully if no hubs are reachable
- Log customization

# 30/04/2025

- Fixed an issue with issuing commands for certain setups (unknown hub) following the April 28 release

# 28/04/2025

> Caution
> Major plugin overhaul: the plugin has been completely rewritten, including communication with the Harmony hub (now via a daemon)
>
> Requires Jeedom 4.4.8
>
> Compatible with Debian 11 and 12! The plugin is no longer compatible with Debian 10; if you are still running Debian 10, do not install this version.
>
> Legacy devices will be marked as obsolete and will not be migrated. Use the "Replace" tool in the core if you want to easily adapt your scenarios.
>
> See also [this topic on community](https://community.jeedom.com/t/importante-mise-a-jour-pour-debian-11-et-debian-12/129908) for more details

- Complete rewrite of the plugin
- Using the Core Dependency Installation Method
- Changed the library to communicate with the Harmony hub to use a library with better tracking
- Using a daemon to:
  - to improve the responsiveness of actions
  - to have real-time status feedback
- Simplified setup: All you need to do is enter the hub’s IP address in the plugin’s settings and start the daemon, and the devices will sync with Jeedom automatically.
- Added a **Start Activity** command that indicates which activity is being started (empty if none)
- Lock the version of a dependency to prevent a breaking change (async-timeout v5 breaks the timeout context)

# 17/09/2023

- Fix Debian 11 & Python 3 compatibility
- Minimum required core version: v4.2

# 19/10/2022

- Updated list of commands for Jeedom v4.3
- Minor fixes & optimizations in the equipment management screen

# 18/05/2021

- Correction of a malfunction of some controls
- Interface review
- Documentation review

# 20/11/2020

- General optimizations
- New presentation of the list of objects
- Added the "V4 Compatibility" tag

# 20-09-2019

- V4 adaptation

# 07-06-2019

- Bugfix on NOK dependencies while OK

# 23-05-2019

- Installation of the equipment page for future Jeedom

# 19-02-2019

This update is a major update related to the Logitech update that re-enables XMMP. You will need to recreate the configuration file and, most importantly, enable developer mode in the Harmony app to activate XMMP.
For your information, this update was released on the same day as Logitech’s fix. Just like the workaround from December 21, 2018, which helped many people resolve their issues since it worked for everyone running Debian Stretch (better than nothing). We didn’t know when Logitech would restore support for XMMP. But one thing led to another, and there was a response.

# 21-12-2018

Urgent fix related to the Logitech update (temporary workaround—remember to re-run the dependencies)
