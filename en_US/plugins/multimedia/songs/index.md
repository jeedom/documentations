# Sound Plugin

This plugin makes it possible to intercept certain TTS requests (passing through the Tedom jeedom and only this one) and to replace it with the sound of your choice.

# Configuration

This plugin does not require any particular configuration.

# Adding sound

Just in Plugins -> Multimedia -> Sounds click on add then :

- Sound name : sound name for easy retrieval
- Id : sound identifier, it is advisable to put only letters or numbers here. This identifier should be used in the TTS request
- Sounds : your sound to play (the file must be in mp3, 50mo max)

# Utilisation

Once your sound is added, you can put in the TTS message #id# (id being the identifier of the sound created above)
