# Complemento Neato

Este complemento le permite tener la información de estado de su aspiradora NeatoBotvac Connected y controlarla

# Configuration

# Instalación / Creación

Para usar el complemento, debe descargarlo, instalarlo y activarlo como cualquier complemento de Jeedom.

Después de eso, deberá ingresar a su cuenta de Neato

Una vez guardado, tu Neato se detectará automáticamente y se agregará a tu Jeedom

Vaya al menú de complementos / bienestar para encontrarlo.

# Panel de control

    -   Alerta : mensaje si hay un error en curso (cepillo bloqueado, contenedor de polvo lleno, etc.))
    -   Detener : Detener robot
    -   Codigo estado : Código técnico del estado
    -   Iniciar casa ecológica : comenzar la limpieza ecológica
    -   Iniciar turbo house : Iniciar limpieza turbo
    -   En carga : A cargo o no
    -   Estado : Mensaje de estado (listo para limpiar, limpiar, en pausa, etc.))
    -   Pausa : Pausa el robot
    -   Programación : Se usa para averiguar si la programación está en progreso (programación neato)
    -   Refrescar : Actualizar información
    -   Reanudar : reanudar la limpieza (si está en pausa)
    -   Retorno base : volver al inicio (si está en pausa)
    -   En dock : Le permite saber si el robot está en el muelle o no

Todos estos comandos están disponibles a través de escenarios y a través del tablero


## ¿Cómo se actualizan las noticias?

La información se actualiza una vez cada 15 minutos y después de cada acción realizada por Jeedom. Puede actualizarlos a pedido a través del escenario con el comando de actualización, o mediante el guión con las flechas dobles

# Faq

>**Aparece el error "No se pudo encontrar robot_serial para el nombre de proveedor especificado"**
>
> Es necesario en la configuración del complemento (Complementos -> Complementos de gestión) guardar para que vuelva a detectar la aspiradora de su robot

>**El control de limpieza no funciona, el robot sale y vuelve a su base o no respeta los límites (tarjeta)**
>
>En cierto modelo de robot es absolutamente necesario definir un mapa de navegación / plano, encontrará [aquí](https://support.neatorobotics.com/hc/fr/articles/360009513113-Comment-cr%C3%A9er-un-plan-d-%C3%A9tage-) para hacer
