## [4.1.0] - 2017-08-11

- Add support for Bootstrap 4 Beta.

## [4.0.3] - 2017-08-07

- Remove the `bourbon` dev dependency. Removes most CSS prefixes.
- Upgrade Foundation and all dev dependencies.

## [4.0.2] - 2015-12-02

- Make the switch focus outline match the native focus styles more closely.

## [4.0.1] - 2015-11-26

- Fix the text jumping to the left on `switch-toggle` bug, happening on Firefox when selecting an item.
- Fix the ripple animation on Firefox, on the Material Design theme, by using `visibility` instead of `opacity` for the "show only on focus" trick.

## [4.0.0] - 2015-11-19

- BREAKING: New HTML markup for `switch-light`, more semantic and with more control over the label and switch widths and placement.
- BREAKING: Rename the `android` theme to `holo`.
- BREAKING: Remove the `less` version because it was unmaintained.
- `switch-toggle` no longer needs the `switch-X` number classes. Just add up to 6 items, no extra classes needed.
- New `material` theme, mimicking material design.
- Fix issues with enlarged text on `switch-toggle`.
- Various tweaks to the `ios` theme.
- Change text color of the active option in the `switch-light` `candy` theme.
- Add bold font-weights to all option labels in the `candy` theme.
- Disable text selection of the "on/off" text of the `switch-light`, to fix issues with changing the selection by swiping the switch on mobile.
- Change the project file structure, to make it easier to maintain/contribute/add new themes.
- Use `assemble` to build the static documentation site.

## [3.2.0] - 2015-10-08

- Switch to the MIT license, from Unlicense.
- Upgrade all dependencies to their latest version.

## [3.1.1] - 2014-11-12

- Fixes for the `.switch-toggle` component when using two elements, caused by the `display: table-cell`.

## [3.1.0] - 2014-11-11

- Remove the fixed-height on the `.switch-toggle` component, allowing it to expand it's height depending on the content. The `.switch-light` component still has a fixed height, required because of the absolute positioning.
- `.switch-toggle` now uses `display: table` to horizontally arrange the labels, instead of using floats.

## [3.0.0] - 2014-10-04

- Add UTF-8 charset.
- Complete refactoring to export the CSS with multiple unit types (px, em, rem) by [Henjo Hoeksma](https://github.com/hphoeksma). We now have 3 different versions that you can use, depending on if and how you want the switch to scale.
- Spacing tweaks for the `switch-android` theme.


## [2.1.6] - 2014-06-06

- Upgrade bower components.
- Fix bower version issues.

## [2.1.4] - 2014-01-06

- Initial LESS version.

## [2.1.3] - 2013-10-01

- More changes to the old-Webkit bug-fix, to fix issues with old Android on tablets.

## [2.1.2] - 2013-10-01

- Prefix the generic class names for the themes with `.switch-` to avoid conflicts. So now we have `.switch-android`, `.switch-candy` and `.switch-ios`.
- Changes to the old-Webkit bug-fix, to try and resolve issues with old Android on new devices (with high density screens).
- Improve the Qunit tests, to bypass issues caused by touch events on some mobile platforms.

## [2.0.2] - 2013-09-30

- Created Qunit tests for all the themes and switches with multiple options.

## [2.0.1] - 2013-09-29

- Improve the old-Webkit bug-fix that was mostly visible on mobile devices, to improve device compatibility.

## [2.0.0] - 2013-09-23

- Change class names for both the checkbox and radio-based switches, to `.switch-light` and `.switch-toggle`, to not conflict with other components.
- Replace the `.slide-button` element with a simpler anchor tag.
- Add compatibility with Foundation 4 for the multiple options switch.
- Remove the Ruby dependency for development, by using grunt-sass instead of the previous grunt-contrib-compass.
- Remove the Compass dependency for development, by using Bourbon instead.
- Various small bug-fixes and improvements in the themes.
- New documentation website for version 2.0.0, with better demos.

## [1.1.1] - 2013-09-31

- Add color transition on the labels, for the Candy theme.

## [1.1.0] - 2013-08-27

- Improve the old-Webkit infinite-animation bug-fix, to only target older devices, and avoid the high CPU usage issues on new or large-screen devices.
- Reverse the order of the On/Off switch, to have the Off option first, and be more in line with the UI guidelines of iOS, Android and Windows, for toggle switches.
- Minor improvements to the iOS and Android themes.

## [1.0.0] - 2013-28-24

- Switched to Sass.
- Support for Bootstrap 3.0.
- Improve the Android and iOS themes.
- Use Grunt to compile the Sass files.
- Use Bower for dependency management in the documentation.
- Bower and Component support.
