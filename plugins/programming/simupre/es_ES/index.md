# Complemento de simulación de presencia

Este complemento le permite simular fácilmente una presencia en la casa cuando está ausente de una manera creíble (tiempo y duración aleatoria de los eventos)

Puedes encontrar [aquí](https://blog.jeedom.com/4266-simulation-de-presence/) un artículo que muestra un ejemplo de configuración del complemento

# Configuración de complementos

Nada especial aquí solo para instalar y activar el complemento

# Configuración de simulaciones

Encontrarás en la primera pestaña toda la configuración de tu equipo :

- Nombre del equipo : nombre de su equipo de simulación,
- Objeto padre : indica el objeto padre al que pertenece el equipo,
- Activar : activa su equipo,
- Visible : hace que su equipo sea visible en el tablero.

Entonces tienes otros dos parámetros para configurar :

- Latitud y longitud de su casa, lo que permite que el complemento calcule localmente las horas de salida y puesta del sol

En la segunda pestaña encontrarás la configuración de las simulaciones :

- tienen un nombre (para encontrarlos más fácilmente)
- una condición de inicio, si la condición es falsa, entonces la simulación no se realizará (si no pone nada, entonces la configuración se iniciará necesariamente). Esta condición se evalúa en el momento de lanzar la simulación (y no en el momento de la programación))
- acciones de entrada : se realizan al iniciar la simulación
- acciones de salida (opcional) : se hacen al final de la simulación
- tiempos de inicio y duraciones :
  - el tiempo de inicio se puede fijar entre 2 terminales (entre 18:30 y 19:30 por ejemplo, el complemento elegirá un tiempo aleatorio entre las dos terminales cada día)
  - la hora de inicio puede ser relativa al amanecer (por ejemplo, desde -20, durante 20 minutos antes hasta 30, durante 30 minutos después, o 6:00 y 30 minutos para tener algo que comienza entre las 6:00 y los 30 minutos después del amanecer)
  - la hora de inicio puede ser relativa a la puesta del sol (por ejemplo, desde -10, durante 10 minutos antes hasta 15, durante 15 minutos después)
- una duración o una hora de finalización
  - si es una duración, solo tiene que poner 20 en mínimo y 40 en máximo para una duración aleatoria entre 20 y 40 minutos
  - para una hora de finalización fija entre las 7:05 p.m. y las 7:35 p.m., debe establecer 19:05 en min y 19:35 máx
- Ensayo : le permite repetir X veces la acción de inicio / finalización durante el período (tenga en cuenta que el período debe ser superior a 2 minutos, no puede hacer 5 repeticiones en una simulación de 5 minutos de duración, por ejemplo). Importante, se recomienda no poner más de 5 en repetición, más allá del sistema puede no ejecutarlos

>**Nota**
>
> El formato de las horas es el siguiente hh:mm, para las 12:30 p.m., así que pon 12:30

>**Nota**
>
> Debes completar todos los campos correctamente, de lo contrario el complemento no podrá calcular tu simulación y hará cualquier cosa.

>**Importante**
>
> El complemento muestra las horas de pronóstico de la simulación para el próximo período (si tiene varias, no verá lo siguiente)

>**Importante**
>
> El complemento funciona en ciclos de 24 horas de 00:00 a 23:59, la programación no puede realizarse en el ciclo actual. En resumen, toda la programación comenzará al día siguiente.
