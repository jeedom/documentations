# Desarrollar en Jeedom

> **Importante**
>
> Este tutorial fue escrito por ZygOm4t1k a quien agradecemos calurosamente. Puedes encontrar el original [aquí](https://forum.jeedom.com/viewtopic.php?f=27&t=37630#p621495)

Aquí hay un breve tutorial para explicar cómo crear un complemento. Para el ejemplo crearemos un complemento que devuelve una oración del sitio viedemerde.es (El complemento será escalable).

No reemplaza la documentación oficial de ninguna manera.

# Crear la base del complemento

Para comenzar, debe determinar un nombre y una identificación (que no debe existir)) :

- Nombre : Vida de caca
- Identificación : vdm

Descargue el complemento de plantilla para tener el [base](https://github.com/jeedom/plugin-template/archive/master.zip)

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

2/ Nous allons renommer les fichiers nécessaires pour que le plugin soit reconnu por Jeedom

-   Renommer le fichier ``core/ajax/template.ajax.php`` en ``vdm.ajax.php``
-   Renommer le fichier ``core/class/template.class.php`` en ``vdm.class.php`` et ouvrez le pour l'éditer.
- Remplacer ``class template extends eqLogic {`` por ``class vdm extends eqLogic {``
- et ``class templateCmd extends cmd`` por ``class vdmCmd extends cmd``
- Renommer le fichier core/php/template.inc.php en core/php/vdm.inc.php
- Renommer le fichier desktop/php/template.php en desktop /php/vdm.php et ouvrez le.
- Remplacer ``$plugin = plugin::byId('template');`` Par ``$plugin = plugin::byId(‘vdm');``
- Remplacer ``{% raw %}{{Ajouter}}{% endraw %}`` Par ``{% raw %}{{Ajouter un équipement}}{% endraw %}``
- Remplacer ``{% raw %}<legend>{{Mes templates}}</legend>{% endraw %}`` Par ``{% raw %}<legend>{{Mes équipements}}</legend>{% endraw %}``
- Modifier ``{% raw %}{{Aucun équipement Template n'est parametré}}{% endraw %}`` Par ``{% raw %}{{Aucun équipement NomEquipement n'est parametré}}{% endraw %}``
- Remplacer ``<?php include_file('desktop', 'template', 'js', 'template');?>`` Par ``<?php include_file('desktop', 'vdm', 'js', 'vdm');?>``

Et rien d'autre , ne pas changer la ligne ``<?php include_file('core', 'plugin.template', 'js');?>``

- Renommer le fichier ``desktop/modal/modal.template.php`` en ``desktop/modal/modal.vdm.php``
- Renommer le fichier ``desktop/js/template.js`` en ``desktop/js/ vdm.js``
- Ouvrir le fichier ``plugin_info/install.php``

Et renommer les fonctions comme suit

````php
function vdm_install() {

}

function vdm_update() {

}


function vdm_remove() {

}
````

Aquí el complemento está listo pero queda la personalización y el ícono para actualizar : [Documentación](https://doc.jeedom.com/es_ES/dev/Icone_de_plugin)

Agregue el icono en la carpeta plugin_info bajo el nombre vdm_icon.png

en mi caso

![image](images/tutorial_vdm_icon.png)

Ahora podemos copiar la carpeta vdm en la carpeta del complemento Jeedom e ir a la administración del complemento. Encontramos el complemento.

![image](images/tutorial_vdm_plugin.png)

Lo activamos y luego complementos / Monitoreo / Vie de Merde

![image](images/tutorial_vdm_desktop1.png)

no está bien porque el color de la mayoría no coincide con el color del icono.

Abro el archivo ``desktop/php/desktop.php`` para corregir.

````html
{% raw %}
      <div class="cursor eqLogicAction" data-action="add" style="text-align: center; background-color : #ffffff; height : 120px;margin-bottom : 10px;padding : 5px;border-radius: 2px;width : 160px;margin-left : 10px;" >
        <i class="fa fa-plus-circle" style="font-size : 6em;color:#94ca02;"></i>
        <br>
        <span style="font-size : 1.1er; posición:relative; top : 23px; salto de palabra: romper todo; espacio en blanco: preenvío: break-word; color:#94ca02">{{Ajouter}}</span>
      </div>
{% endraw %}
````

Je remplace ``color:#94ca02;"`` por ``color:#00A9EC;"``

On remarque aussi que les textes ne sont pas alignés donc on rectifie le style de la configuration (propriété top)

````html
{% raw %}<span style="font-size : 1.1er; posición:relative; top : 15px;word-break: romper todo; espacio en blanco: preenvío: break-word; color:#767676 "> {{Configuración}} </span>{% endraw %}
````
par

````html
{% raw %}<span style="font-size : 1.1er; posición:relativo : 23px; salto de palabra: romper todo; espacio en blanco: preenvío: break-word; color:#767676 "> {{Configuración}} </span>{% endraw %}
````

![image](images/tutorial_vdm_desktop2.png)

Voilà la base est prête. Vous devriez avoir le plugin d'acttejo mais pour le moment il ne fait rien.

# Les commandes

Le but du plugin sera de récupérer une vdm aléatoire et l'afficher sur le dashboard.

Il faut donc créer une commande de Tipo info pour stocker cette information. Elle sera de sous-Tipo « String » car c'est une chaîne de caractère.

Pour l'exemple nous allons ajouter une commande qui rafraîchit l'information. Ce sera donc une commande de Tipo action et sous-Tipo other

- Créer un équipement « vdm1 » en cliquant sur le +. Actívalo y hazlo visible. Choisissez un objet et l'équipement doit apparaître sur le dashboard( selon l'objet).

A ce moment, il n'y a pas de commandes qui apparaissent dans l'onglet commande s, ni sur le widget.

Ouvrir le fichier core/class/vdm.class.php et chercher la fonction postSave() (Lire la doc du plugin template si pas encore fait)

On crée les 2 commandes

````php
public function postSave() {
    $info = $this->getCmd(null, 'story');
    tejo (!is_object ($ info)) {
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

![image](images/tutorial_vdm_cmd1.png)

Abra el escritorio / php / vdm.php para encontrar el código html de esta tabla.

````
{% raw %}
<a class="btn btn-success btn-sm cmdAction pull-right" data-action="add" style="margin-top:5px; "><i class="fa fa-plus-circle"></i> {{Pedidos}} </a><br/><br/>
<table id="table_cmd" class="table table-bordered table-condensed">
    <thead>
        <tr>
            <th>{{Nom}}</th><th>{{Type}}</th><th>{{Action}}</th>
        </tr>
    </thead>
    <tbody>
    </tbody>
</table>
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

````html
{% raw %}<th>{{Nom}}</th><th>{{Type}}</th><th>{{Configuration}}</th><th>{{Action}}</th>{% endraw %}
````

Luego edita el escritorio.js, encontrar

````js
    <html>tr + = '.subType) + '">';
    tr + = '</td> ';
    tr + = '<td> ';
    si (es_numeric (_cmd.id)) {
````

On ajoute les informations souhaitées.

````js
{% raw %}
    <html>tr + = '.subType) + '">';
    tr + = '</td> ';
    tr + = '<td> ';
    tr += '<span><input type="checkbox" class="cmdAttr checkbox-inline" data-l1key="isHistorized" /> {{Historiser}}<br/></span>';
   tr += '<span><input type="checkbox" class="cmdAttr checkbox-inline" data-l1key="isVisible" /> {{Affichage}}<br/></span>';
   tr + = '</td> ';
    tr + = '<td> ';
    si (es_numeric (_cmd.id)) {
{% endraw %}
````

Dejo el botón para crear un pedido pero quiero que esté a la izquierda.

````html
{% raw %}<a class="btn btn-success btn-sm cmdAction pull-right" data-action="add" style="margin-top:5px; "><i class="fa fa-plus-circle"></i> {{Pedidos}} </a><br/><br/>{% endraw %}
````

Je change la class pull-right en pull-left

````html
{% raw %}<a class="btn btn-success btn-sm cmdAction pull-left" data-action="add" style="margin-top:5px; "><i class="fa fa-plus-circle"></i> {{Pedidos}} </a><br/><br/>{% endraw %}
````

Aquí está la representación.Las opciones de configuración (pantalla y registro) están presentes.

![image](images/tutorial_vdm_cmd2.png)

Aquí queda recuperar un vdm aleatorio y usar los comandos.

# Recuperación de información

Para recuperar un vdm aleatoriamente.

````php
$url = "http://www.viedemerde.fr/aleatoire";
$data = file_get_contents($url);
@$dom = new DOMDocument();
libxml_use_internal_errors (falso);
$dom->loadHTML('<?xml encoding="UTF-8">' .$data);
libxml_use_internal_errors (verdadero);
$xpath = new DOMXPath($dom);
$divs = $xpath->query('//article[@class="art-panel col-xs-12"]//div[@class="panel-content"]//p//a');
return $ divs [0] -> nodeValue;
````

Ouvrir le fichier core/class/vdm.class.php et pour la class vdm qui hérite des méthodes egLogic, je crée une fonction randomVdm

````php
public function randomVdm() {
    $url = "http://www.viedemerde.fr/aleatoire";
    $data = file_get_contents($url);
    @$dom = new DOMDocument();
    libxml_use_internal_errors (verdadero);
    $dom->loadHTML($data);
    libxml_use_internal_errors (falso);
    $xpath = new DOMXPath($dom);
    $divs = $xpath->query('//article[@class="art-panel col-xs-12"]//div[@class="panel-content"]//p//a');
    return $ divs [0] -> nodeValue;
}
````

Ahora actualizaremos el comando info (historia) con esta información lanzando la acción (actualizar).
Todavía en core / class / vdm.class.php para la clase vdmCmd usaremos el método de ejecución

````php
función pública ejecutar ($ _ opciones = matriz()) {

}
````

C'est aquí qu'on va définir ce qu'il va se passer quand on lance la commande « Rafraîchir ». La classe vdmCmd a hérité de toutes les méthodes de la class cmd (Core jeedom)

On vérifie le logicalIdentificación de la commande lancée et si « refresh » on lance les actions

````php
switch ($this->getLogicalId()) {
    caso 'actualizar': // LogicalId del comando de actualización que creamos en el método Postsave de la clase vdm .
    // code pour rafraîchir ma commande
    break;
}
````

Ahora queda por iniciar la función randomVdm() . Para ello recuperamos el eqLogic (el equipo) del comando de lanzamiento y lanzamos la función

````php
$eqlogic = $this->getEqLogic(); // Récupération de l'eqlogic
$info = $eqlogic-> randomVdm() ; //Lance la fonction et stocke le résultat dans la variable $info
````

On met à jour la commande « story » avec la variable $info. On va utiliser la méthode checkAndUpdateCmd de la class eqlogic

````php
$eqlogic->checkAndUpdateCmd('story', $info);
````

Que finalmente da

````php
función pública ejecutar ($ _ opciones = matriz()) {
    $eqlogic = $this->getEqLogic(); //récupère l'éqlogic de la commande $this
    switch ($ this-> getLogicalId ()) {// verifica el ID lógico del comando
        caso 'actualizar': // LogicalId del comando de actualización que creamos en el método Postsave de la clase vdm .
            $info = $eqlogic->randomVdm();  //On lance la fonction randomVdm() pour récupérer une vdm et on la stocke dans la variable $info
            $eqlogic->checkAndUpdateCmd('story', $info); // on met à jour la commande avec le LogicalIdentificación "story"  de l'eqlogic
            break;
    }
}
````

Maintenant aller dans un équipement créé et lancer la commande Rafraîchir. Puis la commande « Histoire » qui doit être à jour.

Sur le Dashboard, les informations apparaissent. Cliquez sur l'icône refresh pour changer l'information

On va définir ensuite la taille du widget et le customiser un peu

Puis automatiser le refresh.

# Update des informations (cron)

Le plugin est fonctionnel mais pour l'instant il ne fait pas grand-chose. Si vous cliquer sur la commande « refresh » , la commande « story » se met à jour mais sinon rien.

A noter que pour la commande je la nomme por logicalId. Et c'est important. Avoir un logicalIdentificación unique por équipement (eqLogic) simplifie les choses.

On va voir maintenant comment mettre à jour la commande en utilisant les fonctions natives du core : Les crons

Il y en a plusieurs :

- cron : rafraichissement toutes les minutes
- cron5 : rafraichissement toutes les 5 minutes
- cron15 : rafraichissement toutes les 15 minutes
- cron30 : rafraichissement toutes les 30 minutes
- cronHourly : euh.. toutes les heures
- cronDaily : ben 1/jour

Vu le plugin on va effectuer une mise à jour toutes les heures (soyons fous). On va donc utiliser la fonction cronHourly().

On va donc ouvrir le fichier vdm.class.php et chercher

````php
/*
 * Fonction exécutée automatiquement toutes les heures por Jeedom
  función estática pública cronHourly() {

  }
 */
````

Descomentar el código

````php
función estática pública cronHourly() {

}
````

Notre fonction est opérationnelle

Maintenant il faut récupérer tous les équipements de notre plugin,

````php
self::byType('vdm') //array contenant tous les équipements du plugin
````

y ordenarlos 1 por 1

````php
foreach (yo::byType ('vdm') como $ vdm) {

}
````

Avant d'effectuer quoique ce soit on vérifie que l'équipement est actif

````php
tejo ($vdm->getIsEnable() == 1) {

}
````

Voila maintenant on recherche la commande « refresh » de l'équipement (eqLogic)

````php
$cmd = $vdm->getCmd(null, 'refresh');
````

Si elle n'existe pas on continue la boucle (foreach) sinon on l'exécute

````php
tejo (!is_object($cmd)) {
continue;
}
$cmd->execCmd();
````

Que finalmente da

````php
función estática pública cronHourly () {
    foreach (yo::byType ('vdm') as $ vdm) {// navegar por todos los dispositivos del complemento vdm
        if ($ vdm-> getIsEnable () == 1) {// verifica que el dispositivo esté activo
            $cmd = $vdm->getCmd(null, 'refresh');//retourne la commande "refresh si elle existe
            tejo (!is_object ($ cmd)) {// Si el comando no existe
              continúa; // continuar el ciclo
            }
            $cmd->execCmd(); // la commande existe on la lance
        }
    }
}
````

Pour tester, dans jeedom , aller dans configuration/moteur de tâches et lancer le cron de class « plugin » fonction « cronHourly ».

L'information se met à jour.

C'est bien mais ça ne me convient pas. A la création de l'équipement, la commande « story » ne se met pas à jour.

On améliore donc le code.

Pour la création des commandes nous avons utilisé la méthode postSave(). On va utiliser la méthode postUpdate() pour mettre à jour l'information.

La manière la plus simple vu qu'il n'y a qu'une commande et qu'elle est créé en postSave

````php
    función pública postUpdate() {
        $cmd = $this->getCmd(null, 'refresh'); // On recherche la commande refresh de l'équipement
        tejo (is_object($cmd)) { //elle existe et on lance la commande
             $cmd->execCmd();
        }
    }
````

Tienes que probar, funciona?

Pero aquí hay una alternativa que puede resultar más útil en casos más complejos

En la función postUpdate (), lanzamos la función cronHourly () con la identificación del equipo

````php
función pública postUpdate() {
    self::cronHourly ($ this-> getId ()); // inicia la función cronHourly con el id de eqLogic
}
````

Mais dans ce cas on change la fonction cronHourly()

````php
función estática pública cronHourly($_eqLogic_Identificación = null) {
    tejo ($_eqLogic_Identificación == null) { // La fonction n'a pas d'argument donc on recherche tous les équipements du plugin
        $eqLogics = self::byType('vdm', true);
    } else {// La fonction a l'argument id(unique) d'un équipement(eqLogic)
        $eqLogics = array(self::byId($_eqLogic_id));
    }

    foreach ($eqLogics as $vdm) {
        tejo ($vdm->getIsEnable() == 1) {//vérifie que l'équipement est acitf
            $cmd = $vdm->getCmd(null, 'refresh');//retourne la commande "refresh si elle existe
            tejo (!is_object ($ cmd)) {// Si el comando no existe
              continúa; // continuar el ciclo
            }
            $cmd->execCmd(); // la commande existe on la lance
        }
    }
}
````

Luego puede cambiar la frecuencia del cron según la importancia de su información para recuperar.

Solo puedo invitarlo a que se tome el tiempo de ir a esta página para obtener más información ==> [aquí](https://jeedom.github.io/documentation/phpdoc/index.html)

Y aún mejor ir al núcleo de github ==> [aquí](https://github.com/jeedom/core/tree/alpha/core/class)

Pon tu nariz para dominar aún más .

El complemento es funcional tal cual.

Me tomaré el tiempo para agregar la forma de configurar un cron personalizado de acuerdo con el equipo .

# El widget

No es una tarea fácil el widget, pero nos quedaremos en el widget predeterminado por el momento.

Si no ha tocado nada, equipo activado y visible, el widget ocupa todo el ancho de la pantalla. Entonces lo vamos a cambiar.

La commande qui apparaît est la commande «story» de Tipo info , sous-Tipo string

Mi placer es despertarme por la mañana es leer un vdm por la mañana. Me permite ver que hay peor que yo :D

Pero no tengo mis lentes y actualmente el renderizado en el widget no me permite leerlo

Donc on va changer le style en affectant un template à la commande « story»

Nada es mas facil.

Voy a ver ==> [aquí](https://github.com/jeedom/core/tree/alpha/core/template/dashboard)

Estoy buscando una plantilla para cmd.info.cadena (nuestro comando es de tipo info subtipo cadena) .No es difícil, solo hay dos (predeterminado o mosaico)

J'applique le template « cmd.info.string.tile.HTML » à ma commande.

Para eso abro el archivo vdm.class.php , fonction postSave() et j'ajoute le template « tile » pour la commande « story » en appliquant la méthode setTemplate()

````php
$info = $this->getCmd(null, 'story');
tejo (!is_object ($ info)) {
    $info = new vdmCmd();
    $info->setName(__('Histoire', __FILE__));
}
$info->setLogicalId('story');
$info->setEqLogic_id($this->getId());
$info->setType('info');
$info->setTemplate('dashboard','tile');//template pour le dashboard
$info->setSubType('string');
$info->save();
````

Rafraîchir le dasboard.

C''est mieux mais le widget prend toujours la largeur du dashboard. On va donc corriger. Par défaut la largeur du widget de l'équipement(eqLogic) et la hauteur sont à « auto ».

On va donc changer la largeur du widget(équipement => eqLogic) en utilisant la méthode setDisplay() héritée de la class eqLogic .On laisse la hauteur en auto.

Pour cela il suffit d'ajouter

````php
$this->setDisplay("width","800px");
````

Si pero !! Porque hay un pero. Intente agregar esto en la función postsave () o postUpdate () y no toma en cuenta el cambio. Por qué ? Ben debe leer el plugin de plantilla doc ==> AQUÍ

Ahora que lo ha leído correctamente, sabe que debe utilizar el método preSave()

````php
función pública preSave() {
    $this->setDisplay("width","800px");
}
````

Enregistrer un équipement et rafraîchissez le dashboard.


# Les paramètres. Les options

> **Importante**
>
> C'est un chapitre important et il faut le comprendre avant de passer à la suite.

Pour le moment, nous avons donc utiliser 3 classes du core de jeedom : EqLogic, cmd , cron . Aller pour info , On en ajoute une 4eme avec la class plugin dans le fichier vdm.php que vous ouvrez et laissez ouvert car on va l'éditer .

````php
$plugin = plugin::byId('vdm'); // appelle la classe plugin du core
````

Tienes que entender que todo está hecho para facilitar nuestro trabajo.

Para un parámetro / una opción interna al complemento, usaremos uno de los métodos de la clase eqLogic del núcleo : setConfiguration () agregando los parámetros que desee. Por ejemplo :

````php
$this->setConfiguration("type","mon_type"); // si on veut  définir un paramètre Tipo de valeur mon_type. Comme on a défini la largeur du widget via la méthode setDisplay()
````

Pour laisser le choix à l'utilisateur , on retourne sur le fichier desktop.php que vous avez laissé ouvert car vous suivez ce TP au pied de la lettre :D

Chercher

````html
<input type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="city" placeholder="param1"/>
````

Y reemplazar con

````html
<input type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="type" placeholder="option"/> //Importante de laisser la classe eqLogicAttr
````

Enregistrer et aller sur un équipement du plugin que vous avez déjà créé en suivant ce TP (Rafraîchir si besoin).

Dans le champs « Paramètre» d'un équipement, taper « aleatoire » et sauvegarder.

Parfait le paramètre est sauvegardé.

![image](images/tutorial_parametre1.png)


C'est simple,non? . C'est pourquoi il ne faut surtout pas toucher à cette ligne de code comme indiqué dans le premier menu « test » . C'est lui qui fait tout le travail

````php
<?php include_file('core', 'plugin.template', 'js');?>//Chargement du fichier core/js/plugin.template.js (en partant de la racine du site)
````

Si observa de cerca el archivo de escritorio.Hace php

````html
<input type="text" class="eqLogicAttr form-control" data-l1key="id" style="display : none;" /> // retourne l'id(unique) de l'eqLogic(équipement) . Qu'on va pouvoir récupérer via $this->getId() ;
````

````html
{% raw %}
<input type="text" class="eqLogicAttr form-control" data-l1key="name" placeholder="{{Nombre de l'équipement}}"/>// retourne le nom de l'eqLogic(équipement) . Qu'on va pouvoir récupérer via $this->getName() ;
{% endraw %}
````

Etc…

Si ha entendido todo esto bien, podremos seguir adelante. Pero primero cambiaremos en el archivo desktop.php

````html
{% raw %}
<label class="col-sm-3 control-label">{{Paramètre}}</label>
{% endraw %}
````

Par

````html
{% raw %}
<label class="col-sm-3 control-label">{{Type de vdm}}</label>
{% endraw %}
````

Importante : El texto entre llaves corresponde al texto que se traducirá si empuja el complemento en el mercado

Por lo demás, desarrollaremos el plugin eligiendo un tipo de vdm (aleatorio o picante o tops) que queramos así como un cron personalizado para cada dispositivo.

# Uso de opciones / parámetros

Para ir más allá y comprender el capítulo anterior, dejaremos que el usuario elija un tipo de vdm (aleatorio o picante o superior))

On pourrait le laisser taper dans l'input « Type de vdm » : al azar o picante o superior, pero haremos lo contrario dejándolo elegir a través de una etiqueta de selección

Si has seguido todo, deberías tenerlo en el archivo desktop.php

````html
{% raw %}
 <div class="form-group">
  <label class="col-sm-3 control-label">{{Type de vdm}}</label>
  <div class="col-sm-3">
      <input type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="type" placeholder="option"/>
  </div>
</div>
{% endraw %}
````

Qu'on va remplacer par

````html
{% raw %}
<div class="form-group">
    <label class="col-sm-3 control-label" >{{ Type de vdm }}</label>
    <div class="col-sm-3">
        <select class="form-control eqLogicAttr" data-l1key="configuration" data-l2key="Tipo ">
            <option value="aleatoire">{{Aleatoire}}</option>
            <option value="epicees">{{Coquin}}</option>
            <option value="tops">{{Best}}</option>
        </select>
    </div>
</div>
{% endraw %}
````

Ici le paramètre « type» prendra la valeur du select choisi soit aléatoire ou epicees ou tops.

Ahora tendremos en cuenta nuestro parámetro en la función randomVdm () en el archivo vdm.class.php

Chercher

````php
$url = "http://www.viedemerde.fr/aleatoire";
````

Y reemplazar con

````php
$Tipo = $this->getConfiguration("Tipo ");
if($Tipo == "") { //si le paramètre est vide ou n'existe pas
    $Tipo = "aleatoire"; //on prends le Tipo aleatoire
}
$url = "http://www.viedemerde.fr/" .$Tipo  ;
````

Ahora cambie el valor de la selección en un dispositivo, guarde y vaya al panel de control para ver qué ofrece.
