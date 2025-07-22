# Complemento de contador virtual

El complemento **Contador virtual** le permite crear medidores de energía en kilovatios-hora a partir de índices sin procesar *(Wh/kWh)* y/o poderes *(Vatios/kW)*, ya sea a tarifa única o en horas punta/valle. Este complemento también te permite crear contadores por usuario *(Personalizado/OCPP)*.

>**IMPORTANT**
>
>Les options relatives au protocole OCPP ne sont visibles que **si le plugin OCPP est installé**.

# Configuration

## Configuración del complemento

![Configuración del complemento](./images/config_plugin.jpg)

- **Precio predeterminado**: Seleccione el precio predeterminado para medidores virtuales *(tarifa única u horas punta/valle)*.
- **Alternar precios**: En caso de precios predeterminados en horas pico/de menor actividad, seleccione el comando de alternancia de información/binario de precios predeterminados *(1=horas pico/0=horas valle)*.
- **OCPP**:
  - **Creación automática de contadores**: Marque la casilla para crear automáticamente contadores por usuario para cualquier nueva transacción OCPP.
  - **Forcer**: Crée instantanément tous les compteurs OCPP des utilisateurs autorisés sans devoir attendre une transaction.

## Configuración del equipo

Para agregar un nuevo contador virtual, haga clic en el botón **+Agregar**.

- **Tipo de medidor**: Seleccione el tipo de medidor *()*.
- **Precios**: Adapte los precios si es necesario.
- **Alternar precios**: En el caso de precios pico/no pico, adapte el comando de alternancia de precios información/precio binario si es necesario.

---

- **Identificador**: Para medidores tipo custom o OCPP indicar el identificador de usuario.

### Datos a procesar

Contadores virtuales de tipo **OCPP** recuperar automáticamente datos de transacciones para cada usuario.

Para otros, debes hacer clic en el botón **Gestionar pedidos** de la sección **Datos a procesar** Entonces **Añadir una entrada**.

- **Contadores estándar**:

  ![Datos compteur standard](./images/default_input.jpg)

	- **Datos**: Información/control digital de los datos brutos a procesar.
	- **Unidad**: Seleccione la unidad si no se detecta automáticamente *(Wh/kWh/W/kW)*.

- **Contadores personalizados**:

  ![Datos compteur personnalisé](./images/custom_input.jpg)

	- **Datos**: Información/control digital de los datos brutos a procesar.
	- **Unidad**: Seleccione la unidad si no se detecta automáticamente *(Wh/kWh/W/kW)*.
	- **Identificador**: Complete el comando info/other especificando el identificador del usuario actual *(el valor debe corresponder al identificador definido a nivel de equipo para que se registre la transacción)*.

## Commandes

Les commandes suivantes sont créées, en fonction de la tarification:

- **Precio único**:
  - **Índice** *(Información/numérico en kWh)*.

- **Horas pico/valle**:
  - **Índice de horas pico** *(Información/numérico en kWh)*.
  - **Índice de horas valle** *(Información/numérico en kWh)*.
  - **Index total** *(Información/numérico en kWh)*.

Et en fonction du type de compteur:

- **Compteurs OCPP et compteurs personnalisés *(si données brutes en W ou kW)***:
  - **Puissance** *(Info/numérique en W)*.
