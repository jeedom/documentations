# Monitoring plugin

Plugin allows to monitor systems, it has several CLI engine (bash), SNMP, ping and URL

> **Important**
>
> This plugin is quite complex and therefore needs to read the documentation and some knowledge. IT IS NOT PLUG AND PLAY

# Configuration

After downloading the plugin, you will simply need to activate the plugin

# Equipements

The configuration of the Monitoring equipment is accessible from the Plugins menu then Monitoring

- Name of equipment
- Parent object
- Category
- Activer
- Visible
- Update frequency : in cron format (ex \*/ 15 \* \* \* \*)
- Engine : motor to activate for the equipment in question.
- Bash / Shell settings
		- Fashion : local or remote (if local there is nothing else to fill)
		- IP
		- Username
		- Password
- SNMP settings
		- IP
		- Protocole
		- Username
		- Password
		- Fashion authentication
		- Security
		- Private protocol
		- Priv passphrase
- Ping settings
		- IP

# Moteur

SNMP
----

The SNMP engine allows you to connect to machines in SNMP and retrieve values. Below the example of SNMP OID

### General OIDs

#### Load

| OID                                  | Data                              |
|--------------------------------------|--------------------------------------|
| .1.3.6.1.4.1.2021.10.1.3.1           | 1 minute Load                        |
| .1.3.6.1.4.1.2021.10.1.3.2           | 5 minute Load                        |
| .1.3.6.1.4.1.2021.10.1.3.3           | 15 minute Load                       |

#### CPU

| OID                                  | Data                              |
|--------------------------------------|--------------------------------------|
| .1.3.6.1.4.1.2021.11.9.0             | Percentage of user CPU time          |
| .1.3.6.1.4.1.2021.11.50.0            | Raw user cpu time                    |
| .1.3.6.1.4.1.2021.11.10.0            | Percentages of system CPU time       |
| .1.3.6.1.4.1.2021.11.52.0            | Raw system cpu time                  |
| .1.3.6.1.4.1.2021.11.11.0            | Percentages of idle CPU time         |
| .1.3.6.1.4.1.2021.11.53.0            | Raw idle cpu time                    |
| .1.3.6.1.4.1.2021.11.51.0            | Raw nice cpu time                    |

#### Memory Statistics

| OID                                  | Data                              |
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

| OID                                  | Data                              |
|--------------------------------------|--------------------------------------|
| .1.3.6.1.4.1.2021.9.1.2.X            | Path where the disk is mounted       |
| .1.3.6.1.4.1.2021.9.1.3.X            | Path of the device for the partition |
| .1.3.6.1.4.1.2021.9.1.6.X            | Total size of the disk / partion (kBytes)                             |
| .1.3.6.1.4.1.2021.9.1.7.X            | Available space on the disk          |
| .1.3.6.1.4.1.2021.9.1.8.X            | Used space on the disk               |
| .1.3.6.1.4.1.2021.9.1.9.X            | Percentage of space used on disk     |
| .1.3.6.1.4.1.2021.9.1.10.X           | Percentage of inodes used on disk    |

#### System

| OID                                  | Data                              |
|--------------------------------------|--------------------------------------|
| .1.3.6.1.2.1.1.3.0                   | System Uptime                        |

### VMware OIDs

| OID                                  | Data                              |
|--------------------------------------|--------------------------------------|
| .1.3.6.1.2.1.25.2.3.1.6.6            | Memory usage                  |
| .1.3.6.1.4.1.6876.1.2.0              | VMware version                    |

### OIDs Synology

| OID                                  | Data                              |
|--------------------------------------|--------------------------------------|
| .1.3.6.1.4.1.6574.1.5.1.0            | Model                               |
| .1.3.6.1.4.1.6574.1.5.3.0            | DSM version                          |
| .1.3.6.1.4.1.6574.1.1.0              | System Status                       |
| .1.3.6.1.4.1.6574.3.1.1.2.0          | Displays RAID status               |
| .1.3.6.1.4.1.6574.1.4.2.0            | CPU fan                              |
| .1.3.6.1.4.1.6574.1.4.1.0            | Fan System                          |
| .1.3.6.1.4.1.2021.11.9.0             | CPU load                           |
| .1.3.6.1.4.1.6574.1.2.0              | System Temp                         |
| .1.3.6.1.4.1.6574.2.1.1.5.X          | Status of disk X (starts at 0)    |
| .1.3.6.1.4.1.6574.2.1.1.6.X          | Disk temperature X (starts at 0)                                   |
| .1.3.6.1.4.1.6574.3.1.1.2.X          | Status of raid X (starts at 0)      |
| .1.3.6.1.4.1.6574.6.1.1.3.1          | Number of users connected in CIFS                                 |
| .1.3.6.1.4.1.6574.6.1.1.3.2          | Number of users logged in AFP |
| .1.3.6.1.4.1.6574.6.1.1.3.3          | Number of users logged in NFS |
| .1.3.6.1.4.1.6574.6.1.1.3.4          | Number of users logged in via FTP |
| .1.3.6.1.4.1.6574.6.1.1.3.5          | Number of users connected in SFTP                                 |
| .1.3.6.1.4.1.6574.6.1.1.3.6          | Number of users logged in HTTP / HTTPS                           |
| .1.3.6.1.4.1.6574.6.1.1.3.7          | Number of users connected in TELNET                               |
| .1.3.6.1.4.1.6574.6.1.1.3.8          | Number of users logged in SSH |
| .1.3.6.1.4.1.6574.6.1.1.3.9          | Number of users logged in OTHER                                |

### OIDs Synology UPS

| OID                                  | Data                              |
|--------------------------------------|--------------------------------------|
| .1.3.6.1.4.1.6574.4.1.1.0            | Model                               |
| .1.3.6.1.4.1.6574.4.2.1.0            | Status                               |
| .1.3.6.1.4.1.6574.4.2.12.1.0         | Charge                               |
| .1.3.6.1.4.1.6574.4.3.1.1.0          | Battery status                        |
| .1.3.6.1.4.1.6574.4.3.6.1.0          | Autonomy                            |

### OIDs calculated by the plugin

| OID                                  | Data                              |
|--------------------------------------|--------------------------------------|
| sysuptime                            | Formatted system uptime            |
| memoryused                           | Actual memory usage       |
| cpuused                              | Average CPU usage under VMware                               |
| vmwarerunvm                          | Number of VMs started on vmware     |
| diskused::X                          | Disc fill rate X      |
| networkin::X                         | Average output interface X throughput                               |
| networkout::X                        | Average flow of the input X interface                               |
| runprocess::X                        | Gives the number of X processes that are running                               |

Ping
----

For ping there are 2 commands possible :

| Command                             | Data                              |
|--------------------------------------|--------------------------------------|
| ping                                 | Ping result                     |
| latency                              | latency test                      |

CLI
---

Here you can use all bash commands or commands pre-made by the plugin :

| Command                             | Data                              |
|--------------------------------------|--------------------------------------|
| cpufreq                              | CPU frequency                        |
| cputemp                              | CPU temperature                      |
| cpuusage                             | CPU usage in%                 |
| memuse                               | % of memory used                 |
| swap                                 | % of swap used                    |
| loadavg15                            | Charge over 15min                     |
| uptime                               | Uptime of the machine                 |
| hdduse::\#mount\#                    | % of use of the mounting point *mount*                              |

URL
---

| Command                             | Data                              |
|--------------------------------------|--------------------------------------|
| access::\#url\#::\#username\#::\#password\# | Test access to a URL with *URL* : URL à tester (ex <http://www.google.fr>), *Username*: username (if necessary),*Password* : user password (can be empty)       |
