== 3.1.1 (November 12, 2014)

* Fixes for the `.switch-toggle` component when using two elements, caused by the `display: table-cell`.

== 3.1.0 (November 11, 2014)

* Remove the fixed-height on the `.switch-toggle` component, allowing it to expand it's height depending on the content. The `.switch-light` component still has a fixed height, required because of the absolute positioning.
* `.switch-toggle` now uses `display: table` to horizontally arrange the labels, instead of using floats.

== 3.0.0 (October 4, 2014)

* Add UTF-8 charset.
* Complete refactoring to export the CSS with multiple unit types (px, em, rem) by [Henjo Hoeksma](https://github.com/hphoeksma). We now have 3 different versions that you can use, depending on if and how you want the switch to scale.
* Spacing tweaks for the `switch-android` theme.


== 2.1.6 (June 6, 2014)

* Upgrade bower components.
* Fix bower version issues.

== 2.1.4 (January 6, 2014)

* Initial LESS version.

== 2.1.3 (October 1, 2013)

* More changes to the old-Webkit bug-fix, to fix issues with old Android on tablets.

== 2.1.2 (October 1, 2013)

* Prefix the generic class names for the themes with `.switch-` to avoid conflicts. So now we have `.switch-android`, `.switch-candy` and `.switch-ios`.
* Changes to the old-Webkit bug-fix, to try and resolve issues with old Android on new devices (with high density screens).
* Improve the Qunit tests, to bypass issues caused by touch events on some mobile platforms.

== 2.0.2 (September 30, 2013)

* Created Qunit tests for all the themes and switches with multiple options.

== 2.0.1 (September 29, 2013)

* Improve the old-Webkit bug-fix that was mostly visible on mobile devices, to improve device compatibility.

== 2.0.0 (September 23, 2013)

* Change class names for both the checkbox and radio-based switches, to `.switch-light` and `.switch-toggle`, to not conflict with other components.
* Replace the `.slide-button` element with a simpler anchor tag.
* Add compatibility with Foundation 4 for the multiple options switch.
* Remove the Ruby dependency for development, by using grunt-sass instead of the previous grunt-contrib-compass.
* Remove the Compass dependency for development, by using Bourbon instead.
* Various small bug-fixes and improvements in the themes.
* New documentation website for version 2.0.0, with better demos.

== 1.1.1 (August 31, 2013)

* Add color transition on the labels, for the Candy theme.

== 1.1.0 (August 27, 2013)

* Improve the old-Webkit infinite-animation bug-fix, to only target older devices, and avoid the high CPU usage issues on new or large-screen devices.
* Reverse the order of the On/Off switch, to have the Off option first, and be more in line with the UI guidelines of iOS, Android and Windows, for toggle switches.
* Minor improvements to the iOS and Android themes.

== 1.0.0 (August 24, 2013)

* Moved to Sass.
* Support for Bootstrap 3.0.
* Improve the Android and iOS themes.
* Use Grunt to compile the Sass files.
* Use Bower for dependency management in the documentation.
* Bower and Component support.

