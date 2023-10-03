# Plugin Caldav

# Description

O plugin **Agenda Caldav** permite que você recupere eventos de um calendário caldav. Ele gerencia vários eventos, separando-os com uma vírgula (``,``). Resta testar a presença do evento em um cenário para desencadear uma ação (nos cenários há o operador ``~`` onde ``matches`` para descobrir se uma sequência de caracteres contém outro).

# Configuration

Para configurá-lo é muito simples, basta criar um dispositivo por diário e depois associá-lo aos padrões de isolamento de eventos.

![caldav config1](../images/caldav_config1.jpg)

Você deve inserir um URL, uma conta e uma senha para acessar a agenda. Depois de salvo, você pode escolher a agenda que deseja usar.

Na caixa de padrões, é possível colocar um padrão para filtrar / extrair um evento.

Padrão de exemplo : ``!^Arrière-cuisine (.*)$!``

Se o evento for "Escultura 15", o valor devolvido será 15. Isso torna possível gerenciar temperaturas para programação.

http://perldoc.perl.org/perlre.html

>**IMPORTANTE**
>
>O nome do calendário só pode ser escolhido após salvar o equipamento com as informações corretas. Pode demorar um pouco para aparecer.

## Configuração com Webdav em Synology

Você deve primeiro configurar o pacote Webdav. Você tem que saber se deseja usar http ou https (eu recomendo https). Uma vez ativado, observe a porta ativada para https (5006 por padrão).

![caldav synology1](../images/caldav_synology1.jpg)

Você tem que saber onde os calendários serão armazenados :

![caldav synology2](../images/caldav_synology2.jpg)

Portanto, será necessário especificar no jeedom como segue :

![caldav synology3](../images/caldav_synology3.jpg)

## Configuração com Webdav no Framagenda

Você deve primeiro criar uma conta no Framagenda. Il faut ensuite aller sur https://framagenda.org/index.php/apps/calendar/.

![caldav framagenda1](../images/caldav_framagenda1.jpg)

Você deve recuperar o URL do Framagenda que é usado para a configuração do plugin.

# FAQ

>**Nenhum evento data antes**
>Você selecionou e salvou uma agenda ?

>**Podemos ter eventos futuros**
>Não, nãoépossível, o plugin fornece apenas os eventos actuais.

>**Com que frequência as informações são atualizadas ?**
>Por padrão, é a cada minuto.
