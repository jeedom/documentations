# Cloud monitoring

## Description

Cloud monitoring is a paid Jeedom SAS service which permanently monitors your Jeedoms or your Jeedoms and warns you in case of problems.

Depending on the number of months taken, you will have the right to free months : 

- 12 months : 1 month free
- 24 months : 4 months free
- 36 months : 8 months free

## What is being monitored

Jeedom regularly sends the information on the health page to our monitoring service, which analyzes it and alerts you if you have any concerns. .

## How am i warned

By default you are notified by an email on your email configured in your profiles but you can in the cloud monitoring configuration (on your market profiles page) : 

- Put another email address (only one possible)
- Add an alert on Telegram
- Add an alert on Slack (just give the address of Webhook)
- Add an SMS alert (note that this requires that you have SMS credit on the market)
- Add an alert by Notification (requires the mobile app) 

> **Teleg**
>
> You can find your chatid from jeedom by going to the telegram equipment then advanced configuration of the desired recipient's command then the information button and in the configuration field you have the chatid

> **IMPORTANT**
>
> Attention we see a lot of users with "mailinblack" mailboxes, who during the 1st exchange ask the sender to validate a link to prove that it is indeed a human. This system is not compatible with the mailing system of the monitoring service. So thank you on your market profiles page to put an email address not using this system otherwise you will never receive an alert from the system.

## How to activate it

The procedure is quite simple, you have to : 

- have credit monitoring cloud (you can buy it in a batch of 1 month, so you can take 2 months then stop 6 months and then resume after)
- have jeedom 3.3.44 min

After adding cloud monitoring credit, you must either wait a few hours (around 24 hours), or in Jeedom, on the configuration section then update click on the "test" button for connection to the market (this forces Jeedom to recover market information and therefore the fact that the cloud monitoring service is active).

>**IMPORTANT**
>
> Once the service is activated, it monitors all Jeedom connected to your account. It is however possible from Jeedom 4.2 to deactivate monitoring from its configuration (Market / update tab))

>**IMPORTANT**
>
> For notifications, just collect the arn from your mobile, it is located in the mobile plugin, on your mobile equipment, then access the "notification" tab, then copy the "ARN" line. that there is after "arn:aws:sns:eu-west-1:507915066327:endpoint/"

## It is compatible with everything ?

- Smart (tested)
- Debian x64 Stretch (tested)
- Debian x64 Jessie
- RPI
