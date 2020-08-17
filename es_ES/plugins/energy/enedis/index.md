# Complemento Enedis Linky

Plugin que permite recuperar consumos del contador comunicante *linky* consultando la cuenta del cliente *Enedis*. Como los datos no están disponibles en tiempo real, el complemento recupera los datos de consumo de electricidad del día anterior a cada día.

4 tipos de datos de consumo accesibles :
- el **poder dibujado** por media hora *(en kW)*.
- el **consumo diario** *(en kWh)*.
- el **consumo mensual** *(en kWh)*.
- el **consumo anual** *(en kWh)*.

>**Importante**      
>Il est nécessaire d'être en possession d'un compte-client Enedis : https://mon-compte-client.enedis.fr/.

# Configuration

## Configuración del plugin

El complemento **Enedis Linky** no requiere ninguna configuración específica y solo debe activarse después de la instalación.

Los datos se verifican cada hora entre las 4 a.m. y las 10 p.m. y se actualizan solo si no están disponibles en Jeedom.

## Configuración del equipo

Para acceder a los diferentes equipos **Enedis Linky**, ir al menú **Complementos → Energía → Enedis Linky**.

> **A saber**    
> El botón **+ Agregar** le permite agregar una nueva cuenta **Enedis Linky**.

En la página del equipo, complete el'**Identificador** así como el **Contraseña** de su cuenta de cliente *Enedis* luego haga clic en el botón **Guardar**.

El complemento luego verificará la conexión correcta al sitio *Enedis* y recuperar e insertar en el historial :
- **poder dibujado** : los 48 valores del día anterior *(1 valor por media hora)*,
- **consumo diario** : los últimos 30 días,
- **consumo mensual** : los últimos 12 meses,
- **consumo anual** : los últimos 3 años.

>**Nota**     
>Los datos solo se agregan si están disponibles en su cuenta de cliente *Enedis*.
