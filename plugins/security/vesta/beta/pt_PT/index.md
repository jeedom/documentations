# Plugin Vesta

#Description

Plugin para gerenciar sua central Vesta



# Configuração do plug-in

Depois de baixar o plugin, você deve primeiro ativá-lo, como qualquer plugin Jeedom :

![config](../images/vestaActiv.png)

Então, você deve iniciar a instalação das dependências (mesmo que elas apareçam OK) :

![dependances](../images/vestaDep.png)

Finalmente, inicie o daemon :

![demon](../images/vestaDemon.png)

Você pode modificar a porta do socket de escuta para eventos vindos da central

![socket](../images/vestaConfig.png)







# Uso do plug-in


IMPORTANTE :

Para receber Eventos da sua central, você deve configurar o painel desta última. 
Neste último, acessível através do IP local da central em seu navegador, você deve ir para Systeme Setting, depois Report


E modifique o seguinte URL :

![urlpanel](../images/vestapanel.png)

Substitua o ip pelo ip local do seu jeedom, e a porta pela que você configurou no plugin

Escolha um grupo diferente dos outros URLs de relatórios

Lembre-se de definir Essential e No Retry

Sauvegardez

![essential](../images/vestapanel2.png)






No seu plugin, uma vez concluída a configuração, basta clicar em Sincronizar para criar automaticamente o equipamento correspondente às Partições e Zonas criadas na interface web da sua central

Os equipamentos (sensor, detector IR etc.) configurados e atribuídos às zonas na interface web, terão comandos criados automaticamente nas zonas correspondentes.