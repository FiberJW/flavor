<p align="center">
  <img alt="flavor" src="./logo.png" width="546">
</p>

<p align="center">
  A really naive way to flavor your JavaScript.
</p>

`npm install -g flavor`

`suh <sourcefile.js> <outputfile.js>`

## Write JS How You Want

Specify a `flavor.config.js` file in the directory of the file you want to transform.

`flavor.config.js` must export an object with a `keys` property.

[Example Config](./example/flavor.config.js)

[Example SourceFile](./example/target.js)
