# Plugin Greenmomit

Plug-in para comunicar e controlar seu termostato Green Momit

# Descrição 

## Descrição de marketing

O termostato inteligente Momit ST permite gerenciar o conforto da sua casa, onde quer que você esteja, a partir de um smartphone, tablet ou computador, ajudando a reduzir sua conta de energia em 20%.

![greenmomit](../images/greenmomit.jpg)

Alimentado pela rede elétrica, o termostato se conecta à caldeira através de um contato de comutação sem potencial. Conectado à sua rede Wi-Fi doméstica, você pode acessar seu sistema de aquecimento a partir de qualquer computador, smartphone ou tablet. O termostato inteligente Momit ST se destaca de seus concorrentes, oferecendo vários recursos inovadores :

-   Moniteur
    -   Salve todos os seus dados de consumo de energia.
-   Calendrier
    -   Permite ajustar facilmente seu termostato.
-   Presença
    -   Possui um sensor que reduz o consumo excessivo de energia quando você estiver ausente. O aquecimento pode até ser desligado automaticamente.
-   Controlar
    -   Permite que você gerencie o conforto de sua acomodação de qualquer lugar e a qualquer hora do seu smartphone, tablet ou PC.
-   Temps
    -   Estime o tempo médio que cada acomodação leva para atingir a temperatura indicada, otimizando o período de antecipação necessário para atingir a temperatura certa.
-   Economies
    -   Indicador visual exibido quando são feitas economias.
-   Vacances
    -   Durante o período de férias, o termostato inteligente Momit interrompe o aprendizado.
    -   Ao contrário dos termostatos tradicionais, o termostato inteligente Momit ST possui um design elegante e inovador que permitirá a integração harmoniosa em sua decoração. Com acabamento em vidro e tela sensível ao toque.
    -   Com um aplicativo gratuito (iOS e Android), seu Smartphone e uma conexão simples à Internet, você pode acessar todas as funções do termostato inteligente Momit ST em tempo real, de qualquer lugar.

**FUNÇÕES**

-   Termostato IP WiFi
-   Programável e remotamente controlável
-   Compatível com sistemas de caldeira convencionais ou combinados
-   Substitui qualquer termostato de contato seco padrão (relé)
-   Tela de toque capacitivo
-   Diferentes sensores integrados (temperatura, umidade, brilho, proximidade)
-   Programação de programação
-   Função de férias
-   Design elegante e inovador
-   Acabamento em vidro
-   Diferentes modelos de exibição disponíveis
-   Aplicativo grátis para iPhone
-   Aplicativo gratuito para Android
-   API disponível a pedido do Suporte Momit Verde

**RECURSOS TÉCNICOS**

-   Alimento : 230 V CA 50..60 Hz
-   Sair : Sem potencial
-   Potência máxima :
    -   5 A para carga resistiva
    -   2 A para uma carga indutiva (cos † = 0,4)
-   WiFi : IEEE 802.11 b / g
-   Sensores :
    -   Tela de toque capacitivo
    -   Sensor de temperatura NTC 100k a 25 ° C
    -   Sensor de umidade 0-99%
    -   Sensor de brilho
    -   Sensor de proximidade até 5 m
-   Proteção IP : IP20
-   Dimensões : 94 x 94 x 32 mm
-   Peso : 225g
-   Padrões :
    -   ETSI EN 300 328 V1.7.1 (2006-10)
    -   ETSI-EN 301 489-1 V1.9.2 (2011-09)
    -   ETSI EN 301 489-17 V2.2.1 (2012-09)
    -   EN 62479:2010
    -   EN 60730-2-9; EN 60730-1

# Configuração 

## Instale o plugin 

Prossiga com a instalação do plugin

![greenmomit Install 1](../images/greenmomit_Install_1.png)

Clique em "Geral" e depois em Plugins

![greenmomit Install 2](../images/greenmomit_Install_2.png)

Clique no ícone "Market" para acessar o conteúdo dos plugins disponíveis no Jeedom Market.

![greenmomit Install 3](../images/greenmomit_Install_3.png)

Navegue no mercado até a categoria "Conforto" ou use a caixa de pesquisa com a palavra-chave "Momento verde"". Clique no plugin.

![greenmomit Install 4](../images/greenmomit_Install_4.png)

Você poderá instalar o plugin em sua versão ![comum 1](../images/commun_1.png) estável ou ![comum 2](../images/commun_2.png) Beta. A versão estável é recomendada para a maioria dos usuários.

## Configuração do plugin 

Configure o plugin. Vous aurez besoin de vos identifiants qui vous permettent d'accéder au portail Green Momit (<https://st.greenmomit.com/>) Le site du constructeur (<http://greenmomit.com/>) 

Avant de configurer le plugin, vous devez valider que votre compte est fonctionnel sur le portail Green Momit. (<https://st.greenmomit.com/>)

![greenmomit ST](../images/greenmomit_ST.png)

E peça ao suporte do Green Momit

-   API identificador único 
-   PIN API

enviando um email para ( <support@greenmomit.es>) ou
(( <support@momit.zendesk.com> ).


![greenmomit Config Plugin](../images/greenmomit_Config_Plugin.png)

![comum 1](../images/commun_1.png) Nom d'utilisateur : spécifier l'adresse email utilisée pour accéder au site <https://st.greenmomit.com/>  

![comum 2](../images/commun_2.png)

Senha : sua senha associada 

![commun 3](../images/commun_3.png) 

API identificador único : recebida por e-mail após uma solicitação do suporte do Green Momit

![commun 4](../images/commun_4.png) 

PIN API : idem Em seguida, clique em "Salvar" e "Sincronize seu equipamento"

## Configuração de plugins

Configure o plugin

![greenmomit Config 1](../images/greenmomit_Config_1.png)

Clique em "Plugins" ⇒ "Bem-estar" ⇒ "Green Momit"

Seu termostato está configurado, tudo o que você precisa fazer é :

-   Especificar objeto pai,
-   l'activer,
-   e torná-lo visível.

![greenmomit Config 3](../images/greenmomit_Config_3.png)

A opção : "O controle do termostato não é feito pela Jeedom ", deixa a prioridade do aplicativo Green Momit sobre a Jeedom.

##  Configurar o widget

![greenmomit Widget 1](../images/greenmomit_Widget_1.png)Le widget du thermostat est déjà en place et disponible dans l'objet parent définit dans la configuration précédente.

![greenmomit Widget 2](../images/greenmomit_Widget_2.png)

![comum 1](../images/commun_1.png)Température actuelle (sonde du thermostat). 

![comum 2](../images/commun_2.png)Hydrométrie actuelle (sonde du thermostat).

![commun 3](../images/commun_3.png)Eteint le thermostat si le thermostat détecte que c'est la nuit.

![commun 4](../images/commun_4.png)Le thermostat apprend tout seul vos habitudes.

![commun 5](../images/commun_5.png)Le thermostat s'arrête automatiquement s'il ne détecte pas de présence.  

![commun 6](../images/commun_6.png)Mettre le thermostat en mode Manuel ou Automatique.  

![commun 7](../images/commun_7.png)Etat du thermostat.  

![commun 8](../images/commun_8.png)Consigne du thermostat. Modification de la consigne avec la roue.  

![commun 9](../images/commun_9.png)Rafraîchir l'état. En survolant, affichage de la dernière synchronisation. 

