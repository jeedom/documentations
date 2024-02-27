# Complemento GRDF

Complemento que permite la recuperación de datos de medidores de gas en comunicación *(Gazpar por ejemplo)* vía [de una cuenta de cliente **GRDF**](https://login.monespace.grdf.fr/mire/connexion){:objetivo="\_en blanco"}.

Este complemento puede proporcionar acceso a lecturas de consumo de gas, así como a lecturas de inyección, si corresponde *(solo medidores profesionales)*. Él utiliza **la API oficial de GRDF ADICT**.

Dependiendo del tipo de medidor se pueden recuperar 2 tipos de datos :
 - **Datos publicados** son proporcionados por todos los medidores. Se trata de datos transmitidos al proveedor para su utilización en la facturación. Estos datos se pueden consultar hasta hace un máximo de 5 años.
 - **Datos informativos** hacer referencia a los datos diarios transmitidos por los medidores y publicar los datos mensuales para la facturación *(1M/MM)*. Estos datos se pueden consultar hasta hace 3 años como máximo.

Aún dependiendo del tipo de medidor, los datos disponibles no son los mismos, como tampoco lo es su frecuencia de disponibilidad.

| **Tipo de medidor** | Datos publicados | Datos informativos | Frecuencia de alivio | Frecuencia de llamada |
|:---:|---|---|---|---|
| **6M** *(particuliers)* | Datos semestrales | | Cada 6 meses desde D+2 hasta D+3 después de la entrega | 1 a 2 veces al mes |
| **1M** *(particuliers)* | Datos mensuales mes M-1 | Datos diarios :<br>- estimado<br>- últimos meses M-1 | Cada mes desde D+2 hasta D+3 después de la fecha de publicación *(información publicada y definitiva)*<br>Todos los días del D+1 al D+3 *(información estimada)* | 1 a 2 veces al mes *(publicado)*<br>1 vez por día *(informatives)* |
| **M.M.** *(professionnels)* | Datos mensuales mes M-1 | Datos diarios mes M-1 | Cada mes entre D+2 después de la fecha de publicación y los 7.º Juegos Olímpicos del mes M *(publicado)*<br>Cada mes entre el 10 y el 20 del mes M *(informatives)* | 1 a 14 veces por mes *(publicado)*<br>1 a 11 veces por mes *(informatives)* |
| **Ni una palabra** *(professionnels)* | Datos diarios :<br>- estimado<br>- últimos meses M-1 | | Todos los días del D+1 al D+2 *(estimado publicado)*<br>Cada mes entre la 1.ª y 6.ª Olimpiada del mes M *(publicado definitivamente)* | 1 vez por día |

>**INFORMACIÓN**
>
>Los contadores **6M** son complementos compatibles, sin embargo, normalmente todos han sido reemplazados por contadores **1M** a finales de 2023.

# Configuration

Como cualquier complemento de Jeedom, el complemento **GRDF** debe activarse después de la instalación.

## Configuración del complemento

>**INFORMACIÓN**
>
>No dude en **copiar el número de identificación del PCE** cuando aparece durante esta operación porque será útil durante el paso de configuración del equipo Jeedom.

Para comenzar, debes autorizar el intercambio de datos de GRDF con Jeedom haciendo clic en la imagen **Autorizar el acceso a la cuenta GRDF** desde la página de configuración del complemento :

![Lien espace client GRDF](../images/link_grdf.jpg)

Luego serás redirigido a esta página en la que deberás proporcionar información **sus identificadores en el mercado Jeedom** luego haga clic en el botón **Validar** :

![Authentification compte Market Jeedom](../images/Auth_Jeedom.jpg)

**Inicia sesión en tu área de clientes de GRDF** luego seleccione un contador **esperando consentimiento** :

![Sélection compteur GRDF](../images/grdf_home.jpg)

Seleccione sus consentimientos y luego haga clic en el botón **Validar** :

 - **Mis datos de consumo de gas** : **Sí** *(obligatoire)*
   - **Fecha de inicio** : **1 de enero del año en curso** o 1 de enero hasta hace 4 años para consultar años anteriores en Jeedom.
   - **Fecha final** : Opcionalmente, la misma fecha de finalización del consentimiento, por ejemplo.
   - **Datos publicados** : **Sí** *(obligatoire)*
   - **Datos informativos** : **Sí** *(muy recomendado)*
 - **Mis datos contractuales** : **Sí** *(facultatif)*
 - **Mis datos tecnicos** : **Sí** *(obligatoire)*
 - **Fecha de inicio del consentimiento** : **Fecha**
 - **Fecha de finalización del consentimiento** : Elección.

![Consentement GRDF](../images/grdf_choose.jpg)

Una vez validados sus consentimientos, tiene la posibilidad de **dar su consentimiento para otro PCE** O **volver a la página de Jeedom** confirmando el final de la operación :

![Validation GRDF](../images/grdf_consent.jpg)

>**IMPORTANTE**
>
>Si no puede acceder a una de estas páginas, desactive el bloqueador de anuncios del navegador.

## Configuración del equipo

Para acceder a los diferentes equipos **GRDF**, tienes que ir al menú **Complementos → Energía → GRDF**.

>**INFORMACIÓN**
>
>El botón **Agregar** le permite agregar un nuevo contador.

Una vez validadas las autorizaciones de acceso, solo queda proporcionar **el número de identificación del PCE** preocupado *(los espacios se eliminan automáticamente)* luego guarde el equipo.

Medidores profesionales *(MM o DD)* tener un campo de configuración adicional que le permite elegir el tipo de medición a tomar :
 - **Consumo**
 - **Inyección** *(Productores de Biometano)*
 - **Los 2**

# Commandes

Los pedidos se crean automáticamente en función de la frecuencia de recopilación de datos *(día, mes, semestre)* y su tipo *(definitivo o estimado)*.

El complemento se encarga de realizar cálculos mensuales y anuales cuando sea necesario, por lo que es recomendable ingresar la fecha de inicio de acceso a los datos de consumo de gas el 1 de enero durante la etapa de consentimiento.

Durante la primera copia de seguridad de los equipos activos y correctamente configurados, el complemento integrará automáticamente los históricos disponibles en el área de clientes de GRDF desde la fecha de inicio de acceso a los datos de consumo de gas. Es probable que este proceso dure mucho tiempo, puedes seguir su progreso desde el menú **Análisis → Registros** *(inicia sesión en `depuración`)*.

>**INFORMACIÓN**
>
>Los datos se recogen a más tardar a las 7 a. m. y se transmiten en kilovatios-hora (`kWh`). No están disponibles en tiempo real, sino que se registran en su fecha de valor en Jeedom.
