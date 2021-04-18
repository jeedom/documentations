# GreenIQ plugin 

Plugin to control automatic watering using the GreenIQ box. It is possible to define the type of operation for the 6 solenoid outputs : 

- Auto : watering of the zone is triggered according to the GreenIQ programming 
- Off : watering is disabled 
- We : watering is started (duration 3h)

![greeniq screenshot1](./images/greeniq_screenshot1.png)

# Setup 

In order to use your GreenIQ with Jeedom, you must request a Client ID and a Secret Client. The request is made by email to <developers@greeniq.co>, the response is made very quickly, normally within 24 hours.

You must also have the login / password provided on the small card that comes with the GreenIQ.

Once the codes are obtained, you must enter them in the plugin like this : ![greeniq1](./images/greeniq1.png)

# Use 

A lot of information is available in the widget : 1. Valve 2 status. Configuration status 3. % progress 4. Watering end time

![greeniq2](./images/greeniq2.png)

The configuration of each valve is also possible and 3 actions are available :

1. Auto : watering of the zone is triggered according to the GreenIQ programming
2. Off : watering is disabled
3. We : watering is started (duration 3h)

# FAQ 

The system retrieves information every 5 minutes.
