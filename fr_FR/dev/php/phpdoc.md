# Standards de Documentation PHP pour le Core Jeedom

## Règles Générales

1. **Langue**
   - Toute la documentation doit être rédigée en anglais
   - Cela inclut les descriptions de classes, de méthodes et de paramètres

2. **Portée de la Documentation**
   - La PHPDoc doit être concise et ne pas gêner la lisibilité du code
   - Se concentrer sur la documentation du comportement actuel et des types
   - Éviter les détails d'implémentation ou les explications trop longues

3. **Documentation des Classes**
   - Description brève de l'objectif de la classe (1-2 phrases)
   - Exemple simple d'utilisation si la classe est couramment utilisée par les développeurs de plugins
   - Références croisées vers les classes liées avec `@see` quand pertinent

4. **Documentation des Méthodes**
   - Description brève (1-2 phrases maximum)
   - Si le nom de la méthode est explicite, la description peut être omise
   - Documentation obligatoire de tous les paramètres et types de retour avec `@param` et `@return`
   - Documentation des exceptions avec `@throws` le cas échéant

5. **Documentation des Types**
   - Utiliser `@param` et `@return` pour les indications de type quand le typage strict n'est pas possible
   - Utiliser `@var` pour la documentation des types de propriétés quand nécessaire
   - Les types doivent refléter l'usage actuel, pas l'usage futur idéal
   - Pour les enums, utiliser la syntaxe union de littéraux :
     ```php
     /** @var string 'stop'|'starting'|'run'|'stoping'|'error' */
     ```
   - Pour les tableaux :
     - Éviter le simple `array` quand le type des éléments est connu
     - Pour les listes simples, privilégier la notation `string[]`
     - Pour les tableaux associatifs avec clés significatives, utiliser `array<int, string>`
     - Pour les structures complexes (comme du JSON encodé), préférer documenter le format via `@link` plutôt qu'une description détaillée du tableau

6. **Éléments Interdits**
   - Pas de TODOs ou d'éléments de roadmap
   - Pas de propositions d'évolution ou de changements futurs
   - Pas d'exemples de code longs (faire un lien vers la documentation développeur à la place)
   - Pas de détails d'implémentation ou de notes internes

7. **Exemples de Code**
   - Limités à un exemple court par classe quand nécessaire
   - Doivent être concis et démontrer uniquement l'usage basique
   - Les exemples complexes doivent être liés à la documentation développeur

8. **Liens et Références**
   - Utiliser `@link` pour référencer la documentation externe si nécessaire
   - Utiliser `@see` pour référencer les classes ou méthodes liées
   - Les liens doivent principalement pointer vers la documentation développeur Jeedom

## Format

```php
/**
 * Brève description de la classe
 *
 * @see ClasseLiee Pour les fonctionnalités liées
 */
class Exemple {
    /**
     * Brève description de la méthode si nécessaire
     *
     * @param string $param Description du paramètre
     * @return void
     * @throws \Exception En cas d'échec
     */
    public function methode($param) {
    }
}
```

## Bonnes Pratiques Supplémentaires

1. **Organisation du Code**
    - Les blocs PHPDoc doivent être bien alignés et formatés de manière cohérente
    - Maintenir une séparation claire entre les sections de code avec les commentaires standards de Jeedom
    - Utiliser les espaces de manière cohérente dans la documentation

2. **Maintenance**
    - Mettre à jour la documentation lors des modifications de code
    - Supprimer la documentation obsolète
    - Garder la documentation synchronisée avec le comportement réel du code