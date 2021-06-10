# Complemento Neato

# Description

Este complemento le permite obtener la información de estado de su aspiradora NeatoBotvac Connected y controlarla.

# Configuration

# Instalación / Creación

Para usar el complemento, debe descargarlo, instalarlo y activarlo como cualquier complemento de Jeedom.

Después de eso, deberá ingresar a su cuenta de Neato *(correo electrónico y contraseña)*.

Una vez guardado, su Neato se detectará automáticamente y se agregará a su Jeedom.

Vaya al menú Complementos → Confort para acceder.

# Panel de control

    -   **Alerta** : mensaje si hay un error en curso (cepillo bloqueado, depósito de polvo lleno, etc.)).
    -   **Detener** : Detener robot.
    -   **Codigo estado** : Código técnico del estado.
    -   **Iniciar casa ecológica** : comenzar la limpieza ecológica.
    -   **Iniciar turbo house** : Iniciar limpieza turbo.
    -   **En carga** : A cargo o no.
    -   **Estado** : Mensaje de estado (listo para limpiar, limpiar, en pausa, etc).
    -   **Pausa** : Pausa el robot.
    -   **Programación** : Se usa para averiguar si la programación está en progreso (programación neato).
    -   **Refrescar** : Le permite actualizar la información.
    -   **Reanudar** : reanudar la limpieza *(si está en pausa)*.
    -   **Retorno base** : volver para empezar *(si está en pausa)*.
    -   **En dock** : Le permite saber si el robot está en el muelle o no.

Todos estos comandos están disponibles a través de escenarios y en el tablero.

## ¿Cómo se actualizan las noticias?

La información se actualiza una vez cada 15 minutos y después de cada acción realizada desde Jeedom. Puede actualizarlos a pedido a través del escenario con el comando de actualización, o mediante el tablero de navegación haciendo clic en las flechas dobles.

# FAQ

>**Aparece el error "No se pudo encontrar robot_serial para el nombre de proveedor especificado"** :
>
> Debes hacer clic en el botón "Guardar" en la configuración del plugin (Plugins -> Gestión de plugins) para que relance el procedimiento de detección de tu robot aspirador.

>**El comando de limpieza no funciona, el robot sale y vuelve a su base o no respeta las limitaciones (tarjeta)** :
>
>En algunos modelos de robot es absolutamente necesario definir un mapa / plan de navegación, encontrará la información [aquí](https://support.neatorobotics.com/hc/fr/articles/360009513113-Comment-cr%C3%A9er-un-plan-d-%C3%A9tage-).
