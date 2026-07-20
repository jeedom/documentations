# Karotz usa otro motor de voz

# Conectarse a Telnet

Primero debe conectarse a telnet (puerto 23) en openkarotz, el identificador es kartoz

# Agregar un motor de voz

Seguir ``/www/cgi-bin/`` y edite el archivo ``tts.inc``, agregar una función (ejemplo para Jeedom) :

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

Luego edite el archivo tts y agregue :

``MP3_ID=$(jeedomTTS $TTS $VOICE $NO_CACHE $RAW_VOICE);;``

En el ``case $TTS_ENGINE in`` para tener :

````
case $TTS_ENGINE in
           1)  MP3_ID=$(GoogleTTS $TTS $VOICE $NO_CACHE $RAW_VOICE);;
           2)  MP3_ID=$(VioletTTS $TTS $VOICE $NO_CACHE $RAW_VOICE);;
           3)  MP3_ID=$(jeedomTTS $TTS $VOICE $NO_CACHE $RAW_VOICE);;
           *)  MP3_ID=$(AcapelaTTS $TTS $VOICE $NO_CACHE $RAW_VOICE $MUTE);;
esac
````

# Utilisation

Solo necesita llamar a la url que proporciona el número de engranaje (aquí 3) :

``http://192.168.0.62/cgi-bin/tts?text=coucou%20ca%20va&nocache=0&engine=3``
