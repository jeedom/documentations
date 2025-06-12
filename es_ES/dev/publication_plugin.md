# Cómo publicar el complemento en el mercado

## Prerrequisitos

- Habiéndote registrado como desarrollador, consulta [aquí](https://www.jeedom.com/site/fr/dev.html).
- Habiendo esperado la validación de la cuenta de mercado como desarrollador.
- Comprueba en la Comunidad que tienes acceso al "Salón de desarrolladores"".
- Has puesto tu complemento en github (repositorio privado o no)).
- Presenta tu complemento en el «Salón de desarrolladores» y en la «Exhibición de complementos»"

## Presentación del complemento

¿Por qué presentar tu plugin? !

Para evitar trabajar en un rincón y ver a otro desarrollador salir con lo mismo al final.  
Para obtener ayuda con el diseño de este.  
Para permitir que el equipo de Jeedom durante un ToStable sepa para qué se utiliza su complemento y cómo está codificado.  
Para compartir tus ideas y comentarios :wink:  

No le estamos pidiendo un ensayo sobre sus complementos, solo algo de información :

- Nombre e id > Z-Wave (openzwave) // puedes poner esto en el título de tu tema.
- Qué hace tu complemento
- tipos de idiomas utilizados
- ¿Esta usando un demonio? ? dependencias especiales ? crones ?
- ¿Tiene un panel dedicado? ?
- Pagado | gratis ? (Si ya tienes una idea)
- Enlace de GitHub u otro sitio de repositorio (si lo desea))
- Enlace a la documentación
Desde allí, un moderador asignará una etiqueta a su complemento

También tienes varias etiquetas a tu disposición, para que el equipo de Jeedom pueda avisarte más fácilmente :

demonio (si tienes un demonio)  
dependence_intall (si tiene instalaciones de dependencia))  
nodejs o python (lenguaje utilizado en su demonio))  
cron (si usa el motor cron Jeedom)  
jsonrpc (si usa la API jsonrpc de Jeedom)  
idea, beta, estable, privada (dependiendo de dónde se encuentre su complemento))  
gratis, pagado  
panel-dash, panel-mob (si tienes un panel en tu complemento))  

## Configuration

Una vez conectado con tu cuenta de desarrollo en el mercado debes :

- Haga clic en mercado y luego en agregar
- Complete la información sobre su complemento :
  - General :
    - Precio.
    - Id (el que está en el archivo info.json)).
    - Nombre.
    - Categoría.
    - Ya sea privado o no.
  - Documentación y enlaces (Esta información se basa en el archivo de información.json de tu complemento)
    - La descripción (ponga claramente los puntos importantes, la mayoría de usuarios no verán la documentación antes de comprar)).
    - Idiomas.
    - Hardware compatible
    - Una nota sobre el uso si es necesario.
  - Github : Aquí es donde colocarás la información entre el mercado y Github.
    - El token (esto le permite recuperar información del complemento en la documentación de Jeedom)). Vous pouvez le créer sur la page Github suivante : https://github.com/settings/tokens, elija `token clásico`, `sin vencimiento` y marque la parte `repositorio`.
    - Tu nombre de usuario de GitHub.
    - El nombre del repositorio en GitHub.
    - Marque la casilla para que el mercado administre la traducción de su complemento y documentación (tenga cuidado en este caso de otorgar todos los derechos al usuario `jeedom-market` de github en su repositorio de github).

   Una vez guardado, volviendo a la pestaña de github, podrás indicar las ramas de tu github que corresponden a las versiones del market (recuerda hacer clic en `Validar` antes de hacer clic en `Probar/Sincronizar`)) :

   - Beta (por ejemplo: beta)
   - Estable (por ejemplo: master)
   - V3 (solo si tienes una rama diferente para soporte de Jeedom v3)).

   La sincronización se realiza automáticamente todos los días a las 12:10 p.m. (tenga cuidado, debido a la cantidad de complementos y las restricciones de llamadas a la API, la actualización comienza a las 12:10 p.m. pero puede demorar varias docenas de horas), o mediante la sincronización manual de una rama desde el archivo del complemento.
   
   
   > **Nota**
   > Tienes una cuenta de mercado con un nombre distinto a comunidad y deseas publicar con el nombre de comunidad.
   > Vaya a su cuenta de mercado en "Mi perfil"".  En el área "Para desarrolladores", puedes indicar el nombre de tu comunidad en el campo de autor. 
