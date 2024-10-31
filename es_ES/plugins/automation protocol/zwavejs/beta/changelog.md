# Registro de cambios Z-Wave JS

>**IMPORTANTE**
>
>Si no hay información sobre la actualización, significa que se trata solo de la actualización de la documentación, la traducción o el texto.

- Adición del modo remoto (en beta y tenga cuidado, esto reduce las funciones de los complementos), lea atentamente la documentación, cambiar al modo remoto tiene un fuerte impacto en la facilidad de uso e incluso en la compatibilidad con ciertos módulos

# 27/09/2024

- Cambio de versiones mínimas, core 4.4 y SO Debian 11 mínimo

# 26/09/2024

**Mejoras**

- Cambiar a versión *9.20.0* por ZwaveJsUI
- Preparándose para fusionar el modo remoto en la próxima versión
- Limpieza de código

**Adiciones de configuración**

- Configuración añadida *Repetidor de señal Neo+* (propiedades : Temperatura, humedad)
- Configuración añadida *Fibaro FGR224* (propiedades : Interruptor, potencia, energía, notificación de sobrecorriente, notificación de sobretensión)

**Cambios de configuración**

- Cambiar la configuración *Fibaro Fgrgbwm442* para usar las propiedades
- Cambiar la configuración *Fibaro FGD212* Propiedades de notificación mejoradas

# 20/05/2024

**Mejoras**

- Cambiar a versión *9.12.0* por ZwaveJsUI
- Incorporación y gestión de las dos nuevas llaves de seguridad S2 Long Range

**Adiciones de configuración**

- Configuración añadida *Repetidor de señal neo* (propiedades : Temperatura, humedad)
- Configuración añadida *Shelly Qubino Ola 1* (propiedades : Interruptor, notificación de manos, notificación de sobrecorriente, notificación de sensor de calor) 
- Configuración añadida *Shelly Qubino Ola 13:00* (propiedades : Interruptor, alimentación, energía, notificación de red, notificación de sobrecorriente, notificación de sensor de calor)
- Configuración añadida *Shelly Qubino Wave Pro 1* (propiedades : Interruptor, notificación de manos, notificación de sensor de calor) 
- Configuración añadida *Shelly Qubino Wave Pro 13:00* (propiedades : Interruptor, potencia, energía, notificación de red, notificación de sobrecorriente, notificación de sobretensión, notificación de sensor de calor)
- Configuración añadida *Shelly Qubino Ola 2 p.m* (propiedades : Interruptor, alimentación, energía, notificación de red, notificación de sobrecorriente, notificación de sensor de calor)
- Configuración añadida *Shelly Qubino Wave Pro 2* (propiedades : Switch)
- Configuración añadida *Shelly Qubino Wave Pro 2 p.m* (propiedades : Interruptor, potencia, energía, notificación de sobrecorriente, notificación de sobretensión)
- Configuración añadida *Shelly Qubino Ola I4* (propiedades : Escena Central)
- Configuración añadida *Obturador de ondas Shelly Qubino* (propiedades : Obturador, potencia, energía, notificación de manos, notificación de sobrecorriente, notificación de sensor de calor)
- Agregar una subpropiedad *notificación-de-sobretensión* para la propiedad *Notificación*

**Cambios de configuración**

- Cambiar la configuración *Enchufe Neo* para usar las propiedades (*Tenga cuidado, algunos modelos quieren incluirse en S2 aunque el fabricante no proporcione ningún DSK, inclúyalos eligiendo el modo no seguro en lugar del automático*)

# 27/02/2024

**Mejoras**

- Adición de una función adicionalDependancyCheck para el núcleo


**Cambios de configuración**

- Cambiar la configuración *MCOcasa Mh7h* para usar las propiedades

# 26/12/2023

**Mejoras**

- Se agregó una opción para habilitar o deshabilitar el *Reinicio suave*
- Cambiar a versión *9.6.2* por ZwaveJsUI 

**Adiciones de configuración**

- Configuración añadida *HeatIt Z-TRM6* (propiedades : Temperatura, modo termostato, estado de funcionamiento del termostato, acción del modo termostato, punto de ajuste del termostato, notificación del sensor de calor, notificación de sobrecarga)
- Configuración añadida *Control remoto Sunricher de 12 botones* (propiedades : CentralScene x12, Batería)

# 12/11/2023

**Mejoras**

- Cambiar a versión *9.5.1* de ZwaveJsUI (para poder elegir un puerto en el formato de ruta necesario en ciertas VM, debe actualizar el núcleo)

**Arreglos**

- Corregir error de inclusión *T2* corregido en el lado de la interfaz de usuario de ZwaveJS, lo siguiente subió (de hecho, las devoluciones de llamada no se realizaron a menos que tuviera una ventana abierta en la interfaz de la interfaz de usuario de ZwaveJS))

**Adiciones de configuración**

- Configuración añadida *Shelly Qubino Ola 1PM* (propiedades : Interruptor, alimentación, energía, notificación de red, notificación de sobrecorriente, notificación de sensor de calor)
- Configuración añadida *Shelly Qubino Ola 1* (propiedades : Interruptor, alimentación, energía, notificación de red, notificación de sobrecorriente, notificación de sensor de calor)
- Configuración añadida *Obturador de ondas Shelly Qubino* (propiedades : Obturador, potencia, energía, notificación de manos, notificación de sobrecorriente, notificación de sensor de calor)
- Configuración añadida *Shelly Qubino Ola 2PM* (propiedades : Interruptor, alimentación, energía, notificación de red, notificación de sobrecorriente, notificación de sensor de calor)
- Configuración añadida *Shelly Qubino Ola 1* (propiedades : Interruptor, notificación de manos, notificación de sobrecorriente, notificación de sensor de calor)  *duda si agregar Potencia y Energía (haga un ticket si se supone que el dispositivo debe informar consumo pero no lo creo))*
- Agregar una propiedad *Revestimiento de ventanas*

**Cambios de configuración**

- Cambiar la configuración *Teclado inferior* para usar las propiedades (copia de Zipato pero en la siguiente versión))
- Cambiar la configuración *MCOhome Mh8FC* para usar las propiedades
- Cambiar la configuración *MCOhome Mh8FC-4* para usar las propiedades
- Cambiar la configuración *Qubino ZMNKID - Termostato de encendido y apagado 2* para usar las propiedades
- Cambiar la configuración *Motor con cable Widom Meta* para utilizar la propiedad Cubierta de Windows
- Cambiar la configuración *Wenzhou TZ78* uso del punto final 0 en lugar del punto final 1 (de acuerdo con los comentarios de los usuarios)
- Editando la imagen *MCOhome Mh8FC* (recorte)
- Editando la imagen *MCOhome Mh8FC-4* (recorte)

# 27/10/2023

**Adiciones de configuración**

- Agregar una subpropiedad *puerta de notificación* para la propiedad *Inclinación*

**Cambios de configuración**

- Cambiar la configuración *Aeotec Zwa012*  para usar las propiedades
- Modificación de una subpropiedad *notificación simple* para la propiedad *Apertura*

**Mejoras**

- Cambiar a versión *9.1.2* por ZwaveJsUI

# 10/11/2023

**Arreglos**

- Cambiar a versión *8.26.0* de ZwaveJsUI temporalmente

# 10/09/2023

**Arreglos**

- Corrección evitando ciertos mensajes en el log *Error HTTP* en ciertos casos especiales

**Mejoras**

- Cambiar a versión *9.1.0* por ZwaveJsUI
- Se agregó una opción para administrar *notificaciones* en el centro de mensajes *nodos vivos y muertos*
- Se agregó una opción para administrar *notificaciones* en el centro de mensajes *despertares perdidos y regreso*

**Adiciones de configuración**

- Configuración añadida *Puerta Empotrada Aeotec ZW187* (propiedades : Apertura simple, batería, software de notificación, notificación de estado de energía)
- Configuración añadida *Thermofloor Heat It ZM Relé Alta Potencia* (propiedades : Interruptor, alimentación, energía, notificación de sensor de calor, notificación de sobrecarga, escena central)
- Agregar una subpropiedad *notificación simple* para la propiedad *Apertura*


# 11/09/2023

**Arreglos**

- Corrección de actualización *OTA* del firmware de un módulo después de un cambio de ZwaveJSUI

**Mejoras**

- Cambiar a versión *8.25.1* por ZwaveJsUI.
- Se agregó la posibilidad de realizar una actualización *OTW* un controlador (si es compatible)
- Se agregó una opción para administrar *notificaciones* en el centro de mensajes *nodos vivos y muertos*
- Se agregó una opción para administrar *notificaciones* en el centro de mensajes *despertares perdidos y regreso*

**Adiciones de configuración**

- Configuración añadida *Shelly Qubino Ola 1PM* (propiedades : Interruptor, alimentación, energía, notificación de red, notificación de sobrecorriente, notificación de sensor de calor)
- Configuración añadida *Shelly Qubino Ola 1* (propiedades : Interruptor, alimentación, energía, notificación de red, notificación de sobrecorriente, notificación de sensor de calor)
- Agregar una subpropiedad *agua-binaria* para la propiedad *Inundación*
- Agregar una subpropiedad *barrera de nivel* para la propiedad *Multi nivel*

**Cambios de configuración**

- Cambiar la configuración *MCOhome Mh8FC*  para usar las propiedades
- Cambiar la configuración *NeoCoolCam WS02Z*  para usar las propiedades
- Cambiar la configuración *Kaipule IM20*  para usar las propiedades
- Cambiar la configuración *HRT4_SRT321* para aprovechar mejor las propiedades
- Cambiar la configuración *Atenuador enchufable Benext* para aprovechar mejor las propiedades
- Cambiar la configuración *Domo de encendido y apagado Interruptor enchufable Atenuador enchufable* para aprovechar mejor las propiedades
- Cambiar la configuración *Domux dx2skz* para aprovechar mejor las propiedades
- Cambiar la configuración *Enchufe deslizante* para aprovechar mejor las propiedades
- Cambiar la configuración *Everspring SM810* para aprovechar mejor las propiedades
- Cambiar la configuración *Zipato PD01z* para aprovechar mejor las propiedades
- Cambiar la configuración *Seguridad de visión ZS5101* para aprovechar mejor las propiedades

# 08/02/2023

**Mejoras**

- Cambiar a versión *8.22.0* por ZwaveJsUI.
- Suma de todos *tty* en la lista de puertos (esto será inútil con el nuevo núcleo que le permitirá elegir un puerto directamente por la identificación)
- Se agregó la última ruta en la página de estadísticas de un nodo (depende del SDK del controlador))
- Se agregó la última tasa de velocidad en baudios en la página de estadísticas de un nodo (depende del SDK del controlador))
- Se agregó la última velocidad en baudios en la página de estadísticas globales (depende del SDK del controlador))
- Se agregó la última ruta en la página de estadísticas globales (depende del SDK del controlador))
- Se agregó el último rssi en la página de estadísticas globales (depende del SDK del controlador))
- Se agregó el último rssi en la página de estadísticas de un nodo (depende del SDK del controlador))
- Adición de un gráfico *Ruta de red* representando las últimas rutas tomadas (se escalará y es posible que no maneje todos los casos, depende del SDK del controlador))
- Adición de un mensaje en el centro de mensajes cuando un nodo queda muerto (además del comando de estado del equipo)
- Adición de un mensaje en el centro de mensajes cuando un nodo pasa a Alive después de estar Dead (además del comando de estado del equipo)
- Adición de un mensaje en el centro de mensajes cuando un nodo no se ha despertado después de 4 veces su intervalo de activación


**Adiciones de configuración**

- Agregar una propiedad *Estado del ventilador del termostato*
- Adición de un subcomando *Estado de la etiqueta* a la propiedad Operador de barrera (para tener un comando de etiqueta con texto además del comando numérico)
- Configuración añadida *MCOhome Mh8FC* (propiedades : ThermostatMode, ThermostatModeAction, ThermostatSetpoint, ThermostatFanMode, ThermostatFanModeAction, ThermostatOperatingState, ThermostatFanState, Temperature)
- Configuración añadida *Heltun HE-FT01* (propiedades : ThermostatMode, ThermostatModeAction, ThermostatSetpoint, ThermostatFanMode, ThermostatFanModeAction, ThermostatOperatingState, ThermostatFanState, Temperatura, Iluminancia, Humedad, Potencia, Energía)
- Configuración añadida *MCOhome MH3901* (propiedades : ThermostatMode, ThermostatModeAction, ThermostatSetpoint, ThermostatOperatingState, Temperature)
- Adición de un subcomando *Estado de la etiqueta* a la propiedad Estado operativo del termostato (para tener un comando de etiqueta con texto además del comando numérico)

**Cambios de configuración**

- Cambiar la configuración *HRT4_SRT321* para usar las propiedades
- Cambiar la configuración *SRT323* para usar las propiedades
- Editando la imagen *HRT4_SRT321* (recorte)
- Editando la imagen *SRT323* (recorte)
- Editando la imagen *SSR303* (recorte)
- Editando la imagen *SIR321* (recorte)
- Editando la imagen *SES303* (recorte)
- Editando la imagen *SES302* (recorte)
- Editando la imagen *SCSC17* (recorte)

# 26/06/2023

**Mejoras**

- Cambiar a versión *8.19.0* por ZwaveJsUI.
- Los módulos *FLIRS* ya no se consideran activos en la malla en el gráfico de red

**Cambios de configuración**

- Cambiar la configuración *Sensor de ventana de puerta Aeotec DSB04100* para usar las propiedades
- Cambiar la configuración *Interruptor de servicio pesado Aeotec DSC10* para usar las propiedades
- Cambiar la configuración *Interruptor de energía inteligente Aeotec DSC06106* para usar las propiedades
- Cambiar la configuración *Tira inteligente Aeotec DSC11* para usar las propiedades
- Cambiar la configuración *Iluminador de energía inteligente Aeotec DSC08101* para usar las propiedades
- Cambiar la configuración *Control de persianas Aeotec DSC014104* para usar las propiedades
- Cambiar la configuración *Aeotec DSC17103 Micro Interruptor Doble* para usar las propiedades
- Cambiar la configuración *Aeotec DSC18103 Microinterruptor 2º* para usar las propiedades
- Cambiar la configuración *Aeotec DSC26103 Microinterruptor 2º* para usar las propiedades
- Cambiar la configuración *Aeotec DSC27103 Micro Dimmer 2do* para usar las propiedades
- Cambiar la configuración *Reloj Pánico Benext* para usar las propiedades
- Cambiar la configuración *Botón de pánico Benext* para usar las propiedades
- Cambiar la configuración *Atenuador enchufable Benext* para usar las propiedades
- Cambiar la configuración *Domo de encendido y apagado Interruptor enchufable Atenuador enchufable* para usar las propiedades
- Cambiar la configuración *Domux dx2skz* para usar las propiedades
- Cambiar la configuración *Siempre primavera AD142* para usar las propiedades
- Cambiar la configuración *Primavera eterna AN145* para usar las propiedades
- Cambiar la configuración *Proyector LED Everspring EH403* para usar las propiedades
- Cambiar la configuración *Heiman Dx2skz* para usar las propiedades
- Cambiar la configuración *Atenuador inteligente Philio E27* para usar las propiedades
- Cambiar la configuración *Philio pan03* para usar las propiedades
- Cambiar la configuración *Enchufe inteligente Popp* para usar las propiedades
- Cambiar la configuración *Papá 009105* para usar las propiedades
- Cambiar la configuración *Schlage en la pared* para usar las propiedades
- Cambiar la configuración *Enchufe Sigma* para usar las propiedades
- Cambiar la configuración *Enchufe deslizante* para usar las propiedades

**Adiciones de configuración**

- Configuración añadida *Atenuador Heat It ZM* (propiedades : Multinivel, Poder, Energía, CentralScene, Notificación)
- Configuración añadida *Sigma PZ701U* (propiedades : Switch)
- Configuración añadida *Neo RC03Z* (propiedades : Escena Central, Batería)
- Añadir una subpropiedad *Sensor de calor* en la propiedad *Notificación*
- Configuración añadida *U-Hada GR-201N* (propiedades : Switch)

# 04/10/2023

**Mejoras**

- EL *actualizar* ahora puede ir hasta 100 segundos en lugar de 60
- Cambiar a versión *8.13.1* por ZwaveJsUI.
- Cambiar la función *valor de la encuesta* para propiedades en *valor* (gracias @superbricolo)

**Cambios de configuración**

- Cambiar la configuración *Sensor de agua Aeotec ZWA19* para usar las propiedades
- Cambiar la configuración *Aeotec ZWA24 7en1* para usar las propiedades
- Cambiar la configuración *Everspring SM810* para usar las propiedades
- Edición de una propiedad *Velocidad*
- Editando la imagen *Dlink 510* (recorte)
- Editando la imagen *Fibaro fgs-213* (recorte)

**Adiciones de configuración**

- Configuración añadida *Sigma PZ701U* (propiedades : Switch)
- Configuración añadida *Neo RC03Z* (propiedades : Escena Central, Batería)
- Añadir una subpropiedad *Sensor de calor* en la propiedad *Notificación*
- Configuración añadida *U-Hada GR-201N* (propiedades : Switch)

# 14/02/2023

**Cambios de configuración**

- Cambiar la configuración *Aeotec ZWA24 7en1* para usar las propiedades
- Cambiar la configuración *Everspring SM810* para usar las propiedades
- Cambiar la configuración *Aeotec ZW122* para usar las propiedades
- Agrupación de configuraciones *Conexión viva de Danfoss*
- Cambiar la configuración *Fibaro FGR-223* cambio de puntos finales de potencia y energía
- Cambiar la configuración *Fibaro FGR-223* adición de hardware y notificación de sobrecorriente
- Cambiar la configuración *Fibaro FGS213* cambiar al punto final 1 (firmware >=3.3) y sensor de calor añadido y notificación de sobrecorriente
- Editando la imagen *Aeotec ZWA24 7en1* (recorte)
- Edición de una propiedad *Velocidad*
- Editando la imagen *Dlink 510* (recorte)
- Editando la imagen *Fibaro fgs-213* (recorte)
- Editando la imagen *Fibaro fgs-221* (recorte)
- Editando la imagen *Fibaro fgs-223* (recorte)
- Editando la imagen *Enchufe de pared Fibaro* (recorte)
- Editando la imagen *Enchufe de pared Fibaro GEN5* (recorte)

**Adiciones de configuración**

- Añadir una subpropiedad *Sensor de calor* en la propiedad *Notificación*
- Configuración añadida *U-Hada GR-201N* (propiedades : Switch)
- Configuración añadida *Relé de caldera Danfoss* (propiedades : Switch)
- Configuración añadida *Sonido de alarma Benext* (propiedades : Switch)


# 24/12/2022

**Cambios de configuración**

- Cambiar la configuración *Sensor de puerta Aeotec ZWA008* para usar las propiedades
- Cambiar la configuración *Termostato Qubino ZMNHLAX PWM* para usar las propiedades
- Cambiar la configuración *Atenuador Qubino ZMNHDA2* para usar las propiedades
- Cambiar la configuración *Fibaro FGR-223* modificación de los puntos finales de *actualizar*
- Cambiar la configuración *Fibaro Fgrgbwm442* para usar las propiedades
- Cambiar la configuración *Fibaro FGD212* propiedades de notificación agregadas
- Cambiar la configuración *Qubino ZMNHBA2 Flush 2 Relés* para usar las propiedades
- Cambiar la configuración *Interruptor Fibaro Walli* propiedades de notificación agregadas
- Cambiar la configuración *Dlink Dchz110* para usar las propiedades
- Cambiar la configuración *Luz LED inteligente Domitech* para usar las propiedades
- Cambiar la configuración *Interruptor Duwii* para usar las propiedades
- Cambiar la configuración *Primavera eterna AN157* para usar las propiedades
- Cambiar la configuración *Sensor de humo popp* para usar las propiedades
- Cambiar la configuración *Duwii Edan 300* para usar las propiedades
- Editando la imagen *Atenuador Duwii* (recorte)
- Editando la imagen *Sensor de puerta Aeotec ZWA008* (recorte)
- Editando la imagen *Interruptor Duwii* (recorte)
- Editando la imagen *Duwii Edan 300* (recorte)
- Editando la imagen *Control de persianas Duwii* (recorte)
- Editando la imagen *Mando a distancia Duwii* (recorte)
- Editando la imagen *Duwii zs3500* (recorte)
- Editando la imagen *Atenuador MCO Zipato p210* (recorte)

**Adiciones de configuración**

- Añadir una subpropiedad *Error de carga* en la propiedad *Notificación*
- Añadir una subpropiedad *Fibaro-effects2* en la propiedad *Color*

*Si se ve afectado por una modificación o adición de configuración, realice una sincronización y luego vuelva a cargar los comandos del equipo "recreando todos los comandos" después de la actualización.*

# 22/12/2022

**Mejoras**

- Adición de un motor completo *Gestión de actualización*, útil para algunos módulos que no informan correctamente algunos cambios después de la acción. No debe usarse sin una razón válida. Los archivos de configuración llevarán los elementos si es necesario
- Agregar una pestaña *Opciones* en la página del equipo. Para ver y configurar Actualizaciones y posibles opciones futuras
- Adición del número de *Actualizar* en la pagina *Salud*

**Cambios de configuración**

- Cambiar la configuración *Luz inteligente Qubino Luxy* para usar las propiedades
- Cambiar la configuración *Medidor de lluvia Popp* para usar las propiedades
- Cambiar la configuración *Fibaro FGR-223* primera configuración para usar el motor de actualización (de hecho, este módulo tiene un error conocido, no sube las posiciones o de manera errónea cuando el Z-Wave inicia un movimiento) para recuperar la actualización (vaya al comando de recarga seleccionando " sin volver a crear pedidos") debería ver "actualizar" en la pestaña de opciones.
- Cambiar la configuración *Fibaro FGR-223* cambio de puntos finales de potencia y energía
- Cambiar la configuración *Fibaro FGR-223* adición de hardware y notificación de sobrecorriente
- Cambiar la configuración *Fibaro FGR-223* reemplazar propiedad de escena con centralscene

**Adiciones de configuración**

- Configuración añadida *Interruptor inteligente Qubino Luxy* (propiedades : Switch, Multinivel, Potencia, Energía, Color, Notificación, Evento de notificación)
- Agregando la imagen *Interruptor inteligente Qubino Luxy*
- Configuración añadida *Centro de seguridad Abus SHSG10000* (propiedades : Interruptor, batería)
- Agregando la imagen *Centro de seguridad Abus SHSG10000*
- Añadir una subpropiedad *General* en la propiedad *Lluvia*
- Añadir una subpropiedad *Básico* en la propiedad *Lluvia*
- Añadir una subpropiedad *Sobrecarga* en la propiedad *Notificación*
- Agregar una propiedad *Consumo de agua*
- Agregar una propiedad *Evento de notificación*

*Si se ve afectado por una modificación o adición de configuración, realice una sincronización y luego vuelva a cargar los comandos del equipo "recreando todos los comandos" después de la actualización.*

# 21/12/2022

**Mejoras**

- Adición de la gestión de Notificaciones de Nodos

**Cambios de configuración**

- Cambiar la configuración *Extensor de rango Aeotec 6* para usar las propiedades
- Cambiar la configuración *Zipato PD01z* para usar las propiedades
- Cambiar la configuración *NeoCoolCam PD01zt* para usar las propiedades
- Cambiar la configuración *NeoCoolCam PD01z* para usar las propiedades
- Cambiar la configuración *Medidor de energía de micromódulo Philio/Zipato* para usar las propiedades
- Cambiar la configuración *Fibaro FGS214* para usar las propiedades
- Cambiar la configuración *Fibaro FGS213* cambiar al punto final 0 (por confirmar))
- Reversión de configuración *Fibaro FGD212 firmware 3.5*
- Cambiar la configuración *Teclado Zipato* adición de propiedad *Notificación de nodo*
- Cambiar la configuración *Teclado Schlage* adición de propiedad *Notificación de nodo*
- Cambiar la configuración *Espíritu de válvula Eurotronic* para usar las propiedades
- Agrupación de configuraciones *Conexión viva de Danfoss*
- Cambiar la configuración *Danfoss Devolo Living Connect* para usar las propiedades
- Cambiar la configuración *Conexión viva de Danfoss* para usar las propiedades
- Cambiar la configuración *Termostato de radiador Pop de Danfoss* para usar las propiedades
- Cambiar la configuración *Philio psp05* para usar las propiedades
- Cambiar la configuración *Zipato ZP3102* para usar las propiedades
- Cambiar la configuración *Visión ZP3102* para usar las propiedades
- Cambiar la configuración *Control remoto ZXT-120* para usar las propiedades
- Cambiar la configuración *Anuncio Everspring147* para usar las propiedades
- Cambiar la configuración *Heatit ThermoFloor Ztemp2* para usar las propiedades
- Editando la imagen *Horstmann Seguro SRT321* (recorte)
- Editando la imagen *Control remoto ZXT-120* (recorte)
- Editando la imagen *Fibaro FGS 224* (recorte)
- Editando la imagen *Fibaro FGS 213* (recorte)
- Editando la imagen *Botón Fibaro* (recorte)

**Adiciones de configuración**

- Configuración añadida *Cherubini ORA ZRX* (propiedades : Obturador, Notificación)
- Agregando la imagen *Cherubini ORA ZRX*
- Configuración añadida *Sirena Heiman HS2WD* (propiedades : Interruptor, batería)
- Agregando la imagen *Sirena Heiman HS2WD*
- Añadir una subpropiedad *Estado de energía* en la propiedad *Notificación*
- Agregar una propiedad *Notificación de nodo*

*Si se ve afectado por una modificación o adición de configuración, realice una sincronización y luego vuelva a cargar los comandos del equipo "recreando todos los comandos" después de la actualización.*

# 19/12/2022

**Arreglos**

- Fijar en algunos *atributos faltantes* en la página de salud en algunos nodos para evitar errores (sin consecuencias) en el *Error HTTP*

**Mejoras**

- Pasaje de *Interfaz de usuario de ZwaveJS* a versión *8.6.1*
- Adición de la *gestión S2* (La interfaz de usuario de ZwaveJS ha realizado los cambios esperados)
- Además de *tipo de seguridad* en la pagina *información del nodo*

**Cambios de configuración**

- Cambiar la configuración *Sensor de CO Heiman* para usar las propiedades
- Cambiar la configuración *Detector de humo Heiman* para usar las propiedades
- Cambiar la configuración *Sensor de CO Domux* para usar las propiedades
- Cambiar la configuración *Seguridad de visión ZS5101* para usar las propiedades
- Cambiar la configuración *InicioSeer Ez Motion* para usar las propiedades
- Cambiar la configuración *Detector de humo Shenzhen* para usar las propiedades
- Cambiar la configuración *Seguridad de visión ZD2102* para usar las propiedades
- Editando la imagen *Seguridad de visión ZD2102* (recorte)
- Cambiar la configuración *Extensor de rango Aeotec 7* para usar las propiedades
- Cambiar la configuración *Zipato ZD2102* para usar las propiedades
- Cambiar la configuración *Estación meteorológica Qubino* para usar las propiedades
- Cambiar la configuración *Resorte eterno ST814* para usar las propiedades
- Cambiar la configuración *Hank HKZW-SO08* para usar las propiedades
- Cambiar la configuración *Hank HKZW-SO01* para usar las propiedades
- Cambiar la configuración *Hank HKZW-SCN01* para usar las propiedades
- Cambiar la configuración *Filio PAT02-B* para usar las propiedades
- Editando la imagen *Filio PAT02-B* (recorte)
- Editando la imagen *Abuso SHWM1000*

**Adiciones de configuración**

- Configuración añadida *Medidor de energía Zipato* (propiedades : Potencia, Energía, Voltaje, Corriente)
- Imagen añadida para *Medidor de energía Zipato*
- Configuración añadida *Airzone Aidoo Zwave* (propiedades : Temperatura, modo de termostato, modo de acción del termostato, modo de ventilador del termostato, modo de ventilador del termostato, punto de ajuste del termostato, notificación)
- Imagen añadida para *Airzone Aidoo Zwave*
- Agregar una propiedad *Termostato en modo ventilador*
- Agregar una propiedad *Termostatoventiladordeacción*
- Agregar una propiedad *Dirección*
- Agregar una propiedad *Velocidad*
- Agregar una propiedad *Lluvia*
- Agregar una propiedad *Co*
- Añadir una subpropiedad *Movimiento básico* en la propiedad *Movimiento*
- Añadir una subpropiedad *Polvo en el dispositivo* en la propiedad *Notificación*

*Si se ve afectado por una modificación o adición de configuración, realice una sincronización y luego vuelva a cargar los comandos del equipo "recreando todos los comandos" después de la actualización.*

# 15/12/2022

**Mejoras**

- Se agregó la capacidad de mostrar *asistentes explicativos* en la página de ciertos equipos (Teclado Zipato por ejemplo para explicar el funcionamiento de los códigos)

**Cambios de configuración**

- Cambiar la configuración *Cuádruple Aetoec Nanomote* para usar las propiedades
- Cambiar la configuración *Fibaro fgs211* para usar las propiedades
- Cambiar la configuración *Obturador Fibaro fgwreu111 Walli* pasar una propiedad Shutter/level y pasar potencia y energía en el punto final 1
- Cambiar la configuración *Teclado Zipato* para usar las propiedades
- Cambiar la configuración *Teclado Schlage* para usar las propiedades

**Adiciones de configuración**

- Configuración añadida *ZoozZEN17* (propiedades : Switch)
- Imagen añadida para *ZoozZEN17*
- Configuración añadida *Sensor de inundación Abus* (propiedades : Inundación, sabotaje, batería)
- Imagen añadida para *Sensor de inundación Abus*
- Agregar una propiedad *Codigo de usuario*

*Si se ve afectado por una modificación o adición de configuración, realice una sincronización y luego vuelva a cargar los comandos del equipo "recreando todos los comandos" después de la actualización.*

# 12/05/2022

**Mejoras**

- Agregar una pestaña *Gestión de MNV* en la página de la red. Copia de seguridad, descarga, envío y restauración
- Agregar una pestaña *Actualización* en una página de nodo.
- Adición de la versión de *SDK* en la página de información de un controlador o de los módulos que lo elevan

**Cambios de configuración**

- Cambiar la configuración *Enchufe inteligente Widom Cherubini* para usar las propiedades
- Cambiar la configuración *Medidor Trifásico Qubino* para usar las propiedades
- Cambio de propiedad *Factor de potencia* para la opción *producción*

**Adiciones de configuración**

- Configuración añadida *Interruptor doble Cherubini Widom Meta* (propiedades : Interruptor, escena central)
- Imagen añadida para *Interruptor doble Cherubini Widom Meta*
- Configuración añadida *Cherubini Widom Meta motor cableado CONTR.7* (propiedades : Shutter)
- Imagen añadida para *Cherubini Widom Meta motor cableado CONTR.7*

*Si se ve afectado por una modificación o adición de configuración, realice una sincronización y luego vuelva a cargar los comandos del equipo "recreando todos los comandos" después de la actualización.*

# 12/01/2022

**Mejoras**

- Administración *comandos sin unidades* mientras que debería (en el retorno de zwaveJS) para no contaminar el registro

**Cambios de configuración**

- Cambiar la configuración *Qubino ZMNHNDX Rasante 1D* para usar las propiedades
- Cambiar la configuración *Fibaro FGSS101 Humo* para usar las propiedades
- Cambiar la configuración *Hogar inteligente Everspring AN-179* para usar las propiedades
- Cambiar la configuración *Aeotec ZWA009 AERQ* para usar las propiedades
- Cambiar la configuración *Sirena exterior Popp* usar las propiedades (en parte)
- Cambiar la configuración *Aetoec ZWA080* para usar las propiedades (en parte) y agregar controles de sonido (volumen y sonido)
- Cambio de propiedad *Calor* con gestión de casos de clase *SENSOR DE ALARMA*
- Cambio de propiedad *Fumar* con gestión de casos de clase *SENSOR DE ALARMA*
- Cambio de propiedad *Termostato de punto de consigna* para tener las instrucciones con el widget *botón* por defecto
- Editando la imagen *Sirena exterior Popp* recorte

**Adiciones de configuración**

- Configuración añadida *Seguro Hortsmann SRT321* (propiedades : Modo Termostato, Estado Operativo Termostato, Acción Modo Termostato, Punto Consigna Termostato, Temperatura, Batería)
- Imagen añadida para *Seguro Hortsmann SRT321*
- Configuración añadida *Bloqueo Hoppe ConnectSense* (propiedades : Apertura, Sensor de notificaciones, Inclinación, Batería)
- Imagen añadida para *Bloqueo Hoppe ConnectSense*
- Se agregaron parámetros para *Bloqueo Hoppe ConnectSense*

*Si se ve afectado por una modificación o adición de configuración, realice una sincronización y luego vuelva a cargar los comandos del equipo "recreando todos los comandos" después de la actualización.*

# 28/11/2022

**Arreglos**

- Corrección en *parámetros de configuración* con el fin de *para evitar enviar 0 en primer lugar* durante una elección de tipo lista (sobre un parámetro que lo propone))

**Mejoras**

- Adición de un *RELANZAR* necesario del motor *en caso de exclusión fallida*
- Visualización del mensaje relativo a la *0 pedido* que en el caso de un *nodo iniciado*

**Cambios de configuración**

- Cambiar la configuración *Aeotec TriSensor* para usar las propiedades
- Cambiar la configuración *Hank HKZW-MS02* para usar las propiedades
- Cambiar la configuración *Filio PSM02* para usar las propiedades
- Cambiar la configuración *Primavera eterna AN158* para usar las propiedades
- Cambiar la configuración *Sensor de habitación Danfoss* para usar las propiedades
- Cambiar la configuración *Vision ZS Golpes y vibraciones* para usar las propiedades
- Cambiar la configuración *Controlador Fibaro Walli* para usar las propiedades
- Cambiar la configuración *Fibaro FGD211* para usar las propiedades
- Cambiar la configuración *Enchufe De Pared Fibaro España* para usar las propiedades
- Cambiar la configuración *Fibaro Walli Outlet F* para usar las propiedades
- Cambiar la configuración *Atenuador Fibaro Walli* para usar las propiedades
- Cambiar la configuración *Fibaro RGBW441* usar la propiedad *efectos fibaro*
- Cambio de propiedad *Luminancia* con adición de una moda en %
- Cambio de propiedad *Termostato de punto de consigna* para tener las instrucciones con el widget *botón* por defecto
- Cambio de propiedad *Color* con adición de un tipo *efectos fibaro* (dejar de describir los comandos)
- Adición de un *ajuste recomendado* para el *Filio PST02*

*Si se ve afectado por una modificación o adición de configuración, realice una sincronización y luego vuelva a cargar los comandos del equipo "recreando todos los comandos" después de la actualización.*

# 25/11/2022

**Mejoras**

- Adición de un *Gestión de versiones de la interfaz de usuario de ZwaveJS*
- Adición de un mensaje en el *centro de mensajes* y en la página del complemento cuando ZwaveJS UI *necesita ser actualizado*
- Paso de la *Versión de la interfaz de usuario de ZwaveJS* a versión *8.5.1*

**Cambios de configuración**

- Cambiar la configuración de *Enchufe inteligente Hank (HKZW-SO08)* (Problema de visualización)

*Si se ve afectado por una modificación o adición de configuración, realice una sincronización y luego vuelva a cargar los comandos del equipo "recreando todos los comandos" después de la actualización.*

# 23/11/2022

**Mejoras**

- Adición de una imagen para un *parámetro o despertar* a la espera
- Adición de una página que permite ver todos los *configuraciones* a la espera
- Adición de una página webapp que permite ver todos los *configuraciones* a la espera
- Adición de un botón de eliminar en la página *A la espera*. Le permite eliminar una línea en espera. Esto no elimina la orden que se ha enviado al controlador, sino solo la información pendiente en Jeedom (útil para los parámetros de calibración, por ejemplo, que nunca toman el valor enviado o cualquier otro parámetro donde sería inútil))


**Cambios de configuración**

- Cambiar la configuración *Cerradura Popp Strike* para usar la propiedad de apertura (para el contacto)
- Cambiar la configuración *Fibaro FGD212* para agregar la gestión de diferencias desde el firmware 3.5 (punto final 1 en firmware <= 3.4 punto final 0 en el objetivo solo de lo contrario)
- Cambio de propiedad *Cerradura de la puerta* para agregar Desbloqueo (con tiempo de espera) en todos los dispositivos que usan esta propiedad

**Adiciones de configuración**

- Configuración añadida *Enchufe inteligente Hank (HKZW-SO08)* (propiedades : Interruptor, poder, energía, voltaje, corriente, escena)
- Configuración añadida *Atenuador de pie Idinio* (propiedades : Multinivel, Poder, Energía)
- Se agregaron parámetros para *Enchufe inteligente Hank (HKZW-SO08)*

*Si se ve afectado por una modificación o adición de configuración, realice una sincronización y luego vuelva a cargar los comandos del equipo "recreando todos los comandos" después de la actualización.*

# 21/11/2022

**Arreglos**

- Cambiar en el *redes gráficas* : solo las primeras rutas directas se volverán rojas al pasar el mouse sobre un nodo para evitar el error en ciertas instalaciones y ciertos navegadores *Tamaño máximo de pila excedido* relacionado con las recursiones

**Mejoras**

- Para tomar en consideración *actualizarNodoCC* como una propiedad de un comando creado manualmente para actualizar un CC
- Adición de un *desplazamiento horizontal* en la pestaña/modal de red *tabla de ruteo* (Gracias @Salvialf)
- Desplazamiento de *contador de pedidos* en el lado derecho de la página del equipo

**Cambios de configuración**

- Cambiar la configuración *Fibaro FGR223* usar el poder de la clase multinivel
- Cambiar la configuración *Fibaro FGR222* usar el poder de la clase multinivel
- Cambiar la configuración *Fibaro FGRM222* usar el poder de la clase multinivel
- Cambiar la configuración *Devolo Mt02648* para usar propiedades y agregar configuraciones recomendadas
- Cambiar la configuración *Devolo Mt02647* para usar propiedades y agregar configuraciones recomendadas
- Cambiar la configuración *Cerradura Popp Strike* para usar las propiedades
- Cambiar la configuración *Aeotec ZWA011* para usar las propiedades y agregar su imagen

*Si se ve afectado por una modificación o adición de configuración, realice una sincronización y luego vuelva a cargar los comandos del equipo "recreando todos los comandos" después de la actualización.*

# 18/11/2022

**Mejoras**

- Acceso agregado a la interfaz de usuario de ZwaveJS *(en el menú Red Z-Wave, pestaña Acciones)*. No lo use para cambiar la configuración!
- Adición de un puerto para el caso particular de algunas Raspberry Pi *(se añadirán más según sea necesario)*
- Se agregó un contador de comando para cada equipo *(ignorando los 4 comandos técnicos)*
- Añadida ayuda dinámica en el caso de cero comandos.

# 15/11/2022

- Cambiar a versión estable

# 05/04/2022

- Beta 1ra fase
