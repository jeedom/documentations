# Plugin Bestway

Plugin que permite controlar o Bestway Lazy Spa Milan através do Jeedom.

Gerencia automaticamente a filtragem e sua duração de acordo com a temperatura da água

## Configuração 

Basta colocar suas credenciais Bestway

## Compatibilité

Você pode encontrar [aqui](https://compatibility.jeedom.com/index.php?v=d&p=home&plugin=bestway) a lista de módulos compatíveis com o plugin

## Filtração automática

Se você marcar a caixa de gerenciamento de filtração automática, então o próprio plugin irá calcular no início de cada hora o tempo de filtração necessário de acordo com a temperatura média da água na hora anterior (com base na fórmula tempo de filtração em horas = temperatura da água / 2)