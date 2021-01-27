# GenDiff
[![Actions Status](https://github.com/bdnvsy/frontend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/bdnvsy/frontend-project-lvl2/actions)
[![Node CI](https://github.com/bdnvsy/frontend-project-lvl2/workflows/Node%20CI/badge.svg)](https://github.com/bdnvsy/frontend-project-lvl2/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/de658115abbb5709561e/maintainability)](https://codeclimate.com/github/bdnvsy/frontend-project-lvl2/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/de658115abbb5709561e/test_coverage)](https://codeclimate.com/github/bdnvsy/frontend-project-lvl2/test_coverage)



## Description

A simple tool for comparing two configuration files like .json & .yaml and show the difference

### You can install these packages by the following command:

``` 
make install
```

### The help information
Outputs usage information The default help option is `-h,--help`.
#### Example:
```
gendiff -h 
```
#### Will print out:

```bash
Usage: gendiff [options] <filepath1> <filepath2>

Compares two configuration files and shows a difference

Options:
  -V, --version        output the version number
  -f, --format [type]  output format (default: 'stylish')
  -h, --help           output usage information
```
### Usage
Available options `stylish, plain,  json`
```
  gendiff --format stylish file1.json file2.yml
```

#### Stylish output:

[![asciicast](https://asciinema.org/a/oP00cUzSyyPgNCeFhxkFIm2fk.svg)](https://asciinema.org/a/oP00cUzSyyPgNCeFhxkFIm2fk)

#### Plain output: 

[![asciicast](https://asciinema.org/a/FIxnBjPsdrfTWlHyIW74VcYIF.svg)](https://asciinema.org/a/FIxnBjPsdrfTWlHyIW74VcYIF)

#### Json output:

[![asciicast](https://asciinema.org/a/ZdXH2MAr9K6Mpe5CRP7AGx773.svg)](https://asciinema.org/a/ZdXH2MAr9K6Mpe5CRP7AGx773)
