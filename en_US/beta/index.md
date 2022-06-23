
## Beta and Alpha testing of Jeedom

### Definition

A Beta Tester is a user who tests versions of software before they are released to all users. Beta testing makes it possible to report errors (functional bug or user interface problems for example) during the development phase. It is therefore an important source of improvement for the project, which can bring fresh ideas and test new features in real conditions. 

### Precautions

Versions **Beta** and **Alpha** Core or plugins are development versions. Although the developers of course take precautions, these versions may include bugs that could render a plugin or the Core completely inoperative. You must therefore be familiar with backup and recovery procedures, etc.

Core development is done on [Github](https://github.com/jeedom/core) on the release **Alpha**. This one therefore has all the future novelties, but also the most bugs. In addition, the developments made on this version are likely to be canceled or postponed. The version **Alpha** then goes back to **Beta**, which is usually *Featured fixed* and is therefore to ensure its stability, while allowing plugin developers to test their future versions.

> **Important**
> The passage in beta (or alpha) of a plugin or the Core is risky and prohibits any access to the official support of the Jeedom team. The developers are however present on [Community](https://community.jeedom.com/) to help in case of problem, without guarantee however.

> **Important**
> It is strongly discouraged to install a beta or alpha on a production Jeedom ! It is essential to test on a Raspberry or a test VM, and the Jeedom team cannot be held responsible for any malfunction.

### Comment

Jeedom Core is Open-Source. Anyone can decide to upgrade their Jeedom from a Stable version to a Beta or Alpha version, with all the necessary precautions mentioned above.

The Core has three main branches on [Github](https://github.com/jeedom/core):

-  **alpha** : V4 alpha branch. Mainly intended for developers for the next version of Jeedom.
-  **beta** : V4 beta version branch. Mainly intended for beta testers, to test before switching to Stable.
-  **V4-stable** : Stable branch of V4.

> **Attention**
> Once again, this manipulation is to be reserved for advanced users with full knowledge of the facts.

> **Attention**
> The *downgrade* version is totally discouraged and can make Jeedom totally inoperative. For example, Beta v4 updater.2 to Stable v4.1 must not be done ! In this case, the best solution is to wait for the future Stable version of the current Beta, then return the Jeedom configuration to the Stable version, and do a manual update. Similarly, a backup of a later version must not be restored to an earlier version (for example backup 4.2 on Core 4.1).

To change version, go to *Settings → System → Configuration*, tab *Updates/Market*. Leave the Update Source at **Default** and choose the version you want.

Then save then go to *Settings → System → Update Center*. Here launch a Core update.

### Feedbacks

The goal of a beta tester is to report the problems encountered during his tests.
These lifts are made on **[Community](https://community.jeedom.com/)** in the section **[beta testers](https://community.jeedom.com/c/salon-des-beta-testeurs/6)**

It is also on this section that a tester can create a subject to propose an improvement.

> Each topic on this section must be identified with the tag of the version in development. For instance : tag v4_2 (an underscore is used because dots are forbidden in tags on Discourse.

This section is not publicly accessible. To access it, you must fill out a form so that the Jeedom team gives [access to your account](https://blog.jeedom.com/jeedom-partenaire-beta-testeur/).

### Core update management

In version **Steady**, each change causes a version change (minor, for example 4.1.xx) which, if you checked **Automatic check for updates**, will cause a message and the appearance of the red dot in the menu bar. These updates are also displayed in *Settings → System → Update Center* manually clicking on *Check for updates*.

In version **Beta** and **Alpha**, the changes are much more frequent (several times a day) and do not cause a version change. They will therefore not appear in the *Update Center*, it is up to the tester to regularly update the Core, preferably before any test phase and before reporting a problem to ensure that it has not already been corrected earlier.

> The team sometimes changes version during development, to mark certain phases. But unlike the Stable version, many changes are made between two versions. Each tester can track commits on branches [Github](https://github.com/jeedom/core).

### Changelog

From the beginning of the development of the version **Alpha**, the team tries to keep the future [Changelog](/fr_FR/core/#VERSION#/changelog). New features may change significantly or be deleted or postponed, so this one is not necessarily up to date and has no reference value.

In version **Steady**, the changelog includes each minor version (4.1.26 -> 4.1.27 etc.). In version **Beta** and **Alpha** the changelog is numbered x.0.0 and therefore does not necessarily correspond to the current minor version. For example, when developing v4.2, the changelog is only rated 4.2.0 while a beta can be in 4.2.7. When passing through **Steady**, the changelog will then take into account each future minor version.

### Ressouces

 [Community Access](https://blog.jeedom.com/jeedom-partenaire-beta-testeur/)
 
Community [beta testers](https://community.jeedom.com/c/salon-des-beta-testeurs/6)

[Doc contribute](/en_US/contribute/)

[Doc Developers](/en_US/dev/)

[Github](https://github.com/jeedom/core)
