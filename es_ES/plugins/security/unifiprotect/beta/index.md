# Complemento Unifi Protect

## Description

Complemento para conectar Jeedom a Unifi Protect

>**IMPORTANTE**
>
>No hay una API oficial para Unifi protect, el complemento puede dejar de funcionar durante la noche después de una actualización de Unifi protect. Bajo ninguna circunstancia Jeedom puede ser considerado responsable y / o tener el deber de corregir

## Compatibilité

Puedes encontrar [aquí](https://compatibility.jeedom.com/index.php?v=d&p=home&plugin=unifiprotect) la lista de módulos compatibles con el complemento

## Configuración del complemento

Después de instalar el complemento, solo necesita activarlo. Algunos parámetros deben ingresarse en la configuración del complemento :

-   **Controlador de protección Unifi** : Tienes que poner la ruta a tu controlador Unifi (solo la IP en la mayoría de los casos)
-   **Unifi proteger al usuario** : Indique aquí un nombre de usuario local (el usuario puede ser "Administrador Limeted" con "Solo ver" en Unifi Protect) 
-   **Unifi proteger contraseña** : Ingrese la contraseña del usuario aquí
-   **Frecuencia de actualización** : Frecuencia de solicitudes de información al controlador (cuanto menor sea, más recursos consumirá en él, tenga cuidado con las de UDM-Pro)
-   **No recopile eventos** : No recuperas eventos de cámaras (permite consumir menos recursos pero pierdes la detección de movimiento / persona / coche /...)
-   **Encuentra equipos de protección Unifi** : Inicia la sincronización con Unifi Protect

>**IMPORTANTE**
>
>Si tiene el complemento de la cámara instalado, el complemento Unifi Protect creará automáticamente las cámaras en el complemento de la cámara 

## Retroalimentación de información

### Controleur

- Etat
- Uptime
- Ultima vez visto
- SSH activo (conexión SSH posible en el controlador)
- Error de código
- Uso de CPU
- Temperatura de la CPU (si es posible)
- Uso de memoria
- Usando tmpfs
- Uso del disco

### Cámara 

- Conectado
- Etat
- Ultima vez visto
- Grabación (¿la cámara está grabando)
- Último evento
- Fecha del último evento
- Puntuación del último evento (si el evento es un evento inteligente)