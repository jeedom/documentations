# 

.

>**IMPORTANT**
>
>.

## 

.


-  ``rpm`` :
````sh

````

-  ``deb`` :
````sh
sudo apt update && sudo apt install docker.io
````

## 

 :
````sh
:latest
````

Puis lancez la :
````sh
sudo docker run --name jeedom-server --privileged -v /opt/jeedom/www: -v /opt/jeedom/db: -p 80:80 -d :latest
````

 :

- ``jeedom-server`` : 
- ``/opt/jeedom/www``  ``/opt/jeedom/db`` :  *()*
- ``-p 80:80``:  *(80)*  *()*

> **INFORMATION**
>
>  *(``detach``)*, . )

 : ``IP_DOCKER:80``

> **INFORMATION**
>
>  ``docker ps``  ``docker stop jeedom-server``,  ``docker start jeedom-server``

## 

 :

### 

```dockerfile
services:
  jeedom:
    image: :latest
    volumes:
      - http:
      - db:
    tmpfs:
      - 
    ports:
      - 40080:80
    restart: always
    : bridge
    healthcheck:
      test: ["CMD", "curl", "-fs", "-S", "--max-time", "2", "http://localhost:80"]
      interval: 30s
      timeout: 10s
      retries: 5
volumes:
  db:
  http:
```

###  *(experimental)*

```dockerfile
services:
  :
    image: mariadb:latest
    : 
    command:
      - "--"
      - "--skip-name-resolve"
      - "--"
      - "--"
      - "--"
      - "--"
      - "--"
      - "--"
      - "--"
      - "--"
      - "--"
      - "--"
      - "--"
      - "--"
      - "--"
      - "--"
      - "--"
    volumes:
      - db:
    restart: always
    environment:
      - 
      - 
      - 
      - 
    expose:
      - 3306
  :
    image: :
    : 
    volumes:
      - http:
    tmpfs:
      - 
    ports:
      - 52080:80
    restart: always
    environment:
      - 
      - 
      - 
      - 
    healthcheck:
      test: ["CMD", "curl", "-fs", "-S", "--max-time", "2", "http://localhost:80"]
      interval: 30s
      timeout: 10s
      retries: 5
    :
      - 
volumes:
  db:
  http:
```

>**INFORMATION**
>
>
>
>. 

## 

- : :  **** )
- : :  ****
- :4. : 
- :4. : 
- :4. : )
- :4. : )
- :4. : . )

 [](https://hub.docker.com/r//tags)

## First connection

Consult the documentation relating to the [**first connection**](../premiers-pas/#Première%20connexion) to access the Jeedom interface after installation.
