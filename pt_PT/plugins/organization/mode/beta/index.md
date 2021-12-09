# Plugin de moda

Plugin para gerenciar diferentes modos de um apartamento / casa / quarto, mas também atmosferas.

## Configuração do plugin

Depois de baixar o plugin, você só precisa ativá-lo, não há configuração neste nível.

## Configuração do equipamento

A configuração do equipamento de modo é acessível no menu do plug-in e depois na organização :

Aqui você encontra toda a configuração do seu equipamento :

- **Nome do equipamento Modo** : nome do seu equipamento Mode,
- **Objeto pai** : indica o objeto pai ao qual o equipamento pertence,
- **Ativar** : torna seu equipamento ativo,
- **Visivél** : torna seu equipamento visível no painel,
- **Categoria** : categorias de equipamentos (pode pertencer a várias categorias).
- **Adicionar modo** : para adicionar um novo modo

Abaixo você encontrará a lista de modos, clicando sobre ela você poderá escolher as ações a serem realizadas ao entrar e / ou sair deste modo.

>**IMPORTANTE**
>
>Tenha cuidado ao renomear um modo, é essencial revisar os cenários / equipamentos que usavam o nome antigo para trocá-los para o novo.

## Criação de equipamentos

- Clique em *Adicionar*
- Dê um nome
- Selecione l'*Objeto pai*
- Ative o
- Selecione a guia *Modos* para adicionar os modos (ver [os exemplos](#exemples))

## Exemples

### Modo Obturador

Exemplo de um dispositivo sem ação de entrada ou saída nos modos. Equipamentos deste tipo podem ser úteis como um gatilho para um cenário ou para condicionar ações em um cenário.

![Mode volet](../images/mode_volet.png)

### Modo de presença

Exemplo de um dispositivo com ações definidas ao mudar de modo.

Neste equipamento, iremos criar 3 modos a partir da aba *Modos* equipamento:

- Presente
- Absent
- Vacances

![Mode présence](../images/mode_presence_mode.png)

Ao mudar para o modo *Presente*, queremos que o alarme seja desativado e o aquecimento mude para o modo de conforto (2 ações de entrada).

![Mode présence action entrée](../images/mode_presence_entree.png)

Ao sair do modo *Presente* para mudar para o modo *Ausente* ou *Férias*, queremos que o alarme seja ativado (1 ação de saída).

![Mode présence action sortie](../images/mode_presence_sortie.png)

Para modos *Ausente* e *Férias*, vamos apenas criar em cada um desses modos 1 ação de entrada para gerenciar o aquecimento (Eco para o *Ausente*, Proteção contra gelo para o modo *Férias*).

![Mode absent vacances](../images/mode_presence_absent_vacances.png)

#### Fonctionnement

- Quando saímos do modo *Presente* na moda *Ausente*, o alarme está ativado (ação para sair *Presente*) e o aquecimento muda para eco (modo de ação de entrada *Ausente*).  
- Quando saímos do modo *Presente* na moda *Férias*, o alarme está ativado (ação para sair *Presente*) e o aquecimento muda para proteção contra congelamento (ação de entrada do *Férias*).
- Quando saímos do modo *Ausente* na moda *Presente*, o alarme é desativado (ação de entrada do *Presente*) e o aquecimento muda para conforto (entrada do modo *Presente*).
- Quando saímos do modo *Ausente* na moda *Férias*, o aquecimento vai para a proteção contra congelamento (ação de entrada do *Férias*).
- Quando saímos do modo *Férias* na moda *Presente*, o alarme é desativado (ação de entrada do *Presente*) e o aquecimento muda para conforto (entrada do modo *Presente*).
- Quando saímos do modo *Férias* na moda *Ausente*, o aquecimento muda para eco (ação de entrada do *Ausente*).

### Modo de presença duas vezes

Modificamos ligeiramente o exemplo anterior para ilustrar a filtragem de ações.

![Filtre](../images/mode_presence_filtre.png)

Para fazer isso, o alarme não será mais ativado ao sair do modo *Presente* mas na entrada de modos *Ausente* e *Férias*. Após a modificação, obtemos isso :

![Presente](../images/mode_presence_bis_present.png)
![Ausente](../images/mode_presence_bis_absent.png)
![Férias](../images/mode_presence_bis_vacances.png)

Observação : nos modos *Ausente* e *Férias*, o alarme só é ativado se você sair do modo *Presente*. Se formos de *Ausente* no *Férias* (e vice-versa), o alarme já está acionado, portanto não há necessidade de refazer a ação.

#### Operação bis

- Quando saímos do modo *Presente* na moda *Ausente*, o alarme está ativado (modo de ação de entrada *Ausente*) e o aquecimento muda para eco (modo de ação de entrada *Ausente*).  
- Quando saímos do modo *Presente* na moda *Férias*, o alarme está ativado (modo de ação de entrada *Férias*) e o aquecimento muda para proteção contra congelamento (ação de entrada do *Férias*).
- Quando saímos do modo *Ausente* na moda *Presente*, o alarme é desativado (ação de entrada do *Presente*) e o aquecimento muda para conforto (entrada do modo *Presente*).
- Quando saímos do modo *Ausente* na moda *Férias*, o aquecimento vai para a proteção contra congelamento (ação de entrada do *Férias*). O alarme não está ativado.
- Quando saímos do modo *Férias* na moda *Presente*, o alarme é desativado (ação de entrada do *Presente*) e o aquecimento muda para conforto (entrada do modo *Presente*).
- Quando saímos do modo *Férias* na moda *Ausente*, o aquecimento muda para eco (ação de entrada do *Ausente*).  O alarme não está ativado.
