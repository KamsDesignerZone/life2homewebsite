let ADDONS = [
    {
        "label": "Wardrobe Internal Drawings Customised",
        "text": "PER WARDROBE -Internal drawings of wardrobes which define different racks, drawers, partitions and highlight their dimensions, helps in customization according to requirement as well as accurate furniture production",
        "unit_price": 5000,
        "qty": 1
    },
    {
        "label": "Get budgeting assistance",
        "text": "To provide quotation (Fall Celling/Painter/Electrician/Furniture) vendors, recommended through registered vendors from LIFE2HOME",
        "unit_price": 35000,
        "qty": 1
    },
    {
        "label": "Selection of Material at Office by Designing Team",
        "text": "Personal involvement of Designer for Laminate Seclection",
        "unit_price": 20000,
        "qty": 1
    },
    {
        "label": "Selection of Material On Gallery by Designing Team",
        "text": "",
        "unit_price": 25000,
        "qty": 1
    },
    {
        "label": "Selection of Material at Office (by Principle Architects)",
        "text": "Personal involvement of principle architects for Laminate Seclection",
        "unit_price": 20000,
        "qty": 1
    },
    {
        "label": "Selection of Material On Site Visit / Selection on site / Gallery Visit (by Principle Architects)",
        "text": "PER SELECTION VISIT (within Pune/PCMC limits) - Onsite/in-store guidance if and when required for selection of laminates.",
        "unit_price": 35000,
        "qty": 1
    },
    {
        "label": "Site Visits (per visit)",
        "text": "PER VISIT- Onsite visit by senior site supervisor to ensure work progress is on track",
        "unit_price": 10000,
        "qty": 5
    },
    {
        "label": "Guidance in selection of Material In Office (Furnishing) by Designing Team",
        "text": "",
        "unit_price": 20000,
        "qty": 1
    },
    {
        "label": "Guidance in selection of Material In Gallery (Furnishing) by  Designing Team",
        "text": "",
        "unit_price": 25000,
        "qty": 1
    },
    {
        "label": "Guidance in selection of Material In Office (Furnishing) (by Principle Architects)",
        "text": "Guidance for selection of furnishing (fabric/colour/wallpaper)",
        "unit_price": 15000,
        "qty": 1
    },
    {
        "label": "Guidance in selection of Material in Gallery  (Furnishing) (by Principle Architects)",
        "text": "PER SELECTION VISIT (within Pune/PCMC limits)- Onsite/in -store guidance if and when required for selection of furnishing (fabric/colour/wallpaper)",
        "unit_price": 25000,
        "qty": 1
    },
    {
        "label": "Balcony Deck Designing (PER BALCONY)",
        "text": "",
        "unit_price": 15000,
        "qty": 1
    },
    {
        "label": "Entrance & Foyer Area Designing (AS PER REQUIREMENT)",
        "text": "",
        "unit_price": 15000,
        "qty": 1
    },
    {
        "label": "Washroom Designing",
        "text": "",
        "unit_price": 15000,
        "qty": 1
    },
    {
        "label": "Puja Room Design",
        "text": "",
        "unit_price": 15000
    },
    {
        "label": "passage",
        "text": "",
        "unit_price": 15000,
        "qty": 1,
    },
    {
        "label": "Online appointments for post designing execution support with your project manager",
        "text": "",
        "unit_price": 5000,
        "qty": 1,
    },
    {
        "label": "Extra Designing Revisions Per Image",
        "text": "",
        "unit_price": 500,
        "qty": 1,
    },
    {
        "label": "Urgent 3 day delivery",
        "text": "",
        "unit_price": 0,
        "qty": 1,
    },
    {
        "label": "3d walkthrough videos",
        "text": "",
        "unit_price": 45000,
        "qty": 1,
    },
    {
        "label": "Wall electrical points",
        "text": "",
        "unit_price": 20000,
        "qty": 1
    },
    {
        "label": "Assistance in calculating Vendors  modular furniture measurements, for final payment ( onsite by Life2Home site supervisor)",
        "text": "",
        "unit_price": 12500,
        "qty": 1
    }
]

function get_1_bhk_fields() {
    let addons_list = [];
    for (var i = 0; i <ADDONS.length; i++) {
        let addons_dict = ADDONS[i];

        if (i == 1) addons_dict.unit_price = 15000;
        if (i == 3) addons_dict.unit_price = 7500;
        if (i == 4) addons_dict.unit_price = 15000;
        if (i == 5) addons_dict.unit_price = 25000;
        if (i == 6) {
            addons_dict.unit_price = 5000;
            addons_dict.qty = 3;
        }
        if (i == 7) addons_dict.unit_price = 5000;
        if (i == 8) addons_dict.unit_price = 7500;
        if (i == 9) addons_dict.unit_price = 12500;
        if ([11, 12, 13, 14, 15].includes(i)) addons_dict.unit_price = 5000;

        if (i == 19) addons_dict.unit_price = 5000;
        if (i == 20) addons_dict.unit_price = 7500;
        if (i == 21) addons_dict.unit_price = 5000;

        addons_list.push(addons_dict);
    }
    addons_list.splice(2, 1);
    return addons_list;
}

function get_2_bhk_fields() {
    let addons_list = [];
    for (var i = 0; i < ADDONS.length; i++) {
        let addons_dict = ADDONS[i];

        if (i == 1) addons_dict.unit_price = 20000;
        if (i == 2) addons_dict.unit_price = 7500;
        if (i == 3) addons_dict.unit_price = 10000;
        if (i == 4) addons_dict.unit_price = 15000;
        if (i == 5) addons_dict.unit_price = 25000;
        if (i == 6) addons_dict.unit_price = 5000;
        if (i == 7) addons_dict.unit_price = 7500;
        if (i == 8) addons_dict.unit_price = 10000;
        if (i == 9) addons_dict.unit_price = 12500;
        if (i == 10) addons_dict.unit_price = 25000;
        if ([11, 12, 13, 14].includes(i)) addons_dict.unit_price = 7500;
        if (i == 15) addons_dict.unit_price = 5000;
        if (i == 19) addons_dict.unit_price = 25000;
        if (i == 20) addons_dict.unit_price = 10000;
        if (i == 21) addons_dict.unit_price = 7500;
        addons_list.push(addons_dict);
    }

    return addons_list;
}

function get_3_bhk_fields() {
    let addons_list = [];
    for (var i = 0; i <ADDONS.length; i++) {
        let addons_dict = ADDONS[i];

        if (i == 1) addons_dict.unit_price = 25000;
        if (i == 2) addons_dict.unit_price = 12500;
        if (i == 3) addons_dict.unit_price = 15000;
        if (i == 4) addons_dict.unit_price = 15000;
        if (i == 5) addons_dict.unit_price = 30000;
        if (i == 6) addons_dict.unit_price = 7500;
        if (i == 7) addons_dict.unit_price = 10000;
        if (i == 8) addons_dict.unit_price = 12500;
        if (i == 9) addons_dict.unit_price = 15000;
        if (i == 10) addons_dict.unit_price = 25000;
        if (i == 11) addons_dict.unit_price = 7500;
        if (i == 12) addons_dict.unit_price = 7500;
        if (i == 13) addons_dict.unit_price = 6500;
        if (i == 14) addons_dict.unit_price = 6000;
        if (i == 15) addons_dict.unit_price = 5000;
        if (i == 19) addons_dict.unit_price = 35000;
        if (i == 20) addons_dict.unit_price = 15000;
        if (i == 21) addons_dict.unit_price = 10000;

        addons_list.push(addons_dict);
    }

    return addons_list;
}

var plans = {
    0: {
        "basics": {
            "text": `
                <p>BASE DESIGNING PLAN per room/BHK - Furniture layout,
                    Readymade
                    3D, 2D working drawings</p>
                <ol>
                    <li>LIFE2HOME standard 3D  of single design theme entire room from our library of readymade designs along with 2D furniture layout</li>
                    <li>2 revisions</li>
                    <li>Designs Delivered within 7 working days</li>
                    <li>Material specification list</li>
                    <li>Appointments with designers for discussion(2 times)</li>
                </ol>
            `,
            "unit_price": 12500,
            "qty": 1
        },
        "addons": [
            {
                "label": "Onsite Measurement (Site Supervisor)",
                "text": "",
                "unit_price": 4000,
                "qty": 1
            },
            {
                "label": "2D Detailing",
                "text": "2D working drawings are a valuable tool for ensuring that a project is completed accurately, on time, and within budget.",
                "unit_price": 5000,
                "qty": 1
            },
            {
                "label": "Wardrobe Internal Standard Drawings",
                "text": "PER WARDROBE  -Internal drawings of wardrobes which define different racks, drawers, partitions and highlight their dimensions, helps in customization according to requirement as well as accurate furniture production",
                "unit_price": 2500,
                "qty": 1
            },
            {
                "label": "Wardrobe Internal Drawings Customised",
                "text": "PER WARDROBE  -Internal drawings of wardrobes which define different racks, drawers, partitions and highlight their dimensions, helps in customization according to requirement as well as accurate furniture production",
                "unit_price": 5000,
                "qty": 1
            },
            {
                "label": "Project Management",
                "text": "Personal involvement of principle architects for project management",
                "unit_price": 5000,
                "qty": 1
            },
            {
                "label": "Selection of Material at Office (by Principle Architects)",
                "text": "Guidance during laminate selection in the office itself.",
                "unit_price": 5000,
                "qty": 1
            },
            {
                "label": "Selection of Material On Site Visit / Selection on site / Gallery Visit (by Principle Architects)",
                "text": "PER SELECTION VISIT (within Pune/PCMC limits) - Onsite/in-store guidance if and when required for selection of laminates. ",
                "unit_price": 7500,
                "qty": 1
            },
            {
                "label": "Site Visits (per visit)",
                "text": "PER VISIT- Onsite visit by senior site supervisor to ensure work progress is on track",
                "unit_price": 2500,
                "qty": 1
            },
            {
                "label": "Guidance in selection of Material (Furnishing)",
                "text": "PER SELECTION VISIT (within Pune/PCMC limits)- Onsite/in -store guidance if and when required for selection of furnishing (fabric/colour/wallpaper)",
                "unit_price": 5000,
                "qty": 1
            },
            {
                "label": "Balcony Deck Designing (PER BALCONY)",
                "text": "",
                "unit_price": 5000,
                "qty": 1
            },
            {
                "label": "Entrance & Foyer Area Designing (AS PER REQUIREMENT)",
                "text": "",
                "unit_price": 5000,
                "qty": 1
            },
            {
                "label": "Washroom Designing",
                "text": "",
                "unit_price": 3000,
                "qty": 1
            },
            {
                "label": "Puja Room Design",
                "text": "",
                "unit_price": 3500,
                "qty": 1
            },
            {
                "label": "Passage",
                "text": "",
                "unit_price": 3500,
                "qty": 1
            },
            {
                "label": "Online appointments for post designing execution support with your project manager",
                "text": "",
                "unit_price": 5000,
                "qty": 1
            },
            {
                "label": "Extra Designing Revisions",
                "text": "",
                "unit_price": 500,
                "qty": 1
            },
            {
                "label": "Urgent 3 day delivery",
                "text": "",
                "unit_price": 0,
                "qty": 1
            },
            {
                "label": "3D walkthrough videos",
                "text": "",
                "unit_price": 5000,
                "qty": 1
            },
            {
                "label": "Wall electrical points",
                "text": "",
                "unit_price": 5000,
                "qty": 1
            },
            {
                "label": "Assistance in calculating Vendors  modular furniture measurements, for final payment ( onsite by Life2Home site supervisor)",
                "text": "",
                "unit_price": 2500,
                "qty": 1
            }
        ]
    },
    1: {
        "basics": {
            "text": `
                <p>BASE DESIGNING PLAN 1 BHK -  Furniture layout, Readymade 3D, 2D working drawings for 2 bedrooms, Hall & Kitchen</p>
                <ol>
                    <li>LIFE2HOME standard 3D  of single design theme for  a 1 BHK Flat from our library of readymade designs along with 2D furniture layout</li>
                    <li>2 revisions</li>
                    <li>Designs Delivered within 15 working days</li>
                    <li>Material specification list</li>
                    <li>Appointments with designers for discussion(2 times)</li>
                    <li>Onsite Measurement (Site Supervisor)</li>
                    <li>2D Detailing<br />2D working drawings for 1 BHK Flat.
                    </li>
                    <li>Wardrobe Internal Standard Drawings<br/><span>PER WARDROBE  -Internal drawings of wardrobes which define different racks, drawers, partitions and highlight their dimensions, helps in customization according to requirement as well as accurate furniture production</span></li>
                    <li>Selection of Material at Office by Designing Team<br/><span>Personal involvement of Designer for Laminate Seclection</span></li>
                </ol>
            `,
            "unit_price": 35000,
            "qty": 1
        },
        "addons": ADDONS
    },
    2: {
        "basics": {
            "text": `
                <p>BASE DESIGNING PLAN 2 BHK -  Furniture layout, Readymade 3D, 2D working drawings</p>
                <ol>
                    <li>LIFE2HOME standard 3D  of single design theme for  a 2 BHK Flat from our library of readymade designs along with 2D furniture layout</li>
                    <li>2 revisions</li>
                    <li>Designs Delivered within 15 working days</li>
                    <li>Material specification list</li>
                    <li>Appointments with designers for discussion</li>
                    <li>Onsite Measurement (Site Supervisor)</li>
                    <li>2D Detailing<br />2D working drawings for 2 BHK Flat.
                    </li>
                    <li>Wardrobe Internal Standard Drawings<br/><span>PER WARDROBE  -Internal drawings of wardrobes which define different racks, drawers, partitions and highlight their dimensions, helps in customization according to requirement as well as accurate furniture production</span></li>
                </ol>
            `,
            "unit_price": 50000,
            "qty": 1
        },
        "addons": ADDONS
    },
    3: {
        "basics": {
            "text": `
                <p>BASE DESIGNING PLAN 3 BHK -  Furniture layout, Readymade 3D, 2D working drawings</p>
                <ol>
                    <li>LIFE2HOME standard 3D  of single design theme for a 3 BHK Flat from our library of readymade designs along with 2D furniture layout</li>
                    <li>2 revisions</li>
                    <li>Designs Delivered within 15 working days</li>
                    <li>Material specification list</li>
                    <li>Appointments with designers for discussion</li>
                    <li>Onsite Measurement (Site Supervisor)</li>
                    <li>2D Detailing<br />2D working drawings for 3 BHK Flat.
                    </li>
                    <li>Wardrobe Internal Standard Drawings<br/><span>PER WARDROBE  -Internal drawings of wardrobes which define different racks, drawers, partitions and highlight their dimensions, helps in customization according to requirement as well as accurate furniture production</span></li>
                </ol>
            `,
            "unit_price": 75000,
            "qty": 1
        },
        "addons": ADDONS,
    },
    4: {
        "basics": {
            "text": `
                <p>BASE DESIGNING PLAN 4 BHK -  Furniture layout, Readymade 3D, 2D working drawings</p>
                <ol>
                    <li>LIFE2HOME standard 3D  of single design theme for a 2 BHK Flat from our library of readymade designs along with 2D furniture layout</li>
                    <li>2 revisions</li>
                    <li>Designs Delivered within 15 working days</li>
                    <li>Material specification list</li>
                    <li>Appointments with designers for discussion 2 times</li>
                    <li>Onsite Measurement (Site Supervisor)</li>
                    <li>2D Detailing<br />2D working drawings for 4 BHK Flat.
                    </li>
                    <li>Wardrobe Internal Standard Drawings<br/><span>PER WARDROBE  -Internal drawings of wardrobes which define different racks, drawers, partitions and highlight their dimensions, helps in customization according to requirement as well as accurate furniture production</span></li>
                </ol>
            `,
            "unit_price": 95000,
            "qty": 1
        },
        "addons": ADDONS
    }
};

window.addEventListener('load', update_plan_details);

function update_plan_details() {
    const plan = document.getElementById("plan").value;

    if (["1", "2", "3"].includes(plan)) {
        let callback;

        if (plan == '1') {
            callback = get_1_bhk_fields;
        } else if (plan == '2') {
            callback = get_2_bhk_fields;
        } else if (plan == '3') {
            callback = get_3_bhk_fields;
        }
        plans[plan]['addons'] = callback();
    }

    if ($('#quotation').css('display') !== 'none') {
        $('#collapsible').empty();

        let addons_list = plans[plan]['addons'];
        for(const addon in addons_list){
            let addon_html = `
                <input type="checkbox" class="mr-2 accordion-checkbox" value="1" href="#${addon}" role="button" data-toggle="collapse"
                data-target="#${addon}" aria-expanded="false"
                aria-controls="${addon}" id="${addon}-check"/>
                <label for="${addon}-check">${addons_list[addon]['label']}</label><br>
                <div class="collapse" id="${addon}">
                    <div>
                        <p class="addon-para mt-2">${addons_list[addon]['text']}</p>
                    </div>
                </div>
                <hr/>
            `
            $('#collapsible').append(addon_html);
        }
    
        $('#included-detail .card.card-body').empty().append(plans[plan]['basics']["text"]);

        const basics = plans[plan]['basics'];
        let basic_row_html = `
            <tr id="basic-row">
                <td>Base Designing Plan</td>
                <td><input type="text" id="qty" name="qty" class="qty" value="${basics['qty']}" style="width: 64px;" readonly></input></td>
                <td>
                    <div name="unit_price" id="unit-price" class="unit-price" value="${basics['unit_price']}">
                        ${basics['unit_price']}
                    </div>
                </td>
                <td>
                    <div name="total" id="total" class="total">${basics['unit_price'].toFixed(2)}</div>
                </td>
            </tr>
        `
        $('#summary-rows').empty().append(basic_row_html);
    }


    const checkboxes = document.querySelectorAll('.accordion-checkbox');

    // Add a 'change' event listener to each checkbox
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            if (this.checked) {
                const plan = document.getElementById('plan').value;
                let addons_list = plans[plan]['addons'];

                const checked_value = this.id.split('-')[0];
                let addon_row_html = `
                    <tr id="${this.id}-row">
                        <td>${document.getElementById(this.id).nextElementSibling.innerText}</td>
                        <td><input type="text" id="qty" name="qty" class="custom-control qty" style="width: 64px;" value="${addons_list[checked_value]['qty']}"></input></td>
                        <td>
                            <div name="unit_price" id="unit-price" class="unit-price text-right" value="${addons_list[checked_value]['unit_price']}">${addons_list[checked_value]['unit_price']}</div>
                        </td>
                        <td>
                            <div name="total" id="total" class="total text-right">${addons_list[checked_value]['unit_price'].toFixed(2)}</div>
                        </td>
                    </tr>
                `
                document.getElementById('summary-rows').innerHTML = document.getElementById('summary-rows').innerHTML + addon_row_html;
            } else {
                const rowToRemove = document.getElementById(`${this.id}-row`);
    
                if (rowToRemove) {
                    const parentTable = rowToRemove.parentNode;
                    parentTable.removeChild(rowToRemove);
                }

            }

            const qty_inputs = document.querySelectorAll('#qty');
            qty_inputs.forEach((input) => {
                input.addEventListener('input', function() {
                    const row = input.closest('tr');
                    const qty = parseFloat(row.querySelector('#qty').value);
                    const unit_price = parseFloat(row.querySelector('#unit-price').textContent);

                    const total = (unit_price * qty);
                    row.querySelector('.total').textContent = total.toFixed(2);
                    calculate_total_amount();

                })
            })

        });
    });

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

window.addEventListener("change", calculate_total_amount);
