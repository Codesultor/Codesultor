# tsconfig

Contains `tsconfig.json` template files for various environments. They can be extended by putting this in the module's `tsconfig.json`.

```json
{
  "$schema": "https://json.schemastore.org/tsconfig",
  "extends": "tsconfig/module.json"
  ...
}
```
