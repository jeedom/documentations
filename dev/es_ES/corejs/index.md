## Desarrollo en JavaScript y Core 4.4 +


El núcleo de Jeedom ha sufrido una profunda reestructuración del front-end en la versión 4.4. Aunque históricamente se basaba en jQuery y Bootstrap v3, el núcleo ahora está escrito en Vanilla JS, sin ningún marco de trabajo. Los complementos de jQuery se han sustituido por bibliotecas internas u otras bibliotecas también en JS.

Los plugins se verán inevitablemente afectados en futuras versiones, ya que estas bibliotecas, e incluso jQuery, dejarán de cargarse desde el núcleo.

> ¡Atención! Los plugins que sigan estas recomendaciones no funcionarán en un Core anterior a la versión 4.4.
>
> Por lo tanto, habrá que aplicar `"require" : "4.4",` en el archivo info.json del complemento.

El objetivo aquí no es explicar todos los métodos de JavaScript, ya que hay suficiente documentación oficial al respecto:

- [MSDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [JavaScript](https://devdocs.io/javascript/)


A continuación, veremos las principales funciones que ofrece el Core y que se pueden utilizar en los complementos.

- [Dov dev Jeedom Core 4.4](../core4.4.md)

- [Atajos para los elementos HTML](shortcuts.md)
- [Cuadros de diálogo](dialogs.md)
- [Ayudas](helpers.md)
- [Gestión de eventos (*listeners*) en JavaScript](events.md)
- [Gestión de llamadas Ajax](ajax.md)
- [Establecer y obtener valores](jeevalue.md)
- [Autocompletado](jeeComplete.md)
