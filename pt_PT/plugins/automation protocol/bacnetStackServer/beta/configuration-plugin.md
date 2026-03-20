# Configuração do plugin

A página de configuração do plugin BACnet Stack Server agrupa todas as configurações globais para o servidor BACnet, o daemon e as opções de rede.

## Acesso

Para acessar a configuração :
1. Na página principal do plugin, clique no bloco **Configuração**
2. Então, em **Configuração do plugin**
3. Ou diretamente pelo menu Jeedom : **Plugins > Comunicação > Servidor BACnet Stack > Configuração**

---

## Versão do plugin

O campo **Versão de lançamento** Exibe a versão atualmente instalada do plugin. Esta informação é útil para o suporte técnico.

---

## Informações do dispositivo BACnet

Esta seção configura as propriedades do dispositivo BACnet conforme ele aparece na rede.

### Configurações do dispositivo

| Contexto | Descrição | Por padrão |
|-----------|-------------|------------|
| **Descrição do dispositivo** | Texto descritivo visível para clientes BACnet | jeeBacnetStackServer |
| **Localização do dispositivo** | Localização geográfica (texto livre)) | - |
| **Tempo limite APDU (ms))** | Tempo máximo de espera para respostas APDU | 3000 |
| **Número de tentativas de APDU** | Número de encaminhamentos em caso de insucesso | 3 |
| **Tamanho máximo da APDU** | Tamanho máximo dos pacotes APDU (somente leitura)) | Determinado automaticamente |

### Boutons

| Botão | Descrição |
|--------|-------------|
| **Atualizar informações do servidor** | Lê os valores atuais do servidor BACnet em execução |
| **Salvar informações do dispositivo** | Envia as alterações para o servidor BACnet |

> **Observação** : Esses parâmetros são enviados diretamente para o servidor BACnet em execução. Elas entram em vigor imediatamente.

### Tempo limite APDU

O tempo limite do APDU determina por quanto tempo o servidor aguarda uma resposta antes de considerar a solicitação como falha. Ajuste este valor se :
- Sua rede está lenta → aumente o tempo limite
- Seus dispositivos estão em uma rede local rápida → o padrão (3000 ms) é adequado
- Você tem dispositivos remotos (roteadores BACnet) → tente 5000-10000ms

### Número de tentativas de APDU

Número de vezes que o servidor tenta reenviar uma mensagem caso a primeira tentativa falhe. Valores recomendados :
- Rede confiável : 3 (padrão))
- Rede instável : 5
- Em caso de sobrecarga : reduzir para 1-2 e aumentar o tempo limite

---

## Configuração do Plugin

### Frequência de atualização dos equipamentos do cliente

Determina a frequência com que o Jeedom consulta dispositivos BACnet remotos para atualizar os comandos dos equipamentos do cliente.

| Freqüência | Uso recomendado |
|-----------|-----------------|
| **A cada minuto** | Valores críticos que exigem máxima capacidade de resposta |
| **A cada 5 minutos** | Uma boa opção intermediária para a maioria dos usos |
| **A cada 10 minutos** | Valores que mudam lentamente (temperaturas, metros)) |
| **A cada hora** | Valores estáveis ou para reduzir a carga da rede |

> **Informações** : Essa frequência se aplica somente a dispositivos cliente cujo modo de atualização é "Cron" e cuja caixa "Incluir no cron" está marcada.

### Interface de rede

Selecione a interface de rede na qual o servidor BACnet está escutando. O plugin lista automaticamente as interfaces disponíveis no seu sistema (excluindo o loopback)).

Interfaces comuns :
- `eth0` : Interface Ethernet com fio
- `ens18`, `enp0s3` : Interfaces Ethernet (nomenclatura moderna))
- `wlan0` : Interface Wi-Fi (não recomendada para BACnet))

> **Importante** : O servidor BACnet escuta em apenas uma interface. Se seus dispositivos BACnet estiverem em uma rede específica, selecione a interface correspondente.

### Porta de tomada

Porta utilizada para comunicação interna entre o daemon e o Jeedom.

| Contexto | Por padrão |
|-----------|------------|
| **Porta de tomada** | 55031 |

> Altere esta porta apenas se ela já estiver sendo usada por outro serviço.

### ID do dispositivo

Identificador único do servidor BACnet na rede. Cada dispositivo BACnet deve ter um ID único.

- Praia válida : 0 a 4194302
- Escolha um ID que não entre em conflito com outros dispositivos na sua rede
- Convenção comum : Os sistemas automatizados têm IDs < 1000, os servidores de software têm IDs > 1000

### Nome do dispositivo

Nome do servidor BACnet conforme aparece durante uma descoberta (Who-Is)). Use um nome descritivo como `Jeedom_BACnet_Server`.

### Porta BACnet

Porta de rede utilizada para o protocolo BACnet/IP.

| Contexto | Por padrão | Padrão |
|-----------|------------|----------|
| **Porta BACnet** | 47808 | 47808 (0xBAC0) |

> **Atenção** : A porta BACnet padrão é 47808. Altere esta configuração apenas se outro serviço já estiver utilizando esta porta ou se a sua instalação exigir uma porta não padrão.

### Caminho de backup do servidor

Caminho relativo para o plugin do arquivo de backup da configuração do servidor.

| Contexto | Por padrão |
|-----------|------------|
| **Salvar caminho** | servidor de dados/salvar.json |

Este arquivo é usado pelo comando `SAVE_CONFIG` para salvar o estado do servidor.

### Arquivo JSON a ser usado

Selecione o arquivo de configuração JSON que será carregado quando o daemon for iniciado. O menu suspenso lista todos os arquivos.`json` presente na pasta `/plugins/bacnetStackServer/data/`.

Este arquivo contém a definição completa dos seus objetos BACnet (tipos, instâncias, nomes, valores, associações Jeedom, etc.).).

---

## Demônio

A seção Daemon (gerenciada pelo núcleo Jeedom) exibe :
- O estado do demônio (OK / NOK))
- O botão de reiniciar
- Gestão automática

### Verificações automáticas

O plugin verifica na inicialização :
1. Que o binário BACnet esteja presente e seja executável
2. Que a porta BACnet não esteja sendo usada por outro processo
3. Que o arquivo de configuração JSON existe e é válido

---

## Melhores práticas

### Rede

- Utilize sempre uma interface Ethernet com fio (não Wi-Fi))
- Certifique-se de que a porta 47808/UDP esteja aberta no seu firewall
- Se você tiver roteadores BACnet, aumente o tempo limite do APDU

### Identifiants

- Escolha um ID de dispositivo exclusivo em sua rede
- Documente os IDs utilizados para evitar conflitos
- Use um nome de dispositivo explícito

### Sauvegarde

- O arquivo de configuração é salvo manualmente (botão dedicado))
- Lembre-se de fazer backups antes de realizar qualquer alteração importante
- Os últimos 10 backups são armazenados automaticamente em `data/backups/`

---

## Solução de problemas

### O demônio não vai começar

1. Verifique os registros do plugin no Jeedom
2. Certifique-se de que a porta BACnet (47808) não esteja em uso : `sudo netstat -tulpn | grep 47808`
3. Verifique se o arquivo binário é executável : `ls -la /caminho/para/bacnetStackd`
4. Reinicie as dependências, se necessário

### O servidor não está visível na rede

1. Verifique a interface de rede selecionada
2. Teste com um cliente BACnet externo (por exemplo, : YABE, Explorador BACnet)
3. Verifique as regras do firewall
4. Certifique-se de que o dispositivo esteja na sub-rede correta

### Erro "Porta já em uso""

Outro processo já está utilizando a porta 47808 :
1. Identifique o processo : `sudo lsof -i :47808`
2. Interrompa o processo de conflito
3. Ou altere a porta BACnet na configuração
