Plugin allowing to connect a Bluetooth speaker to your Jeedom. The
plugin also allows you to control the volume of your speaker via the
pulseaudio package.

Description : 
=============

This plugin allows the management of the PulseAudio service. This service manages everything
with regard to the audio and microphone inputs and outputs, as the outputs
either wired, via bluetooth or on the network.

It also makes the PulseAudio service visible on your network
internal, you can then control it from a PC running
GNU / Linux and get the music playing on your PC to be
sent on Jeedom sound output.

This plugin also allows the addition of Bluetooth speakers to the service
Jeedom PulseAudio and offers it as standard output. So, via
Jeedom and this PulseAudio plugin you can run Deezer on your PC
under GNU / Linux (or Windows with the compatible PulseAudio client) and
get the sound sent to the bluetooth speakers
connected to Jeedom as well as to the sound output (HDMI / Jack) of Jeedom
to complete with an amp.

This simultaneous mode will arrive soon with the possibility of setting
latency, avoiding the lag between sound outputs
HDMI / Jack / Bluetooth, perfect for evening mode to the faith on the
terrace with Bluetooth speakers and in the room with the amplifier !

Setup 
=============

Plugin installation 
----------------------

After downloading the plugin, you will simply need to activate the
plugin :

![image](index_html_6e0dcff06783d142.png)

Start the installation of dependencies:

![image](index_html_ee255917648caafe.png)

Installation may take time

![image](index_html_8f5ac294e319722b.png)

Once the dependencies are installed, the date of the last installation
is registered:

![image](index_html_ae07628d0d9cf23c.png)

Allez dans les logs puis vérifiez le log « pulseaudio\_dep » afin de
check for any errors

![image](index_html_1857092a331f01.png)

Plugin configuration 
-----------------------

Back in the configuration of the Pulseaudio plugin, in the section
« Plugin PulseAudio », sélectionner le port de clé Bluetooth :

![image](index_html_a5211f99cfeafe53.png)

Finally, save the changes.

Equipment configuration 
=============================

To access the configuration of PulseAudio equipment, go to
l'onglet « Plugins », « Multimédia » puis « PulseAudio » :

![image](index_html_6144037f2a656556.png)

Cliquez sur « Ajouter » pour ajouter une Bluetooth speaker :

![image](index_html_a952e7310171feda.png)

Add a name to your equipment:

![image](index_html_5a766711e205ad3.png)

Fill in the different fields:

![image](index_html_59ce8e4aed01a0ef.png)

-   **Bluetooth speaker name** : the name of your equipment

-   **Parent object** : indicates the parent object to which belongs
    equipment

-   **Bluetooth key port** : selection of the port of your transmitter
    Bluetooth used for this profile

-   **Category** : equipment categories

-   **Comment** : allows to add a comment

-   **Activate** : makes your equipment active

Click on the pairing assistant:

![image](index_html_b11a463a181fee2c.png)

Cliquez sur le bouton « suivant » :

![image](index_html_74cfef6547af4c77.png)

The wizard scans the Bluetooth devices located around
your Jeedom box:

![image](index_html_fe41bb846a95a14d.png)

Enter the MAC address of your Bluetooth speaker, then click
« suivant » :

![image](index_html_dc20199f96adebcf.png)

The assistant connects your Bluetooth speaker to Jeedom:

![image](index_html_775afe588b6090f6.png)

Une fois terminé, cliquez sur « suivant » .

Enter a service name.

**Be careful** : there should be no spaces or special characters in this name
on duty

Cliquez sur « suivant » une fois terminé :

![image](index_html_d15cbd674d21a3e7.png)

Close the wizard:

![image](index_html_34ceb59a4191f244.png)

The MAC address of your Bluetooth speaker and the name of the associated service
are informed:

![image](index_html_2f0531b2fa9ff325.png)

Activate, then Register equipment:

![image](index_html_b314d3c57bca2c32.png)

FAQ 
===

**How to check the status of my service associated with my enclosure ?.**

Cliquez sur le bouton « Status » :

![image](index_html_44f3633e34fd5c50.png)

Check service status. This must be started with
success (SUCCESS):

![image](index_html_fa551e46a49f58af.png)

**How to test sending a sound file to my speaker ?.**

Cliquez sur le bouton « Tester » :

![image](index_html_bcb212ce18487be2.png)

Playback of a test audio file starts. The sound comes out of your
Bluetooth speaker.

Pour arrêter le test, cliquez sur « Arrêter le test ». The process of
reading is stopped.

![image](index_html_d2e914b1c2572539.png)

**How to adjust the volume of my sound outputs?.**

Go to the configuration of the Pulseaudio plugin, in the section
« Plugin PulseAudio » :

![image](index_html_5ba2b0d4b358e723.png)

**The volume of your speaker can be adjusted. You can also check
the audio outputs to deactivate**

Troubleshoting 
==============

**I have no sound!!!.**

Remember to check all the logs in order to detect a possible problem

![image](index_html_672321a0b40ba4c5.png)
