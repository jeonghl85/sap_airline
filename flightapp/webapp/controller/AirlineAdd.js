sap.ui.define([
	"sap/ui/base/ManagedObject",
	"sap/ui/core/Fragment"
], function (ManagedObject, Fragment) {
	"use strict";

	return ManagedObject.extend("sapui5.demo.flightapp.controller.AirlineAdd", {

		constructor: function (oView) {
			this._oView = oView;
		},

		exit: function () {
			delete this._oView;
		},

		open: function () {
			var oView = this._oView;

			// create dialog lazily
			if (!this.pDialog) {
				var oFragmentController = {
					onCloseDialog: function () {
						oView.byId("addAirline").close(); // Dialog ID 값.
					}
				};
				// load asynchronous XML fragment
				this.pDialog = Fragment.load({
					id: oView.getId(),
					name: "sapui5.demo.flightapp.view.AirlineAdd",

					controller: oFragmentController
				}).then(function (oDialog) {
					// connect dialog to the root view of this component (models, lifecycle)
					oView.addDependent(oDialog);
					return oDialog;
				});
			}
			this.pDialog.then(function (oDialog) {
				oDialog.open();
			});
		}



	});

});