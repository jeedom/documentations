# Cloud backup

Once you've purchased the service, you'll need to do the following in Jeedom:

- Go to its settings, then to the "Updates/Market" tab, and fill in
  - [Cloud Backup] Name: Name of the folder where Jeedom backups will be stored (if you have a Jeedom, simply enter "jeedom"; otherwise, create a separate folder for each Jeedom)
  - [Cloud Backup] Password: the password used to encrypt the backup. WARNING: If you lose this password, your backups will be lost, and it is impossible to recover the password.
- In backup management, check the "Send backups" box under "Market Backups"

>**NOTE**
>
>You can view your Jeedom backup folders directly from your profile page on the Market, under the "My Services" tab, then "Configuration" for the Cloud Backup service

>**IMPORTANT**
>
>The maximum storage size per Market account is 2 GB. If this limit is exceeded, the system will delete the oldest backup files until the total falls below 3 GB (for now, we allow an additional 1 GB).

>**IMPORTANT**
>
>At this time, there is no maximum retention period, but we are considering automatically deleting backups older than 12 months.
