# Complemento de Glinet

# Description

Complemento para administrar SMS enviados/recibidos a/desde un enrutador GL-iNet. 



# Configuración del complemento

Después de descargar el complemento, primero debe activarlo, como cualquier complemento Jeedom. Dans la section « Configuration », il faudra remplir les champs « IP GliNet » et « Mot de passe GliNet » spécifiques de votre router GL -iNet.


# Uso del complemento

Después de la creación del equipo, será necesario elegir el tipo de equipo deseado:
- « Envoie SMS » où il suffit d'ajouter un Numéro (renseigner le nom, type, numéro) pour pouvoir envoyer des SMS.

- « Dernier message reçu » où il y aura 2 commandes: (Actualizar cada minuto)
	- " Cmd Message" que representa el último mensaje recibido.
    - " Cmd Numero" que representa el número de teléfono que envió este mensaje.
    
- « Etat de la connexion SIM » où il y aura 4 commandes: (Actualizar cada 15 minutos)
	- " Estado de SIM" que representa el estado de la SIM (SIM lista, Sin SIM, Ingresar código PIN, No registrado en la red).
    - " Intensidad de la señal", que representa la intensidad de la señal de 4.
	- " Modo de conexión" que representa el modo de conexión del enrutador (4G, ...).
