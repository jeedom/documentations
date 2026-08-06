# Regando)

>****
>
>Este complemento no es "fácil de usar", es complejo de aprender y llevará mucho tiempo lograr un resultado satisfactorio

## Description

El principio del complemento es el siguiente, la necesidad de riego depende de :

- la planta : gestionado con aspersores de caudal variable para equilibrar el riego según las plantas
- el sol que había
- la temperatura que hizo
- la lluvia cayó

Llegamos a una fórmula de porcentaje de riego : ( * Sol + C2 * Temperatura - C3 * Lluvia) + C4. Este es el lado no fácil de usar del complemento porque no puede encontrar los coeficientes por usted, por lo que debe ir allí poco a poco.

Podéis ver [](https://blog.jeedom.com/5529-gestion-de-larrosage/) un ejemplo de uso del complemento.

## Configuration

El complemento no tiene una configuración específica

## Equipement

### General

Aquí es donde se define el nombre del equipo, si está activo o no, la visibilidad...

### Arrosage

Aquí los comandos para empezar a regar, cortarlo y ver el estado.

### Capteurs

Aquí le das el sensor de luz exterior (con el umbral por encima del cual se considera que hace sol), el sensor de temperatura y lluvia (que da la lluvia de las últimas 24 horas).

### Configuration

Aquí tienes : 

- el cron de lanzamiento de riego (que puede ser múltiple)
- la duración básica del riego
- el límite de no riego si llovió más de XX mm
- el límite de riego si la temperatura media no ha superado un determinado umbral
- una condición libre de riego (aquí es donde me baso en el sensor de humedad del suelo)
- un límite de no riego si no ha habido más de XX minutos de sol
- esto es un poco especial : on peut spécifier au plugin « si l'arrosage se fait après une certaine heure, prendre les données sur XX heures au lieu de la journée en cours ». Por ejemplo, esto es útil si regamos por la mañana para poder tomar los datos del día anterior en lugar de los de las 00:00 (lo que no tendría sentido porque no hay demasiado sol por la noche).

Finalmente, viene la parte complicada de los coeficientes. Aquí dos columnas : uno para el cálculo en tiempo normal, y otro para el cálculo si tomamos las últimas XX horas (por lo que el caso en el que se riega por la mañana). Claramente, no tengo muchos consejos que darte sobre esto, realmente es un refinamiento poco a poco.

## Panel

Si activa el panel en la configuración de jeedom, entonces puede tener una página que le brinda el estado actual del equipo que administra el riego, así como un gráfico que le brinda el número de horas de sol, la cantidad de lluvia y el tiempo de riego.

## Widget

Vemos la duración del último riego, el tiempo de insolación, la cantidad de lluvia, el último porcentaje de riego practicado, la siguiente duración estimada del riego y el estado. También puede prohibir el riego del día actual, detener el riego, iniciarlo en modo forzado o iniciarlo según el cálculo en el momento T.