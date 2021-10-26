# Plug-in de derramamento de carga 

![delestage](../images/delestage_screenshot1.png)

# Descrição 

Plugin que permite gerenciar o derramamento de carga elétrica. O plug-in gerencia 3 tipos de derramamento de carga :

-   Derramamento inteligente".
-   Derramamento de carga hierárquica.
-   Derramamento de carga cíclico em cascata.

# Como funciona 

## Descarga inteligente de carga. 

O derramamento inteligente de carga requer que o plug-in Termostato funcione.

O plugin classifica os termostatos de acordo com as temperaturas reais de acordo com as temperaturas definidas.

Portanto, o derramamento terá prioridade sobre as peças com o menor desvio. O gene para os ocupantes será menos importante.

![intelligent](../images/smart.png)

## Derramamento de carga hierárquica 

O derramamento de carga é realizado no modo hierárquico nos atuadores x.
O atuador 1 será aliviado em prioridade e depois os 2, 3…

Os atuadores serão redefinidos na ordem inversa do derramamento de carga

![hierarchique](../images/hierarchique.png)

### Derramamento de carga cascadocíclico 

O derramamento de carga é realizado no modo rotativo nos atuadores definidos para o modo cíclico e, se a potência ainda for maior que o limite, no modo hierárquico nos demais.

![cascadocyclique](../images/cascadocyclique.png)

# Configuração 

## Configuração geral 

Aqui estão os parâmetros para configurar no plug-in :

-   Tipo de derramamento de carga : inteligente, hierárquico ou cascadocíclico
-   Tipo de contador : Potência instantânea ou amperagem instantânea
-   Contador : selecione aqui o comando que retorna a energia ou a amperagem (neste caso, será necessário configurar a tensão de rede)
-   Limiar em Watts : Limite a partir do qual a exclusão será acionada

![configuration générale](../images/configuration_generale.png)

### Ações adicionais 

É possível definir ações adicionais, além de ações de descarte de carga.

É possível, por exemplo, enviar um sms para avisar sobre o início e o fim do derramamento de carga.

![Actions complémentaires](../images/actions_complementaires.png)

### Configuração avançada 

Os seguintes parâmetros podem ser definidos:

-   Tensão de rede em Volts (220V por padrão)
-   Tempo antes da reativação em minutos (5 minutos por padrão) : tempo antes do qual o equipamento não será reativado (para evitar ligar / desligar excessivamente repetitivo)
-   Tempo mínimo entre as leituras em s (10s por padrão) : tempo necessário entre 2 instruções

![Configuração avançada](../images/configuration_avancee.png)

# Faq 

Por enquanto, apenas o plug-in oficial do termostato é gerenciado pelo derramamento inteligente de carga. No entanto, é possível usar os outros 2 modos de redução de carga com os outros termostatos.

# Resolução de problemas 

Tenha cuidado para ativar o modo "Auto" no widget para ativar o derramamento de carga.
