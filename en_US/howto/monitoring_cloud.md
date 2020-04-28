# Cloud monitoring

## Description

Cloud monitoring is a paid Jeedom SAS service which permanently monitors your Jeedoms or your Jeedoms and warns you in case of problems.

Depending on the number of months taken, you will have the right to free months : 

- 12 months : 1 month free
- 24 months : 4 months free
- 36 months : 8 months free

## What is being monitored

The list of what is monitored evolves to try to be as reactive / proactive as possible, in the basic controls you have : 

- System available
- Web server (apache2) started
- Database (mysql) started
- CPU load
- Memory load
- SWAP load
- Disc input / output
- Free disk space

You are also warned when your Jeedom restarts.

# History

On the market from your profile page then by clicking on information in the tab my service part service monitoring you have all the current data known on your jeedom and you can by clicking on graph see the history over the last 24h (we do not keep more data than the last 24 hours)

## How am i warned

By default you are notified by an email on your email configured in your profiles but you can in the configuration of cloud monitoring (on your market profiles page) : 

- Put another email address (only one possible)
- Add an alert on Teleg
- Add an alert on Slack (just give the address of Webhook)
- Add an SMS alert (note that this requires that you have SMS credit on the market)
- Add an alert by Notification (requires the mobile app) 

> **Teleg**
>
> You can find your chatid from jeedom by going to the telegram equipment then advanced configuration of the desired recipient's command then the information button and in the configuration field you have the chatid

## How to activate it

The procedure is quite simple, you have to : 

- have cloud monitoring credit (you can buy it in a 1 month batch, so you can take 2 months then stop 6 months and then resume after)
- have jeedom 3.2.9 min

After adding cloud monitoring credit, you must either wait a few hours (around 24 hours), or in Jeedom, on the configuration section then update click on the "test" button for connection to the market (this forces Jeedom to recover market information and therefore the fact that the cloud monitoring service is active).

Then you can see in the health section of Jeedom if it is active. It takes approximately 10min for it to launch following synchronization with the market (click on the test button).

>**IMPORTANT**
>
>During the first activation or reactivation it is possible that you receive an email / telegram / slack / sms telling you that your Jeedom is not available. It's normal, it's time for the Jeedom in question to activate the monitoring services..

>**IMPORTANT**
>
> Once the service is activated, it monitors all Jeedom connected to your account

>**IMPORTANT**
>
> For notifications, just collect the arn from your mobile, it is located in the mobile plugin, on your mobile equipment, then access the "notification" tab, then copy the "ARN" line. that there is after "arn::::507915066327:endpoint /"

## It is compatible with everything ?

- Smart (tested)
- Debian x64 Stretch (tested)
- 
- RPI

# Faq

>**I receive every 10 minutes a message telling me that jeedom has restarted when it is not true**
>
>This happens if you have several Jeedom boxes including 2 (or more) with the same installation key (Settings page -> System -> Configuration). In this case the market sees only one box, the monitoring system also except that once in 2 the time since which the machines started changes (one hit box 1, one hit box 2), hence the alerts. To correct it is enough in one of the jeedoms on the page where there is the installation key to do "Reset"
