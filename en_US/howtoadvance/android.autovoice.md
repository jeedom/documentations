# Android autovoice

This article aims to guide you in using Android to talk to Jeedom. We will use the Jeedom interaction engine which makes it possible to formulate requests and that Jeedom responds to them (and also, if desired, activates different scenarios or elements).

# Installation

## Prerequisites

Naturally, you need an Android device (tablet, phone, PC with microphone and speakers) and install on it [Tasker](https://play.google.com/store/apps/details?id=net.dinglisch.android.taskerm&hl=fr) and [AutoVoice](https://play.google.com/store/apps/details?id=com.joaomgcd.autovoice&hl=fr). The latter allows you to create your own voice commands for Google Now to automate your tasks using voice.

To note : AutoVoice is only the component to talk to Jeedom but does not allow Jeedom to respond. For it to do so, you don't need the Tasker plugin. We can also use this example by replacing AutoVoice voice recognition with an NFC tag, geolocation, a received SMS…​

## The principle

We will use a Tasker profile on state. This will be a voice recognition from AutoVoice. Then in task, we will ask Tasker to perform 2 actions. The first will be to call Jeedom and send him the text result of the voice recognition. The second will be to state the return of Jeedom.

# Profile creation

We add a new profile with a **state** as a trigger.

![android.autovoice1](images/android.autovoice1.png)

We select **Plugin** on the first screen.

![android.autovoice2](images/android.autovoice2.png)

In plugin type, we select **AutoVoice**.

![android.autovoice3](images/android.autovoice3.png)

In the submenu **AutoVoice**, we select **Recognized**.

![android.autovoice4](images/android.autovoice4.png)

You can save the default configuration, unless you want
specify keywords or other parameters.

![android.autovoice5](images/android.autovoice5.png)

We can give the profile a name like "Jeedom Interactions" and the backup will be made after the link with a task.

# Task

We add a **new task** to the newly created profile. For example, it could be called "Jeedom API".

![android.autovoice6](images/android.autovoice6.png)

The task will eventually group 2 actions : **API call** and **say the return**.

![android.autovoice7](images/android.autovoice7.png)

First we will add an action of type **Network**.

![android.autovoice8](images/android.autovoice8.png)

Then we select **Get HTTP**.

![android.autovoice9](images/android.autovoice9.png)

There we will fill in with the Jeedom information. Here is the information to enter :

-   Serveur:Port : ``https://mondomain.tld``
-   Path : ``/jeedom/core/api/jeeApi.php?apikey=votreclef&type=interact&query=%avcommnofilter&utf8=1``

Do not forget to put your API key instead of the string "your key" . You have to let ``%avcommonfilter`` at the end this will be replaced by the return of Autovoice.

![android.autovoice10](images/android.autovoice10.png)

Add type action **Say**. To do this, filter the actions by putting "say" at the level of the magnifying glass.

![android.autovoice11](images/android.autovoice11.png)

And we go back ``%HTTPD`` in the text field.

![android.autovoice12](images/android.autovoice12.png)

It's finish. On text recognition by AutoVoice, Jeedom will be called and you will have the response configured in the interactions which will be spoken by your phone. Don't forget to configure Jeedom interactions and you can ask him anything you want. From "how hot is the living room" to "turn on the living room light".

> **Tip**
>
> If it does not work from the start, it is often because AutoVoice is not active. For that launch it, click on Google Now Integration and on the first choice at the very top and authorize AutoVoice.

> **Tip**
>
> By default, AutoVoice disables Google Now search, it is possible to cancel this behavior, to do this in Tasker click on your profile then "edit" (little pencil), then "advanced" (at the very bottom), and uncheck "Do Google Now Search" (bottom).
