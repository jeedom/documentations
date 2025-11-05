## Plugin Modbus

### Description

.

---

### Plugin Setup

After downloading the plugin, you must first activate it, like any Jeedom plugin :

![config](..imagesModbusActiv.png)

Then, you have to start the installation of the dependencies (even if they appear OK) :

![dependances](..imagesModbusDep.png)

Finally, start the daemon :

![demon](..imagesModbusDemon.png)

![socket](..imagesModbusConfig.png)

#### 

**** : .

**** :

- **** : )
- **** : )
- **** : 
  - ) : 
  - Warning : 
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

:warning: **IMPORTANT** :  ****.

---

### Use of the plug-in

**IMPORTANT** :

 :
- .)
- )
- 

####  :

- **Offset** : )
- **** : 
- **** : )

#### 

 !  ..

).

 :

![dependances](..imagesimportJson.png)

---

## PLAYBACK CONTROLS

### )

 :

 : ****,  : ****  ****
 : **FC01**
 **departure register**  ****

**IMPORTANT** : .

**Example** :  :
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
 **departure register**
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
 **departure register**
 : 
   -  : 
   -  : 
   -  : 
   -  : 
   -  : 

---

## WRITE COMMANDS

 :
- **** (FC16)
- **Write Bit** ()
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


 **departure register** 

**IMPORTANT** : .

**Example** : 
- Departure register : 10
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
   - **Departure register**
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

**Example** :
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
 **departure register**
 **""**  ****

**** : .

---

### 

**** : .

 **"Write Bit"** .

####  :

 **** 
 **"infobitbinary"** 
 :

```

```

**Example** :
```

```
 **1**  **** ( ****.

####  :

 :
-  : 
-  : 
.

---

## Specific Parameters

### 

) :


 **"HEX RETURN"**
 ****


---

### 

 :


 **"LectureMultiRegistres"**
 ****

**** : .

**Example** : ).

.

---

### OPERATION ON ORDER

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

**IMPORTANT** : ).

---

### 

 :

 ****
 **"Read Register Bits"**

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



