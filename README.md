angular-md-pull-to-refresh
--------------------------

angular-md-pull-to-refresh gives you an angular directive that can be attached to a scrollable element (such as an md-content)
and provides a pull-to-refresh functionality.

How do I use it
===============

1. bower install infomofo/angular-md-pull-to-refresh
2. include the service in your angular module config

        var app = angular.module('YourApp',['angular-md-pull-to-refresh']);

3. Use the directive in your html file.
4.

How do I affect the appearance
==============================

Currently the directive injects an md-progress-bar with the md-accent color.