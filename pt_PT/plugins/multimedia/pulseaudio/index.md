Plugin que permite conectar um alto-falante Bluetooth ao seu Jeedom. O
O plugin também permite controlar o volume do seu alto-falante através do
pacote pulseaudio.

Description : 
=============

Este plugin permite o gerenciamento do serviço PulseAudio. Este serviço gerencia tudo
no que diz respeito às entradas e saídas de áudio e microfone, como as saídas
com fio, via bluetooth ou na rede.

Também torna o serviço PulseAudio visível na sua rede
interno, você pode controlá-lo a partir de um PC executando
GNU / Linux e obtenha a música que está tocando no seu PC
enviado na saída de som Jeedom.

Este plugin também permite a adição de alto-falantes Bluetooth ao serviço
Jeedom PulseAudio e oferece como saída padrão. Então, via
Jeedom e este plugin PulseAudio, você pode executar o Deezer no seu PC
no GNU / Linux (ou Windows com o cliente PulseAudio compatível) e
obtenha o som enviado para os alto-falantes bluetooth
conectado ao Jeedom, bem como à saída de som (HDMI / Jack) do Jeedom
para completar com um amplificador.

Este modo simultâneo chegará em breve com a possibilidade de definir
latência, evitando o atraso entre as saídas de som
HDMI / Jack / Bluetooth, perfeito para o modo noturno, de acordo com a
terraço com alto-falantes Bluetooth e na sala com o amplificador !

Configuração 
=============

Instalação de plugins 
----------------------

Após fazer o download do plug-in, basta ativar o
plugin :

![image](index_html_6e0dcff06783d142.png)

Iniciar a instalação de dependências:

![image](index_html_ee255917648caafe.png)

A instalação pode levar tempo

![image](index_html_8f5ac294e319722b.png)

Após a instalação das dependências, a data da última instalação
está registrado:

![image](index_html_ae07628d0d9cf23c.png)

Allez dans les logs puis vérifiez le log « pulseaudio\_dep » afin de
verifique se há algum erro

![image](index_html_1857092a331f01.png)

Configuração do plugin 
-----------------------

De volta à configuração do plug-in Pulseaudio, na seção
« Plugin PulseAudio », sélectionner le port de clé Bluetooth :

![image](index_html_a5211f99cfeafe53.png)

Por fim, salve as alterações.

Configuração do equipamento 
=============================

Para acessar a configuração do equipamento PulseAudio, vá para
l'onglet « Plugins », « Multimédia » puis « PulseAudio » :

![image](index_html_6144037f2a656556.png)

Cliquez sur « Ajouter » pour ajouter une Alto-falante Bluetooth :

![image](index_html_a952e7310171feda.png)

Adicione um nome ao seu equipamento:

![image](index_html_5a766711e205ad3.png)

Preencha os diferentes campos:

![image](index_html_59ce8e4aed01a0ef.png)

-   **Nome do alto-falante Bluetooth** : o nome do seu equipamento

-   **Objeto pai** : indica o objeto pai ao qual pertence
    o equipamento

-   **Porta chave Bluetooth** : seleção da porta do seu transmissor
    Bluetooth usado para este perfil

-   **Categoria** : categorias de equipamentos

-   **COMMENTAIRE** : permite adicionar um comentário

-   **Ativar** : torna seu equipamento ativo

Clique no assistente de emparelhamento:

![image](index_html_b11a463a181fee2c.png)

Cliquez sur le bouton « suivant » :

![image](index_html_74cfef6547af4c77.png)

O assistente verifica os dispositivos Bluetooth localizados ao redor
sua caixa Jeedom:

![image](index_html_fe41bb846a95a14d.png)

Digite o endereço MAC do seu alto-falante Bluetooth e clique em
« suivant » :

![image](index_html_dc20199f96adebcf.png)

O assistente conecta seu alto-falante Bluetooth ao Jeedom:

![image](index_html_775afe588b6090f6.png)

Une fois terminé, cliquez sur « suivant » .

Digite um nome de serviço.

**Atenção** : não deve haver espaços ou caracteres especiais nesse nome
de serviço

Cliquez sur « suivant » une fois terminé :

![image](index_html_d15cbd674d21a3e7.png)

Feche o assistente:

![image](index_html_34ceb59a4191f244.png)

O endereço MAC do seu alto-falante Bluetooth e o nome do serviço associado
são informados:

![image](index_html_2f0531b2fa9ff325.png)

Ative e depois registre o equipamento:

![image](index_html_b314d3c57bca2c32.png)

Faq 
===

**Como verificar o status do meu serviço associado ao meu gabinete ?.**

Cliquez sur le bouton « Status » :

![image](index_html_44f3633e34fd5c50.png)

Verifique o status do serviço. Isso deve ser iniciado com
sucesso (SUCESSO):

![image](index_html_fa551e46a49f58af.png)

**Como testar o envio de um arquivo de som para o meu alto-falante ?.**

Cliquez sur le bouton « Tester » :

![image](index_html_bcb212ce18487be2.png)

Inicia a reprodução de um arquivo de áudio de teste. O som sai do seu
Alto-falante Bluetooth.

Pour arrêter le test, cliquez sur « Arrêter le test ». O processo de
a leitura está parada.

![image](index_html_d2e914b1c2572539.png)

**Como ajustar o volume das minhas saídas de som?.**

Vá para a configuração do plug-in Pulseaudio, na seção
« Plugin PulseAudio » :

![image](index_html_5ba2b0d4b358e723.png)

**O volume do seu alto-falante pode ser ajustado. Você também pode verificar
as saídas de áudio para desativar**

Resolução de problemas 
==============

**Não tenho som!!!.**

Lembre-se de verificar todos os logs para detectar um possível problema

![image](index_html_672321a0b40ba4c5.png)
