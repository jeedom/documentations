## .3 | 

### Obsolete

-

### Deprecated

 : ).

{} :

**

js
 = {
  __description: '.',
  : '',
  language: '',
  userProfils: {},
  planEditOption: {state: : : : : true},
  :
  : null,
  : null,
  : false,
  modifyWithoutSave: false,
  
  serverDatetime: null,
  clientServerDiffDatetime: null,
  serverDatetime: null,
  serverTZoffsetMin: null,
}


- Exemple: .

{}

- Exemple: .

### 

#### 

.

:

**** :

`html
{% raw %}<label class="col-sm-3 control-label">"{{Equipements de mon petit plugin}}"</label>{% endraw %}
`

**core/i18n/en_US.json** :

`json
{
  "plugins\/monplugin\/desktop\/php\/monplugin.php": {
      	"Equipements de mon petit plugin": "My small plugin equipments",
  }
}
`

:

**** :

`html
{% raw %}<label class="col-sm-3 control-label">"{{My small plugin equipments}}"</label>{% endraw %}
`

**core/i18n/fr_FR.json** :

`json
{
  "plugins\/monplugin\/desktop\/php\/monplugin.php": {
      	"My small plugin equipments": "Equipements de mon petit plugin",
  }
}
`
.

> ..



#### addCmdToTable()

. . 

 **** .  : 

#### Widgets

:

js
'#id#'] = ) {
      $('.cmd[data-cmd_id=#id#]').attr('title', '{{Date de valeur}} : '+_options.valueDate+'<br/>{{}} : ')
      $('.cmd[data-cmd_id=#id#] .state').empty().append(_options.)
    }

 :'#id#',: '#state#', valueDate: '#valueDate#', collectDate: '#collectDate#', alertLevel: '#alertLevel#'}])


Devient:

js
('#id#',) {
      $('.cmd[data-cmd_id=#id#]').attr('title', '{{Date de valeur}} : '+_options.valueDate+'<br/>{{}} : ')
      $('.cmd[data-cmd_id=#id#] .state').empty().append(_options.)
      $('.cmd[data-cmd_id=#id#] .unit').empty().append(_options.unit)
    })

 :'#id#',: '#state#', valueDate: '#valueDate#', collectDate: '#collectDate#', alertLevel: '#alertLevel#', unit: '#unite#'}])


.

#### ):

 **Nachricht**, '.

:

`php
$options['source'] = 'plugin Mode '.$this->getName()
scenarioExpression::
`

#### Affichage des mots de passe (4.3.9):

En 4.3, les mots de passe et clé API ne sont plus affichés en clair dans l'administration, avec un bouton à droite pour les afficher. C'est maintenant utilisable également sur les plugins :

`html
<div class="input-group">
    <input type="text" class="inputPassword configKey form-control" data-l1key="pass" placeholder="Account password" />
    <span class="input-group-btn">
        <a class="btn btn-default form-control bt_showPass roundedRight"><i class="fas fa-eye"></i></a>
    </span>
</div>
`