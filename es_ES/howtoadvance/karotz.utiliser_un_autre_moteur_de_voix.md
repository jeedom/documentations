Conectarse a Telnet 
======================

Primero debe conectarse a telnet (puerto 23) en openkarotz,
el identificador es kartoz

Agregar un motor de voz 
=========================

Vaya a / www / cgi-bin / y edite el archivo tts.inc, agregue un
función (ejemplo para Jeedom) :

    función jeedomTTS {
       TTS=$1
       MD5FILE = $ (echo "$ TTS" | md5sum | cortar -d '' -f 1)
       eval $ (echo "curl -A '$ {UA}' -o $ CNF_DATADIR / Tmp / $ {MD5FILE}.mp3 'http://TODO/core/api/tts.php?apikey = TODO & text = $ {TTS} '") >> / dev / null 2 >> / dev / null
       echo $ (echo "$ RAW_TTS" | UrlDecode)> $ CNF_DATADIR / Tmp / $ {MD5FILE} .txt
       si ["$ 5" != "1 "]; entonces
            Registro "[TTS]" "Reproducción de sonido $ {MD5FILE} .mp3"
            PlaySound $ CNF_DATADIR / Tmp / $ {MD5FILE} .mp3
        fi
        si ["$ NOCACHE" == "1"]; entonces
            rm -f $ CNF_DATADIR / Tmp / $ {MD5FILE}.mp3 >> / dev / null 2 >> / dev / null
            rm -f $ CNF_DATADIR / Tmp / $ {MD5FILE}.txt >> / dev / null 2 >> / dev / null
         else
            Registro "[TTS]" "Almacenamiento de sonido $ {MD5FILE}.mp3 a caché"
         fi
       echo $ {MD5FILE}
    }

Luego edite el archivo tts y agregue :

    3) MP3_ID = $ (jeedomTTS $ TTS $ VOICE $ NO_CACHE $ RAW_VOICE) ;;

En el "cuadro \ $ TTS\_ENGINE in" para tener :

     box $ TTS_ENGINE en
                 1) MP3_ID = $ (GoogleTTS $ TTS $ VOICE $ NO_CACHE $ RAW_VOICE) ;;
                 2) MP3_ID = $ (VioletTTS $ TTS $ VOICE $ NO_CACHE $ RAW_VOICE) ;;
                 3) MP3_ID = $ (jeedomTTS $ TTS $ VOICE $ NO_CACHE $ RAW_VOICE) ;;
                 *) MP3_ID = $ (AcapelaTTS $ TTS $ VOICE $ NO_CACHE $ RAW_VOICE $ MUTE) ;;
    esac

Uso 
===========

Solo necesita llamar a la url que proporciona el número de engranaje (aquí 3) :

    http://192.168.0.62/cgi-bin/tts?text=coucou%20ca%20va&nocache=0&engine=3
