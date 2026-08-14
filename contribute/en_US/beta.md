
# Jeedom Beta Test

A beta tester is a user who tests software versions before they are released to all users. Beta testing helps identify errors that may arise during the development phase *(such as functional bugs or interface issues)*. It is an important source of improvement for the project, providing fresh ideas and allowing new features to be tested under real-world conditions.

## Warnings

Although developers take every possible precaution, versions currently under development may contain bugs that could render a plugin or the core completely inoperable. Similarly, features currently under development may be postponed or even abandoned depending on circumstances. You should therefore be fairly comfortable with Jeedom’s backup and Restoration procedures before embarking on beta testing.

As noted above, switching Jeedom or a plugin to a version currently under development carries risks. Therefore, **it is strongly recommended that you do this on a test installation set up for this purpose *([a virtual machine](/installation/vm) for example)* rather than on a Jeedom in production**.

>**IMPORTANT**
>
>The Jeedom team cannot be held responsible for any malfunctions that occur as a result of installing a version other than the stable release. In this case, **access to official support is not available**, so you must [submit a report](#Faire%20une%20remontée).

## Branches

Jeedom is open-source software whose development can be tracked in real time at [GitHub](https://github.com/jeedom/core){:target="_blank"}. Each branch corresponds to different stages of development.

### Main Branches

-  **develop**: Version currently under development, with regular updates *(continuous integration)*.
-  **release**: The next version will be deployed a few days before it becomes stable so it can be tested in real-world conditions and quickly fixed if necessary.
-  **master**: Stable version of Jeedom *(default branch including official support)*.

>**INFORMATION**
>
>Although there are over a hundred beta testers registered on the forum, we have received very little feedback regarding the ongoing developments *(branch `develop`)*. Whether due to a lack of time or doubts about their technical knowledge, those who still wish to contribute to Jeedom’s development can test the branch `release` *(already largely stabilized)* before it is made available as a stable release to all users.

### Secondary Branches

Branches are independent, one-off developments intended to be integrated into a main branch.

-  **feat/xxxxx-yyyyy**: New feature available for testing before its rollout in `develop`.
-  **fix/xxxxx-yyyyy**: Non-urgent fix that can be tested a few days before its deployment in `develop`.
-  **hotfix/xxxxx-yyyyy**: Urgent fix quickly deployed across the three main branches.

>**INFORMATION**
>
>`xxxxx-yyyyy` refers to the short subject of the feature or fix in question.

### Change version

Upon reading the [warnings](#Mises%20en%20garde) As explained earlier, it is clear that **this procedure should only be performed by advanced users who fully understand what they are doing**.

To change branches—and thus Jeedom versions—go to the **Settings → System → Configuration** menu, then the **Updates/Market** tab. Leave the update source set to **Default** and select the core version *(branch)* you want to install.

Next, click the **Save** button, then go to the **Settings → System → Update Center** menu. From this page, all you need to do is update the core to switch to the new version.

>**IMPORTANT**
>
>If the core version number changes, we strongly advise against downgrading to an earlier version. Instead, we recommend waiting until the changes are released in a stable version before switching back to it.\
>Regarding the related branches, once the feature or fix has been tested, you must revert to the base version *(`develop` in most cases)*.

## Updates

In `master` *(stable)* or `release`: Each new version results in a change to the version numbering scheme *(x.y.z)*. If the **Automatically check for updates** box is checked, a notification message will appear in Jeedom along with a red dot in the menu bar. Otherwise, go to the **Settings → System → Update Center** menu and click the **Check for updates** button.

Conversely, the other branches do not trigger notifications or alerts in the update center despite regular changes. It is therefore up to the beta tester to update the core manually and regularly—particularly before each testing phase, and especially before submitting any bug reports, to ensure that the issue has not already been fixed.

## Changelog

The **change log** *(or changelog)* provides an overview of the changes made in each version of Jeedom.

Only the versions `master` *(stable)* and `release` *(upcoming stable release)* ensures the presence of a [Detailed and up-to-date changelog](/core/changelog){:target="_blank"}.

In `develop`, since integrations are ongoing, the change log has not yet been generated at this stage. To review the changes made since the last stable release, please refer to the [release notes](https://github.com/jeedom/core/blob/develop/docs/release-notes.md){:target="_blank"} that list the approved *Pull Requests* on this branch.

Since the related branches refer to a specific element, they do not, at first glance, require further details to be understood.

## Plugins

This page focuses primarily on beta testing related to the Jeedom core, but the principle remains essentially the same for plugins. In fact, plugins are made available in a stable version *(branch `master`)* by default, but they also offer versions `beta` for ongoing developments.

To access the plugins in the `beta`, you must check the **Enable access to beta plugins** box in [Your Market Profile](https://market.jeedom.com/index.php?v=d&p=profils){:target="_blank"}. Then simply install or reinstall the plugin in this version.

>**IMPORTANT**
>
>Installing a plugin in version `beta` will result in the loss of all access to official support.

## Submit a report

Beta testers are on the front lines when it comes to identifying bugs, testing new features, or validating fixes before they are released to the stable version.

After thoroughly analyzing the situation, there are several channels available for submitting the most detailed reports possible, complete with all necessary context. Regardless of the channel chosen, the first essential step is to conduct a search to ensure that the topic hasn’t already been addressed, so as to avoid creating duplicate entries.

>**IMPORTANT**
>
>It is crucial to have at least a basic understanding of the subject on your own without relying entirely on the analysis provided by artificial intelligence. However, artificial intelligence can still be useful for formatting the report or for adding *(verified)* supplementary information.

### Jeedom Forum

Feedback can be submitted directly in [The Jeedom Forum Beta Testers' Lounge](https://community.jeedom.com/c/salon-des-beta-testeurs/6){:target="_blank"}.

Select the section that matches the category of the post, then add tags related to the topic *(`v4_5` for example)*. All that's left is to write your report, including as much information as possible so that anyone outside the situation can understand, reproduce, and analyze it.

>**INFORMATION**
>
>The beta testers' lounge also features [a **Suggestions** section](https://community.jeedom.com/c/salon-des-beta-testeurs/suggestion/29){:target="_blank"} to suggest improvements.

### GitHub Issue

If, after searching, an *issue* or a *pull request* is already open on the same topic, you may add your analysis to it, provided that it contributes relevant information to the development in question.

Otherwise, you can open [a *release* on GitHub](https://github.com/jeedom/core/issues){:target="_blank"} providing a comprehensive description of the malfunction encountered.

>**INFORMATION**
>
>English is the standard on GitHub so that everyone can understand the topic, but we accept texts written in French.

## Contribute to development

Whether it's to correct a simple spelling or syntax error, or even to suggest a more significant change, everyone can contribute to the development and evolution of the Jeedom solution at their own level.

### Documentation

The documentation pages you are currently viewing require regular updates and revisions to remain valid and reliable. We greatly appreciate the community's assistance in this regard.

There are a few specific considerations to keep in mind before proposing changes to the documentation. It is therefore essential to familiarize yourself with best practices for [contribute to the documentation](/contribute/doc) first and foremost.

### Core and Plugins

Like the documentation, the Jeedom core and most plugins are also open to external contributions. Please refer to the page ["Contribute to the core or to plugins"](/contribute/core) Learn more.
