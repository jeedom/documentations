# Cómo publicar el complemento en el mercado

## Requisitos previos

- Registrarse como desarrollador, ver [aquí](https://www.jeedom.com/site/fr/dev.html)
- A la espera de la validación de la cuenta de mercado como desarrollador
- Tenga su complemento en github (depósito privado o no)

## Configuración

Una vez conectado con su cuenta de desarrollador en el mercado, debe : 

- haga clic en el mercado y luego agregue
- complete la información en su complemento : 
  - Principal : 
    - Precio
    - Id (el que está en el archivo info.json)
    - Nombre
    - Categoría
    - Si es privado o no comenzar
  - Documentación y enlaces
    - la descripción (bueno, lo importante es que la mayoría de los usuarios no verán la documentación antes de la compra)
    - Las lenguas
    - hardware compatible
    - una nota sobre el uso si es necesario
  - Github : aquí es donde colocará la información entre el mercado y Github
    - el token (solo se pone si su complemento está en un depósito privado)
    - tu nombre de usuario github
    - el nombre del repositorio en github
    - marque la casilla del mercado para administrar la traducción de su complemento y documentación (tenga cuidado en este caso de otorgar todos los derechos al usuario zoic21 de github en su repositorio de github)
    
   Una vez guardado volviendo a la pestaña github, tendrá 3-4 campos para indicar las ramas : 
   
   - Beta
   - Estable
   - pro (es inútil en el 99% de los casos)
   - Establev3 (próximamente)
   
   La sincronización se realiza automáticamente todos los días a las 12:10 (tenga en cuenta la cantidad de complementos y restricciones de llamadas después de que la actualización comience a las 12:10, pero tome varias diez horas). También puede iniciar una sincronización manual de una rama desde el archivo de complemento
