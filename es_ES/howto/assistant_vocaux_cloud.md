# Assistants vocaux cloud

## Description

Ce service permet de connecter votre Jeedom avec les assistants vocaux de Google et Amazon.

Il peut être utilisé avec 
- le plugin Dialogflow, [documentation](https://jeedom.github.io/plugin-dialogflow/fr_FR/)
- ou le plugin Google Smarthome, [documentation](https://jeedom.github.io/plugin-gsh/fr_FR/)
- ou le plugin Alexa, [documentation](https://jeedom.github.io/plugin-ash//fr_FR/)

Ce service est payant et peut être souscrit sur le Market Jeedom, dans la page [Mes Services](https://www.jeedom.com/market/index.php?v=d&p=profils#services)

Vous trouverez dans la documentation respective des plugins leurs différences.

Ensuite une fois l'abonnement souscrit il faut attendre la synchronisation (voir chapitre suivant). Vous pouvez faire la configuration en suivant la documentation du plugin

## Synchronisation et délai

Il y a des délai de synchronisation lors des actions suivantes :

- Activation du compte
- Achat d'année sur le service Assistant Vocaux
- Changement de clef api du plugin Google smarthome
- Changement de l'url du jeedom
- Changement de mot de passe market

La synchronisation se fait toute les 6h (à 00h10,6h10,12h10,18h10). Cette synchronisation est du a notre volonté de rendre le serveur tierce qui fait le pont entre votre Jeedom et l'infrastructure Google/Amazon independant et autonome (ca évite lors d'un soucis sur le market par exemple de perdre aussi les service Assistant vocaux). Lors de la synchronisation il y a un redemarrage du service (coupure de moins de 1s), ce qui explique la limitation à une fois toute les 6h.
