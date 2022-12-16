# Registro de cambios Z-Wave JS

>**IMPORTANTE**
>
>Si no hay información sobre la actualización, significa que se trata solo de la actualización de la documentación, la traducción o el texto.

# XX/12/2022

**Adiciones de configuración**

- Configuración añadida *Airzone Aidoo Zwave* (propiedades : Temperatura, modo de termostato, modo de acción del termostato, modo de ventilador del termostato, modo de ventilador del termostato, punto de ajuste del termostato, notificación)
- Imagen añadida para *Airzone Aidoo Zwave*
- Agregar una propiedad *Termostato en modo ventilador*
- Agregar una propiedad *Termostatoventiladordeacción*

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
