# Czytelnik

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/toc-generator.svg)](https://npmjs.org/package/toc-generator)
[![Downloads/week](https://img.shields.io/npm/dw/toc-generator.svg)](https://npmjs.org/package/toc-generator)
[![License](https://img.shields.io/npm/l/toc-generator.svg)](https://github.com/krzysztofzuraw/toc-generator/blob/master/package.json)

Czytelnik (eng. _reader_) is a CLI tool that generates markdown list with contents of given folder.
It is useful for generating table of contents.

<!-- toc -->
* [Czytelnik](#czytelnik)
* [Usage](#usage)
* [Commands](#commands)
* [How it is working](#how-it-is-working)
<!-- tocstop -->

# Usage

<!-- usage -->
```sh-session
$ npm install -g czytelnik
$ czytelnik COMMAND
running command...
$ czytelnik (-v|--version|version)
czytelnik/0.1.0 darwin-x64 node-v15.3.0
$ czytelnik --help [COMMAND]
USAGE
  $ czytelnik COMMAND
...
```
<!-- usagestop -->

# Commands

<!-- commands -->

<!-- commandsstop -->

# How it is working

Czytelnik reads `*.md` files inside `inputFolder` and based on that overrides lists between `<!-- CZYTELNIK-START -->`
and `<!-- CZYTELNIK-END -->` comments in `outputFile` (by default `README.md`).
