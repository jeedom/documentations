# Karotz use another voice engine

# Connect to Telnet

You must first connect to telnet (port 23) on openkarotz, the identifier being kartoz

# Adding a voice engine

Go to ``/www/cgi-bin/`` and edit the file ``tts.inc``, add a function (example for Jeedom) :

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

Then edit the tts file and add :

``MP3_ID=$(jeedomTTS $TTS $VOICE $NO_CACHE $RAW_VOICE);;``

In the ``case $TTS_ENGINE in`` to get :

````
case $TTS_ENGINE in
           1)  MP3_ID=$(GoogleTTS $TTS $VOICE $NO_CACHE $RAW_VOICE);;
           2)  MP3_ID=$(VioletTTS $TTS $VOICE $NO_CACHE $RAW_VOICE);;
           3)  MP3_ID=$(jeedomTTS $TTS $VOICE $NO_CACHE $RAW_VOICE);;
           *)  MP3_ID=$(AcapelaTTS $TTS $VOICE $NO_CACHE $RAW_VOICE $MUTE);;
esac
````

# Utilisation

You just need to call the url giving the gear number (here 3) :

``http://192.168.0.62/cgi-bin/tts?text=coucou%20ca%20va&nocache=0&engine=3``
