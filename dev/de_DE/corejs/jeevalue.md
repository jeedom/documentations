[<< Core.js](index)
## Werte setzen / abrufen

### getJeeValues() / setJeeValues()

*Element.prototype.getJeeValues*
*NodeList.prototype.getJeeValues*
*Element.prototype.setJeeValues*
*NodeList.prototype.setJeeValues*
 

Mit diesen Funktionen können die in der Datenbank gespeicherten Parameter den Elementen einer Seite zur Anzeige zugewiesen und anschließend abgerufen und in der Datenbank gespeichert werden.

> Datenbank -> setJeeValues() -> Schnittstelle -> Benutzeränderungen -> getJeeValues() -> Datenbank

#### setJeeValues()

````js
{% raw %}
jeedom.eqLogic.byId({
    id: myId,
    error: function(error) {
    },
    success: function(data) {
        document.getElementById('div_displayEqLogicConfigure').setJeeValues(data, '.eqLogicAttr')
    }
})
{% endraw %}
````


#### getJeeValues()

````js
{% raw %}
var eqLogic = document.getElementById('div_displayEqLogicConfigure').getJeeValues('.eqLogicAttr')[0]
{% endraw %}
````

> Machen Sie sich keine Sorgen, wenn Sie diese Funktionen für Ihr Plugin nicht nutzen – der Core übernimmt das in den meisten Fällen für Sie.


### jeeValue()

*Element.prototype.jeeValue*
*NodeList.prototype.jeeValue*

Die Funktion `jeeValue()` ist sowohl ein Setter als auch ein Getter.

Wird ohne Argument aufgerufen, gibt sie den Wert des Elements zurück.

Wird mit einem Argument aufgerufen, weist sie dem Element den Wert zu.

HTML-Elemente verfügen über verschiedene Möglichkeiten, ihren Wert zuzuweisen oder abzurufen.

Einige Beispiele:

````js
{% raw %}
var value = document.getElementById('myInput').value
var value = document.getElementById('myInputCheckbox').checked
var value = document.getElementById('myDiv').innerHTML
//...

document.getElementById('myInput').value = 4.4
document.getElementById('myInputCheckbox').checked = true
document.getElementById('myDiv').innerHTML = 'RTFM'
//...

{% endraw %}
````

Oder einfacher ausgedrückt:

````js
{% raw %}
var value = document.getElementById('myElement').jeeValue()

document.getElementById('myElement').jeeValue(4.4)
//...
{% endraw %}
````

> Es ist nicht immer notwendig, diese Funktion zu nutzen. Wenn Sie wissen, welche Art von Element Sie benötigen, ist die Verwendung der nativen JavaScript-Funktion weniger ressourcenintensiv.
