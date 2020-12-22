# Cómo publicar el complemento en el mercado

## Requisitos previos

- Registrarse como desarrollador, ver [aquí](https://www.jeedom.com/site/fr/dev.html).
- A la espera de la validación de la cuenta de mercado como desarrollador.
- Tenga su complemento en github (depósito privado o no)).

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
  - Documentación y enlaces
    - Descripción (asegúrese de hacer los puntos importantes, la mayoría de los usuarios no verán la documentación antes de comprar).
    - Las lenguas.
    - Hardware compatible
    - Una nota sobre el uso si es necesario.
  - Github : aquí es donde colocará la información entre el mercado y Github.
    - El token (para poner solo si su complemento está en un depósito privado).
    - Tu nombre de usuario github.
    - El nombre del repositorio en github.
    - Marque la casilla para que el mercado gestione la traducción de su complemento y la documentación (tenga cuidado en este caso de otorgar todos los derechos al usuario `jeedom-market` de github en su repositorio de github).

   Una vez guardado, al regresar a la pestaña de github, puede indicar las ramas :

   - Beta
   - Stable
   - V3 (solo si tiene una rama diferente para el soporte de Jeedom v3).

   La sincronización se realiza automáticamente todos los días a las 12.10 p.m. (tenga en cuenta la cantidad de complementos y las restricciones de llamadas después de que la actualización comience a las 12.10 p.m. pero tome varias diez horas). También puede iniciar una sincronización manual de una rama desde el archivo del complemento.
