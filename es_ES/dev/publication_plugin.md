# Cómo publicar el complemento en el mercado

## Prerrequisitos

- Se registró como desarrollador, consulte [aquí](https://www.jeedom.com/site/fr/dev.html)
- Ha esperado la validación de la cuenta de mercado como desarrollador
- Ha puesto su complemento en github (repositorio privado o no)

## Configuration

Una vez conectado con su cuenta de desarrollo en el mercado, debe : 

- haga clic en el mercado y luego en agregar
- complete la información sobre su complemento : 
  - General : 
    - Prix
    - Id (el del archivo info.json)
    - Nom
    - Categoría
    - Ya sea privado o no para empezar
  - Documentación y enlaces
    - la descripción (asegúrese de asegurarse de que el punto es que la mayoría de los usuarios no verán la documentación antes de comprar)
    - Las lenguas
    - hardware compatible
    - una nota sobre el uso si es necesario
  - Github : aquí es donde pondrás la información entre el mercado y Github
    - el token (solo póngalo si su complemento está en un repositorio privado)
    - tu nombre de usuario de github
    - el nombre del repositorio en github
    - marque la casilla para que el mercado gestione la traducción de su complemento y la documentación (tenga cuidado en este caso de otorgar todos los derechos al usuario zoic21 de github en su repositorio de github)
    
   Una vez guardado al regresar a la pestaña de github, tendrá 3-4 campos para indicar las ramas : 
   
   - beta
   - stable
   - pro (es inútil en el 99% de los casos)
   - stablev3 (pronto)
   
   La sincronización se realiza automáticamente todos los días a las 12:10 (tenga cuidado, dada la cantidad de complementos y las restricciones de llamadas a la API, la actualización comienza a las 12:10 pero demora varias diez horas). También puede iniciar una sincronización manual de una rama desde el archivo del complemento
