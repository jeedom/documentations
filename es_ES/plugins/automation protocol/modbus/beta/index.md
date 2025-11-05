## Plugin Modbus

### Description

.

---

### Configuración del complemento

Después de descargar el complemento, primero debe activarlo, como cualquier complemento Jeedom :

![config](..imagesModbusActiv.png)

Luego, hay que iniciar la instalación de las dependencias (aunque aparezcan OK) :

![dependances](..imagesModbusDep.png)

Finalmente, inicie el demonio :

![demon](..imagesModbusDemon.png)

![socket](..imagesModbusConfig.png)

#### 

**** : .

**** :

- **** : )
- **** : )
- **** : 
  - ) : 
  - Advertencia : 
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

### Uso del complemento

**IMPORTANTE** :

 :
- .)
- )
- 

####  :

- **Compensar** : )
- **** : 
- **** : )

#### 

 !  ..

).

 :

![dependances](..imagesimportJson.png)

---

## CONTROLES DE REPRODUCCIÓN

### )

 :

 : ****,  : ****  ****
 : **FC01**
 **registro de salida**  ****

**IMPORTANTE** : .

**Ejemplo** :  :
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
 **registro de salida**
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
 **registro de salida**
 : 
   -  : 
   -  : 
   -  : 
   -  : 
   -  : 

---

## ESCRIBIR COMANDOS

 :
- **** (FC16)
- **Bit de escritura** ()
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


 **registro de salida** 

**IMPORTANTE** : .

**Ejemplo** : 
- Registro de salida : 10
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
   - **Registro de salida**
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

**Ejemplo** :
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
 **registro de salida**
 **""**  ****

**** : .

---

### 

**** : .

 **"Bit de escritura"** .

####  :

 **** 
 **"infobitbinary"** 
 :

```

```

**Ejemplo** :
```

```
 **1**  **** ( ****.

####  :

 :
-  : 
-  : 
.

---

## Parámetros específicos

### 

) :


 **"RETORNO HEXAGONAL"**
 ****


---

### 

 :


 **"LectureMultiRegistres"**
 ****

**** : .

**Ejemplo** : ).

.

---

### OPERACIÓN A LA ORDEN

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
 **"Leer bits de registro"**

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



