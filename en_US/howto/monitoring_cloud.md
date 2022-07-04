# Cloud monitoring

## Description

Cloud monitoring is a paid Jeedom SAS service that constantly monitors your Jeedom(s) and warns you of any problems.

Depending on the number of months taken, you will be entitled to free months : 

- 12 months : 1 month free
- 24 months : 4 months free
- 36 months : 8 months free

## What is monitored

Jeedom regularly sends information from the health page to our monitoring service, which analyzes it and warns you in the event of a problem. In addition, if your box does not send information for more than 15 minutes, our monitoring service will warn you that there is a problem.

## How am I notified

By default you are notified by an email on your email configured in your profiles but you can in the cloud monitoring configuration (on your market profiles page) : 

- Put another email address (only one possible)
- Add an alert on Telegram
- Add an alert on Slack (you just have to give the Webhook address)
- Add an SMS alert (note this requires that you have SMS credit on the market)
- Add an alert by Notification (requires the mobile app) 

> **Telegram**
>
> You can find your chatid from jeedom by going to the telegram equipment then advanced configuration of the order of the desired recipient then the information button and there in the configuration field you have the chatid

> **IMPORTANT**
>
> Be careful, we see a lot of users with "mailinblack" mailboxes, which during the 1st exchange ask the sender to validate a link to prove that it is indeed a human. This system is not compatible with the mail sending system of the monitoring service. So thank you on your market profiles page to put an email address that does not use this system without it you will never receive an alert from the system.

## How to activate it

The procedure is quite simple, you have to : 

- have cloud monitoring credit (it is purchased in batches of 1 month, so you can take 2 months then stop 6 months then resume after)
- have jeedom 3.3.44 minimum

After adding cloud monitoring credit, you must either wait a few hours (about 24 hours), or in Jeedom, on the configuration part then update click on the "test" button for connection to the market (this forces the Jeedom to recover market information and therefore the fact that the cloud monitoring service is active).

>**IMPORTANT**
>
> Once the service is activated, it monitors all Jeedom connected to your account. It is however possible from Jeedom 4.2 to deactivate monitoring from its configuration (Market/update tab)

>**IMPORTANT**
>
> For notifications, simply retrieve the arn of your mobile, it is located in the mobile plugin, on your mobile equipment, then access the "notification" tab then copy the "ARN" line, be careful, you must only take this what is after "arn:aws:sns:eu-west-1:507915066327:endpoint/"

## It's compatible with everything ?

- Smart (tested)
- Debian x64 Stretch (tested)
- Debian x64 Jessie
- RPI
