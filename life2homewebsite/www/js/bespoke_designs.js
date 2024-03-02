window.addEventListener('load', update_packages);

document.getElementById('plan').addEventListener('change', update_packages);

function update_packages() {
    const city = $('#city').val();
    const plan = $('#plan').val();
    const plan_name = $('#plan option:selected').html();
    const city_package = packages[city];
    
    $('#economic-plans').empty();
    $('#combo-plans').empty();
    $('#premium-plans').empty();
    Object.entries(city_package).forEach(([key, value]) => {
        const package = city_package[key];
        Object.entries(package).forEach(([key_, value_]) => {
            const plan_scrubbed_name = key_.replace(/\s+/g, '-');
            const html = `
                <div class="col-lg-4 col-md-12 mb-4">
                    <div class="card h-100 shadow-lg bespoke-pricing-card">
                    <div class="card-body">
                        <div class="text-center p-3">
                        <h3 class="card-title">${key_}</h3>
                        <small>${plan_name}</small>
                        <div class="flex-container mt-5">
                            <div class="flex-items">
                                <div>Design Fees</div>
                                <div><h2 class="card-title">Rs.${value_[plan]['design_fees']}/-</h2></div>
                                <div>+ 18% GST <br/>(Payment in 2 Installments)</div>
                            </div>
                            <div class="flex-items">
                                <div>One Time Pay</div>
                                <div><h2 class="card-title">Rs.${value_[plan]['one_time_pay']}/-</h2></div>
                                <div>+ 18% GST <br/>(For One Time Payment)</div>
                            </div>
                        </div>
                        </div>
                        <div>
                            <p>
                                <a href="#${key}-${plan_scrubbed_name}" role="button" data-toggle="collapse" aria-expanded="false" aria-controls="${key}-${plan_scrubbed_name}">
                                    <span class="text">BASE DESIGNING PLAN 1 BHK -  Furniture layout, Readymade 3D, 2D working drawings</span>
                                    <span class="icon icon-arrow-right ml-2"></span>
                                </a>
                            </p>
                            <div class="collapse" id="${key}-${plan_scrubbed_name}">
                                <div class="card card-body" style="background-color:whitesmoke">
                                    ${basic_details[city]}
                                </div>
                            </div>
                        </div>
                    </div>
                    <ul class="list-group list-group-flush" id="addons-list">
                        <li class="list-group-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
                            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                            </svg>${value_[plan]['addons'][0]}
                        </li>
                        <li class="list-group-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
                            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                            </svg>${value_[plan]['addons'][1]}
                        </li>
                        ${value_[plan]['addons'][2] ? `<li class="list-group-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
                            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                            </svg>${value_[plan]['addons'][2]}
                        </li>` : ''}
                        ${value_[plan]['addons'][3] ? `<li class="list-group-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
                            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                            </svg>${value_[plan]['addons'][3]}
                        </li>` : ''}
                    </ul>
                    <div class="card-body text-center">
                        <button class="btn btn-primary py-3 px-5" style="border-radius:30px" onclick="submit_quotation('${key}-${key_}')">Get Quote</button>
                    </div>
                    </div>
                </div>
            `

            if (key === 'economic') {
                $('#economic-plans').append(html);
            } else if (key === 'combo') {
                $('#combo-plans').append(html);
            } else if (key === 'premium') {
                $('#premium-plans').append(html);
            }

        });
    });
}

function submit_quotation(plan_type) {
    let name = localStorage.getItem('full_name');
    let email = localStorage.getItem('email');
    let phone = localStorage.getItem('phone');
    const city = $('#city').val();
    const bhk = $('#plan').val();

    const package = plan_type.split('-')[0];
    const plan = plan_type.split('-')[1];
    const designing_fee = packages[city][package][plan][bhk]['design_fees'];

    let data = {
        'name': name,
        'email': email,
        'phone': phone,
        'items': [
            {
            'item_detail': `Inquired for ${city} - ${plan_type} - ${$('#plan option:selected').html()}`,
            'quantity': 1,
            'rate': designing_fee,
            'amount': designing_fee
            }
        ]
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

const addons = [
    "Selection of Material at Office by Designing Team",
    "Selection of Material In Office by Designing Team",
    "Selection of Material at Office (by Principle Architects)",
    "Selection of Material On Site Visit / Selection on site / Gallery Visit (by Principle Architects)",
    "Site Visits (per visit) ",
    "Guidance in selection of Material In Office (Furnishing) (by Principle Architects)",
    "Guidance in selection of Material On Site  (Furnishing) (by Principle Architects)",
    "Washroom Designing",
    "Extra Designing Revisions Per Image"
]

const packages = {
    'pune': {
        'economic': {
            'Gold':{
                1: {
                    'addons': [addons[0], addons[1]],
                    'design_fees': 150000,
                    'one_time_pay': 135000,
                },
                2: {
                    'addons': [addons[0], addons[1]],
                    'design_fees': 165000,
                    'one_time_pay': 150000,
                },
                3: {
                    'addons': [addons[0], addons[1]],
                    'design_fees': 225000,
                    'one_time_pay': 195000,
                },
                4: {
                    'addons': [addons[0], addons[1]],
                    'design_fees': 350000,
                    'one_time_pay': 300000,
                }
            },
            'Platinum': {
                1: {
                    'addons': [addons[2], addons[5]],
                    'design_fees': 175000,
                    'one_time_pay': 160000,
                },
                2: {
                    'addons': [addons[2], addons[5]],
                    'design_fees': 195000,
                    'one_time_pay': 175000,
                },
                3: {
                    'addons': [addons[2], addons[5]],
                    'design_fees': 250000,
                    'one_time_pay': 225000,
                },
                4: {
                    'addons': [addons[2], addons[5]],
                    'design_fees': 425000,
                    'one_time_pay': 375000,
                }
            }
        },
        'combo': {
            'Gold': {
                1: {
                    'addons': [addons[2], addons[3], addons[5], addons[6]],
                    'design_fees': 195000,
                    'one_time_pay': 175000,
                },
                2: {
                    'addons': [addons[2], addons[3], addons[5], addons[6]],
                    'design_fees': 240000,
                    'one_time_pay': 225000,
                },
                3: {
                    'addons': [addons[2], addons[3], addons[5], addons[6]],
                    'design_fees': 300000,
                    'one_time_pay': 275000,
                },
                4: {
                    'addons': [addons[2], addons[3], addons[5], addons[6]],
                    'design_fees': 475000,
                    'one_time_pay': 450000,
                }
            },
            'Platinum': {
                1: {
                    'addons': [addons[2], addons[3], addons[5], addons[6]],
                    'design_fees': 250000,
                    'one_time_pay': 225000,
                },
                2: {
                    'addons': [addons[2], addons[3], addons[5], addons[6]],
                    'design_fees': 275000,
                    'one_time_pay': 250000,
                },
                3: {
                    'addons': [addons[2], addons[3], addons[5], addons[6]],
                    'design_fees': 375000,
                    'one_time_pay': 350000,
                },
                4: {
                    'addons': [addons[2], addons[3], addons[5], addons[6]],
                    'design_fees': 550000,
                    'one_time_pay': 525000,
                }
            }
        },
        'premium': {
            'Platinum': {
                1: {
                    'addons': [addons[2], addons[3], addons[5], addons[6]],
                    'design_fees': 275000,
                    'one_time_pay': 250000,
                },
                2: {
                    'addons': [addons[2], addons[3], addons[5], addons[6]],
                    'design_fees': 350000,
                    'one_time_pay': 325000,
                },
                3: {
                    'addons': [addons[2], addons[3], addons[5], addons[6]],
                    'design_fees': 475000,
                    'one_time_pay': 450000,
                },
                4: {
                    'addons': [addons[2], addons[3], addons[5], addons[6]],
                    'design_fees': 700000,
                    'one_time_pay': 650000,
                }
            },
            'Super Platinum': {
                1: {
                    'addons': [addons[2], addons[3], addons[5], addons[6]],
                    'design_fees': 350000,
                    'one_time_pay': 275000,
                },
                2: {
                    'addons': [addons[2], addons[3], addons[5], addons[6]],
                    'design_fees': 500000,
                    'one_time_pay': 450000,
                },
                3: {
                    'addons': [addons[2], addons[3], addons[5], addons[6]],
                    'design_fees': 700000,
                    'one_time_pay': 650000,
                },
                4: {
                    'addons': [addons[2], addons[3], addons[5], addons[6]],
                    'design_fees': 900000,
                    'one_time_pay': 800000,
                }
            }
        }
    },
    'other': {
        'economic': {
            'Gold':{
                1: {
                    'addons': [addons[0], addons[1]],
                    'design_fees': 175000,
                    'one_time_pay': 160000,
                },
                2: {
                    'addons': [addons[0], addons[1]],
                    'design_fees': 2255000,
                    'one_time_pay': 195000,
                },
                3: {
                    'addons': [addons[0], addons[1]],
                    'design_fees': 275000,
                    'one_time_pay': 250000,
                },
                4: {
                    'addons': [addons[0], addons[1]],
                    'design_fees': 475000,
                    'one_time_pay': 450000,
                }
            },
            'Platinum': {
                1: {
                    'addons': [addons[2], addons[5]],
                    'design_fees': 195000,
                    'one_time_pay': 175000,
                },
                2: {
                    'addons': [addons[2], addons[5]],
                    'design_fees': 250000,
                    'one_time_pay': 225000,
                },
                3: {
                    'addons': [addons[2], addons[5]],
                    'design_fees': 350000,
                    'one_time_pay': 325000,
                },
                4: {
                    'addons': [addons[2], addons[5]],
                    'design_fees': 550000,
                    'one_time_pay': 525000,
                }
            }
        },
        'combo': {
            'Gold': {
                1: {
                    'addons': [addons[2], addons[3], addons[5]],
                    'design_fees': 225000,
                    'one_time_pay': 200000,
                },
                2: {
                    'addons': [addons[2], addons[3], addons[5]],
                    'design_fees': 275000,
                    'one_time_pay': 250000,
                },
                3: {
                    'addons': [addons[2], addons[3], addons[5]],
                    'design_fees': 450000,
                    'one_time_pay': 425000,
                },
                4: {
                    'addons': [addons[2], addons[3], addons[5]],
                    'design_fees': 650000,
                    'one_time_pay': 625000,
                }
            },
            'Platinum': {
                1: {
                    'addons': [addons[2], addons[3], addons[5], addons[6]],
                    'design_fees': 275000,
                    'one_time_pay': 225000,
                },
                2: {
                    'addons': [addons[2], addons[3], addons[5], addons[6]],
                    'design_fees': 350000,
                    'one_time_pay': 325000,
                },
                3: {
                    'addons': [addons[2], addons[3], addons[5], addons[6]],
                    'design_fees': 550000,
                    'one_time_pay': 525000,
                },
                4: {
                    'addons': [addons[2], addons[3], addons[5], addons[6]],
                    'design_fees': 750000,
                    'one_time_pay': 725000,
                }
            }
        },
        'premium': {
            'Platinum': {
                1: {
                    'addons': [addons[2], addons[3], addons[5], addons[6]],
                    'design_fees': 300000,
                    'one_time_pay': 275000,
                },
                2: {
                    'addons': [addons[2], addons[3], addons[5], addons[6]],
                    'design_fees': 400000,
                    'one_time_pay': 375000,
                },
                3: {
                    'addons': [addons[2], addons[3], addons[5], addons[6]],
                    'design_fees': 700000,
                    'one_time_pay': 650000,
                },
                4: {
                    'addons': [addons[2], addons[3], addons[5], addons[6]],
                    'design_fees': 900000,
                    'one_time_pay': 850000,
                }
            },
            'Super Platinum': {
                1: {
                    'addons': [addons[2], addons[3], addons[5], addons[6]],
                    'design_fees': 350000,
                    'one_time_pay': 3255000,
                },
                2: {
                    'addons': [addons[2], addons[3], addons[5], addons[6]],
                    'design_fees': 600000,
                    'one_time_pay': 550000,
                },
                3: {
                    'addons': [addons[2], addons[3], addons[5], addons[6]],
                    'design_fees': 950000,
                    'one_time_pay': 925000,
                },
                4: {
                    'addons': [addons[2], addons[3], addons[5], addons[6]],
                    'design_fees': 1200000,
                    'one_time_pay': 1150000,
                }
            }
        }
    }
}

const basic_details = {
    'pune': `
        <ol>
            <li>LIFE2HOME Customised 3D  of 2 design theme options for  a 2 BHK Flat from our library of readymade designs along with 2D furniture layout</li>
            <li>2 revisions</li>
            <li>Designs Delivered with approximately 15 to 45  working days</li>
            <li>Material specification list</li>
            <li>Appointments with designers for discussion(2 times)</li>
            <li>Onsite Measurement (Site Supervisor) 3 Visits Per Project</li>
            <li>2D working drawings for 2 BHK Flat approximately 10 days</li>
            <li>Wardrobe Internal Standard/ Customised Drawings</li>
        </ol>
    `,
    'other': `
        <ol>
            <li>LIFE2HOME Customised 3D  of 2 design theme options for  a 2 BHK Flat from our library of readymade designs along with 2D furniture layout</li>
            <li>2 revisions</li>
            <li>Designs Delivered with approximately 15 to 45  working days</li>
            <li>Material specification list</li>
            <li>Appointments with designers for discussion(2 times)</li>
            <li>2D working drawings for 2 BHK Flat approximately 10 days</li>
            <li>Wardrobe Internal Standard/ Customised Drawings</li>
        </ol>
    `,
}