# Créer une vm sous vmware

Nous allons voir ici comment créer une VM sous VMware.

Il y a avant une petite chose importante à savoir sur VMware, il y a 2 moyens de le manager :

-   l’interface web (présente par défaut en 6.0 update 2, ou par le biais d’un vib pour les autres versions), on y accède par IP\_ESXI/ui
-   le client lourd et historique de VMware (vSphere client)

Ici j’utiliserai principalement l’interface web car je pense que c’est l’avenir de VMware qui délaisse de plus en plus le client lourd (d’ailleurs toutes les nouveautés depuis la 5.1 ne sont pas utilisables avec le client lourd).

A noter aussi que l’interface web est toujours en cours de mise en place chez VMware, en effet vous allez sûrement rencontrer quelques bugs ou ralentissements mais un petit rafraîchissement de la page et ça repart sans soucis.

# Connexion à l’interface web

Allez sur IP\_ESXI/ui avec votre navigateur internet, vous devez avoir :

![vmware.createvm3](images/vmware.createvm3.PNG)

> **Note**
>
> Si vous n’avez rien je vous conseille de faire l’installation de l’interface web, toutes les informations [ici](vmware.trucs_et_astuces)

Entrez vos identifiants de connexion à l’ESXI :

![vmware.createvm4](images/vmware.createvm4.PNG)

Comme vous pouvez le voir l’interface est plutôt sympa et permet de faire pas mal de choses, je ne rentrerai pas dans les détails mais vous pouvez déja à partir de cette écran :

-   arrêter/redémarrer l’ESXi
-   voir l’utilisation des ressources (CPU, mémoire et disque)
-   avoir des informations sur votre système (temps de fonctionnement, version de VMware, version du bios, affichage des datastores)
-   bouton pour créer une VM (on va s’en servir juste après)
-   un bouton action qui permet en autre de passer en mode maintenance (pratique si vous avez un cluster d’ESXi sinon vous ne vous en servirez jamais), activer/désactiver le service SSH (est utilisé dans le tutoriel de configuration des backups)

# Envoi de l’iso d’installation

Après avoir téléchargé votre iso d’installation [ici](https://cdimage.debian.org/cdimage/archive/11.11.0/amd64/iso-cd/debian-11.11.0-amd64-netinst.iso) par exemple pour debian 11.11 (LTS jusqu'au 31 août 2026) en netinstall, il vous faut le mettre sur votre datastore.

Pour cela cliquez sur datastore :

![vmware.createvm18](images/vmware.createvm18.PNG)

Sélectionnez votre datastore (en général il s’appelle datastore1) :

![vmware.createvm19](images/vmware.createvm19.PNG)

Cliquez sur "Navigateur de banque de données" :

![vmware.createvm20](images/vmware.createvm20.PNG)

Cliquez sur "Télécharger" (le premier) :

![vmware.createvm21](images/vmware.createvm21.PNG)

Sélectionnez l’iso précédement téléchargé et validez :

![vmware.createvm22](images/vmware.createvm22.PNG)

Vous pouvez ensuite suivre l’avancement de l’envoi :

![vmware.createvm23](images/vmware.createvm23.PNG)

Une fois fini vous pouvez voir que votre iso est bien arrivé sur le datastore :

![vmware.createvm24](images/vmware.createvm24.PNG)

# Création de votre premiere VM

Cliquez sur le bouton "Créer/Enregistrer une VM" :

![vmware.createvm5](images/vmware.createvm5.PNG)

Cliquez sur suivant :

![vmware.createvm6](images/vmware.createvm6.PNG)

Donnez ensuite un nom à votre machine et précisez son sytème d’exploitation (ici on va installer une Debian) :

![vmware.createvm7](images/vmware.createvm7.PNG)

Indiquez le datastore cible :

![vmware.createvm8](images/vmware.createvm8.PNG)

Ici vous allez pouvoir configurer les paramètres de votre machine (disque dure, cpu, mémoire…​) :

![vmware.createvm9](images/vmware.createvm9.PNG)

> **Note**
>
> Tous ces paramètres sont modifiables après coup sans soucis, à noter tout de même qu’il n’est pas vraiment possible de réduire la taille d’un disque dur, on peut l’augmenter (mais il faut savoir gérer ça au niveau de l’OS ensuite) mais pas la réduire.

Au niveau du lecteur CD/DVD, selectionnez "Fichier ISO banque de données" :

![vmware.createvm10](images/vmware.createvm10.PNG)

Sélectionner ensuite l’emplacement où est stocké votre ISO (voir chapitre précedent) et validez :

![vmware.createvm11](images/vmware.createvm11.PNG)

Faites ensuite suivant :

![vmware.createvm12](images/vmware.createvm12.PNG)

Vous avez ensuite un résumé de votre configuration, cliquez sur "Terminer" :

![vmware.createvm13](images/vmware.createvm13.PNG)

Un message en haut va vous indiquer que c’est bon, cliquez ensuite sur "Machines virtuelles" :

![vmware.createvm14](images/vmware.createvm14.PNG)

Vous devez voir votre machine virtuelle (si ce n’est pas le cas cliquez sur "Actualiser") cliquez dessus :

![vmware.createvm15](images/vmware.createvm15.PNG)

Vous devez avoir une page de ce type, cliquez sur le bouton lecture :

![vmware.createvm16](images/vmware.createvm16.PNG)

Votre machine va se lancer et vous allez pouvoir faire l’installation de votre OS :

![vmware.createvm17](images/vmware.createvm17.PNG)

> **Important**
>
> Un fois votre machine installée il faut ABSOLUMENT installer les VMware tools (ça permet à VMware d’avoir des informations sur votre VM et d’éteindre celle-ci proprement). Sous debian il suffit de faire "sudo apt-get -y install open-vm-tools".

Pour la suite de l’installation je vous invite à lire ce [tutoriel](debian.installation)

# Monter les péripheriques USB dans la VM

> **Note**
>
> Si vous n’avez pas les options ci-dessous c’est qu’il faut mettre à jour l’ESXi Embedded Host Client , toutes les informations [ici](../howto/doc-howto-vmware.trucs_et_astuces.html)

C’est un besoin assez rare, mais j’ai dû m’en servir pour Jeedom, en effet j’ai sur mon ESXi les clefs Zwave, RFXcom, edisio, enOcean et GSM de branchées et il me fallait les relier à ma VM Jeedom pour pouvoir m’en servir.

> **Note**
>
> Pour Zwave, RFXcom, edisio et enOcean il n’y a aucun soucis, pour les clefs GSM il vous faut suivre ce [tutoriel](gsm.huawei_mode_modem) avant pour forcer la clef en mode modem seulement sinon celle-ci n’est pas vue correctement sur l’ESXi.

Allez sur votre VM puis faites "Modifier les paramètres" :

![vmware.createvm25](images/vmware.createvm25.PNG)

Cliquez sur "Ajouter un autre périphérique" puis controleur USB :

![vmware.createvm26](images/vmware.createvm26.PNG)

> **Note**
>
> L’étape qui suit devra être repétée pour chaque périphérique USB que vous voulez connecter

Enregistrez, refaites "Modifier les paramètres", puis "Ajouter un autre périphérique" et "USB device" :

![vmware.createvm27](images/vmware.createvm27.PNG)

Choisissez votre périphérique USB dans la liste déroulante :

![vmware.createvm28](images/vmware.createvm28.PNG)

Et voilà votre périphérique est branché sur votre VM. A chaque redémarrage il sera automatique rebranché sur la VM et si vous le deconnectez/connectez physiquement alors celui-ci sera rebranché sur votre VM. En d’autres termes l’utilisation est maintenant totalement transparente.
