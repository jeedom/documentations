# Equipamento do cliente BACnet

Cada dispositivo BACnet descoberto na rede pode ser representado como um dispositivo no Jeedom. Este equipamento contém informações e comandos de ação correspondentes aos objetos BACnet do dispositivo remoto.

## Criação de equipamentos

### Método automático (recomendado))

1. Abra a interface **Cliente BACnet** (Descoberta de rede)
2. Inicie um **Quem é** para descobrir os dispositivos
3. Clique em **Liste os objetos** de um dispositivo
4. Selecione os itens desejados
5. Clique em **Criar equipamentos**
6. O equipamento é criado automaticamente com os comandos correspondentes

### Método manual

1. Da seção **Cliente BACnet**, clique em **Adicionar um cliente**
2. Configure manualmente as definições (ID do dispositivo, IP, etc.).)
3. Use **Escaneie os objetos** para descobrir e adicionar comandos

---

## Configuração do equipamento

### Configurações gerais

| Contexto | Descrição |
|-----------|-------------|
| **Nome do equipamento** | Nome exibido em Jeedom |
| **Objeto pai** | Jeedom se opõe a anexar |
| **Categoria** | Categoria de equipamentos (Aquecimento, Segurança, etc.).) |
| **Habilitar** | Liga ou desliga o equipamento |
| **Visível** | Torna o equipamento visível no painel de instrumentos |

### Configuração do cliente BACnet

Esses parâmetros são específicos para o dispositivo BACnet remoto :

| Contexto | Descrição | Exemplo |
|-----------|-------------|---------|
| **ID do dispositivo** | Identificador BACnet do dispositivo remoto | 64 |
| **Endereço IP** | Endereço IP e porta do dispositivo | 192.168.1.100:47808 |
| **Prioridade de escrita padrão** | Prioridade BACnet (1-16) usada ao gerar comandos (varredura)) | 8 |

> **Formato IP** : Ainda no formato `IP`:porta` (ex : `192.168.1.100:47808`).

> **Prioridade de escrita padrão** : Aplica-se somente a **novos pedidos criados** durante uma varredura. As encomendas existentes mantêm a sua prioridade individual. Para modificar um comando existente, use o seletor na aba **Pedidos**.

### Escaneie os objetos

Dois métodos para adicionar itens ao equipamento :

#### 1. Digitalização completa (botão azul "Digitalizar objetos")")

Abre a interface do cliente no modo de varredura completa :
- Apenas a seção "Lista de objetos" é exibida
- O ID do dispositivo e o endereço IP já estão preenchidos
- O plugin recupera TODOS os objetos do dispositivo
- Os objetos já presentes são marcados como "Existentes" (linha verde))
- Você seleciona os novos objetos a serem adicionados
- **Duração** : Pode demorar até 3 minutos para dispositivos grandes (mais de 2000 itens))
- **Ideal para** : Descoberta inicial de dispositivos, visão geral completa

#### 2. Varredura seletiva (botão laranja "Varredura seletiva")")

Interface dedicada para adicionar apenas objetos específicos :
- Dois modos : adição manual usando seletores ou importação via lista
- Digitaliza apenas os itens solicitados (muito rápido) : 5 a 10 segundos)
- Gestão inteligente de informações/ações com base no tipo de objeto
- Sem risco de tempo limite
- **Ideal para** : Adicione novos pontos, evite timeouts, direcionamento preciso

Para obter mais detalhes sobre a varredura seletiva, consulte a página [Cliente BACnet](modal-client.md#scan-sélectif-dobjets).

---

## Método de atualização

O método de atualização determina como os valores do comando são atualizados.

### Cron (atualização periódica))

O modo padrão. .

| Contexto | Descrição |
|-----------|-------------|
| **** | Caixa de seleção para ativar atualizações periódicas |

 **Configuração do plugin** ().

### )

. .

| Vantagem | Inconveniente |
|----------|--------------|
| Atualização instantânea | Nem todos os dispositivos são compatíveis com COV |
| Menos tráfego de rede | A assinatura deve ser renovada periodicamente |
| Sem pesquisas desnecessárias | Configuração mais complexa |

> **Importante** : . .

---

## 

### 

 **** .

### 

 :

 **** 
)
 ****

### 

.  :
- )
- )

.

---

## 

### 

 **Pedidos** .

### 

 :

| Tipo | Subtipo | Descrição | ID lógico |
|------|-----------|-------------|-----------|
| **** | numérico / binário / string | Lendo o valor | `bacnet_info_TYPE_INSTANCE` |
| **** | controle deslizante / outro | Escrever um valor | `bacnet_action_TYPE_INSTANCE` |

### 

 **** (. .

> .

### 

 :
- 
- 

 : ).

---

## Melhores práticas

### 

-  **** 
-  **** )
-  : 

### Organisation

- 
- 
- )

### Performance

- )
- 
- 

---

## Solução de problemas

### 


)




### 






### 


)

