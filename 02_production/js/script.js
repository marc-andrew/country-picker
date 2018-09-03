(function () {
    'use strict';
    var noJs = document.getElementsByClassName('no-js');
    // Delete no-js class name
    while (noJs.length > 0) { noJs[0].classList.remove('no-js'); }

    const countries = {
        AF: 'Afghanistan',
        AX: 'Aland Islands',
        AL: 'Albania',
        DZ: 'Algeria',
        AS: 'American Samoa',
        AD: 'Andorra',
        AO: 'Angola',
        AI: 'Anguilla',
        AQ: 'Antarctica',
        AG: 'Antigua And Barbuda',
        AR: 'Argentina',
        AM: 'Armenia',
        AW: 'Aruba',
        AU: 'Australia',
        AT: 'Austria',
        AZ: 'Azerbaijan',
        BS: 'Bahamas',
        BH: 'Bahrain',
        BD: 'Bangladesh',
        BB: 'Barbados',
        BY: 'Belarus',
        BE: 'Belgium',
        BZ: 'Belize',
        BJ: 'Benin',
        BM: 'Bermuda',
        BT: 'Bhutan',
        BO: 'Bolivia',
        BA: 'Bosnia And Herzegovina',
        BW: 'Botswana',
        BV: 'Bouvet Island',
        BR: 'Brazil',
        IO: 'British Indian Ocean Territory',
        BN: 'Brunei Darussalam',
        BG: 'Bulgaria',
        BF: 'Burkina Faso',
        BI: 'Burundi',
        KH: 'Cambodia',
        CM: 'Cameroon',
        CA: 'Canada',
        CV: 'Cape Verde',
        KY: 'Cayman Islands',
        CF: 'Central African Republic',
        TD: 'Chad',
        CL: 'Chile',
        CN: 'China',
        CX: 'Christmas Island',
        CC: 'Cocos (Keeling) Islands',
        CO: 'Colombia',
        KM: 'Comoros',
        CG: 'Congo',
        CD: 'Congo, Democratic Republic',
        CK: 'Cook Islands',
        CR: 'Costa Rica',
        CI: 'Cote D\'Ivoire',
        HR: 'Croatia',
        CU: 'Cuba',
        CY: 'Cyprus',
        CZ: 'Czech Republic',
        DK: 'Denmark',
        DJ: 'Djibouti',
        DM: 'Dominica',
        DO: 'Dominican Republic',
        EC: 'Ecuador',
        EG: 'Egypt',
        SV: 'El Salvador',
        GQ: 'Equatorial Guinea',
        ER: 'Eritrea',
        EE: 'Estonia',
        ET: 'Ethiopia',
        FK: 'Falkland Islands (Malvinas)',
        FO: 'Faroe Islands',
        FJ: 'Fiji',
        FI: 'Finland',
        FR: 'France',
        GF: 'French Guiana',
        PF: 'French Polynesia',
        TF: 'French Southern Territories',
        GA: 'Gabon',
        GM: 'Gambia',
        GE: 'Georgia',
        DE: 'Germany',
        GH: 'Ghana',
        GI: 'Gibraltar',
        GR: 'Greece',
        GL: 'Greenland',
        GD: 'Grenada',
        GP: 'Guadeloupe',
        GU: 'Guam',
        GT: 'Guatemala',
        GG: 'Guernsey',
        GN: 'Guinea',
        GW: 'Guinea-Bissau',
        GY: 'Guyana',
        HT: 'Haiti',
        HM: 'Heard Island & Mcdonald Islands',
        VA: 'Holy See (Vatican City State)',
        HN: 'Honduras',
        HK: 'Hong Kong',
        HU: 'Hungary',
        IS: 'Iceland',
        IN: 'India',
        ID: 'Indonesia',
        IR: 'Iran, Islamic Republic Of',
        IQ: 'Iraq',
        IE: 'Ireland',
        IM: 'Isle Of Man',
        IL: 'Israel',
        IT: 'Italy',
        JM: 'Jamaica',
        JP: 'Japan',
        JE: 'Jersey',
        JO: 'Jordan',
        KZ: 'Kazakhstan',
        KE: 'Kenya',
        KI: 'Kiribati',
        KR: 'Korea',
        KW: 'Kuwait',
        KG: 'Kyrgyzstan',
        LA: 'Lao People\'s Democratic Republic',
        LV: 'Latvia',
        LB: 'Lebanon',
        LS: 'Lesotho',
        LR: 'Liberia',
        LY: 'Libyan Arab Jamahiriya',
        LI: 'Liechtenstein',
        LT: 'Lithuania',
        LU: 'Luxembourg',
        MO: 'Macao',
        MK: 'Macedonia',
        MG: 'Madagascar',
        MW: 'Malawi',
        MY: 'Malaysia',
        MV: 'Maldives',
        ML: 'Mali',
        MT: 'Malta',
        MH: 'Marshall Islands',
        MQ: 'Martinique',
        MR: 'Mauritania',
        MU: 'Mauritius',
        YT: 'Mayotte',
        MX: 'Mexico',
        FM: 'Micronesia, Federated States Of',
        MD: 'Moldova',
        MC: 'Monaco',
        MN: 'Mongolia',
        ME: 'Montenegro',
        MS: 'Montserrat',
        MA: 'Morocco',
        MZ: 'Mozambique',
        MM: 'Myanmar',
        NA: 'Namibia',
        NR: 'Nauru',
        NP: 'Nepal',
        NL: 'Netherlands',
        AN: 'Netherlands Antilles',
        NC: 'New Caledonia',
        NZ: 'New Zealand',
        NI: 'Nicaragua',
        NE: 'Niger',
        NG: 'Nigeria',
        NU: 'Niue',
        NF: 'Norfolk Island',
        MP: 'Northern Mariana Islands',
        NO: 'Norway',
        OM: 'Oman',
        PK: 'Pakistan',
        PW: 'Palau',
        PS: 'Palestinian Territory, Occupied',
        PA: 'Panama',
        PG: 'Papua New Guinea',
        PY: 'Paraguay',
        PE: 'Peru',
        PH: 'Philippines',
        PN: 'Pitcairn',
        PL: 'Poland',
        PT: 'Portugal',
        PR: 'Puerto Rico',
        QA: 'Qatar',
        RE: 'Reunion',
        RO: 'Romania',
        RU: 'Russian Federation',
        RW: 'Rwanda',
        BL: 'Saint Barthelemy',
        SH: 'Saint Helena',
        KN: 'Saint Kitts And Nevis',
        LC: 'Saint Lucia',
        MF: 'Saint Martin',
        PM: 'Saint Pierre And Miquelon',
        VC: 'Saint Vincent And Grenadines',
        WS: 'Samoa',
        SM: 'San Marino',
        ST: 'Sao Tome And Principe',
        SA: 'Saudi Arabia',
        SN: 'Senegal',
        RS: 'Serbia',
        SC: 'Seychelles',
        SL: 'Sierra Leone',
        SG: 'Singapore',
        SK: 'Slovakia',
        SI: 'Slovenia',
        SB: 'Solomon Islands',
        SO: 'Somalia',
        ZA: 'South Africa',
        GS: 'South Georgia And Sandwich Isl.',
        ES: 'Spain',
        LK: 'Sri Lanka',
        SD: 'Sudan',
        SR: 'Suriname',
        SJ: 'Svalbard And Jan Mayen',
        SZ: 'Swaziland',
        SE: 'Sweden',
        CH: 'Switzerland',
        SY: 'Syrian Arab Republic',
        TW: 'Taiwan',
        TJ: 'Tajikistan',
        TZ: 'Tanzania',
        TH: 'Thailand',
        TL: 'Timor-Leste',
        TG: 'Togo',
        TK: 'Tokelau',
        TO: 'Tonga',
        TT: 'Trinidad And Tobago',
        TN: 'Tunisia',
        TR: 'Turkey',
        TM: 'Turkmenistan',
        TC: 'Turks And Caicos Islands',
        TV: 'Tuvalu',
        UG: 'Uganda',
        UA: 'Ukraine',
        AE: 'United Arab Emirates',
        GB: 'United Kingdom',
        US: 'United States',
        UM: 'United States Outlying Islands',
        UY: 'Uruguay',
        UZ: 'Uzbekistan',
        VU: 'Vanuatu',
        VE: 'Venezuela',
        VN: 'Viet Nam',
        VG: 'Virgin Islands, British',
        VI: 'Virgin Islands, U.S.',
        WF: 'Wallis And Futuna',
        EH: 'Western Sahara',
        YE: 'Yemen',
        ZM: 'Zambia',
        ZW: 'Zimbabwe'
    };

    let countryListArr = [];
    let countryIdSelected = '';
    let countryNameSelected = '';
    let searchArr = [];
    let emptySearch = false;
    let countryListEl = document.getElementsByClassName('country-selector__list')[0];
    let countryInput = document.getElementsByClassName('country-selector__input')[0];
    let currentCountryPos = 0;
    let countryListId = 0;

    for (let key in countries) {
        // skip loop if the property is from prototype
        if (!countries.hasOwnProperty(key)) continue;

        let obj = countries[key];
        pushToArray('country', countryListArr, countryListId, key, obj, obj);
        countryListId++;
    }

    let timer;
    // On key down
    countryInput.addEventListener('keydown', function (e) {
        let keys = [37,38,39,40,27,13];
        let keyCode = e.keyCode;
        // If it is not key up, right, down, left, esc or enter
        // Otherwise it will render the list again
        if (keys.indexOf(keyCode) >= 0) {
            let inputVal = this.value;
            window.clearTimeout(timer);
            timer = window.setTimeout(function () {
                searchFor(countries, inputVal);
            }, 300);
        }

        // If key is enter
        if (keyCode === 13) enterCountry();
        // If key is esc remove focus from the input field
        if (keyCode === 27) countryInput.blur();
        // Up
        if (keyCode === 38) {
            navigateUpDown('38');
            e.preventDefault();
        }
        // Down
        if (keyCode === 40) {
            navigateUpDown('40');
            e.preventDefault();
        }
    });

    // Focus
    countryInput.addEventListener('focus', function () {
        this.parentNode.classList.add('country-selector--active');
    });

    // Blur
    countryInput.addEventListener('blur', function () {
        var parentId = this.parentNode;
        setTimeout(function () {
            // Scroll container to top before closing
            countryListEl.scrollTop = 0;
            // Remove class name
            parentId.classList.remove('country-selector--active');
            // Set the value
            countryInput.value = countryNameSelected;
            // Add all countries again
            buildAllCountries();
            // Reset the currentCountryPos to 0 again
            currentCountryPos = 0;
        }, 200);
    });

    let clickOnCountry = function () {
        let idAttr = this.getAttribute("data-country-id");
        let nameAttr = this.getAttribute("data-country-name");
        countryIdSelected = idAttr;
        countryNameSelected = nameAttr;
        countryInput.value = nameAttr;
    };

    let setActiveCountryItem = function () {
        let activeCountry = document.getElementsByClassName('btn--country-active')[0];
        // Remove class name for previous active class
        activeCountry.classList.remove('btn--country-active');
        // Add class name
        this.classList.add('btn--country-active');
        // The data item id will be the current country pos value
        currentCountryPos = this.getAttribute("data-item-id");
    };

    // If enter key was pressed
    function enterCountry() {
        let activeCountry = document.getElementsByClassName('btn--country-active')[0];
        let idAttr = activeCountry.getAttribute("data-country-id");
        let nameAttr = activeCountry.getAttribute("data-country-name");
        // Change apply values
        countryIdSelected = idAttr;
        countryNameSelected = nameAttr;
        // Change input value
        countryInput.value = nameAttr;
        // Remove focus
        countryInput.blur();
    }

    // Add all countries to the list
    function buildAllCountries() {
        // Add elements to DOM
        countryListEl.innerHTML = countryListArr.join('');
        // Reset to 0
        countryListId = 0;
        // Reset current country position
        currentCountryPos = 0;
        // Set the focus to the first list item
        focusFirstCountry();
    }
    // Focus on first country list item
    function focusFirstCountry() {
        let countryBtn = document.getElementsByClassName('btn--country');
        if (countryBtn.length) {
            countryBtn[0].classList.add('btn--country-active');
            hoverCountryItem();
        }
    }
    // Hover listener over country list items
    function hoverCountryItem() {
        let countryBtn = document.getElementsByClassName('btn--country');
        for (var i = 0; i < countryBtn.length; i++) {
            countryBtn[i].addEventListener('mouseover', setActiveCountryItem, false);
        }
    }
    // Click on country button event listener
    function countryClick() {
        let countryBtn = document.getElementsByClassName('btn--country');
        for (var i = 0; i < countryBtn.length; i++) {
            countryBtn[i].addEventListener('click', clickOnCountry, false);
        }
    }
    // Trim string in case you start with a space
    function trimString(s) {
        var l = 0, r = s.length - 1;
        while (l < s.length && s[l] == ' ') l++;
        while (r > l && s[r] == ' ') r -= 1;
        return s.substring(l, r + 1);
    }
    // Loop through object, find a match and update the country list
    function searchFor(countryObj, searchKey) {
        searchArr = [];
        searchKey = trimString(searchKey.toLowerCase()); // trim it

        if (searchKey.length) {
            for (let key in countryObj) {
                // skip loop if the property is from prototype
                if (!countryObj.hasOwnProperty(key)) continue;

                var obj = countries[key];

                if (obj.toLowerCase().indexOf(searchKey) !== -1) {
                    pushToArray('country', searchArr, countryListId, key, obj, obj);
                    countryListId++;
                }
            }
            // Check if the result is empty
            if (emptySearch === true) emptySearch = false;
            // Add elements to DOM
            countryListEl.innerHTML = searchArr.join('');
            // Reset to 0
            countryListId = 0;
            // Reset current country position
            currentCountryPos = 0;
            // Set the focus to the first list item
            focusFirstCountry();
            // Call click listener function
            countryClick();
        } else {
            // Check if the result is empty
            if (emptySearch === false) {
                // Change value to true
                emptySearch = true;
                // Reset to 0
                countryListId = 0;
                // Call build all countries function
                buildAllCountries();
                // Call click listener function
                countryClick();
            }
        }
    }
    // Key up and down to navigaton
    function navigateUpDown(keyNr) {
        
        let countryBtn = document.getElementsByClassName('btn--country');
        let activeCountry = document.getElementsByClassName('btn--country-active')[0];
        let btnLength = countryBtn.length;

        if (currentCountryPos >= 0 && btnLength) {
            // Up
            if(keyNr === '38' && currentCountryPos > 0) {
                // Decrease currentCountryPos value by 1
                currentCountryPos--;
                // Remove class name for previous active class
                activeCountry.classList.remove('btn--country-active');
                // Add class name
                countryBtn[currentCountryPos].classList.add('btn--country-active');
                // Scroll to view, scrollIntoViewOptions are not supported in Safari, IE
                // I will need to implement a polyfill
                // See doc https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
                document.getElementsByClassName('btn--country-active')[0].scrollIntoView({behavior: "smooth", block: "nearest", inline: "nearest"});
            }
            // Down
            if(keyNr === '40' && currentCountryPos < btnLength - 1) {
                // Increase currentCountryPos value by 1
                currentCountryPos++;
                // Remove class name for previous active class
                activeCountry.classList.remove('btn--country-active');
                // Add class name
                countryBtn[currentCountryPos].classList.add('btn--country-active');
                // Scroll to view, scrollIntoViewOptions are not supported in Safari, IE
                // I will need to implement a polyfill
                // See doc https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
                document.getElementsByClassName('btn--country-active')[0].scrollIntoView({behavior: "smooth", block: "nearest", inline: "nearest"});
            }
        }
    }
    // Push To Array Function
    function pushToArray(btnClass, arrayId, itemId, keyId, keyValue, btnText) {
        arrayId.push('<li><button type="button" class="btn btn--list btn--' + btnClass + '" data-item-id="' + itemId + '" data-country-id="' + keyId + '" data-country-name="' + keyValue + '"><span class="btn__text">' + btnText + '<span></button></li>');
    }

    buildAllCountries();
    countryClick();
}()); 