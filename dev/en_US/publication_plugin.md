# Publish a plugin on the marketplace

## Prerequisites

- To register as a developer on the marketplace, see [Plugin Development > Developer Account](index#Compte%20développeur),
- Have uploaded your plugin to GitHub *(private or public repository)*.
- Post your plugin on the forum in the [**Developer Expo**, **Plugin Showcase** category](https://community.jeedom.com/c/developpeur-developpeurs/presentation-plugin/20){:target="_blank"}.

>**INFORMATION**
>
>If you are registered as a developer on the marketplace but do not have write access to the Developers' Forum so that you can post a message, you need to submit a support request.

## Plugin Overview

You must have posted a description of your plugin on the forum before submitting a request to upgrade to the stable version.

We recommend writing this presentation as soon as the plugin is first released in beta—or even as soon as it’s functional via a simple GitHub link. There are several advantages to presenting your plugin early:
- to avoid having another developer offer the same plugin,
- Get help with the design,
- to let the Jeedom team know what the plugin is used for and how it is coded,
- compare your ideas and comments with those of other users.

### Presentation Format

It is up to each developer to decide what information to provide; officially, only the following fields are required:
- **Name** and **ID**
- **Feature Description**
- **Programming languages used** *(PHP, JavaScript, Python, Node.js, C, etc.)*
- Does it use a **daemon**? **dependencies**? **cron jobs**? **listeners**?
- Does it have a **control panel** *(dashboard and/or mobile app)*?
- Is it **free** or **paid**?
- **GitHub link** *(unless the repository is private)*
- **Link to documentation** *(if available)*

### Tags

Various tags are available on the forum to help you categorize your plugin:
- **dependance_intall**: installs dependencies
- **daemon**: uses a daemon
- **Node.js** or **Python**: language used by the daemon
- **jsonrpc**: uses Jeedom's JSON-RPC API
- **panel-dash**: generates a dedicated dashboard
- **beta** or **stable**: plugin status
- **Free** or **Paid**: Plugin Pricing

Once the plugin has been marked as stable, a dedicated tag must be assigned to it in the form `plugin-ID_PLUGIN` so you can easily find topics related to it. If this tag hasn't been created for some reason, you can start a thread on the forum or submit a support request.

## Publication

To publish a new plugin, log in to the Market with your developer account, then click the **Market** menu and select **Add**. All that’s left to do is enter the plugin’s details:
- General:
  - Price
  - ID
  - Last Name

- Repository source
  - Token *(allows access to private repositories)*. To create a token, simply go to this [GitHub page](https://github.com/settings/tokens){:target="_blank"}, choose `token classic` or `fine-grained`, `aucune expiration` and check the box `repo`
  - GitHub repository username
  - GitHub repository name

Once you've entered this information, you can click the **VALIDATE** button. If everything is configured correctly, the marketplace should perform an initial synchronization of the plugin. All that's left to do is edit the plugin's details to fill in the various Branches *(be sure to click **VALIDATE** before running a **TEST**)*:
  - **Beta**: `beta` for example
  - **Stable**: `master` for example

>**INFORMATION**
>
>By default, your plugin author name is your Market ID. To change it, go to your Market **Profile** and fill in the **Author** field in the **For Developers** section.

### Synchronization

All plugins are automatically synced with the Market every day starting at 1 a.m. You can also manually sync a specific branch by clicking the **GitHub beta** or **GitHub stable** button on the plugin's Market page.

It is this synchronization step *(daily, automatic, or manual)* that triggers a plugin update alert for users and updates the Market listing.
