# Changelog ipx800 V3

# 2020-04-12

- Correction de bug avec jeedom v4

# 27/12/2019

- Correciton de bug sur l'attribut xmlstatus

# 11/10/2018

- Correction de bugs sur Jeedom V4

# 16/10/2018

- Correction de bug sur le push

# Anciennes évolutions

-   Ajout de configuration push pour entrée analogique
-   Ajout d’une Clef API specifique au plugin
-   Modification pour compatibilité Jeedom V3
-   Plus de suivi de version
-   Correction du nombre d’entrée pour l’extention X800-2
-   Prise en compte des sondes CT100A et ORP Probe.
-   Continue la collecte lorsque une IPX est HS.
-   Trappe certains messages d’erreur.
-   Ajout du type LIGHT\_TOGGL pour les relais.
-   Définition template des relais boutons.
-   Modification être compatible avec le plugin mobile.
-   Mise a jour des entrées analogiques, même si la valeur ne change pas
    pour les graphiques.
-   Compatibilité Jeedom 2.0.
-   Modification de cron pour plus d’autonomie.
-   Modification de l’extension du logo.
-   Compatibilité Imperihome.
-   Retrait de la suppression des équipements lors de la désactivation
    du plugin.
-   Correction par rapport au nouveau core.
-   Correction des formules pour les pinces ampèremetriques.
-   Message de debug pour les receptions de push.
-   Prise en compte du port pour jeedom et de l’IP sans qu’il soit
    nécessaire que ce soit renseigné au niveau globale.
-   Correction des fréquences d’impulsion par minute.
-   Message de debug pour les calculs d’impulsion/minute.
-   Supression de l’info `updatetime`.
-   Ajout des pinces 50A.
-   Ajout de Correction automatique par rapport au seuil Min et Max.
-   Ajout de lien vers les options d’affichage.
-   Correction de double cron.
-   Prise en charge des compteurs indépendament des boutons.
-   Ajout du nombre d’impulsions par minute.
-   Ajout d’une information status.
-   Redéclenchement jusqu’à 3 fois en cas d’indispo de l’IPX.
-   Prise en compte des extensions x800 et x400.
-   Correction pour la réception des push pour les entrées numériques.
-   Prise en compte des unitées pour les entrées analogiques.
-   Correction de la cron pour ne prendre que les changements d’état.
-   Possibilité de configurer le push que sur certaines entrées.
-   Ajout des formules pour les entrée analogiques.
-   Ajout `all on` et `all off`.
