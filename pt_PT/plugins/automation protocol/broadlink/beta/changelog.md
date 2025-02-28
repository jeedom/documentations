# Changelog Broadlink

>**IMPORTANTE**
>
>Se não houver informação sobre a atualização, significa que se trata apenas da atualização da documentação, tradução ou texto.

# 

- Corrija um vazamento de memória no daemon
- Corrigir um problema ao instalar dependências que poderiam ocorrer em determinadas instalações
- Suppression de **l'installation** de 2 dépendances (`pycrypto` & `asn1crypto`) qui ne sont plus utiles pour le plugin
- Modernização da interface
- Debian 11 necessário
- Compatibilidade com Debian 12
- Jeedom v4.4.8 obrigatório

# 30/09/2022

- Corrigida a instalação de dependências no Jeedom v4.2

# 05/03/2021

- Atualização do script de dependências após a mudança de criptografia

# 15/01/2021

- Corrigido um problema com dependências de buster

# 23/11/2020

- Gerenciamento das dependências de certas instalações corrompidas por terceiros de criptografia em python 3 *(reinicie as dependências se você se deparar com um problema)*

# 20/11/2020

- Otimizações gerais
- Nova apresentação da lista de objetos
- Adição da tag "compatibilidade V4"

# 31/07/2020

- Mudar para python 3 *(você provavelmente precisará reiniciar as dependências)*
- Adicionado gerenciamento de RM4 *(leia a documentação para a particularidade)*
- Adicionado aprendizado avançado de RF com dois estágios, um para variar as frequências e encontrá-lo e outro para aprender. Aumentará a compatibilidade de aprendizado

# 11/09/2019

- Adaptação para jeedom v4

# 09/09/2018

- Adição da imagem do SC1

# 10/03/2018

- Forçar sim em dependências
