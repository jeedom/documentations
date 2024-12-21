[<< Core js](index)  
## Ajax js

### Fetch ...

A haut niveau, la récupération d'une ressource est une opération assez simple. Une requête arrive et sort une réponse. Exemple avec la méthode native js fetch() :

````js
{% raw %}
fetch("folder/data.json")
    .then(data => {
        //Do stuff
    }).catch(error => {
        //Handle fetch error
    })
{% endraw %}
````

La méthode Fetch, qui définit l'API JavaScript fetch(), fournit une architecture unifiée concernant divers aspects de la récupération, tels que les redirections et le protocole CORS. Plusieurs API l'utilisent, comme img, le curseur CSS, le style de liste, etc.

L'exemple ci-dessus est toutefois un exemple extrêmement simple et ... simplifié !

En effet, il faut aussi gérer différentes possibilités comme :

- Utiliser la méthode GET ou POST.  
- Récupérer une chaîne de caractères (string) ou un json.  
- Traiter les headers et paramètres à envoyer.  
- Gérer l'insertion dynamique de scripts js si besoin, de manière successive et synchrone !  

Et tout cela, en gérant au maximum les erreurs possibles...

Il a donc fallut développer plusieurs fonctions internes au Core pour gérer tous ces cas de figure, qui sont appelées sans cesse (chargement dynamique des pages, save, les events d'update de cmd, eqLogic, etc etc).

Les fonctions internes du Core permettent également de traiter tous les appels Ajax de manière globale, par exemple pour gerer l'envoi de l'event pageLoad.

De plus, ces méthodes ont permis d'isoler certains scripts chargés dynamiquement, comme les librairies dans core/3rdparty ou dans plugin/3rdparty, qui sont maintenant chargés et conservés dans le head pour gagner en performance.

### Utiliser les méthodes de class js du Core :

````js
{% raw %}
jeedom.config.load({
    configuration: document.getElementById('config').getJeeValues('.configKey:not(.noSet)')[0],
    error: function(error) {
        jeedomUtils.showAlert({
            message: error.message,
            level: 'danger'
        })
    },
    success: function(data) {
        //Do stuff
    }
})
{% endraw %}
````

### Appel Ajax en dehors des class js du Core :

````js
{% raw %}
domUtils.ajax({
    type: "POST",
    url: "plugin/xx/xx/stuff.php",
    data: {
        action: "doStuff",
        key: 'thisone'
    },
    dataType: 'json',
    global: false,
    error: function(error) {
        jeedomUtils.showAlert({
            message: error.message,
            level: 'danger'
        })
    },
    success: function(data) {
        //Do stuff
        jeedomUtils.showAlert({
            message: 'All good dude!',
            level: 'success'
        })
    }
})
{% endraw %}
````