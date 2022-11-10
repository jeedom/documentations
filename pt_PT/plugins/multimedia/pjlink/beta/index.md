# Plugin PJLink

O plugin **PJLink** permite o controle de projetores de vídeo compatíveis com o protocolo *PJLink* para se comunicar na rede local.

A lista não exaustiva de marcas compatíveis com o protocolo *PJLink* é : **BenQ, Canon, Casio, Epson, Fujifilm, Hitachi, InFocus, Maxell, Mitsubishi, Nec, Panasconic, Ricoh, Sharp, Sky, Sony...**

![PJLink Compatible Brands](../images/compatibleBrands.png)

Para obter mais informações sobre os modelos que suportam o protocolo *PJLink*, por favor consulte [esta lista classificada por ano de marketing](https://pjlink.jbmia.or.jp/english/list.html){:target = "\_ blank"} ou a sua documentação de hardware.

> **Informaçao importante**    
> O equipamento compatível divide-se em 2 classes, dependendo do seu equipamento você não terá acesso às mesmas informações :
> * **Classe 1** : compatível com funções básicas.
> * **Classe 2** : compatível com funções básicas e avançadas.


# Configuration

## Configuração do plugin

O plugin **PJLink** não requer nenhuma configuração específica e só deve ser ativado após a instalação.

![Configuração do plugin PJLink](../images/pjlink0.png)

O plugin usa um *Cron5* para atualizar os dados a cada 5 minutos.

## Configuração do equipamento

Para acessar os diferentes equipamentos **PJLink**, vá para o menu **Plugins → Multimídia → PJLink**.

![Configuração do plugin PJLink](../images/pjlink1.png)

> **Saber**    
> O botão **acrescentar** permite que você adicione novos equipamentos **PJLink**.

Na página de equipamentos, preencha o'**Endereço IP** equipamento *(obligatoire)* assim como o **Senha** se uma senha foi definida no hardware *(facultatif)*.    
O **Porta** usado por padrão pelo protocolo é o **4352**. Para ser modificado apenas com pleno conhecimento dos fatos.    
O **Tempo limite** é definido por padrão para **5** segundos. Você pode aumentar este atraso se o seu hardware demorar mais para responder.

Marque a caixa **Ativar** e clique no botão **Salvar**. O plugin irá então criar os comandos correspondentes ao seu material e recuperar as informações disponíveis.

**Classe 1 :**
![Configuração do plugin PJLink](../images/pjlink2.png)

**Classe 2 :**
![Configuração do plugin PJLink](../images/pjlink3.png)

# Template de widget

O visual do equipamento **PJLink** é refinado e relevante. Informações diferentes são exibidas ao passar o mouse sobre cada ícone.

Você não terá acesso aos mesmos comandos dependendo das possibilidades oferecidas pelo seu equipamento.

## Classe 1

![Configuração do plugin PJLink](../images/pjlink4.png)

* ![Configuração do plugin PJLink](../images/pjlink6.png) : Verde, este ícone indica que nenhum erro está em andamento. Se for detectado um erro, o ícone ficará laranja e o conteúdo do erro será indicado ao passar o mouse ou nas últimas informações diretamente no dispositivo.
* ![Configuração do plugin PJLink](../images/pjlink7.png) : Exibido se o som estiver mudo *(Áudio mudo)*.
* ![Configuração do plugin PJLink](../images/pjlink8.png) : Exibido se o vídeo for cortado *(Vídeo sem áudio)*.
* O ícone do projetor de vídeo muda de cor dependendo do estado do equipamento :
  * **Verde** : O projetor de vídeo está ligado.
  * **Vermelho** : O projetor de vídeo está desligado.
  * **Azul** : O projetor de vídeo está esfriando.
  * **Laranja** : O projetor de vídeo está esquentando.
* **Entrada de vídeo** : Seleciona a entrada de vídeo *(input)*.
* **Poder** : Ligar / desligar o equipamento.
* **Áudio mudo** : Para parar ou retomar a transmissão de som.
* **Vídeo sem áudio** : Para parar ou retomar o streaming de vídeo.

## Classe 2

![Configuração do plugin PJLink](../images/pjlink5.png)

Todos os controles de classe 1 são acessíveis e também :

* ![Configuração do plugin PJLink](../images/pjlink9.png) : Aparece se o áudio e o vídeo estiverem congelados *(Freeze)*.
* **Congelar** : Congelar / descongelar vídeo e áudio.
* **Volume do alto-falante** : O botão "**-**" reduz o volume do som e "**+**" para aumentá-lo.
* **Volume do microfone** : O botão "**-**" diminui o volume do microfone e "**+**" para aumentá-lo.
