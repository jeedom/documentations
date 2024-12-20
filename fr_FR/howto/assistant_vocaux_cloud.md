# Assistants vocaux cloud

## Description

Ce service permet de connecter votre Jeedom avec les assistants vocaux de Google et Amazon.

Il peut être utilisé avec :
- soit le plugin Google Smarthome, [documentation](https://doc.jeedom.com/fr_FR/plugins/communication/gsh)
- soit le plugin Alexa, [documentation](https://doc.jeedom.com/fr_FR/plugins/communication/ash)

Ce service est payant et peut être souscrit sur le Market Jeedom, dans la page [Mes Services](https://www.jeedom.com/market/index.php?v=d&p=profils#services)

Vous trouverez dans la documentation respective des plugins leurs différences.

Ensuite une fois l'abonnement souscrit il faut faire la configuration en suivant la documentation du plugin.

> **Important**
>
> Google et AMAZON imposent que votre Jeedom soit accessible en HTTPS (le plugin ne marche pas en HTTP) avec un certificat valide (donc pas de certificat auto-signé).
>
> Grâce aux Service Pack Power ou Ultimate, votre Jeedom est accessible en HTTPS.
> Si vous disposez d'un Service Pack Community, vous devez installer vous même un certificat SSL émis par une autorité de certification (ex: Let's Encrypt, ...).

> **Important**
>
> Attention, du a une contrainte de notre prestataire (OVH) le service ne marche qu'en ipv4 il n'est donc pas compatible ipv6.
