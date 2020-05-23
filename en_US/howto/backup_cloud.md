# Cloud backup

Once the service has been purchased, it is necessary in jeedom : 

- go to the administration of it then in the tab "Update / Market" and fill
  - [Backup cloud] Name : name of the folder or put the backups of jeedom (if you have a jeedom simply put jeedom, otherwise put a folder by jeedom)
  - [Backup cloud] Password : backup encryption password. BE CAREFUL if you lose it the backups are lost it is impossible to recover the password
- in the backup management check the "Send backups" box at the "Market Backups" level"

>**NOTE**
>
>It is possible to see the jeedom backup files directly from your profile page on the market, tab my services then configuration at the level of the cloud backup service

## FAQ

> **Error Specification mandate value for attribute defer on line 19, column 146**
>
> If you have this error you must contact the support, it is an error on our side at the level (hard drive of the backup server in readonly).
> Following the correction on our side, you will probably have to force a reconfiguration of the cloud backup on your profile page (service tab then cloud backup)
