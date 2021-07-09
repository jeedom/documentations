# Les démons & dépendances

## Introduction

Dans les tutoriels et documentations de base vous avez appris comment coder votre premier plugin avec des actions relativement simples déclenchées par l'utilisateur via une commande action ou par une tâche planifiée par le core (les crons).
Le plugin est alors capable de ponctuellement aller chercher de l'information (par exemple via requête http) ou de faire toute sortes d'opérations pour autant que cela puisse être codé en PHP.

Il va arriver que vous ayez besoin de plus que cela, quelques exemples sans être exhaustif:

- utiliser des resources systèmes, par exemple clé usb ou autres matériels (bluetooth...)
- maintenir une connexion avec un système distant (en réseau local ou sur internet mais pas jeedom)
- garder des processus actifs en arrière plan ce qui n'est pas le cas du code PHP qui ne "vit" que pendant l'exécution de la requête http

Pour cela, la plupart du temps on utilise un "démon".
A nouveau, tout est déjà prévu dans le core de jeedom pour nous aider à mettre ce démon en place et on va détailler cela ici.

## Structure des fichiers d'un démon

Le code et/ou l'executable de votre démon doit évidement se trouver dans l'arborescence de votre plugin et doit donc être inclus et livrer dans le package lors de l'installation d'un plugin.
Il n'y a pas de règle forte sur l'emplacement exact de votre démon, cependant la convention veut que l'on place celui-ci dans le répertoire `/resources` du répertoire de votre plugin.

Dans le plugin template vous trouverez les bases pour implémenter un démon en python et c'est l'exemple que l'on va utiliser dans cette documentation cependant vous êtes libre de développer votre démon dans le langage de votre choix à condition qu'il puisse être executé sur les [plateformes supportées par Jeedom]( https://doc.jeedom.com/fr_FR/compatibility/).
La plupart des démons des plugins Jeedom sont en python ou nodeJs mais il en existe aussi en .netCore ou autre.

Vous trouverez également quelques méthodes utiles pour un démon en nodeJs qui sera peut-être détaillé dans une prochaine version de cette documentation. Pour l'instant je vous invite à consulter le community dev pour vous aligner avec les autres développeurs sur tout ce qui concerne NodeJs, principalement sur la version à utiliser.

Structure du répertoire du template:

![image](images/daemon_struct.png)

### le package jeedom

Jeedom fournit avec le plugin template un package python offrant les classes et méthodes de bases utiles pour la gestion du démon et de la communication entre le démon et le code php de votre plugin.
Elles se trouvent dans le répertoire `/resources/demond/jeedom/jeedom.py` (visible dans la capture ci-dessus).
Pour démarrer vous n'avez pas besoin de connaître les détails d'implémentation de ces class et méthodes donc ici vous aurez juste un résumé de ce qu'elles permettent.

#### class jeedom_utils()

Cette class est un ensemble de méthodes static utiles telle que `convert_log_level` pour convertir le loglevel reçu de jeedom en un log level de la class python `logging` ou `find_tty_usb` pour retourner une liste de device sur le système.
On ne va pas toutes les détailler ici, le nom de chacune des méthodes est assez explicite, vous les découvrirez en vous plongeant dans le code.

#### class jeedom_serial()

Cette class encapsule la lecture et l'écriture sur un device.
De nouveau on ne va pas détailler la class, les méthodes parlent d'elles-mêmes, sachez juste que ca existe si vous en avez besoin.

> **Attention**
>
> Si votre démon n'aura pas besoin de faire ce type d'action, il faudra penser à ne pas utiliser ni importer cette class car le package python `serial` n'est pas installé par défaut et dans ce cas votre démon ne démarrera pas (problème vu plusieurs fois sur community). On y reviendra dans la gestion des dépendances.

#### class jeedom_socket() & jeedom_socket_handler()

Vous n'utilisez pas la class `jeedom_socket_handler()` directement, elle ne sert qu'à `jeedom_socket()`.
Le but de `jeedom_socket()` est d'assurer une communication descendante (de votre code php vers le démon).
Lorsque votre plugin devra envoyer une instruction à votre démon il pourra le faire via ce socket.

Donc la class ouvre un socket tcp et écoute. Quand un message est reçu il est mis dans une queue qui sera lu par après par votre démon, on y reviendra.

A nouveau, vous n'êtes pas obligé d'utiliser ce mécanisme, vous êtes libre de créer autre chose (server http par exemple) mais c'est ce qui est fournit de base par Jeedom, c'est léger et ca fonctionne très bien.

#### class jeedom_com()

Celle-ci assure la communication montante, du démon vers votre code php.
Vous utilisez essentiellement `send_change_immediate()` au début qui permet donc d'envoyer un payload json à jeedom via une requête http. On verra un exemple plus tard.

### Le démon

A présent que l'on connaît l'environnement, on peut regarder la partie qui nous intéresse le plus: le démon et ce qu'on va devoir coder.

Dans le plugin template, le répertoire du démon a été nommé `demond`, et le démon en lui même se nomme `demond.py`.
Ces noms sont arbitraires, libre à vous de les changer.
La convention est de prendre l'ID du plugin suivi de la lettre ´d´. Ce qui donne par exemple pour le plugin `blea` le répertoire `./resources/blead/` qui contient entre autre le fichier `blead.py`, ce fichier étant le point de départ du démon.

> **TIP**
>
> N'hésitez pas à vous inspirer des plugins officiels avec démon pour comprendre les détails, tel que blea et openzwave.

On va donc regarder en détails le squelette d'un démon tel que proposé par Jeedom, ouvrez le fichier `demond.py` et on va commencer par les dernières lignes qui sont en fait le début du programme:

```json
_log_level = "error"
_socket_port = 55009
_socket_host = 'localhost'
_device = 'auto'
_pidfile = '/tmp/demond.pid'
_apikey = ''
_callback = ''

for arg in sys.argv:
    if arg.startswith("--loglevel="):
        temp, _log_level = arg.split("=")
    elif arg.startswith("--socketport="):
        temp, _socket_port = arg.split("=")
    elif arg.startswith("--sockethost="):
        temp, _socket_host = arg.split("=")
    elif arg.startswith("--pidfile="):
        temp, _pidfile = arg.split("=")
    elif arg.startswith("--apikey="):
        temp, _apikey = arg.split("=")
    elif arg.startswith("--device="):
        temp, _device = arg.split("=")

_socket_port = int(_socket_port)

jeedom_utils.set_log_level(_log_level)

logging.info('Start demond')
logging.info('Log level : '+str(_log_level))
logging.info('Socket port : '+str(_socket_port))
logging.info('Socket host : '+str(_socket_host))
logging.info('PID file : '+str(_pidfile))
logging.info('Apikey : '+str(_apikey))
logging.info('Device : '+str(_device))

signal.signal(signal.SIGINT, handler)
signal.signal(signal.SIGTERM, handler)

try:
    jeedom_utils.write_pid(str(_pidfile))
    jeedom_socket = jeedom_socket(port=_socket_port,address=_socket_host)
    listen()
except Exception as e:
    logging.error('Fatal error : '+str(e))
    shutdown()
```

Quelques initialisations de variable:

```json
_log_level = "error" # le log level par défaut, au format texte tel qu'il est envoyé par Jeedom
_socket_port = 55009 # le port que votre démon utilisera par défaut pour ouvrir le socket d'écoute de Jeedom
_socket_host = 'localhost' # l'interface sur laquelle ouvrir le socket, à priori ne pas changer.
_device = 'auto' # ne sert à rien si vous n'utilisez pas un device matériel
_pidfile = '/tmp/demond.pid' # emplacement par défaut du pidfile, ce fichier est utiliser par Jeedom pour savoir si votre démon est démarrer ou pas
_apikey = '' # apikey pour authentifier la communication entre Jeedom et votre démon
_callback = '' ## l'url de callback pour envoyer les notifications à Jeedom (et à votre code php)
```

> **Attention**
>
> Il faut bien faire attention en choisissant le port que vous allez utiliser pour votre socket, c'est un point d'amélioration possible sous jeedom, car il n'y a pas de mécanisme en place pour éviter des collisions: donc si un autre plugin utilise le même port que vous cela va évidement poser un problème. Pour l'instant la seule méthode pour faire son choix est de chercher parmi les plugins existant les ports déjà utilisés et de s'aligner entre dev sur le community (il y a déjà des sujets ouverts à ce propos). Par ailleurs il sera important de laisser ceci configurable par l'utilisateur si tel conflit devait se produire, on y reviendra.


Ensuite on récupère les arguments reçu en ligne de commande, cette ligne de commande sera générée par votre code php, on y reviendra.
A vous de supprimer ce qui n'est pas utile (comme l'argument device) ou d'en rajouter d'autres tel qu'un user/pswd si votre démon doit se connecter sur un système distant.

```json
for arg in sys.argv:
    if arg.startswith("--loglevel="):
        temp, _log_level = arg.split("=")
    elif arg.startswith("--socketport="):
        temp, _socket_port = arg.split("=")
    elif arg.startswith("--sockethost="):
        temp, _socket_host = arg.split("=")
    elif arg.startswith("--pidfile="):
        temp, _pidfile = arg.split("=")
    elif arg.startswith("--apikey="):
        temp, _apikey = arg.split("=")
    elif arg.startswith("--device="):
        temp, _device = arg.split("=")
```

Ensuite il y a quelques lignes de log et ces deux lignes, classique en python, qui enregistre simplement la méthode à appeler dans le cas où ces deux signaux d'interruptions sont reçus, ce qui permettra de stopper le démon:

```json
signal.signal(signal.SIGINT, handler)
signal.signal(signal.SIGTERM, handler)
```

et la méthode handler qui est définie un peu plus haut dans le démon:

```json
def handler(signum=None, frame=None):
    logging.debug("Signal %i caught, exiting..." % int(signum))
    shutdown()
```

qui ne fait que rajouter un log et appeler la méthode `shutdown()` définie juste en dessous:

```json
def shutdown():
    logging.debug("Shutdown")
    logging.debug("Removing PID file " + str(_pidfile))
    try:
        os.remove(_pidfile)
    except:
        pass
    try:
        jeedom_socket.close()
    except:
        pass
    try:
        jeedom_serial.close()
    except:
        pass
    logging.debug("Exit 0")
    sys.stdout.flush()
    os._exit(0)
```

C'est dans cette méthode que vous devez écrire le code à éxécuter en cas de shutdown du démon, par exemple faire un logout du système distant et fermer proprement les connexions ouvertes.

> **Attention**
>
> vous devez adapter cette méthode et supprimer le code qui n'est pas nécessaire dans votre cas, notamment le try/except sur `jeedom_serial.close()` si vous n'utilisez pas cette class.

Si on retourne sur le démarre du démon, voici la suite:

```json
try:
    jeedom_utils.write_pid(str(_pidfile)) # écrit le pidfile que le core de jeedom va surveiller pour déterminer si le démon est démarré
    jeedom_socket = jeedom_socket(port=_socket_port,address=_socket_host) # on déclare le socket pour recevoir les ordres de jeedom
    listen() # et on écoute
except Exception as e:
    logging.error('Fatal error : '+str(e))
    shutdown()
```

La méthode `listent()` définie au début du fichier:

```json
def listen():
    jeedom_socket.open()
    try:
        while 1:
            time.sleep(0.5)
            read_socket()
    except KeyboardInterrupt:
        shutdown()
```

Rien à modifier ici, on peut voir que le socket est ouvert et ensuite boucle infinie pour lire toutes les demi-secondes le socket

La méthode `read_socket()`

```json
def read_socket():
    global JEEDOM_SOCKET_MESSAGE
    if not JEEDOM_SOCKET_MESSAGE.empty():
        logging.debug("Message received in socket JEEDOM_SOCKET_MESSAGE")
        message = json.loads(jeedom_utils.stripped(JEEDOM_SOCKET_MESSAGE.get()))
        if message['apikey'] != _apikey:
            logging.error("Invalid apikey from socket : " + str(message))
            return
        try:
            print 'read'
        except Exception, e:
            logging.error('Send command to demon error : '+str(e))
```

La variable `JEEDOM_SOCKET_MESSAGE` est une `queue()` python alimentée par la class `jeedom_socket()` comme vu précédemment.

Si la queue n'est pas vide, on charge le json et on vérifie que la clé api reçue avec le message correspond à celle reçue lors du démarrage du démon ensuite on peut lire le message et faire nos actions dans le tr/except:

```json
        try:
            print 'read'
        except Exception, e:
            logging.error('Send command to demon error : '+str(e))
```

Donc à la place du `print 'read'` à vous de lire les éléments relevants du message que votre plugin aura envoyé et de déclencher les actions ou d'appeler vos class ou méthodes propres à votre plugin.

A partir d'ici vous avez un démon qui peut être exécuté même s'il ne fait encore rien (ça c'est votre travail).

## Adaptation du plugin

Avoir un démon et comprendre sa structure c'est très bien mais il manque quelques éléments clés pour que justement votre plugin (code php) puisse contrôler ce démon et pour que le core soit également informé qu'il existe.

### /plugin_info/info.json

Dans le fichier info.json de votre plugin, il faut rajouter la propriété `hasOwnDeamon` et attribuer la valeur `true`, exemple:

```json
{
    "id" : "pluginID",
    "name" : "pluginName",
    ...
    "hasDependency" : true,
    "hasOwnDeamon" : true,
    "maxDependancyInstallTime" : 10,
    ...
}
```

Nous verrons plus tard l'utilisation de `hasDependency` et `maxDependancyInstallTime`.

### eqLogic class

Dans la class eqLogic de votre plugin il y a quelques méthodes à implémenter pour la bonne gestion du démon
