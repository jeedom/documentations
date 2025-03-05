## Core v4.4 | Plugin Developers

### One day, jQuery ...

jQuery is a framework that is still widely used in web interfaces, and Jeedom has historically relied heavily on it. Despite everything, HTML5 and recent browsers increasingly make it possible to do without it. The interest for Jeedom is above all performance, and there is no question yet of removing jQuery and its plugins (jQuery UI, contextmenu, modals, autocomplete, tablesorter, etc.).

But you have to think about it, and start one day !

The Core 4.4 therefore integrates the basic functions setValues() and getValues(), which are now also prototyped on the **NodeList** And **Element**, comme elles le sont sur $.. (). .

 **getValues()** And **setValues()**  **setJeeValues()** And **getJeeValues()**.

 ****, . *load()* And *html()* (). . !

 ** .  **** **** **** And **** .

. . !

:

<details>

  <summary markdown="span">jQuery to pure js()</summary>

  ~~~ js
  {% raw %}
  //jQuery:
  $('#table_objectSummary tbody').append(tr)
  $('#table_objectSummary tbody tr').last().setValues(_summary, '.objectSummaryAttr')

  :
  ').)
  ().')

  //jQuery:
  ()
  ]
  ')

  :
  ()
  ]
  ')

  //jQuery:
  addMyTr: ) {
    >'
    >'
    >'
    >'
    )
    ')
    $('#table_stuff tbody').append(newRow)
    
  }

  :
  addMyTr: ) {
    >'
    >'
    >'
    >'
    ')
    
    ')
    )
    
  }

  //jQuery:
  $(function(){
    !')
  })

  :
  (){
    !')
  })

  {% endraw %}
  ~~~

</details>

.. ..

:

[](/en_US/dev/corejs/index)

[ {}](https://github.com/jeedom/core/blob/alpha/core/dom/dom.utils.js)

[](https://github.com/jeedom/core/blob/alpha/core/dom/dom.ui.js)



### Obsolete

#### 

  


#### ):



#### 

 ** . .().

. ..

#### 

 ** . . [](https://flatpickr.js.org/).

 ** .

:

<details>

  <summary markdown="span">date/time pickers</summary>

  ~~~ html
  {% raw %}
  <input id="myDate" class="in_datepicker"/>
  <input id="myTime" class="in_timepicker"/>
  <input id="myCustomDatetime"/>
  {% endraw %}
  ~~~

  ~~~ js
  {% raw %}
  
  

  :i:
  {% endraw %}
  ~~~

</details>



### Deprecated

*:*

#### :

`eqLogic::::byTypeAndSearchConfiguration()`  

#### ):

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

#### ):

  


> **Noticed**
>
> .  ** .

#### 

.  **()**. .

<details>

  <summary markdown="span">jeeComplete()</summary>

  ~~~ js
  {% raw %}
  //jQuery:
  $('input.auto').autocomplete({
    minLength: 1,
    source: dataArray
  })

  :
  ({
    minLength: 1,
    source: dataArray
  })
  {% endraw %}
  ~~~

</details>

#### 

. ..().

<details>

  <summary markdown="span">exemples jeeDialog()</summary>

  ~~~ js
  {% raw %}
  ) {
    !')
    return
  }

  :', ) {
     !== null) {
      
    }
  })

  ?', ) {
    ) {
      
    } else {
      
    }
  })

  {% endraw %}
  ~~~

</details>

#### 

. **.

<details>

  <summary markdown="span">exemples ()</summary>

  ~~~ js
  {% raw %}
  :
  $('#md_modal').dialog({
    title: "{{}}"
  }).?')

  :
  ({
    title: '{{}}',
    contentUrl: '?'
  })

  {% endraw %}
  ~~~

</details>

#### 

.
 : [](http://sortablejs.github.io/Sortable/)

#### 

 ** . 

#### 

. .

<details>

  <summary markdown="span">jeeCtxMenu()</summary>

  ~~~ js
  {% raw %}
  ({
    selector: '.nav.!
    appendTo: '',
    className: '', 
    items: {
      uniqueNameID: {
        name: '{{}}',
        isHtmlName: false,
        icon: '',
        className: '', 
        callback: 
        }
      },
      sep1: '-----',
    },
    callback: 
    }
    //isDisable: false,
    /*
    events: {
      show: ) {
      },
      hide: ) {
      }
    },
    */
    /*
    build: ) {
       = {}
       {
        callback: ) {
          ...
        }
      },
      items: contextmenuitems
    },
    position: ) {
    },
    */
  })

  {% endraw %}
  ~~~

</details>

#### 

. .

<details>

  <summary markdown="span">exemples ()</summary>

  ~~~ js
  {% raw %}
  :
  $('#bt_uploadImage').fileupload({
    url: '?
    dataType: 'json',
    done: ) {
      
    }
  })

  :
  ({
    fileInput: '),
    url: '?
    /*
    add: ) {
      ')
      ?
      ()
    },
    */
    done: ) {
      
    }
  })

  {% endraw %}
  ~~~

</details>

See [](https://github.com/jeedom/core/blob/alpha/core/dom/dom.ui.js)

> ****
>
> . , **)**.

### Optional modifications

- 

 : .

 **  ``jeedomUtils.setCheckContextMenu()``

 ** And ** .

 *"*.

:

````js
) {
  .
  ')
}
)
````

