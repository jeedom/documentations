# How to file a bug ?

There are several ways in Jeedom to report a problem :

- Raise the concern on the [community](https://community.jeedom.com), that's usually where you'll get the fastest response.
- Raise a concern to the Jeedom team :
  - **Support request** (requires a power service pack or more or the concern is on a paid plugin/service), this request is **private** and will put you directly in touch with the Jeedom support team which analyzes your particular case.
  - **Bug report**, in this case the request is **public** and will be posted on the community.
  - **Request for improvement**, in this case the request is **public** and will be posted on the community.

> **NOTE**
>
> In the case of a support request on a third-party plugin, an email is sent to the plugin developer.

> **IMPORTANT**
>
> As support is provided exclusively by email, remember to watch your spam. Most often, the support responds quickly (average response time of less than 72 hours, attention depending on the problem it can be much longer).

## What information to send to get a solution as soon as possible ?

Whatever the method used to report the problem encountered, it is very important to give as much information as possible. Indeed, to our greatest regret, 80% of requests have as their first response type : "please provide us with more information about the problem encountered so that we can help you. [...]". And yes...despite our good will, we don't see your screen, we have no history of what you have done as manipulation, and we sometimes use different vocabulary to talk about the same things...

But as we really want to help you, here are some clues to give us some valuable information :

- Your concern concerns a graphic display problem (widget, page, text fields...), even if it seems obvious to you during the explanation, put a screenshot (indeed, it is possible to copy the 'image directly on the community!), it takes 30s for you, it will save several tens of minutes for the person trying to help you, and you will get a relevant answer, faster.
- You have a "500" error or "\{\{" on Jeedom : in this case, put the http file directly.error (you can find it quickly in Analysis -> Logs), without that, it is impossible for us to know where the problem comes from (again, no indicator(s) at jeedom or among third-party developers for the moment !^^)
- You have a javascript error (warning panel at the top right) or when you do F12 then console a red line. In this case, start by giving us the complete error message in question. Unfortunately, in the majority of cases, this error message being sometimes a bit vague, does not alone identify the problem encountered. You must therefore do F12 (in the browser, on the Jeedom tab where you encounter the difficulty). Then click on "console", then try to reproduce the problem encountered (start by refreshing the page, and if necessary, repeat the same actions). You will normally have the error message again but this time you will have to click at the end of the line (it can be either as in the capture below or in the form VMXXX.js) :

![remonter_un_bug001](images/remonter_un_bug001.png)

Then make a capture of what will be displayed, in particular the line in red :

![remonter_un_bug002](images/remonter_un_bug002.png)

Here is if you follow all this well you should have answers to your problem much faster and much fairer and perhaps even allow the person who helped you to help another person more quickly.

- You have a problem with a demon ? it is absolutely necessary to put the log in debug of this one otherwise no help will be possible. You can also add the dependencies installation log (often in \_update).
- You have a problem installing dependencies ? it is absolutely necessary to put the log of their installation (often in \_update).

# Assistance and Support requests (or tickets)

If you have not found a solution to your problem, you can submit a support request to the Jeedom team. 
This request goes through a ticket. 

Support is available based on your Service Pack
- Service Pack Community (free version of Jeedom): 2 tickets/month on paid plugins only
- Power and Ultimate service packs: 10 tickets/month
- Service Pack Pro: 100 tickets/month

It is possible to open a request in several ways:
[Documentation Support requests or tickets](https://doc.jeedom.com/en_US/premiers-pas/#Les%20demandes%20de%20support%20\(ou%20tickets\))

>**IMPORTANT**
>
>Be careful, we see a lot of users with "mailinblack" mailboxes, which during the 1st exchange ask the sender to validate a link to prove that it is indeed a human. This system is not compatible with our ticketing system, so even if we answer you you will never receive the answer in your mailbox because it blocks us. So thank you on your market profiles page to put an email address that does not use this system otherwise you will never receive our response.

