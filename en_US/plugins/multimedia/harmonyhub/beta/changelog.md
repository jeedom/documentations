# Changelog Harmony Hub

>**Important**
>
>As a reminder, if there is no information on the update, it is because it only concerns the update of documentation, translation or text.

> Attention
> Major plugin overhaul: the plugin has been completely rewritten including communication with the Harmony hub (via daemon now))
>
> Requires Jeedom 4.4.8
>
> Compatible with Debian 11 and 12! The plugin is no longer compatible with Debian 10, if you are still on Debian 10, do not install this version.
>
> Old equipment will be marked obsolete and will not be migrated. Use the core's "Replace" tool if you want to easily adapt your scenarios.
>
> See also [this topic on community](https://community.jeedom.com/t/importante-mise-a-jour-pour-debian-11-et-debian-12/129908) for more details

# 11/25/2024

- Fix dependency version to avoid breaking change (async-timeout v5 break timeout context)

# 08/28/2024

- Complete rewrite of the plugin
- Using the Core Dependency Installation Method
- Changed the library to communicate with the Harmony hub to use a library with better tracking
- Using a daemon to:
  - to improve the responsiveness of actions
  - to have real-time status feedback
- Simplified configuration: All that remains is to configure the hub IP address in the plugin configuration and start the daemon and the equipment will synchronize automatically with Jeedom.
- Adding a command **Start activity** which indicates the activity that is currently starting (empty if none)

# 09/17/2023

- Fix Debian 11 & Python 3 compatibility
- minimum core version required: v4.2

# 10/19/2022

- Updated list of commands for Jeedom v4.3
- Minor fixes & optimizations in the equipment management screen

# 05/18/2021

- Correction of a malfunction of some controls
- Interface review
- Documentation review

# 20/11/2020

- General optimizations
- New presentation of the list of objects
- Addition of the tag "V4 compatibility"

# 09-20-2019

- V4 adaptation

# 07-06-2019

- Bugfix on NOK dependencies while OK

# 2019-05-23

- Installation of the equipment page for future Jeedom

# 2019-02-19

This update is a major linked to the update of Logitech which reactivates the XMMP. You will have to recreate the conf file and especially activate in the Harmony application the developer mode activating the XMMP
For information, this shift intervenes the same day as the Logitech patch. Just like the workaround of 21-12-2018 which allowed many people to be repaired since it worked for everyone who was under Debian stretch (better than nothing). We did not know when Logitech was going to release support for XMMP. But blow after blow there was a reaction.

# 2018-12-21

Emergency correction related to the major of Logitech (temporary to troubleshoot, remember to relaunch the dependencies)
