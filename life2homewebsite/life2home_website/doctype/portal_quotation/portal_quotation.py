# Copyright (c) 2023, Govind Jangid and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class PortalQuotation(Document):
	def validate(self):
		self.calculate_total_amount()

	def calculate_total_amount(self):
		total_amount = 0
		for row in self.items:
			if not row.amount:
				continue

			total_amount += float(row.amount)

		self.total_amount = total_amount


@frappe.whitelist(allow_guest=True, methods=['POST'])
def create_or_update_portal_quotation(data):
	if isinstance(data, str):
		data = frappe.parse_json(data)

	if frappe.db.exists("Portal Quotation", data.get('email')):
		doc = frappe.get_cached_doc("Portal Quotation", data.get('email'))
	else:
		doc = frappe.new_doc("Portal Quotation")

	doc.update({
		'full_name': data.get('name'),
		'mobile_no': data.get('phone'),
		'email_id': data.get('email'),
	})

	if data.get('items'):
		for row in data.get('items'):
			doc.append('items', {
				'item_detail': row.get('item_detail'),
				'quantity': float(row.get('quantity')),
				'rate': float(row.get('rate')),
				'amount': float(row.get('amount')),
			})

	doc.save(ignore_permissions=True)
	return doc.full_name