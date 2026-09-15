## JavaScript development and Core 4.4+


The Jeedom Core underwent a major front-end restructuring in v4.4. Historically based on jQuery and Bootstrap v3, the Core is now written in vanilla JavaScript, without a framework. The jQuery plugins have been replaced by internal libraries or other JavaScript libraries.

Plugins will inevitably be affected in future versions, since these libraries—and even jQuery—are set to no longer be loaded by the Core.

> Please note: Plugins that follow these recommendations will not work on a Core version prior to 4.4!
>
> So we'll need to apply `"require" : "4.4",` in the plugin's info.json file.

The goal here isn't to explain all the JavaScript methods; there's plenty of official documentation on that:

- [MSDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [JavaScript](https://devdocs.io/javascript/)


Here, we’ll take a look at the main features provided by the Core that can be used in plugins.

- [Dov dev Jeedom Core 4.4](../core4.4.md)

- [Shortcuts for HTML elements](shortcuts.md)
- [Dialog boxes](dialogs.md)
- [Helpers](helpers.md)
- [Event handling (*listeners*) in JavaScript](events.md)
- [Ajax Request Handling](ajax.md)
- [Setting / Retrieving Values](jeevalue.md)
- [Autocomplete](jeeComplete.md)
