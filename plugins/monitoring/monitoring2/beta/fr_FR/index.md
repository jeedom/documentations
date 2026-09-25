# Plugin monitoring

Plugin permet de monitorer des systèmes, il possede plusieurs moteur CLI (bash), SNMP, ping et URL

> **IMPORTANT**
>
> Ce plugin est assez complexe et necessite donc de bien lire la documentation et quelques connaissance. IL N'EST PAS PLUG AND PLAY

# Configuration

Après téléchargement du plugin, il vous faudra simplement activer leplugin

# Equipements

La configuration des équipements Monitoring est accessible à partir du menu Plugins puis Monitoring

- Nom de l'équipement
- Objet parent
- Catégorie
- Activer
- Visible
- Fréquence de mise à jour : sous format cron (ex \*/15 \* \* \* \*)
- Moteur : moteur à activer pour l'équipement en question.
- Paramètres Bash/Shell
		- Mode : local ou distant (si local il n'y a rien d'autre à remplir)
		- IP
		- Nom d'utilisateur
		- Mot de passe
- Paramètres SNMP
		- IP
		- Protocole
		- Nom d'utilisateur
		- Mot de passe
		- Authentification mode
		- Sécurité
		- Priv protocole
		- Priv passphrase
- Paramètres ping
		- IP

# Moteur

SNMP
----

Le moteur SNMP permet de se connecter à des machines en SNMP et de recuperer des valeurs. Ci dessous les exemple de OID SNMP

### OIDs général

#### Load

| OID                                  | Données                              |
|--------------------------------------|--------------------------------------|
| .1.3.6.1.4.1.2021.10.1.3.1           | 1 minute Load                        |
| .1.3.6.1.4.1.2021.10.1.3.2           | 5 minute Load                        |
| .1.3.6.1.4.1.2021.10.1.3.3           | 15 minute Load                       |

#### CPU

| OID                                  | Données                              |
|--------------------------------------|--------------------------------------|
| .1.3.6.1.4.1.2021.11.9.0             | Percentage of user CPU time          |
| .1.3.6.1.4.1.2021.11.50.0            | Raw user cpu time                    |
| .1.3.6.1.4.1.2021.11.10.0            | Percentages of system CPU time       |
| .1.3.6.1.4.1.2021.11.52.0            | Raw system cpu time                  |
| .1.3.6.1.4.1.2021.11.11.0            | Percentages of idle CPU time         |
| .1.3.6.1.4.1.2021.11.53.0            | Raw idle cpu time                    |
| .1.3.6.1.4.1.2021.11.51.0            | Raw nice cpu time                    |

#### Memory Statistics

| OID                                  | Données                              |
|--------------------------------------|--------------------------------------|
| .1.3.6.1.4.1.2021.4.3.0              | Total Swap Size                      |
| .1.3.6.1.4.1.2021.4.4.0              | Available Swap Space                 |
| .1.3.6.1.4.1.2021.4.5.0              | Total RAM in machine                 |
| .1.3.6.1.4.1.2021.4.6.0              | Total RAM free                       |
| .1.3.6.1.4.1.2021.4.11.0             | Total RAM used                       |
| .1.3.6.1.4.1.2021.4.13.0             | Total RAM Shared                     |
| .1.3.6.1.4.1.2021.4.14.0             | Total RAM Buffered                   |
| .1.3.6.1.4.1.2021.4.15.0             | Total Cached Memory                  |

#### Disk

| OID                                  | Données                              |
|--------------------------------------|--------------------------------------|
| .1.3.6.1.4.1.2021.9.1.2.X            | Path where the disk is mounted       |
| .1.3.6.1.4.1.2021.9.1.3.X            | Path of the device for the partition |
| .1.3.6.1.4.1.2021.9.1.6.X            | Total size of the disk/partion (kBytes)                             |
| .1.3.6.1.4.1.2021.9.1.7.X            | Available space on the disk          |
| .1.3.6.1.4.1.2021.9.1.8.X            | Used space on the disk               |
| .1.3.6.1.4.1.2021.9.1.9.X            | Percentage of space used on disk     |
| .1.3.6.1.4.1.2021.9.1.10.X           | Percentage of inodes used on disk    |

#### System

| OID                                  | Données                              |
|--------------------------------------|--------------------------------------|
| .1.3.6.1.2.1.1.3.0                   | System Uptime                        |

### OIDs VMware

| OID                                  | Données                              |
|--------------------------------------|--------------------------------------|
| .1.3.6.1.2.1.25.2.3.1.6.6            | Utilisation mémoire                  |
| .1.3.6.1.4.1.6876.1.2.0              | Version de VMware                    |

### OIDs Synology

| OID                                  | Données                              |
|--------------------------------------|--------------------------------------|
| .1.3.6.1.4.1.6574.1.5.1.0            | Modèle                               |
| .1.3.6.1.4.1.6574.1.5.3.0            | Version DSM                          |
| .1.3.6.1.4.1.6574.1.1.0              | Statut Système                       |
| .1.3.6.1.4.1.6574.3.1.1.2.0          | Affiche l’état du RAID               |
| .1.3.6.1.4.1.6574.1.4.2.0            | Fan CPU                              |
| .1.3.6.1.4.1.6574.1.4.1.0            | Fan Système                          |
| .1.3.6.1.4.1.2021.11.9.0             | Charge CPU                           |
| .1.3.6.1.4.1.6574.1.2.0              | Temp Système                         |
| .1.3.6.1.4.1.6574.2.1.1.5.X          | Status du disque X (commence à 0)    |
| .1.3.6.1.4.1.6574.2.1.1.6.X          | Température du disque X (commence à  0)                                   |
| .1.3.6.1.4.1.6574.3.1.1.2.X          | Status du raid X (commence à 0)      |
| .1.3.6.1.4.1.6574.6.1.1.3.1          | Nombre d’utilisateur connecté en CIFS                                 |
| .1.3.6.1.4.1.6574.6.1.1.3.2          | Nombre d’utilisateur connecté en AFP |
| .1.3.6.1.4.1.6574.6.1.1.3.3          | Nombre d’utilisateur connecté en NFS |
| .1.3.6.1.4.1.6574.6.1.1.3.4          | Nombre d’utilisateur connecté en FTP |
| .1.3.6.1.4.1.6574.6.1.1.3.5          | Nombre d’utilisateur connecté en SFTP                                 |
| .1.3.6.1.4.1.6574.6.1.1.3.6          | Nombre d’utilisateur connecté en HTTP/HTTPS                           |
| .1.3.6.1.4.1.6574.6.1.1.3.7          | Nombre d’utilisateur connecté en TELNET                               |
| .1.3.6.1.4.1.6574.6.1.1.3.8          | Nombre d’utilisateur connecté en SSH |
| .1.3.6.1.4.1.6574.6.1.1.3.9          | Nombre d’utilisateur connecté en OTHER                                |

### OIDs Synology UPS

| OID                                  | Données                              |
|--------------------------------------|--------------------------------------|
| .1.3.6.1.4.1.6574.4.1.1.0            | Modèle                               |
| .1.3.6.1.4.1.6574.4.2.1.0            | Status                               |
| .1.3.6.1.4.1.6574.4.2.12.1.0         | Charge                               |
| .1.3.6.1.4.1.6574.4.3.1.1.0          | Etat batterie                        |
| .1.3.6.1.4.1.6574.4.3.6.1.0          | Autonomie                            |

### OIDs calculé par le plugin

| OID                                  | Données                              |
|--------------------------------------|--------------------------------------|
| sysuptime                            | Uptime du système formaté            |
| memoryused                           | Utilisation réel de la mémoire       |
| cpuused                              | Utilisation moyenné du CPU sous VMware                               |
| vmwarerunvm                          | Nombre de VM démarrée sur vmware     |
| diskused::X                          | Taux de remplissage du disque X      |
| networkin::X                         | Débit moyenné de l’interface X en sortie                               |
| networkout::X                        | Débit moyenné de l’interface X en entrée                               |
| runprocess::X                        | Donne le nombre de process X qui tourne                               |

Ping
----

Pour le ping il y a 2 commandes possible :

| Commande                             | Données                              |
|--------------------------------------|--------------------------------------|
| ping                                 | Resultat du ping                     |
| latency                              | test de latence                      |

CLI
---

Ici vous pouvez utiliser toutes les commandes bash ou des commandes pré-faite par le plugin :

| Commande                             | Données                              |
|--------------------------------------|--------------------------------------|
| cpufreq                              | Fréquence CPU                        |
| cputemp                              | Température CPU                      |
| cpuusage                             | Utilisation CPU en %                 |
| memuse                               | % de mémoire utilisé                 |
| swap                                 | % de swap utilisé                    |
| loadavg15                            | Charge sur 15min                     |
| uptime                               | Uptime de la machine                 |
| hdduse::\#mount\#                    | % d’utilisation du point de montage *mount*                              |

URL
---

| Commande                             | Données                              |
|--------------------------------------|--------------------------------------|
| access::\#url\#::\#username\#::\#password\# | Test l’accès à une URL avec *url* : url à tester (ex <http://www.google.fr>), *username*: nom d’utilisateur (si nécessaire),*password* : mot de passe de l’utilisateur (peut etre vide)       |
