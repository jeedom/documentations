# Importe de los pedidos

Esta documentación recoge las recomendaciones sobre los valores de los comandos (acción o información) en función de los tipos. No es obligatorio seguirlas, pero para una mejor integración con Jeedom se recomienda encarecidamente hacerlo.

## Iluminación

|Tipo genérico  | Valores / Acción |
|---------------|-------------|
|Información/Estado de la iluminación|Es decir, luminosidad<br/>0-100, 0-99 o 0-255<br/>(en función del valor máximo del control deslizante «Acción/Luz»)<br/>o «Soit Binaire»<br/>0 = Apagado<br/> distinto de 0 = Encendido<br/>**Obligatorio**|
|Información/Luz y luminosidad|Luminosidad<br/>0-100, 0-99 o 0-255<br/>(en función del valor máximo del control deslizante «Acción/Luz»)<br/>Utilizar siempre con «Estado de la luz» en el comando binario|
|Control deslizante de acción/iluminación|Regulador de intensidad luminosa<br/>Mín. y máx. Obligatorio|
|Acción/Luz Botón «On»|Encendido de la luz (cambio de estado)|
|Acción/Luz Botón Apagar|Apagar la luz (Cambio de estado)|
|Información/Luz de color|Formato #RRGGBB|
|Acción/Luz de color|Modificación del color, formato #RRGGBB|
|Información/Luz, temperatura, color|Formato Mired (<=500) ou Kelvin (>500)|
|Acción/Iluminación, Temperatura, Color|Modificación de la temperatura de color<br/>Mín. y máx. Obligatorio|
|Acción/Luz: alternar|Invertir el estado si es binario|
|Acción/Modo de iluminación|Preajuste/Escena de iluminación, puede haber varias|

## Enchufe

|Tipo genérico  | Valores / Acción |
|----------------|------------|
|Información/Enchufe<br/>Estado|0 = Apagado<br/>1 = Encendido|
|Acción/Enchufe<br/>Botón «On» | Encender el enchufe |
|Acción/Enchufe<br/>Botón «Off» | Apagar la toma de corriente |

## Interruptores

|Tipo genérico  | Valores / Acción |
|----------------|------------|
|Información/Interruptor<br/>Estado|0 = Apagado<br/>1 = Encendido|
|Acción/Interruptor<br/>Botón «On» | Encender el interruptor |
|Acción/Interruptor<br/>Botón de apagado | Apagar el interruptor |

## Ventilador

|Tipo genérico  | Valores / Acción |
|----------------|------------|
|Información/Ventilador<br/>Estado|0 = Apagado<br/>1 = Encendido<br/>o regulación de intensidad si velocidad|
|Acción/Ventilador<br/>Botón «On» | Encender |
|Acción/Ventilador<br/>Botón de apagado | Apagar |
|Acción/Ventilador<br/>Velocidad<br/>Rotación | Mín. Máx. Obligatorio |

## Persiana

|Tipo genérico  | Valores / Acción |
|---------------|----------------|
|Información/Estado de la persiana|Si binario:<br/>0 = Cerrado<br/>1 = Abierto<br/>Si Numérique:<br/>mín. del control deslizante (si no, mín. del estado; si no, 0) = Cerrado <br/>máximo del control deslizante (si no, máximo del estado; si no, 100) = Abierto<br/>Si no hay botón deslizante: ¡los valores mínimo y máximo son obligatorios en el estado!|
|Acción/Botón «Subir» de la persiana|Apertura de la persiana<br/>Inicio de la apertura o configuración del valor máximo del control deslizante o estado o 100|
|Acción/Persiana: Botón «Bajar»|Cierre de la persiana<br/>Inicio del cierre o establecer el valor mínimo del control deslizante o estado o 0|
|Acción/Persiana: Botón de parada|Detener el movimiento de la persiana|
|Acción/Persiana - Botón deslizante|Indica el porcentaje de apertura de la persiana<br/>Si está presente:<br/>Valores mínimo y máximo obligatorios|

opcional:

|Tipo genérico  | Valores / Acción |
|---------------|----------------|
|Información/Persiana: estado e inclinación horizontal|Ángulo 0->90° (mediante control deslizante)|
|Acción/Persiana deslizante con inclinación horizontal|Ángulo 0->90°<br/>modificable mediante el control deslizante de mínimo-máximo|
|Información/Persiana: estado e inclinación vertical|Ángulo 0->90° (mediante control deslizante)|
|Acción/Persiana deslizante con inclinación vertical|Ángulo 0->90°<br/>modificable mediante el control deslizante de mínimo-máximo|

## Válvulas

|Tipo genérico  | Valores / Acción |
|---------------|----------------|
|Información/Grifo<br/>Estado|0 = Apagado<br/>1 = Encendido|
|Acción/Grifo<br/>Botón «On» | Encender |
|Acción/Grifo<br/>Botón de apagado | Apagar |

|Tipo genérico  | Valores / Acción |
|---------------|----------------|
|Información/Riego<br/>Estado|0 = Apagado<br/>1 = Encendido|
|Acción/Riego<br/>Botón «On» | Encender |
|Acción/Riego<br/>Botón de apagado | Apagar |

|Tipo genérico  | Valores / Acción |
|---------------|----------------|
|Información/Válvula<br/>General<br/>Estado|0 = Apagado<br/>1 = Encendido|
|Acción/Válvula<br/>General<br/>Botón «On» | Encender |
|Acción/Válvula<br/>General<br/>Botón de apagado | Apagar |

¿Añadir un regulador? ¿Y añadir la tecnología digital a la acción? ¿Existe eso?

## Cerraduras

|Tipo genérico  | Valores / Acción |
|---------------|----------------|
|Información/Estado de la cerradura|0 = Sin seguridad (sin cerrar con llave)<br/>1 = Segura (bloqueada)|
|Acción/Cerradura con botón de apertura|Desbloqueo|
|Acción/Cerradura con botón de cierre|Bloqueo|

## Movimiento

|Tipo genérico  | Valores / Acción |
|---------------|----------------|
|Información/Presencia|0 = Sin movimiento<br/>1 = Movimiento|

## Inicio

|Tipo genérico  | Valores / Acción |
|---------------|----------------|
|Información/Puerta<br/>Información/Ventana<br/>(mismo tratamiento)|0 = Contacto (cerrado)<br/>1 = Sin contacto (Abierto)|

## Sirenas

|Tipo genérico  | Valores / Acción |
|---------------|----------------|
|Información/Estado de la sirena|0 = No suena<br/>1 = Suena|

## Alarma

|Tipo genérico  | Valores / Acción |
|---------------|----------------|
|Información/Estado de la alarma|1 = Activada<br/>(prioridad sobre los modos «activado» y demás)|
|Información/Alarma de estado activada|0 = Desactivada<br/>(prioridad sobre los modos)|
|Información/Modo de alarma|Texto que muestra **exactamente** el nombre de un comando de Acción/Modo de alarma|
|Acción/Alarma activada|Activar la alarma|
|Acción/Alarma activada|Desactivar la alarma|
|Modo de acción/alarma|Modo de alarma, puede ser múltiple|

## Termostatos

|Tipo genérico  | Valores / Acción |
|---------------|----------------|
|Información/Estado del termostato (BINARIO)|0 = Apagado<br/>1 = Encendido|
|Información/Estado del termostato (HUMAIN)|«off» o «parado» o «apagado»<br/>«calor» o «calefacción»<br/>«refrigeración» o «aire acondicionado»<br/><br/>Preferir el inglés|
|Información/Modo del termostato|«Off» o «Apagado» = OFF<br/>«Ninguno» o «Termostato» = Modo de consigna<br/>Texto que muestra **exactamente** el nombre de un comando de Acción/Termostato Modo|
|Acción/Modo del termostato|Modo del termostato, puede haber varios|
|Información/Termostato de temperatura exterior|Grados Celsius|
|Información/Termostato Temperatura ambiente|Grados Celsius|
|Información/Punto de consigna del termostato|Valor entre el mínimo y el máximo de la acción/Punto de consigna del termostato|
|Acción/Punto de consigna del termostato|Mín. y máx. obligatorios|
|Información/Bloqueo del termostato|0 = Sin bloquear<br/>1 = Bloqueado|
|Acción/Bloqueo del termostato|Bloquear el termostato|
|Acción/Desbloqueo del termostato|Desbloquear el termostato|

## Portones o garajes

|Tipo genérico  | Valores / Acción |
|---------------|----------------|
|Información/Portal sobre el estado de las aberturas<br/>Información/Garaje: estado de apertura<br/>(mismo tratamiento)|0 = Cerrado<br/>252 = Cierre en curso<br/>253 = Detenido<br/>254 = Apertura en curso<br/>255 = Abierto<br/>(Basado en un equipo Z-Wave, ¿podría ser también binario o con etiqueta?)|

con:

|Tipo genérico  | Valores / Acción |
|---------------|----------------|
|Acción/Puerta o garaje (botón de alternancia)|Interruptor que se enciende si está cerrado y se apaga si está abierto<br/>Se abre si está bloqueado (por seguridad)|

o bien:

|Tipo genérico  | Valores / Acción |
|---------------|----------------|
|Acción/Puerta o garaje: botón de apertura|Apertura|
|Acción/Puerta o garaje: botón de cierre|Cierre|

## Electricidad

|Tipo genérico  | Unidad |
|---------------|----------------|
|Información/Potencia eléctrica|Vatios|
|Información/Consumo eléctrico|kWh|

## Varios

|Tipo genérico  | Valores / Unidad |
|---------------|----------------|
|Información/Presencia y ocupación|0 = Nadie<br/>1 = Alguien|
|Información/Calidad del aire (Índice AQI)|Índice AQI|
|Información/Calidad del aire (Índice personalizable)|ppb o µg/m³|
|Información/Detector de CO|0 = Niveles normales de CO<br/>1 = CO anormal|
|Información/Luminosidad|0 → 100 000 lux|
|Información/Humedad|%|
|Información/CO₂ (ppm)|¿PPM o binario?|
|Información/Temperatura|-50 → 300 °C|
|Información/Batería|%|
|Información/Batería en carga|0 = NO<br/>1 = SÍ<br/>No aparece = No recargable|
|Información/Batería baja|0 = NO<br/>1 = SÍ|
|Información/Detección de humo|0 = No hay humo<br/>1 = Se ha detectado humo|
|Información/Inundación<br/>Información/Fuga de agua|0 = No se ha detectado ninguna fuga<br/>1 = Se ha detectado una fuga|
|Información/Sabotaje|0 = Sin sabotaje<br/>1 = Sabotaje|
|Info/Choque|0 = Sin choque<br/>1 = Choque|
|Información/Presión|bar|
|Información/Sonido (dB)|dB|

## Estado de los dispositivos

|Tipo genérico  | Valores / Acción |
|---------------|----------------|
|Información/Estado: Activo|0 = inactivo<br/>1 = activo|
|Información/Conectividad en línea|0 = sin conexión<br/>1 = en línea|
|Información/Estado: Defectuoso|0 = no<br/>1 = sí|
