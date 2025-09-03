# Cloud service

Le Cloud Service est un service Jeedom permettant d'étendre les possibilités de votre Jeedom facilement et rapidement. Son rôle est de servir de passerelle entre votre Jeedom et les services cloud d'autres prestataires de services.

Pour éviter tout abus le service est soumis à des quotas en fonction de votre type de service pack.

# Quota 

| Service                | Service pack community | Service pack power ou plus |
| ---------------------- | ---------------------- | -------------------------- |
| Ajax System            | 2000/24h               |  2000/24h                  |
| Carburant              | 10/24h                 |  10/24h                    |
| EJP                    | 10/24h                 |  10/24h                    |
| Enedis                 | 200/24h                |  200/24h                   |
| Fitbit                 | 100/1h                 |  100/1h                    |
| Jour ferié             | 10/24h                 |  10/24h                    |
| Mail                   | 1/24h                  |  1/24h                     |
| MyIp                   | 1/1h                   |  1/1h                      |
| Netatmo                | 20/1h                  |  100/1h                    |
| OpenWeatherMap (météo) | 1/4h                   |  5/4h                      |
| Pollution              | 10/24h                 |  10/24h                    |
| Spotify                | Pas de limite          |  Pas de limite             |
| Position du soleil     | 2/10min                |  2/10min                   |
| EDF Tempo              | 10/24h                 |  10/24h                    |
| Google TTS             | Aucun                  |  5/24h\*                   |
| Vacance scolaire       | 10/24h                 |  10/24h                    |
| Vigilance              | 10/24h                 |  10/24h                    |
| Weekend                | 10/24h                 |  10/24h                    |

\* Le service TTS est un peu particulier le décompte ne se fait que sur les phrases jamais demandées à votre Jeedom. Les phrases sont decoupées par lot de 160 caractères. Chaque lot compte pour 1 quota.
