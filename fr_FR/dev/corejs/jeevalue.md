[<< Core js](index.md)  
## Setter / Getter des valeurs

### getJeeValues() / setJeeValues()

*Element.prototype.getJeeValues*  
*NodeList.prototype.getJeeValues*  
*Element.prototype.setJeeValues*  
*NodeList.prototype.setJeeValues*  


Ces fonctions permettent d'assigner les paramètres enregistrés en DB à des éléments d'une page pour l'affichage, puis de les récupérer pour les sauvegarder en DB.

> Database -> setJeeValues() -> interface -> modifications utilisateur -> getJeeValues() -> Database

#### setJeeValues()

````js
{% raw %}
jeedom.eqLogic.byId({
    id: myId,
    error: function(error) {
    },
    success: function(data) {
        document.getElementById('div_displayEqLogicConfigure').setJeeValues(data, '.eqLogicAttr');
    }
});
{% endraw %}
````


#### getJeeValues()

````js
{% raw %}
var eqLogic = document.getElementById('div_displayEqLogicConfigure').getJeeValues('.eqLogicAttr')[0];
{% endraw %}
````

> Ne vous inquiétez pas si vous n'utilisez pas ces fonctions pour votre plugin, le Core le gère pour vous dans la plupart des cas.


### jeeValue()

*Element.prototype.jeeValue*  
*NodeList.prototype.jeeValue*

La fonction `jeeValue()` est à la fois un setter et un getter.

Appelée sans argument, elle renvoi la valeur de l'élément.

Appelée avec un argument, elle assigne la valeur à l'élément.

Les éléments html ont différentes manières d'assigner ou de récupérer leur valeur.

Quelques exemples :

````js
{% raw %}
var value = document.getElementById('myInput').value;
var value = document.getElementById('myInputCheckbox').checked;
var value = document.getElementById('myDiv').innerHTML;
//...

document.getElementById('myInput').value = 4.4;
document.getElementById('myInputCheckbox').checked = true;
document.getElementById('myDiv').innerHTML = 'RTFM';
//...

{% endraw %}
````

Ou plus simplement :

````js
{% raw %}
var value = document.getElementById('myElement').jeeValue();

document.getElementById('myElement').jeeValue(4.4);
//...
{% endraw %}
````

> Il n'est pas systématiquement nécessaire de faire appel à cette fonction. Si vous connaissez le type d'élément dont vous avez besoin, utiliser la fonction native js sera moins intensive.