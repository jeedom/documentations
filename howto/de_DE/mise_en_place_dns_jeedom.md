# Einrichtung des Jeedom-DNS

## Ziel

Einrichten des Jeedom-DNS, um über eine HTTPS-URL von außen auf das Jeedom-System zugreifen zu können

> **WICHTIG**
>
>Der Jeedom-DNS fungiert als Reverse-Proxy und gewährt daher nur über HTTPS Zugriff auf Ihr Jeedom. Es ist daher nicht möglich, über den Jeedom-DNS per SSH aus der Ferne auf Ihr Jeedom zuzugreifen.

## Voraussetzungen

Um Zugriff auf die Jeedom-DNS zu erhalten, ist ein Power-Service-Pack oder höher zwingend erforderlich.

## Prinzip

Das Prinzip des Jeedom-DNS ist sehr einfach: Ihr Jeedom verbindet sich über ein VPN (verschlüsselte Verbindung) mit einem unserer Server. Anschließend fungiert dieser Server bei uns bei einer Anfrage als „Reverse-Proxy“: Er nimmt Ihre Verbindungsanfrage an Ihr Jeedom entgegen und leitet sie an dieses weiter.

Dieser Ansatz hat den Vorteil, dass Ihr Jeedom nicht im Internet sichtbar ist und keine Ports geöffnet werden müssen.

> **WICHTIG**
>
> Damit dies funktioniert, muss Ihre Box ausgehende Verbindungen über die UDP-Ports 1194, 1195, 1196, 1197, 1198, 1199, 2000 und 2001 zulassen. Insbesondere bei Liveboxen und 4G-Routern von Huawei muss die Firewall-Sicherheit herabgesetzt werden. Bei Free-Kunden ist es manchmal auch erforderlich, auf eine feste IP-Adresse umzustellen (da Free sonst Ihre IP-Adresse auf mehrere Nutzer verteilt, was zu Problemen mit dem DNS führt). Bei der Freebox Delta muss zudem die Kindersicherung deaktiviert werden.

## Einrichtung

### Jeedom

Das ist ganz einfach: Sie müssen Ihr Jeedom mit dem Market verbinden (siehe Dokumentation „Erste Schritte“).

Gehen Sie anschließend in Ihrem Jeedom in der Verwaltung auf die Registerkarte „Netzwerke“, aktivieren Sie die Option „Jeedom-DNS verwenden“ und speichern Sie die Einstellungen.

Jeedom startet den DNS-Dienst und teilt Ihnen die URL für den Zugriff auf Ihr Jeedom mit

> **WICHTIG**
>
> Sie können diese URL ändern, indem Sie auf Ihre Profilseite im Market gehen, dann auf den Reiter „Meine Dienste“ klicken und unter „Einfacher Fernzugriff“ auf „Konfiguration“ klicken. Dort können Sie das DNS-Feld individuell anpassen. Nach der Speicherung müssen Sie in Jeedom den DNS neu starten (Einstellungen -> System -> Konfiguration, dann auf den Reiter „Netzwerke“ und im Bereich „DNS (Proxy) Market“ auf „Neustart“ klicken). Es wird empfohlen, diesen Vorgang mit lokalem Zugriff auf Ihre Box durchzuführen.

Jetzt ist Ihr Jeedom von außen über https erreichbar

## Häufig gestellte Fragen

> **Müssen auf meiner Router-Box Ports geöffnet werden?**
>
> Nein, Sie müssen keinen Port an Ihrer Internet-Router-Box für Jeedom öffnen. Die Verbindung verläuft in Richtung Jeedom -> VPN, es handelt sich also um eine ausgehende Verbindung (über die Ports 1194, 1195, 1996, 1997, 1198, 1199, 2000 und 2001) und nicht um eine eingehende Verbindung.

> **Warum schützt der Jeedom-DNS meinen Zugriff darauf?**
>
> Die Jeedom-DNS ermöglichen die Einrichtung einer sehr wichtigen Funktion: den HTTPS-Zugang. Dieser gewährleistet, dass die Verbindung zwischen Ihrem Browser und Ihrem Jeedom verschlüsselt ist. Da das Zertifikat gültig ist, kann sich zudem niemand als Ihr Jeedom ausgeben. Schließlich ist auch die VPN-Verbindung zwischen Ihrem Jeedom und unseren Servern verschlüsselt.

> **Ich habe den internen Listening-Port meines Jeedom geändert und die Jeedom-DNS funktionieren nicht mehr**
>
> Tatsächlich funktioniert der Jeedom-DNS nur, wenn Ihr Jeedom auf dem lokalen Port 80 lauscht (alle anderen Ports sind bei der Verbindung über die VPN-Schnittstelle geschlossen). Dies stellt kein Sicherheitsrisiko dar, da das VPN einen verschlüsselten Tunnel erstellt; selbst wenn der Datenfluss auf Port 80 unverschlüsselt ist, wird er im VPN-Tunnel verschlüsselt.

> **Ich habe keine Anmeldeseite, kann mich aber nicht anmelden**
>
> Stellen Sie sicher, dass Sie die Standard-Anmeldedaten von Jeedom (admin/admin) geändert haben und dass Ihr Benutzer nicht nur lokal eingeschränkt ist.

> **Meine Konfiguration ist korrekt, aber ich kann keine Seite aufrufen – der Ladevorgang läuft endlos weiter**
>

> **Ich erhalte die Fehlermeldung „ERROR: Cannot open TUN/TAP dev /dev/net/tun: No such file or directory (errno=2)“**
>
> Dieser Fehler tritt in der Regel bei Docker-basierten Installationen auf, wie in der Dokumentation von [Kompatibilität](/compatibility) Die Docker-Unterstützung befindet sich gerade wegen solcher Probleme noch in der Beta-Phase. Die Lösung besteht in der Regel darin, OpenVPN auf dem Host zu installieren (sofern dies möglich ist).
