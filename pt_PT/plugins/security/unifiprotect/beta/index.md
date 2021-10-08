# Plug-in Unifi Protect

## Description

Plugin para conectar o Jeedom ao Unifi Protect

>**IMPORTANTE**
>
>Não há API oficial para Unifi proteger, o plugin pode, portanto, parar de funcionar durante a noite após uma atualização do Unifi proteger. Sob nenhuma circunstância a Jeedom pode ser responsabilizada e / ou ter o dever de corrigir

## Compatibilité

Você pode encontrar [aqui](https://compatibility.jeedom.com/index.php?v=d&p=home&plugin=unifiprotect) a lista de módulos compatíveis com o plugin

## Configuração de plug-in

Depois de instalar o plugin, você só precisa ativá-lo. Alguns parâmetros devem ser inseridos na configuração do plugin :

-   **Controlador de proteção Unifi** : Você tem que colocar o caminho para o seu controlador Unifi (apenas o IP na maioria dos casos)
-   **Unifi proteger usuário** : Indique aqui um nome de usuário local (o usuário pode ser "Administrador limitado" com "Somente visualização" no Unifi Protect) 
-   **Senha de proteção Unifi** : Digite a senha do usuário aqui
-   **Taxa de atualização** : Frequência de solicitações de informações para o controlador (quanto menor for, mais recursos ele consumirá nele, cuidado com aqueles no UDM-Pro)
-   **Não colete eventos** : Não recupera eventos das câmeras (permite consumir menos recursos, mas você perde a detecção de movimento / pessoa / carro /...)
-   **Encontre equipamentos de proteção Unifi** : Inicia a sincronização com Unifi Protect

>**IMPORTANTE**
>
>Se você tiver o plugin de câmera instalado, o plugin Unifi Protect criará automaticamente as câmeras no plugin de câmera 

## Feedback de informação

### Controleur

- Etat
- Uptime
- Visto pela última vez
- SSH ativo (conexão SSH possível no controlador)
- Erro de código
- Utilização do CPU
- Temperatura da CPU (se possível)
- Uso de memória
- Usando tmpfs
- Uso de disco

### Câmera 

- Conectado
- Etat
- Visto pela última vez
- Gravação (é a gravação da câmera)
- Último evento
- Data do último evento
- Pontuação do último evento (se o evento for um evento inteligente)