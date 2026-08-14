# Cloud service

Cloud Service is a Jeedom service that allows you to quickly and easily expand the capabilities of your Jeedom. Its role is to act as a gateway between your Jeedom and the cloud services of other service providers.

To prevent abuse, the service is subject to quotas based on your service pack type.

# Quota

| Service | Community Service Pack | Power Service Pack or higher |
| ------- | ---------------------- | -------------------------- |
| Ajax System | 2000/24h |  2000/24h |
| Fuel   | 10/24h |  10/24h |
| EJP | 10/24h |  10/24h |
| Enedis | 200/24h |  200/24h |
| Fitbit | 100/1h |  100/1h |
| Holiday  | 10/24h |  10/24h |
| Email | 1/24h |  1/24h |
| MyIp | 1/1h |  1/1h |
| Netatmo     | 20/1h |  100/1h |
| OpenWeatherMap (weather)    | 1/4h |  5/4h |
| Pollution   | 10/24h |  10/24h |
| Spotify     | No limit |  No limit |
| Sun's position   | 2/10 min   |  2/10 min |
| EDF Tempo   | 10/24h |  10/24h |
| Google TTS  | None |  5/24h\* |
| School break  | 10/24h |  10/24h |
| Monitoring   | 10/24h |  10/24h |
| Weekend     | 10/24h |  10/24h |



\* The TTS service works a little differently: usage is counted only for phrases that have never been requested from your Jeedom. Phrases are split into blocks of 160 characters. Each block counts as 1 quota unit.
