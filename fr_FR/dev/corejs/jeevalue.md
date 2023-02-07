## Setter / Getter des valeurs

*Element.prototype.getJeeValues*  
*NodeList.prototype.getJeeValues*  
*Element.prototype.setJeeValues*  
*NodeList.prototype.setJeeValues*  
*Element.prototype.jeeValue*  
*NodeList.prototype.jeeValue*  


````js
{% raw %}

document.getElementById('div_mainContainer').setJeeValues(data, '.eqLogicAttr')


var eqLogic = document.getElementById('div_displayEqLogicConfigure').getJeeValues('.eqLogicAttr')[0]

{% endraw %}
````