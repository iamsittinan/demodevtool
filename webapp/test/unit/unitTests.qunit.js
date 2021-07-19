/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"comiam.demo./ztestdemotg/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
