# IkeaLight plugin

O plug-in IkeaLight possibilita estabelecer um link com o gateway Ikea Tradfri. Você pode controlar suas luzes e obter feedback de status em tempo real.

# Configuration

## Configuração do plugin

Após o download do plug-in, você deve ativá-lo e inserir o IP do seu gateway, bem como a chave disponível no rótulo do gateway (o "código de segurança").

## Detecção de lâmpada

Para verificar o equipamento Ikea, basta iniciar o daemon assim que as dependências forem instaladas corretamente.     
As lâmpadas levantadas pelo portal e que são reconhecidas pela Jeedom serão integradas automaticamente.     

Se uma lâmpada não voltar, coloque o plugin ``Debug``, para relançar a descoberta e nos fornecer o registro para que possamos adicionar as lâmpadas que faltam. (Lembre-se de especificar o modelo de sua lâmpada, bem como suas características no ticket : é regulável, é variável em branco, é variável em cor). O plug-in também trará os soquetes das cortinas

**Uma vez descobertos, cada lâmpada terá :**

-   As ações correspondentes
-   A informação correspondente

>**Symfonisk**
>
>Os alto-falantes conectados do Symfonisk não são gerenciados por este plugin, mas pelo plugin Sonos.
