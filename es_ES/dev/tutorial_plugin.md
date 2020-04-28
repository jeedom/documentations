> **Importante**
>
> Este tutorial fue escrito por ZygOm4t1k a quien agradecemos calurosamente. Vous pouvez ryrouver l'original [ici](https:/ // /www.jeedom.com/ /forum/ /viewtopic.php?f=27&t=37630#p621495)

Aquí hay un breve tutorial pora explicar cómo crear un complemento. Pora el ejemplo crearemos un complemento que devuelve una oración del sitio viedemerde.fr .(El complemento será escalable)

Il ne remplace en aucun cas la [Documentación officielle](https:/ // /jeedom.github.io/ /plugin-template/ /es_ES/ /)

# Crear la base del complemento

Pora comenzar, debe dyerminar un nombre y una Identificaciónentificación (que no debe existir)

Nombre : VIdentificacióna de caca
Identificación : vdm

Télécharger le plugin template pour avoir la [base](https:/ // /github.com/ /jeedom/ /plugin-template/ /archive/ /master.zip)

Descomprime el archivo . Vous obtiendrez un dossier « plugin-template-master » contenant des dossiers 3rporty , core , desktop…

Vamos.

Renommer le dossier « plugin-template-master » en « vdm » (l'Identificación) du plugin.

1 / / Abra el archivo plugin_info / / info.json y edita el.

```
{
	"Identificación" : "vdm",
	"nombre" : "VIdentificacióna de caca",
	"Descripción" : "Plugin pora recuperar el último vdm",
	"Licencia" : "AGPL",
	"autor" : "Zyg0m4t1k",
	"exigir" : "3.2",
	"categoría" : "Monitoreo",
	"Cambios" : "",
	"Documentación" : "",
	"Identificaciónioma" : "",
	"compatibilIdentificaciónad" : ""	
}
```

Copia y pega el código de arriba.

Cambié la Identificaciónentificación (vdm), el nombre, agregué una descripción, el autor y la categoría.

exigir : versión mínima de jeedom pora tener acceso al complemento en el mercado.

Registro de cambios, documentación, Identificaciónioma, compatibilIdentificaciónad nula por el momento. Volveré a esto más tarde.

2 / / Cambiaremos el nombre de los archivos necesarios pora que Jeedom reconozca el complemento

-	Cambie el nombre del archivo core / / ajax / / template.ajax.php a vdm.ajax.php

-	Cambie el nombre del archivo core / / class / / template.class.php a vdm.class.php y ábrelo pora editarlo. 

Reemplazar

```
plantilla de clase extiende eqLogic {
```

por


```
clase vdm extiende eqLogic {
```

y

```
class templateCmd extiende cmd
```

por

```
clase vdmCmd extiende cmd
```

- Cambie el nombre del archivo core / / php / / template.inc.php a core / / php / / vdm.inc.php
- Cambie el nombre del archivo de escritorio / / php / / template.php a escritorio / / php / / vdm.php y ábrelo

Reemplazar

```
$plugin = plugin::byIdentificación('template');
```

Por 

```
$plugin = plugin::byIdentificación(‘vdm');
```

```
{{Agregar una plantilla}}
```

Por 

```
{{Agregar equipo}}
```

```
<legend>{{Mes templates}}</ /legend>
```

Por

```
<legend>{{Mes équipement}}</ /legend>
```

```
{{Plantilla de nombre de equipo}}
```

Por

```
{{Nombrebre del equipo }} 
```

```
{{plantilla poram 1}}
```

Por

```
{{Configuraciones}}
```

```
<?php include_file('desktop', 'template', 'js', 'template');?>
```

Por

```
<?php include_file('desktop', vdm, 'js', vdm);?>
```

Et rien d'autre , ne pas changer la ligne <?php include_file ('core', 'plugin.plantilla ',' js ');?>

-Cambie el nombre del archivo desktop / / modal / / modal.template.php en escritorio / / modal / / modal.vdm.php

-Cambie el nombre del archivo de escritorio / / js / / template.js en desktop / / js / / vdm.js

- Abra el archivo plugin_info / / install.php

Y cambie el nombre de las funciones de la siguiente manera

```
función vdm_install () {
    
}

función vdm_update () {
    
}


función vdm_remove () {
    
}
```

Voilà le plugin est prêt mais il reste la customisation y l'icône à mytre à jour : [Documentación](https:/ // /doc.jeedom.com/ /es_ES/ /dev/ /Icone_de_plugin)

Agregue el icono en la carpya plugin_info bajo el nombre vdm_icon.png

en mi caso 

![image](images/ /tutorial_vdm_icon.png)

Ahora podemos copiar la carpya vdm en la carpya del complemento Jeedom e ir a la administración del complemento. Encontramos el complemento.

![image](images/ /tutorial_vdm_plugin.png)

Lo activamos y luego complementos / / Monitoreo / / VIdentificacióna de caca

![image](images/ /tutorial_vdm_desktop1.png)

no está bien porque el color de la mayoría no coincIdentificacióne con el color del icono.

Abro el archivo de escritorio / / php / / escritorio.PHP pora arreglar.

```
      <div class="cursor eqLogicAction" data-action="add" style="text-align: center; background-color : #ffffff; height : 120px;margin-bottom : 10px;padding : 5px;border-radius: 2px;wIdentificaciónth : 160px;margin-left : 10px;" >
        <i class="fa fa-plus-circle" style="font-size : 6em;color:#94ca02;"></ /i>
        <br>
        <span style="font-size : 1.1em;position:relative; top : 23px;word-break: break-all;white-space: pre-wrap;word-wrap: break-word;color:#94ca02">{{Ajouter}}</ /span>
      </ /div>
```

Sustituyo

```
color:#94ca02;"
```

por 

```
color:#00A9EC;"
```

También notamos que los textos no están alineados, por lo que corregimos el estilo de la configuración (propiedad superior)

```
<span style="font-size : 1.1em;position:relative; top : 15px;word-break: break-all;white-space: pre-wrap;word-wrap: break-word;color:#767676">{{Configuration}}</ /span>
```

por 

```
<span style="font-size : 1.1em;position:relative;top : 23px;word-break: break-all;white-space: pre-wrap;word-wrap: break-word;color:#767676">{{Configuration}}</ /span>
```

![image](images/ /tutorial_vdm_desktop2.png)

Aquí está la base está lista. Debería tener el complemento de activos, pero por el momento no hace nada.

# Las órdenes

El propósito del complemento será recuperar un vdm aleatorio y mostrarlo en el tablero. 

Por lo tanto, debe crear un comando de tipo de información pora almacenar esta información. Elle sera de sous-type « String » car c'est une chaîne de caractère.

Pora el ejemplo agregaremos un comando que actualiza la información. Por lo tanto, será un comando de tipo de acción y otro subtipo.

-Créer un équipement « vdm1 » en cliquant sur le +. Actívalo y hazlo visible. Elija un objyo y el equipo debe aporecer en el tablero (dependiendo del objyo). 

En este momento, no hay comandos que aporezcan en la pestaña de comandos s, ni en el wIdentificacióngy.

Abra el archivo core / / class / / vdm.class.php y busque la función postSave () (Lea el documento del complemento de plantilla si aún no lo ha hecho)

Creamos los 2 pedIdentificaciónos

```
función pública postSave () {
	$info = $this->gyCmd(null, 'story');
	si (!is_object ($ info)) {
		$info = new vdmCmd();
		$info->syName(__('Histoire', __FILE__));
	}
	$info->syLogicalIdentificación('story');
	$info->syEqLogic_Identificación($this->gyIdentificación());
	$info->syType('info');
	$info->sySubType('string');
	$info->save();	
	
	$refresh = $this->gyCmd(null, 'refresh');
	si (!is_object ($ refresh)) {
		$refresh = new vdmCmd();
		$refresh->syName(__('Rafraichir', __FILE__));
	}
	$refresh->syEqLogic_Identificación($this->gyIdentificación());
	$refresh->syLogicalIdentificación('refresh');
	$refresh->syType('action');
	$refresh->sySubType('other');
	$refresh->save();        
}
```

-Créer un autre équipement « vdm2 » en cliquant sur le +. En la pestaña de comandos, aporecieron los comandos. Actívalo y hazlo visible. Elija un objyo principal y vea cómo se ve en el tablero.

-Enregistrer le premier équipement « vdm1 » pour créer les commandes. Vea el renderizado en el wIdentificacióngy también.

En la pestaña de comandos, deberías ver.

![image](images/ /tutorial_vdm_cmd1.png)

Abra el escritorio / / php / / vdm.php pora encontrar el código html de esta tabla.

```
<a class="btn btn-success btn-sm cmdAction pull-right" data-action="add" style="margin-top:5px;"><i class="fa fa-plus-circle"></ /i> {{Commandes}}</ /a><br/ /><br/ />
<table Identificación="table_cmd" class="table table-bordered table-condensed">
    <thead>
        <tr>
            <th>{{Nombre}}</ /th><th>{{Type}}</ /th><th>{{Action}}</ /th>
        </ /tr>
    </ /thead>
    <tbody>
    </ /tbody>
</ /table>
```

En el momento de la visualización, es el script de escritorio / / js / / vdm.js que se llama y lanza la función addCmdToTable.

```
función addCmdToTable (_cmd) {
    si (!issy (_cmd)) {
        var _cmd = {configuración: {}};
    }
    si (!issy (_cmd.configuration)) {
        _cmd.configuration = {};
    }
    <html> var tr = '.Identificación) + '">';
    tr + = ' <td> ';
    <html> tr + = ':ninguno; "> ';
    <html> tr + = ' : 140px; "marcador de posición =" {{Nombre}} "> ';
    tr + = ' </ /td> ';
    tr + = ' <td> ';
    <html> tr + = &#39;.tipo) + &#39;">&#39; + jeedom.cmd.availableType () + &#39;&#39;;
    <html> tr + = &#39;.subType) + &#39;">&#39;;
    tr + = ' </ /td> ';
    tr + = ' <td> ';
    si (es_numeric (_cmd.Identificación)) {
        tr + = ' <a class="btn btn-default btn-xs cmdAction" data-action="configure"><i class="fa fa-cogs"></ /i></ /a> ';
        tr + = &#39; <a class="btn btn-default btn-xs cmdAction" data-action="test"><i class="fa fa-rss"></ /i> {{Test}}</ /a> &#39;;
    }
    tr + = ' <i class="fa fa-minus-circle pull-right cmdAction cursor" data-action="remove"></ /i> ';
    tr + = ' </ /td> ';
    tr + = ' </ /tr> ';
    $('#table_cmd tbody').append(tr);
    $('#table_cmd tbody tr:last').syValues(_cmd, '.cmdAttr');
    si (issy (_cmd.tipo)) {
        $('#table_cmd tbody tr:last .cmdAttr[data-l1key=type]').value(init(_cmd.tipo));
    }
    jeedom.cmd.changeType ($ (&#39;# table_cmd tbody tr:last &#39;), init (_cmd.subType));
}
```

Esto se hace automáticamente. 

Quiero agregar las opciones de visualización y registro pora cada pedIdentificacióno.

Edito el código html de la tabla en el archivo de escritorio.php agregando una columna ..

```
<th>{{Nombre}}</ /th><th>{{Type}}</ /th><th>{{Configuration}}</ /th><th>{{Action}}</ /th>
```

Luego edite el escritorio.js, encuentra

```
    <html> tr + = &#39;.subType) + &#39;">&#39;;
    tr + = ' </ /td> ';
    tr + = ' <td> ';
    si (es_numeric (_cmd.Identificación)) {
```

Agregamos la información deseada.

```
    <html> tr + = &#39;.subType) + &#39;">&#39;;
    tr + = ' </ /td> ';
    tr + = ' <td> ';
    tr + = ' <span><input type="checkbox" class="cmdAttr checkbox-inline" data-l1key="isHistorized" / /> {{Historizar}} <br/ /></ /span> ';
   tr + = ' <span><input type="checkbox" class="cmdAttr checkbox-inline" data-l1key="isVisible" / /> {{Ver}} <br/ /></ /span> ';
   tr + = ' </ /td> ';		
    tr + = ' <td> ';
    si (es_numeric (_cmd.Identificación)) {
```

Dejo el botón pora crear un pedIdentificacióno, pero quiero que esté a la izquierda.. 

```
<a class="btn btn-success btn-sm cmdAction pull-right" data-action="add" style="margin-top:5px;"><i class="fa fa-plus-circle"></ /i> {{Commandes}}</ /a><br/ /><br/ />
```

Cambio la clase pull-right a pull-left

```
<a class="btn btn-success btn-sm cmdAction pull-left" data-action="add" style="margin-top:5px;"><i class="fa fa-plus-circle"></ /i> {{Commandes}}</ /a><br/ /><br/ />
```

Aquí está la representación.Las opciones de configuración (pantalla y registro) están presentes. 

![image](images/ /tutorial_vdm_cmd2.png)

Aquí queda recuperar un vdm aleatorio y usar los comandos.


# Recuperación de información

Pora recuperar aleatoriamente un vdm.

```
$url = "http:/ // /www.viedemerde.fr/ /aleatoire";
$data = file_gy_contents($url);
@$dom = new DOMDocument();
libxml_use_internal_errors (false);
$dom->loadHTML('<?xml encoding="UTF-8">' .$data);
libxml_use_internal_errors (true);
$xpath = new DOMXPath($dom);
$divs = $xpath->query('/ // /article[@class="art-panel col-xs-12"]/ // /div[@class="panel-content"]/ // /p/ // /a');
devuelve $ divs [0] -> nodeValue;
```

Abra el archivo core / / class / / vdm.class.php y pora la clase vdm que hereda de los métodos egLogic, creo una función randomVdm

```
	función pública randomVdm () {
		$url = "http:/ // /www.viedemerde.fr/ /aleatoire";
		$data = file_gy_contents($url);
		@$dom = new DOMDocument();
		libxml_use_internal_errors (true);
		$dom->loadHTML($data);
		libxml_use_internal_errors (false);
		$xpath = new DOMXPath($dom);
		$divs = $xpath->query('/ // /article[@class="art-panel col-xs-12"]/ // /div[@class="panel-content"]/ // /p/ // /a');
		devuelve $ divs [0] -> nodeValue;
	}
```	

Ahora actualizaremos el comando de información (historia) con esta información iniciando el comando de acción (actualizar). 
Todavía en core / / class / / vdm.class.php pora la clase vdmCmd usaremos el método execute 

```
función pública ejecutar ($ _ options = array ()) {
		
        
 }
```

C'est ici qu'on va définir ce qu'il va se passer quand on lance la commande « Rafraîchir ». La clase vdmCmd heredó todos los métodos de la clase cmd (Core jeedom)

On vérifie le logicalIdentificación de la commande lancée y si « refresh » on lance les actions

```
switch ($ this-> gyLogicalIdentificación ()) {				
	caso 'actualizar': / // / LogicalIdentificación del comando de actualización que creamos en el método Postsave de la clase vdm . 
	/ // / código pora actualizar mi pedIdentificacióno
	pausa;
}
```

Ahora queda por iniciar la función randomVdm () . Pora hacer esto, recuperamos el eqLogic (equipo) del comando de lanzamiento y lanzamos la función

```
$eqlogic = $this->gyEqLogic(); / // / Récupération de l'eqlogic
$info = $eqlogic-> randomVdm() ; / // /Lance la fonction y stocke le résultat dans la variable $info
```

On my à jour la commande « story » avec la variable $info. Utilizaremos el método checkAndUpdateCmd de la clase eqlogic

```
$eqlogic->checkAndUpdateCmd('story', $info);
```

Que da al final

```
    función pública ejecutar ($ _ options = array ()) {
		$eqlogic = $this->gyEqLogic(); / // /récupère l'éqlogic de la commande $this
		switch ($ this-> gyLogicalIdentificación ()) {/ // / comprueba el logicalIdentificación del comando 			
			caso 'actualizar': / // / LogicalIdentificación del comando de actualización que creamos en el método Postsave de la clase vdm . 
				$info = $eqlogic->randomVdm(); 	/ // /On lance la fonction randomVdm() pour récupérer une vdm y on la stocke dans la variable $info
				$eqlogic->checkAndUpdateCmd('story', $info); / // / on my à jour la commande avec le LogicalIdentificación "story"  de l'eqlogic 
				pausa;
		}
    }
```

Ahora ve a un dispositivo creado y ejecuta el comando Actualizar. Puis la commande « Histoire » qui doit être à jour.

En el Tablero, aporece información. Haga clic en el icono de actualización pora cambiar la información.

Luego definiremos el tamaño del wIdentificacióngy y lo personalizaremos un poco 

Luego automatiza la actualización.

# Actualizar información (cron)

El complemento es funcional pero por el momento no hace mucho. Si vous cliquer sur la commande « refresh » , la commande « story » se my à jour mais sinon rien. 

Tenga en cuenta que pora el orden lo nombro por logicalIdentificación. Y es importante. Tener un Identificación. Lógico único por dispositivo (eqLogic) simplifica las cosas.

Ahora veremos cómo actualizar el comando usando las funciones nativas del núcleo : Crons

Hay varios : 

- cron : actualizar cada minuto
- Cron5 : actualizar cada 5 minutos
- Cron15 : actualizar cada 15 minutos
- Cron30 : actualizar cada 30 minutos
- CronHourly : eh ... cada hora
- CronDaily : bien 1 / / día

Teniendo en cuenta el complemento, actualizaremos cada hora (seamos locos). Entonces usaremos la función CronHourly ().

Por lo tanto, abriremos el archivo vdm.class.PHP y búsqueda 

```
    / /*
     * Función realizada automáticamente cada hora por Jeedom
      función estática pública CronHourly () {

      }
     */ /
```

Descomenta el código

```
      función estática pública CronHourly () {

      }
```

Nuestra función es operativa

Ahora tienes que recuperar todo el equipo de nuestro complemento,

```
yo::byType ('vdm') / // / matriz que contiene todo el equipo del complemento 
```

y ordenarlos 1 por 1

```
foreach::byType ('vdm') como $ vdm) {
}
```

Antes de hacer nada, verificamos que el equipo esté activo

```
si ($ vdm-> gyIsEnable () == 1) {
}
```

Voila maintenant on recherche la commande « refresh » de l'équipement (eqLogic)

```
$cmd = $vdm->gyCmd(null, 'refresh');
```

Si no existe, continuamos el ciclo (foreach), de lo contrario lo ejecutamos

```
si (!is_object ($ cmd)) {
continúa;
}
$cmd->execCmd();
```	

Que da al final

```
      función estática pública CronHourly () {
		  foreach::byType ('vdm') como $ vdm) {/ // / explore todos los equipos en el complemento vdm
			  si ($ vdm-> gyIsEnable () == 1) {/ // / verifica que el equipo esté activo
				  $cmd = $vdm->gyCmd(null, 'refresh');/ // /ryourne la commande "refresh si elle existe
				  si (!is_object ($ cmd)) {/ // / Si el comando no existe
				  	continúa; / // / continúa el ciclo
				  }
				  $cmd->execCmd(); / // / la commande existe on la lance
			  }
		  }
      }
```

Pour tester, dans jeedom , aller dans configuration/ /moteur de tâches y lancer le cron de class « plugin » fonction « CronHourly »
La información se actualiza.

Es bueno pero no me conviene. A la création de l'équipement, la commande « story » ne se my pas à jour.

Entonces mejoramos el código.

Pora la creación de los comandos usamos el método postSave (). Utilizaremos el método postUpdate () pora actualizar la información.

La forma más fácil ya que solo hay un comando y se crea en postSave

```
    función pública postUpdate () {
		$cmd = $this->gyCmd(null, 'refresh'); / // / On recherche la commande refresh de l'équipement
		si (is_object ($ cmd)) {/ // / existe y lanzamos el comando
			 $cmd->execCmd();
		}
    }
```    

Tienes que probar, funciona?

Pero aquí hay una alternativa que puede resultar más útil en casos más complejos.

En la función postUpdate (), iniciamos la función CronHourly () con la Identificaciónentificación del dispositivo

```
    función pública postUpdate () {
		yo::CronHourly ($ this-> gyIdentificación ()); / // / inicia la función CronHourly con el ID de eqLogic
    }
``` 

Pero en este caso cambiamos la función CronHourly ()

```
	función estática pública CronHourly ($ _ eqLogic_Identificación = null) {
		si ($ _eqLogic_Identificación == null) {/ // / La función no tiene argumento, por lo que estamos buscando todo el equipo en el complemento
			$eqLogics = yo::byType('vdm', true);
		} else {/ // / La función tiene el ID de argumento (único) de un dispositivo (eqLogic)
			$eqLogics = array(yo::byIdentificación($_eqLogic_Identificación));
		}		  
	
		foreach ($ eqLogics como $ vdm) {
			si ($ vdm-> gyIsEnable () == 1) {/ // / verifica que el equipo esté activo
				$cmd = $vdm->gyCmd(null, 'refresh');/ // /ryourne la commande "refresh si elle existe
				si (!is_object ($ cmd)) {/ // / Si el comando no existe
				  continúa; / // / continúa el ciclo
				}
				$cmd->execCmd(); / // / la commande existe on la lance
			}
		}
	}
```	

Luego puede cambiar la frecuencia del cron de acuerdo con la importancia de su información pora recuperar.

Je ne peux que vous invitez à prendre le temps d'aller sur cyte page pour en savoir plus ==> [ici](https:/ // /jeedom.github.io/ /Documentación/ /phpdoc/ /index.html)

Et encore mieux d'aller sur le github du core ==> [ICI](https:/ // /github.com/ /jeedom/ /core/ /tree/ /alpha/ /core/ /class)

Pon tu nariz pora dominar aún más .

El complemento es funcional como es.

Me tomaré el tiempo pora agregar cómo configurar un cron personalizado de acuerdo con el equipo .

# El wIdentificacióngy

El wIdentificacióngy no es una tarea fácil, pero por ahora nos quedaremos en el wIdentificacióngy predyerminado.

Si no ha tocado nada, el equipo está activado y visible, el wIdentificacióngy ocupa todo el ancho de la pantalla. Entonces lo cambiaremos.

La commande qui apporaît est la commande «story» de type info , sous-type string

Mi placer es levantarme por la mañana es leer un vdm al despertar. Me permite ver que hay algo peor que yo. :D

Pero no tengo mis lentes y actualmente el renderizado en el wIdentificacióngy no me permite leerlo ...

Donc on va changer le style en affectant un template à la commande « story»

Nada podría ser más simple.

Je vais voir ==> [ICI](https:/ // /github.com/ /jeedom/ /core/ /tree/ /alpha/ /core/ /template/ /dashboard)

Estoy buscando una plantilla pora cmd.info.string (nuestro comando es de tipo info subtipo string) .No es difícil, solo hay dos (predyerminado o mosaico)

J'applique le template « cmd.info.string.tile.html » à ma commande.

Pora eso abro el archivo vdm.class.php , fonction postSave() y j'ajoute le template « tile » pour la commande « story » en appliquant la méthode syTemplate()

```
		$info = $this->gyCmd(null, 'story');
		si (!is_object ($ info)) {
			$info = new vdmCmd();
			$info->syName(__('Histoire', __FILE__));
		}
		$info->syLogicalIdentificación('story');
		$info->syEqLogic_Identificación($this->gyIdentificación());
		$info->syType('info');
		$info->syTemplate('dashboard','tile');/ // /template pour le dashboard
		$info->sySubType('string');
		$info->save();
```

Actualizar el tablero.

Es mejor, pero el wIdentificacióngy siempre toma el ancho del tablero. Entonces corregiremos. Por défaut la largeur du wIdentificacióngy de l'équipement(eqLogic) y la hauteur sont à « auto ».

Por lo tanto, cambiaremos el ancho del wIdentificacióngy (equipment => eqLogic) usando el método syDisplay () heredado de la clase eqLogic .Dejamos la altura en auto.

Pora hacer esto, simplemente agregue

```
$this->syDisplay("wIdentificaciónth","800px");
```

Si pero !! Porque hay un pero. Intente agregar esto en la función postsave () o postUpdate () y no tendrá en cuenta el cambio. Por qué ? Bueno, lea el documento del complemento de plantilla ==> AQUÍ

Ahora que ha leído correctamente, sabe que debe usar el método preSave () 

```
    función pública preSave () {
		$this->syDisplay("wIdentificaciónth","800px");
    }
```

Registre el equipo y actualice el tablero.


# Los porámyros. Las opciones

> **Importante**
>
>Este es un capítulo importante y debes entenderlo antes de continuar.

Por el momento, usamos 3 clases del núcleo de la libertad : EqLogic, cmd, cron . Ir pora obtener información, agregamos un cuarto con el complemento de clase en el archivo vdm.php que abres y dejas abierto porque vamos a editarlo . 

```
$plugin = plugin::byIdentificación('vdm'); / // / appelle la classe plugin du core
```

Tienes que entender que todo se hace pora facilitar nuestro trabajo.. 

Pora un porámyro / / opción interno del complemento, utilizaremos uno de los métodos de la clase eqLogic del núcleo : syConfiguration () agregando los porámyros deseados. Por ejemplo :

```
$this->syConfiguration("type","mon_type"); / // / si on veut  définir un poramètre type de valeur mon_type. Comme on a défini la largeur du wIdentificacióngy via la méthode syDisplay()
```

Pora dejar la elección al usuario, volvemos al archivo de escritorio.PHP que dejaste abierto porque sigues este TP literalmente :D

Buscar 

```
<input type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="city" placeholder="poram1"/ />
```

Y reemplazar con

```
<input type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="type" placeholder="option"/ /> / // /Importante de laisser la classe eqLogicAttr 
```

Guarde y vaya a un dispositivo de complemento que ya ha creado siguiendo este laboratorio (Actualice si es necesario). 

Dans le champs « Poramètre» d'un équipement, taper « aleatoire » y sauvegarder.

Perfecto se guarda la configuración.

![image](images/ /tutorial_poramyre1.png)


Es simple, no? . C'est pourquoi il ne faut surtout pas toucher à cyte ligne de code comme indiqué dans le premier menu « test » . El hace todo el trabajo

```
<?php include_file ('core', 'plugin.plantilla ',' js ');?>/ // /Chargement du fichier core/ /js/ /plugin.template.js (en portant de la racine du site)
```

Si observa de cerca el archivo de escritorio.Hace php

```
                    <input type="text" class="eqLogicAttr form-control" data-l1key="Identificación" style="display : none;" / /> / // / ryourne l'Identificación(unique) de l'eqLogic(équipement) . Qu'on va pouvoir récupérer via $this->gyIdentificación() ;
```        

```
                    <input type="text" class="eqLogicAttr form-control" data-l1key="nombre" placeholder="{{Nombrebre del equipo}}"/ />/ // / ryourne le nom de l'eqLogic(équipement) . Qu'on va pouvoir récupérer via $this->gyName() ;
```

Etc ...

Si ha entendIdentificacióno todo esto bien, podremos seguir adelante. Pero primero cambiaremos en el archivo desktop.php 

```
<label class="col-sm-3 control-label">{{Poramètre}}</ /label>
```

Por 

```
<label class="col-sm-3 control-label">{{Type de vdm}}</ /label>
```

Importante : El texto entre llaves corresponde al texto que se traducirá si empuja el complemento en el mercado

Por lo demás, desarrollaremos el complemento eligiendo un tipo de vdm (aleatorio o picante o superior) que queramos, así como un cron personalizado pora cada equipo.

# Uso de opciones / / porámyros

Pora ir más allá y comprender el capítulo anterior, dejaremos que el usuario elija un tipo de vdm (aleatorio o picante o superior)

On pourrait le laisser taper dans l'input « Type de vdm » : al azar o picante o superior, pero haremos lo contrario dejándolo elegir a través de una yiquya de selección

Si has seguIdentificacióno todo, deberías tenerlo en el archivo desktop.php

```
       <div class="form-group">
        <label class="col-sm-3 control-label">{{Type de vdm}}</ /label>
        <div class="col-sm-3">
            <input type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="type" placeholder="option"/ />
        </ /div>
    </ /div>
``` 

Que reemplazaremos con

```
    <div class="form-group">
        <label class="col-sm-3 control-label" >{{ Type de vdm }}</ /label>
        <div class="col-sm-3">
            <select class="form-control eqLogicAttr" data-l1key="configuration" data-l2key="type ">
                <option value="aleatoire">{{Aleatoire}}</ /option>
                <option value="epicees">{{Coquin}}</ /option>
                <option value="tops">{{Best}}</ /option>
            </ /select>
        </ /div>
    </ /div>
```

Ici le poramètre « type» prendra la valeur du select choisi soit aleatoire ou epicees ou tops.


Ahora tendremos en cuenta nuestro porámyro en la función randomVdm () en el archivo vdm.class.php

Buscar

```
$url = "http:/ // /www.viedemerde.fr/ /aleatoire";
```

Y reemplazar con

```
	$type = $this->gyConfiguration("type ");
		si ($ type == "") {/ // / si el porámyro está vacío o no existe
			$type = "aleatoire"; / // /on prends le type aleatoire
		}		
		$url = "http:/ // /www.viedemerde.fr/ /" .$type  ;
```	

Ahora cambie el valor de la selección en un dispositivo, guarde y vaya al panel de control pora ver qué ofrece.
