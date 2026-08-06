# Sound Plugin

Dieses Plugin ermöglicht es, bestimmte TTS-Anfragen (die durch das Tedom Jeedom und nur dieses gehen) abzufangen und durch den Sound Ihrer Wahl zu ersetzen.

# Configuration

Dieses Plugin erfordert keine bestimmte Konfiguration.

# Sound hinzufügen

Sie müssen nur in Plugins → Multimedia → Sounds klicken **Einfügen** dann :

- **Soundname** : Soundname zum einfachen Abrufen.
- **Identifikation* : Tonkennung, es ist ratsam, hier nur Buchstaben oder Zahlen zu setzen. Diese Kennung sollte in der TTS-Anforderung verwendet werden.
- **Klingt** : Senden Sie den Sound zur Wiedergabe (die Dateierweiterung muss in sein ``mp3``, Maximal 50 MB).

# Utilisation

Sobald Ihr Sound hinzugefügt wurde, können Sie die TTS-Nachricht eingeben ``#id#`` *(id ist die Kennung des zuvor erstellten Sounds)*.
