# CSS Toggle Switch [![Flattr this git repo](http://api.flattr.com/button/flattr-badge-large.png)](https://flattr.com/submit/auto?user_id=ghinda&url=https://github.com/ghinda/css-toggle-switch&title=css-toggle-switch&language=javascript&tags=github&category=software)

[![Build Status](https://travis-ci.org/ghinda/css-toggle-switch.png)](https://travis-ci.org/ghinda/css-toggle-switch)

CSS Toggle Switches are a set of accessible CSS-only *switch* components, created from standard form controls in the markup.

You can use them standalone, or with [Bootstrap](http://getbootstrap.com/) or [Foundation](http://foundation.zurb.com/).

## Install

Download from the [project page](http://ghinda.net/css-toggle-switch/).

Install with [Bower](http://bower.io/): `bower install --save css-toggle-switch`

Install with [Component](https://component.github.io/): `component install ghinda/css-toggle-switch`


## How to use it

Just include `toggle-switch.css`, and use the markup from the [documentation](http://ghinda.net/css-toggle-switch/).


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

## Acknowledgements

* Standalone themes are based on [Sort Switches / Toggles by Orman Clark](http://www.premiumpixels.com/freebies/sort-switches-toggles-psd/), [iOS 7](https://developer.apple.com/library/ios/documentation/UserExperience/Conceptual/UIKitUICatalog/UISwitch.html) and [Android](https://developer.android.com/design/building-blocks/switches.html).
* iOS label tap issue and fix reported by [Ben Dwyer](https://github.com/scruffian).
* Refactoring to export the CSS with multiple unit types (px, em, rem) by [Henjo Hoeksma](https://github.com/hphoeksma).
* [List of contributors on Github](https://github.com/ghinda/css-toggle-switch/graphs/contributors)

CSS Toggle Switches is a project by [Ionuț Colceriu](http://ghinda.net).
