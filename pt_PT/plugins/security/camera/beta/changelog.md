# Changelog Camera

>****
>
>Se não houver informação sobre a atualização, significa que se trata apenas da atualização da documentação, tradução ou texto.

# 

- Corrigido um problema com a chave de API não visível

# 

- Atualizar chamada de API

# 

- Suporte para novas câmeras
- Adicionado um botão para ver uma prévia da câmera na página de configuração

# 

- Modificação para permitir a recuperação de uma função de outro plugin (será usado para um futuro plugin Unifi Protect)
- Adição da câmera bala Ubiquiti G4 (observe que a câmera deve ativar a conexão anônima)

# 

- Corrigido um problema que não parava de recuperar imagens, mesmo que não houvesse mais uma câmera exibida

# 

- Corrigido um problema de exibição de imagem em designs


# 

- Nova apresentação da lista de objetos
- Adição da tag "compatibilidade V4"

# 

- Adição de câmera Foscam FI9926P

# 

- Correção de um problema na porta padrão do URL do fluxo para as câmeras Foscam, obrigado @nebz
- A adição da câmera Reolink RLC-410-5MP agradece @Dorsad
- Adicionar RocketCam (Freebox) obrigado @JAG

# 

- Adicionando câmera Dahua
- Adição da câmera Foscam
- Supressão da detecção de movimento
- Adicionando panasonic wc np502 obrigado @Flobul
- Adicionando câmera IOS, obrigado @Flobul

# 

- Correção do problema de abrir o histórico no modo de fluxo

# 

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

# 

- Otimização da função de limpeza dos arquivos de captura da câmera

# 

- Correção de um bug na captura de vídeo no debian 10

# 

- Correção de bug no rtsp no debian 10

# 

- Correções de bugs
- Adição de um campo para colocar opções de transmissão de vídeo (rtsp)

# 

- Correções de bugs

# 

 - Corrigido um erro em que a tarefa cronHourly do plug-in da câmera não podia ser concluída
 - Correção de um bug na visualização do histórico de capturas

# 

- Suporte rtsp aprimorado
- Correções de bugs

# 

- Corrigido um problema se houver & no fluxo rtsp url
- Segurança aprimorada no fluxo de vídeo
- Corrigido um problema se houvesse espaços no URL do fluxo de vídeo

# 

- Atualizando o documento
- Correção de um bug no painel

# 

- Atualizando o documento
- Corrigido um problema com a configuração do Wanscam q3 (s)

# 

- Adição da (s) câmera (s) Wanscam q3)
- Seleção de modo automaticamente com base no URL de captura e no fluxo de vídeo (RTSP)
- Correções de bugs
- Substituição adicionada para #username#  #password# em pedidos
- Correção de um problema de dependência

# 

- Redesign do painel, agora escolhemos o número de câmeras por linha na configuração do plugin, seu tamanho é calculado automaticamente
- Melhoria do widget para celular
- Suporte para fluxos de vídeo RTSP / MJPEG ... Observe que há uma conversão feita, que só deve ser usada se você não tiver escolha; deve privilegiar os instantâneos (carregamento mais rápido e menos Jeedom)

# 04/03/2018

- Atualização da documentação

# 

- Atualizando o documento
- Otimização de código

# 03/05/2018

- Correções de bugs

# 12/12/2018

- Correções de bugs
- Adição de uma opção para desativar qualquer compactação de imagem no lado Jeedom
