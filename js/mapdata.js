var data = [
	{country: 'Albania', included: 'Included'},
	{country: 'Argentina', included: 'Included'},
	{country: 'Australia', included: 'Included'},
	{country: 'Austria', included: 'Included'},
	{country: 'Bangladesh', included: 'Included'},
	{country: 'Bhutan', included: 'Excluded'},
	{country: 'Botswana', included: 'Included'},
	{country: 'Brazil', included: 'Included'},
	{country: 'Canada', included: 'Included'},
	{country: 'Chile', included: 'Included'},
	{country: 'Colombia', included: 'Included'},
	{country: 'Costa Rica', included: 'Excluded'},
	{country: 'Dominican Republic', included: 'Included'},
	{country: 'El Salvador', included: 'Included'},
	{country: 'Estonia', included: 'Included'},
	{country: 'Germany', included: 'Included'},
	{country: 'Ghana', included: 'Included'},
	{country: 'Guatemala', included: 'Included'},
	{country: 'Indonesia', included: 'Included'},
	{country: 'Italy', included: 'Included'},
	{country: 'Jamaica', included: 'Included'},
	{country: 'Japan', included: 'Included'},
	{country: 'Kenya', included: 'Included'},
	{country: 'Kosovo', included: 'Included'},
	{country: 'Kyrgyzstan', included: 'Included'},
	{country: 'Liberia', included: 'Included'},
	{country: 'Lithuania', included: 'Included'},
	{country: 'China', included: 'Excluded'},
	{country: 'Malta', included: 'Included'},
	{country: 'Mauritius', included: 'Excluded'},
	{country: 'Myanmar', included: 'Included'},
	{country: 'New Zealand', included: 'Included'},
	{country: 'Nigeria', included: 'Included'},
	{country: 'Pakistan', included: 'Included'},
	{country: 'Palestine', included: 'Excluded'},
	{country: 'Peru', included: 'Included'},
	{country: 'Poland', included: 'Included'},
	{country: 'Republic of Ireland', included: 'Included'},
	{country: 'Russia', included: 'Included'},
	{country: 'Rwanda', included: 'Included'},
	{country: 'Saudi Arabia', included: 'Included'},
	{country: 'Scotland', included: 'Excluded'},
	{country: 'Singapore', included: 'Included'},
	{country: 'South Africa', included: 'Included'},
	{country: 'Spain', included: 'Included'},
	{country: 'Sri Lanka', included: 'Included'},
	{country: 'Sweden', included: 'Included'},
	{country: 'Switzerland', included: 'Included'},
	{country: 'Tajikistan', included: 'Excluded'},
	{country: 'The Netherlands', included: 'Included'},
	{country: 'Togo', included: 'Included'},
	{country: 'Trinidad and Tobago', included: 'Excluded'},
	{country: 'Turkey', included: 'Included'},
	{country: 'Uganda', included: 'Included'},
	{country: 'Ukraine', included: 'Excluded'},
	{country: 'United Kingdom', included: 'Included'},
	{country: 'United States', included: 'Included'},
	{country: 'Uruguay', included: 'Included'},
	{country: 'Zimbabwe', included: 'Included'},
];
for (let obj in data) {
	data[obj].onMap = false;
}

let color_include = "#4d4dff";
let color_exclude = "#e6e600";
let color_missing = "#b3b3b3";
let hover_color_include = "#8080ff";
let hover_color_exclude = "#ffff1a";
let hover_color_missing = "#d9d9d9";
let description_include = "Survey completed";
let description_exclude = "Survey completed, but the organization did not meet inclusion criteria";
let description_missing = "Survey not completed";
let url_include = null;
let url_exclude = null;
let url_missing = null;
let image_url_include = null;
let image_url_exclude = null;
let image_url_missing = null;
let image_position_include = null;
let image_position_exclude = null;
let image_position_missing = null;
let hide_include = "no";
let hide_exclude = "no";
let hide_missing = "no";
let inactive_include = "no";
let inactive_exclude = "no";
let inactive_missing = "no";
let zoomable_include = "no";
let zoomable_exclude = "no";
let zoomable_missing = "no";

function set_color(name) {
	let country = data.find(({country}) => country === name);

	if(country != undefined) {
		switch(country.included) {
			case "Included":
				return color_include;
				break;
			case "Excluded":
				// console.log(name + " has been excluded");
				return color_exclude;
				break;
		}
	}
	// console.log(name + " not in data set");
	return color_missing;
}

function set_hover_color(name) {
	let country = data.find(({country}) => country === name);

	if(country != undefined) {
		switch(country.included) {
			case "Included":
				return hover_color_include;
				break;
			case "Excluded":
				// console.log(name + " has been excluded");
				return hover_color_exclude;
				break;
		}
	}
	// console.log(name + " not in data set");
	return hover_color_missing;
}

function set_description(name) {
	let country = data.find(({country}) => country === name);

	if(country != undefined) {
		switch(country.included) {
			case "Included":
				return description_include;
				break;
			case "Excluded":
				return description_exclude;
				break;
		}
	}
	// console.log(name + " not in data set");
	return description_missing;
}

function set_url(name) {
	let country = data.find(({country}) => country === name);

	if(country != undefined) {
		switch(country.included) {
			case "Included":
				return url_include;
				break;
			case "Excluded":
				// console.log(name + " has been excluded");
				return url_exclude;
				break;
		}
	}
	// console.log(name + " not in data set");
	return url_missing;
}

function set_image_url(name) {
	let country = data.find(({country}) => country === name);

	if(country != undefined) {
		switch(country.included) {
			case "Included":
				return image_url_include;
				break;
			case "Excluded":
				// console.log(name + " has been excluded");
				return image_url_exclude;
				break;
		}
	}
	// console.log(name + " not in data set");
	return image_url_missing;
}

function set_image_position(name) {
	let country = data.find(({country}) => country === name);

	if(country != undefined) {
		switch(country.included) {
			case "Included":
				return image_position_include;
				break;
			case "Excluded":
				// console.log(name + " has been excluded");
				return image_position_exclude;
				break;
		}
	}
	// console.log(name + " not in data set");
	return image_position_missing;
}

function set_hide(name) {
	let country = data.find(({country}) => country === name);

	if(country != undefined) {
		switch(country.included) {
			case "Included":
				return hide_include;
				break;
			case "Excluded":
				// console.log(name + " has been excluded");
				return hide_exclude;
				break;
		}
	}
	// console.log(name + " not in data set");
	return hide_missing;
}

function set_inactive(name) {
	let country = data.find(({country}) => country === name);

	if(country != undefined) {
		switch(country.included) {
			case "Included":
				return inactive_include;
				break;
			case "Excluded":
				// console.log(name + " has been excluded");
				return inactive_exclude;
				break;
		}
	}
	// console.log(name + " not in data set");
	return inactive_missing;
}

function set_zoomable(name) {
	let country = data.find(({country}) => country === name);

	if(country != undefined) {
		switch(country.included) {
			case "Included":
				return zoomable_include;
				break;
			case "Excluded":
				// console.log(name + " has been excluded");
				return zoomable_exclude;
				break;
		}
	}
	// console.log(name + " not in data set");
	return zoomable_missing;
}

var simplemaps_worldmap_mapdata={
	main_settings: {
	//General settings
	width: "responsive", //'700' or 'responsive'
	background_color: "#FFFFFF",
	background_transparent: "yes",
	popups: "detect",

	//State defaults
	state_description: "No data",
	state_color: color_include,
	state_hover_color: "#4d4dff",
	// state_url: "https://simplemaps.com",
	border_size: 1,
	border_color: "#ffffff",
	all_states_inactive: "no",
	all_states_zoomable: "no",

	//Location defaults
	location_description: "Regional Office",
	location_color: "#de6667",
	location_opacity: ".9",
	location_hover_opacity: 1,
	location_url: "",
	location_size: 25,
	location_type: "triangle",
	location_border_color: "#FFFFFF",
	location_border: 2,
	location_hover_border: 2.5,
	all_locations_inactive: "no",
	all_locations_hidden: "no",

	//Label defaults
	label_color: "#ffffff",
	label_hover_color: "#ffffff",
	label_size: 22,
	label_font: "Arial",
	hide_labels: "no",
	hide_eastern_labels: false,
	manual_zoom: "yes",
	back_image: "no",
	arrow_box: "no",
	navigation_size: "40",
	navigation_color: "#f7f7f7",
	navigation_border_color: "#636363",
	initial_back: "no",
	initial_zoom: "-1",
	initial_zoom_solo: "no",
	region_opacity: 1,
	region_hover_opacity: 0.6,
	zoom_out_incrementally: "yes",
	zoom_percentage: 0.99,
	zoom_time: 0.5,

	//Popup settings
	popup_color: "white",
	popup_opacity: 0.9,
	popup_shadow: 1,
	popup_corners: 5,
	popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
	popup_nocss: "no",

	//Advanced settings
	div: "map",
	auto_load: "yes",
	rotate: "0",
	url_new_tab: "yes",
	images_directory: "default",
	import_labels: "no",
	fade_time: 0.1,
	link_text: "View Website",
	state_image_url: "",
	state_image_position: "",
	location_image_url: ""
	},
	state_specific: {
		AE: {
			name: "United Arab Emirates",
		},
		AF: {
			name: "Afghanistan",
		},
		AL: {
			name: "Albania",
		},
		AM: {
			name: "Armenia",
		},
		AO: {
			name: "Angola",
		},
		AR: {
			name: "Argentina",
		},
		AT: {
			name: "Austria",
		},
		AU: {
			name: "Australia",
		},
		AZ: {
			name: "Azerbaidjan",
		},
		BA: {
			name: "Bosnia-Herzegovina",
		},
		BD: {
			name: "Bangladesh",
		},
		BE: {
			name: "Belgium",
		},
		BF: {
			name: "Burkina Faso",
		},
		BG: {
			name: "Bulgaria",
		},
		BH: {
			name: "Bahrain",
		},
		BI: {
			name: "Burundi",
		},
		BJ: {
			name: "Benin",
		},
		BN: {
			name: "Brunei Darussalam",
		},
		BO: {
			name: "Bolivia",
		},
		BR: {
			name: "Brazil",
		},
		BS: {
			name: "Bahamas",
		},
		BT: {
			name: "Bhutan",
		},
		BW: {
			name: "Botswana",
		},
		BY: {
			name: "Belarus",
		},
		BZ: {
			name: "Belize",
		},
		CA: {
			name: "Canada",
		},
		CD: {
			name: "Congo",
		},
		CF: {
			name: "Central African Republic",
		},
		CG: {
			name: "Congo",
		},
		CH: {
			name: "Switzerland",
		},
		CI: {
			name: "Ivory Coast",
		},
		CL: {
			name: "Chile",
		},
		CM: {
			name: "Cameroon",
		},
		CN: {
			name: "China",
		},
		CO: {
			name: "Colombia",
		},
		CR: {
			name: "Costa Rica",
		},
		CU: {
			name: "Cuba",
		},
		CV: {
			name: "Cape Verde",
		},
		CY: {
			name: "Cyprus",
		},
		CZ: {
			name: "Czech Republic",
		},
		DE: {
			name: "Germany",
		},
		DJ: {
			name: "Djibouti",
		},
		DK: {
			name: "Denmark",
		},
		DO: {
			name: "Dominican Republic",
		},
		DZ: {
			name: "Algeria",
		},
		EC: {
			name: "Ecuador",
		},
		EE: {
			name: "Estonia",
		},
		EG: {
			name: "Egypt",
		},
		EH: {
			name: "Western Sahara",
		},
		ER: {
			name: "Eritrea",
		},
		ES: {
			name: "Spain",
		},
		ET: {
			name: "Ethiopia",
		},
		FI: {
			name: "Finland",
		},
		FJ: {
			name: "Fiji",
		},
		FK: {
			name: "Falkland Islands",
		},
		FR: {
			name: "France",
		},
		GA: {
			name: "Gabon",
		},
		GB: {
			name: "Great Britain",
		},
		GE: {
			name: "Georgia",
		},
		GF: {
			name: "French Guyana",
		},
		GH: {
			name: "Ghana",
		},
		GL: {
			name: "Greenland",
		},
		GM: {
			name: "Gambia",
		},
		GN: {
			name: "Guinea",
		},
		GQ: {
			name: "Equatorial Guinea",
		},
		GR: {
			name: "Greece",
		},
		GS: {
			name: "S. Georgia & S. Sandwich Isls.",
		},
		GT: {
			name: "Guatemala",
		},
		GW: {
			name: "Guinea Bissau",
		},
		GY: {
			name: "Guyana",
		},
		HN: {
			name: "Honduras",
		},
		HR: {
			name: "Croatia",
		},
		HT: {
			name: "Haiti",
		},
		HU: {
			name: "Hungary",
		},
		IC: {
			name: "Canary Islands",
		},
		ID: {
			name: "Indonesia",
		},
		IE: {
			name: "Ireland",
		},
		IL: {
			name: "Israel",
		},
		IN: {
			name: "India",
		},
		IQ: {
			name: "Iraq",
		},
		IR: {
			name: "Iran",
		},
		IS: {
			name: "Iceland",
		},
		IT: {
			name: "Italy",
		},
		JM: {
			name: "Jamaica",
		},
		JO: {
			name: "Jordan",
		},
		JP: {
			name: "Japan",
		},
		KE: {
			name: "Kenya",
		},
		KG: {
			name: "Kyrgyzstan",
		},
		KH: {
			name: "Cambodia",
		},
		KP: {
			name: "North Korea",
		},
		KR: {
			name: "South Korea",
		},
		KW: {
			name: "Kuwait",
		},
		KZ: {
			name: "Kazakhstan",
		},
		LA: {
			name: "Laos",
		},
		LK: {
			name: "Sri Lanka",
		},
		LR: {
			name: "Liberia",
		},
		LS: {
			name: "Lesotho",
		},
		LT: {
			name: "Lithuania",
		},
		LU: {
			name: "Luxembourg",
		},
		LV: {
			name: "Latvia",
		},
		LY: {
			name: "Libya",
		},
		MA: {
			name: "Morocco",
		},
		MD: {
			name: "Moldavia",
		},
		ME: {
			name: "Montenegro",
		},
		MG: {
			name: "Madagascar",
		},
		MK: {
			name: "Macedonia",
		},
		ML: {
			name: "Mali",
		},
		MM: {
			name: "Myanmar",
		},
		MN: {
			name: "Mongolia",
		},
		MR: {
			name: "Mauritania",
		},
		MW: {
			name: "Malawi",
		},
		MX: {
			name: "Mexico",
		},
		MY: {
			name: "Malaysia",
		},
		MZ: {
			name: "Mozambique",
		},
		NA: {
			name: "Namibia",
		},
		NC: {
			name: "New Caledonia (French)",
		},
		NE: {
			name: "Niger",
		},
		NG: {
			name: "Nigeria",
		},
		NI: {
			name: "Nicaragua",
		},
		NL: {
			name: "Netherlands",
		},
		NO: {
			name: "Norway",
		},
		NP: {
			name: "Nepal",
		},
		NZ: {
			name: "New Zealand",
		},
		OM: {
			name: "Oman",
		},
		PA: {
			name: "Panama",
		},
		PE: {
			name: "Peru",
		},
		PG: {
			name: "Papua New Guinea",
		},
		PH: {
			name: "Philippines",
		},
		PK: {
			name: "Pakistan",
		},
		PL: {
			name: "Poland",
		},
		PR: {
			name: "Puerto Rico",
		},
		PS: {
			name: "Palestine",
		},
		PT: {
			name: "Portugal",
		},
		PY: {
			name: "Paraguay",
		},
		QA: {
			name: "Qatar",
		},
		RO: {
			name: "Romania",
		},
		RS: {
			name: "Serbia",
		},
		RU: {
			name: "Russia",
		},
		RW: {
			name: "Rwanda",
		},
		SA: {
			name: "Saudi Arabia",
		},
		SB: {
			name: "Solomon Islands",
		},
		SD: {
			name: "Sudan",
		},
		SE: {
			name: "Sweden",
		},
		SI: {
			name: "Slovenia",
		},
		SK: {
			name: "Slovak Republic",
		},
		SL: {
			name: "Sierra Leone",
		},
		SN: {
			name: "Senegal",
		},
		SO: {
			name: "Somalia",
		},
		SR: {
			name: "Suriname",
		},
		SS: {
			name: "South Sudan",
		},
		SV: {
			name: "El Salvador",
		},
		SY: {
			name: "Syria",
		},
		SZ: {
			name: "Swaziland",
		},
		TD: {
			name: "Chad",
		},
		TG: {
			name: "Togo",
		},
		TH: {
			name: "Thailand",
		},
		TJ: {
			name: "Tadjikistan",
		},
		TL: {
			name: "East Timor",
		},
		TM: {
			name: "Turkmenistan",
		},
		TN: {
			name: "Tunisia",
		},
		TR: {
			name: "Turkey",
		},
		TT: {
			name: "Trinidad and Tobago",
		},
		TW: {
			name: "Taiwan",
		},
		TZ: {
			name: "Tanzania",
		},
		UA: {
			name: "Ukraine",
		},
		UG: {
			name: "Uganda",
		},
		US: {
			name: "United States",
		},
		UY: {
			name: "Uruguay",
		},
		UZ: {
			name: "Uzbekistan",
		},
		VE: {
			name: "Venezuela",
		},
		VN: {
			name: "Vietnam",
		},
		VU: {
			name: "Vanuatu",
		},
		YE: {
			name: "Yemen",
		},
		ZA: {
			name: "South Africa",
		},
		ZM: {
			name: "Zambia",
		},
		ZW: {
			name: "Zimbabwe",
		}
	},
	locations: {},
	regions: {},
	labels: {},
	legend: {
		entries: []
	}
};

for (let obj in simplemaps_worldmap_mapdata.state_specific) {
	let map_country = simplemaps_worldmap_mapdata.state_specific[obj];
	
	if(data.find(({country}) => country === map_country.name) === undefined) {
		console.log(map_country.name + " is not in the data set");
	} else {
		data.find(({country}) => country === map_country.name).onMap = true;
	}

	map_country.color = set_color(map_country.name);
	map_country.hover_color = set_hover_color(map_country.name);
	map_country.description = set_description(map_country.name);
	map_country.url = set_url(map_country.name);
	map_country.image_url = set_image_url(map_country.name);
	map_country.image_position = set_image_position(map_country.name);
	map_country.hide = set_hide(map_country.name);
	map_country.inactive = set_inactive(map_country.name);
	map_country.zoomable = set_zoomable(map_country.name);
}

// Print countries that are in the data set but not on the map
var dataNotOnMap = data.filter(({onMap}) => onMap === false);
for (let obj in dataNotOnMap) {
	console.log(dataNotOnMap[obj].country + " is not on the map");
}
