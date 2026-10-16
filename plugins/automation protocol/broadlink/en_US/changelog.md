# Broadlink Changelog

>**IMPORTANT**
>
>If there is no information about the update, it means that the update only involves documentation, translations, or text.

# 17/10/2026

- Bug fixes
- Jeedom v4.5 required

# 28/02/2025

- Fix memory leak on daemon
- Fixed a dependency installation issue that could occur on some installations
- Removal of **the installation** of 2 dependencies (`pycrypto` & `asn1crypto`) that are no longer needed for the plugin
- Interface modernization
- Debian 11 required
- Debian 12 Compatibility
- Jeedom v4.4.8 required

# 30/09/2022

- Fixed the installation of dependencies on Jeedom v4.2

# 05/03/2021

- Update of the dependencies script following the cryptography change

# 15/01/2021

- Fixed a problem with buster dependencies

# 23/11/2020

- Managing dependencies for certain installations corrupted by third-party cryptography libraries in Python 3 *(reinstall the dependencies if you encounter a problem)*

# 20/11/2020

- General optimizations
- New presentation of the list of objects
- Added the "V4 Compatibility" tag

# 31/07/2020

- Migration to Python 3 *(you'll probably need to reinstall the dependencies)*
- Added support for the RM4 *(see the documentation for specific details)*
- Added an advanced two-step RF learning process: one step to vary the frequencies and find the correct one, and another to learn it. This will improve learning compatibility.

# 11/09/2019

- Adaptation for jeedom v4

# 09/05/2018

- Addition of the image of SC1

# 10/03/2018

- Force yes on dependencies
