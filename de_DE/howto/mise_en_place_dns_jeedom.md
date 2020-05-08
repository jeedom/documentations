# Implementierung von Jeedom DNS

## Objectif

Richten Sie Jeedom DNS so ein, dass Sie extern über eine HTTPS-URL auf Ihr Jeedom zugreifen können

> **IMPORTANT**
>
>Das Jeedom-DNS fungiert als Reverse-Proxy, sodass nur in https auf Ihr Jeedom zugegriffen werden kann. Daher ist es nicht möglich, mit dem Jeedom-DNS remote auf Ihr Jeedom in SSH zuzugreifen

## Voraussetzungen

Um auf Jeedom DNS zugreifen zu können, müssen Sie über eine Service Pack-Leistung oder mehr verfügen.

## Principe

Das Prinzip von Jeedom DNS ist sehr einfach. Ihr Jeedom stellt eine Verbindung zu einem unserer VPN-Server her (verschlüsselte Verbindung).. Dann macht dieser fragliche Server bei uns während der Anfrage "Reverse Proxy" : Es nimmt Ihre Anfrage entgegen, um sich mit Ihrem Jeedom zu verbinden, und überträgt sie darauf.

Dieses Prinzip hat den Vorteil, dass Ihr Jeedom nicht im Internet verfügbar gemacht wird und keine Portöffnung erforderlich ist.

> **IMPORTANT**
>
> Damit dies funktioniert, muss Ihre Box eine ausgehende Verbindung an den Ports 1194,1195,1996,1997,1198,1199,2000 und 2001 in UDP zulassen. Insbesondere für die Huawei Livebox und den 4g-Router muss die Firewall-Stufe gesenkt werden, für die Delta Freeboxes muss die Kindersicherung deaktiviert sein.

Wir haben derzeit 6 DNS-Server, die auf 2 verschiedenen physischen Computern mit jeweils einer 500-Mbit / s-Verbindung verteilt sind. 

## Einrichten

### Jeedom

Dort ist es super einfach, Sie müssen Ihr Jeedom mit dem Markt verbinden (siehe Dokumentation im ersten Schritt). 

### Market

Une fois votre Jeedom lié au market, vous allez sur le market; puis sur votre profils (https://www.jeedom.com/market/index.php?v = d & p = Profile) und schließlich auf der Registerkarte "Meine Jeedoms"".

### Kehre zu Jeedom zurück

Sobald der Marktstatus bei "Verbindung möglich" ist, gehen Sie zu Ihrem Jeedom, gehen Sie in der Verwaltung zur Registerkarte "Netzwerke" und aktivieren Sie "Jeedom DNS verwenden" und speichern Sie.

Jeedom startet den DNS und gibt Ihnen Ihre Jeedom-Zugriffs-URL

> **IMPORTANT**
>
> Sie können diese URL ändern, indem Sie zu Ihrer Marktprofilseite und dann zu meinen Jeedoms gehen. Achtung, jede Änderung dauert 24 Stunden, bevor sie wirksam wird

Dies ist Ihr Jeedom ist von außen in https zugänglich

## FAQ

> **Muss ich Ports an meiner Box öffnen?**
>
> Nein, es ist nicht erforderlich, einen Port von Ihrer Internetbox zu Ihrem Jeedom zu öffnen. Die Verbindung erfolgt in Richtung Jeedom -> VPN, es handelt sich also um eine ausgehende Verbindung (an den Ports 1194, 1195, 1996 und 1997) und nicht um eine eingehende Verbindung.

> **Warum Jeedom DNS meinen Zugriff darauf schützt**
>
> Mit Jeedom DNS können Sie einen sehr wichtigen HTTPS-Zugriff einrichten. Es garantiert, dass die Verbindung zwischen Ihrem Browser und Ihrem Jeedom verschlüsselt ist. Außerdem ist das gültige Zertifikat niemand in der Lage, sich als Ihr Jeedom auszugeben. Schließlich wird auch die VPN-Verbindung in Ihrem Jeedom und unseren Servern verschlüsselt.

> **Ich habe den internen Listening-Port meines Jeedom geändert und der Jeedom-DNS funktioniert nicht mehr**
>
> In der Tat funktioniert das Jeedom DNS nur, wenn Ihr Jeedom den lokalen Port 80 überwacht (alle anderen Ports auf der VPN-Schnittstelle sind beim Herstellen einer Verbindung geschlossen).. Dies wirft keine Sicherheitsbedenken auf, da das VPN einen verschlüsselten Tunnel erstellt. Selbst wenn sich der Datenfluss auf Port 80 befindet, wird er im VPN-Tunnel verschlüsselt.

> **Ich habe keine Anmeldeseite, kann mich aber nicht anmelden**
>
> Stellen Sie sicher, dass Sie die Standardanmeldeinformationen für jeedom (admin / admin) geändert haben und dass Ihr Benutzer nicht nur lokal eingeschränkt ist.

> **Meine Konfiguration ist gut, aber es ist unmöglich, eine Seite zu haben, die endlos umblättert**
>
> Wenn Ihre Konfiguration korrekt ist (Initialisierungssequenz im Protokoll openvpn_DNS_Jeedom abgeschlossen), Sie jedoch nicht die Anmeldeseite erhalten können, die zufällig mit der mobilen Anwendung funktioniert, und Sie sich in 4g oder am Ende der ADSL-Zeile befinden. In diesem Fall müssen Sie das Kontrollkästchen in der Jeedom-Netzwerkkonfiguration wie in 4g aktivieren und die DNS neu starten, damit Jeedom die MTU Ihrer Verbindung ändert, um die Größe der Pakete zu verringern.
