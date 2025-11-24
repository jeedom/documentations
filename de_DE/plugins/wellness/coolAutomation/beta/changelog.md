# Änderungsprotokoll CoolAutomation


>**WICHTIG**
>
>Liegen keine Informationen zur Aktualisierung vor, bedeutet dies, dass es sich nur um die Aktualisierung der Dokumentation, Übersetzung oder des Textes handelt.


# 
- 

# 05/11/2025
- **Amélioration de la gestion des timeouts et des erreurs HTTP** :
  - Augmentation du timeout par défaut de 2 à 10 secondes (configurable)
  - Ajout d'un système de retry automatique en cas de timeout (2 tentatives par défaut, configurable)
  - Messages d'erreur plus explicites avec indication de l'équipement et de la commande en échec
  - Logs enrichis avec temps de réponse et adresse IP de l'équipement
  - Nouveaux paramètres de configuration dans le plugin :
    - **Timeout HTTP** : durée d'attente maximale pour une requête (3-30 secondes)
    - **Nombre de tentatives** : nombre de tentatives en cas d'échec (0-5 tentatives)

# 27/10/2025

- Fix changements de noms de lignes après mise à jour du plugin
- Ajout délai aux mise à jours des commandes infos

# 14/10/2025

- Fix erreur PHP lors de la création des unités

# 18/08/2025

- Ajout plages de consignes min max pour Consigne Mode Chaud et Froid

# 14/08/2025

- Optimisation appels API
- Ajout Consigne Min & Max pour Mode Chaude et Froid

# 08/08/2025
- Ajout système de queues pour l'execution des commandes
- Redémarrage démon tous les 2 jours pour libération éventuelle de mémoire

# 17/07/2025
- Fix Telnetlib3 pour debian 12


# 02/07/2025
- Fix double appel requetes
- Fix code erreur

# 24/07/2024
- Ajout Selection Interface Réseau pour le scan

# 19.06.2024

- Korrigieren Sie die Verwaltung der minimalen/maximalen Temperatur durch den Administrator
- Min/Max-Verwaltung durch den Master hinzugefügt
- Löschen veralteter Befehle beim Aktualisieren des Plugins


# 15.05.2024

- Zusätzliches Vorlagen-Widget für Kacheln
- Konsolen entfernen.nutzlose Protokolle
- Korrigieren Sie eqlogic->save in der queryParameters-Funktion
- Umbenennung manuell erstellter UIDs hinzugefügt
- Neues Modal zur Massenprotokollierung bestimmter Befehle


# 05.06.2024

- IP-Änderung am Hauptgerät für die Übertragung an Kinder behoben
- Manuelle Erstellung für Backstream-Integration hinzugefügt

# 05.04.2024

- Fixe Linienanzeige
_ Kontrollkästchen „Alle auswählen“ hinzugefügt

# 16.04.2024

- Neue Benutzeroberfläche :  Master -> Linien
- Zeilen werden gelöscht, wenn das übergeordnete Element gelöscht wird


# 01.04.2024

- TelNet-Verbindung
- API-Rest mit coolLinkHub

# 24.01.2024

- Erster Commit

