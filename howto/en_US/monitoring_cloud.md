# Cloud monitoring

## Description

Cloud monitoring is a paid service from Jeedom SAS that continuously monitors your Jeedom device(s) and alerts you in case of any issues.

Depending on the number of months you sign up for, you’ll be eligible for free months:

- 12 months: 1 month free
- 24 months: 4 months free
- 36 months: 8 months free

## What Is Monitored

Jeedom regularly sends information from the health page to our monitoring service, which analyzes it and alerts you if there are any issues. Additionally, if your box doesn't send any information for more than 60 minutes, our monitoring service will alert you that there is a problem.

## How am I notified?

By default, you'll receive an email notification at the email address configured in your profile, but you can do the following in the cloud monitoring settings (on your profile page in the Marketplace):

- Enter a different email address (only one allowed)
- Add an alert on Telegram
- Add an alert on Slack (you just need to provide the Webhook URL)
- Add an SMS alert (please note that this requires you to have SMS credit on the Market)
- Add an alert via Notification (requires the mobile app)

> **Telegram**
>
> You can find your chat ID in Jeedom by going to the Telegram device, then selecting "Advanced Command Configuration" for the desired recipient, then clicking the "Info" button, and there, in the "Configuration" field, you'll find the chat ID.

> **IMPORTANT**
>
> Please note that we’re seeing many users with “mailinblack” email accounts, which, during the first exchange, ask the sender to click a link to prove they’re human. This system is not compatible with the monitoring service’s email delivery system. So please make sure to enter an email address on your Market profile page that does not use this system; otherwise, you will never receive alerts from the system.

## How to enable it

The procedure is fairly simple; you need to:

- Have Cloud Monitoring credits (they’re sold in 1-month increments, so you can purchase 2 months, then pause for 6 months, and then resume later)
- I have Jeedom 3.3.44 minimum

After adding the cloud monitoring credit, you must either wait a few hours (about 24 hours) or, in Jeedom, go to the configuration section, then click the "Test" button under "Update" to connect to the market (this forces Jeedom to retrieve information from the market and thus confirms that the cloud monitoring service is active).

>**IMPORTANT**
>
> Once the service is enabled, it monitors all Jeedom devices linked to your account. However, starting with Jeedom 4.2, you can disable monitoring from the Jeedom settings (Market/Updates tab).

>**IMPORTANT**
>
> For notifications, simply retrieve the ARN from your mobile device. It can be found in the mobile plugin on your mobile device. Then, go to the "Notifications" tab and copy the "ARN" line. Please note that you must copy only the text that follows "arn:aws:sns:eu-west-1:507915066327:endpoint/".

## Is it compatible with everything?

- Smart (tested)
- Debian x64 Stretch (tested)
- Debian x64 Jessie
- RPI
