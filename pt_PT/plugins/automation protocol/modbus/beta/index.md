## Plugin Modbus

### Description

.

---

### Configuração do plug-in

Depois de baixar o plugin, você deve primeiro ativá-lo, como qualquer plugin Jeedom :

![config](..imagesModbusActiv.png)

Então, você deve iniciar a instalação das dependências (mesmo que elas apareçam OK) :

![dependances](..imagesModbusDep.png)

Finalmente, inicie o daemon :

![demon](..imagesModbusDemon.png)

![socket](..imagesModbusConfig.png)

#### 

**** : .

**** :

- **** : )
- **** : )
- **** : 
  - ) : 
  - Aviso : 
  -  : 
  -  : 
- **** : ). .
- **** : ). .
- **** : 

**** :  :
- 
- )
- 
- 

:warning: **IMPORTANTE** :  ****.

---

### Uso do plug-in

**IMPORTANTE** :

 :
- .)
- )
- 

####  :

- **Desvio** : )
- **** : 
- **** : )

#### 

 !  ..

).

 :

![dependances](..imagesimportJson.png)

---

## CONTROLES DE REPRODUÇÃO

### )

 :

 : ****,  : ****  ****
 : **FC01**
 **registro de partida**  ****

**IMPORTANTE** : .

**Exemplo** :  :
- ReadCoil_1
-   
- ReadCoil_3
- ReadCoil_4

.

---

### )

 :
 ****  ****
 ****
 : ****
 : )
 **registro de partida**
 **** ()

**** : : "10110001").

---

### )
### )

 :

 : ****,  : ****
 :
   - **** () : 
   - **** () : 
   - **** : 
 : ****  ****
 **registro de partida**
 : 
   -  : 
   -  : 
   -  : 
   -  : 
   -  : 

---

## COMANDOS DE ESCREVA

 :
- **** (FC16)
- **Escrever Bit** ()
- **** (FC15)

![cmdEcritures](..imagesmodbusCmdsEcritures.png)

---

### 

**** :  **** .

####  :

 ****
 : ****
 **""** 

![cmdEcritures](..imagesconfigFc16.png)

 :
   - 
   - .)

![cmdEcritures](..imagesbootboxFc16.png)


 **registro de partida** 

**IMPORTANTE** : .

**Exemplo** : 
- Registro de partida : 10
-  : 
-  : 
- .

####  :

 :

```php
$cmd = cmd::byId(iddevotrecommande)
if(is_object($cmd)){
    $cmd->setConfiguration('arrayRegisters', [
        '],
        .'],
        ']
    ])
    $cmd->save()
}
```

---

### 

**** :  **** ().

####  : 

 ****  :

 ****
 : ****
 :
   - **Registro de partida**
   - **** (.)
   - **** 


####  : )

 **** :

 ****
 : ****
 **""**
 **""**
 :
   - 
   - 
   - 

####  : 

 :

 ****
 : ****
 **"isSpecific"** 
 :

```
adresseRegistre|valeur|format;adresseRegistre2|valeur2|format2...
```

**** :
- 
- 
- 

**Exemplo** :
```
100|25.5|float32105|1|int16200|15000|uint32
```
 :
- 25.
- 
- 

---

### )

**** : .

#### ) :

 ****
 ****
 : **1**
 : **1**
 : **1**

#### ) :

 ****
 ****
 : **1**
 : **1**
 : **0**

.

---

### )

**** : .

 ****
 ****
 **registro de partida**
 **""**  ****

**** : .

---

### 

**** : .

 **"Escrever Bit"** .

####  :

 **** 
 **"infobitbinary"** 
 :

```

```

**Exemplo** :
```

```
 **1**  **** ( ****.

####  :

 :
-  : 
-  : 
.

---

## Parâmetros Específicos

### 

) :


 **"RETORNO HEX"**
 ****


---

### 

 :


 **"LectureMultiRegistres"**
 ****

**** : .

**Exemplo** : ).

.

---

### OPERAÇÃO POR ORDEM

 :

 **""**
#value#


**** :
```
(#value# )
(#value# * 
(#value# - 
```

**** : 

**IMPORTANTE** : ).

---

### 

 :

 ****
 **"Ler bits de registro"**

**** :  **** : ).

.

---

## 


. .



### Utilisation


 **""**


.

---

## MQTT

### Activation

 **""**.

**** : .

### Fonctionnement

 :
- 
- 

**** :
```

```

### 

 :

![renammeTopic](..imagesrenammeTopic.png)

.

---

## 

1. **** : 
2. **** : 
3. **** : )
4. **** : 
5. **** : 
6. **MQTT** : .)

---

## Support

 :
)



