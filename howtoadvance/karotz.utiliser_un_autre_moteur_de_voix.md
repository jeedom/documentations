Se connecter en telnet 
======================

Il faut tout d’abord se connecter en telnet (port 23) sur openkarotz,
l’identifiant étant kartoz

Ajout d’un moteur de voix 
=========================

Allez sur /www/cgi-bin/ et editez le fichier tts.inc, ajoutez une
fonction (exemple pour Jeedom) :

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

Editez ensuite le fichier tts et ajoutez :

    3)  MP3_ID=$(jeedomTTS $TTS $VOICE $NO_CACHE $RAW_VOICE);;

Dans le "case \$TTS\_ENGINE in" pour avoir :

     case $TTS_ENGINE in
                 1)  MP3_ID=$(GoogleTTS $TTS $VOICE $NO_CACHE $RAW_VOICE);;
                 2)  MP3_ID=$(VioletTTS $TTS $VOICE $NO_CACHE $RAW_VOICE);;
                 3)  MP3_ID=$(jeedomTTS $TTS $VOICE $NO_CACHE $RAW_VOICE);;
                 *)  MP3_ID=$(AcapelaTTS $TTS $VOICE $NO_CACHE $RAW_VOICE $MUTE);;
    esac

Utilisation 
===========

Il vous suffit d’appller l’url en donnant le numéro d’engin (ici 3) :

    http://192.168.0.62/cgi-bin/tts?text=coucou%20ca%20va&nocache=0&engine=3
