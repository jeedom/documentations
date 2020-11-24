# IkeaLight plugin

O plug-in IkeaLight possibilita estabelecer um link com o gateway Ikea Tradfri. Você pode controlar suas luzes e obter feedback de status em tempo real.

# Configuration

## Configuração do plugin

Após o download do plug-in, você deve ativá-lo e inserir o IP do seu gateway, bem como a chave disponível no rótulo do gateway (o "código de segurança").

## Detecção de lâmpada

Para verificar o equipamento Ikea, basta iniciar (uma vez iniciadas as dependências) o daemon. As lâmpadas remontadas pelo gateway e que são reconhecidas pela Jeedom serão criadas automaticamente. Se uma lâmpada não acender, coloque o plug-in Debug para reiniciar a descoberta e nos forneça o log para que possamos adicionar as lâmpadas ausentes. (Lembre-se de especificar sua lâmpada e suas características no ticket : é regulável, é variável em branco, é variável em cor). O plug-in também trará os soquetes das cortinas

**Uma vez descobertos, cada lâmpada terá :**

-   As ações correspondentes
-   A informação correspondente

>**Symfonisk**
>
>Os alto-falantes conectados Symfonisk não são gerenciados por este plug-in, mas pelo plug-in Sonos
