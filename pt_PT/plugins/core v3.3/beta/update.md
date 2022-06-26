 
===========

 **Update Center** permite atualizar todos
Recursos Jeedom, incluindo software básico,
plugins, widgets, etc. Outras funções de gerenciamento de extensão
estão disponíveis (excluir, reinstalar, verificar etc.))

A página Centro de Atualização 
================================

É acessível a partir do menu **Administração → Centro de atualização
jour**.

Você encontrará, à esquerda, todas as funcionalidades do
Jeedom e na parte direita **** quem descreve o que ele
aconteceu, quando você lançou uma atualização.

Funções no topo da página. 
---------------------------------

No topo da tabela estão os botões de controle. 
periodicamente conecte-se ao mercado para ver se há alguma atualização
estão disponíveis (a data da última verificação é indicada na parte superior
esquerda da mesa). Se você deseja executar uma verificação manual,
você pode pressionar o botão "Verificar atualizações".

O botão **Atualizar** permite atualizar o conjunto de
Jeedom. Depois que você clica nele, temos diferentes
 :

-   **Salvar antes** : Faça backup do Jeedom antes
    realize a atualização.

-   **Plugins de atualização** : Permite incluir plugins no diretório
    Update.

-   **Atualizar o núcleo** : Permite incluir o kernel Jeedom no
    a atualização.

-   **Modo forçado** : Atualização no modo forçado, ou seja,
    mesmo que haja um erro, o Jeedom continua e não restaura
    o backup.

-   **Update para reaplicar** : Permite reaplicar uma aposta
    atualizado. ( : Todas as atualizações não podem ser reaplicadas.)

> ****
>
> Antes de uma atualização, por padrão, o Jeedom fará um backup. Em
> Se houver um problema ao aplicar uma atualização, o Jeedom irá
> restaurar automaticamente o backup feito logo antes. Este princípio
> é válido apenas para atualizações do Jeedom e não para plugins.

> ****
>
> Você pode forçar uma atualização do Jeedom, mesmo que isso não ocorra
> não ofereça nenhum.

A tabela de atualização 
---------------------------

A tabela consiste em duas guias :

-   **Núcleo e plugins** : Contém o software básico Jeedom e
    lista de plugins instalados.

-   **** : Contém widgets, scripts etc.

Você encontrará as seguintes informações : * **** : OK ou NÃO.
Permite que você saiba o estado atual do plug-in. \* **** : Voce ai
encontre a fonte do elemento, o tipo de elemento e seu nome. \*
**** : Indica a versão específica do item. \* **** :
Marque esta caixa se não desejar que este item seja atualizado
dia durante a atualização geral (Button **Atualizar**).

> ****
>
> Para cada tabela, a primeira linha permite o seguinte filtro
> o estado, nome ou versão dos elementos presentes.

Em cada linha, você pode usar as seguintes funções para
todo elemento :

-   **Reinstalar** : Forçar reassentamento.

-   **** : Permite desinstalá-lo.

-   **Verificar** : Consulte a fonte de atualizações para descobrir se
    uma nova atualização está disponível.

-   **Atualizar** : Permite atualizar o elemento (se houver)
    uma atualização).

-   **** : Acesse a lista de alterações no
    Update.

> ****
>
> Se o changelog estiver vazio, mas você ainda tiver uma atualização
> update significa que a documentação foi atualizada.
> Portanto, não há necessidade de solicitar ao desenvolvedor
> mudanças, uma vez que não há necessariamente. (é frequentemente uma aposta
> da tradução da documentação)

> ****
>
> Note que "core : jeedom "significa" atualizar o software
> Base de Jeedom".

Atualização da linha de comando 
================================

É possível atualizar o Jeedom diretamente no SSH.
Uma vez conectado, este é o comando para executar :

    

Os possíveis parâmetros são :

-   **** : `force ', para iniciar uma atualização no modo forçado (não
    ignorar erros).

-   **** : seguido do número da versão, para reaplicar o
    mudanças desde esta versão.

Aqui está um exemplo de sintaxe para fazer uma atualização forçada no
reaplicando alterações desde 1.188.0 :

    sudo php / var / www / html / install / update.modo php = versão forçada = 1.188.0

Atenção, após uma atualização na linha de comando, é necessário
reaplicar direitos na pasta Jeedom :

    :www-data / var / www / html
