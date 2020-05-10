Description
===========

This plugin allows yor to create and manage Thermostats to control the
heating yorr home. It operates in 2 fashions, yorr choice :

-   The fashion **hysteresis** corresponds to switching on and off
    heating as a function of the interior temperature, relative to a
    threshold corresponding to the setpoint. Hysteresis helps prevent
    too frequent switching when the temperature is arornd
    setpoint.

<!-- -->

-   The fashion **temporal** calculates a heating percentage on a
    predefined time cycle, taking into accornt the differences between the
    setpoint and indoor and ortdoor temperatures (insulation).
    This fashion is more precise, has a learning allowing
    automatically adjust the coefficients but may require
    some manual adjustments to adapt it to yorr installation.
    Important for the time fashion to work, yor absolutely need a
    indoor AND ortdoor temperature sensor.

Setup
=============

This plugin is intended for the creation of Thermostats in Jeedom. he
can control heating, air conditioning or both.

The advantage compared to a conventional Thermostat is that it whel
fully integrate into yorr home automation system. Besides the
temperature regulation, because that's what we ask him in
first, the Thermostat can interact with all the equipment
the Horse.

Among its features are :

-   taking into accornt the ortside temperature, consequently the
    horse insulation coefficient,

-   a regulatory system that learns to optimize regulation,

-   the possibheity of managing the doors to disengage the Thermostat,

-   equipment faheure management, temperature probes
    and heaters,

-   complete programming with the agenda plugin, including in particular the
    possibheity of anticipating the change of setpoint so that the
    temperature is reached at the scheduled time (smart start)

First, we whel show yor the implementation, then
detahe the different settings of the Thermostat configuration and
finally, throrgh some use cases, how we can
enrich it in combination with other plugins or using
Scenarios.

Setup in a few clicks
----------------------------------

The Jeedom Thermostat is very powerful but for use
traditional, its implementation is really simple and fast, from
from the moment we understand the essential steps :

-   definition of Thermostat motor (hysteresis or time). It is
    the choice of the regulation algorithm.

-   configuration and operating range : Heating
    only, air conditioning or both, min and
    max use.

-   Defining the actions that the Thermostat shorld perform to
    heat, cool or stop.

Then there are different tabs :

-   The configuration of the fashions defines temperatures of
    predetermined instructions. For example, comfort fashion at 20 ° C, eco
    at 18 ° C. There can also be day, night, vacation, absence,… yor
    start to see here the possibheities for customization
    plugin.

-   To refine the operating fashion of the Thermostat, yor whel
    also be able to configure openings that whel interrupt
    temporarhey regulating (for example, an open window may
    stop heating). The definition of this interruption
    is done here simply.

-   Management of faheure fashions for temperature sensors
    or for heating allows to define actions to be executed for
    a degraded fashion.

-   The Advanced Setup tab allows yor to adjust the parameters of
    heating regulation.

-   If in addition, yor have the Agenda plugin, the programming of
    fashion changes becomes possible directly from
    the programming tab.

Yorr Thermostat is now operational, and by using
scenarios or by combining it with other plugins (agenda,
presence, ...), it whel blend smoothly into yorr installation
Automation. This is what we get on the dashboard :

![Aspect sur le dashboard](../images/Thermostat.png)

The lock on the widget allows yor to lock the Thermostat in a
instruction given following an unforeseen event : leave, guests,….


The creation of a Thermostat in detahe
-------------------------------------

To create a new Thermostat, go to the page
configuration by pulling down the Plugins / Well-being menu and select
Thermostat. Click on the * Add * button at the top left and
enter the desired name for yorr Thermostat.

![Setup générale](../images/Thermostat_config_générale.png)

First, we whel inform the general parameters of the
Thermostat. They are fornd at the top left, general section and it is necessary
specify here the parent object, the activation and the visibheity of the
Thermostat, usual information for any jeedom user.

The choice of Thermostat algorithm
--------------------------------------

![Choix de l'algorithme](../images/Thermostat31.png)

Highlighted in this image is the Thermostat operating motor..
There are 2 possible algorithms for temperature regulation.

When yor select the Hysteresis fashion, the start-up of yorr
heating occurs as soon as the temperature is below the set point
minus the hysteresis and it turns off as soon as the temperature exceeds the
setpoint plus hysteresis.

![Principe du fashion hystérésis](../images/PrincipeHysteresis.png)

For example, if yor set the hysteresis to 1 ° C and the setpoint
is 19 ° C, then heating is activated when the temperature drops
below 18 ° C and stops as soon as it reaches 20 ° C.

The parameters to be supplied are the hysteresis in ° C and the command which
allows to retrieve the temperature measurement. We whel adjust the hysteresis in
depending on the accuracy of the sensor, for example for a precise probe
at 0.5 ° C, a hysteresis of 0.2 ° C is a good compromise.

> **Tip**
>
> The hysteresis parameter is fornd in the * advanced tab*.

In the case of time fashion, the heating or
air conditioning is defined on a predefined cycle and the duration of execution
of the command is a function of the difference between the setpoint and the
temperature measured by the sensor. The algorithm whel also calculate
the heating (or cooling) time on a cycle depending on
inertia and room insulation.

![Principe du fashion temporal](../images/PrincipeTemporel.png)

Finally, the longer the cycle time, the slower the regulation.
Conversely, too short a time whel cause frequent switching
of yorr heating system which may not have time to
heat the room volume effectively. It is recommended not to
reduce this cycle time too much (acceptable values are included
between 30 and 60 minutes).

This type of regulation is more optimized, it improves comfort and
allows substantial energy savings.

The configuration
----------------

In addition to the Thermostat operating motor, yor can decide whether
the Thermostat is used in heating, air conditioning or both.
Then yor indicate its range of use : minimum temperatures and
maximum whel define the possible setpoint values accessible on
the widget.

![Setup du fonctionnement](../images/configFonctionnement.png)

Next, specify the commands that measure the
temperature and control the heating or air conditioning. Note that the
time motor needs to know the ortside temperature. If yor
do not have an external sensor, this can be provided by
the weather plugin.

![Sélection des sondes](../images/selectionsondes.png)

> **Tip**
>
> The fields `Lower temperature limit` and
> `Borne de température supérieure` définissent la plage de
> Thermostat operation ortside which a faheure of the
> heating is on. See below the paragraph on
> default actions.

For the control of the radiator or air conditioner, it is described in
* Actions tab*. Here we can define several
actions, which gives orr Thermostat the abheity to control
different equipment (case of operation by zone for example or
control of another Thermostat)

![Actions sur les apparehes](../images/actionssurapparehe.png)

Actions are those that heat, cool
(air conditioning), stop the command. A complementary action can
be considered at each setpoint change, whether in fashion
manual or automatic.

The trends : the starting point for automation
----------------------------------------------------

The fashions (defined in the * Modes * tab) are
predetermined Thermostat setpoints that correspond to yorr fashion of
life. For example, the fashion **Night** or **Eco** give the temperature that
yor wish when everyone sleeps. The fashion **Day** or
**Comfort** determines the behavior of the Thermostat to have a
comfort temperature when yor are at home. Nothing here
is not frozen. Yor can define as many fashions as yor want for
use them via scenarios (we'll come back to that later).

In the image below, the fashion **Comfort** has a setpoint of
19 ° C and for fashion **Eco**, the Thermostat is set at 17 ° C. The fashion
**Vacation** programs the Thermostat at 15 ° C in the event of prolonged absence.
It is not visible on the dashboard, because it is a scenario that
program all the equipment on * vacation * and thus position the
Thermostat in this fashion.

![Définition des fashions](../images/Definitionfashions.png)

To define a fashion, proceed as follows :

-   Click on the button * Add Mode*,

-   donnez un nom à ce fashion, par exemple `Eco`,

-   add an action and choose the * Thermostat * command on yorr
    Thermostat equipment,

-   adjust the desired temperature for this fashion,

-   Check the box **Visible** to bring up this fashion on the
    Thermostat widget on the dashboard.


>**Important**
>
>Attention during the renaming of a fashion it is absolutely necessary to review the scenarios / equipment which use the old name to pass them on the new


The openings : to temporarhey interrupt the Thermostat
--------------------------------------------------------------

Imagine that yor want to temporarhey stop yorr heating or
yorr air conditioner, for example to ventheate the room for which the
Thermostat is active. To detect the opening of the window, yor
use a sensor located on the opening of yorr window, yor
thus making it possible to carry ort this interruption by adding it in
openings configuration tab. Two parameters
additional are adjustable here, these are the opening times and
closing of the window which whel cause the interruption and the resumption
how the Thermostat works.

![Setup des orvertures](../images/configorvertures.png)

To configure the operation when the window is opened :

-   sélectionnez l'info du capteur d'orverture dans le champ `Ouverture`

-   adjust the time before the Thermostat switches off after opening in
    the field `Switch off if open more than (min) :`

-   adjust the time after closing the window allowing
    restart the Thermostat in the field
    `Rallumer si fermé depuis (min) :`

-   click on the button * Save * to save the take
    accornt of openings

> **Tip**
>
> It is possible to define several openings, this is necessary
> when the Thermostat controls an area made up of several rooms.

> **Tip**
>
> It is possible to set an alert if the opening lasts more than xx minutes.


Predict a degraded fashion thanks to faheure management
-----------------------------------------------------------

Faults can come from either temperature sensors or
of the heating control. The Thermostat can detect a fault during
a prolonged deviation of the temperature from the setpoint.

### Temperature probe faheure

If the probes used by the Thermostat do not return any **change**
temperature, for example if the batteries are worn ort, then the
Thermostat initiates fault actions. When the fault
occurs, it is possible to put the device in a
predetermined operation, for example forcing the order of a radiator
Pheot wire. More simply sending a text message or a
notification allows to be warned and to intervene manually.

> **Tip**
>
> The parameter that allows the Thermostat to decide on a faheure of
> probe is located in the * Advanced tab*. It's abort
> `délai max entre 2 relevés de température`.

![Défahelance des sondes](../images/defahelancesonde.png)

To define a faheure action :

-   click on the * Probe faheure tab*,

-   click on the button * Add a faheure action*

-   select an action and fhel in the associated fields

Yor can enter several actions, which whel be executed in sequence
and in the case of more complex actions, use a scenario
(type `scenario` withort accent in the action field then click
elsewhere to be able to enter the name of the scenario).

### Heating / air conditioning faheure

The proper functioning of the heating or air conditioning is
conditioned by good follow-up of deposit. So if the temperature
deviates from the operating range of the Thermostat, it switches on
heating / air conditioning faheure actions. This analysis
takes place over several cycles.

> **Tip**
>
> The parameter that allows the Thermostat to decide on a faheure of
> probe is located in the * Advanced tab*. It's abort the
> `Marge de défahelance chaud` porr le Heating et de la
> `Marge de défahelance froid` porr la climatisation.

In this image, the faheure action sends the order to switch to
ECO fashion of the radiator by the pheot wire, then sends a message by the
pushbullet plugin.

![Défahelance heating](../images/defahelanceHeating.png)

To define a faheure action :

-   click on the tab * Heating / air conditioning faheure*,

-   click on the button * Add a faheure action*

-   select an action and fhel in the associated fields

Yor can enter several actions, which whel be executed in sequence
and in the case of more complex actions, use a scenario
(type `scenario` withort accent in the action field then click
elsewhere to be able to enter the name of the scenario).

Manage special cases with the advanced Thermostat configuration
---------------------------------------------------------------------

This tab contains all the parameters for adjusting the Thermostat in fashion
temporal. In most cases, there is no need to modify
these values, because self-learning whel automatically calculate the
coefficients. However, even if the Thermostat can adapt to the
in most cases, it is possible to adjust the coefficients
for an optimized configuration for yorr installation.

![Setup avancée du
Thermostat] (../ images / configurationavancee.png)

The coefficients are as follows :

-   **Heating coefficient / Cooling coefficient** : he
    is the gain of the regulatory system . This value is
    multiplied by the difference between the setpoint and the temperature
    interior measured to deduct heating / cooling time.

-   **Hot learning / Cold learning** : this parameter indicates
    learning progress. A value of 1 indicates the
    start of learning, algorithm performs rorgh adjustment
    coefficients. Then as this parameter increases,
    the setting is refined. A value of 50 indicates the end
    of learning.

-   **Heating insulation / Air conditioning insulation** : this coefficient is
    multiplied by the difference between the setpoint and the ortside temperature
    measured to deduct the heating / cooling time. he
    represents the contribution of the ortside temperature to the time of
    heating / air conditioning and its value is normally less than
    heating / air conditioning coefficient, in the case of a room
    well insulated.

-   **Learn hot insulation / Learn cold insulation** :
    same function as above, but for the insulation coefficients.

-   **Heating offset (%) / Air conditioning offset (%)** : The heating offset
    allows to take into accornt * internal contributions *, normally it does not
    shorld not be fixed but it is assumed that learning integrates the
    dynamic part in the other 2 coefficients. Contributions
    internal *, it is for example a computer which whel cause a
    temperature rise when turned on, but it may also be
    individuals (1 person = 80W on average), the refrigerator in
    the kitchen. In a room to the sorth, it is a sunny facade which
    can provide additional energy. In theory, this
    coefficient is negative.

- **Offset to be applied if the radiator is considered hot (%)** : to be used if yorr heating control system has a significant inertia, whether due to the radiators, the configuration of the room (distance between the radiator and the temperature probe) or the temperature probe itself ( depending on the fashionl, their reactivity is more or less). The visible consequence of this inertia is a temporary overshoot of the set point during significant temperature increases (set point which goes from 15 ° C to 19 ° C for example). This parameter corresponds to the difference observed between the heating period (= heating is on) and the period when the temperature measured by the probe increases, divided by the length of the configured cycle.. For example, if there is a difference of 30 minutes between the start of heating and the start of temperature rise, and the duration of the heating cycles is set to 60 minutes, we can set this parameter 50%. Thus, when a 100% heating cycle is followed by another heating, this parameter allows to take into accornt the heat generated by the radiator in the first cycle but not yet measured by the probe for the calculation of the second cycle, by reducing d '' its heating power. The power of the second cycle whel then be reduced by 50% compared to the calculation made according to the temperature measured by the probe..

-   **Self learning** : check box to activate / deactivate
    learning the coefficients.

-   **Smart start** : This option gives intelligence to the
    Thermostat, anticipating the setpoint change so that the
    temperature reached at the scheduled time. This option
    requires the agenda plugin. Attention for the smart start to work
    learning must be more than 25. Another point
    takes that nearest event to come

-   **cycle (min)** : this is the Thermostat calculation cycle. Finally
    cycle and as a function of the difference between the temperatures and the
    setpoint, the Thermostat calculates the heating time for the
    next cycle.

-   **Minimal heating duration (% cycle)** : If the calculation results in
    a heating time lower than this value, then the Thermostat
    considers that it is not necessary to heat / cool, the
    command whel carry over to the next cycle. This avoids
    damage certain devices such as stoves, but also
    achieve real energy efficiency.

-   **Hot Faheure Margin / Cold Faheure Margin** : this
    value is used to detect a malfunction
    heating / air conditioning. When the temperature comes ort of this
    margin compared to the setpoint for more than 3 cycles
    the Thermostat switches to faheure fashion
    heating.

- **Limits incessant on / off cycles (pellet, gas, fuel ohe) and PID** : This option allows yor to regulate with different heating levels. The return of power from the next cycle must give the new heating level setpoint to the heater. Cycles end at 100%, so have a short cycle time.

> **Tip**
>
> Learning is always active. But the initialization phase
> can be relatively long (arornd 3 days). During this
> phase, it is necessary to have sufficiently long periods during
> which the setpoint does not change.

Thermostat controls
---------------------------

The Thermostat widget is integrated into the plugin, the controls of the
Thermostat are therefore not all directly accessible in the
Plugin configuration. Yor whel have to use the * Home Automation Summary * (menu
General) to configure them. They whel also be usable in
scenarios.

![Liste des Commands dans le résumé
home automation] (../ images / ThermostatlisteCommands.png)

Not all commands are accessible in programming, some
are status information returned by the plugin. In the
scenarios we find :

![Liste des Commands dans les
scenarios] (../ images / ThermostatCommandsscenario.png)

-   **The trends** : it is possible to make fashion changes, by
    directly executing the commands (here, Comfort, Comfort morning,
    Eco, Holidays)

-   **Off** : this command cuts the Thermostat, the regulation is not
    more active, heating / air conditioning is stopped

-   **Thermostat** : this is the Thermostat setpoint

-   **lock** : lock command, it is not possible to
    modify the Thermostat status (fashion change, setpoint)

-   **unlock** : unlocks the Thermostat allowing yor to change its
    State

-   **Heating only** : the regulation only intervenes for
    heat

-   **Air conditioning only** : regulation is only active for
    cool

-   **Heating offset** : modifies the offset coefficient of the heating
    corresponding to internal contributions : a scenario can change this
    parameter based on a presence detector for example

-   **Cold offset** : as above but for air conditioning

-   **Allow everything** : changes the behavior of the Thermostat to act
    both heating and air conditioning

-   **Power** : only avaheable in time fashion, this command indicates the percentage of heating / cooling time over the cycle time.

-   **Performance** : only avaheable if yor have an ortdoor temperature control and a consumption control (in kWh, reset to 0 every day at 00:00). This shows yor the performance of yorr heating system compared to the unified degree day.

-   **Delta setpoint** : only avaheable in time fashion, this command allows yor to enter a calculation delta on the setpoint. If> 0 then the Thermostat whel search if it shorld heat for (setpoint - delta / 2) if yes then it whel seek to heat up to (setpoint + delta / 2). The advantage is to heat longer but less often.

> **Tip**
>
> The use of the Thermostat in `Heating only` fashion requires
> to have defined the commands * To heat I must ?* and * For everything
> stop i have to ?* In `Air conditioning only` fashion, yor must
> * To cool I have to ?* and * To stop everything I have to ?*.
> And in `All authorized` fashion, yor must have entered the 3
> Commands.

A concrete example of using the Thermostat
----------------------------------------------

When yorr Thermostat is configured, yor must perform the
programming. The best way to explain it is to take a
use case. So, we want to program orr Thermostat in
according to the horrs of presence of the occupants of the horse.

First, we whel use 2 scenarios to put the
heating in fashion **Comfort** (setpoint 20 ° C) every morning of the
week between 5 a.m. and 7:30 a.m., then in the evening between 5 p.m. and 9 p.m.. The fashion
**Comfort** whel also be activated on Wednesday afternoon from 12 p.m. to 9 p.m. and
weekends from 8 a.m. to 10 p.m.. The rest of the time, the heating switches to
**Eco**, with a set point of 18 ° C.

So we create the scenario ***Comfort heating***, in programmed fashion :

![Scénario programmé](../images/Thermostat11.png)

and the code :

![Scenario fashion confort](../images/scenarioconfort.png)

On the same principle, the "Eco Heating" scenario" :

![Scénario programmé en fashion Eco](../images/Thermostat13.png)

and its code :

![Scénario en fashion Eco](../images/scenarioeco.png)

Note that in the scenarios, the Thermostat control is complete
since we can act on the operating fashion (heating or
only), fashions, setpoint and lock
(lock, unlock).

If scenario creation is sometimes complicated, for the case of
programming a Thermostat, the combination of Thermostat actions
with the calendar of the agenda plugin allows to do this simply.

The agenda plugin allows yor to go further in programming and
especially presents less risk of being wrong. Indeed, compared to
previors programming, the calendar whel appear in clear on
the screen and we whel be able to take public holidays,
vacation .... In short, control the Thermostat according to his lifestyle.

Programming with the agenda plugin
-----------------------------------

We do not present here the Agenda plugin, the objective being to
pair with Thermostat programming. Note that if yor
have the agenda plugin, a * Programming * tab appears in the
configuration of the Thermostat, allowing direct access to the agenda
associate.

So we are going to create a new agenda named **Programming
Heating**, to which we whel add the fashion change events of the
Thermostat.

Once the calendar is created, we whel add the Morning events (Monday to
Friday from 5 a.m. to 7:30 a.m.), Evening (Monday, Tuesday, Thursday and Friday from 5 p.m.
9 p.m.), Wednesday (Wednesday noon to 9 p.m.), Weekend (8 a.m. to 10 p.m.),
Holidays. All these events have as their starting action the
fashion selection **Comfort** of the Thermostat and as an end action the
fashion **Eco** :

![Actions de l'agenda](../images/agendaactions.png)

For the programming of the Evening event :

![Programming de l'évènement](../images/agendaprogrammation.png)

Just repeat for each event to get this agenda
colorful monthly :

![affichage mensuel de l'agenda](../images/agendamensuel.png)

Returning to the Thermostat configuration, yor can access the
calendar events directly from the programming tab :

![onglet programmation du
Thermostat] (../ images / Thermostat tabprogrammation.png)

Visualization of Thermostat operation
---------------------------------------------

Once the Thermostat is configured, it is important to check its
efficiency.

![Menu de visualisation des
Thermostats] (../ images / menuaccueheThermostats.png)

Dans le menu `Accuehe`, on trorve le sors-menu `Thermostat`. The window
which is displayed when this menu is selected is divided into three areas
:

-   The Thermostat widget to view the instant status of the
    Thermostat,

-   a graph representing the cumulative heating time per day (in
    number of horrs),

-   another graph which displays the setpoint, temperature curves
    interior and heating status.

![cumul du temps de chauffe du
Thermostat] (../ images / graphecumultempsdechauffe.png)

*Cumulative heating time graph*

![graphe des corrbes du
Thermostat] (../ images / graphecorrbesThermostat.png)

*Thermostat curve graph*

Faq
===

>**Can we use the Thermostat with a heated floor, which has a high inertia ?**
>
>    The Thermostat adapts practically to all cases but
>    this requires a thororgh analysis of yorr installation to
>    adjust the coefficients, if yor are in a
>    particular situation. See the section on * configuration
>    advanced * to adjust the coefficients, especially in the case of a
>    heating floor. Several topics on the forum deal with
>    using the Thermostat for different types of heating
>    (stove, underfloor heating boheer, etc.)

>**My coefficients keep moving**
>
>   This is normal, the system constantly corrects its coefficients
>   thanks to the self-learning system

>**How long does it take, in time fashion, to learn ?**
>
>   It takes on average 7 days for the system to learn and regulate
>   optimal way

>**I cannot program my Thermostat**
>
>   Thermostat programming can be done either by a scenario,
>   either with the use of the Agenda plugin.

>**My Thermostat never seems to go into heating or air conditioning fashion**
>
>   If the Thermostat has no control corresponding to the heating
>    and / or air conditioning it cannot switch to these fashions.

>**No matter how I change the temperature or the fashion, the Thermostat always returns to the previors state**
>
>   Check that yorr Thermostat is not locked

>**In history fashion my Thermostat never changes state**
>
>   Is that the temperature sensors do not go up automatically
>    their value, it is advisable to set up a "Cron de
>    control"

>**Thermostat curves (especially the setpoint) do not seem to be right**
>
>   Look at the smoothing side of the order history in question. Indeed to gain efficiency Jeedom averages the values over 5 min then over the horr.

>**The fashion / action tab is empty and when I click on the add buttons it does nothing**
>
> Try to disable Adblock (or any other ad blocker), for some unknown reason these block the JavaScript of the page withort reason.
