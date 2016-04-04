<p align="center">
  <img alt="flavor" src="https://camo.githubusercontent.com/d484faa79a35e1dc97c0b5e53ca97abc4313640a/687474703a2f2f69313236342e70686f746f6275636b65742e636f6d2f616c62756d732f6a6a3438382f65616e706c6174746572312f53637265656e25323053686f74253230323031362d30342d3031253230617425323031302e35372e3036253230504d5f7a70736e6c637a6b676d332e706e67" width="546">
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
