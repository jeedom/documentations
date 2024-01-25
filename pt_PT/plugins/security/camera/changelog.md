# Changelog Camera

>**IMPORTANTE**
>
>Se não houver informação sobre a atualização, significa que se trata apenas da atualização da documentação, tradução ou texto.

# 17/01/2024

- Correção de bug no widget

# 16/01/2024

- Corrigido um bug no tamanho do widget nos designs

# 01/05/2024

- Corrigido um bug na exibição de câmeras no celular

# 01/03/2024

- Preparando-se para Jeedom 4.4

# 26/09/2023

- Suporte ao comando ONVIF PTZ

# 10/02/2022

- Corrigido um problema com a chave de API não visível

# 31/01/2022

- Atualizar chamada de API

# 11/12/2021

- Suporte para novas câmeras
- Adicionado um botão para ver uma prévia da câmera na página de configuração

# 31/08/2021

- Modificação para permitir a recuperação de uma função de outro plugin (será usado para um futuro plugin Unifi Protect)
- Adição da câmera bala Ubiquiti G4 (observe que a câmera deve ativar a conexão anônima)

# 04/02/2021

- Corrigido um problema que não parava de recuperar imagens, mesmo que não houvesse mais uma câmera exibida

# 29/11/2020

- Corrigido um problema de exibição de imagem em designs


# 24/11/2020

- Nova apresentação da lista de objetos
- Adição da tag "compatibilidade V4"

# 30/08/2020

- Adição de câmera Foscam FI9926P

# 07/07/2020

- Correção de um problema na porta padrão do URL do fluxo para as câmeras Foscam, obrigado @nebz
- A adição da câmera Reolink RLC-410-5MP agradece @Dorsad
- Adicionar RocketCam (Freebox) obrigado @JAG

# 26/06/2020

- Adicionando câmera Dahua
- Adição da câmera Foscam
- Supressão da detecção de movimento
- Adicionando panasonic wc np502 obrigado @Flobul
- Adicionando câmera IOS, obrigado @Flobul

# 16/06/2020

- Correção do problema de abrir o histórico no modo de fluxo

# 14/06/2020

- Melhoria do sistema para limpeza de arquivos de fluxo de vídeo (observe que a função ainda está na versão beta, é possível que nossa configuração seja um pouco agressiva)
- Correção de um erro na recuperação de informações de movimento de câmeras foscam HD
- Corrigido um problema se um usuário não administrador quisesse assistir ao fluxo de vídeo
- Correção do erro de exibição no design no modo "somente fluxo""
- Correções de bugs

# 11/11/2020

- Adicionando configuração
- Possibilidade de ver a câmera em fluxo de vídeo (e não mais quadro a quadro) - Beta
- Redesign do sistema de pré-configuração da câmera

# 05/11/2020

- Retorno da função de descoberta ONVIF (obrigado @Aidom)
- Possibilidade de usar comandos (tipo de script) para controle da câmera

# 17/10/2019

- Otimização da função de limpeza dos arquivos de captura da câmera

# 10/10/2019

- Correção de um bug na captura de vídeo no debian 10

# 25/09/2019

- Correção de bug no rtsp no debian 10

# 23/09/2019

- Correções de bugs
- Adição de um campo para colocar opções de transmissão de vídeo (rtsp)

# 20/09/2019

- Correções de bugs

# 14/09/2019

 - Corrigido um erro em que a tarefa cronHourly do plug-in da câmera não podia ser concluída
 - Correção de um bug na visualização do histórico de capturas

# 28/08/2019

- Suporte rtsp aprimorado
- Correções de bugs

# 06/06/2019

- Corrigido um problema se houver & no fluxo rtsp url
- Segurança aprimorada no fluxo de vídeo
- Corrigido um problema se houvesse espaços no URL do fluxo de vídeo

# 21/01/2019

- Atualizando o documento
- Correção de um bug no painel

# 17/01/2019

- Atualizando o documento
- Corrigido um problema com a configuração do Wanscam q3 (s)

# 15/01/2019

- Adição da (s) câmera (s) Wanscam q3)
- Seleção de modo automaticamente com base no URL de captura e no fluxo de vídeo (RTSP)
- Correções de bugs
- Substituição adicionada para #username# e #password# em pedidos
- Correção de um problema de dependência

# 01/06/2018

- Redesign do painel, agora escolhemos o número de câmeras por linha na configuração do plugin, seu tamanho é calculado automaticamente
- Melhoria do widget para celular
- Suporte para fluxos de vídeo RTSP / MJPEG ... Observe que há uma conversão feita, que só deve ser usada se você não tiver escolha; deve privilegiar os instantâneos (carregamento mais rápido e menos Jeedom)

# 04/03/2018

- Atualização da documentação

# 10/03/2018

- Atualizando o documento
- Otimização de código

# 03/05/2018

- Correções de bugs

# 12/12/2018

- Correções de bugs
- Adição de uma opção para desativar qualquer compactação de imagem no lado Jeedom
