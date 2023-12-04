
## Jeedom beta and alpha test

### Definition

A Beta Tester is a user who tests versions of the software before they are released to all users. Beta testing makes it possible to report errors (functional bug or user interface concerns for example) during the development phase. It is therefore an important source of improvement for the project, which can bring fresh ideas and test the novelties in real conditions. 

### Precautions

The versions **Beta** and **Alpha** Core or plugins are development versions. Even if the developers of course take precautions, these versions may include bugs that could make a plugin or the Core completely inoperative. You must therefore be familiar with backup and recovery procedures, etc.

Core development is done on [Github](https://github.com/jeedom/core) on the version **Alpha**. It therefore has all the future novelties, but also the most bugs. In addition, developments made on this version are likely to be canceled or postponed. The version **Alpha** then goes back to **Beta**, who is usually *Featured fixed* and therefore consists in ensuring its stability, while allowing plugin developers to test their future versions.

> **Important**
> Switching a plugin or Core to beta (or alpha) is risky and prohibits all access to official support from the Jeedom team. The developers are however present on [Community](https://community.jeedom.com/) to help in case of problem, without guarantee however.

> **Important**
> It is strongly recommended not to install a beta or alpha on a production Jeedom ! It is essential to test on a Raspberry or a test VM, and the Jeedom team cannot be held responsible for any malfunction.

### Comment

Jeedom's Core is Open-Source. Anyone can decide to switch their Jeedom from a Stable version to a Beta or Alpha version, with all the necessary precautions mentioned above.

The Core has three main branches on [Github](https://github.com/jeedom/core):

-  **Alpha** : Branch of version V4 alpha. Mainly intended for developers for the following version of Jeedom.
-  **Beta** : Branch of version V4 beta. Mainly intended for beta testers, to test before switching to Stable.
-  **V4-stable** : Stable branch of V4.

> **Warning**
> Once again, this manipulation should be reserved for advanced users with full knowledge of the facts.

> **Warning**
> The *downgrade* version is completely discouraged and may render Jeedom completely inoperative. For example, updater from Beta v4.2 to Stable v4.1 must not be done ! In this case, the best solution is to wait for the future Stable version of the current Beta, then put the Jeedom configuration back in the Stable version, and do a manual update. Likewise, a backup of a later version must not be restored to an earlier version (for example backup 4.2 on Core 4.1).

To change the version, go to *Settings → System → Configuration*, tab *Updates / Market*. Leave Update Source at **Fault** and choose the version you want.

Then save then go to *Settings → System → Update Center*. Here launch an update of the Core.

### Feedbacks

The goal of a beta tester is to report the concerns encountered during his tests.
These lifts are made on **[Community](https://community.jeedom.com/)** in the section **[beta testers](https://community.jeedom.com/c/salon-des-beta-testeurs/6)**

It is also on this section that a tester can create a subject to propose an improvement.

> Each topic on this section must be identified with the tag of the version under development. For example : tag v4_4 (an underscore is used because periods are prohibited in tags on Discourse.

This section is not publicly accessible. To access it, you must fill out a form so that the Jeedom team can give [access to your account](https://blog.jeedom.com/jeedom-partenaire-beta-testeur/).

> Before escalating a problem, update the Core and try to reproduce again. See below.

### Management of Core updates

In version **Stable**, each change causes a change of version (minor, for example 4.1.xx) which, if you have checked **Automatic check for updates**, will cause a message and the appearance of the red dot in the menu bar. These updates are also displayed in *Settings → System → Update Center* by clicking manually on *Check for updates*.

In version **Beta** and **Alpha**, changes are much more frequent (several times a day) and do not cause a version change. They will therefore not appear in the *Update Center*, it is up to the tester to regularly update the Core, preferably before any test phase and before reporting a problem in order to ensure that it has not already been corrected earlier.

> The team sometimes changes version during development, to mark certain phases. But unlike the Stable version, many changes are made between two versions. Each tester can follow commits on branches [Github](https://github.com/jeedom/core).

### Changelog

From the start of version development **Alpha**, the team tries to keep the future [Changelog] up to date (/ fr_FR / core /#VERSION#/ changelog). As new features may change significantly or may be deleted or postponed, it is not necessarily up to date and does not have a reference value.

In version **Stable**, the changelog takes over each minor version (4.1.26 -> 4.1.27 etc). In version **Beta** and **Alpha** the changelog is numbered x.0.0 and therefore does not necessarily correspond to the current minor version. For example, during the development of v4.2, the changelog is only noted 4.2.0 while a beta can be in 4.2.7. When switching to **Stable**, the changelog will then take into account each future minor version.

### Ressouces

 [Community Access](https://blog.jeedom.com/jeedom-partenaire-beta-testeur/)
 
Community [beta testers](https://community.jeedom.com/c/salon-des-beta-testeurs/6)

[Doc contribute](/en_US/contribute/)

[Doc Developers](/en_US/dev/)

[Github](https://github.com/jeedom/core)
