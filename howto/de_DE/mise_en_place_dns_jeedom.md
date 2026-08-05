# Implementierung von Jeedom DNS

## Objectif

Richten Sie Jeedom DNS so ein, dass Sie extern über eine HTTPS-URL auf Ihr Jeedom zugreifen können

> **Wichtig**
>
>Der Jeedom-DNS fungiert als Reverse-Proxy und ermöglicht daher nur den Zugriff auf Ihren Jeedom über https. Daher ist es nicht möglich, mit dem Jeedom-DNS remote über SSH auf Ihren Jeedom zuzugreifen

## Voraussetzungen

Um auf Jeedom DNS zugreifen zu können, ist ein Service Pack oder mehr erforderlich.

## Principe

Das Prinzip von Jeedom DNS ist sehr einfach. Ihr Jeedom stellt eine Verbindung zu einem unserer VPN-Server her (verschlüsselte Verbindung)). Dann macht dieser fragliche Server bei uns während der Anfrage "Reverse Proxy" : Es nimmt Ihre Anfrage, sich mit Ihrem Jeedom zu verbinden, und überträgt sie an dieses.

Dieses Prinzip hat den Vorteil, dass Sie Ihr Jeedom nicht im Internet verfügbar machen und keine Portöffnung durchführen müssen.

> **Wichtig**
>
> Damit dies funktioniert, muss Ihre Box eine ausgehende Verbindung auf den Ports 1194,1195,1196,1197,1198,1199,2000 und 2001 in UDP zulassen. Insbesondere bei Liveboxen und Huawei 4G-Routern muss man die Firewall-Stufe herabsetzen, bei Free-Nutzern muss man manchmal auch auf eine feste IP umstellen (ansonsten teilt Free seine IP zwischen mehreren Nutzern, was zu Problemen für den DNS führt). Freebox Delta müssen Sie die Kindersicherung deaktivieren 

## Einrichten

### Jeedom

Dort ist es super einfach, Sie müssen Ihr Jeedom mit dem Markt verbinden (siehe Dokumentation im ersten Schritt). 

Gehen Sie dann auf Ihrem Jeedom in seiner Verwaltung zur Registerkarte Netzwerke und aktivieren Sie "Jeedom DNS verwenden" und speichern Sie sie.

Jeedom startet das DNS und gibt Ihnen Ihre Zugangs-URL zu Ihrem Jeedom

> **Wichtig**
>
> Sie können diese URL ändern, indem Sie auf Ihre Marktprofilseite und dann auf die Registerkarte „Meine Dienste“ gehen und unter „Einfacher Fernzugriff“ auf „Konfiguration“ klicken. Im DNS-Feld können Sie sie personalisieren. Nach der Registrierung müssen Sie den DNS in Jeedom neu starten (Einstellungen -> System -> Konfiguration, dann Registerkarte Netzwerke) und im Abschnitt „DNS (Proxy) Market“ neu starten"). Es ist ratsam, diese Manipulation mit lokalem Zugriff auf Ihre Box durchzuführen.

Hier ist Ihr Jeedom von außen in https zugänglich

## FAQ

> **Muss ich Ports an meiner Box öffnen?**
>
> Nein, es ist nicht erforderlich, einen Port Ihrer Internetbox zu Ihrem Jeedom zu öffnen. Die Verbindung befindet sich in Richtung Jeedom -> VPN, es handelt sich also um eine ausgehende Verbindung (an den Ports 1194, 1195, 1996, 1997, 1198, 1199, 2000 und 2001) und nicht um eine eingehende Verbindung.

> **Warum Jeedom DNS meinen Zugriff darauf schützt**
>
> Mit Jeedom DNS können Sie einen sehr wichtigen HTTPS-Zugriff einrichten. Dies garantiert, dass die Verbindung zwischen Ihrem Browser und Ihrem Jeedom verschlüsselt ist. Außerdem ist das gültige Zertifikat niemand in der Lage, sich als Ihr Jeedom auszugeben. Schließlich ist auch die VPN-Verbindung zwischen Ihrem Jeedom und unseren Servern verschlüsselt.

> **Ich habe den internen Listening-Port meines Jeedom geändert und der Jeedom-DNS funktioniert nicht mehr**
>
> In der Tat funktioniert der Jeedom DNS nur, wenn Ihr Jeedom den lokalen Port 80 überwacht (alle anderen Ports auf der VPN-Schnittstelle sind beim Herstellen einer Verbindung geschlossen). Dies wirft keine Sicherheitsbedenken auf, da das VPN einen verschlüsselten Tunnel erstellt. Selbst wenn der Fluss an Port 80 frei ist, wird er im VPN-Tunnel verschlüsselt.

> **Ich habe keine Anmeldeseite, kann mich aber nicht anmelden**
>
> Stellen Sie sicher, dass Sie die Standardanmeldeinformationen für jeedom (admin / admin) geändert haben und dass Ihr Benutzer nicht nur lokal eingeschränkt ist.

> **Meine Konfiguration ist gut, aber es ist unmöglich, eine Seite zu haben, die endlos umblättert**
>

> **Ich habe den Fehler "ERROR: TUN / TAP dev / dev / net / tun kann nicht geöffnet werden: Keine solche Datei oder kein solches Verzeichnis (errno = 2)"**
>
> Dieser Fehler tritt normalerweise bei Docker-Installationen auf, wie in der Dokumentation für angegeben [Kompatibilität](https://doc.jeedom.com/de_DE/compatibility/) Docker-Unterstützung ist Beta gerade wegen dieser Art von Problem. Die Lösung besteht normalerweise darin, openvpn auf dem Host zu installieren (wenn möglich))
