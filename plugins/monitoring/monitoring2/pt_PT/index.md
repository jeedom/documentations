# Plugin de monitoramento

O plug-in permite monitorar sistemas, possui vários mecanismos CLI (bash), SNMP, ping e URL

> **IMPORTANTE**
>
> Este plugin é bastante complexo e, portanto, precisa ler a documentação e algum conhecimento. NÃO É PLUG AND PLAY

# Configuration

Depois de baixar o plug-in, basta ativar o plug-in

# Equipements

A configuração do equipamento de monitoramento pode ser acessada no menu Plugins e depois em Monitoring

- Nome de equipamentos
- Objeto pai
- Categoria
- Activer
- Visible
- Frequência de atualização : no formato cron (ex \*/ 15 \* \* \* \*)
- Motor : motor para ativar o equipamento em questão.
- Configurações do Bash / Shell
		- Modo : local ou remoto (se local não houver mais nada a preencher)
		- IP
		- Nome de Usuário
		- Senha
- Configurações de SNMP
		- IP
		- Protocole
		- Nome de Usuário
		- Senha
		- Autenticação de moda
		- Segurança
		- Protocolo privado
		- Senha privada
- Configurações de ping
		- IP

# Moteur

SNMP
----

O mecanismo SNMP permite conectar-se a máquinas no SNMP e recuperar valores. Abaixo o exemplo do SNMP OID

### OIDs gerais

#### Load

| OID                                  | Dados                              |
|--------------------------------------|--------------------------------------|
| .1.3.6.1.4.1.2021.10.1.3.1           | 1 minuto de carga                        |
| .1.3.6.1.4.1.2021.10.1.3.2           | Carga de 5 minutos                        |
| .1.3.6.1.4.1.2021.10.1.3.3           | Carga de 15 minutos                       |

#### CPU

| OID                                  | Dados                              |
|--------------------------------------|--------------------------------------|
| .1.3.6.1.4.1.2021.11.9.0             | Porcentagem de tempo de CPU do usuário          |
| .1.3.6.1.4.1.2021.11.50.0            | Tempo bruto da CPU do usuário                    |
| .1.3.6.1.4.1.2021.11.10.0            | Porcentagens de tempo de CPU do sistema       |
| .1.3.6.1.4.1.2021.11.52.0            | Tempo bruto da CPU do sistema                  |
| .1.3.6.1.4.1.2021.11.11.0            | Porcentagens de tempo ocioso da CPU         |
| .1.3.6.1.4.1.2021.11.53.0            | Tempo bruto da CPU ociosa                    |
| .1.3.6.1.4.1.2021.11.51.0            | Tempo agradável da CPU                    |

#### Estatísticas de memória

| OID                                  | Dados                              |
|--------------------------------------|--------------------------------------|
| .1.3.6.1.4.1.2021.4.3.0              | Tamanho total da troca                      |
| .1.3.6.1.4.1.2021.4.4.0              | Espaço de Troca Disponível                 |
| .1.3.6.1.4.1.2021.4.5.0              | RAM total na máquina                 |
| .1.3.6.1.4.1.2021.4.6.0              | Total de RAM livre                       |
| .1.3.6.1.4.1.2021.4.11.0             | RAM total usada                       |
| .1.3.6.1.4.1.2021.4.13.0             | RAM total compartilhada                     |
| .1.3.6.1.4.1.2021.4.14.0             | RAM total armazenada em buffer                   |
| .1.3.6.1.4.1.2021.4.15.0             | Memória em cache total                  |

#### Disk

| OID                                  | Dados                              |
|--------------------------------------|--------------------------------------|
| .1.3.6.1.4.1.2021.9.1.2.X            | Caminho em que o disco está montado       |
| .1.3.6.1.4.1.2021.9.1.3.X            | Caminho do dispositivo para a partição |
| .1.3.6.1.4.1.2021.9.1.6.X            | Tamanho total do disco / partição (kBytes)                             |
| .1.3.6.1.4.1.2021.9.1.7.X            | Espaço disponível no disco          |
| .1.3.6.1.4.1.2021.9.1.8.X            | Espaço usado no disco               |
| .1.3.6.1.4.1.2021.9.1.9.X            | Porcentagem de espaço usado no disco     |
| .1.3.6.1.4.1.2021.9.1.10.X           | Porcentagem de inodes usados no disco    |

#### System

| OID                                  | Dados                              |
|--------------------------------------|--------------------------------------|
| .1.3.6.1.2.1.1.3.0                   | Tempo de atividade do sistema                        |

### OIDs da VMware

| OID                                  | Dados                              |
|--------------------------------------|--------------------------------------|
| .1.3.6.1.2.1.25.2.3.1.6.6            | Uso de memória                  |
| .1.3.6.1.4.1.6876.1.2.0              | Versão VMware                    |

### OIDs Synology

| OID                                  | Dados                              |
|--------------------------------------|--------------------------------------|
| .1.3.6.1.4.1.6574.1.5.1.0            | Modelo                               |
| .1.3.6.1.4.1.6574.1.5.3.0            | Versão DSM                          |
| .1.3.6.1.4.1.6574.1.1.0              | Status do sistema                       |
| .1.3.6.1.4.1.6574.3.1.1.2.0          | Exibe o status do RAID               |
| .1.3.6.1.4.1.6574.1.4.2.0            | Ventilador da CPU                              |
| .1.3.6.1.4.1.6574.1.4.1.0            | Sistema de ventilação                          |
| .1.3.6.1.4.1.2021.11.9.0             | Carga da CPU                           |
| .1.3.6.1.4.1.6574.1.2.0              | Temp do sistema                         |
| .1.3.6.1.4.1.6574.2.1.1.5.X          | Status do disco X (inicia em 0)    |
| .1.3.6.1.4.1.6574.2.1.1.6.X          | Temperatura do disco X (começa em 0)                                   |
| .1.3.6.1.4.1.6574.3.1.1.2.X          | Status do ataque X (começa em 0)      |
| .1.3.6.1.4.1.6574.6.1.1.3.1          | Número de usuários conectados no CIFS                                 |
| .1.3.6.1.4.1.6574.6.1.1.3.2          | Número de usuários logados no AFP |
| .1.3.6.1.4.1.6574.6.1.1.3.3          | Número de usuários logados no NFS |
| .1.3.6.1.4.1.6574.6.1.1.3.4          | Número de usuários logados via FTP |
| .1.3.6.1.4.1.6574.6.1.1.3.5          | Número de usuários conectados no SFTP                                 |
| .1.3.6.1.4.1.6574.6.1.1.3.6          | Número de usuários logados em HTTP / HTTPS                           |
| .1.3.6.1.4.1.6574.6.1.1.3.7          | Número de usuários conectados no TELNET                               |
| .1.3.6.1.4.1.6574.6.1.1.3.8          | Número de usuários logados no SSH |
| .1.3.6.1.4.1.6574.6.1.1.3.9          | Número de usuários logados OTHER                                |

### OIDs Synology UPS

| OID                                  | Dados                              |
|--------------------------------------|--------------------------------------|
| .1.3.6.1.4.1.6574.4.1.1.0            | Modelo                               |
| .1.3.6.1.4.1.6574.4.2.1.0            | Estado                               |
| .1.3.6.1.4.1.6574.4.2.12.1.0         | Carga                               |
| .1.3.6.1.4.1.6574.4.3.1.1.0          | Status da bateria                        |
| .1.3.6.1.4.1.6574.4.3.6.1.0          | Autonomia                            |

### OIDs calculados pelo plug-in

| OID                                  | Dados                              |
|--------------------------------------|--------------------------------------|
| sysuptime                            | Tempo de atividade do sistema formatado            |
| memoryused                           | Uso real de memória       |
| cpuused                              | Uso médio da CPU no VMware                               |
| vmwarerunvm                          | Número de VMs iniciadas no vmware     |
| diskused::X                          | Taxa de preenchimento de disco X      |
| networkin::X                         | Taxa de transferência média da interface de saída X                               |
| networkout::X                        | Fluxo médio da interface X de entrada                               |
| runprocess::X                        | Fornece o número de processos X em execução                               |

Ping
----

Para ping existem 2 comandos possíveis :

| Ordem                             | Dados                              |
|--------------------------------------|--------------------------------------|
| ping                                 | Resultado do ping                     |
| latência                              | teste de latência                      |

CLI
---

Aqui você pode usar todos os comandos bash ou comandos pré-criados pelo plugin :

| Ordem                             | Dados                              |
|--------------------------------------|--------------------------------------|
| cpufreq                              | Freqüência da CPU                        |
| cputemp                              | Temperatura da CPU                      |
| utilização do CPU                             | Uso da CPU em%                 |
| memuse                               | % de memória usada                 |
| trocar                                 | % de swap usado                    |
| loadavg15                            | Cobrar mais de 15 minutos                     |
| tempo de atividade                               | Tempo de atividade da máquina                 |
| hdduse::\#mount\#                    | % de uso do ponto de montagem *montar*                              |

URL
---

| Ordem                             | Dados                              |
|--------------------------------------|--------------------------------------|
| access::\#url\#::\#username\#::\#password\# | Teste o acesso a um URL com *URL * : URL  à tester (ex <http://www.google.fr>), *Nome de usuário*: nome de usuário (se necessário),*Senha* : senha de usuário (pode estar vazia)       |
