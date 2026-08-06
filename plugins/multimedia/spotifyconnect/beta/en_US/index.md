# Spotify Connect plugin

This plugin allows you to retrieve the status of Spotify Connect players and to control them through Jeedom.

# Configuration

## Plugin configuration

Like any Jeedom plugin, the plugin **Spotify Connect** must be activated after installation. Once activated you must link jeedom with your Spotify account to do this you must go to plugin -> plugin management -> Spotify then click on the button to link with a user account.

### Discovery of readers

Spotify Connect players are automatically discovered when in use. It is therefore sufficient to launch a media playback on the Spotify Connect equipment and to wait 30 seconds to see the player automatically appear in Jeedom.

You can also click on the button **Synchronize the list of readers** to force this discovery.

### Polling frequency

In order to save a maximum of resources, the plugin uses 2 different refresh rates depending on the state of the Spotify Connect equipment :

- **No equipment is playing** : the plugin will query the Spotify servers at the **Refresh rate** standard 20 seconds by default.
- **At least one device is being read** : the plugin will then query the Spotify servers at a higher frequency (**Refresh rate during playback** set to 5 seconds by default).

>**IMPORTANT**
>
>We advise you not to modify these settings at the risk of seeing your Spotify account blocked for several tens of minutes due to a too high polling frequency..

### Linking user accounts

The plugin allows you to connect to 2 separate Spotify Connect accounts.

To do so, all you have to do is check the box to activate the user and then save. Then click on the button **Link to Jeedom** on each user in order to establish the connection between Spotify and Jeedom.

### Special case of Chromecast

It is normally not possible to launch a playback on a Spotify Connect device from the plugin *(this is a limitation of Spotify)* except for equipment of type **Chromecast**.

Spotify does not allow third-party applications to play on a Chromecast device, you must follow this procedure to retrieve the 2 necessary cookies *(with Google Chrome browser)* :

- Appointment [at this address](https://open.spotify.com/) and log in if necessary,
- Press the F12 key on the keyboard then head to the tab **Application** in the window that opened,
- Check that you are in **Storage → Cookies → https://open.spotify.com** in the left menu,
- Search via the field **Search / Filter** while typing ``sp_``,
- Finally retrieve the cookie values ``sp_key`` and ``sp_dc`` and enter them in the fields provided for this purpose in the plugin configuration.

>**IMPORTANT**
>
>This function is neither authorized by Spotify nor documented by Google, so it cannot be officially supported by Jeedom SAS. It works for less than 50% of users (depends on external parameter that we unfortunately cannot define).

>**IMPORTANT**
>
>These cookies are specific to each user. It will therefore be necessary to repeat the operation for each of them by connecting each time to the Spotify account concerned.

## Equipment configuration

Equipments **Spotify Connect** do not have specific parameters except for equipment of the type **Chromecast** who, remember, are the only ones able to control the playback of a media.

For this equipment, it will therefore be necessary to enter their IP address after making sure to have correctly entered the cookies expected in the configuration of the plugin (see paragraph **Special case of Chromecast**).

The equipment has two controls for playing playlists : "play playlist "and" play URI" :

- Play Playlist allows the equipment to play a playlist from your personal library. The order consists of two parts : the title of the desired plalist (place the exact name there without quotation marks) and option (only random is taken into account to play the songs randomly).
- Play Playlist URI allows the equipment to play a playlist, an artist or a song available on Spotify thanks to its URI (a unique code linked to this element). To find it you must on the spotify web interface right click on the desired element (track, artist, playlist ...), select "share", hold ctrl (windows) or Alt (MAC) then "copy Spotify URI". Paste the line obtained in the URI box of the command.

>**IMPORTANT**
>
>Chromecast equipment must be on the same local network as Jeedom.
