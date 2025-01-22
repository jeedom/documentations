# BacnetManager

>**IMPORTANTE**
>
>. 


# Description

.





# Configuração do plug-in

Depois de baixar o plugin, você deve primeiro ativá-lo, como qualquer plugin Jeedom :

![config](../images/BacnetManagerConfig.png)

Então, você deve iniciar a instalação das dependências (mesmo que elas apareçam OK) :

![dependances](../images/BacnetManagerDep.png)

Finalmente, inicie o daemon :

![demon](../images/BacnetManagerDemon.png)


Rien n'est à modifier dans le champ « Port socket interne » de la section « Configuration ».

![socket](../images/BacnetManagerConfig.png)


.




# Como o plug-in funciona ?




>**IMPORTANTE**
>
>Seu equipamento BACNET deve estar na mesma rede que seu Jeedom para ser detectado por ele.


Por padrão, um dispositivo jeeBacnetManager é criado; é este equipamento 'bacnet' que será visto pelo seu supervisor Bacnet na rede

Você pode configurar seu deviceId na configuração do plugin

![menu](../images/BacnetManagerConfig.png)


Para adicionar comandos Jeedom ao seu jeeBacnetManager, clique em Adicionar Comandos ao Servidor :

![accueil](../images/BacnetManagerAccueil.png)


Um modal será aberto, onde aparecerão todos os comandos do tipo Info presentes nos diferentes plugins do seu jeedom.


>**IMPORTANTE**
>
>Seu equipamento deve estar Ativo para que os comandos sejam detectados neste modal.


Deve também dar um nome à encomenda, preenchendo o campo previsto para o efeito. 
Não coloque espaços no nome do comando

![syntaxCmds](../images/BacnetManagersyntax.png)

Tudo o que você precisa fazer é procurar os que deseja e validar.

>**IMPORTANTE**
>
>

![accueil](../images/BacnetManagerModale.png)




.

 :

![accueil](../images/BacnetManagerConfigCmds.png)

 :

- ' : .
- ' :  : . ). 


#### Configurações de pedido


1. **Escolha da Ação de Comando** : Selecione um comando de ação com base no plugin escolhido.
2. **Valor Inicial** : Defina um valor inicial para inicializar o ponto Bacnet pela primeira vez.
3. **Usar valor Bacnet** : Marque esta opção para usar o valor Bacnet. Caso esta opção não esteja marcada, deverá preencher o campo “Valor a enviar para a ação”".

Ao executar o cron, o sistema irá verificar se houve alteração no valor do ponto Bacnet (escrevendo). Nesse ponto, ele enviará este valor Bacnet ou o valor inserido em "Enviar para Ação" para o comando Ação Parametrizada.






Para atualizar os valores você precisa configurar o cron na configuração do plugin.

![accueil](../images/BacnetManagerConfig.png)



# Configuração de pedidos :


Para alterar a unidade dos pontos bacnet, e vê-los aparecer na rede, deve-se escolher a unidade no menu Selecionar previsto para esse fim nos controles.
Os comandos Jeedom do tipo 'string' não precisam selecionar unidades.


Na rede bacnet, as instâncias dos pontos usarão os nomes dos comandos especificados no campo no modal Adições de comandos.


>**IMPORTANTE**
>
>


![accueil](../images/BacnetManagerAccueil.png)




# Importe/exporte o jeeBacnetManager (em breve)):


![accueil](../images/BacnetManagerAccueil.png)

Para evitar necessidades, 2 opções são fornecidas : 


- Exportar dispositivo :

Ao clicar neste botão, ele fará o download de um arquivo Json contendo a configuração do dispositivo, bem como seus comandos.


- Importar dispositivo :

Ao clicar neste botão, você pode importar o arquivo json de configuração do jeeBacnetManager que você teria baixado, para usar os comandos que foram configurados neste

# ANNEXE:

# Lista de Unidades de Engenharia BACnet)

| Unidades de engenharia               |
|---------------------------------|
| ampereSegundos                   |
| ampereSquareHours               |
| amperesQuadradoMetros              |
| amperes                         |
| amperesPorMetro                 |
| amperesPerSquareMeter           |
| bares                            |
| bequerels                      |
| btus                            |
| btusPorHora                     |
| btusPorPound                    |
| tusPerPoundDryAir               |
| candela                        |
| candelasPerSquareMeter          |
| centímetros                     |
| centímetrosDeMercúrio            |
| centímetrosDeÁgua              |
| pés cúbicos                       |
| pés cúbicos por dia                 |
| pés cúbicos por hora                |
| pés cúbicos por minuto              |
| pés cúbicos por segundo              |
| Metros cúbicos                     |
| metros cúbicos por dia               |
| metros cúbicos por hora              |
| metros cúbicos por minuto            |
| metros cúbicos por segundo            |
| moeda1                       |
| moeda10                      |
| moeda2                       |
| moeda3                       |
| moeda4                       |
| moeda5                       |
| moeda6                       |
| moeda7                       |
| moeda8                       |
| moeda9                       |
| ciclosPorHora                   |
| ciclosPerMinute                 |
| dias                            |
| decibéis                        |
| decibéisA                       |
| decibéisMillivolt               |
| decibéisVolt                    |
| grauDiasCelsius               |
| grauDiasFahrenheit            |
| grausAngular                  |
| graus Celsius                  |
| grausCelsiusPorHora           |
| grausCelsiusPorMinuto         |
| graus Fahrenheit               |
| grausFahrenheitPorHora        |
| grausFahrenheitPorMinuto      |
| grausKelvin                   |
| grausKelvinPorHora            |
| grausKelvinPorMinuto          |
| grausFase                    |
| deltaGrausFahrenheit          |
| deltaGrausKelvin              |
| farads                          |
| pés                            |
| pésPorMinuto                   |
| pésPerSecond                   |
| velas                     |
| gramas                           |
| gramasDeÁguaPorQuilogramaAr Seco   |
| gramasPorCúbicoCentímetro         |
| gramasPerCubicMeter              |
| gramasPorGram                    |
| gramasPor quilograma                |
| gramasPorLitro                   |
| gramasPorMilitro              |
| gramasPorMinuto                  |
| gramasPorSegundo                  |
| gramasPerSquareMeter             |
| cinza                            |
| hectopascais                    |
| Henrique                          |
| hertz                           |
| cavalos de potência                      |
| horas                           |
| centésimosSegundos               |
| imperialGalões                 |
| imperialGalõesPorMinuto        |
| polegadas                          |
| polegadasOfMercury                 |
| polegadasOfWater                   |
| jouleSegundos                    |
| joules                          |
| joulesPerCubicMeter             |
| joulesPerDegreeKelvin           |
| joulesPorhoras                  |
| joulesPorKilogramaGrauKelvin   |
| joulesPorKilogramaSecoAir         |
| quiloBtus                        |
| quiloBtusPorHora                 |
| quilobecquerels                  |
| quilogramas                       |
| quilogramasPorCubicMeter          |
| quilogramas por hora                |
| quilogramasPorquilograma            |
| quilogramas por minuto              |
| quilogramas por segundo              |
| quilohertz                       |
| quilohms                         |
| quilojoules                      |
| quilojoulesPerDegreeKelvin       |
| quilojoulesPor quilograma           |
| quilojoulesPorquilogramaSecoAir     |
| quilômetros                      |
| quilômetrosPorhora               |
| quilopascais                     |
| quilovoltAmpereHoras             |
| quilovoltAmpereHorasReativo     |
| quilovoltAmperes                 |
| quilovoltAmperesReativo         |
| quilovolts                       |
| quilowatt-horas                   |
| quilowattHoursPerSquareFoot      |
| quilowattHoursPerSquareMeter     |
| quilowattHorasReativo           |
| quilowatts                       |
| litros                          |
| litrosPorHora                   |
| litrosPorMinuto                 |
| litrosPorSegundo                 |
| lúmens                          |
| luxos                           |
| megaBtus                        |
| megabecquerels                  |
| megahertz                       |
| megajoules                      |
| megajoulesPerDegreeKelvin       |
| megajoulesPorquilogramaSecoAir     |
| megajoulesPerSquareFoot         |
| megajoulesPerSquareMeter        |
| megaAVoltAmpereHoras             |
| megaAVoltAmpereHorasReativo     |
| megaAVoltAmperes                 |
| megaAVoltAmperesReativo         |
| megaAVolts                       |
| megawatthoras                   |
| megawattHorasReativo           |
| megawatts                       |
| megohms                         |
| metros                          |
| metrosPorhora                   |
| metrosPorMinuto                 |
| metrosPorSegundo                 |
| metrosPerSecondPerSecond        |
| microSiemens                    |
| microgramasPerCubicMeter         |
| microgramasPorLitro              |
| microcinza                       |
| micrômetros                     |
| microsieverts                   |
| microsievertsPorhora            |
| milhasPorhora                    |
| miliamperes                    |
| milibares                       |
| miligramas                      |
| miligramasPerCubicMeter         |
| miligramasPorgrama               |
| miligramasPor quilograma           |
| miligramasPorLitro              |
| miligray                       |
| mililitros                     |
| mililitros por segundo            |
| milímetros                     |
| milímetros de Mercúrio            |
| milímetros de água              |
| milímetrosPorMinuto            |
| milímetrosPorSegundo            |
| miliohms                       |
| milissegundos                    |
| milisiemens                    |
| milisieverts                   |
| milivolts                      |
| miliwatts                      |
| minutos                         |
| minutosPorDegreeKelvin          |
| meses                          |
| nanogramasPerCubicMeter          |
| nefelométricoTurbidityUnit      |
| Newton                          |
| newtonMetros                    |
| newtonSegundos                   |
| newtonsPerMeter                 |
| noUnitsohmMeterPerSquareMeter   |
| ohm Metros                       |
| ohms                            |
| pH                              |
| partesPorBillion                 |
| ações por milhão                 |
| pascalSegundos                   |
| pascais                         |
| por hora                         |
| porMilha                        |
| por minuto                       |
| por segundo                       |
| por cento                         |
| porcentagemObscuraçãoPerFoot       |
| porcentagemObscurationPerMeter      |
| porcentagem por segundo                |
| porcentagem de umidade relativa         |
| librasForcePerSquareInch        |
| librasMassa                      |
| librasMassaPorHora               |
| librasMassaPorMinuto             |
| librasMassPerSecond             |
| fator de potência                     |
| psiPerDegreeFahrenheit          |
| radianos                         |
| radianosPerSecond                |
| revoluçõesPorMinuto            |
| segundos                         |
| siemens                         |
| siemensPerMeter                 |
| sieverts                        |
| quadradoCentímetros               |
| pés quadrados                      |
| Polegadas quadradas                    |
| metros quadrados                    |
| Metros quadradosPorNewton           |
| Tesla                          |
| térmico                          |
| suas horas                        |
| tons                            |
| tonsPerHour                     |
| tonsRefrigeração               |
| nósGalões                       |
| nósGalõesPorHora                |
| nósGalõesPorMinuto              |
| voltAmpereHoras                 |
| voltAmpereHorasReativo         |
| voltAmperes                     |
| voltAmperesReativo             |
| volts                           |
| voltsPerDegreeKelvin            |
| voltsPorMetro                   |
| voltsQuadradoHoras                |
| watthoras                       |
| wattHoursPerCubicMeter          |
| wattHorasReativo               |
| watts                           |
| wattsPerMeterPerDegreeKelvin    |
| wattsPerSquareFoot              |
| wattsPerSquareMeter             |
| wattsPerSquareMeterGrauKelvin |
| Weber                          |
| semanas                           |
| anos                           |



