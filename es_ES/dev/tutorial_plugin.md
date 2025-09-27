# Para empezar

> **IMPORTANTE**
>
> Este tutorial fue escrito por ZygOm4t1k, a quien nos gustaría agradecer. Puedes encontrar el original [aquí](https:forum.jeedom.comviewtopic.php?f=27&t=37630#p621495)

A continuación se muestra un breve ejercicio práctico para explicar cómo crear un complemento. Para el ejemplo crearemos un complemento que devuelva una oración del sitio viedemerde.de .(El complemento será escalable)

No sustituye en ningún caso el [documentación oficial](https:doc.jeedom.com/es_ES/dev)

# Crear la base del complemento

Para comenzar, debes determinar un nombre y un id (que no debe existir))

Nombre : Vida de mierda
Identificación : vdm

Descargue el complemento de plantilla para obtenerlo [base](https:github.comjeedomplugin-templatearchivemaster.zip)

Descomprimir el archivo. Vous obtiendrez un dossier « plugin-template-master » contenant des dossiers 3rparty, core, desktop…

Aquí vamos.

> **IMPORTANTE**
>
>Hay un asistente de configuración disponible para ayudarle a personalizar rápidamente su complemento.
>Esta herramienta interactiva le permite configurar fácilmente el nombre del complemento, indicar si se requiere un demonio y admite la modificación automática de todos los archivos necesarios.
>Su uso simplifica el proceso de configuración y le ahorra tiempo valioso en el desarrollo de su complemento.

👉 Para iniciar el asistente, abra una terminal en el directorio del complemento de plantilla y ejecute el siguiente comando :

```
información del complemento php/helperConfiguration.php
```

Si no desea utilizar este script, puede seguir los siguientes pasos para cambiar el nombre de los archivos.


Renommez le dossier « plugin-template-master » en « vdm » (l'id) du plugin.

1/ Abra el archivo plugin_info/info.json y editarlo.

```json
{
  "id" : "vdm",
  "name" : "Vida de mierda",
  "description" : "Complemento para recuperar los últimos VDM",
  "licence" : "AGPL",
  "author" : "Zyg0m4t1k",
  "require" : "3.3.39",
  "category" : "monitoring",
  "changelog" : "",
  "documentation" : "",
  "language" : "",
  "compatibility" : ""
}
```

Copia y pega el código de arriba.

Cambié la identificación *(vdm)*, el nombre, agregó una descripción, el autor y la categoría.

requerir : Versión mínima de jeedom para tener acceso al plugin en el market.

El registro de cambios, la documentación, el idioma y la compatibilidad son nulos por el momento. Volveré a esto más tarde

2/ Renombraremos los archivos necesarios para que el plugin sea reconocido por Jeedom

- Cambie el nombre del archivo core/ajax/template.ajax.php a vdm.ajax.php

- Cambie el nombre del archivo core/class/template.class.php en vdm.class.php y abrirlo para editarlo.

Remplacez

```php
La plantilla de clase extiende eqLogic
```

par

```php
La clase vdm extiende eqLogic
```

------------------------

```php
La clase templateCmd extiende cmd
```

par

```php
la clase vdmCmd extiende cmd
```

- Cambie el nombre del archivo core/php/template.inc.php en core/php/vdm.inc.php
- Cambiar el nombre del archivo desktop/php/template.php en el escritorio /php/vdm.php y abrirlo

Reemplazar :

```php
$plugin = plugin::byId('template')
```

Par

```php
$plugin = plugin::byId('vdm')
```

------------------------

```html
{% raw %}<legend><i class="fas fa-table"><i> {{Mes templates}}<legend>{% endraw %}
```

Par

```html
{% raw %}<legend><i class="fas fa-table"><i> {{Mes équipements}}<legend>{% endraw %}
```

------------------------

```php
<?php include_file('desktop', 'template', 'js', 'template')?>
```

Par

```php
<?php include_file('desktop', 'vdm', 'js', 'vdm')?>
```

Y nada más , **no cambies la linea** ``<?php include_file('core', 'plugin.template', 'js')?>``.

- Cambie el nombre del archivo desktop/modal/modal.template.php en escritorio/modal/modal.vdm.php

- Cambie el nombre del archivo a desktop/js/template.js en escritorio/js/vdm.js

- Abra el archivo plugin_info/install.

```php
() {
}

() {
}

() {
}
```

 : [](https:doc.jeedom.com/es_ES/devIcone_de_plugin)





![image](imagestutorial_vdm_icon.png)

. .

![image](imagestutorial_vdm_plugin.png)



. .

# 

.

. Elle sera de sous-amable « string » car c'est une chaîne de caractère.

. 

-Créez un équipement « vdm1 » en cliquant sur le +. . ).

.

.)



```php
() {
  $ = $this->getCmd(null, 'story')
   (!)) {
    $ = new vdmCmd()
    $info->setName(__('Histoire', __FILE__))
  }
  $info->setLogicalId('story')
  $info->setEqLogic_id($this->getId())
  $info->setType('info')
  $info->setSubType('string')
  $info->save()

  $refresh = $this->getCmd(null, 'refresh')
   (!)) {
    $refresh = new vdmCmd()
    $refresh->setName(__('Rafraichir', __FILE__))
  }
  $refresh->setEqLogic_id($this->getId())
  $refresh->setLogicalId('refresh')
  $refresh->setType('action')
  $refresh->setSubType('other')
  $refresh->save()
}
```

- Créez un autre équipement « vdm2 » en cliquant sur le +. . . .

- Enregistrez le premier équipement « vdm1 » pour créer les commandes. .

.

![image](imagestutorial_vdm_cmd1.png)

..

```html
{% raw %}
<!-- Onglet des commandes de l'équipement -->
<div role="tabpanel" class="tab-pane" id="commandtab">
<a class="btn btn-default btn-sm pull-right cmdAction" data-action="add" style="margin-top:5px"><i class="fas fa-plus-circle"><i> {{Ajouter une commande}}<a>
<br><br>
<div class="table-responsive">
<table id="table_cmd" class="table table-bordered table-condensed">
<thead>
<tr>
<th>{{Id}}<th>
<th>{{Nom}}<th>
<th>{{Type}}<th>
<th>{{Paramètres}}<th>
<th>{{Options}}<th>
<th>{{Action}}<th>
<tr>
<thead>
<tbody>
<tbody>
<table>
<div>
<div><!-- .tabpanel #commandtab-->
{% endraw %}
```

..

```html
{% raw %}
*  *
) {
   (!)) {
    : {} }
  }
   (!)) {
    
  }
  .
  :
  
  
  ::
  
  
  
   :  : 
  
  
  
  
  
   : 
  
  
  
  
  ..
  .
  
  ::
  .}}" .}}" :30%display:
  .}}" .}}" :30%display:
  :30%display:
  
  ::
  
  
  
  
  ::
  .id)) {
    
    
  }
  
  
  $('#table_cmd tbody').append(tr)
  
  ({
    id: $('.eqLogicAttr[data-l1key=id]').value(),
    filter: { type: 'info' },
    error: ) {
      $('#div_alert').showAlert({ message: .message, level: 'danger' })
    },
    success: ) {
      
      
      
    }
  })
}
{% endraw %}
```

.

.

# 

.

```php
$url = "http:www.viedemerde.fraleatoire"
$data = file_get_contents($url)
@$dom = new DOMDocument()

$dom->loadHTML('<?xml encoding="UTF-8">' .$data)

$xpath = new DOMXPath($dom)
$divs = $xpath->query('article[@class="art-panel col-xs-12"]div[@class="panel-content"]pa')

```

.

```php
() {
  $url = "http:www.viedemerde.fraleatoire"
  $data = file_get_contents($url)
  @$dom = new DOMDocument()
  
  $dom->loadHTML($data)
  
  $xpath = new DOMXPath($dom)
  $divs = $xpath->query('article[@class="art-panel col-xs-12"]div[@class="panel-content"]pa')
  
}
```

).
.

```php
()) {
}
```

C'est aquí qu'on va définir ce qu'il va se passer quand on actionne la commande « Rafraîchir ». )

On vérifie le logicalIdentificación de la commande lancée et si « refresh » on lance les actions

```php
()) {
  ':  .
  
  break
}
```

(). .

```php
$eqlogic = $this->getEqLogic() Récupération de l'eqlogic
$ = $eqlogic->randomVdm()  Lance la fonction et stocke le résultat dans la variable $info
```

On met à jour la commande « story » avec la variable $info. 

```php
$eqlogic->checkAndUpdateCmd('story', $info)
```



```php
()) {
  $eqlogic = $this->getEqLogic() récupère l'éqlogic de la commande $this
  
    ':  .
    $ = $eqlogic->randomVdm() On lance la fonction randomVdm() pour récupérer une vdm et on la stocke dans la variable $info
    $eqlogic->checkAndUpdateCmd('story', $info) on met à jour la commande avec le LogicalIdentificación "story"  de l'eqlogic
    break
  }
}
```

. Puis la commande « Histoire » qui doit être à jour.

. .

.

# )

. Si vous cliquez sur la commande « refresh » , la commande « story » se met à jour mais sinon rien.

. . .

 : 

 :

-  : 
-  : 
-  : 
-  : 
-  : 
-  : 1jour

). ().

.

```php
*
* 
() {
}
*
```



```php
() {
}
```



,

```php
self::)
```



```php
::) {
}
```

Voila maintenant on recherche la commande « refresh » de l'équipement (eqLogic)

```php
$cmd = $vdm->getCmd(null, 'refresh')
```



```php
 (!)) {
  continue
}
$cmd->execCmd()
```



```php
 () {
  ::
    $cmd = $vdm->getCmd(null, 'refresh') retourne la commande "refresh" si elle existe
     (!
    
  }
  $cmd->execCmd() la commande existe on la lance
}
}
```

Pour tester, dans jeedom, allez dans configurationmoteur de tâches et lancer le  de class « plugin » fonction «  »
.

. A la création de l'équipement, la commande « story » ne se met pas à jour.

.

(). .



```php
() {
  $cmd = $this->getCmd(null, 'refresh') On recherche la commande refresh de l'équipement
  
    $cmd->execCmd()
  }
}
```

?





```php
() {
  self::
}
```

()

```php
) {
  
    $eqLogics = self::byType('vdm', true)
    } )
      $eqLogics = array(self::byId($_eqLogic_id))
    }

    ) {
      $cmd = $vdm->getCmd(null, 'refresh') retourne la commande "refresh si elle existe
       (!
      
    }
    $cmd->execCmd() la commande existe on la lance
  }
}
```

.

 ==> [aquí](https:doc.jeedom.comdevphpdoc4.1)

 ==> [](https:github.comjeedomcore)

 .

.

 .

# 

.

. .

La commande qui apparaît est la commande «story» de amable info, sous-amable string.

.  :D



Donc on va changer le style en affectant un template à la commande « story»

.

 ==> [](https:github.comjeedomcoretreealphacoretemplatedashboard)

.) .)

J'applique le template « cmd.info.string.tile.html » à ma commande.

.php , fonction postSave() et j'ajoute le template « tile » pour la commande « story » en appliquant la méthode setTemplate()

```php
$ = $this->getCmd(null, 'story')
 (!)) {
  $ = new vdmCmd()
  $info->setName(__('Histoire', __FILE__))
}
$info->setLogicalId('story')
$info->setEqLogic_id($this->getId())
$info->setType('info')
$info->setTemplate('dashboard','tile')template pour le dashboard
$info->setSubType('string')
$info->save()
```

.

. . Por défaut la largeur du widget de l'équipement(eqLogic) et la hauteur sont à « auto ».

 ..



```php
$this->setDisplay("width","800px")
```

 !! . .  ? 

()

```php
() {
  $this->setDisplay("width","800px")
}
```

.

# . 

> **IMPORTANTE**
>
> .

 : . ..

```php
$plugin = plugin::byId('vdm')  appelle la classe plugin du core
```

.

: . :

```php
$this->setConfiguration("type","mon_type")  si on veut définir un paramètre amable de valeur mon_type. Comme on a défini la largeur du widget via la méthode setDisplay()
```

. :D

Cherchez

```html
<input type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="city" placeholder="param1">
```



```html
<input type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="type" placeholder="option">  de laisser la classe eqLogicAttr
```

).

Dans le champs «Paramètre» d'un équipement, tapez «aléatoire» et sauvegardez.

.

![image](imagestutorial_parametre1.png)

? . C'est pourquoi il ne faut surtout pas toucher à cette ligne de code comme indiqué dans le premier menu « test ». 

```php
<?php include_file('core', 'plugin.template', 'js')?> Chargement du fichier corejsplugin.template.js (en partant de la racine du site)
```

.

```html
<input type="text" class="eqLogicAttr form-control" data-l1key="id" style="display:none" >  retourne l'id(unique) de l'eqLogic(équipement) que l'on va pouvoir récupérer via $this->getId() 
```

```html
{% raw %}<input type="text" class="eqLogicAttr form-control" data-l1key="name" placeholder="{{Nombre de l'équipement}}"> retourne le nom de l'eqLogic(équipement) que l'on va pouvoir récupérer via $this->getName(){% endraw %}
```

Etc…

. 

```html
{% raw %}<label class="col-sm-3 control-label">{{Paramètre}}<label>{% endraw %}
```

Par

```html
{% raw %}<label class="col-sm-3 control-label">{{Type de vdm}}<label>{% endraw %}
```

 : .

.

# 

)

On pourrait le laisser taper dans l'input « Type de vdm » : 



```html
{% raw %}
<div class="form-group">
  <label class="col-sm-3 control-label">{{Type de vdm}}<label>
  <div class="col-sm-3">
    <input type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="type" placeholder="option">
  <div>
<div>
{% endraw %}
```



```html
{% raw %}
<div class="form-group">
  <label class="col-sm-3 control-label" >{{ Type de vdm }}<label>
  <div class="col-sm-3">
    <select class="form-control eqLogicAttr" data-l1key="configuration" data-l2key="amable ">
      <option value="aleatoire">{{Aleatoire}}<option>
      <option value="epicees">{{Coquin}}<option>
      <option value="tops">{{Best}}<option>
    <select>
  <div>
<div>
{% endraw %}
```

Ici le paramètre «type» prendra la valeur du select choisi soit aleatoire ou epicees ou tops.



Cherchez

```php
$url = "http:www.viedemerde.fraleatoire"
```



```php
$amable = $this->getConfiguration("type", "aleatoire") si le paramètre est vide ou n'existe pas, on prends le amable aleatoire
$url = "http:www.viedemerde.fr{$type}"
```

.
