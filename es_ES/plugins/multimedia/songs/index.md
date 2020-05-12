# Plugin de sonido

Este complemento permite interceptar ciertas solicitudes de TTS (pasando por el Tedom Jeedom y solo este) y reemplazarlo con el sonido de su elección.

# Configuration

Este complemento no requiere ninguna configuración particular.

# Añadiendo sonido

Solo en Complementos -> Multimedia -> Sonidos, haga clic en Agregar y luego :

- Nombre del sonido : nombre de sonido para una fácil recuperación
- Identificación : identificador de sonido, es recomendable poner solo letras o números aquí. Este identificador debe usarse en la solicitud TTS
- Suena : su sonido para reproducir (el archivo debe estar en mp3, 50mo max)

# Utilisation

Una vez que se agrega su sonido para usarlo, debe poner el mensaje TTS #id# (id es el identificador del sonido creado anteriormente)
