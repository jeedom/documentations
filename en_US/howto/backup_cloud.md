# Cloud Backup

Once the service is purchased, it must be in jeedom : 

- go to the administration of this one then in the "Update/Market" tab and fill in
  - [Cloud Backup] Name : name of the folder or put the jeedom backups (if you have a jeedom simply put jeedom, otherwise put a folder by jeedom)
  - [Cloud Backup] Password : backup encryption password. WARNING if you lose it the backups are lost it is impossible to recover the password
- in the backup management check the box "Sending backups" at the level of "Backups Market"

>**NOTE**
>
>It is possible to see the files of jeedom backups directly from your profiles page on the market, tab my services then configuration at the backup cloud service level

## FAQ

> **Error Specification mandate value for attribute defer on line 19, column 146**
>
> If you have this error you must contact the support, it is an error on our side at the level (hard disk of the backup server in readonly).
> Following the correction on our side, you will probably have to force a reconfiguration of the cloud backup on your profiles page (service tab then cloud backup)
