# Plugin LoraPayload

Este plugin é um plugin que permite vincular comandos de carga útil LoraWan e criar um dispositivo com comandos enquanto analisa os valores.

# Configuration

## Configuração de plug-in

Você pode verificar o estado das dependências aqui e reiniciá-las. Em caso de problemas com o plugin sempre reinicie as dependências mesmo se estiver OK na dúvida.


# O plugin

Vá para o menu de plug-ins / protocolo para encontrar o plug-in.

Nesta página você pode ver os módulos já incluídos.

Na parte superior desta página você tem vários botões
!alt text](image.png)
-   **Adicionar botão** : Permite que você adicione equipamentos
-   **Botão de configuração** : Este botão abre a janela de configuração do plugin
-   **** : . (  )

# Equipement

Ao clicar em um de seus módulos, você acessa sua página de configuração :

-   Dê um nome ao módulo
-   Ativar / tornar visível ou não
-   Escolha seu objeto pai
-   Atribuir uma categoria a ele

No lado direito você encontrará :

-   O perfil do equipamento (a ser escolhido manualmente pelo usuário ao criar)
-   Veja o visual

Você também tem duas guias adicionais:

-   Uma guia de carga útil (descrita no próximo parágrafo)
-   Uma guia Pedidos (aqui você encontrará os controles correspondentes ao seu equipamento - esta guia é padrão na Jeedom)

# Adicionando equipamento
!alt text](image-1.png)
.

.

É importante no lado direito escolher o tipo de equipamento. Isso é o que permitirá saber como analisar o quadro.

 :
!alt text](image-2.png)
-    )
-   .
-   .
-   .


Uma vez feito isso, você pode salvar. Em seguida, na próxima vez que você receber um quadro, os comandos do seu equipamento serão atualizados

# Envoyer des commandes

Certains modules Lorawan possèdent des commandes de type Action qui permettent d'envoyer des consignes aux modules via l'interface Jeedom.

Dans l'onglet Equipement du plugin LoraPayload :

- Vous devez choisir la commande d'envoi (que ce soit MQTT ou autres)
- Vous devez choisir si voulez avoir une confirmation (Ack). C'est une information remontée dans MQTT sur un topic dédié qui n'influence pas les données remontées.

Concernant la commande d'envoi, dans le cas d'utilisation de MQTT, c'est une commande dans MQTT de type Action et de sous-type Message. Le topic est le topic dédié aux downlinks et la valeur de la commande est #message#.
---
# )

 **** .

---

##  

1. **** :  
     
   Exemple:  
   -   
   - 

2. ****:  
   

3. ****.

---

## 

Remplacer:
js
) {
    
}
 
) {
    
    
}


---

## 

Remplacer:
js
) {

}
 
) {
    
}

##  
:
js
 = {
    Decode,
    Encode
}

## 

1. ****  ``/var/www/html/plugins/lorapayload/core/config/devices/ `` ``.js``).

:

- 

- : )

##  
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

- **Configuração**:

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
        js
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



## 

- : 

- : ``milesight_gs601.png``)
---
# ?
.

    - Regarde le tableau  la section “Commandes downlink”  “Configuração via payload”,

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

# Panel

##  ?

-  **** ( ****.
-  :
  -  **** .

- .
!alt text](image-3.png)

---
## 

-  :
!alt text](image-4.png)
!alt text](image-9.png)
---



# FAQ

-   Alguns comandos não são atualizados ao mesmo tempo que outros : sim, de fato, alguns módulos de Lorawan não enviam necessariamente todas as informações ao mesmo tempo e com a mesma frequência
