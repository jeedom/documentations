
# Plug-in BLEA (anúncio em Bluetooth)

Este plugin é um plugin que permite receber eventos de determinados dispositivos bluetooth (como NIU da Nodon e outros)

# Configuração do plugin

> **Dica**
>
> Para usar o plug-in, você deve fazer o download, instalar e ativá-lo como qualquer plug-in Jeedom.

Depois disso, você chegará a esta página :

![gestion](../images/gestion.jpg)

Nesta página, você tem pouco a fazer. É altamente recomendável iniciar a instalação das dependências (mesmo que pareçam OK)). Em seguida, ao final da atualização da página.

> **IMPORTANTE**
>
> A coisa mais importante aqui é selecionar o seu controlador Bluetooth

A outra opção disponível nesta página é : **Excluir automaticamente dispositivos excluídos**. Isso remove o equipamento Jeedom quando é excluído.

Você também pode verificar o status das dependências e reiniciá-las. Em caso de problemas com o plug-in, sempre reinicie as dependências, mesmo se estiver bem em caso de dúvida.

# O plugin

Rendez vous dans le menu Plugins &gt; Protocole Domotique pour retrouver le plugin.

![blea screenshot1](../images/blea_screenshot1.jpg)

Nesta página você pode ver os módulos já incluídos.

Na parte superior desta página, você tem vários botões.

- Botão de inclusão : esse botão permite colocar o Jeedom na inclusão.
- Botão de exclusão : este botão permite colocar o Jeedom em exclusão.
- Botão de configuração : este botão abre a janela de configuração do plug-in.
- Botão de saúde : este botão permite que você tenha uma visão geral da saúde de todos os seus módulos.

![blea screenshot2](../images/blea_screenshot2.jpg)

# Equipement

Quando você clica em um de seus módulos, você chega na página de configuração deste módulo. Como em qualquer lugar em Jeedom, você pode aqui no lado esquerdo :

- Dê um nome ao módulo.
- Ative / torne visível ou não.
- Escolha seu objeto pai.
- Atribuir uma categoria.
- Definir um atraso de monitoramento de comunicação para determinados módulos.
- Publicar um comentário.

No lado direito, você encontrará :

- O perfil do equipamento (geralmente detectado automaticamente se o módulo permitir).
- Escolha um modelo se, para esse perfil, vários modelos estiverem disponíveis.
- Veja o visual.

# Quais módulos

No momento, apenas determinados módulos específicos são reconhecidos.

## Caso NIU

O NIU é muito fácil de incluir, coloque o Jeedom em Inclusion e pressione o botão (simples assim).

Uma vez criado o NIU, você receberá este :

![blea screenshot3](../images/blea_screenshot3.jpg)

Você terá 4 pedidos :

![blea commands niu](../images/blea_commands_niu.jpg)

- ButtonId : fornece uma representação digital do tipo de suporte (ideal para cenários)
  - 01 : imprensa simples
  - 02 : suporte duplo
  - 03 : Pressão longa
  - 04 : relachement
- Botões : fornece uma representação textual do tipo de suporte
- Rssi : fornece o valor da força do sinal
- Bateria : dá o valor da bateria

## Outros módulos

Outros módulos podem ser incluídos, como farol NUT, pulseira fitbit, etc.

Eles permitirão a detecção de presença com detecção em um slot de 1 minuto.

Obviamente, muitos outros módulos serão adicionados.

# Configuração de antena remota

O Bluetooth tem um alcance relativamente limitado; é possível que parte da sua casa esteja fora do alcance da sua antena, dependendo da localização da sua caixa Jeedom.
Mas existe uma solução: é possível estender a rede instalando antenas adicionais.

O mais simples é usar um raspBerry pi (existente ou dedicado, dependendo do equipamento que você já possui). Vamos assumir aqui que o raspBerry já está instalado com um raspbian e que ssh e bluetooth estão ativados.

## Criou a antena

Você deve ir para a página do plug-in (Plugins> Home Automation Protocol) e clicar em "Antenas"

1) clique em "Adicionar"
2) escolha um nome
3) Digite o ip e a porta (22 por padrão)
4) Digite o nome do usuário ("pi" por padrão) e a senha
5) Insira o equipamento bluetooth no pi ("hci0" em uma instalação padrão)
6) Salvar

## Instalação do daemon

Se não houver erro e sua antena estiver bem criada no plug-in, instale agora as dependências necessárias e inicie o daemon na antena, que cuidará de estabelecer o link entre os dispositivos Bluetooth em alcance da antena e do plug-in (e, portanto, o Jeedom).

1) Clique no botão "Enviar arquivos", pode demorar um pouco, aguarde. Uma faixa verde confirmando o sucesso aparecerá, vermelha se houver algum problema. Nesse caso, verifique o log "Blea", verifique a configuração (ip, usuário, senha, ...)
2) Clique no botão "Iniciar dependências"". Novamente, pode levar tempo, aguarde. Uma faixa verde confirmará o sucesso ou vermelho, caso contrário (verifique o log do Blea)
3) Opcional, você pode recuperar manualmente o log de instalação das dependências clicando em "Log de Dependências" e verificar o log, um arquivo de log específico estará disponível na configuração do plugin.
4) Se tudo correr bem, você pode clicar em "Iniciar o daemon", após um minuto no máximo a data da última comunicação deve ser atualizada, isso significa que o daemon está se comunicando corretamente com o plug-in BLEA.
5) Última etapa opcional, mas recomendada: ativar o gerenciamento automático do daemon clicando no botão correspondente. Isso fará com que o plug-in tente reiniciar automaticamente o daemon remoto no caso de uma perda de conexão (útil se o seu pi remoto tiver sido desconectado temporariamente da rede elétrica ou reiniciado após as atualizações).


# Lista de equipamentos compatíveis

Alguns equipamentos como o lywsd03 precisam ser adicionados ao mihome pelo menos uma vez antes de estar ativo

Você pode encontrar [aqui](https://compatibility.jeedom.com/index.php?v=d&p=home&search=&plugin=blea) a lista de equipamentos compatíveis
