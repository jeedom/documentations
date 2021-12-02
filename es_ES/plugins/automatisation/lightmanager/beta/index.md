# Administrador de luz)

## Description

Este complemento le permite encender o apagar la luz según la presencia de una persona y la luz exterior. Es capaz de gestionar el retraso tras la ausencia de movimiento. También gestiona el concepto de desbarbado para no apagar la luz demasiado pronto si la has encendido manualmente y no hay movimiento.

## Configuration

El complemento no tiene una configuración específica

## Equipement

### General

Aquí es donde se define el nombre del equipo, si está activo o no, la visibilidad...

### Luz

Aquí tienes que dar el comando para encender la luz, apagarla y saber el estado. Este complemento solo funciona con luces que tienen retroalimentación de estado binaria (encendida o apagada)).

### Mouvement

Ahí defines tus detectores de movimiento, puedes tener tantos como quieras.

### Luminosité

Pones tu sensor de luz y el umbral para encender la luz. Es posible poner varios. En este caso, si uno de los detectores cae por debajo del valor umbral, la luz se encenderá durante el movimiento.

>**NOTA**
>
>También puedes pedirle al plugin que recupere el valor mínimo de brillo de los últimos X minutos, ten cuidado en este caso es absolutamente necesario que el control de brillo esté registrado.

### Temporisation

Aquí puedes :

- Establecer el retardo de apagado cuando no hay más movimiento
- Activar o no la desconexión si la luz no está en el estado esperado (alguien la encendió)
- El tiempo antes de que el complemento se haga cargo de la gestión de la luz 

Para los 2 últimos parámetros, el caso es bastante simple : alguien enciende la luz pasa frente al detector y luego se va, después de XX segundos el detector devuelve la información de que no hay nadie allí, luego después de 1 minuto (en mi caso) el plugin debería apagar la luz. Con la desconexión, el complemento no hará nada y esperará 5 minutos antes de reanudar la gestión automática y apagar la luz. </p>
