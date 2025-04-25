# Virtual Counter Plugin

The plugin **Virtual counter** allows you to create energy meters in kilowatt-hours from raw indexes *(Wh/kWh)* and/or powers *(W/kW)*, whether in single rate or in peak/off-peak hours. This plugin also allows you to create counters per user *(Custom/OCPP)*.

>**INFORMATION**
>
>Protocol information **OCPP** will only be visible if the plugin is detected on the machine.

# Configuration

## Plugin Configuration

![Plugin Configuration](./images/config_plugin.jpg)

- **Default pricing**: Select default pricing for virtual meters *(single rate or peak hours/off-peak hours)*.
- **Pricing Switch**: In case of default peak/off-peak pricing, select the default pricing toggle info/binary command *(1=peak hours/0=off-peak hours)*.
- **OCPP**:
  - **Automatic creation of counters**: Check the box to automatically create counters per user for any new OCPP transaction.

## Equipment configuration

To add a new virtual counter, click on the button **+Add**.

- **Meter type**: Select the meter type *(Standard/Custom (WIP)/OCPP)*.
- **Pricing**: Adjust pricing if necessary.
- **Pricing Switch**: In case of peak/off-peak pricing, adapt the info/binary pricing switch command if necessary.

---

- **Identifier**: For custom or OCPP type counters, indicate the user ID.

### Data to be processed

Virtual counters of type **OCPP** automatically retrieve transaction data from each user.

For others, you have to click on the button **Manage Orders** of the section **Data to be processed** Then **Add an entry**.

- **Standard counters**:

  ![Data compteur standard](./images/default_input.jpg)

	- **Data**: Info/digital command of raw data to be processed.
	- **Unit**: Select unit if not automatically detected *(Wh/kWh/W/kW)*.

- **Custom counters** *(WIP)*:

  ![Data compteur personnalisé](./images/custom_input.jpg)

	- **Data**: Info/digital command of raw data to be processed.
	- **Unit**: Select unit if not automatically detected *(Wh/kWh/W/kW)*.
	- **Identifier**: Fill in the info/other command specifying the identifier of the current user *(the value must match the identifier defined at the equipment level for the transaction to be counted)*.

## Commandes

The following orders are created based on the pricing:

- **Single rate**:
  - **Index** *(Info/digital in kWh)*.

- **Peak hours/Off-peak hours**:
  - **Full hour index** *(Info/digital in kWh)*.
  - **Off-peak hours index** *(Info/digital in kWh)*.
