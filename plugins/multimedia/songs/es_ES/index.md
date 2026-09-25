# Plugin de sonido

Este complemento permite interceptar ciertas solicitudes de TTS (pasando por el Tedom Jeedom y solo este) y reemplazarlo con el sonido de su elección.

# Configuration

Este complemento no requiere ninguna configuración particular.

# Añadiendo sonido

Solo tienes que en Complementos → Multimedia → Sonidos para hacer clic **Añadir** después :

- **Nombre del sonido** : nombre de sonido para una fácil recuperación.
- **Identificación* : identificador de sonido, es recomendable poner solo letras o números aquí. Este identificador debe usarse en la solicitud TTS.
- **Suena** : Envíe el sonido para reproducir (la extensión del archivo debe estar en ``mp3``, 50 MB máximo).

# Utilisation

Una vez que se agrega su sonido, puede poner el mensaje TTS ``#id#`` *(id siendo el identificador del sonido creado previamente)*.
