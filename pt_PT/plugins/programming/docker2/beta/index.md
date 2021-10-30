# Plug-in de gerenciamento do Docker

## Description

Este plugin permite que você instale e gerencie o docker diretamente do Jeedom

>**IMPORTANTE**
>
>Este plug-in não se destina a substituir um software do tipo Portainer dedicado, ele está lá apenas para iniciar comandos básicos e gerenciar (de uma forma básica) Docker

>**IMPORTANTE**
>
>Devido aos pré-requisitos para instalar o Docker, ele não é compatível com todos os hardwares (incluindo o Smart). Para que funcione, você precisa absolutamente de uma plataforma x86-64, rpi (3 ou 4) ou uma caixa Atlas

## Configuration

Uma vez que as dependências tenham sido instaladas, você deve ativar o "Docker 1" localmente (por enquanto, é possível adicionarmos a conexão em um docker remoto). Você também pode configurar o cron para a frequência de atualização, recomendamos que você coloque "*/ 5 * * * *"

## Equipement

Se você já tem Dockers no Jeedom, você pode clicar no botão sincronizar que recupera os dockers existentes e criar o equipamento Jeedom que corresponde.

Você também pode criar uma nova janela de encaixe da Jeedom, para isso basta criar um equipamento Jeedom.

### Configurações Gerais

- Nome do equipamento : Nome do seu equipamento em Jeedom
- Objeto pai : Objeto pai do equipamento
- Categoria : categoria de equipamento
- Ativar : ativar ou não o equipamento
- Visível : torna o equipamento visível no painel
- Host Docker : docker que opera o equipamento (apenas o local está disponível no momento)
- Nome do contêiner : nome do contêiner no docker. É muito importante que seja igual ao docker compose ou docker run se você passar pela criação através do Jeedom. Caso contrário, aquele não será capaz de conectar seu equipamento ao docker que ele cria
- Salve as montagens : diz ao Jeedom se ele deve salvar os arquivos do docker montados. Tenha cuidado para não ativá-lo em todas as janelas de encaixe, especialmente se seu tamanho for grande
- Modo criação : modo de criação pode ser manual ou "Jeedom Docker run" (criação usando um comando docker run feito por Jeedom), "Jeedom docker composer" (criação usando um docker composer feito por Jeedom)
- Ordem de criação : só aparece se você estiver no "Jeedom Docker run", o comando a ser dado é tudo o que vem depois de "docker run""
- Docker compõe : só aparece se você estiver no "Jeedom Docker composer", você deve colocar seu Docker composto aqui

### Action

- Salve a janela de encaixe : iniciar um backup do Docker, cuidado, o Jeedom mantém apenas o último backup (um backup é feito automaticamente ao mesmo tempo que o backup do Jeedom)
- Restaurar docker : permite que você restaure o último backup do Docker
- Baixar backup : permite que você baixe o último backup do Docker
- Enviar backup : permite que você retorne um backup do Docker (recupere de um backup do Jeedom em plug-ins / dockers / dados / backup por exemplo)
- Registros do Docker : exibir registros do Docker

### Informations

Exibe várias informações sobre o docker : 

- ID
- Commande
- Data de criação
- Taille
- Portas mapeadas para o host
- Redes
- Montage
- Image

## Commande

Aqui você tem os seguintes comandos : 

- Para iniciar
- Arreter
- Reiniciar
- Recreer (disponível apenas se a criação foi feita por Jeedom)
- Supprimer
- CPU : Uso da CPU do Docker
- Memória : Uso de memória Docker
- IO em : uso de disco de entrada
- IO out : uso de disco de saída
- Redes em : uso de rede de entrada
- Redes fora : uso de rede de saída
- Status : Docker State


## Assistant

Você também tem a possibilidade, após a criação de um dispositivo, de chamar um assistente (canto superior direito) que contém algum tipo de Docker (a lista irá crescer com o tempo) e fará apenas algumas perguntas para colocar em andamento seu Docker

## Code

Na página principal do plugin, você também tem um botão de código que o levará diretamente para um diretório Jeedom, é aqui que o aconselhamos a colocar os arquivos de configuração de seus Dockers (se necessário).