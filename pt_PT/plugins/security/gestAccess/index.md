# Plug-in de Gerenciamento de Acesso

Este plug-in é usado para gerenciamento avançado de um sistema de acesso, usando as seguintes funcionalidades :

- Ativação e apresentação do plugin
- Criação e gerenciamento de portas
- Criação e gerenciamento de usuários
- Criação e gerenciamento de grupos
- Criação e gerenciamento de horários
- Pesquisa de histórico

>Todas as capturas de tela são tiradas sob um tema, se a aparência do seu Jeedom não for exatamente a mesma, não se preocupe.

## Ativação e apresentação do plug-in de gerenciamento de acesso

### Activation
Depois de instalar seu plugin, você deve ativá-lo.

>Se você usa o KNX, no grupo **Configuração** preencha os campos.

![activation](../images/activation.jpg)

Depois de ativar o plugin, você deverá vê-lo em  **Plugins** → **Segurança** → **gerenciamento de acesso**. Se não for esse o caso, não hesite em atualizar sua página (Ctrl + F5 ou Cmd + R).

![gestionAcces](../images/path.jpg)

### 1. Introdução

Na visualização padrão do plug-in, você pode adicionar uma bagagem, um usuário, um intervalo de tempo ou uma porta.

Abaixo, guias diferentes permitem que você encontre facilmente cada um dos elementos.
A barra de pesquisa ajudará a classificar em cada categoria para encontrar um item mais facilmente.

![gestionAcces](../images/base.jpg)

No **Dashboard** está disponível uma história dos últimos 20 eventos.

![gestionAcces](../images/dashbord.jpg)

## Criação e gerenciamento de portas </a>


#### Criação da porta

**Adicionar** criar uma porta.
O campo permite definir o nome da porta.

![gestionAcces](../images/nameEqu.jpg)

Na lista *Tipo*, selecionar **Porta / Leitor**.

![gestionAcces](../images/selEqu.jpg)

#### Configuração da porta

**Configuração équipement** permite configurar a porta.

![gestionAcces](../images/confReader.jpg)

#### Direitos do equipamento

**Direitos do equipamento** é usado para atribuir intervalos de tempo específicos à porta durante os quais os usuários não precisam de seus crachás para passar.

![gestionAcces](../images/rightReader.jpg)

**Adicionar des droits** permite selecionar um horário já existente para atribuí-lo à sua porta.
>Todos os usuários conectados ao fuso horário selecionado poderão passar por essa porta durante os horários definidos nela.

![gestionAcces](../images/scheduleReader.jpg)

![gestionAcces](../images/rightReader0.jpg)

O botão **-** remove o horário.

## Criação e gerenciamento de usuários </a>
---

#### Criação de usuário

**Adicionar** usado para criar um usuário.
O campo permite definir o nome do usuário.

![gestionAcces](../images/nameEqu.jpg)

Na lista *Tipo*, indicar **Usuário**.

![gestionAcces](../images/selUser.jpg)

#### Configuração do usuário

**Configuração utilisateur** é usado para configurar. 

![gestionAcces](../images/confUser.jpg)

Vários campos são personalizáveis.
Você pode indicar :

- um ID do usuário (correspondente aos números do crachá do usuário),
- o nome,
- o primeiro nome,
- foto do perfil do usuário,
- a data de início, que é o primeiro dia do seu novo usuário,
- a data de término, que é o último dia do seu novo usuário,
- status do usuário :
    - Em serviço _ (status padrão) _,
    - Volé,
    - Perdu,
- Quatro campos nos quais você pode adicionar notas.

O botão **Copiar** leva o valor de **Nome de usuário**, do **Nome do usuário** e de'**ID do usuário** atribuí-los a **Nome de equipamentos**, que você pode ver na guia **Equipamento**.

O botão **Enviar** permite transmitir a foto do perfil que você deseja para o usuário.

![gestionAccess](../images/imgUser.jpg)

O botão **Baixar** carregar foto do usuário. 
O arquivo será nomeado de acordo com os valores indicados nos campos **Nome de usuário** e **Nome do usuário** (separado por um traço).

#### Configurando grupos para um usuário

 **Configuração des groupes** usado para atribuir seu usuário a um grupo.
>Marque uma caixa para selecionar o grupo correspondente.

![gestionAccess](../images/confGUser.jpg)

#### Direitos do usuário

A guia **Direitos do usuário** usado para atribuir direitos específicos ao usuário.

![gestionAccess](../images/rightUser.jpg)

**Adicionar des droits**, permite selecionar uma porta e um intervalo de tempo que será atribuído ao usuário selecionado. 
Duas opções estão disponíveis **Recusar** e **Aceitar** para ação.

![gestionAccess](../images/addRightUser.jpg)

Os novos direitos atribuídos são visíveis na guia **Direitos do usuário**. O botão **-** remove direitos.

![gestionAccess](../images/rightUser0.jpg)

## Criação e gerenciamento de grupos

#### Criação de um grupo
Use o botão **Adicionar** criar um grupo.
O campo permite definir o nome do grupo.

![gestionAccess](../images/nameEqu.jpg)

Na lista de tipos, selecione **Grupo**.

![gestionAccess](../images/selGroup.jpg)

#### Direitos de um grupo

A guia **Direitos do grupo** usado para atribuir direitos específicos ao seu grupo.

**Adicionar des droits**, permite selecionar uma porta e um intervalo de tempo que serão atribuídos ao grupo selecionado.
Duas opções estão disponíveis **Recusar** e **Aceitar** para ação.

![gestionAccess](../images/addRightGroup.jpg)

Na aba **Direitos do grupo** os novos direitos afetados serão visíveis. O botão **-** remove direitos.

![gestionAccess](../images/rightGroup.jpg)

## Criação e gerenciamento de horários

#### Criação de um horário
Use o botão **Adicionar** para criar um intervalo de tempo.
O campo permite definir o nome do intervalo de tempo.

![gestionAccess](../images/nameEqu.jpg)

Na lista de tipos, selecione **Intervalo de tempo**.

![gestionAccess](../images/selTimelapse.jpg)

#### Configuração de intervalo de tempo

A guia **Configuração plage horaire** permite configurar um novo horário. 

![gestionAccess](../images/confTimelapse.jpg)

>**Dicas :** 
> - Para configurar um horário, clique nas caixas que lhe interessam de acordo com o dia e a hora. 
Uma caixa fica azul quando está ativa.
 Por padrão, as caixas estão ativas todos os dias, das 10:30 às 19:00. 
 Para desativar uma caixa, clique nela com o botão direito. Isso ficará transparente.
> - Por padrão, os feriados são considerados, desmarque as caixas azuis na linha **"Feriados"**.
> - Deslize a barra de rolagem para a direita na parte inferior da tabela para ver mais agendas.


## Pesquisa de histórico

**Etapa importante :** Para acessar esta parte, é importante realizar um ajuste a montante. Vá para **Plugins** → **Gerenciamento de plug-in**, Dans **Meus plugins**, clique em **Gerenciamento de acesso**.

![gestionAccess](../images/gestPlug.jpg)

No jogo **Painel** carrapato **Painel de área de trabalho vista** depois clique em **Salvar**.

![gestionAccess](../images/confPlug.jpg)

Após a alteração, uma nova seção no menu **Home** está disponível.
No entanto, se não aparecer, atualize sua página.

![gestionAccess](../images/newPlug.jpg)

**Home** → **gerenciamento de acesso** para acessar a pesquisa avançada. A visualização padrão mostra os últimos 20 eventos registrados.

![gestionAccess](../images/search.jpg)

A parte esquerda permite determinar os critérios de pesquisa.

 - **Lista de usuários :** Nomes dos usuários pesquisados. Você pode selecionar vários usuários.
 - **Lista de equipamentos :** Nomes dos equipamentos procurados. Você pode selecionar vários dispositivos.
 - **Lista de horários :** Nomes de faixas pesquisados. Você pode selecionar vários horários.
 - **Data de início :** Digite uma data e hora de início para sua pesquisa.
 - **Data final** Indique uma data de término e um horário para sua pesquisa.
 - **Lista de grupos** Nomes de grupos procurados. Você pode selecionar vários grupos.
 - **Lista de ações** Selecione o resultado de uma ação, você pode escolher entre : **Todos**, **Recusar** e **Autorização**.

>Na parte superior da tabela, abaixo de cada título de coluna, os diferentes campos permitem realizar uma segunda pesquisa que classificará os resultados.
