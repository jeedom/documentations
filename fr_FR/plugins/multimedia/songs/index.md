# Plugin Sons

Ce plugin permet d'intercepter certaine demandes de TTS (passant par le TTS jeedom et uniquement celui-ci) et de le remplacer par le son de votre choix.

# Configuration

Ce plugin ne necessite aucune configuration particulière.

# Ajout de son

Il vous suffit dans Plugins -> Multimedia -> Sons de cliquer sur ajouter puis :

- Nom du son : nom du son pour le retrouver facilement
- ID : identifiant du son, il est conseillé de ne mettre ici que des lettres ou des chiffre. C'est cet identifiant qu'il faudra utiliser dans la demande TTS
- Sons : votre son à jouer (le fichier doit etre en mp3, 50mo max)

# Utilisation

Une fois votre son ajouté, vous pouvez mettre dans le message TTS #id# (id étant l’identifiant du son créé plus haut)
