# Cloud backup

Once the service has been purchased, it is necessary in jeedom : 

- go to its administration then in the “Updates/Market” tab and fill in
  - [Backup cloud] Name : name of the folder where to put the Jeedom backups (if you have a Jeedom simply put jeedom, otherwise put a folder by Jeedom)
  - [Backup cloud] Password : backup encryption password. WARNING if you lose it the backups are lost, it is impossible to recover the password
- in backup management, check the “Sending backups” box at the “Backups Market” level"

>**NOTE**
>
>It is possible to see the jeedom backup files directly from your profile page on the market, tab my services then configuration at the level of the cloud backup service

>**IMPORTANT**
>
>The maximum storage size per market account is 2GB. Beyond that, the system will delete the oldest backup files until they fall below 3GB (for the moment we tolerate 1GB more).

>**IMPORTANT**
>
>For the moment there is no maximum retention period but we are considering automatically deleting backups older than 12 months.
