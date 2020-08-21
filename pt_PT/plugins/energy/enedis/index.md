# Plug-in Enedis Linky

Plugin permitindo a recuperação do consumo do medidor de comunicação *linky* consultando a conta do cliente *Enedis*. Como os dados não são disponibilizados em tempo real, o plugin recupera os dados de consumo de eletricidade da véspera de cada dia.

4 tipos de dados de consumo estão acessíveis :
- o **poder desenhado** por meia hora *(em kW)*.
>*A curva de consumo *(ou poder desenhado)* restaura a energia exigida por todos os seus dispositivos elétricos, em média, mais de meia hora.*

- o **consumo diário** *(em kWh)*.
- o **consumo mensal** *(em kWh)*.
- o **consumo anual** *(em kWh)*.

>**IMPORTANTE**      
>Il est nécessaire d'être en possession d'un compte-client Enedis : https://mon-compte-client.enedis.fr/.

# Configuration

## Configuração do plugin

O plugin **Enedis Linky** não requer nenhuma configuração específica e só deve ser ativado após a instalação.

Os dados são verificados a cada hora entre 4h e 22h e atualizados apenas se não estiverem disponíveis no Jeedom.

## Configuração do equipamento

Para acessar os diferentes equipamentos **Enedis Linky**, vá para o menu **Plugins → Energia → Enedis Linky**.

> **Saber**    
> O botão **acrescentar** permite que você adicione uma nova conta **Enedis Linky**.

Na página de equipamentos, preencha o'**Login** assim como o **Senha** da sua conta de cliente *Enedis* então clique no botão **Salvar**.

O plugin irá então verificar a conexão correta com o site *Enedis* e recuperar e inserir na história :
- **poder desenhado** : os 48 valores do dia anterior *(1 valor por meia hora)*,
- **consumo diário** : nos últimos 30 dias,
- **consumo mensal** : nos últimos 12 meses,
- **consumo anual** : nos últimos 3 anos.

>**NOTA**     
>Os dados são adicionados apenas se estiverem disponíveis em sua conta de cliente *Enedis*.
