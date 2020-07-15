sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/Device"
], function (Controller, Device) {
	"use strict";

	return Controller.extend("sap.training.controller.Grid", {

		onInit: function () {
			// apply compact density if touch is not supported, the standard cozy design otherwise
			// this.getView().addStyleClass(Device.support.touch ? "sapUiSizeCozy" : "sapUiSizeCompact");

			// apply compact density for desktop, the standard cozy design otherwise
			var sClass = Device.system.desktop ? "sapUiSizeCompact" : "sapUiSizeCozy";
			this.getView().addStyleClass(sClass);

			Device.media.attachHandler(this._sizeStandardChanged, this, Device.media.RANGESETS.SAP_STANDARD);
			Device.media.attachHandler(this._sizeExtendedChanged, this, Device.media.RANGESETS.SAP_STANDARD_EXTENDED);
		},

		_sizeStandardChanged: function (mParams) {
			var oMessageStrip = this.getView().byId("idStandardMessage");
			oMessageStrip.setText("Rangeset SAP_STANDARD: " + mParams.name + ": From " + mParams.from + " " + mParams.unit + " to " + mParams.to +
				" " + mParams.unit);
		},

		_sizeExtendedChanged: function (mParams) {
			var oMessageStrip = this.getView().byId("idExtendedMessage");
			oMessageStrip.setText("Rangeset SAP_STANDARD_EXTENDED: " + mParams.name + ": From " + mParams.from + " " + mParams.unit + " to " +
				mParams.to + " " + mParams.unit);
		}

	});

});