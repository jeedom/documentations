# Plugin de energia

Este plugin permite que você estabeleça um balanço energético da sua casa, fornecendo um painel que fornece os itens de consumo

# Configuração do plugin 

Depois de baixar o plugin, você precisa ativá-lo. Você terá acesso à configuração básica do plugin :

![energy1](../images/energy1.PNG)

Aqui você encontra a configuração básica :

-   **Preços** : esta parte permite configurar os parâmetros de preços
    -   **Moeda** : permite que você configure sua moeda (por padrão €)
-   **Água** : configuração de gerenciamento de água
    -   **Ativar** : ativar ou não a gestão da água
    -   **Tarifa** : preço da água por L
-   **Gás** : configuração de gerenciamento de gás
    -   **Ativar** : ativar ou não o gerenciamento de gás
    -   **Tarifa** : preço do gás por kWh
-   **Eletricidade** : configuração de gerenciamento de eletricidade
    -   **Ativar** : ativar ou não o gerenciamento de eletricidade
    -   **Preços** : escolha do modo de preço, horário fixo ou horário de pico / fora de pico
    -   **Tarifa** : preço da eletricidade por kWh

Se você estiver nos horários de pico / fora de pico :

![energy2](../images/energy2.PNG)

Aqui você pode inserir a tarifa nos horários de pico e fora de pico, bem como nas horas de alternância (máximo de 3 zonas).

> **Dica**
>
> É possível, no modo de preço fixo, colocar fórmulas de cálculo, por exemplo, 0.05 + 0.05 \* \#\[ma\]\[commande\]\[mode\]\#, então se \#\[ma\]\[commande\]\[mode\]\# vale 1, então o preço será 0.1 caso contrário 0,05. Isso permite gerenciar todos os casos, se você tiver informações atuais sobre preços.

# Configuração do equipamento 

A configuração do equipamento "energia" pode ser acessada no menu do plugin :

![energy3](../images/energy3.PNG)

É assim que a página do plug-in de energia se parece (aqui com 5 dispositivos já) :

![energy4](../images/energy4.PNG)

Depois de clicar em um dos dispositivos, você obtém :

![energy5](../images/energy5.PNG)

Aqui você encontra toda a configuração do seu equipamento :

-   **Nome de equipamentos** : nome do seu equipamento energético
-   **Objeto pai** : indica o objeto pai ao qual o equipamento pertence
-   **Ativar** : torna seu equipamento ativo
-   **Visivél** : torna visível no painel
-   **Tipo** : permite escolher o tipo de "energia" (eletricidade, água ou gás)
-   **Este contador fornece um total** : informa à jeedom que este equipamento fornece o consumo total para o objeto afetado. Por exemplo, se você possui um contador de teleinfo ou um hidrômetro que mostra o consumo total de sua casa, marque essa caixa e atribua o contador ao objeto que representa a casa (e, portanto, certamente o objeto pai de todas os outros).
-   **Histórico** : permite apagar completamente o histórico do seu contador. Recomenda-se fazer isso após a configuração do equipamento para evitar sair do histórico de consumo dos módulos e, portanto, ter o primeiro dia totalmente distorcido.

> **IMPORTANTE**
>
> Atenção quando um equipamento energético estiver no total, ele aparecerá apenas no objeto ao qual pertence e não nos pais

À direita, você também encontrará seletores que permitem escolher o que exibir no widget.

Abaixo você encontra a configuração do equipamento. Um botão à direita permite adicionar mais :

-   **Categoria** : categoria de consumo de equipamento (as categorias são fixas, você não pode adicionar nenhuma). No modo de contador total, apenas a categoria Outros é possível.
-   **Poder** : como ter o poder deste equipamento ? é aqui que você pode simular o consumo. Por exemplo, aqui há \#\[Chambre\]\[Lumière\]\[Etat\]\# \* 0.6 : o estado da minha luz varia de 0 a 100; portanto, quando minha lâmpada está acesa, tenho 100 \* 0,6 = 60 ou uma potência de 60 watts, que corresponde à potência da minha lâmpada.
-   **CONSUMO** : comando que fornece o consumo do equipamento, se você deixar vazio e o campo de energia estiver preenchido, o plug-in calculará automaticamente o consumo.
-   **Remover** (pequeno botão de menos) : excluir a linha.

# Medidor de água ou gás 

![energy6](../images/energy6.PNG)

Duas possibilidades :

-   ou você tem um pedido que indica o consumo, e aí você só precisa indicar o consumo.
-   ou também é possível indicar os índices manualmente e salvar.

# Teleinfo 

Para o teleinfo, basta colocar os diferentes índices do seu teleinfo no campo de consumo do equipamento (todos no mesmo campo com + no meio ou criar um campo por índice).

# Painel 

Depois que seu equipamento de energia diferente estiver configurado, você terá um painel acessível no menu inicial :

![energy7](../images/energy7.PNG)

Esse é o resultado :

![energy8](../images/energy8.PNG)

Aqui você pode escolher, o período de exibição do painel, o agrupamento de dados (dia ou mês) e o tipo de energia que você deseja exibir (dependendo dos dados ativos ou não).

O painel também pode ser acessado por celular via Plugins → Energia :

![energy9](../images/energy9.PNG)

Uma vez nele, você obtém :

![energy10](../images/energy10.PNG)

# Faq 

**Meus contadores não parecem estar em tempo real.**

O plug-in de energia não existe para fazer em tempo real, é preciso uma leitura a cada 15 minutos. Então, no caso da simulação de
leva 15 minutos para que uma mudança de estado seja levada em consideração, se a lâmpada permanecer acesa apenas por 10 minutos
portanto, o consumo não será levado em consideração.


