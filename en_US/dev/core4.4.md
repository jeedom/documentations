## .4 | 

###  ...

. . .).

 !

. ****  ****, comme elles le sont sur $.. (). .

 **getValues()**  **setValues()**  **setJeeValues()**  **getJeeValues()**.

 ****, . *load()*  *html()* (). . !

 ** .  **** **** ****  **** .

. . !

:

<details>

  <summary markdown="span">jQuery to pure js()</summary>

  
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

  
  {% raw %}
  <input id="myDate" class="in_datepicker"/>
  <input id="myTime" class="in_timepicker"/>
  <input id="myCustomDatetime"/>
  {% endraw %}
  

  
  {% raw %}
  
  

  :i:
  {% endraw %}
  

</details>



### Deprecated

*:*

#### :

`eqLogic::::  

#### ):

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

#### ):

  


> ****
>
> .  ** .

#### 

.  **()**. .

<details>

  <summary markdown="span">jeeComplete()</summary>

  
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
  

</details>

#### 

. ..().

<details>

  <summary markdown="span">exemples jeeDialog()</summary>

  
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
      
    }  {
      
    }
  })

  {% endraw %}
  

</details>

#### 

. **.

<details>

  <summary markdown="span">exemples ()</summary>

  
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
        callback: function(key, opt) { //Item callback
        }
      },
      sep1: '-----',
    },
    callback: function(key, opt) { //Default callback if not set on item
    }
    //isDisable: false,
    /*
    events: {
      show: function(opt) {
      },
      hide: function(opt) {
      }
    },
    */
    /*
    build: function(trigger) {
      var contextmenuitems = {}
       {
        callback: function(key, options, event) {
          //Set items...
        }
      },
      items: contextmenuitems
    },
    position: function(opt, x, y) {
    },
    */
  })

  {% endraw %}
  

</details>

#### jQuery FileUpload

The jQuery fileupload library will be removed in a future version of the Core. jeeFileUploader() replaces the use of these functions.

<details>

  <summary markdown="span">exemples ()</summary>

  
  {% raw %}
  :
  $('#bt_uploadImage').fileupload({
    url: 'core/ajax/plan.ajax.php?action=uploadImage&id=' + id
    dataType: 'json',
    done: function(event, data) {
      
    }
  })

  //Core jeeFileUploader:
  new jeeFileUploader({
    fileInput: document.getElementById('bt_uploadImg'),
    url: 'core/ajax/plan.ajax.php?action=uploadImage&id=' + id
    /*
    add: function(event, data) {
      let currentPath = document.getElementById('bt_uploadImg').getAttribute('data-path')
      data.url = 'core/ajax/jeedom.ajax.php?action=uploadImageIcon&filepath=' + currentPath
      data.submit()
    },
    */
    done: function(event, data) {
      
    }
  })

  {% endraw %}
  

</details>

See [](https://github.com/jeedom/core/blob/alpha/core/dom/dom.ui.js)

> **Tip**
>
> You can test your plugins on the Core without jQuery or Bootstrap. To do this, go to Settings > System > Configuration, then the Equipment tab, **Core js (dev)**.

### Optional modifications

- Managing multiple checkboxes

A function has been introduced in the Core to provide a context menu for checkboxes : Select all, None, Inverted selection.

To use it, you need to add the CSS class *checkContext* on the relevant checkboxes, and call the function ``jeedomUtils.setCheckContextMenu()``

The checkboxes will then be grouped by the same *data-l1key*  *data-l2key* if they exist.

You can also create groups of checkboxes using the attribute *data-context="group1"*.

Finally, you can define a callback function like this:

````js
var checkContextMenuCallback = function(_el) {
  //_el is an html element.
  _el.triggerEvent('change')
}
jeedomUtils.setCheckContextMenu(checkContextMenuCallback)
````

