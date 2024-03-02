function validate_details() {
    const name = document.getElementById("full-name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phoneno").value;

    if (!(name || email || phone))
        frappe.throw(__("Please fill the form. All fields are Mandatory"));

    if (!name) frappe.throw(__("Please enter a full name"));
    if (!email) {
        frappe.throw(__("Please enter an email address"));
    } else {
        let pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!pattern.test(email)) {
            frappe.throw(__("Invalid email address"));
        }
    }
    if (!phone) {
        frappe.throw(__("Please enter a phoneno"));
    } else if (phone.length > 10) {
        frappe.throw(__("Phone number cannot be greater than 10 characters"));
    }
}

function store_information() {
    localStorage.setItem("full_name", $("#full-name").val());
    localStorage.setItem("phone", $("#phoneno").val());
    localStorage.setItem("email", $("#email").val());

    let data = {
        name: $("#full-name").val(),
        email: $("#email").val(),
        phone: $("#phoneno").val(),
    };

    frappe.call({
        method: "life2homewebsite.life2home_website.doctype.portal_quotation.portal_quotation.create_or_update_portal_quotation",
        args: {
            data: data,
        },
    });
}

document
    .getElementById("standard-service")
    .addEventListener("click", function () {
        validate_details();
        store_information();
        window.location.href = "standard_services_calculator.html";
    });

document
    .getElementById("project-management-service")
    .addEventListener("click", function () {
        validate_details();
        store_information();
        window.location.href = "project_management_services.html";
    });
document
    .getElementById("bespoke-designs")
    .addEventListener("click", function () {
        validate_details();
        store_information();
        window.location.href = "bespoke_designs.html";
    });
document
    .getElementById("turnkey-solutions")
    .addEventListener("click", function () {
        validate_details();
        store_information();
        window.location.href = "/turnkey-interior-solutions/new";
    });

window.addEventListener("load", function () {
    const searchParams = new URLSearchParams(window.location.search);
    const service = searchParams.get("service");

    if (service === "standard_service") {
        console.log("If", service);
        $("#project-management-service").hide();
        $("#bespoke-designs").hide();
    } else if (service === "project_management_service") {
        $("#standard-service").hide();
        $("#bespoke-designs").hide();
    } else if (service === "bespoke_service") {
        $("#standard-service").hide();
        $("#project-management-service").hide();
    }
});
