## Boites de dialogue

La gestion des Boites de dialogue de Jeedom repose entièrement sur la lib interne jeeDialog().

### jeeDialog.alert()

Affiche une simple alerter, sans option.

````js
{% raw %}
jeeDialog.alert('{{Vous devez activer ce plugin pour y accéder.}}')
{% endraw %}
````

### jeeDialog.confirm()

Demande une confirmation à l'utilisateur, avec retour.

````js
{% raw %}
jeeDialog.confirm('{{Êtes-vous sûr de vouloir supprimer tous ces équipements ?}}', function(result) {
    if (result) {
        //Do stuff
    }
})
{% endraw %}
````

### jeeDialog.prompt()

Demande une information à l'utilisateur, avec information en retour.

--wip otions--

````js
{% raw %}
jeeDialog.prompt("{{Nom du nouvel équipement}} ?", function(result) {
    if (result !== null) {
        var name = result
        //Do stuff
    }
})
{% endraw %}
````

### jeedomUtils.showAlert()

Affiche une notification.  

--wip otions--

````js
{% raw %}
jeedomUtils.showAlert({
    message: '{{Plugin activé !}}',
    level: 'success'
})
{% endraw %}
````

### jeeDialog.dialog()

Affiche une boite de dialogue complète (redimensionnable, maximisable) avec contenu dynamique.

--wip otions--

````js
{% raw %}
jeeDialog.dialog({
    id: 'md_cmdHistory',
    title: '{{Historique}}',
    contentUrl: 'index.php?v=d&modal=cmd.history&id=' + cmdIds
})
{% endraw %}
````


