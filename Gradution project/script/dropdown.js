/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}

var dataobj = {
    education: ["AUC egypt^https://www.aucegypt.edu/ar/students/well-being/disability-services",
        "Scribd^https://www.scribd.com/document/317897649/%D8%A7%D9%84%D8%AA%D8%B9%D9%84%D9%85-%D8%A7%D9%84%D8%A7%D9%84%D9%83%D8%AA%D8%B1%D9%88%D9%86%D9%8A-%D9%84%D8%B0%D9%88%D9%8A-%D8%A7%D9%84%D8%A7%D8%AD%D8%AA%D9%8A%D8%A7%D8%AC%D8%A7%D8%AA-%D8%A7%D9%84%D8%AE%D8%A7%D8%B5%D8%A9",
        "Shms^https://shms.sa/authoring/137509-%D9%85%D9%88%D8%A7%D9%82%D8%B9-%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9-%D9%84%D8%AA%D8%B9%D9%84%D9%8A%D9%85-%D8%B0%D9%88%D9%8A-%D8%A7%D9%84%D8%A5%D8%AD%D8%AA%D9%8A%D8%A7%D8%AC%D8%A7%D8%AA-%D8%A7%D9%84%D8%AE%D8%A7%D8%B5%D8%A9"
    ],
    jobs: ["forasna^https://forasna.com/a/%D9%88%D8%B8%D8%A7%D8%A6%D9%81-%D8%B0%D9%88%D9%8A-%D8%A7%D9%84%D8%A7%D8%AD%D8%AA%D9%8A%D8%A7%D8%AC%D8%A7%D8%AA-%D8%A7%D9%84%D8%AE%D8%A7%D8%B5%D8%A9-%D9%81%D9%89-%D9%85%D8%B5%D8%B1", ],
    services: ["Traffic^https://traffic.moi.gov.eg/Arabic/OurServices/Pages/EServices.aspx",
        "Water invoice^https://www.suezcanal.gov.eg/Arabic/Services/WaterServices/Pages/InvoiceInquiry.aspx",
        "Town gas^https://towngas.com.eg/%D8%AE%D8%AF%D9%85%D8%A9-%D8%A7%D9%84%D8%B9%D9%85%D9%84%D8%A7%D8%A1/",
        "Electricity^https://eservices.eehc.gov.eg/",
        "Telephone^https://www.eehc.gov.eg/Arabic/Services/TelephoneServices/Pages/TelephoneServices.aspx",
        "Talabt^https://www.talabat.com/ar/egypt",
        "Etisalat^https://www.etisalat.eg/StaticFiles/portal/etisalat/index.html",
        "unhcr^https://www.unhcr.org/eg/ar/what-we-do/las-cooperation/public-health",
        "The Ministry of Social Solidarity^https://rdis.moss.gov.eg/EDR/OnlineRegistration/OnlineRegistrationHome",
        "Ministry of finance^https://www.mof.gov.sa/generalservcies/open-data/Pages/Home.aspx#!"
    ],
    health: [
        "Ministry of health^https://egcovac.mohp.gov.eg/#/home",
        "yellowpages^https://yellowpages.com.eg/ar/category/%D9%88%D8%B2%D8%A7%D8%B1%D8%A9-%D8%A7%D9%84%D8%AA%D8%A3%D9%85%D9%8A%D9%86%D8%A7%D8%AA-%D9%88%D8%A7%D9%84%D8%B4%D8%A6%D9%88%D9%86-%D8%A7%D9%84%D8%A7%D8%AC%D8%AA%D9%85%D8%A7%D8%B9%D9%8A%D8%A9-_-%D9%85%D8%B1%D8%A7%D9%83%D8%B2-%D8%B9%D9%84%D8%A7%D8%AC-%D8%B7%D8%A8%D9%8A%D8%B9%D9%89-%D9%84%D8%B0%D9%88%D9%89-%D8%A7%D9%84%D8%A7%D8%AD%D8%AA%D9%8A%D8%A7%D8%AC%D8%A7%D8%AA-%D8%A7%D9%84%D8%AE%D8%A7%D8%B5%D8%A9--",
        "nosaed^https://www.nosaed.com/2020/06/13/%D8%B9%D9%86%D8%A7%D9%88%D9%8A%D9%86-%D9%88%D9%87%D9%88%D8%A7%D8%AA%D9%81-%D9%85%D8%B1%D8%A7%D9%83%D8%B2-%D8%AE%D8%AF%D9%85%D8%A9-%D8%A7%D9%84%D8%A3%D8%B7%D9%81%D8%A7%D9%84-%D8%B0%D9%88%D9%8A-%D8%A7/",
        "inspire^https://inspire.com.qa/",
        "nileofhope^https://nileofhope.org/"
    ]
}


// window.onload = addClickEventListener;

// function addClickEventListener() {
//     let arr = document.querySelectorAll("#myDropdown a");
//     for (var i = 0; i < arr.length; i++) {
//         arr[i].addEventListener("click", clickevent);
//     }
// }

function clickevent(text) {
    document.getElementById("servicesdata").innerHTML = "";
    let servname = text;
    if (servname == "Education") {
        filldatble(dataobj.education);
    } else if (servname == "Services") {
        filldatble(dataobj.services);
    } else if (servname == "Jobs") {
        filldatble(dataobj.jobs);
    } else if (servname == "Health") {
        filldatble(dataobj.health);
    }
}

function filldatble(arr) {
    if (arr != null) {
        for (let index = 0; index < arr.length; index++) {
            let element = arr[index];
            var name = element.split("^")[0];
            var link = element.split("^")[1];
            document.getElementById("servicesdata").innerHTML += `<tr><td>${name}</td>
            <td><a target="_blank" href="${link}">${link}</a></td>
            <td><a  target="_blank" class="btn btn-primary" target="_blank" href="${link}">Go to service </a></td>
            </tr>`;
        }

    }
}