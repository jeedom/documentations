# Desarrollar en Jeedom

> **Importante**
>
> Este tutorial fue escrito por ZygOm4t1k a quien agradecemos calurosamente. Puedes encontrar el original [aquí](https:/ // /forum.jeedom.com/ /viewtopic.php?f=27&t=37630#p621495)

Aquí hay un breve tutorial para explicar cómo crear un complemento. Para el ejemplo crearemos un complemento que devuelve una oración del sitio viedemerde.es (El complemento será escalable).

No reemplaza la documentación oficial de ninguna manera.

# Crear la base del complemento

Para comenzar, debe determinar un nombre y una identificación (que no debe existir)) :

- Nombre : Vida de caca
- Identificación : vdm

Descargue el complemento de plantilla para tener el [base](https:/ // /github.com/ /jeedom/ /plugin-template/ /archive/ /master.zip)

Descomprime el archivo . Vous obtiendrez un dossier « plugin-template-master » contenant des dossiers 3rdparty , core , desktop…

Vamos.

Renommer le dossier « plugin-template-master » en « vdm » (l'id) du plugin.

1 / Abra el archivo plugin_info / info.json y edita el.

````json
{
    "id" : "vdm",
    "name" : "Vida de caca",
    "description" : "Complemento para recuperar el último vdm",
    "licence" : "AGPL",
    "author" : "Zyg0m4t1k",
    "require" : "3.2",
    "category" : "monitoring",
    "changelog" : "",
    "documentation" : "",
    "language" : "",
    "compatibility" : ""
}
````

Copier coller le code ci-dessus.

J'ai changé l'Identificación (vdm) , le nom , ajouter une Descripción , l'auteur et la catégorie.

exigir : version minimale de jeedom pour avoir accés au plugin sur le market.

Changelog, documentation, Idioma , compatibilidad nuls pour le moment. J'y reviendrai plus tard

2/ / Nous allons renommer les fichiers nécessaires pour que le plugin soit reconnu par Jeedom

-   Renommer le fichier ``core/ /ajax/ /template.ajax.php`` en ``vdm.ajax.php``
-   Renommer le fichier ``core/ /class/ /template.class.php`` en ``vdm.class.php`` et ouvrez le pour l'éditer.
- Remplacer ``class template extends eqLogic {`` par ``class vdm extends eqLogic {``
- et ``class templateCmd extends cmd`` par ``class vdmCmd extends cmd``
- Renommer le fichier core/ /php/ /template.inc.php en core/ /php/ /vdm.inc.php
- Renommer le fichier desktop/ /php/ /template.php en desktop / /php/ /vdm.php et ouvrez le.
- Remplacer ``$plugin = plugin::byId('template');`` Por ``$plugin = plugin::byId(‘vdm');``
- Remplacer ``{% raw %}{{Ajouter un template}}{% endraw %}`` Por ``{% raw %}{{Ajouter un équipement}}{% endraw %}``
- Remplacer ``<legend>{{Mes templates}}</ /legend>`` Por ``{% raw %}<legend>{{Mes équipement}}</ /legend>{% endraw %}``
- Remplacer ``{% raw %}{{Nombre de l'équipement template}}{% endraw %}`` Por ``{% raw %}{{Nombre de l'équipement }}{% endraw %}``
- Remplacer ``{% raw %}{{template param 1}}{% endraw %}`` Por ``{% raw %}{{Paramètres}}{% endraw %}``
- Remplacer ``<?php include_file('desktop', 'template', 'js', 'template');?>`` Por ``<?php include_file('desktop', vdm, 'js', vdm);?>``

Et rien d'autre , ne pas changer la ligne ``<?php include_file('core', 'plugin.template', 'js');?>``

- Renommer le fichier ``desktop/ /modal/ /modal.template.php`` en ``desktop/ /modal/ /modal.vdm.php``
- Renommer le fichier ``desktop/ /js/ /template.js`` en ``desktop/ /js/ / vdm.js``
- Ouvrir le fichier ``plugin_info/ /install.php``

Et renommer les fonctions comme suit

````php
function vdm_install() {

}

function vdm_update() {

}


function vdm_remove() {

}
````

Aquí el complemento está listo pero queda la personalización y el ícono para actualizar : [Documentación](https:/ // /doc.jeedom.com/es_ES/dev/ /Icone_de_plugin)

Agregue el icono en la carpeta plugin_info bajo el nombre vdm_icon.png

en mi caso

![image](images/ /tutorial_vdm_icon.png)

Ahora podemos copiar la carpeta vdm en la carpeta del complemento Jeedom e ir a la administración del complemento. Encontramos el complemento.

![image](images/ /tutorial_vdm_plugin.png)

Lo activamos y luego complementos / Monitoreo / Vie de Merde

![image](images/ /tutorial_vdm_desktop1.png)

no está bien porque el color de la mayoría no coincide con el color del icono.

Abro el archivo ``desktop/ /php/ /desktop.php`` para corregir.

````html
{% raw %}
      <div class="cursor eqLogicAction" data-action="add" style="text-align: center; background-color : #ffffff; height : 120px;margin-bottom : 10px;padding : 5px;border-radius: 2px;width : 160px;margin-left : 10px;" >
        <i class="fa fa-plus-circle" style="font-size : 6em;color:#94ca02;"></ /i>
        <br>
        <span style="font-size : 1.1er; posición:relativo; parte superior : 23px; salto de palabra: romper todo; espacio en blanco: preenvío: break-word; color:#94ca02">{{Ajouter}}</ /span>
      </ /div>
{% endraw %}
````

Je remplace ``color:#94ca02;"`` par ``color:#00A9EC;"``

On remarque aussi que les textes ne sont pas alignés donc on rectifie le style de la configuration (propriété top)

````
{% raw %}<span style="font-size : 1.1er; posición:relativo; parte superior : 15px; salto de palabra: romper todo; espacio en blanco: preenvío: break-word; color:#767676 "> {{Configuración}} </span>{% endraw %}
````

par

````
{% raw %}<span style="font-size : 1.1er; posición:relativo : 23px; salto de palabra: romper todo; espacio en blanco: preenvío: break-word; color:#767676 "> {{Configuración}} </span>{% endraw %}
````

![image](images/ /tutorial_vdm_desktop2.png)

Voilà la base est prête. Vous devriez avoir le plugin d'acttejo mais pour le moment il ne fait rien.

# Les commandes

Le but du plugin sera de récupérer une vdm aléatoire et l'afficher sur le dashboard.

Il faut donc créer une commande de Tipo info pour stocker cette information. Elle sera de sous-Tipo « String » car c'est une chaîne de caractère.

Pour l'exemple nous allons ajouter une commande qui rafraîchit l'information. Ce sera donc une commande de Tipo action et sous-Tipo other

- Créer un équipement « vdm1 » en cliquant sur le +. Actívalo y hazlo visible. Choisissez un objet et l'équipement doit apparaître sur le dashboard( selon l'objet).

A ce moment, il n'y a pas de commandes qui apparaissent dans l'onglet commande s, ni sur le widget.

Abra el archivo core / class / vdm.class.PHP y búsqueda la fonction postSave() (Lire la doc du plugin template si pas encore fait)

On crée les 2 commandes

````php
public function postSave() {
    $info = $this->getCmd(null, 'story');
    tejo (!is_object($info)) {
        $info = new vdmCmd();
        $info->setName(__('Histoire', __FILE__));
    }
    $info->setLogicalId('story');
    $info->setEqLogic_id($this->getId());
    $info->setType('info');
    $info->setSubType('string');
    $info->save();

    $refresh = $this->getCmd(null, 'refresh');
    tejo (!is_object($refresh)) {
        $refresh = new vdmCmd();
        $refresh->setName(__('Rafraichir', __FILE__));
    }
    $refresh->setEqLogic_id($this->getId());
    $refresh->setLogicalId('refresh');
    $refresh->setType('action');
    $refresh->setSubType('other');
    $refresh->save();
}
````

- Créer un autre équipement « vdm2 » en cliquant sur le +. En la pestaña de comandos, aparecieron los comandos. Actívalo y hazlo visible. Elija un objeto principal y vea cómo se ve en el tablero.
- Enregistrer le premier équipement « vdm1 » pour créer les commandes. Vea el renderizado en el widget también.

En la pestaña de comandos, deberías ver.

![image](images/ /tutorial_vdm_cmd1.png)

Abra el escritorio / php / vdm.php para encontrar el código html de esta tabla.

````
{% raw %}
<a class="btn btn-success btn-sm cmdAction pull-right" data-action="add" style="margin-top:5px; "><i class="fa fa-plus-circle"></i> {{Pedidos}} </a><br/ /><br/ />
<table id="table_cmd" class="table table-bordered table-condensed">
    <thead>
        <tr>
            <th>{{Nom}}</ /th><th>{{Type}}</ /th><th>{{Action}}</ /th>
        </ /tr>
    </ /thead>
    <tbody>
    </ /tbody>
</ /table>
{% endraw %}
````

En el momento de la visualización, es el script de escritorio / js / vdm.js que se llama y lanza la función addCmdToTable.

````js
{% raw %}
función addCmdToTable (_cmd) {
    tejo (!isset (_cmd)) {
        var _cmd = {configuración: {}};
    }
    tejo (!isset (_cmd.configuration)) {
        _cmd.configuration = {};
    }
    <html>var tr = '.id) + '">';
    tr + = '<td> ';
    <html>tr + = ':ninguno; "> ';
    <html>tr + = ' : 140px; "placeholder =" {{Nombre}} "> ';
    tr + = '</td> ';
    tr + = '<td> ';
    <html>tr + = '.tipo) + '">' + jeedom.cmd.availableType () + '';
    <html>tr + = '.subType) + '">';
    tr + = '</td> ';
    tr + = '<td> ';
    si (es_numeric (_cmd.id)) {
        tr + = '<a class="btn btn-default btn-xs cmdAction" data-action="configure"><i class="fa fa-cogs"></i></a> ';
        tr + = ' <a class="btn btn-default btn-xs cmdAction" data-action="test"><i class="fa fa-rss"></i>{{Prueba}}</a> ';
    }
    tr + = '<i class="fa fa-minus-circle pull-right cmdAction cursor" data-action="remove"></i> ';
    tr + = '</td> ';
    tr + = '</tr> ';
    $('#table_cmd tbody').append(tr);
    $('#table_cmd tbody tr:last').setValues(_cmd, '.cmdAttr');
    si (isset (_cmd.type)) {
        $('#table_cmd tbody tr:last .cmdAttr[data-l1key=type]').value(init(_cmd.type));
    }
    jeedom.cmd.changeType ($ ('# table_cmd tbody tr:último '), init (_cmd.subType));
}
{% endraw %}
````

Cela se fait automatiquement.

Je souhaite ajouter les options Affichage et historiser pour chaque commande.

J'édite le code HTML du tableau dans le fichier desktop.php en ajoutant une colonne ..

````
{% raw %}<th>{{Nom}}</ /th><th>{{Type}}</ /th><th>{{Configuration}}</ /th><th>{{Action}}</ /th>{% endraw %}
````

Puis éditer desktop.js ,trouver

````js
    <html>tr + = '.subType) + '">';
    tr + = '</td> ';
    tr + = '<td> ';
    si (es_numeric (_cmd.id)) {
````

Agregamos la información deseada.

````js
{% raw %}
    <html>tr + = '.subType) + '">';
    tr + = '</td> ';
    tr + = '<td> ';
    tr + = ' <span><input type="checkbox" class="cmdAttr checkbox-inline" data-l1key="isHistorized" />{{Historizar</span>}}<br/ /></ /span>';
   tr + = ' <span><input type="checkbox" class="cmdAttr checkbox-inline" data-l1key="isVisible" />{{Monitor</span>}}<br/ /></ /span>';
   tr + = '</td> ';
    tr + = '<td> ';
    si (es_numeric (_cmd.id)) {
{% endraw %}
````

Je laisse le bouton pour créer une commande mais je souhaite qu'il soit à gauche.

````
{% raw %}<a class="btn btn-success btn-sm cmdAction pull-right" data-action="add" style="margin-top:5px; "><i class="fa fa-plus-circle"></i> {{Pedidos}} </a><br/ /><br/ />{% endraw %}
````

Je change la class pull-right en pull-left

````
{% raw %}<a class="btn btn-success btn-sm cmdAction pull-left" data-action="add" style="margin-top:5px; "><i class="fa fa-plus-circle"></i> {{Pedidos}} </a><br/ /><br/ />{% endraw %}
````

Voaquí le rendu.Las opciones de configuration (Affichage et historiser) sont bien présentes.

![image](images/ /tutorial_vdm_cmd2.png)

Voilà il reste à récupérer une vdm aléatoire et à utiliser les commandes.

# Récupération des informations

Pour récupérer une vdm de manière aléatoire.

````php
$url = "http:/ // /www.viedemerde.fr/ /aleatoire";
$data = file_get_contents($url);
@$dom = new DOMDocument();
libxml_use_internal_errors (falso);
$dom->loadHTML('<?xml encoding="UTF-8">' .$data);
libxml_use_internal_errors (verdadero);
$xpath = new DOMXPath($dom);
$divs = $xpath->query('/ // /article[@class="art-panel col-xs-12"]/ // /div[@class="panel-content"]/ // /p/ // /a');
return $ divs [0] -> nodeValue;
````

Abra el archivo core / class / vdm.class.php y para la clase vdm que hereda de los métodos egLogic, creo una función randomVdm

````php
función pública randomVdm() {
    $url = "http:/ // /www.viedemerde.fr/ /aleatoire";
    $data = file_get_contents($url);
    @$dom = new DOMDocument();
    libxml_use_internal_errors (verdadero);
    $dom->loadHTML($data);
    libxml_use_internal_errors (falso);
    $xpath = new DOMXPath($dom);
    $divs = $xpath->query('/ // /article[@class="art-panel col-xs-12"]/ // /div[@class="panel-content"]/ // /p/ // /a');
    return $ divs [0] -> nodeValue;
}
````

Maintenant on va updater la commande info(story) avec cette information en lançant la commande action(refresh).
Toujours dans core/ /class/ /vdm.class.php pour la class vdmCmd on va utiliser la méthode execute

````php
public function execute($_options = array()) {

}
````

C'est aquí qu'on va définir ce qu'il va se passer quand on lance la commande « Rafraîchir ». La clase vdmCmd heredó todos los métodos de la clase cmd (Core jeedom)

On vérifie le logicalIdentificación de la commande lancée et si « refresh » on lance les actions

````php
cambiar ($ this-> getLogicalId()) {
    caso 'actualizar': // LogicalId del comando de actualización que creamos en el método Postsave de la clase vdm .
    // código para actualizar mi pedido
    break;
}
````

Maintenant il reste à lancer la fonction randomVdm() . On récupère pour cela , l'eqLogic ( l'équipement) de la commande lancer et on lance la fonction

````php
$eqlogic = $this->getEqLogic(); / // / Récupération de l'eqlogic
$info = $eqlogic-> randomVdm() ; / // /Lance la fonction et stocke le résultat dans la variable $info
````

On met à jour la commande « story » avec la variable $info. Utilizaremos el método checkAndUpdateCmd de la clase eqlogic

````php
$eqlogic->checkAndUpdateCmd('story', $info);
````

Ce qui donne au final

````php
public function execute($_options = array()) {
    $eqlogic = $this->getEqLogic(); / // /récupère l'éqlogic de la commande $this
    cambiar ($ this-> getLogicalId()) {    / // /vérifie le logicalIdentificación de la commande
        caso 'actualizar': // LogicalId del comando de actualización que creamos en el método Postsave de la clase vdm .
            $info = $eqlogic->randomVdm();  / // /On lance la fonction randomVdm() pour récupérer une vdm et on la stocke dans la variable $info
            $eqlogic->checkAndUpdateCmd('story', $info); / // / on met à jour la commande avec le LogicalIdentificación "story"  de l'eqlogic
            break;
    }
}
````

Ahora ve a un dispositivo creado y ejecuta el comando Actualizar. Puis la commande « Histoire » qui doit être à jour.

En el Tablero, aparece información. Haga clic en el icono de actualización para cambiar la información

Luego definiremos el tamaño del widget y lo personalizaremos un poco

Luego automatiza la actualización.

# Actualizar información (cron)

El complemento es funcional pero por el momento no hace mucho. Si vous cliquer sur la commande « refresh » , la commande « story » se met à jour mais sinon rien.

Tenga en cuenta que para el orden lo nombro por logicalId. Y es importante. Tener un Id. Lógico único por dispositivo (eqLogic) simplifica las cosas.

Ahora veremos cómo actualizar el comando usando las funciones nativas del núcleo : Crons

Hay varios :

- cron : actualizar cada minuto
- Cron5 : actualizar cada 5 minutos
- Cron15 : actualizar cada 15 minutos
- Cron30 : actualizar cada 30 minutos
- CronHourly : eh ... cada hora
- CronDaily : bien 1 / día

Teniendo en cuenta el complemento, actualizaremos cada hora (seamos locos). Entonces usaremos la función cronHourly().

Por lo tanto, abriremos el archivo vdm.class.PHP y búsqueda

````php
/ /*
 * Función realizada automáticamente cada hora por Jeedom
  función estática pública cronHourly() {

  }
 */ /
````

Décommenter le code

````php
función estática pública cronHourly() {

}
````

Nuestra función es operativa

Ahora tienes que recuperar todo el equipo de nuestro complemento,

````php
self::byType ('vdm') // matriz que contiene todo el equipo de complementos
````

et les trier 1 par 1

````php
foreach (self::byType('vdm') as $vdm) {

}
````

Antes de hacer nada, verificamos que el equipo esté activo

````php
si ($ vdm-> getIsEnable () == 1) {

}
````

Voila maintenant on recherche la commande « refresh » de l'équipement (eqLogic)

````php
$cmd = $vdm->getCmd(null, 'refresh');
````

Si no existe, continuamos el ciclo (foreach), de lo contrario lo ejecutamos

````php
tejo (!is_object ($ cmd)) {
continue;
}
$cmd->execCmd();
````

Ce qui donne au final

````php
función estática pública cronHourly () {
    foreach (self::byType('vdm') as $vdm) {/ // /parcours tous les équipements du plugin vdm
        si ($ vdm-> getIsEnable () == 1) {/ // /vérifie que l'équipement est actif
            $cmd = $vdm->getCmd(null, 'refresh');/ // /retourne la commande "refresh si elle existe
            tejo (!is_object ($ cmd)) {// Si el comando no existe
              continúa; // continuar el ciclo
            }
            $cmd->execCmd(); / // / la commande existe on la lance
        }
    }
}
````

Pour tester, dans jeedom , aller dans configuration/ /moteur de tâches et lancer le cron de class « plugin » fonction « CronHourly ».

La información se actualiza.

Es bueno pero no me conviene. A la création de l'équipement, la commande « story » ne se met pas à jour.

Entonces mejoramos el código.

Para la creación de los pedidos utilizamos el método postSave(). Utilizaremos el método postUpdate () para actualizar la información.

La forma más fácil ya que solo hay un comando y se crea en postSave

````php
    función pública postUpdate() {
        $cmd = $this->getCmd(null, 'refresh'); / // / On recherche la commande refresh de l'équipement
        if (is_object ($ cmd)) {// existe y ejecutamos el comando
             $cmd->execCmd();
        }
    }
````

Il faut tester, ça fonctionne?

Mais voaquí une alternative qui peut s'avérer plus utile dans des cas plus complexe

Dans la fonction postUpdate() , on lance la function cronHourly() avec l'Identificación de l'équipement

````php
función pública postUpdate() {
    self::cronHourly($this->getId());/ // / lance la fonction CronHourly avec l'Identificación de l'eqLogic
}
````

Pero en este caso cambiamos la función cronHourly()

````php
función estática pública cronHourly ($ _ eqLogic_id = null) {
    if ($ _eqLogic_id == null) {// La función no tiene argumento, por lo que buscamos todo el equipo de complementos
        $eqLogics = self::byType('vdm', true);
    } else {// La función tiene el ID de argumento (único) de un dispositivo (eqLogic)
        $eqLogics = array(self::byId($_eqLogic_id));
    }

    foreach ($ eqLogics como $ vdm) {
        if ($ vdm-> getIsEnable () == 1) {// verifica que el dispositivo esté activo
            $cmd = $vdm->getCmd(null, 'refresh');/ // /retourne la commande "refresh si elle existe
            tejo (!is_object ($ cmd)) {// Si el comando no existe
              continúa; // continuar el ciclo
            }
            $cmd->execCmd(); / // / la commande existe on la lance
        }
    }
}
````

Après vous pouvez changer la fréquence du cron selon l'importance de vos informations à récupérer.

Je ne peux que vous invitez à prendre le temps d'aller sur cette page pour en savoir plus ==> [aquí](https:/ // /jeedom.github.io/ /documentation/ /phpdoc/ /index.html)

Et encore mieux d'aller sur le github du core ==> [aquí](https:/ // /github.com/ /jeedom/ /core/ /tree/ /alpha/ /core/ /class)

Mettez le nez de dedans pour maîtrisez encore plus .

Le plugin est fonctionnel en l'état.

Je prendrai le temps d'ajouter la façon de mettre en place un cron personnalisé selon l'équipement .

# Le widget

Pas une mince affaire le widget mais on va rester sur le widget par défaut pour le moment.

Si vous n'avez rien touché, équipement activé et visible, le widget prend toute la largeur de l'écran. On va donc le changer.

La commande qui apparaît est la commande «story» de Tipo info , sous-Tipo string

Mon plaisir est de me lever le matin est de lire une vdm au réveil. Ça me permet de voir qu'il y a pire que moi :D

Mais je n'ai pas mes lunettes et actuellement le rendu sur le widget ne me permet pas de le lire…

Donc on va changer le style en affectant un template à la commande « story»

Rien de plus simple.

Je vais voir ==> [aquí](https:/ // /github.com/ /jeedom/ /core/ /tree/ /alpha/ /core/ /template/ /dashboard)

Je cherche un template pour cmd.info.string( notre commande est de Tipo info sous-Tipo string) .Pas difficile il y en a que deux (default ou tile)

J'applique le template « cmd.info.string.tile.HTML » à ma commande.

Pour cela j'ouvre le fichier vdm.class.php , fonction postSave() et j'ajoute le template « tile » pour la commande « story » en appliquant la méthode setTemplate()

````php
$info = $this->getCmd(null, 'story');
tejo (!is_object($info)) {
    $info = new vdmCmd();
    $info->setName(__('Histoire', __FILE__));
}
$info->setLogicalId('story');
$info->setEqLogic_id($this->getId());
$info->setType('info');
$info->setTemplate('dashboard','tile');/ // /template pour le dashboard
$info->setSubType('string');
$info->save();
````

Actualizar el tablero.

Es mejor, pero el widget siempre toma el ancho del tablero. Entonces corregiremos. Por défaut la largeur du widget de l'équipement(eqLogic) et la hauteur sont à « auto ».

Por lo tanto, cambiaremos el ancho del widget (equipment => eqLogic) usando el método setDisplay () heredado de la clase eqLogic .Dejamos la altura en auto.

Para hacer esto, simplemente agregue

````php
$this->setDisplay("width","800px");
````

Oui , mais !! Car il y a un mais. Essayez d'ajouter ça dans la fonction postsave() ou postUpdate() et ça ne prends pas en compte le changement. Pourquoi ? Ben faut lire la doc du plugin template ==>ICI

Maintenant que vous avez bien lu vous savez qu'Il faut utiliser la méthode preSave()

````php
public function preSave() {
    $this->setDisplay("width","800px");
}
````

Registre el equipo y actualice el tablero.


# Los parámetros. Las opciones

> **Importante**
>
> Este es un capítulo importante y debes entenderlo antes de continuar.

Por el momento, usamos 3 clases del núcleo de la libertad : EqLogic, cmd, cron . Ir para obtener información, agregamos un cuarto con el complemento de clase en el archivo vdm.php que abres y dejas abierto porque vamos a editarlo .

````php
$plugin = plugin::byId('vdm'); / // / appelle la classe plugin du core
````

Il faut comprendre que tout est fait pour nous faciliter la tâche.

Pour un paramètre/ /une option interne au plugin , on va utiliser une des méthodes de la class eqLogic du core : setConfiguration() en y ajoutant les paramètres que l'on souhaite. Por exemple :

````php
$this->setConfiguration("type","mon_type"); / // / si on veut  définir un paramètre Tipo de valeur mon_type. Comme on a défini la largeur du widget via la méthode setDisplay()
````

Para dejar la elección al usuario, volvemos al archivo de escritorio.PHP que dejaste abierto porque sigues este TP literalmente :D

Chercher

````
<input type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="city" placeholder="param1"/ />
````

Y reemplazar con

````
<input type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="type" placeholder="option"/ /> / // /Importante de laisser la classe eqLogicAttr
````

Guarde y vaya a un dispositivo de complemento que ya haya creado siguiendo este laboratorio (Actualice si es necesario).

Dans le champs « Paramètre» d'un équipement, taper « aleatoire » et sauvegarder.

Perfecto se guarda la configuración.

![image](images/ /tutorial_parametre1.png)


Es simple, no? . C'est pourquoi il ne faut surtout pas toucher à cette ligne de code comme indiqué dans le premier menu « test » . El hace todo el trabajo

````
<?php include_file('core', 'plugin.template', 'js');?>/ // /Chargement du fichier core/ /js/ /plugin.template.js (en partant de la racine du site)
````

Si observa de cerca el archivo de escritorio.Hace php

````
<input type="text" class="eqLogicAttr form-control" data-l1key="id" style="display : none;" / /> / // / retourne l'id(unique) de l'eqLogic(équipement) . Qu'on va pouvoir récupérer via $this->getId() ;
````

````
{% raw %}
<input type="text" class="eqLogicAttr form-control" data-l1key="name" placeholder="{{Nombre de l'équipement}}"/ />/ // / retourne le nom de l'eqLogic(équipement) . Qu'on va pouvoir récupérer via $this->getName() ;
{% endraw %}
````

Etc…

Si ha entendido todo esto bien, podremos seguir adelante. Pero primero cambiaremos en el archivo desktop.php

````
{% raw %}
<label class="col-sm-3 control-label">{{Paramètre}}</ /label>
{% endraw %}
````

Par

````
{% raw %}
<label class="col-sm-3 control-label">{{Type de vdm}}</ /label>
{% endraw %}
````

Importante : El texto entre llaves corresponde al texto que se traducirá si empuja el complemento en el mercado

Por lo demás, desarrollaremos el plugin eligiendo un tipo de vdm (aleatorio o picante o tops) que queramos así como un cron personalizado para cada dispositivo.

# Uso de opciones / parámetros

Para ir más allá y comprender el capítulo anterior, dejaremos que el usuario elija un tipo de vdm (aleatorio o picante o superior))

On pourrait le laisser taper dans l'input « Type de vdm » : al azar o picante o superior, pero haremos lo contrario dejándolo elegir a través de una etiqueta de selección

Si has seguido todo, deberías tenerlo en el archivo desktop.php

````
{% raw %}
 <div class="form-group">
  <label class="col-sm-3 control-label">{{Type de vdm}}</ /label>
  <div class="col-sm-3">
      <input type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="type" placeholder="option"/ />
  </ /div>
</ /div>
{% endraw %}
````

Que reemplazaremos con

````
{% raw %}
<div class="form-group">
    <label class="col-sm-3 control-label" >{{ Type de vdm }}</ /label>
    <div class="col-sm-3">
        <select class="form-control eqLogicAttr" data-l1key="configuration" data-l2key="Tipo ">
            <option value="aleatoire">{{Aleatoire}}</ /option>
            <option value="epicees">{{Coquin}}</ /option>
            <option value="tops">{{Best}}</ /option>
        </ /select>
    </ /div>
</ /div>
{% endraw %}
````

Ici le paramètre « type» prendra la valeur du select choisi soit aléatoire ou epicees ou tops.

Ahora tendremos en cuenta nuestro parámetro en la función randomVdm () en el archivo vdm.class.php

Chercher

````php
$url = "http:/ // /www.viedemerde.fr/ /aleatoire";
````

Y reemplazar con

````php
$Tipo = $this->getConfiguration("Tipo ");
if($Tipo == "") { / // /si le paramètre est vide ou n'existe pas
    $Tipo = "aleatoire"; / // /on prends le Tipo aleatoire
}
$url = "http:/ // /www.viedemerde.fr/ /" .$Tipo  ;
````

Ahora cambie el valor de la selección en un dispositivo, guarde y vaya al panel de control para ver qué ofrece.
