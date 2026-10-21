# Registro de cambios Z-Wave JS

>**IMPORTANTE**
>
>Si no hay información sobre la actualización, es porque esta se refiere únicamente a cambios en la documentación, la traducción o el texto.

# 21/10/2026

**Nuevas configuraciones**

- Se ha añadido la configuración *Neo Coolcam Light Switch 2 Channel (EU-2)* (propiedades: Switch x2)

**Modificaciones de configuración**

- Corrección de la configuración del *sensor de techo PIR Kaipule* (propiedades «Motion» y «Tamper» de Z-Wave JS en lugar de la antigua sintaxis de OpenZWave)
- Corrección de la configuración *Nice IBT4ZWAVE* (archivo no válido no cargado, tipo «Portal»)

# 06/09/2026

- Actualización a la versión *11.21.1* de ZwaveJsUI (estable)
- Actualización a la versión *11.23.0* de ZwaveJsUI (beta)
- Corrección de la visualización de los nombres de los grupos

**Nuevas configuraciones**

- Añadir la configuración del controlador *Home Assistant Connect ZWA-2*
- Se ha añadido la configuración *NeoCoolCam NAS-DS01Z v2* (propiedades: Apertura, Batería)
- Se ha añadido la configuración *NeoCoolCam NAS-PD07Z* (propiedades: movimiento, luminancia, temperatura, humedad, manipulación, batería)
- Incorporación de la configuración *Philio PSE04* (propiedades: temperatura, batería, sabotaje, sonido)
- Se ha añadido la configuración *Shelly Qubino Wave Dimmer* (propiedades: Multinivel, Potencia, Energía, Notificación del sensor de calor, Notificación de sobrecorriente, Notificación de red eléctrica)
- Incorporación de la configuración *Shelly Qubino Wave H&T* (parámetros: temperatura, humedad, batería)
- Se ha añadido la configuración *Shelly Qubino Wave Motion* (propiedades: Movimiento, Luminancia, Batería)
- Incorporación de la configuración *Heatit Z-Water2* (9 relés sin potencial y 2 entradas para sensores de temperatura NTC)
- Se ha añadido la configuración *Zooz ZEN37 800LR Wall Remote* (propiedades: Escena central x4, Batería)

**Modificaciones de configuración**

- Corrección de la configuración del *Fibaro FGCD001* (incorporación del firmware 4098)
- Modificación de la configuración del *Shelly Qubino Wave Door/Window (QNDW-002C)* (adición del comando «Tilt»)
- Corrección de la configuración del *Shelly Qubino Wave Shutter* (se ha añadido el productId 131)
- Modificación de la configuración del *Heatit Z-TEMP3* (incorporación del modo *Energy Heat* al modo del termostato)

# 17/07/2026

- Actualización a la versión *11.19.0* de ZwaveJsUI (estable)
- Actualización a la versión *11.21.1* de ZwaveJsUI (beta)

# 01/06/2026

- Actualización a la versión *11.15.1* de ZwaveJsUI (estable)
- Actualización a la versión *11.19.0* de ZwaveJsUI (beta)

# 31/03/2026

- Actualización a la versión *11.12.0* de ZwaveJsUI (estable)
- Actualización a la versión *11.15.1* de ZwaveJsUI (beta)

# 16/03/2026

- Configuración automática del complemento en los dispositivos oficiales *(Jeedom 4.5.3 mini)*

# 09/03/2026

**Nuevas configuraciones**

- Se ha añadido la configuración *Shelly Qubino Wave Door/Window (QNDW-002C)* (propiedades: Apertura, Luminancia, Dirección, Batería)
- Se ha añadido la configuración *Shelly Qubino Wave Plug (QNPL-0A112)* (propiedades: Interruptor, Potencia, Energía)
- Se ha añadido la configuración *Zooz ZEN58 Low Voltage XS Relay* (propiedades: Interruptor, Potencia, Energía, Tensión, Corriente)

**Modificaciones de configuración**

- Corrección de la configuración del *Aeotec ZWA001* (valor predeterminado del parámetro de temperatura de color)

# 02/03/2026

- Pequeña corrección en la página *Estadísticas*

# 24/02/2026

- Compatibilidad con imágenes personalizadas de los dispositivos *(Jeedom 4.5 mini)*
- Se han añadido las traducciones que faltaban para los mensajes que llegan al centro de notificaciones

# 21/02/2026

- Actualización a la versión *11.12.0* de ZwaveJsUI (beta) *(corrige las alertas «Dead» inoportunas)*

# 11/02/2026

- Actualización a la versión *11.6.1* de ZwaveJsUI (estable)
- Actualización a la versión *11.11.0* de ZwaveJsUI (beta)
- Se ha añadido una opción en la página de configuración del complemento para configurar un puerto de control remoto a través de un socket TCP (útil para controladores como el SLZB-MR1U)

# 04/11/2025

- Actualización a la versión *11.2.1* de ZwaveJsUI (estable)
- Actualización a la versión *11.6.1* de ZwaveJsUI (beta)

# 16/09/2025

- Actualización a la versión *10.5.1* de ZwaveJsUI (estable)
- Actualización a la versión *11.2.1* de ZwaveJsUI (beta)

# 24/06/2025

- Se ha corregido un error que se producía en PHP 8 al crear los comandos que faltaban.

# 10/06/2025

- Actualización de la configuración *Mco Home MH-S412 doble*

# 05/06/2025

**Mejoras**

- Incorporación del procedimiento de integración

**Nuevas configuraciones**

- Se ha añadido la configuración *Shelly Qubino WAVE_PM_MINI - WAVE PM Mini - Relé* (propiedades: Potencia, Energía, Notificación de sobrecorriente, Notificación de sobretensión, Notificación del sensor de calor, Notificación del nivel de alarma, Notificación de la red eléctrica, Indicador)
- Se ha añadido la configuración *Zooz ZAC38 - ZAC38 - Amplificador de señal* (propiedades: Interruptor, Notificación de nivel de alarma, Notificación de red eléctrica, Indicador, Batería)

# 04/06/2025

**Nuevas configuraciones**

- Incorporación de la configuración *Mco Home MH-S411 Simple* (propiedades: Interruptor, Escena, Escena central)
- Se ha añadido la configuración *Remotec ZXT-800* (propiedades: Temperatura del aire, Modo del termostato, Estado de funcionamiento del termostato, Punto de consigna del termostato, Modo del ventilador del termostato, Indicador)
- Se ha añadido la configuración *Shelly Qubino Wave 1PM Mini QMSW-0A1P8* (propiedades: Interruptor, Potencia, Energía, Notificación de red eléctrica, Notificación de sobrecorriente, Notificación del sensor de calor, Notificación de nivel de alarma)
- Se ha añadido la configuración *Shelly Qubino Wave 1 Mini QMSW-0A1X8* (propiedades: Interruptor, Notificación de red eléctrica, Notificación de sensor de calor, Notificación de nivel de alarma)
- Se ha añadido la configuración *Termostato Heatit Z-TEMP3* (propiedades: Temperatura del aire, Humedad, Modo del termostato, Estado de funcionamiento del termostato, Punto de consigna del termostato, Batería, Indicador)
- Se ha añadido la configuración *Zooz ZEN15 - Interruptor de alimentación* (propiedades: Interruptor, Notificación de nivel de alarma, Notificación de estado de alimentación, Escena, Indicador, Tensión, Potencia, Energía, Corriente)
- Se ha añadido la configuración *Zooz ZEN54_LR - Regulador de intensidad 0-10 V* (propiedades: Multinivel, Indicador)
- Se ha añadido la configuración *Zooz ZES11 - ZSE 11 - Q SENSOR* (propiedades: movimiento, temperatura, luminosidad, humedad, batería, notificación de nivel de alarma, notificación de estado de alimentación, notificación de movimiento, notificación de mantenimiento de la batería, indicador)
- Se ha añadido la configuración *Zooz ZES18 - ZSE 18 - SENSOR DE MOVIMIENTO* (propiedades: Movimiento, Batería, Notificación de nivel de alarma, Notificación de estado de alimentación, Notificación de movimiento, Notificación magnética, Indicador)

# 15/11/2024

- Actualización a la versión *9.26.0* de ZwaveJsUI
- Arreglar el método de instalación de dependencia

# 10/11/2024

- Soporte del protocolo mqtts

# 27/09/2024

- Cambio en los requisitos mínimos: core 4.4 y sistema operativo Debian 11

# 26/09/2024

**Mejoras**

- Actualización a la versión *9.20.0* de ZwaveJsUI
- Limpieza de código

**Nuevas configuraciones**

- Incorporación de la configuración *Neo Signal Repeater +* (propiedades: temperatura, humedad)
- Se ha añadido la configuración *Fibaro FGR224* (propiedades: Interruptor, Alimentación, Energía, Notificación de sobrecorriente, Notificación de sobretensión)

**Modificaciones de configuración**

- Modificación de la configuración del *Fibaro Fgrgbwm442* para utilizar las propiedades
- Modificación de la configuración del *Fibaro FGD212*: mejora de las propiedades de notificación

# 20/05/2024

**Mejoras**

- Actualización a la versión *9.12.0* de ZwaveJsUI
- Incorporación y gestión de las dos nuevas llaves de seguridad S2 Long Range

**Nuevas configuraciones**

- Incorporación de la configuración *Neo Signal Repeater* (propiedades: temperatura, humedad)
- Se ha añadido la configuración *Shelly Qubino Wave 1* (propiedades: interruptor, notificación de red eléctrica, notificación de sobrecorriente, notificación del sensor de calor)
- Se ha añadido la configuración *Shelly Qubino Wave 1 PM* (propiedades: Interruptor, Alimentación, Energía, Notificación de red eléctrica, Notificación de sobrecorriente, Notificación del sensor de calor)
- Se ha añadido la configuración *Shelly Qubino Wave Pro 1* (propiedades: Interruptor, Notificación de red eléctrica, Notificación del sensor de calor)
- Se ha añadido la configuración *Shelly Qubino Wave Pro 1 PM* (propiedades: Interruptor, Alimentación, Energía, Notificación de red eléctrica, Notificación de sobrecorriente, Notificación de sobretensión, Notificación del sensor de calor)
- Se ha añadido la configuración *Shelly Qubino Wave 2 PM* (propiedades: Interruptor, Alimentación, Energía, Notificación de red eléctrica, Notificación de sobrecorriente, Notificación del sensor de calor)
- Incorporación de la configuración *Shelly Qubino Wave Pro 2* (propiedades: Interruptor)
- Se ha añadido la configuración *Shelly Qubino Wave Pro 2 PM* (propiedades: Interruptor, Alimentación, Energía, Notificación de sobrecorriente, Notificación de sobretensión)
- Incorporación de la configuración *Shelly Qubino Wave I4* (propiedades: Central Scene)
- Se ha añadido la configuración *Shelly Qubino Wave Shutter* (propiedades: Persiana, Alimentación, Energía, Notificación de red eléctrica, Notificación de sobrecorriente, Notificación del sensor de calor)
- Se ha añadido una subpropiedad *notification-overvoltage* a la propiedad *Notification*

**Modificaciones de configuración**

- Modificación de la configuración del *Neo Plug* para utilizar las propiedades (*atención: algunos modelos tienden a ponerse en modo S2, aunque el fabricante no proporcione ningún DSK; inclúyelos seleccionando «no seguro» en lugar del modo automático*)

# 27/02/2024

**Mejoras**

- Adición de una función adicionalDependancyCheck para el núcleo

**Modificaciones de configuración**

- Modificación de la configuración *MCOhome Mh7h* para utilizar las propiedades

# 26/12/2023

**Mejoras**

- Se ha añadido una opción que permite activar o desactivar el *Soft Reset*
- Actualización a la versión *9.6.2* de ZwaveJsUI

**Nuevas configuraciones**

- Se ha añadido la configuración *HeatIt Z-TRM6* (propiedades: Temperature, ThermostatMode, ThermostatOperatingState, ThermostatModeAction, ThermostatSetpoint, Notification Heat-Sensor, Notification Over-Load)
- Se ha añadido la configuración *Sunricher Remote Control 12 Button* (características: CentralScene x12, batería)

# 11/12/2023

**Mejoras**

- Actualización a la versión *9.5.1* de ZwaveJsUI (para poder elegir un puerto en el formato de ruta necesario en algunas máquinas virtuales, hay que actualizar el núcleo)

**Correcciones**

- Se ha corregido el error de inclusión *S2* en la interfaz de usuario de ZwaveJS tras recibir una notificación (de hecho, las llamadas de retorno no se realizaban a menos que se tuviera una ventana abierta en la interfaz de usuario de ZwaveJS).

**Nuevas configuraciones**

- Se ha añadido la configuración *Shelly Qubino Wave 1PM* (propiedades: Interruptor, Alimentación, Energía, Notificación de red eléctrica, Notificación de sobrecorriente, Notificación del sensor de calor)
- Se ha añadido la configuración *Shelly Qubino Wave 1* (propiedades: Interruptor, Alimentación, Energía, Notificación de red eléctrica, Notificación de sobrecorriente, Notificación del sensor de calor)
- Se ha añadido la configuración *Shelly Qubino Wave Shutter* (propiedades: Persiana, Alimentación, Energía, Notificación de red eléctrica, Notificación de sobrecorriente, Notificación del sensor de calor)
- Se ha añadido la configuración *Shelly Qubino Wave 2PM* (propiedades: Interruptor, Alimentación, Energía, Notificación de red eléctrica, Notificación de sobrecorriente, Notificación del sensor de calor)
- Se ha añadido la configuración *Shelly Qubino Wave 1* (propiedades: Interruptor, Notificación de red eléctrica, Notificación de sobrecorriente, Notificación del sensor de calor)  *No estoy seguro de si hay que añadir «Potencia» y «Energía» (abriré un ticket si el dispositivo debe registrar el consumo, pero no creo que sea necesario)*
- Añadir una propiedad *WindowsCovering*

**Modificaciones de configuración**

- Modificación de la configuración del *Benext Keypad* para utilizar las propiedades (copia del Zipato, pero en la versión de Benext)
- Modificación de la configuración del *MCOhome Mh8FC* para utilizar las propiedades
- Modificación de la configuración del *MCOhome Mh8FC-4* para utilizar las propiedades
- Modificación de la configuración *Qubino ZMNKID - Flush OnOff Thermostat 2* para utilizar las propiedades
- Modificación de la configuración del *Widom Meta Wired Motor* para utilizar la propiedad «Windows Covering»
- Modificación de la configuración del *Wenzhou TZ78*: uso del punto final 0 en lugar del punto final 1 (de acuerdo con las sugerencias de los usuarios)
- Modificación de la imagen *MCOhome Mh8FC* (recorte)
- Modificación de la imagen *MCOhome Mh8FC-4* (recorte)

# 27/10/2023

**Nuevas configuraciones**

- Se ha añadido una subpropiedad *notification-door* a la propiedad *Tilt*

**Modificaciones de configuración**

- Modificación de la configuración del *Aeotec Zwa012* para utilizar las propiedades
- Modificación de una subpropiedad *notification-simple* para la propiedad *Opening*

**Mejoras**

- Actualización a la versión *9.1.2* de ZwaveJsUI

# 11/10/2023

**Correcciones**

- Cambio temporal a la versión *8.26.0* de ZwaveJsUI

# 09/10/2023

**Correcciones**

- Corrección que evita que aparezcan determinados mensajes en el registro *http.error* en algunos casos concretos

**Mejoras**

- Actualización a la versión *9.1.0* de ZwaveJsUI
- Se ha añadido una opción para gestionar las *notificaciones* en el centro de mensajes *de los nodos activos e inactivos*
- Se ha añadido una opción para gestionar las *notificaciones* en el centro de mensajes *de las alarmas no activadas y viceversa*

**Nuevas configuraciones**

- Se ha añadido la configuración *Aeotec ZW187 Recessed Door* (propiedades: Apertura simple, Batería, Notificación de software, Notificación de estado de alimentación)
- Se ha añadido la configuración *Thermofloor Heat It ZM Relay High Power* (propiedades: Interruptor, Potencia, Energía, Notificación del sensor de calor, Notificación de sobrecarga, Escena Centra)
- Se ha añadido una subpropiedad *notification-simple* a la propiedad *Opening*

# 11/09/2023

**Correcciones**

- Corrección de la actualización *OTA* del firmware de un módulo tras un cambio en ZwaveJSUI

**Mejoras**

- Actualización a la versión *8.25.1* de ZwaveJsUI.
- Se ha añadido la posibilidad de realizar una actualización *OTW* de un controlador (si es compatible)
- Se ha añadido una opción para gestionar las *notificaciones* en el centro de mensajes *de los nodos activos e inactivos*
- Se ha añadido una opción para gestionar las *notificaciones* en el centro de mensajes *de las alarmas no activadas y viceversa*

**Nuevas configuraciones**

- Se ha añadido la configuración *Shelly Qubino Wave 1PM* (propiedades: Interruptor, Alimentación, Energía, Notificación de red eléctrica, Notificación de sobrecorriente, Notificación del sensor de calor)
- Se ha añadido la configuración *Shelly Qubino Wave 1* (propiedades: Interruptor, Alimentación, Energía, Notificación de red eléctrica, Notificación de sobrecorriente, Notificación del sensor de calor)
- Se ha añadido una subpropiedad *binary-water* a la propiedad *Flood*
- Se ha añadido una subpropiedad *onlevel-barrier* a la propiedad *Multilevel*

**Modificaciones de configuración**

- Modificación de la configuración *MCOhome Mh8FC*  para utilizar las propiedades
- Modificación de la configuración de la *NeoCoolCam WS02Z* para utilizar las propiedades
- Modificación de la configuración del *Kaipule IM20* para utilizar las propiedades
- Modificación de la configuración *HRT4_SRT321* para aprovechar mejor las propiedades
- Modificación de la configuración del *Benext Plug In Dimmer* para aprovechar mejor sus propiedades
- Modificación de la configuración *Dome On Off Plug In Switch Plug In Dimmer* para aprovechar mejor sus propiedades
- Modificación de la configuración del *Domux Dx2skz* para aprovechar mejor sus propiedades
- Modificación de la configuración de *Swiid Plug* para aprovechar mejor sus propiedades
- Modificación de la configuración del *Everspring SM810* para aprovechar mejor sus propiedades
- Modificación de la configuración del *Zipato PD01z* para aprovechar mejor sus propiedades
- Modificación de la configuración del *Vision Security ZS5101* para aprovechar mejor sus características

# 02/08/2023

**Mejoras**

- Actualización a la versión *8.22.0* de ZwaveJsUI.
- Inclusión de todos los *tty* en la lista de puertos (esto será innecesario con el nuevo núcleo, que permitirá seleccionar un puerto directamente por su ID)
- Incorporación de la última ruta en la página de estadísticas de un nodo (depende del SDK del controlador)
- Incorporación de la última velocidad de transmisión en la página de estadísticas de un nodo (depende del SDK del controlador)
- Se ha añadido la última velocidad de transmisión a la página de estadísticas generales (depende del SDK del controlador)
- Inclusión de la última ruta en la página de estadísticas generales (depende del SDK del controlador)
- Incorporación del último RSSI en la página de estadísticas generales (depende del SDK del controlador)
- Incorporación del último valor RSSI en la página de estadísticas de un nodo (depende del SDK del controlador)
- Se ha añadido un gráfico «Ruta de red» que muestra las últimas rutas recorridas (estará en desarrollo y es posible que no cubra todos los casos, dependiendo del SDK del controlador).
- Añadir un mensaje en el centro de mensajes cuando un nodo pasa a estado «Dead» (además del comando de estado del equipo)
- Añadir un mensaje en el centro de mensajes cuando un nodo pasa a estado «Alive» tras haber estado en estado «Dead» (además del comando de estado del equipo)
- Adición de un mensaje en el centro de mensajes cuando un nodo no se ha despertado después de 4 veces su intervalo de activación

**Nuevas configuraciones**

- Se ha añadido la propiedad *ThermostatFanState*
- Se ha añadido un subcomando *Label State* a la propiedad «Barrier Operator» (para disponer de un comando de etiqueta con texto, además del comando numérico).
- Se ha añadido la configuración *MCOhome Mh8FC* (propiedades: ThermostatMode, ThermostatModeAction, ThermostatSetpoint, ThermostatFanMode, ThermostatFanModeAction, ThermostatOperatingState, ThermostatFanState, Temperature)
- Se ha añadido la configuración *Heltun HE-FT01* (propiedades: ThermostatMode, ThermostatModeAction, ThermostatSetpoint, ThermostatFanMode, ThermostatFanModeAction, ThermostatOperatingState, ThermostatFanState, Temperature, Illuminance, Humidity, Power, Energy)
- Se ha añadido la configuración *MCOhome MH3901* (propiedades: ThermostatMode, ThermostatModeAction, ThermostatSetpoint, ThermostatOperatingState, Temperature)
- Se ha añadido un subcomando *Label State* a la propiedad «Thermostat Operating State» (para disponer de un comando de etiqueta con texto, además del comando numérico).

**Modificaciones de configuración**

- Modificación de la configuración *HRT4_SRT321* para utilizar las propiedades
- Modificación de la configuración del *SRT323* para utilizar las propiedades
- Modificación de la imagen *HRT4_SRT321* (recorte)
- Modificación de la imagen *SRT323* (recorte)
- Modificación de la imagen *SSR303* (recorte)
- Modificación de la imagen *SIR321* (recorte)
- Modificación de la imagen *SES303* (recorte)
- Modificación de la imagen *SES302* (recorte)
- Modificación de la imagen *SCSC17* (recorte)

# 26/06/2023

**Mejoras**

- Actualización a la versión *8.19.0* de ZwaveJsUI.
- Los módulos *FLIRS* ya no se consideran activos en la malla de la red.

**Modificaciones de configuración**

- Modificación de la configuración del *sensor de puerta y ventana Aeotec DSB04100* para utilizar las propiedades
- Modificación de la configuración del *Aeotec DSC10 Heavy Duty Switch* para utilizar las propiedades
- Modificación de la configuración del *Aeotec DSC06106 Smart Energy Switch* para utilizar las propiedades
- Modificación de la configuración del *Aeotec DSC11 Smart Strip* para utilizar las propiedades
- Modificación de la configuración del *Aeotec DSC08101 Smart Energy Illuminator* para utilizar las propiedades
- Modificación de la configuración del *Aeotec DSC014104 Blind Control* para utilizar las propiedades
- Modificación de la configuración del *Aeotec DSC17103 Micro Double Switch* para utilizar las propiedades
- Modificación de la configuración del *Aeotec DSC18103 Micro Switch 2nd* para utilizar las propiedades
- Modificación de la configuración del *Aeotec DSC26103 Micro Switch 2nd* para utilizar las propiedades
- Modificación de la configuración del *Aeotec DSC27103 Micro Dimmer 2nd* para utilizar las propiedades
- Modificación de la configuración de *Benext Panic Watch* para utilizar las propiedades
- Modificación de la configuración del *Benext Panic Button* para utilizar las propiedades
- Modificación de la configuración del *Benext Plug In Dimmer* para utilizar las propiedades
- Modificación de la configuración *Dome On Off Plug In Switch Plug In Dimmer* para utilizar las propiedades
- Modificación de la configuración del *Domux Dx2skz* para utilizar las propiedades
- Modificación de la configuración del *Everspring AD142* para utilizar las propiedades
- Modificación de la configuración del *Everspring AN145* para utilizar las propiedades
- Modificación de la configuración del *Everspring EH403 Led FloodLight* para utilizar las propiedades
- Modificación de la configuración del *Heiman Dx2skz* para utilizar las propiedades
- Modificación de la configuración del *Philio Smart Dimmer E27* para utilizar las propiedades
- Modificación de la configuración de *Philio Pan03* para utilizar las propiedades
- Modificación de la configuración del *Popp Smart Plug* para utilizar las propiedades
- Modificación de la configuración *Popp 009105* para utilizar las propiedades
- Modificación de la configuración de *Schlage On Wall* para utilizar las propiedades
- Modificación de la configuración de *Sigma Power Plug* para utilizar las propiedades
- Modificación de la configuración de *Swiid Plug* para utilizar las propiedades

**Nuevas configuraciones**

- Se ha añadido la configuración *Heat It ZM Dimmer* (propiedades: Multilevel, Power, Energy, CentralScene, Notification)
- Se ha añadido la configuración *Sigma PZ701U* (propiedades: conmutador)
- Se ha añadido la configuración *Neo RC03Z* (propiedades: Central Scene, Battery)
- Se ha añadido una subpropiedad *Heat-Sensor* a la propiedad *Notification*
- Incorporación de la configuración *U-Fairy GR-201N* (propiedades: interruptor)

# 10/04/2023

**Mejoras**

- Las *actualizaciones* ahora pueden durar hasta 100 segundos en lugar de 60
- Actualización a la versión *8.13.1* de ZwaveJsUI.
- Modificación de la función *pollValue* para las propiedades con *value* (gracias, @superbricolo)

**Modificaciones de configuración**

- Modificación de la configuración del *sensor de agua Aeotec ZWA19* para utilizar las propiedades
- Modificación de la configuración del *Aeotec ZWA24 7in1* para utilizar las propiedades
- Modificación de la configuración del *Everspring SM810* para utilizar las propiedades
- Modificación de una propiedad *Velocity*
- Modificación de la imagen *Dlink 510* (recorte)
- Modificación de la imagen *Fibaro Fgs-213* (recorte)

**Nuevas configuraciones**

- Se ha añadido la configuración *Sigma PZ701U* (propiedades: conmutador)
- Se ha añadido la configuración *Neo RC03Z* (propiedades: Central Scene, Battery)
- Se ha añadido una subpropiedad *Heat-Sensor* a la propiedad *Notification*
- Incorporación de la configuración *U-Fairy GR-201N* (propiedades: interruptor)

# 14/02/2023

**Modificaciones de configuración**

- Modificación de la configuración del *Aeotec ZWA24 7in1* para utilizar las propiedades
- Modificación de la configuración del *Everspring SM810* para utilizar las propiedades
- Modificación de la configuración del *Aeotec ZW122* para utilizar las propiedades
- Agrupación de configuraciones *Danfoss Living Connect*
- Modificación de la configuración del *Fibaro FGR-223*: cambio de los puntos finales de potencia y energía
- Modificación de la configuración del *Fibaro FGR-223*: incorporación de notificaciones de fallos de hardware y sobrecorriente
- Modificación de la configuración del *Fibaro FGS213*: cambio al punto final 1 (firmware >=3.3) y adición de notificaciones del sensor de calor y de sobrecorriente
- Modificación de la imagen *Aeotec ZWA24 7 en 1* (recorte)
- Modificación de una propiedad *Velocity*
- Modificación de la imagen *Dlink 510* (recorte)
- Modificación de la imagen *Fibaro Fgs-213* (recorte)
- Modificación de la imagen *Fibaro Fgs-221* (recorte)
- Modificación de la imagen *Fibaro Fgs-223* (recorte)
- Modificación de la imagen *Fibaro Wall Plug* (recorte)
- Modificación de la imagen *Fibaro Wall Plug GEN5* (recorte)

**Nuevas configuraciones**

- Se ha añadido una subpropiedad *Heat-Sensor* a la propiedad *Notification*
- Incorporación de la configuración *U-Fairy GR-201N* (propiedades: interruptor)
- Se ha añadido la configuración *Danfoss Boiler Relay* (propiedades: Interruptor)
- Se ha añadido la configuración *Benext Alarm Sound* (propiedades: Interruptor)

# 24/12/2022

**Modificaciones de configuración**

- Modificación de la configuración del *sensor de puerta Aeotec ZWA008* para utilizar las propiedades
- Modificación de la configuración del *termostato PWM Qubino ZMNHLAX* para utilizar las propiedades
- Modificación de la configuración del *Qubino ZMNHDA2 Dimmer* para utilizar las propiedades
- Modificación de la configuración del *Fibaro FGR-223*: modificación de los puntos finales de *refresh*
- Modificación de la configuración del *Fibaro Fgrgbwm442* para utilizar las propiedades
- Modificación de la configuración del *Fibaro FGD212*: añadir las propiedades de notificación
- Modificación de la configuración del *Qubino ZMNHBA2 Flush 2 Relays* para utilizar las propiedades
- Modificación de la configuración del *Fibaro Walli Switch*: añadir las propiedades de notificación
- Modificación de la configuración del *Dlink Dchz110* para utilizar las propiedades
- Modificación de la configuración de *Domitech Smart Led Light* para utilizar las propiedades
- Modificación de la configuración de *Duwii Switch* para utilizar las propiedades
- Modificación de la configuración del *Everspring AN157* para utilizar las propiedades
- Modificación de la configuración del *Popp Smoke Sensor* para utilizar las propiedades
- Modificación de la configuración del *Duwii Edan 300* para utilizar las propiedades
- Modificación de la imagen *Duwii Dimmer* (recorte)
- Modificación de la imagen *Aeotec ZWA008 Door Sensor* (recorte)
- Modificación de la imagen *Duwii Switch* (recorte)
- Modificación de la imagen *Duwii Edan 300* (recorte)
- Modificación de la imagen *Duwii Blind Control* (recorte)
- Modificación de la imagen *Duwii Remote* (recorte)
- Modificación de la imagen *Duwii Zs3500* (recorte)
- Modificación de la imagen *MCO Zipato p210 dimmer* (recorte)

**Nuevas configuraciones**

- Se ha añadido una subpropiedad *Load-error* a la propiedad *Notification*
- Se ha añadido una subpropiedad *Fibaro-effets2* a la propiedad *Color*

*Si has realizado algún cambio o has añadido alguna configuración, realiza una sincronización y, a continuación, vuelve a cargar los comandos del equipo «recreando todos los comandos» tras la actualización.*

# 22/12/2022

**Mejoras**

- Se ha añadido un motor completo de *Gestión de actualización*, útil para algunos módulos que no reflejan correctamente ciertos cambios tras una acción. No debe utilizarse sin una razón válida. Los archivos de configuración incluirán los elementos necesarios si es preciso.
- Se ha añadido una pestaña *Opciones* en la página de cada dispositivo. Para ver y configurar las opciones de actualización y  cualquier otra opción futura
- Se ha añadido el número de *Actualizaciones* en la página *Salud*

**Modificaciones de configuración**

- Modificación de la configuración de *Qubino Luxy Smart Light* para utilizar las propiedades
- Modificación de la configuración de *Popp RainMeter* para utilizar las propiedades
- Modificación de la configuración del *Fibaro FGR-223*: primera configuración que utiliza el motor de actualización (de hecho, este módulo tiene un error conocido: no transmite las posiciones o las transmite de forma errónea cuando Z-Wave inicia un movimiento). Para recuperar las actualizaciones (ve a «Recargar comandos» y selecciona «Sin recrear comandos»), deberías ver las «actualizaciones» en la pestaña «Opciones».
- Modificación de la configuración del *Fibaro FGR-223*: cambio de los puntos finales de potencia y energía
- Modificación de la configuración del *Fibaro FGR-223*: incorporación de notificaciones de fallos de hardware y sobrecorriente
- Modificación de la configuración del *Fibaro FGR-223*: sustitución de la propiedad «scene» por «centralscene»

**Nuevas configuraciones**

- Se ha añadido la configuración del *Qubino Luxy Smart Switch* (propiedades: Switch, Multilevel, Power, Energy, Color, Notification, NotificationEvent)
- Se ha añadido la imagen *Qubino Luxy Smart Switch*
- Se ha añadido la configuración *Abus Security Center SHSG10000* (propiedades: conmutador, batería)
- Se ha añadido la imagen *Abus Security Center SHSG10000*
- Se ha añadido una subpropiedad *Global* a la propiedad *Rain*
- Se ha añadido una subpropiedad *Basic* a la propiedad *Rain*
- Se ha añadido una subpropiedad *Over-Load* a la propiedad *Notification*
- Añadir una propiedad *Waterconsumption*
- Añadir una propiedad *Notificationevent*

*Si has realizado algún cambio o has añadido alguna configuración, realiza una sincronización y, a continuación, vuelve a cargar los comandos del equipo «recreando todos los comandos» tras la actualización.*

# 21/12/2022

**Mejoras**

- Adición de la gestión de Notificaciones de Nodos

**Modificaciones de configuración**

- Modificación de la configuración del *Aeotec Range Extender 6* para utilizar las propiedades
- Modificación de la configuración del *Zipato PD01z* para utilizar las propiedades
- Modificación de la configuración de la *NeoCoolCam PD01zt* para utilizar las propiedades
- Modificación de la configuración de la *NeoCoolCam PD01z* para utilizar las propiedades
- Modificación de la configuración del *Philio / Zipato Micromodule Energy Meter* para utilizar las propiedades
- Modificación de la configuración del *Fibaro FGS214* para utilizar las propiedades
- Modificación de la configuración del *Fibaro FGS213*: cambio al punto final 0 (por confirmar)
- Resumen de la configuración del *Fibaro FGD212, firmware 3.5*
- Modificación de la configuración del *Zipato Keypad*: se ha añadido la propiedad *NodeNotification*
- Modificación de la configuración del *Schlage Keypad*: se ha añadido la propiedad *NodeNotification*
- Modificación de la configuración de *Eurotronic Valve Spirit* para utilizar las propiedades
- Agrupación de configuraciones *Danfoss Living Connect*
- Modificación de la configuración de *Danfoss Devolo Living Connect* para utilizar las propiedades
- Modificación de la configuración de *Danfoss Living Connect* para utilizar las propiedades
- Modificación de la configuración del *termostato de radiador Danfoss Pop* para utilizar las propiedades
- Modificación de la configuración del *Philio PSP05* para utilizar las propiedades
- Modificación de la configuración del *Zipato ZP3102* para utilizar las propiedades
- Modificación de la configuración del *Vision ZP3102* para utilizar las propiedades
- Modificación de la configuración del *Remotec ZXT-120* para utilizar las propiedades
- Modificación de la configuración del *Everspring Ad147* para utilizar las propiedades
- Modificación de la configuración de *Heatit ThermoFloor Ztemp2* para utilizar las propiedades
- Modificación de la imagen *Horstmann Secure SRT321* (recorte)
- Modificación de la imagen *Remotec ZXT-120* (recorte)
- Modificación de la imagen *Fibaro FGS 224* (recorte)
- Modificación de la imagen *Fibaro FGS 213* (recorte)
- Modificación de la imagen *Fibaro Button* (recorte)

**Nuevas configuraciones**

- Se ha añadido la configuración *Cherubini ORA ZRX* (propiedades: obturador, notificación)
- Se ha añadido la imagen *Cherubini ORA ZRX*
- Se ha añadido la configuración *Heiman HS2WD Siren* (propiedades: Interruptor, Batería)
- Se ha añadido la imagen *Heiman HS2WD Siren*
- Se ha añadido una subpropiedad *Power-status* a la propiedad *Notification*
- Añadir una propiedad *NodeNotification*

*Si has realizado algún cambio o has añadido alguna configuración, realiza una sincronización y, a continuación, vuelve a cargar los comandos del equipo «recreando todos los comandos» tras la actualización.*

# 19/12/2022

**Correcciones**

- Corrección de algunos *atributos que faltaban* en la página de estado de algunos nodos para evitar errores (sin consecuencias) en el *http.error*

**Mejoras**

- Actualización de *ZwaveJS UI* a la versión *8.6.1*
- Incorporación de la *gestión S2* (la interfaz de usuario de ZwaveJS ha realizado los cambios previstos)
- Incorporación del *tipo de seguridad* en la página *información de un nodo*

**Modificaciones de configuración**

- Modificación de la configuración del *sensor de CO Heiman* para utilizar las propiedades
- Modificación de la configuración del *detector de humo Heiman* para utilizar las propiedades
- Modificación de la configuración del *sensor de CO Domux* para utilizar las propiedades
- Modificación de la configuración del *Vision Security ZS5101* para utilizar las propiedades
- Modificación de la configuración de *HomeSeer Ez Motion* para utilizar las propiedades
- Modificación de la configuración del *detector de humo Shenzen* para utilizar las propiedades
- Modificación de la configuración del *Vision Security ZD2102* para utilizar las propiedades
- Modificación de la imagen *Vision Security ZD2102* (recorte)
- Modificación de la configuración del *Aeotec Range Extender 7* para utilizar las propiedades
- Modificación de la configuración del *Zipato ZD2102* para utilizar las propiedades
- Modificación de la configuración de *Qubino Weather Station* para utilizar las propiedades
- Modificación de la configuración del *Everspring ST814* para utilizar las propiedades
- Modificación de la configuración del *Hank HKZW-SO08* para utilizar las propiedades
- Modificación de la configuración del *Hank HKZW-SO01* para utilizar las propiedades
- Modificación de la configuración del *Hank HKZW-SCN01* para utilizar las propiedades
- Modificación de la configuración del *Philio PAT02-B* para utilizar las propiedades
- Modificación de la imagen *Philio PAT02-B* (recorte)
- Modificación de la imagen *Abus SHWM1000*

**Nuevas configuraciones**

- Incorporación de la configuración *Zipato Energy Meter* (propiedades: potencia, energía, tensión, corriente)
- Se ha añadido la imagen del *Zipato Energy Meter*
- Se ha añadido la configuración *Airzone Aidoo Zwave* (propiedades: Temperatura, Modo del termostato, Acción del modo del termostato, Modo del ventilador del termostato, Acción del modo del ventilador del termostato, Punto de consigna del termostato, Notificación)
- Se ha añadido la imagen de *Airzone Aidoo Zwave*
- Añadir una propiedad *Thermostatfanmode*
- Añadir una propiedad *Thermostatfanmodeaction*
- Añadir una propiedad *Dirección*
- Añadir una propiedad *Velocity*
- Añadir una propiedad *Rain*
- Añadir una propiedad *Co*
- Se ha añadido una subpropiedad *Basic-motion* a la propiedad *Motion*
- Se ha añadido una subpropiedad *Dust-in-device* a la propiedad *Notification*

*Si has realizado algún cambio o has añadido alguna configuración, realiza una sincronización y, a continuación, vuelve a cargar los comandos del equipo «recreando todos los comandos» tras la actualización.*

# 15/12/2022

**Mejoras**

- Se ha añadido la posibilidad de mostrar *guías explicativas* en la página de determinados dispositivos (por ejemplo, el teclado Zipato, para explicar el funcionamiento de los códigos).

**Modificaciones de configuración**

- Modificación de la configuración del *Aetoec Nanomote Quad* para utilizar las propiedades
- Modificación de la configuración del *Fibaro Fgs211* para utilizar las propiedades
- Modificación de la configuración del *Fibaro fgwreu111 Walli Shutter*: cambio a una propiedad Shutter/level y cambio de «power» y «energy» al punto final 1
- Modificación de la configuración del *Zipato Keypad* para utilizar las propiedades
- Modificación de la configuración del *Schlage Keypad* para utilizar las propiedades

**Nuevas configuraciones**

- Se ha añadido la configuración *Zooz ZEN17* (propiedades: Interruptor)
- Se ha añadido la imagen del *Zooz ZEN17*
- Se ha añadido la configuración *Abus Flood Sensor* (propiedades: inundación, manipulación, batería)
- Se ha añadido la imagen del *sensor de inundación Abus*
- Añadir una propiedad *UserCode*

*Si has realizado algún cambio o has añadido alguna configuración, realiza una sincronización y, a continuación, vuelve a cargar los comandos del equipo «recreando todos los comandos» tras la actualización.*

# 05/12/2022

**Mejoras**

- Se ha añadido una pestaña *Gestión NVM* en la página de red. Guardar, descargar, enviar y restaurar
- Se ha añadido una pestaña *Actualización* en la página de un nodo.
- Incorporación de la versión del *SDK* en la página de información de un controlador o de los módulos que lo controlan

**Modificaciones de configuración**

- Modificación de la configuración del *Cherubini Widom Smart Plug* para utilizar las propiedades
- Modificación de la configuración del *Qubino 3 Phase Meter* para utilizar las propiedades
- Modificación de la propiedad *Power Factor* para la opción *production*

**Nuevas configuraciones**

- Se ha añadido la configuración *Cherubini Widom Meta doble interruptor* (propiedades: Interruptor, Escena central)
- Se ha añadido la imagen del *Cherubini Widom Meta doble interruptor*
- Se ha añadido la configuración *Cherubini Widom Meta motor con cable CONTR.7* (propiedades: persiana)
- Se ha añadido la imagen del *motor con cable Cherubini Widom Meta CONTR.7*

*Si has realizado algún cambio o has añadido alguna configuración, realiza una sincronización y, a continuación, vuelve a cargar los comandos del equipo «recreando todos los comandos» tras la actualización.*

# 01/12/2022

**Mejoras**

- Gestión de *comandos sin unidades*, cuando debería (en la respuesta de Z-WaveJS) para no saturar el registro

**Modificaciones de configuración**

- Modificación de la configuración del *Qubino ZMNHNDX Flush 1D* para utilizar las propiedades
- Modificación de la configuración del *Fibaro FGSS101 Smoke* para utilizar las propiedades
- Modificación de la configuración del *Smarthome Everspring AN-179* para utilizar las propiedades
- Modificación de la configuración del *Aeotec ZWA009 AERQ* para utilizar las propiedades
- Modificación de la configuración de la *Popp Outdoor Siren* para utilizar (parcialmente) sus propiedades
- Modificación de la configuración del *Aetoec ZWA080* para utilizar (parcialmente) sus propiedades y añadir controles de sonido (volumen y tono)
- Modificación de la propiedad *Heat* con gestión del caso de clase *ALARM SENSOR*
- Modificación de la propiedad *Smoke* con gestión del caso de clase *ALARM SENSOR*
- Modificación de la propiedad *Thermostat Setpoint* para que los valores de consigna se establezcan de forma predeterminada mediante el widget *button*
- Modificación de la imagen *Popp Outdoor Siren*: recorte

**Nuevas configuraciones**

- Se ha añadido la configuración *Secure Hortsmann SRT321* (propiedades: ThermostatMode, ThermostatOperatingState, ThermostatModeAction, ThermostatSetpoint, Temperature, Battery)
- Se ha añadido la imagen del *Secure Hortsmann SRT321*
- Se ha añadido la configuración de la *cerradura Hoppe ConnectSense* (propiedades: Apertura, Sensor de notificación, Inclinación, Batería)
- Se ha añadido la imagen de la *cerradura Hoppe ConnectSense*
- Se han añadido los parámetros para la *cerradura Hoppe ConnectSense*

*Si has realizado algún cambio o has añadido alguna configuración, realiza una sincronización y, a continuación, vuelve a cargar los comandos del equipo «recreando todos los comandos» tras la actualización.*

# 28/11/2022

**Correcciones**

- Corrección en los *parámetros de configuración* para *evitar enviar un 0 inicialmente* al seleccionar una opción de tipo lista (en un parámetro que ofrezca esta posibilidad).

**Mejoras**

- Se ha añadido un *reinicio* necesario del motor *en caso de que falle la exclusión*
- Visualización del mensaje relativo al *comando 0* únicamente en el caso de un *nodo iniciado*

**Modificaciones de configuración**

- Modificación de la configuración del *Aeotec TriSensor* para utilizar las propiedades
- Modificación de la configuración del *Hank HKZW-MS02* para utilizar las propiedades
- Modificación de la configuración del *Philio PSM02* para utilizar las propiedades
- Modificación de la configuración del *Everspring AN158* para utilizar las propiedades
- Modificación de la configuración del *Danfoss Room Sensor* para utilizar las propiedades
- Modificación de la configuración de *Vision ZS Shock and Vibration* para utilizar las propiedades
- Modificación de la configuración del *Fibaro Walli Controller* para utilizar las propiedades
- Modificación de la configuración del *Fibaro FGD211* para utilizar las propiedades
- Modificación de la configuración del *Fibaro Wall Plug UK* para utilizar las propiedades
- Modificación de la configuración del *Fibaro Walli Outlet F* para utilizar las propiedades
- Modificación de la configuración del *Fibaro Walli Dimmer* para utilizar las propiedades
- Modificación de la configuración del *Fibaro RGBW441* para utilizar la propiedad *fibaro-effects*
- Modificación de la propiedad *Luminancia* con la incorporación de un modo en %
- Modificación de la propiedad *Thermostat Setpoint* para que los valores de consigna se establezcan de forma predeterminada mediante el widget *button*
- Modificación de la propiedad *Color* con la incorporación de un tipo *fibaro-effects* (para dejar de describir los comandos)
- Se ha añadido un *parámetro recomendado* para el *Philio PST02*

*Si has realizado algún cambio o has añadido alguna configuración, realiza una sincronización y, a continuación, vuelve a cargar los comandos del equipo «recreando todos los comandos» tras la actualización.*

# 25/11/2022

**Mejoras**

- Incorporación de una *gestión de versiones de ZwaveJS UI*
- Añadir un mensaje en el *centro de mensajes* y en la página del complemento cuando la interfaz de usuario de ZwaveJS *deba actualizarse*
- Actualización de la *versión ZwaveJS UI* a la versión *8.5.1*

**Modificaciones de configuración**

- Modificación de los ajustes del *Hank Smart Plug (HKZW-SO08)* (problema de visualización)

*Si has realizado algún cambio o has añadido alguna configuración, realiza una sincronización y, a continuación, vuelve a cargar los comandos del equipo «recreando todos los comandos» tras la actualización.*

# 23/11/2022

**Mejoras**

- Añadir un elemento visual para un *parámetro o activación* pendiente
- Se ha añadido una página que permite ver todos los *parámetros* pendientes
- Se ha añadido una página web que permite ver todos los *parámetros* pendientes
- Se ha añadido un botón «Eliminar» en la página *Pendiente*. Permite eliminar una línea pendiente. Este botón no elimina la orden que se ha enviado al controlador, sino solo la información pendiente en Jeedom (útil, por ejemplo, para los parámetros de calibración que nunca adoptan el valor enviado o cualquier otro parámetro en el que no sea necesario).

**Modificaciones de configuración**

- Modificación de la configuración de *Popp Strike Lock* para utilizar la propiedad «opening» (para el contacto)
- Modificación de la configuración del *Fibaro FGD212* para añadir la gestión de diferencias a partir del firmware 3.5 (punto final 1 en firmware <= 3.4; punto final 0 solo en el destino, en caso contrario)
- Modificación de la propiedad *Door Lock* para añadir el desbloqueo (con tiempo de espera) en todos los dispositivos que utilicen esta propiedad

**Nuevas configuraciones**

- Se ha añadido la configuración del *Hank Smart Plug (HKZW-SO08)* (propiedades: Interruptor, Potencia, Energía, Tensión, Corriente, Escena)
- Se ha añadido la configuración *Idinio foot dimmer* (propiedades: Multilevel, Power, Energy)
- Se han añadido los parámetros para el *Hank Smart Plug (HKZW-SO08)*

*Si has realizado algún cambio o has añadido alguna configuración, realiza una sincronización y, a continuación, vuelve a cargar los comandos del equipo «recreando todos los comandos» tras la actualización.*

# 21/11/2022

**Correcciones**

- Cambio en el *gráfico de redes*: solo las primeras rutas directas se mostrarán en rojo al pasar el cursor por encima de un nodo, para evitar, en determinadas instalaciones y navegadores, el error *Max Stack Size Exceeded* relacionado con las recursiones.

**Mejoras**

- Incorporación de *refreshNodeCC* como propiedad de un comando creado manualmente para actualizar un CC
- Se ha añadido un *desplazamiento horizontal* en la ventana modal de red / pestaña *tabla de enrutamiento* (gracias, @Salvialf)
- Se ha desplazado el *contador de pedidos* a la parte derecha de la página de equipamiento

**Modificaciones de configuración**

- Modificación de la configuración del *Fibaro FGR223* para aprovechar la potencia de la clase multinivel
- Modificación de la configuración del *Fibaro FGR222* para aprovechar la potencia de la clase multinivel
- Modificación de la configuración del *Fibaro FGRM222* para aprovechar la potencia de la clase multinivel
- Modificación de la configuración del *Devolo Mt02648* para utilizar las propiedades y añadir los parámetros recomendados
- Modificación de la configuración del *Devolo Mt02647* para utilizar las propiedades y añadir los parámetros recomendados
- Modificación de la configuración de *Popp Strike Lock* para utilizar las propiedades
- Modificación de la configuración del *Aeotec ZWA011* para utilizar sus propiedades y añadir su imagen

*Si has realizado algún cambio o has añadido alguna configuración, realiza una sincronización y, a continuación, vuelve a cargar los comandos del equipo «recreando todos los comandos» tras la actualización.*

# 18/11/2022

**Mejoras**

- Se ha añadido un acceso a la interfaz ZwaveJS UI *(en el menú Red Z-Wave, pestaña Acciones)*. ¡No lo utilices para modificar la configuración!
- Se ha añadido un puerto para el caso concreto de algunas Raspberry Pi *(se añadirán otros si es necesario)*
- Incorporación de un contador de comandos para cada equipo *(sin tener en cuenta los 4 comandos técnicos)*
- Se ha añadido una ayuda dinámica en caso de que no haya ningún comando.

# 15/11/2022

- Cambiar a versión estable

# 04/05/2022

- Beta 1ra fase
