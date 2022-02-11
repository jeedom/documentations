# Plug-in do Google Agenda

O plugin **Calendário do Google** permite que você recupere eventos de seus calendários do Google. Também pode desencadear uma interação durante um evento.

> **IMPORTANTE**
>
> O Google agora impõe uma reconexão a cada 7 dias por motivos de segurança.

# Configuration

## Crie um dispositivo do Google Agenda

No lado do Jeedom, você precisa criar um dispositivo do Google Agenda e recuperar o URL de redirecionamento.

> **IMPORTANTE**
>
> O url para acesso externo ao seu Jeedom deve estar absolutamente em https, o Google não permite conexões não criptografadas.

## Crie uma conta de desenvolvedor do Google

Você precisa criar uma conta de desenvolvedor com o Google para acessar a API. Façam, [Siga este link](https://console.developers.google.com/apis/credentials), Crie um novo projeto se necessário e clique em "**+ Criar identificadores**" e selecione "**ID do cliente Oauth**".     
 Então escolha "**Aplicativo da web**" no menu suspenso, em seguida, adicione o'"*URL de retorno*" fornecido na página de equipamentos Jeedom em "**URIs de redirecionamento permitidos**".

> **IMPORTANTE**
>
>Ao inserir "URIs de redirecionamento autorizados", você deve prestar atenção :
> - autorizou o domínio antes [aqui](https://console.developers.google.com/apis/credentials/consent). O Google sinalizará normalmente
> - pressione a tecla Enter após copiar / colar o URL de redirecionamento do jeedom para a página de configuração do Google (*pressionar o botão Salvar diretamente após a cópia / colar sem pressionar a tecla Enter não funciona!*)     

Recolher o'**Identificação do Cliente**' e o **código secreto do cliente** (você precisará inseri-los no equipamento lateral Jeedom)

Você deve então adicionar a API do Google Agenda acessando [aqui](https://console.developers.google.com/apis/dashboard). Clique em "**+ Ativar APIs e serviços**" em seguida, pesquise "API do Google Agenda" e adicione o.

> **Saber**
>
>O procedimento acima pode mudar com o tempo. Recomendamos que você siga as instruções fornecidas no site.

## Vincule a conta do Google ao jeedom

Copie **ID do cliente** e a **Chave secreta** Jeedom ao lado e clique no botão "**Vincular**". Não se esqueça de guardar o equipamento.

>**IMPORTANTE**
>
>Atenção para vincular as duas contas (Google e Jeedom), é absolutamente necessário conectar-se ao Jeedom por seu URL externo (você pode vê-lo nas redes de peças Jeedom do centro de configuração)

# Commandes

O plugin inclui apenas comandos que fornecem o título dos eventos.

# Interaction

Jeedom pode interpretar o título de um evento como uma interação e, portanto, acionar uma ação. Para fazer isso, você deve ativar as interações na página de configuração do equipamento.

Você também pode indicar um comando de retorno pelo qual jeedom responderá após a execução da interação.    
