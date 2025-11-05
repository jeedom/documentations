## Plugin Modbus

### Description

.

---

### Plugin-Setup

Nachdem Sie das Plugin heruntergeladen haben, müssen Sie es wie jedes Jeedom-Plugin zuerst aktivieren :

![config](..imagesModbusActiv.png)

Dann müssen Sie die Installation der Abhängigkeiten starten (auch wenn sie OK erscheinen) :

![dependances](..imagesModbusDep.png)

Starten Sie abschließend den Daemon :

![demon](..imagesModbusDemon.png)

![socket](..imagesModbusConfig.png)

#### 

**** : .

**** :

- **** : )
- **** : )
- **** : 
  - ) : 
  - Warnung : 
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

:warning: **WICHTIG** :  ****.

---

### Nutzung des Plugins

**WICHTIG** :

 :
- .)
- )
- 

####  :

- **Versatz** : )
- **** : 
- **** : )

#### 

 !  ..

).

 :

![dependances](..imagesimportJson.png)

---

## WIEDERGABESTEUERUNG

### )

 :

 : ****,  : ****  ****
 : **FC01**
 **Abgangsregister**  ****

**WICHTIG** : .

**Beispiel** :  :
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
 **Abgangsregister**
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
 **Abgangsregister**
 : 
   -  : 
   -  : 
   -  : 
   -  : 
   -  : 

---

## BEFEHLE SCHREIBEN

 :
- **** (FC16)
- **Bit schreiben** ()
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


 **Abgangsregister** 

**WICHTIG** : .

**Beispiel** : 
- Abgangsregister : 10
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
   - **Abgangsregister**
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

**Beispiel** :
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
 **Abgangsregister**
 **""**  ****

**** : .

---

### 

**** : .

 **"Bit schreiben"** .

####  :

 **** 
 **"infobitbinary"** 
 :

```

```

**Beispiel** :
```

```
 **1**  **** ( ****.

####  :

 :
-  : 
-  : 
.

---

## Spezifische Parameter

### 

) :


 **"HEX-RÜCKKEHR"**
 ****


---

### 

 :


 **"LectureMultiRegistres"**
 ****

**** : .

**Beispiel** : ).

.

---

### BETRIEB AUF BESTELLUNG

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

**WICHTIG** : ).

---

### 

 :

 ****
 **"Registerbits lesen"**

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



