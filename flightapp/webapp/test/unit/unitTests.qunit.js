/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"sapui5demo./flightapp/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
