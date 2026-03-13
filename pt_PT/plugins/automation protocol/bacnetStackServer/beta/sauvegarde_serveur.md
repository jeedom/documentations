# 

## Principe

, **** .

 **** .

## 

### 1. 

.

.

### 2. 

) :

- **** : .)

.

### 3. 

####  : `applyJsonAndSave()`

php

$eqLogic = bacnetStackServer::byId($id);
$config = json_encode($myConfig);


$eqLogic->applyJsonAndSave($config);


 :




#### )

php

$eqLogic->applyJsonForEq($config);


bacnetStackServer::saveBacnetServerConfig();


### 4. 

php

$backupFile = 'data/backups/config-' . date('YmdHis') . '.json';
bacnetStackServer::


### 5. 

php

$result = bacnetStackServer::saveBacnetServerConfig();

']) {
     : " . $result'file'];
}  {
     : " . $result'message'];
}


## 

|  |  |
|---------|---------------|
| . |  |
| . | ) |
|  |  |

## 

php
array(
    '
    '
    '.|null
)


## 

### 

1. **** :
   php
   
   $this->modifyBacnetObjects();
   bacnetStackServer::saveBacnetServerConfig();
   

2. **** 

3. **** :
   php
   
   bacnetStackServer::
   
   
   $eqLogic->applyJsonAndSave($newConfig);
   

4. **** :
   php
   $result = bacnetStackServer::saveBacnetServerConfig();
    (!$result'success']) {
       log:: : ' . $result'message']);
   }
   

### 

1. **** ()
2. **** ()

## 

php
 {
    
    () {
        . 
        $config = 
            ',
            '',
            '
                
                    '',
                    ',
                    '',
                    '
                ]
            ]
        ];
        
        . 
        $backupFile = 'data/backups/before-' . date('YmdHis') . '.json';
        $backupResult = bacnetStackServer::
        
         (!$backupResult'success']) {
            
        }
        
        log:: : ' . $backupResult'file']);
        
        . 
        $eqLogic = bacnetStackServer::byId($this->eqLogicId);
        $result = $eqLogic->applyJsonAndSave(json_encode($config));
        
        ) {
            log::
            
        }  {
            log::
            
            // Opcional : 
            
            
            
        }
    }
}


## Logs

 :


[2025-11-13 14:30:[00] Configuração do servidor salva : /caminho/para/arquivo.json
[2025-11-13 14:30: : /caminho/para/arquivo.json


## 

###  : ""

).

**** :  :
php
bacnetStackServer::


###  : ""

).

**** : .

### 

 :
php
$info = bacnetStackServer::deamon_info();
'] !== 'ok') {
    
}

