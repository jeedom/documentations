# Plug-in de gerenciamento do Docker

# Description

Este plugin permite instalar e gerenciar e criar containers Docker diretamente do Jeedom.

>**IMPORTANTE**
>
>Este plugin não se destina a substituir software dedicado como o Portainer, ele é feito apenas para executar comandos simples e gerenciar o Docker enquanto permanece básico.

# Configuration

Depois que as dependências estiverem instaladas, você deve ativar o "Docker 1" localmente (no momento é possível adicionar a conexão a um docker remoto). Você também pode configurar o cron para a frequência de atualização, recomendamos que você coloque ``*/5 * * * *``.

# Equipements

Se você já possui Dockers no Jeedom, você pode clicar no botão "Sincronizar" para recuperar os dockers existentes e criar o equipamento Jeedom correspondente.

Você também pode, a partir do Jeedom, criar novos Dockers. Para isso, basta criar equipamentos Jeedom.

## Configurações Gerais

- **Nome do equipamento** : Nome do seu equipamento em Jeedom
- **Objeto pai** : Objeto pai do equipamento
- **Categoria** : categoria de equipamento
- **Ativar** : ativar ou não o equipamento
- **Visível** : torna o equipamento visível no painel
- **Host Docker** : docker que executa o equipamento *(apenas o quarto está disponível no momento)*
- **Nome do contêiner** : se você passar pela criação via Jeedom, é importante que o nome do container seja o mesmo mencionado em ``docker compose`` Onde ``docker run`` caso contrário, o contêiner Docker não pode ser conectado ao equipamento Jeedom.
- **Salve as montagens** : diz ao Jeedom se ele deve salvar as pastas montadas do contêiner do Docker. Cuidado para não ativar a opção em todos os Dockers, principalmente se o tamanho deles for grande.
- **Modo criação** : pode ser tanto ``Manuel``, é ``Jeedom Docker run`` *(criação usando um comando docker run feito por Jeedom)*, é ``Jeedom docker composer`` *(criação usando um compositor docker feito por Jeedom)*.
- **Ordem de criação** : só aparece se você estiver no modo ``Jeedom Docker run``. O comando para preencher diz respeito a tudo depois ``docker run``.
- **Docker compõe** : só aparece se você estiver no modo ``Jeedom Docker compõer``. você deve indicar aqui o conteúdo do seu ``Docker compõe``.

## Action

- **Salve a janela de encaixe** : execute um backup do Docker. Atenção Jeedom só guarda o último backup *(um backup é realizado automaticamente ao mesmo tempo que o backup do Jeedom)*
- **Restaurar docker** : permite que você restaure o último backup do Docker
- **Baixar backup** : permite que você baixe o último backup do Docker
- **Enviar backup** : permite enviar um backup do Docker * (recuperado de um backup do Jeedom no ``plugins/dockers/data/backup`` por exemplo)*
- **Registros do Docker** : mostrar logs do Docker

## Informations

Exibe várias informações sobre o contêiner do Docker :

- ID
- Commande
- Data de criação
- Taille
- Portas mapeadas de host
- Redes
- Montage
- Image

## Commandes

Aqui você tem acesso aos seguintes comandos :

- **Para iniciar**
- **Pare**
- **Reiniciar**
- **Recriar** *(somente se a criação foi feita por Jeedom)*
- **Deletar**
- **CPU** : Carga da CPU
- **Memória** : carga de memória
- **IO em** : gravação de disco
- **IO out** : leitura de disco
- **Redes em** : uso da rede na conexão de entrada
- **Redes fora** : uso de rede de saída
- **Status** : Docker State


# Assistant

Você tem a possibilidade, após a criação de um equipamento, chamar um **Assistente** *(botão superior direito)* que permitirá, através de algumas perguntas, gerar um container específico do Docker. A lista se expandirá com o tempo, mas já está disponível para a criação dos seguintes contêineres :

- **Página inicial do AdGuard**
- **Noded**
- **Guardião do cofre**
- **Guarda fio** *(wg-easy)*

# Code

Na página geral do plugin que agrupa todos os equipamentos Docker, o botão **Codificado** leva-o directamente para um directório Jeedom destinado a receber os ficheiros de configuração dos seus Dockers se necessário.
