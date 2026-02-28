#  : 

## 

 :


 :  : )


ou


. .


## Cause

.

## Solution

### 1. 

 **** :

 ****, 
 **** (vert)

### 2. 

 :

 ****

 ****

### 3. 

 :





 :
- **** : 
- **** : 
- **** : 

### 4. 

 :

|  |  |  |
|------|-------|-------------|
| **47809** |  | .) |
| **55009** |  |  |

 :

bash
 | |55009'


### 5. 

 :

bash
# 


# 
 | 

# 


# 



### 6. Verifique a configuração do daemon

O daemon deve ser iniciado com os parâmetros corretos :

bash
# Exemplo de um comando de inicialização
/caminho/para/bacnetStackServer --config /caminho/para/config.json --cli-port 47809 --daemon-port 55009


Parâmetros importantes :
- `--config` : Arquivo de configuração (necessário para SAVE_CONFIG sem parâmetros))
- `--cli-port` : Porta CLI (padrão): 47809)
- `--daemon-port` : Daemon de porta (padrão): 55009)

## Verificação de conexão

Você pode testar manualmente a conexão com o servidor CLI :

bash
# Teste com netcat
" | .1 47809

# Teste com telnet
telnet 127.0.0.1 47809


Se a conexão estiver funcionando, você deverá ver uma resposta do servidor.

## Solução alternativa : Salvar sem o botão

Se o serviço não iniciar, você pode salvar a configuração manualmente :

### Opção 1 : Através do método de gestão

1. Abra o modal "Gerenciamento do Servidor BACnet""
2. Exporte a configuração JSON
3. Salve o arquivo localmente

### Opção 2 : Linha de comando

Se você tiver acesso à linha de comando do servidor :

bash
# Envie o comando SAVE_CONFIG diretamente
echo "SALVAR_CONFIGURAÇÃO /caminho/para/backup.json" | .1 47809


## Prevenção

### Configuração automática

Para evitar esse problema, configure o daemon para iniciar automaticamente :

1. Acesse **Plugins > Servidor BACnet Stack > Configuração**
Seção 2 ****
3. Ativar **Gestão automática**
4. Defina **Início automático**

### Surveillance

Crie um cenário Jeedom para monitorar o status do daemon :

javascript
// Verificar a cada hora se o daemon está ativo
se (getPluginDaemonInfo('bacnetStackServer')['state'] !== 'ok') {
    // Alertar o administrador
    cmd::byString('#[Mail][Notification][Message]#')->execCmd([
        'título' => 'Daemon BACnet parado',
        'mensagem' => 'O daemon do servidor BACnet Stack foi interrompido'
    ]);
    
    // Opcional : Reiniciar automaticamente
    // bacnetStackServer::daemon_start();
}


## Erros comuns

### "ERRO: nenhum arquivo de configuração especificado"

O servidor não possui um arquivo de configuração padrão (nenhum parâmetro `--config` é exibido na inicialização)).

**** : Especifique um caminho na configuração do plugin :

Plugins > Servidor BACnet Stack > Configuração > Caminho de backup do servidor


### "Erro: falha ao salvar em /caminho/para/arquivo.json"

O servidor não pode gravar no arquivo (permissões, disco cheio)).

**** : 
1. Verifique as permissões da pasta de destino
2. Verifique o espaço disponível em disco
3. Use um caminho gravável

### Tempo limite de conexão

A conexão com a porta 47809 expira após 5 segundos.

**** :
1. Verifique se o servidor não está sobrecarregado
2. Aumente o tempo limite no código, se necessário

## Registros úteis

Os registros contêm informações valiosas :


[2025-11-13 14:30:[00] Configuração do servidor salva : /caminho/para/arquivo.json
[2025-11-13 14:30:01] Exceção saveBacnetServerConfig : )
[2025-11-13 14:30:[02] O daemon BACnet não está iniciado


Locais de registro :
- **Plugin** : `/var/www/html/log/bacnetStackServer`
- **** : Especificado na configuração do daemon

## Support

Se o problema persistir após seguir estes passos, :

1. Recolha os registos do plugin e do daemon
2. Anote a versão do plugin e do Jeedom
3. Crie uma issue no GitHub com essas informações
 | 
 | |55009'`
