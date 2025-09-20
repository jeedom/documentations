# 

O plugin ****  **)**.
.
 :

- ).

- .

- .

- .

# Fonctionnalité
 :

- **** : .).
- **** .
- **** :
  -  **** ().
  -  **** ().
- **** : .
- **** .
- **** .
- **** .
- **** .


# Configuration
---
## Configuração de plug-in

 :

- .  
- .).  

!alt text](../images/image_dependance.png)
---

## O plugin

 ****.  
.

 :

!alt text](../images/image.png)
- **** : .  
- **** : .  
- **** : . *(.)*

## Equipement

 :

!alt text](../images/accueil_config_equip.png)

- .  
- .  
- .  
- .  

 :

-  **** ().  
- .  

 :

-   )
!alt text](../images/equiplorawanconfig.png)
.  

### 

.  

 :  

1. ****  **.  
2. **** .  
3. **** .  

 **** :  :  
- ,  
- .  

**** :  **** .
   
-   Uma guia Pedidos (aqui você encontrará os controles correspondentes ao seu equipamento - esta guia é padrão na Jeedom)
!alt text](../images/equipcommconfig.png)

## Adicionando equipamento
!alt text](../images/image-1.png)
.

.

É importante no lado direito escolher o tipo de equipamento. Isso é o que permitirá saber como analisar o quadro.

 :
!alt text](../images/equiplorawanconfig.png)
-    )
-   .
-   .

Uma vez feito isso, você pode salvar. Em seguida, na próxima vez que você receber um quadro, os comandos do seu equipamento serão atualizados

## 

.

 :

- )
- ). .
.  **.

---
## )

 **** .

---

### 1.  

1. **** :  
     
   Exemple:  
   -   
   - 

2. ****:  
   

3. ****.

---

### 2. 

Remplacer:
js
) {
    
}
 
) {
    
    
}


---

### 3. 

Remplacer:
js
) {

}
 
) {
    
}

### 4.  
:
js
 = {
    Decode,
    Encode
}

### 5. 

1. ****  ``/var/www/html/plugins/lorapayload/core/config/devices/ `` ``.js``).

:

- 

- : )

### 6.  
json
{
  "": {
    "name": " 
    "groupe": "
    "configuration": {
      "type": "",
      "language": ")
      "deviceProfile": ")
    },
    "commands": 
      {
        "name": " 
        "type": ")
        "subtype": "
        "isVisible": 
        "isHistorized": 
        "unite": "
        "logicalId": "parsed::)
      },
      {
        "name": "
        "type": "info",
        "subtype": "numeric",
        "isVisible": 0,
        "isHistorized": 0,
        "unite": "",
        "logicalId": "
      },
      {
        "name": "Reboot",
        "type": ")
        "subtype": "other",
        "isVisible": 1,
        "logicalId": "encoder::reboot::::<fonction>::<valeur>)
      },
      {
        "name": "",
        "type": ")
        "subtype": "other",
        "isVisible": 1,
        "logicalId": "action::::<valeur_en_hexadecimal>)
      },
      {
        "name": "",
        "type": "action",
        "subtype": "
        "isVisible": 1,
        "logicalId": "encoder::",
        "configuration": {
          "minValue": 1,
          "maxValue": 5000,
          "step": 1
        }
      },
      {
        "name": "",
        "type": "action",
        "subtype": "
        "isVisible": 1,
        "logicalId": "action::",
        "configuration": {
          "minValue": 1,
          "maxValue": 5000,
          "step": 1
        }
      },
      {
        "name": "",
        "type": "info",
        "subtype": "string",
        "isVisible": 0,
        "isHistorized": 0,
        "logicalId": "
      }
    ],
    "compatibility": 
      {
        "manufacturer": "Milesight",
        "name": "GS601",
        "doc": "",
        "type": "",
        "remark": "",
        "inclusion": "",
        "imglink": ""
      }
    ]
  }
}


### ?
.

#### 
- ****: .

- ****: : ).

- ****:

    - `type`: .

    - `language`: .

    - `deviceProfile`: ).

- ****: ).

    - ****:

        - `info`: ).

        - `action`: ).

- ****:

    - `numeric`: .

    - `string`: .

    - `binary`: .

    - : .

    - `other`: .

- ****: ).

- ****: ).
(")

- ****: ).

- ****:

    - : ``parsed::nom_de_la_variable`` (.)

    - : 
        json
        action::<valeur_en_hexadecimal>
        
        ou
        json
        encoder::<fonction>::<valeur>
        
        ou
         
        encoder::<fonction>
         
        (: slider)

    - : ``"logicalId": "payload"``

- ****: .

##### 
- : : ``decoded.temperature ⇒ "parsed::temperature"``).

- .

- .).

- .



### 

- : 

- : ``milesight_gs601.png``)
---
### ?
.

    - Regarde le tableau  la section “ downlink”  “ via payload”,

    - .

.

    - .

 | (.

4. (**): .


:

|                 |  |                     |
| -------------------- | ----------------- | ------------------------------ |
|                |               | 0: :       |
|  |            | 1: : ... |
|        |             |                           |
|        |             |                           |

json
{
  "": {
    "enable": 1,
    "": 2,
    "": 30,
    "": 40
  }
}

-  :
|2|30|

## Panel

###  ?

-  ****  ****.
-  :
  -  **** .

- .
!alt text](../images/image-3.png)

---
### 

-  :
<p align="center">
  <img src="../images/image-4.png" width="20%" style="margin-right:10px">
  <img src="../images/panel_lorapaylaod.png" width="75%">
</p>

---

#### 

 :

1. ****  
    :  
   - **** : .  
     -  **** : .  
     -  **** : .  
     -  **** : .  
   - **** : .  
   - **** : .  
   - **** :  ****,  ****  ****.  
     -  **** : ).  
     -  **** : ).  
     -  **** : ).  
   - **** : .
2. ****
  - .  
  -  ****.  
    **** .  
3. ****
    - ****  
  .  
    - ****  
  .  
4. ****  
   .

---

#### 

 **** .  
 :  

.  
 ****.  
 **)**.  

 :  
- .  
- .  
- .  

.

---
### 

.  :
- ..

- ,

- ).

- ).

- .

- .

### 

1. ****
..  :
- 
- .

2. ****

!alt text](../images/image-11.png)

 :
- ),
-  : ),
- .

3. ****
- ****
.

- ****
).
: .

- **)**
: 0s).
.

- ****
 : ).
.

- ****
.

- ****
. .



4. ****

!alt text](../images/image-13.png)
.
.
!alt text](../images/image-12.png)
.
.

# )

## 
-  ****  ****, .  
- .  
!alt text](../images/rak1.png)
---

## 
- .  
-  ****  ****.  
-  **“Failed”**, .  

---

## 
-  ****.  
-  ****  (**.**).  
 !alt text](../images/rak2.png)
 **** : .  

---

## 
- .  
-  **** .  
-  **** .  

---

## 
-  :  
  -  ****  ****,  
  -  **** .  

 **** :  

..
!alt text](../images/rak3.png)

.

## 
!alt text](../images/rak4.png)

# FAQ

-   Alguns comandos não são atualizados ao mesmo tempo que outros : sim, de fato, alguns módulos de Lorawan não enviam necessariamente todas as informações ao mesmo tempo e com a mesma frequência
