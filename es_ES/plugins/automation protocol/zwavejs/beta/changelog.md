# Registro de cambios Z-Wave JS

>**IMPORTANTE**
>
>Si no hay información sobre la actualización, significa que se trata solo de la actualización de la documentación, la traducción o el texto.

# XX/11/2022

**Cambios de configuración**

- Cambiar la configuración de *Enchufe inteligente Hank (HKZW-SO08)* (Problema de visualización)

*Si se ve afectado por un cambio o adición de configuración, vuelva a cargar los comandos del equipo "recreando todos los comandos" después de la actualización.*

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

*Si se ve afectado por un cambio o adición de configuración, vuelva a cargar los comandos del equipo "recreando todos los comandos" después de la actualización.*

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

*Si te afecta alguna de sus configuraciones recarga los mandos del equipo "recreando todos los mandos" tras la actualización.*

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
