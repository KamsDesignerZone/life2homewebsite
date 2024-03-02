let packages = {
    'economic': {
        'description': "Economic Budget for",
        0: {
            'unit_price': 15000,
            'qty': 1
        },
        1: {
            'unit_price': 50000,
            'qty': 1
        },
        2: {
            'unit_price': 75000,
            'qty': 1
        },
        3: {
            'unit_price': 95000,
            'qty': 1
        },
        4: {
            'unit_price': 120000,
            'qty': 1
        }
    },
    'combo': {
        'description': 'Combo Budget for',
        0: {
            'unit_price': 30000,
            'qty': 1
        },
        1: {
            'unit_price': 100000,
            'qty': 1
        },
        2: {
            'unit_price': 150000,
            'qty': 1
        },
        3: {
            'unit_price': 195000,
            'qty': 1
        },
        4: {
            'unit_price': 225000,
            'qty': 1
        }
    },
    'premium': {
        'description': 'Premium Budget for',
        0: {
            'unit_price': 50000,
            'qty': 1
        },
        1: {
            'unit_price': 125000,
            'qty': 1
        },
        2: {
            'unit_price': 175000,
            'qty': 1
        },
        3: {
            'unit_price': 225000,
            'qty': 1
        },
        4: {
            'unit_price': 275000,
            'qty': 1
        }
    }
}

function update_package_price() {
    const package = document.getElementById('package').value;
    const plan_value = document.getElementById('plan').value;
    const plan_label = $('#plan option:selected').text();

    const selected_package = packages[package];
    const selected_plan  = selected_package[plan_value];
    let description_html = `
        <tr id="basic-row">
            <td>${selected_package['description']} ${plan_label}</td>
            <td><input type="text" id="qty" name="qty" class="qty" value="${selected_plan['qty']}" style="width: 64px;" readonly></input></td>
            <td>
                <div name="unit_price" id="unit-price" class="unit-price" value="${selected_plan['unit_price']}">
                    ${selected_plan['unit_price']}
                </div>
            </td>
            <td>
                <div name="total" id="total" class="total">${selected_plan['unit_price'].toFixed(2)}</div>
            </td>
        </tr>
    `
    $('#summary-rows').empty().append(description_html);
}


function calculate_total_amount() {
    var total_rows = document.querySelectorAll('#total');
    let total = 0;

    total_rows.forEach((input) => {
        const row = input.closest('tr');
        let cell_total = parseFloat(row.querySelector('#total').textContent);
        total += cell_total;
    })

    document.getElementById("total-amount").innerHTML = total.toFixed(2);
    
}

function submit_quotation() {
    let name = localStorage.getItem('full_name');
    let email = localStorage.getItem('email');
    let phone = localStorage.getItem('phone');

    let items = [];

    let summary_table = document.getElementById('summary');
    // Get rows
    let rows = summary_table.getElementsByTagName('tr');

    for (let i = 1; i < rows.length; i++) {
        // Get cells
        let cells = rows[i].getElementsByTagName('td');

        // iterrate through cells
        let item_dict = {};
        for (let j = 0; j < cells.length; j++) {
            if (j == 0) item_dict['item_detail'] = cells[j].innerText;
            if (j == 1) item_dict['quantity'] = cells[j].querySelector('input[type="text"]').value;
            if (j == 2) item_dict['rate'] = cells[j].innerText;
            if (j == 3) item_dict['amount'] = cells[j].innerText;
        }
        if (item_dict?.item_detail) items.push(item_dict);
    }

    let data = {
        'name': name,
        'email': email,
        'phone': phone,
        'items': items
    }

    frappe.call({
        method: 'life2homewebsite.life2home_website.doctype.portal_quotation.portal_quotation.create_or_update_portal_quotation',
        args: {
            data: data
        },
        callback: function(r) {
            frappe.msgprint(__("Quotation Submitted successfully. You will receive a copy of the quotation on email"));
        }

    })

}

window.addEventListener('load', update_package_price);
window.addEventListener("change", calculate_total_amount);
document.getElementById('submit-quotation').addEventListener('click', submit_quotation);