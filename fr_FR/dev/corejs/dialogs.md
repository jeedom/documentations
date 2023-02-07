## Boites de dialogue

La gestion des Boites de dialogue de Jeedom repose entièrement sur la lib interne jeeDialog().

### jeeDialog.alert()

Affiche une simple alerter, sans option.

````js
jeeDialog.alert('{{Vous devez activer ce plugin pour y accéder.}}')
````

### jeeDialog.confirm()

Demande une confirmation à l'utilisateur, avec retour.

````js
jeeDialog.confirm('{{Êtes-vous sûr de vouloir supprimer tous ces équipements ?}}', function(result) {
    if (result) {
        //Do stuff
    }
})
````

### jeeDialog.prompt()

Demande une information à l'utilisateur, avec information en retour.

--wip otions--

````js
jeeDialog.prompt("{{Nom du nouvel équipement}} ?", function(result) {
    if (result !== null) {
        var name = result
        //Do stuff
    }
})
````

### jeedomUtils.showAlert()

Affiche une notification.  

--wip otions--

````js
jeedomUtils.showAlert({
    message: '{{Plugin activé !}}',
    level: 'success'
})
````

### jeeDialog.dialog()

Affiche une boite de dialogue complète (redimensionnable, maximisable) avec contenu dynamique.

--wip otions--

````js
jeeDialog.dialog({
    id: 'md_cmdHistory',
    title: '{{Historique}}',
    contentUrl: 'index.php?v=d&modal=cmd.history&id=' + cmdIds
})
````


