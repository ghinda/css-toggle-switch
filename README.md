# CSS Toggle Switch

[![Build Status](https://travis-ci.org/ghinda/css-toggle-switch.png)](https://travis-ci.org/ghinda/css-toggle-switch)
[![Downloads](https://img.shields.io/npm/dt/css-toggle-switch.svg)](https://www.npmjs.com/package/css-toggle-switch)
[![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/ionutcolceriu?utm_source=github&utm_medium=button&utm_term=ionutcolceriu&utm_campaign=github)

CSS Toggle Switches are a set of accessible CSS-only *switch* components, created from standard form controls in the markup.

You can use them standalone, or with [Bootstrap](http://getbootstrap.com/) or [Foundation](http://foundation.zurb.com/).

## Install

Download from the [project page](http://ghinda.net/css-toggle-switch/).

With [Bower](http://bower.io/): `bower install --save css-toggle-switch`

With [npm](https://www.npmjs.com/package/css-toggle-switch): `npm install --save css-toggle-switch`

From [jsDelivr](https://www.jsdelivr.com/projects/css-toggle-switch)

```
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/css-toggle-switch@latest/dist/toggle-switch.css" />
```


## How to use it

Just include `toggle-switch.css`, and use the markup from the [documentation](http://ghinda.net/css-toggle-switch/).

### Scaling

By default, the switches will scale along with the font size on their parent, because they're built using `em`s.

If you want to switches to scale using `rem`s, you can include the `toggle-switch-rem.css` file (without including `toggle-switch.css`).

If you don't need the switches to scale at all, you can use the the `toggle-switch-px.css` file.


## Switches

### Light switch

Use the light switch, instead of a checkbox, for simple *On/Off* options.

### Toggle switch

Use the toggle switches, instead of radio buttons, for two or more, specific options.


## Browser support

The toggle switches work on all modern browsers, including mobile ones(even proxy-browsers like Opera Mini).

**Browsers without support for media-queries, such as IE8 and bellow, get standard form elements.**

The `onclick=""` attribute is required for older iOS and Opera Mini support.

## Development

You'll need Grunt:

```
  grunt server
```

Then

```
  http://localhost:9000/
```

Don't use the `gh-pages` branch. It's used only for hosting the documentation website.


## License

CSS Toggle Switch is a project by [Ionuț Colceriu](http://ghinda.net), licensed under the [MIT license](LICENSE).
