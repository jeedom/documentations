Configuration 
=============

Intro 
=====

Le plugin widget est un plugin un peu particulier, car il ne permet pas
de créer des équipements mais de modifier le rendu (affichage) d’une
commande. L’objectif de ce plugin est donc de permettre de personnaliser
simplement la façon d’afficher une valeur, info, ou action en fonction
de ses goûts et désirs.

Depuis la version 1.112 de Jeedom, il est possible de personnaliser les
widgets avec des options spécifiques (créées par le développeur du
widget). On peut donc avoir un widget qui s’affichera différemment d’une
commande à l’autre.

Ainsi, on peut avoir un même widget écrit en bleu sur une commande et en
vert sur une autre.

> **Note**
>
> Widget et Tuile, à ne pas confondre.
>
> Le widget, c’est la partie qui va se charger de mettre en forme et
> afficher une info ou commande. Un widget ne doit s’occuper que d’une
> seule commande ou info.
>
> La Tuile, c’est un regroupement de widgets pour un module. C’est la
> zone dans laquelle vont s’afficher les différents widgets appliqués
> aux commandes et infos du module.

Installation du plugin Widget 
=============================

Comme pour tout plugin, le plugin Widget s’installe depuis l’interface
Jeedom, menu "Général"⇒"Plugins"

![capture001](../images/capture001.png)

Cliquer sur l’icône verte pour accéder directement au Market. Dans cette
fenêtre cliquer sur "Officiel" et dans le champ de recherche mettre
"Widget".

![capture002](../images/capture002.png)

Cliquer sur l’icône du plugin. Cela ouvre la fiche du plugin dans
laquelle se trouvent plusieurs informations.

![capture003](../images/capture003.png)

Cliquer sur le bouton "Installer stable". Une fois installé, Jeedom vous
demande si vous souhaitez aller à la page de configuration du plugin.
Répondre oui. Sur la page de configuration du plugin widget, nous
n’avons pour ce plugin qu’une seule option : activer ou désactiver.

Par défaut le plugin est désactivé. je vous invite donc à cliquer sur le
bouton vert "activer".

Dès à présent le plugin est actif et opérationnel.

Présentation et fonction de base du Plugin Widget 
=================================================

Afin de se rendre dans le plugin Widget, il faut aller dans le menu
"Plugins"⇒"Programmation"⇒"Widget".

![capture005](../images/capture005.png)

On se trouve donc sur la page principale du plugin. Ce dernier dispose
par défaut d’un éventail de widgets dès son installation Il est possible
d’en télécharger d’autres via le market ou de créer ses propres widgets
(voir plus bas).

![capture006](../images/capture006.png)

En cliquant sur l’un des widgets de la liste du menu de droite ou de
gauche vous allez ouvrir la page de configuration du widget, dans
laquelle vous pouvez modifier, voir un aperçu du widget (si Jeedom
trouve une commande compatible) et tout un tas d’infos de configuration
comme le code source du widget

![capture007](../images/capture007.png)

> **Warning**
>
> Si vous modifiez un widget qui n’est pas une de vos créations, il est
> préférable de le dupliquer pour éviter de perdre vos modifs si le
> widget original est mis à jour.

Pour plus d’infos sur la configuration et création de widget voir plus
bas.

Appliquer le widget sur une commande 
------------------------------------

Pour appliquer un widget sur une seule commande ou modifier celui
appliqué, il faut vous rendre sur la page de configuration du module. Le
chemin pour accéder au module diverge en fonction du type de ce dernier.
Voici quelques exemples :

Pour les modules Z-Wave, "Plugins"⇒"Protocole domotique"⇒"Z-wave", puis
choisir le module de la commande que vous souhaitez modifier.

![capture024](../images/capture024.png)

Sur la page de configuration du module, se rendre sur la commande et
cliquer sur les roues crantées. Dans la nouvelle fenêtre, se rendre dans
l’onglet "Affichage avancé"

![capture025](../images/capture025.png)

Vous pouvez ici modifier le widget appliqué pour les ordinateurs et
mobiles avec les listes déroulantes dédiées.

![capture014](../images/capture014.png)

> **Note**
>
> Les listes déroulantes sont auto filtrantes. Elles ne fournissent que
> les widgets compatibles avec le type de commande.

Appliquer le widget sur plusieurs commandes {#ancre-1}
-------------------------------------------

En cliquant sur le bouton “Appliquer sur des commandes” vous ouvrez une
fenêtre qui liste toutes les commandes compatibles avec le type du
widget. Vous pouvez donc simplement appliquer ou retirer le widget à de
nombreuses commandes en une seule fois.

![capture008](../images/capture008.png)

Il suffit de cocher les commandes sur lesquelles vous souhaiter
appliquer le widget

### Divers exemples pour une même commande 

![Widget : badge-transparent](../images/capture009.png)

![Widget : badge](../images/capture010.png)

![Widget : ConsoIMG](../images/capture011.png)

Options de personnalisation des widgets 
---------------------------------------

Depuis la version 1.112 de Jeedom, il est possible de personnaliser les
widgets avec des options spécifiques (créées par le développeur du
widget) et communes à tous les widgets. On peut donc avoir un widget qui
s’affichera différemment d’une commande à l’autre.

On peut accéder à ces options de 2 façons. Soit par l’arbre Domotique
qui se trouve dans le menu "Général" ⇒ "Résumé Domotique"

![capture012](../images/capture012.png)

Sur cette page vous trouvez tous vos éléments domotiques, les objets,
les modules, les commandes. Cliquez sur la petite roue crantée pour
accèder à la page de configuration.

![capture013](../images/capture013.png)

Soit depuis la page de configuration des modules.

![capture015](../images/capture015.png)

### Ajouter une option personnalisée 

Dans l’onglet "Affichage avancé" on trouve 2 listes déroulantes qui
permettent de changer pour la commande le widget utilisé sur un
ordinateur et l’autre pour les mobiles. Il y a aussi d’autres options,
pour afficher ou non les noms et stats, forcer le retour à la ligne
avant/après le widget s’il y a plusieurs commandes dans un module
(retours à la ligne dans la tuile). Enfin la liste des paramètres
optionnels Widget appliqués (la liste disponible se trouve sur le forum
ou Wiki, un système de doc est à l’étude)

![capture014](../images/capture014.png)

![exemple 1 de valeur pour afficher un compteur
spécifique](../images/capture016.png)

![exemple 2 de valeur pour afficher un autre
compteur](../images/capture017.png)

> **Note**
>
> Pour ajouter une option il vous suffit de cliquer sur le bouton
> "Ajouter", de renseigner le nom de l’option avec les bonnes minuscules
> et majuscules, ainsi que la valeur à attribuer à l’option. Pour
> trouver les options, consulter le forum ou/et le Wiki

Configuration avancée 
---------------------

Voir la doc sur le Résumé domotique ⇒
[ICI](https://jeedom.github.io/core/fr_FR/display)

Création / Modification de widget 
---------------------------------

Le plugin offre 2 possibilités pour la création de Widgets, le mode
facile qui permet de faire des widgets basiques facilement avec un
assistant de création, et le mode avancé qui permet aussi la
modification par la suite de tous les widgets.

> **Note**
>
> Le mode avancé apporte une souplesse sans limite. Toutefois, il vous
> faut avoir quelques connaissances en langage de programmation basique
> telle que HTML et CSS pour la base et JavaScript pour pouvoir réaliser
> des choses un peu plus complexes.

### Mode création facile 

Pour réaliser un widget avec l’assistant, il vous suffit de vous rendre
dans le plugin : menu "Plugins"⇒"Programmation"⇒"Widget". A partir de
cette page, cliquer sur le bouton "Mode création facile" en haut à
gauche.

![capture026](../images/capture026.png)

Sur la nouvelle page, vous pouvez dans la partie de droite, visualiser
les icônes de base Jeedom, les images que vous avez importées et les
packs importés. Sur la partie de gauche, en premier un bouton pour
importer des packs ou images, puis 3 boutons pour la création de widget.

![capture027](../images/capture027.png)

-   Widget On/Off ⇒ Destiné aux commandes bouton pour les on/off

-   Widget Simple Etat ⇒ Destiné aux commandes qui ont un retour d’état

-   Widget Numérique ⇒ Destiné aux commandes qui envoient une valeur
    numérique (exemple : Température, luminosité …​ etc)

#### Exemple avec la création d’un widget d’état 

> **Note**
>
> Cet exemple reste applicable pour les 2 autres types de création

Cliquer sur le bouton "Widget Simple Etat". On arrive sur la page de
configuration assistée. Il faut donner un nom au widget (nom unique), le
type d’interface, si le widget est destiné au PC (Dashboard) ou mobile,
puis la bibliothèque à utiliser (Jeedom, Image perso ou packs).

![capture028](../images/capture028.png)

Puis il vous faut choisir l’icône pour l’Etat 0 et 1, ainsi que la
taille de l’icône (valeur en "EM" = % de la taille d’origine de la
police du navigateur, 1 = 100%). Ceci fait, le code source apparaît en
dessous de la zone de configuration.

> **Warning**
>
> Ne pas modifier ces informations si vous ne savez pas ce que vous
> faites.

Il ne reste plus qu’à valider pour finaliser la création du widget. Vous
serez automatiquement redirigé sur la page de configuration avancée qui
vous permet d’appliquer le widget à plusieurs commandes (voir le
chapitre [Appliquer le widget sur plusieurs commandes](#ancre-1))

### Création / modification en mode avancé 

En mode avancé, il faut avoir des connaissances en langage de
programmation "HTML", "CSS" et "JavaScript" pour pouvoir modifier
correctement un widget.

> **Note**
>
> Il existe plusieurs sites en FR sur le web pour apprendre ces
> langages, je vous conseille OpenClassRoom qui explique tout depuis le
> début.

Pour accéder au mode avancé, il vous suffit de vous rendre dans le
plugin widget, de choisir le widget à modifier ou de cliquer sur le
bouton "Ajouter un widget"

#### Création d’un widget 

Depuis la page principale du plugin, cliquer sur "Ajouter un Widget".
Jeedom vous demande quelques infos sur le futur widget.

![capture029](../images/capture029.png)

-   Le nom doit être un nom unique. Vérifiez donc que ce nom n’existe
    pas déjà.

-   Version, correspond au type d’appareil pour lequel il est destiné
    (PC ou Mobile).

-   Type, correspond au type de commande qui utilisera le widget: aucun,
    info ou action.

-   Sous-type, donne une précision au type choisi précédemment.

On peut modifier le nom, type et sous-type par la suite. Toutefois, cela
peut avoir des incidences si le widget est déjà appliqué à une ou
plusieurs commandes. Il vaut donc mieux l’éviter.

##### Le type Info 

Le type "info" est utilisé pour des commandes qui renvoient une valeur,
par exemple, un état de module, une valeur numérique (température,
luminosité, humidité etc), un texte ou toute autre information.

-   Numérique : pour les nombres

-   Binaire : pour les états on/off (0/1)

-   Autre : pour tous les autres types d’infos comme les textes

##### Le type action 

Le type "action" est utilisé pour des commandes qui vont avoir une
action dans Jeedom ou sur un équipement externe.

-   Défaut : utilisé pour créer des boutons d’action

-   Curseur : utilisé pour créer des curseurs permettant de modifier des
    valeurs numériques

-   Message : Utilisé pour créer une zone de saisie de texte avec bouton
    d’envoi

-   Couleur : utilisé pour créer un bouton de choix de couleur

Une fois paramétré, cliquer sur "Ajouter". Jeedom vous redirige sur la
page principale de la configuration/modification du Widget. A partir de
là, le widget est créé dans Jeedom mais ne contient pour le moment pas
de code pour l’affichage de la commande.

![capture030](../images/capture030.png)

#### Modification d’un widget 

Une fois sur la page principale de config d’un widget, c’est dans la
partie "code source" que les modifications de l’apparence s’appliquent.

> **Warning**
>
> Pour modifier ces infos il faut avoir quelques bases en programmation
> HTML, CSS et JavaScript. Les modifications peuvent avoir un impact
> important sur l’affichage du widget et sur l’affichage d’autres
> widgets, voire bloquer l’affichage de tous les widgets.

La base (squelette) d’un widget se fait en HTML. Cela permet de
structurer l’affichage et de retrouver plus simplement les informations.

Dans Jeedom pour les widgets, le premier bout de code à créer c’est une
"div" qui fera office de conteneur principal pour tout le code de notre
Widget.

Dans cette "div", on peut y trouver jusqu’à 3 sous-parties distinctes :

-   La partie HTML qui va afficher les informations

-   La partie CSS qui va rendre plus joli en mettant en forme la parte
    HTML (Partie Facultative)

-   La partie JavaScript qui permet de travailler sur diverses actions,
    calculs et animations

##### Code HTML 

Plutôt que de longs discours, voici un exemple de code de base pour un
widget

**Structure HTML de base.**

``` {.html}
<div>
    <center>
        <span></span>
    </center>

    <style>

    </style>

    <script>

    </script>
</div>
```

La structure de base qui schématise les différents emplacements dans
notre widget est maintenant créée. Pour autant, on n’a rien qui
s’affiche, c’est normal.

div

:   conteneur multifonction relativement polyvalent avec retour à la
    ligne après lui

center

:   balise qui centre son contenu

span

:   conteneur multifonction relativement polyvalent sans retour à la
    ligne après lui

style

:   Conteneur pour le code CSS qui sera appliqué de façon générale
    (attention son contenu peut affecter tous les éléments de la page)

script

:   balise qui vas contenir du JavaScript

En l’état, il est difficile de faire quoi que ce soit avec ce bout de
code. C’est pourquoi on va ajouter quelques options (appelées Attribut
en langage HTML) dans nos balises.

**Ajout des attributs de base.**

``` {.html}
<div class="Doc-#id# cmd tooltips cmd-widget #history#" title="" data-type="info" data-subtype="numeric" data-cmd_id="#id#" >

    <center>
        <span></span>
    </center>

    <style>

    </style>

    <script>

    </script>
</div>
```

Dans notre "div" principal on a ajouté plusieurs attributs :

id

:   L’attribut "id" est déconseillé sur Jeedom

> **Important**
>
> Pour être sûr d’éviter un conflit au niveau des IDs (ce qui peut
> planter toute la page web), sous Jeedom nous utilisons des class-id et
> des attribut "data-". Cela permet d’être sûr qu’en cas de collision,
> toute la page web ne soit pas plantée.

class

:   Les class contrairement aux ids ne sont pas uniques. Elle servent à
    appliquer un style défini dans la partie style (la balise). On peut
    ainsi reproduire simplement une même mise en forme que l’on crée une
    fois et que l’on réutilise par mot clé (class). Ici on ajoute
    plusieurs class définies et disponibles de base dans Jeedom (voir
    plus bas les class Jeedom).

        Jeedom utilise à la place de l'attribut id, une class comme id, cela permet de rendre un élément unique sur la page afin de le retrouver et le cibler plus facilement. Il est impératif que sa valeur soit unique sur la page. Pour cela je vous conseille d'utiliser un mot qui représente notre élément. Dans notre exemple la div représente l'ensemble de notre widget, donc on peut utiliser le nom de notre widget ou une abréviation (ici j'ai choisi Doc-). Ensuite, afin de garantir que la class-id soit unique, on va y mettre un tag "#id#" (pour plus d'info sur les tags Jeedom voir plus bas), ce qui donne "Doc-#id#".

data-type

:   cette attribut permet de stocker le type de la commande sur laquelle
    le widget vas être appliqué. Il faut donc que sa valeur corresponde
    au paramètre type au dessus de la zone de code.

data-subtype

:   cette attribut permet de stocker le sous-type de la commande sur
    laquelle le widget vas être appliqué. Il faut donc que sa valeur
    corresponde au paramètre sous-type au dessus de la zone de code.

data-cmd\_id

:   Cet attribut prend comme valeur le Tag \#id\#. Il est utilisé par
    Jeedom pour la mise à jour du Dashboard.

A partir de là, on a une base qui correspond au standard Jeedom. C’est
le code minimaliste qu’il faut pour avoir un widget qui respecte la
charte/règle Jeedom

> **Important**
>
> Ne pas oublier de modifier l’attribut data-type et data-subtype si
> vous modifiez ces valeur dans la config du widget.

##### Code CSS 

Cette partie qui vient s’ajouter entre les 2 balises "style", permet de
déclarer des règles de mise en forme. Cette partie est facultative car
on peut ajouter les mises en forme directement dans l’attribut style
d’une balise ou à l’aide de JavaScript. L’utilisation de cette partie
est donc une question de préférence pour bien séparer le HTML et le CSS

> **Warning**
>
> Tout code déclaré dans des balises style, s’applique à toute la page.
> Il faut donc bien faire attention au sélecteur CSS que vous choisissez
> d’utiliser pour ne pas altérer les autres widgets.

Afin de ne pas impacter d’autres widgets involontairement par le code
CSS que vous allez y mettre, je vous conseille d’utiliser le sélecteur
id qui cible votre widget.

Exemple, si je veux mettre en rouge le texte situé dans la balise
"Span", on aurait tendance à écrire :

**Code mis dans la balise Style.**

``` {.CSS}
span{
    color: red;
}
```

Mais cela aurait pour effet de changer la couleur du texte de tous les
span de la page. Donc pour éviter cela, ajouter un sélecteur id qui vise
votre widget pour délimiter son action :

**Code mis dans la balise Style et délimité.**

``` {.CSS}
.Doc-#id# span{
    color: red;
}
```

En ajoutant .Doc-\#id\# devant le sélecteur span, on délimite la
modification à l’intérieur de notre widget.

##### Code JavaScript 

Le JavaScript se met entre les balises "Script". On utilise le
JavaScript pour faire des calculs, convertir des données, animer le
widget, mettre en forme le widget, réaliser des actions sur le widget en
fonction d’événements. En plus du JavaScript de base, Jeedom intègre par
défaut plusieurs Frameworks qui permettent de simplifier le code
JavaScript. On peut donc utiliser sans les initialiser :

-   Jquery

-   Jquery UI

-   Bootstrap

> **Warning**
>
> En cas d’erreur dans le code JS, cela peut bloquer tous les codes JS
> qui pourraient suivre, que ce soit dans le widget ou d’autres widgets.
> Il faut donc être prudent lors des modifications.

> **Tip**
>
> Si après avoir enregistré une modification de widget, la roue crantée
> contenue à tourner indéfiniment, il se peut que vous ayiez fait une
> erreur JS qui fais planter la suite de l’exécution JS sur la page.
> Pour pouvoir corriger il vous suffit de passer la div
> id=jqueryLoadingDiv en display none à l’aide de la console du
> navigateur, corriger le code et enregistrer. Il faut aussi faire F5
> pour actualiser la page.

### Les tags Jeedom 

Dans Jeedom vous rencontrerez souvent les tags qui sont des noms
entourer de "\#". Le principe de fonctionnement de ces tags est simple :
Jeedom vas les remplacer par la valeur qui correspond au tag. Les Tags
sont des sortes de variables (boîtes) dans lesquelles sont stockées des
valeurs que l’on ne connait pas au moment où l’on écrit le code. C’est
un peu comme si l’on faisait un texte avec des blancs pour y mettre plus
tard des mots qui donneraient un sens variable au texte.

Tous les tags ne sont pas disponibles avec tous les types de commande,
voici donc la liste et leur détail :

\#id\#

:   ID de la commande créé par Jeedom à la création de la commande
    (valeur numérique unique).

        A utiliser comme du texte, en JS ou dans les attributs HTML

\#logicalId\#

:   ID logique de la commande (peut être vide).

        A utiliser comme du texte ou en JS

\#name\#

:   Nom de la commande.

        A utiliser comme du texte ou en JS

\#name\_display\#

:   Nom de la commande. A utiliser pour l’affichage du nom de la
    commande au niveau du widget.

        A utiliser comme du texte ou en JS

\#hideCmdName\#

:   Vide si le nom de la commande doit être affiché. Et "display:none;"
    si le nom de la commande ne doit pas être affiché.

        A utiliser dans les attributs HTML style (CSS)

\#maxValue\#

:   Valeur maximale que peut prendre la commande.

        A utiliser comme du texte, en JS ou dans les attributs HTML

<!-- -->

\#valueName\#

:   Nom de la commande info liée, si la commande action est liée à une
    commande info, nom de la commande action sinon.

        A utiliser comme du texte ou en JS

\#lastValue\#

:   Dernière valeur de la commande (peut être vide).

        A utiliser comme du texte ou en JS

<!-- -->

\#unite\#

:   Unité de la commande

        A utiliser comme du texte ou en JS

\#collectDate\#

:   Retourne la date et heure de la dernière mise à jour du widget au
    format "yyyy-mm-dd hh:mn:ss"

        A utiliser comme du texte, en JS, ou dans l'attribut titre

\#state\#

:   Valeur de la commande

        A utiliser comme du texte ou en JS

\#displayHistory\#

:   Permet de prendre en compte l’option "Afficher les statistiques sur
    les widgets" dans le menu "Général"⇒"Administration"⇒"Configuration"
    onglet "Configuration des commandes". Si l’option est sur oui, le
    tag retournera un vide sinon 'display : none;'

        A utiliser dans l'attribut "style" d'une balise html à afficher si l'historisation est activée dans la config Jeedom

\#averageHistoryValue\#

:   Valeur moyenne sur les x dernières heures de la commande

        A utiliser comme du texte ou en JS

\#minHistoryValue\#

:   Minimum sur les x dernières heures de la commande

        A utiliser comme du texte ou en JS

\#maxHistoryValue\#

:   Maximum sur les x dernières heures de la commande

        A utiliser comme du texte ou en JS

\#tendance\#

:   Permet si l’historique de la valeur est activé de retourner les
    class : 'fa fa-minus', 'fa fa-arrow-up' ou 'fa fa-arrow-down' (icone
    trait, flèche bas, flèche haut), liées à la tendance de la valeur

        A utiliser dans l'attribut "class" d'une balise "i"

\#history\#

:   Permet si l’historique de la valeur est activé de retourner les
    class : 'history cursor' (Voir les class CSS Jeedom), sinon il sera
    remplacé par un vide. Le tag permet donc d’afficher ou non le
    graphique d’historique sur le dashboard.

        A utiliser dans l'attribut "class" de la div principale

![Exemple de retour de valeur](../images/capture031.png)

### Les class CSS Jeedom 

cmd:   
    - Doit impérativement être ajouté à l’attribut "class" de la div
    principale, cette class permet la mise à jour du widget. Sans cette
    class le widget ne se met à jour que par actualisation de la page.

cmd-widget:   
    - Cette class est recommandée car elle permet d’ajouter quelques
    paramètres CSS par défaut au widget pour un bon comportement.

cursor:   
    - Permet de modifier le pointeur en main.

history:
    - Cette class permet de modifier le pointeur en main, et lors du clic
    d’afficher l’historique de la valeur du widget.

tooltips:   
    - C’est pour le title d’un élément au lieu d’être jaune il devient
    noir translucide avec le texte en blanc

FAQ 
===

Comment apprendre à faire un widget ?

:   Le système de widget s’appuie sur les langages HTML et Javascript,
    il est donc conseillé de regarder les cours (très nombreux) sur
    ces langages. De plus il est intéressant de lire aussi des cours sur
    Jquery (et Jquery mobile pour la version mobile des widgets).

Une autre façon est de faire un widget en "création facile", ainsi le
plugin génèrera automatiquement le code de vos widgets.
