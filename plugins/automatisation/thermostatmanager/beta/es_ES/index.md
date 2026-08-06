# Complemento de gestión de termostato

## Description

Este complemento le permite administrar el termostato en una habitación en función de la presencia o ausencia de una persona, el modo (día / noche, por ejemplo) y las ventanas / puertas abiertas (s))

## Configuration

El complemento no tiene una configuración específica

## Equipement

### General

Tienes aquí (excepto el nombre del equipo, activo / inactivo, visible / invisible...) : 

- "No hacer nada automáticamente si" : si alguna vez la casa está en modo verano * o si la casa está en modo ausente (por lo que no hay nadie presente) o si estamos fuera del horario laboral entonces no hay control desde el plugin (dado que la oficina también sirve como dormitorio es más cómodo en noche)
- "Recupera el control después de (min), no te pongas nada para siempre" : le dice al complemento que recupere el control del termostato de la habitación después de 30 minutos si alguien lo ha tocado

### Thermostat

Aquí indicas el comando de acción y estado del termostato

### Mouvement

Aquí definiremos la noción de presencia en una habitación. Esto se hace mediante un simple sensor de presencia pero queríamos evitar el aumento de los setpoints si solo pasamos por la habitación. Entonces tenemos parámetros para especificar qué es una presencia, la temperatura de consigna a configurar y el retraso antes de volver al valor anterior. Por ejemplo, si ha habido presencia más del 70% del tiempo durante los últimos 5 minutos, establezca el punto de ajuste en 20.5 y luego, si no hay nadie allí durante 10 minutos, restablezca el punto de ajuste al valor original

### Ouverture

Aquí indicas tu apertura así como los diferentes parámetros
- tiempo antes del cambio del punto de ajuste durante una apertura
- instrucción para poner
- retraso antes de volver al punto de ajuste anterior después del cierre

### Commande

Aquí solo podrá crear comandos de modo antes del punto de ajuste según el modo