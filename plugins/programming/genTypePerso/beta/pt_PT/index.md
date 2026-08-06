# Tipo genérico de plug-in

## Introduction

O plug-in de tipo genérico permite aos usuários criar seus próprios tipos genéricos no Jeedom a partir de um arquivo Excel, um arquivo JSON ou manualmente.

## Configuração do plug-in

É necessário inserir um sufixo de tipos genéricos na configuração do plugin (exemplo : MAJEEDOM)

![Configuração do plug-in](../images/configuration_plugin.png)

## Gerenciamento de plug-ins

![Gerenciamento de plug-ins](../images/gestion_plugin.png)

1. Importe arquivo JSON/XLSX : permite adicionar uma lista de tipos genéricos de um arquivo xslx

![Import XLSX](../images/import_xlsx.png)

ou um arquivo JSON

```json
{
    "PUMP_STATE_MAJEEDOM": {
        "name": "Estado da Bomba (MAJEEDOM)",
        "family": "BOMBA (MAJEEDOM)",
        "familyid": "BOMBA _MAJEEDOM",
        "type": "Info",
        "subType": "binary",
        "genTypePerso_type": true
    },
    "PUMP_ON_MAJEEDOM": {
        "name": "Bomba ligada (MAJEEDOM)",
        "family": "BOMBA (MAJEEDOM)",
        "familyid": "BOMBA _MAJEEDOM",
        "type": "Action",
        "subType": "other",
        "genTypePerso_type": true
    },
    "PUMP_OFF_MAJEEDOM": {
        "name": "Parada da bomba (MAJEEDOM)",
        "family": "BOMBA (MAJEEDOM)",
        "familyid": "BOMBA _MAJEEDOM",
        "type": "Action",
        "subType": "other",
        "genTypePerso_type": true
    }
}
```

2. Importar configuração em JSON : permite que você aplique uma lista de configurações a comandos com este tipo genérico. 
### A lista de configurações é a seguinte : 

#### Historique
- Historiser
- Modo de suavização

#### Cálculo e Arredondamento
- Arrondi

#### Unité
- Unité

#### Autres
- Repetir valores idênticos
- Min
- Max
- Widget do painel
- Widget móvel

### Exemplo JSON :

```json
{
    "ÁGUA_CONSUMPTION_2_MAJEEDOM": {
        "isHistorized": "0",
        "historizeMode": "none",
        "uniteValue": "°C"
    },
    "ÁGUA_CONSUMPTION_MAJEEDOM": {
        "isHistorized": "0",
        "historizeMode": "avg",
        "historizeRound": "5",
        "uniteValue": "kwh"
    },
    "GAS_CONSUMPTION_MAJEEDOM": {
        "isHistorized": "1",
        "historizeMode": "avg",
        "historizeRound": "10",
        "uniteValue": "m3"
    }
}
```

3. Exportar configuração em JSON : permite que você baixe a lista de configurações para importá-la para outra caixa, por exemplo.

4. Carregar arquivo JSON/XLSX : permite que você baixe a lista de arquivos XLSX/JSON importados anteriormente.

5. Exclua tudo : permite que você exclua todos os tipos genéricos específicos da caixa.


## Visão geral dos tipos genéricos associados a este plugin

![Apercu du plugin](../images/apercu_plugin.png)

1. Adicionar : permite que você adicione um tipo genérico manualmente.

2. Reverso : permite reverter a seleção de tipos genéricos na tabela.

3. Baixar : permite que você baixe os tipos genéricos selecionados ou todos (se não houver seleção).

4. Excluir : permite excluir o(s) tipo(s) genérico(s) selecionado(s)).

5. Editar : permite que você modifique o tipo genérico

## Aplicando o tipo genérico aos comandos

1. Insira a configuração desejada

![Configuration du tipo générique](../images/configuration_type_generique.png)

2. Selecione a lista de comandos para aplicar este tipo genérico a eles

![Liste des commandes](../images/liste_commandes.png)