# Changelog Harmony Hub

>**IMPORTANTE**
>
>Recorde-se que, se não existe informação sobre a atualização, é porque se trata apenas de atualização de documentação, tradução ou texto.

> Attention
> Redesenho significativo do plugin: o plugin foi completamente reescrito incluindo a comunicação com o hub Harmony (via daemon agora)
>
> Requer Jeedom 4.4.8
>
> Compatível com Debian 11 e 12! O plugin não é mais compatível com Debian 10, se você ainda estiver no Debian 10, não instale esta versão.
>
> Equipamentos antigos serão marcados como obsoletos e não serão migrados. Use a ferramenta "Substituir" do núcleo se quiser adaptar facilmente seus cenários.
>
> Veja também [este tópico na comunidade](https://community.jeedom.com/t/importante-mise-a-jour-pour-debian-11-et-debian-12/129908) para mais detalhes

## 

- 

# 25/11/2024

- Corrija a versão de uma dependência para evitar uma alteração significativa (async-timeout v5 break timeout context)

# 28/08/2024

- Reescrita completa do plugin
- Usando o método de instalação de dependência principal
- Alterar a biblioteca para se comunicar com o hub Harmony para usar uma biblioteca com melhor rastreamento
- Usando um daemon para:
  - para melhorar a capacidade de resposta das ações
  - para ter feedback de status em tempo real
- Configuração simplificada: Resta apenas a configuração do IP do hub para entrar na configuração do plugin e iniciar o daemon e o equipamento se sincronizar com o Jeedom.
- Adicionando um pedido **Iniciar atividade** que indica a atividade que está sendo iniciada (vazio se não houver)

# 17/09/2023

- Corrigir compatibilidade com Debian 11 e Python 3
- versão mínima do núcleo necessária: v4.2

# 19/10/2022

- Lista atualizada de comandos para Jeedom v4.3
- Pequenas correções e otimizações na tela de gerenciamento de equipamentos

# 18/05/2021

- Correção de mau funcionamento de alguns controles
- Revisão de interface
- Revisão de documentação

# 20/11/2020

- Otimizações gerais
- Nova apresentação da lista de objetos
- Adição da tag "compatibilidade V4"

# 20/09/2019

- Adaptação V4

# 07-06-2019

- Correção de bug nas dependências do NOK enquanto OK

# 2019-05-23

- Instalação da página de equipamentos para o futuro Jeedom

# 19/02/2019

Esta atualização é uma importante vinculada à atualização da Logitech, que reativa o XMMP. Você terá que recriar o arquivo conf e, principalmente, ativar no aplicativo Harmony o modo desenvolvedor, ativando o XMMP
Para informações, esse turno intervém no mesmo dia que o patch da Logitech. Assim como a solução alternativa de 21-12-2018, que permitiu que muitas pessoas fossem reparadas, pois funcionava para todos que estavam sob o Debian (melhor que nada)). Não sabíamos quando a Logitech lançaria o suporte ao XMMP. Mas golpe após golpe houve uma reação.

# 2018-12-21

Correção de emergência relacionada ao principal da Logitech (temporária para solucionar problemas, lembre-se de reiniciar as dependências)
