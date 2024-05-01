# Cómo publicar el complemento en el mercado

## Requisitos previos

- Registrarse como desarrollador, ver [aquí](https://www.jeedom.com/site/fr/dev.html).
- A la espera de la validación de la cuenta de mercado como desarrollador.
- Compruebe en la Comunidad que tiene acceso a "Developers' Lounge".
- Tenga su complemento en github (depósito privado o no)).
- Presente su complemento en "Mostrar desarrolladores" y "Presentación de complementos"

## Presentación de complementos

Por qué presentar su complemento !

Para evitar trabajar en tu rincón y ver a otro desarrollador salir con lo mismo al final.  
Para obtener ayuda con el diseño de este.  
Para permitir que el equipo de Jeedom durante un ToStable sepa para qué sirve su complemento y cómo está codificado.  
Para compartir sus ideas y comentarios :wink:  

No le pedimos una disertación sobre sus complementos, sino solo información :

- Nombre e identificación> Z-Wave (openzwave) // puede poner esto en el título de su tema.
- lo que hace tu complemento
- tipo de lenguajes utilizados
- ¿Usa un demonio? ? dependencias específicas ? crones ?
- ¿Tiene un panel dedicado? ?
- Pagado | gratis ? (si ya tienes una idea)
- Enlace de GitHub u otro sitio de repositorio (si lo desea))
- Enlace a la documentación
A partir de ahí, un moderador asignará una etiqueta a su complemento

También tienes varias etiquetas a tu disposición, para que el equipo de Jeedom te avise más fácilmente :

demonio (si tienes un demonio)  
dependency_intall (si tiene instalaciones de dependencia)  
nodejs o python (lenguaje utilizado en su daemon)  
cron (si usa el motor cron de Jeedom)  
jsonrpc (si usa la API jsonrpc de Jeedom)  
idea, beta, estable, privado (dependiendo de cómo sea su complemento)  
gratis, pagado  
panel-dash, panel-mob (si tiene un panel en su complemento)  

## Configuration

Una vez conectado con su cuenta de desarrollador en el mercado, debe :

- Haga clic en el mercado y luego agregue
- Complete la información en su complemento :
  - Principal :
    - Precio.
    - Id (el que está en el archivo info.json).
    - Nombre.
    - Categoría.
    - Ya sea privado o no.
  - Documentación y enlaces (Esta información se basa en el archivo de información.json de tu complemento)
    - Descripción (asegúrese de hacer los puntos importantes, la mayoría de los usuarios no verán la documentación antes de comprar).
    - Las lenguas.
    - Hardware compatible
    - Una nota sobre el uso si es necesario.
  - Github : aquí es donde colocará la información entre el mercado y Github.
    - El token (esto le permite recuperar la información del complemento en la documentación de jeedom). Vous pouvez le créer sur la page Github suivante : https://github.com/settings/tokens, elija `token classic`, `sin vencimiento` y verifique la parte `repo`.
    - Tu nombre de usuario github.
    - El nombre del repositorio en github.
    - Marque la casilla para que el mercado gestione la traducción de su complemento y la documentación (tenga cuidado en este caso de otorgar todos los derechos al usuario `jeedom-market` de github en su repositorio de github).

   Una vez guardado, volviendo a la pestaña de github, puedes indicar las ramas de tu github que corresponden a las versiones del mercado (recuerda hacer clic en `Validar` antes de hacer clic en `Probar/Sincronizar`) :

   - Beta (ej: beta)
   - Estable (ej: master)
   - V3 (solo si tiene una rama diferente para el soporte de Jeedom v3).

   La sincronización se realiza automáticamente todos los días a las 12:10 p. m. (tenga cuidado debido a la cantidad de complementos y restricciones de llamadas API, la actualización comienza a las 12:10 p. m. pero puede demorar varias docenas de horas), o mediante la sincronización manual de 'una sucursal desde el formulario del complemento.
   
   
   > **Nota**
   > Tienes una cuenta de mercado con un nombre diferente a comunidad y quieres publicar con el nombre de comunidad.
   > Ve a tu cuenta de mercado en "Mi perfil".  En el área "Para desarrolladores", puede indicar en el campo de autor el nombre de su comunidad. 
