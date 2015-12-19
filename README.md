Ionic App Base
=====================

A starting project for Ionic that optionally supports using custom SCSS.

## Using this project

We recommend using the [Ionic CLI](https://github.com/driftyco/ionic-cli) to create new Ionic projects that are based on this project but use a ready-made starter template.

To run this app locally, make sure the `ionic` utility is installed:

```bash
$ npm install -g ionic
```

Then clone this repo and cd into it:
```bash
$ git clone https://github.com/mcdermottsolutions/helloworld.git
$ cd helloworld
```

Then run:

```bash
$ npm install
$ ionic platform ios
$ ionic emulate ios
```

If you want to make a single change to the sass, tweak scss/ionic.app.scss then run:

```bash
$ gulp sass
```

If you want to run sass watch and have sass compile every time you hit save, then run

```bash
$ gulp watch
```

More info on this can be found on the Ionic [Getting Started](http://ionicframework.com/getting-started) page and the [Ionic CLI](https://github.com/driftyco/ionic-cli) repo.
