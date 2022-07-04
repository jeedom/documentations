# Einrichten des Jeedom-DNS

## Objectif

Richten Sie das Jeedom-DNS ein, um über eine HTTPS-URL extern auf Ihr Jeedom zuzugreifen

> **WICHTIG**
>
>Das Jeedom-DNS fungiert als Reverse-Proxy, sodass es nur Zugriff auf Ihr Jeedom in https gewährt, sodass es nicht möglich ist, mit dem Jeedom-DNS aus der Ferne auf Ihr Jeedom in SSH zuzugreifen

## Voraussetzungen

Um Zugriff auf Jeedom DNS zu haben, ist es absolut notwendig, ein Power Service Pack oder mehr zu haben.

## Principe

Das Prinzip von Jeedom DNS ist sehr einfach, Ihr Jeedom verbindet sich mit einem unserer VPN-Server (verschlüsselte Verbindung). Dieser bei uns in Frage kommende Server macht dann den „Reverse Proxy“ bei der Anfrage : Es nimmt Ihre Verbindungsanfrage zu Ihrem Jeedom und überträgt sie dorthin.

Dieses Prinzip hat den Vorteil, dass Ihr Jeedom nicht im Internet preisgegeben wird und keine Portöffnung erforderlich ist.

> **WICHTIG**
>
> Dazu muss Ihre Box eine ausgehende Verbindung auf den Ports 1194,1195,1996,1997,1198,1199,2000 und 2001 in UDP zulassen. Insbesondere für Huawei Liveboxen und 4g-Router muss die Stufe der Firewall gesenkt werden, für Free-Nutzer muss man auch manchmal auf eine feste IP umsteigen (sonst teilt Free seine IP zwischen mehreren Benutzern, was Probleme für das DNS verursacht) außerdem für die Freebox Delta müssen Sie die Kindersicherung deaktivieren 

## Einrichtung

### Jeedom

Es ist super einfach, Sie müssen Ihr Jeedom mit dem Markt verbinden (siehe Dokumentation für den ersten Schritt). 

Gehen Sie dann auf Ihrem Jeedom in der Verwaltung auf die Registerkarte Netzwerke und aktivieren Sie "Use Jeedom DNS" und speichern Sie dann.

Jeedom startet den DNS und gibt Ihnen Ihre Zugangs-URL zu Ihrem Jeedom

> **WICHTIG**
>
> Sie können diese URL ändern, indem Sie auf Ihre Marktprofilseite gehen, dann auf Meine Dienste gehen und unter „Einfacher Fernzugriff“ auf Konfiguration klicken. Im DNS-Feld können Sie sie personalisieren. Nach der Registrierung ist es in Jeedom erforderlich, den DNS neu zu starten (System -> Einstellung -> Konfiguration dann Registerkarte Netzwerke und Neustart im Teil "DNS (Proxy) Market""). Es ist ratsam, diese Manipulation mit lokalem Zugriff auf Ihre Box durchzuführen.

Hier ist Ihr Jeedom von außen in https erreichbar

## FAQ

> **Muss ich Ports auf meiner Box öffnen**
>
> Nein, es ist nicht erforderlich, einen Port von Ihrer Internetbox zu Ihrem Jeedom zu öffnen. Die Verbindung geht in Richtung Jeedom -> VPN, es handelt sich also um eine ausgehende Verbindung (an den Ports 1194,1195,1996,1997,1198,1199,2000 und 2001) und nicht um eine eingehende Verbindung.

> **Warum Jeedom DNS meinen Zugriff darauf schützt**
>
> Mit dem Jeedom-DNS können Sie etwas sehr Wichtiges einrichten, den HTTPS-Zugriff. Dies garantiert, dass die Verbindung zwischen Ihrem Browser und Ihrem Jeedom verschlüsselt ist, außerdem kann sich niemand als Ihr Jeedom ausgeben, wenn das Zertifikat gültig ist. Schließlich ist auch die VPN-Verbindung in Ihrem Jeedom und unseren Servern verschlüsselt.

> **Ich habe den internen Listening-Port meines Jeedom geändert und der Jeedom-DNS funktioniert nicht mehr**
>
> Tatsächlich funktioniert das Jeedom-DNS nur, wenn Ihr Jeedom auf dem lokalen Port 80 lauscht (alle anderen Ports sind beim Verbinden auf der VPN-Schnittstelle geschlossen). Dies stellt keine Sicherheitsbedenken dar, da das VPN einen verschlüsselten Tunnel erstellt, sodass der Datenfluss selbst dann, wenn er auf Port 80 unverschlüsselt ist, im VPN-Tunnel verschlüsselt wird.

> **Ich habe keine Anmeldeseite, kann mich aber nicht anmelden**
>
> Stellen Sie sicher, dass Sie die standardmäßigen jeedom-Anmeldeinformationen (admin/admin) geändert haben und dass Ihr Benutzer nicht nur auf lokal beschränkt ist.

> **Meine Konfiguration ist gut, aber es ist unmöglich, eine Seite zu haben, die sich ins Unendliche dreht**
>
> Wenn Ihre Konfiguration gut ist (Initialisierungssequenz abgeschlossen im openvpn_DNS_Jeedom-Protokoll), aber Sie die Anmeldeseite nicht zufällig mit der mobilen Anwendung zum Laufen bringen können und Sie sich auf 4g oder am Ende der ADSL-Leitung befinden. In diesem Fall müssen Sie das Kontrollkästchen in der Jeedom-Netzwerkkonfiguration aktivieren, dass Sie sich auf 4g befinden, und den DNS neu starten, so dass Jeedom die MTU Ihrer Verbindung ändert, um die Größe der Pakete zu reduzieren. Abhängig von den Jeedom-Versionen wird diese Option automatisch vom Core verwaltet (und erscheint daher nicht). Starten Sie einfach den DNS neu.

> **Ich habe den Fehler "ERROR: TUN/TAP dev /dev/net/tun kann nicht geöffnet werden: Keine solche Datei oder Verzeichnis (Fehlernummer=2)"**
>
> Dieser Fehler tritt normalerweise bei Docker-ähnlichen Installationen auf, wie in der Dokumentation für angegeben [Kompatibilität](https://doc.jeedom.com/de_DE/compatibility/) Die Docker-Unterstützung befindet sich genau wegen dieser Art von Problem in der Beta-Phase. Die Lösung besteht normalerweise darin, openvpn auf dem Host zu installieren (wenn möglich)
