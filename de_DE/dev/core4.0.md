## .0 | 

### Deprecated

-  [](https://fontawesome.com/how-to-use/on-the-web/setup/upgrading-from-version-4#name-changes).

### 

.

..


..

Beispiel ****: `"compatibility" : 

:

<details>

  <summary markdown="span">scénario / bloc Code</summary>

  
  {% raw %}
  )
  $author = 'Jeedom SAS';

  $plugins = repo_market::byFilter(['author' => $author]);
  $pluginsArray = utils::o2a($plugins);
  $countPlugins = 0;
  $countIncompatibles = 0;
  ) {
    ) {
      $countPlugins++;
    '] != '1') {
        $countIncompatibles++;
      $scenario->setLog('Plugin ' . $plugin['name'] . ' does not have v4 compatibility tag.');
    }
    }
  }
  ) {
    ) {
      $scenario->setLog($author . ' : ' . $countIncompatibles . ' potentially incompatible Jeedom V4 plugin on ' . $countPlugins . ' checked');
    }  {
      $scenario->setLog('All ' . $countPlugins . ' plugin developed by ' . $author . ' are Jeedom V4 compatible. Congratulations!');
    }
  }  {
    $scenario->setLog('No plugin found for ' . $author);
  }
  {% endraw %}
  

</details>

### 

-  [](https://github.com/jeedom/plugin-template/blob/master/desktop/php/template.php)).
-  : 
-  : 
- :
  - )
    - )
- :
    - !
    - :
      - : 
        -  : `success`
        - bleu: `info`
        - orange: `warning`
        -  : `danger`
- : ) :
- :
    -  : 
    -  : 
    -  : 
- . : ::::all()

- .

- .

). .

>  :
>
>  ! .

>  :
>
> Une fois le github du plugin updaté, aller sur le market, mes créations, et faire un ‘Test' sur la branche. .

>  :
>
> .

>  :
>
> Sur les pages de scénario, plugins etc, le bouton ‘Supprimer' est passé à droite ! .


### 

.

.

- .
- .
- .
- .

.).
 [](https://github.com/jeedom/plugin-template/blob/master/plugin_info/pre_install.php)

### 

.

.

### 

.

.

### 

. .