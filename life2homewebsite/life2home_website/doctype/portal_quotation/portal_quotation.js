// Copyright (c) 2023, Govind Jangid and contributors
// For license information, please see license.txt

frappe.ui.form.on('Portal Quotation', {
	// refresh: function(frm) {

	// }
});

frappe.ui.form.on('Portal Quotation Item', {
    rate: function(frm, cdt, cdn) {
        let row = locals[cdt][cdn];
        frappe.model.set_value(cdt, cdn, 'amount', row.quantity * row.rate);
    },
    quantity: function(frm, cdt, cdn) {
        let row = locals[cdt][cdn];
        frappe.model.set_value(cdt, cdn, 'amount', row.quantity * row.rate);
    }
});