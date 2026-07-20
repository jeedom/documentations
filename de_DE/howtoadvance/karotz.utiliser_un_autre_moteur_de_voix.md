# Karotz benutzt eine andere Sprachmaschine

# Stellen Sie eine Verbindung zu Telnet her

Sie müssen zuerst eine Verbindung zu Telnet (Port 23) auf openkarotz herstellen, wobei die Kennung kartoz ist

# Hinzufügen einer Voice Engine

Weiter ``/www/cgi-bin/`` und bearbeiten Sie die Datei ``tts.inc``, füge eine Funktion hinzu (Beispiel für Jeedom) :

````
function jeedomTTS {
   TTS=$1
   MD5FILE=$(echo "$TTS" | md5sum | cut -d ' ' -f 1)
   eval $(echo "curl -A '${UA}' -o $CNF_DATADIR/Tmp/${MD5FILE}.mp3 'http://TODO/core/api/tts.php?apikey=TODO&text=${TTS}'" )  >>/dev/null 2>>/dev/null
   echo $( echo "$RAW_TTS" | UrlDecode)  > $CNF_DATADIR/Tmp/${MD5FILE}.txt
   if [ "$5" != "1" ]; then
        Log "[TTS]"  "Playing sound ${MD5FILE}.mp3"
        PlaySound $CNF_DATADIR/Tmp/${MD5FILE}.mp3
    fi
    if [ "$NOCACHE" == "1" ]; then
        rm -f $CNF_DATADIR/Tmp/${MD5FILE}.mp3   >>/dev/null 2>>/dev/null
        rm -f $CNF_DATADIR/Tmp/${MD5FILE}.txt   >>/dev/null 2>>/dev/null
     else
        Log "[TTS]"  "Storing sound ${MD5FILE}.mp3 to cache"
     fi
   echo ${MD5FILE}
}
````

Bearbeiten Sie dann die tts-Datei und fügen Sie sie hinzu :

``MP3_ID=$(jeedomTTS $TTS $VOICE $NO_CACHE $RAW_VOICE);;``

In dem ``case $TTS_ENGINE in`` bekommen :

````
case $TTS_ENGINE in
           1)  MP3_ID=$(GoogleTTS $TTS $VOICE $NO_CACHE $RAW_VOICE);;
           2)  MP3_ID=$(VioletTTS $TTS $VOICE $NO_CACHE $RAW_VOICE);;
           3)  MP3_ID=$(jeedomTTS $TTS $VOICE $NO_CACHE $RAW_VOICE);;
           *)  MP3_ID=$(AcapelaTTS $TTS $VOICE $NO_CACHE $RAW_VOICE $MUTE);;
esac
````

# Utilisation

Sie müssen nur die URL mit der Zahnradnummer anrufen (hier 3) :

``http://192.168.0.62/cgi-bin/tts?text=coucou%20ca%20va&nocache=0&engine=3``
