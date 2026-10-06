# OCPP Plugin

The **OCPP** plugin allows you to use Jeedom as an OCPP *(Open Charge Point Protocol)* central system. It enables you to monitor one or more electric vehicle charging stations that are compatible with this protocol.

# Setup

## Terminal Configuration

For the plugin to be able to communicate with the gateway, it is essential to configure it correctly. This configuration step varies by model and manufacturer, but the expected outcome is:

- **Protocol version**: Enable the OCPP connection, version 1.6.
- **IP Address/URL/Endpoint**: Enter the address of the OCPP central system *(ws://``IP_LOCALE_JEEDOM``:9000)*.
- **Terminal ID**: Each terminal must have a unique ID to be recognized by Jeedom *(ws://``IP_LOCALE_JEEDOM``:9000/``ID_BORNE``)*.

## Plugin Configuration

Like any Jeedom plugin, the **OCPP** plugin must be enabled after installation. Then, once the dependencies have been installed, the daemon can be started.

Within minutes of the daemon starting up, properly configured charging stations connect to the Jeedom central system. The corresponding devices are created automatically.

>**INFORMATION**
>
>Communication is established by default on port `9000`. This port can be changed in the event of a conflict; the terminal's configuration must be adjusted accordingly.

## Device Setup

### Permissions

By default, any newly created terminal does not allow any charges *(transactions)*.

A drop-down menu allows you to authorize all transactions or select [an authorization group](#permission-groups).

>**IMPORTANT**
>
>In "Allow All" mode, any credentials presented at the terminal are accepted. The **Start Load** command then displays the list of Jeedom users.

### Terminal settings

The **Settings** tab provides access to all of the hub's configuration settings. Some settings can be modified, while others cannot. They are divided into two main categories: those specific to the OCPP protocol and those specific to the manufacturer.

>**INFORMATION**
>
>To display the read-only fields, click the eye icon. Click the crossed-out eye icon to hide them again.

Each device can therefore be configured directly from the Jeedom interface by clicking the **Save Settings to Device** button. A window listing all the changes made will then appear; select the settings to apply, then click **Save** to send them to the device.

>**IMPORTANT**
>
>Any changes to the gateway's configuration settings should be made with full knowledge of the implications, as an error could lead to malfunctions.

# Permission Groups

Click the **Permissions** button to display the permission group management window. Click **Add Group** to add a new group, or select an existing group to edit it.

## Add permissions

For each group, you can add permissions manually or upload/export the permissions file in CSV format.

To add a permissions group, simply click the **Add Group** button and enter the group name.

>**INFORMATION**
>
>Double-click a group's name to rename it.

An authorization consists of:
- **an identifier**: unique for each user *(e.g., an RFID badge—case-insensitive)*.
- **a name**: user-readable identifier *(optional)*.
- **status**: Authorized, Blocked, Expired, or Invalid.
- **expiration date**: the date the authorization expires *(optional, except for Hager terminals, for example)*
- **Authorization for concurrent transactions**: Check the box to allow multiple charges to occur simultaneously for this ID.

Click the **Save Permissions** button to save the permission groups.

# Transactions

Transaction data *(charges)* specific to each context *(all, by device, by authorization)* can be accessed via the **Transactions** button:
- **ID**: transaction identifier.
- **Device**: Name of the Jeedom device.
- **User**: username or user name.
- **Start**: start date.
- **End**: end date.
- **Duration**: total charging time.
- **Power Consumption (Wh)**: total power consumption in watt-hours.
- **Connector**: connector/outlet number.

>**INFORMATION**
>
>Regardless of the list of requested transactions *(all, by terminal, or by user)*, they are updated in real time upon creation or closure.

# Commands

## Terminal

- **Terminal Status** *(info/binary)*: the terminal's activation status.
- **Enable/Disable Access Point** *(action/other)*: Access point availability.
- **Terminal status** *(info/string)*: general status of the terminal.
- **Terminal error** *(info/string)*: last message/error code.
- **Terminal Info** *(info/string)*: additional information.
- **Max. terminal current** *(info/numeric)*: maximum current *(SmartCharging)*.
- **Terminal Current** *(action/slider)*: Set the maximum current for the terminal *(SmartCharging)*.
- **Maximum terminal power** *(info/numeric)*: maximum power *(SmartCharging)*.
- **Terminal Power** *(action/slider)*: Set the maximum power of the terminal *(SmartCharging)*.
- **Software/Hardware Reboot of the Access Point** *(action/other)*: Reboot the access point.

## Connector(s)

- **Connector status** *(info/binary)*: the connector's activation status.
- **Enable/Disable Connector** *(action/other)*: Connector availability.
- **Connector Status** *(info/string)*: connector status.
- **Connector error** *(info/string)*: latest message/error code.
- **Connector Info** *(info/string)*: additional information.
- **Connector user** *(info/string)*: ID of the current user.
- **Start connector job** *(action/select)*: Start a transaction on the connector.
- **Stop connector load** *(action/other)*: Stop the current transaction.

## Measurements

Measurements are automatically created by the plugin based on the **MeterValuesSampledData** configuration defined on the terminal.
Each measurement received generates an **info/numeric** command, which is logged by default, with the appropriate unit *(Wh, W, A, V, Hz, °C, %, RPM)*.
If the terminal provides values per phase, the commands are suffixed with **L1**, **L2**, or **L3**.

### Examples of measures

- **Current.Import – Current Consumed** *(A)*: current drawn *(per phase, if available)*.
- **Current.Export – Current Fed into the Grid** *(A)*: the current fed back into the grid.
- **Current.Offered – Maximum Current** *(A)*: maximum permitted current.
- **Energy.Active.Import.Register – Energy Consumed** *(Wh)*: total energy used.
- **Energy.Active.Export.Register – Energy Fed into the Grid** *(Wh)*: total energy fed back into the grid.
- **Power.Active.Import – Power Consumed** *(W)*: instantaneous power consumption.
- **Power.Active.Export – Power fed into the grid** *(W)*: instantaneous power fed back into the grid.
- **Power.Offered – Maximum Power** *(W)*: maximum permitted power.
- **Voltage** *(V)*: measured voltage *(per phase, if available)*.
- **Frequency** *(Hz)*: mains frequency.
- **Power Factor**: the ratio of active power to apparent power.
- **SoC – State of Charge** *(%)*: the vehicle's battery charge level.
- **Temperature** *(°C)*: internal temperature of the terminal.
- **RPM – Fan Speed** *(RPM)*: the fan's rotational speed.
