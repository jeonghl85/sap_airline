sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"sapui5/demo/flightapp/model/models",
	"./controller/AirlineAdd"
], function (UIComponent, Device, models, AirlineAdd) {
	"use strict";

	return UIComponent.extend("sapui5.demo.flightapp.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function () {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// enable routing
			this.getRouter().initialize();

			// set the device model
			this.setModel(models.createDeviceModel(), "device");

			// set dialog
			this._airlineAdd = new AirlineAdd(this.getRootControl());

		},

		exit: function () {
			this._airlineAdd.destroy();
			delete this._airlineAdd;
		},

		openAirlineAdd: function () {
			this._airlineAdd.open();
		}
	});
});