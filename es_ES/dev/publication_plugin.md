# Cómo publicar el complemento en el mercado

## Requisitos previos

- Habiéndose registrado como desarrollador, consulte [aquí](https://www.jeedom.com/site/fr/dev.html).
- Habiendo esperado la validación de la cuenta de mercado como desarrollador.
- Verifica en Comunidad que tienes acceso al “Developer Lounge”".
- Ha puesto su complemento en github (repositorio privado o no)).
- Presente su complemento en el “Developer Lounge” y en la “Presentación de complementos”"

## Presentación del complemento

¿Por qué presentar su complemento? !

Para evitar trabajar en tu propio rincón y ver a otro desarrollador salir con lo mismo al final.  
Para obtener ayuda para diseñar este.  
Para permitir que el equipo de Jeedom durante un ToStable sepa para qué se utiliza su complemento y cómo está codificado.  
Para compartir tus ideas y comentarios :wink:  

No le pedimos un ensayo sobre sus complementos, solo información :

- Nombre e ID > Z-Wave (openzwave) // puedes poner esto en el título de tu tema.
- qué hace tu complemento
- tipo de idiomas utilizados
- ¿Usa un demonio? ? dependencias especiales ? crones ?
- ¿Tiene un panel dedicado? ?
- Pagado | gratis ? (si ya tienes una idea)
- Enlace de GitHub u otro sitio de repositorio (si lo desea))
- Enlace a la documentación
A partir de ahí, un moderador asignará una etiqueta a su complemento

También tienes varias etiquetas a tu disposición, para que el equipo de Jeedom pueda avisarte más fácilmente :

demonio (si tienes un demonio)  
dependence_intall (si tiene instalaciones de dependencia)  
nodejs o python (lenguaje utilizado en su demonio)  
cron (si usa el motor cron Jeedom)  
jsonrpc (si usa la API Jeedom jsonrpc)  
idea, beta, estable, privado (dependiendo de dónde esté su complemento)  
gratis, pagado  
panel-dash, panel-mob (si tiene un panel en su complemento)  

## Configuration

Una vez conectado con su cuenta de desarrollo en el mercado, debe :

- Haga clic en mercado y luego agregue
- Ingrese información sobre su complemento :
  - General :
    - Precio.
    - ID (el que está en el archivo info.json).
    - Nombre.
    - Categoría.
    - Si es privado o no.
  - Documentación y enlaces (Esta información está basada en el archivo de información.json de tu complemento)
    - La descripción (ponga bien los puntos importantes, la mayoría de usuarios no verán la documentación antes de comprar)).
    - Idiomas.
    - Equipos compatibles
    - Una nota sobre el uso si es necesario.
  - GitHub : aquí es donde vas a poner la información entre el mercado y Github.
    - El token (esto le permite recuperar la información del complemento en la documentación de jeedom). Vous pouvez le créer sur la page GitHub suivante : https://github.com/settings/tokens, elija `token classic`, `sin vencimiento` y verifique la parte `repo`.
    - Tu nombre de usuario de github.
    - El nombre del repositorio en github.
    - Marque la casilla para que el mercado gestione la traducción de su complemento y la documentación (tenga cuidado en este caso de otorgar todos los derechos al usuario de github `jeedom-market` en su repositorio de github).

   Una vez guardado, volviendo a la pestaña de github, podrás indicar las ramas de tu github que corresponden a las versiones de mercado (recuerda hacer clic en `Validar` antes de hacer clic en `Probar/Sincronizar`) :

   - Beta (por ej: beta)
   - Estable (por ej: master)
   - V3 (solo si tiene una rama diferente para soporte de Jeedom v3)).

   La sincronizacion se realiza automaticamente todos los dias a las 12:10 p. m. (tenga cuidado debido a la cantidad de complementos y restricciones de llamadas API, la actualizacion comienza a las 12:10 p. m. pero puede demorar varias diez horas), o mediante sincronizacion manual de 'una sucursal. desde el archivo del complemento.
   
   
   > **Nota**
   > Tienes una cuenta de mercado con un nombre distinto a comunidad y quieres publicar con el nombre de comunidad.
   > Vaya a su cuenta de mercado en "Mi perfil".  En el área "Para desarrolladores", puedes indicar el nombre de tu comunidad en el campo de autor. 
