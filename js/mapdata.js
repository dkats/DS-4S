// TODO: handle duplicates
var data_inclusion = [
	{country: 'Albania', include: 'Yes', region_size: 'National', focus: 'Holistic', members: '101-500', related_to_ds: '50% - 74%'},
	{country: 'Argentina', include: 'Yes', region_size: 'National', focus: 'Holistic', members: '501-1,000', related_to_ds: '75% or more'},
	{country: 'Argentina', include: 'Yes', region_size: 'National', focus: 'Holistic', members: '>1,000', related_to_ds: '75% or more'},
	{country: 'Australia', include: 'Yes', region_size: 'National', focus: 'Holistic', members: '>1,000', related_to_ds: '75% or more'},
	{country: 'Austria', include: 'Yes', region_size: 'National', focus: 'Holistic', members: '501-1,000', related_to_ds: '75% or more'},
	{country: 'Bangladesh', include: 'Yes', region_size: 'National', focus: 'Holistic', members: '101-500', related_to_ds: '50% - 74%'},
	{country: 'Bhutan', include: 'No', region_size: 'Single city or town', focus: 'Holistic', members: '101-500', related_to_ds: 'Less than 25%'},
	{country: 'Botswana', include: 'Yes', region_size: 'National', focus: 'Holistic', members: '101-500', related_to_ds: '75% or more'},
	{country: 'Brazil', include: 'Yes', region_size: 'National', focus: 'Holistic', members: '>1,000', related_to_ds: '75% or more'},
	{country: 'Canada', include: 'Yes', region_size: 'National', focus: 'Holistic', members: '101-500', related_to_ds: '75% or more'},
	{country: 'Chile', include: 'Yes', region_size: 'National', focus: 'Holistic', members: '21-100', related_to_ds: '75% or more'},
	{country: 'Colombia', include: 'Yes', region_size: 'Single city or town', focus: 'Holistic', members: '101-500', related_to_ds: '75% or more'},
	{country: 'Colombia', include: 'Yes', region_size: 'Single city or town', focus: 'Holistic', members: '101-500', related_to_ds: '75% or more'},
	{country: 'Costa Rica', include: 'No', region_size: 'National', focus: 'Specific', members: '0-20', related_to_ds: '25% - 49%'},
	{country: 'Dominican Republic', include: 'Yes', region_size: 'Single city or town', focus: 'Holistic', members: '101-500', related_to_ds: '50% - 74%'},
	{country: 'El Salvador', include: 'Yes', region_size: 'National', focus: 'Holistic', members: '101-500', related_to_ds: '75% or more'},
	{country: 'Estonia', include: 'Yes', region_size: 'National', focus: 'Holistic', members: '101-500', related_to_ds: '75% or more'},
	{country: 'Germany', include: 'Yes', region_size: 'National', focus: 'Holistic', members: '>1,000', related_to_ds: '75% or more'},
	{country: 'Ghana', include: 'Yes', region_size: 'National', focus: 'Holistic', members: '21-100', related_to_ds: '50% - 74%'},
	{country: 'Guatemala', include: 'Yes', region_size: 'National', focus: 'Holistic', members: '101-500', related_to_ds: '50% - 74%'},
	{country: 'Guatemala', include: 'Yes', region_size: 'National', focus: 'Holistic', members: '501-1,000', related_to_ds: '75% or more'},
	{country: 'Indonesia', include: 'Yes', region_size: 'Single city or town', focus: 'Holistic', members: '21-100', related_to_ds: '75% or more'},
	{country: 'Italy', include: 'Yes', region_size: 'National', focus: 'Holistic', members: '>1,000', related_to_ds: '75% or more'},
	{country: 'Jamaica', include: 'Yes', region_size: 'National', focus: 'Holistic', members: '501-1,000', related_to_ds: '75% or more'},
	{country: 'Japan', include: 'Yes', region_size: 'National', focus: 'Holistic', members: '>1,000', related_to_ds: '75% or more'},
	{country: 'Jordan and Saudi Arabia', include: 'Yes', region_size: 'Single city or town', focus: 'Holistic', members: '0-20', related_to_ds: '75% or more'},
	{country: 'Kenya', include: 'Yes', region_size: 'National', focus: 'Holistic', members: '101-500', related_to_ds: '75% or more'},
	{country: 'Kosovo', include: 'Yes', region_size: 'National', focus: 'Holistic', members: '101-500', related_to_ds: '75% or more'},
	{country: 'Kyrgyzstan', include: 'Yes', region_size: 'National', focus: 'Holistic', members: '21-100', related_to_ds: '75% or more'},
	{country: 'Liberia', include: 'Yes', region_size: 'National', focus: 'Holistic', members: '21-100', related_to_ds: '50% - 74%'},
	{country: 'Lithuania', include: 'Yes', region_size: 'National', focus: 'Holistic', members: '21-100', related_to_ds: '75% or more'},
	{country: 'Macau', include: 'No', region_size: 'Single city or town', focus: 'Holistic', members: '101-500', related_to_ds: '25% - 49%'},
	{country: 'Malta', include: 'Yes', region_size: 'National', focus: 'Holistic', members: '101-500', related_to_ds: '75% or more'},
	{country: 'Mauritius', include: 'No', region_size: 'National', focus: 'Specific', members: '21-100', related_to_ds: '75% or more'},
	{country: 'Myanmar', include: 'Yes', region_size: 'Not provided', focus: 'Holistic', members: '501-1,000', related_to_ds: '75% or more'},
	{country: 'New Zealand', include: 'Yes', region_size: 'National', focus: 'Holistic', members: '>1,000', related_to_ds: '75% or more'},
	{country: 'Nigeria', include: 'Yes', region_size: 'National', focus: 'Holistic', members: '101-500', related_to_ds: '50% - 74%'},
	{country: 'Pakistan', include: 'Yes', region_size: 'National', focus: 'Holistic', members: '101-500', related_to_ds: '75% or more'},
	{country: 'Palestine', include: 'No', region_size: 'National', focus: 'Holistic', members: '0-20', related_to_ds: 'Less than 25%'},
	{country: 'Peru', include: 'Yes', region_size: 'National', focus: 'Holistic', members: '>1,000', related_to_ds: '75% or more'},
	{country: 'Poland', include: 'Yes', region_size: 'Single city or town', focus: 'Holistic', members: '21-100', related_to_ds: '75% or more'},
	{country: 'Ireland', include: 'Yes', region_size: 'National', focus: 'Holistic', members: '>1,000', related_to_ds: '75% or more'},
	{country: 'Russian Federation', include: 'Yes', region_size: 'National', focus: 'Holistic', members: '>1,000', related_to_ds: '75% or more'},
	{country: 'Rwanda', include: 'Yes', region_size: 'National', focus: 'Holistic', members: '101-500', related_to_ds: '75% or more'},
	{country: 'Saudi Arabia', include: 'No', region_size: 'National', focus: 'Holistic', members: '21-100', related_to_ds: 'Less than 25%'},
	{country: 'Scotland', include: 'No', region_size: 'National', focus: 'Holistic', members: '>1,000', related_to_ds: '25% - 49%'},
	{country: 'Singapore', include: 'Yes', region_size: 'National', focus: 'Holistic', members: '>1,000', related_to_ds: '75% or more'},
	{country: 'South Africa', include: 'Yes', region_size: 'National', focus: 'Holistic', members: '>1,000', related_to_ds: '75% or more'},
	{country: 'Spain', include: 'Yes', region_size: 'A large region within one country (multiple states, provinces, or counties)', focus: 'Holistic', members: '>1,000', related_to_ds: '50% - 74%'},
	{country: 'Sri Lanka', include: 'Yes', region_size: 'A large region within one country (multiple states, provinces, or counties)', focus: 'Holistic', members: '101-500', related_to_ds: '50% - 74%'},
	{country: 'Sweden', include: 'Yes', region_size: 'National', focus: 'Holistic', members: '>1,000', related_to_ds: '75% or more'},
	{country: 'Switzerland', include: 'Yes', region_size: 'A large region within one country (multiple states, provinces, or counties)', focus: 'Holistic', members: '501-1,000', related_to_ds: '75% or more'},
	{country: 'Tajikistan', include: 'No', region_size: 'National', focus: 'Holistic', members: '101-500', related_to_ds: '25% - 49%'},
	{country: 'The Netherlands', include: 'Yes', region_size: 'National', focus: 'Holistic', members: '>1,000', related_to_ds: '75% or more'},
	{country: 'Togo', include: 'Yes', region_size: 'National', focus: 'Holistic', members: '501-1,000', related_to_ds: '50% - 74%'},
	{country: 'Trinidad and Tobago', include: 'No', region_size: 'National', focus: 'Holistic', members: '101-500', related_to_ds: 'Less than 25%'},
	{country: 'Turkey', include: 'Yes', region_size: 'National', focus: 'Holistic', members: '>1,000', related_to_ds: '75% or more'},
	{country: 'Uganda', include: 'Yes', region_size: 'National', focus: 'Holistic', members: '501-1,000', related_to_ds: '75% or more'},
	{country: 'Uganda', include: 'Yes', region_size: 'National', focus: 'Holistic', members: '>1,000', related_to_ds: '75% or more'},
	{country: 'Ukraine', include: 'No', region_size: 'National', focus: 'Holistic', members: '501-1,000', related_to_ds: 'Less than 25%'},
	{country: 'United Kingdom', include: 'Yes', region_size: 'National', focus: 'Holistic', members: '>1,000', related_to_ds: '75% or more'},
	{country: 'United States', include: 'Yes', region_size: 'National', focus: 'Holistic', members: 'Not provided', related_to_ds: '50% - 74%'},
	{country: 'Uruguay', include: 'Yes', region_size: 'Single city or town', focus: 'Holistic', members: '101-500', related_to_ds: '75% or more'},
	{country: 'Zimbabwe', include: 'Yes', region_size: 'National', focus: 'Holistic', members: '101-500', related_to_ds: '50% - 74%'},
	{country: 'Zimbabwe', include: 'Yes', region_size: 'National', focus: 'Holistic', members: '21-100', related_to_ds: '50% - 74%'},
];
for (let obj in data_inclusion) {
	data_inclusion[obj].onMap = false;
}

// https://stackoverflow.com/questions/3080421/javascript-color-gradient
function getGradientColor(start_color, end_color, decimal) {
	// strip the leading # if it's there
	start_color = start_color.replace(/^\s*#|\s*$/g, '');
	end_color = end_color.replace(/^\s*#|\s*$/g, '');

	// convert 3 char codes --> 6, e.g. `E0F` --> `EE00FF`
	if(start_color.length == 3){
		start_color = start_color.replace(/(.)/g, '$1$1');
	}

	if(end_color.length == 3){
		end_color = end_color.replace(/(.)/g, '$1$1');
	}

	// get colors
	let start_red = parseInt(start_color.substr(0, 2), 16);
	let start_green = parseInt(start_color.substr(2, 2), 16);
	let start_blue = parseInt(start_color.substr(4, 2), 16);

	let end_red = parseInt(end_color.substr(0, 2), 16);
	let end_green = parseInt(end_color.substr(2, 2), 16);
	let end_blue = parseInt(end_color.substr(4, 2), 16);

	// calculate new color
	let diff_red = end_red - start_red;
	let diff_green = end_green - start_green;
	let diff_blue = end_blue - start_blue;

	diff_red = ( (diff_red * decimal) + start_red ).toString(16).split('.')[0];
	diff_green = ( (diff_green * decimal) + start_green ).toString(16).split('.')[0];
	diff_blue = ( (diff_blue * decimal) + start_blue ).toString(16).split('.')[0];

	// ensure 2 digits by color
	if(diff_red.length == 1) {
		diff_red = '0' + diff_red;
	}
	if(diff_green.length == 1) {
		diff_green = '0' + diff_green;
	}
	if(diff_blue.length == 1) {
		diff_blue = '0' + diff_blue;
	}

	return '#' + diff_red + diff_green + diff_blue;
};

let color_include = "#4d4dff";
let color_exclude = "#e6e600";
let color_missing = "#b3b3b3";
let color_overall = color_include;
let color_community_inclusion = "#dc143c";
let color_education = "#ff8c00";
let color_health = "#36013f";
let color_independence = "#228b22";
let color_policy = "#5c4033";
let hover_color_include = "#8080ff";
let hover_color_exclude = "#ffff1a";
let hover_color_missing = "#d9d9d9";
let description_include = "Survey completed";
let description_exclude = "Survey completed, but the organization did not meet inclusion criteria";
let description_exclude_focus = "Survey completed, but the organization was excluded due to not having a holistic focus on the lives of people with Down syndrome";
let description_exclude_ds_percentage = "Survey completed, but the organization was excluded due to fewer than 50% of the organization's members either having Down syndrome or having family members with Down syndrome";
let description_exclude_both = "Survey completed, but the organization was excluded due to not having a holistic focus on the lives of people with Down syndrome and fewer than 50% of the organization's members either having Down syndrome or having family members with Down syndrome";
let description_missing = "Survey not completed";
// let url_include = "";
let url_exclude = "";
let url_missing = "";
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
let category_select = document.getElementById("category_select").value;

function set_color(name) {
	let country = data_inclusion.find(({country}) => country.toLowerCase() === name.toLowerCase());

	if(country != undefined) {
		switch(country.include.toLowerCase()) {
			case "yes":
				country = data_scores.find(({country}) => country.toLowerCase() === name.toLowerCase());

				switch(category_select) {
					case "Overall":
						if(isNaN(country.all_domain_score)) {
							return getGradientColor("#ffffff", color_overall, 0.1);
						}
						return getGradientColor("#ffffff", color_overall, 0.3+0.7*(country.all_domain_score-min_score_overall)/(max_score_overall-min_score_overall));
						break;
					case "Community inclusion":
						if(isNaN(country.community_score)) {
							return getGradientColor("#ffffff", color_community_inclusion, 0.1);
						}
						return getGradientColor("#ffffff", color_community_inclusion, 0.3+0.7*(country.community_score-min_score_community)/(max_score_community-min_score_community));
						break;
					case "Education":
						if(isNaN(country.edu_score)) {
							return getGradientColor("#ffffff", color_education, 0.1);
						}
						return getGradientColor("#ffffff", color_education, 0.3+0.7*(country.edu_score-min_score_education)/(max_score_education-min_score_education));
						break;
					case "Health":
						if(isNaN(country.health_score)) {
							return getGradientColor("#ffffff", color_health, 0.1);
						}
						return getGradientColor("#ffffff", color_health, 0.3+0.7*(country.health_score-min_score_health)/(max_score_health-min_score_health));
						break;
					case "Independence":
						if(isNaN(country.indep_score)) {
							return getGradientColor("#ffffff", color_independence, 0.1);
						}
						return getGradientColor("#ffffff", color_independence, 0.3+0.7*(country.indep_score-min_score_independence)/(max_score_independence-min_score_independence));
						break;
					case "Policy":
						if(isNaN(country.policy_score)) {
							return getGradientColor("#ffffff", color_policy, 0.1);
						}
						return getGradientColor("#ffffff", color_policy, 0.3+0.7*(country.policy_score-min_score_policy)/(max_score_policy-min_score_policy));
						break;
				}
				return color_include;
				break;
			case "no":
				// console.log(name + " has been excluded");
				return color_exclude;
				break;
		}
	}
	// console.log(name + " not in inclusion data set");
	return color_missing;
}

function set_hover_color(name) {
	let country = data_inclusion.find(({country}) => country.toLowerCase() === name.toLowerCase());

	if(country != undefined) {
		switch(country.include.toLowerCase()) {
			case "yes":
				return hover_color_include;
				break;
			case "no":
				// console.log(name + " has been excluded");
				return hover_color_exclude;
				break;
		}
	}
	// console.log(name + " not in inlusion data set");
	return hover_color_missing;
}

function set_description(name) {
	let country = data_inclusion.find(({country}) => country.toLowerCase() === name.toLowerCase());

	if(country != undefined) {
		switch(country.include.toLowerCase()) {
			case "yes":
				country = data_scores.find(({country}) => country.toLowerCase() === name.toLowerCase());

				let description = "";
				description += (category_select == "Overall" ? "<strong>" : "");
				description += "<span class='description_overall'><span class='description_overall_label'>Overall:</span> " + (isNaN(country.all_domain_score) ? "&ndash;" : roundTo(country.all_domain_score,2) + " (" + ordinal_super(country.all_domain_rank) + ")") + "</span>";
				description += (category_select == "Overall" ? "</strong>" : "");
				description += "<br />"
				description += (category_select == "Community inclusion" ? "<strong>" : "");
				description += "<span class='description_community'><span class='description_community_label'>Community inclusion:</span> " + (isNaN(country.community_score) ? "&ndash;" : roundTo(country.community_score,2) + " (" + ordinal_super(country.community_rank) + ")") + "</span>";
				description += (category_select == "Community inclusion" ? "</strong>" : "");
				description += "<br />"
				description += (category_select == "Education" ? "<strong>" : "");
				description += "<span class='description_edu'><span class='description_edu_label'>Education:</span> " + (isNaN(country.edu_score) ? "&ndash;" : roundTo(country.edu_score,2) + " (" + ordinal_super(country.edu_rank) + ")") + "</span>";
				description += (category_select == "Education" ? "</strong>" : "");
				description += "<br />"
				description += (category_select == "Health" ? "<strong>" : "");
				description += "<span class='description_health'><span class='description_health_label'>Health:</span> " + (isNaN(country.health_score) ? "&ndash;" : roundTo(country.health_score,2) + " (" + ordinal_super(country.health_rank) + ")") + "</span>";
				description += (category_select == "Health" ? "</strong>" : "");
				description += "<br />"
				description += (category_select == "Independence" ? "<strong>" : "");
				description += "<span class='description_indep'><span class='description_indep_label'>Independence:</span> " + (isNaN(country.indep_score) ? "&ndash;" : roundTo(country.indep_score,2) + " (" + ordinal_super(country.indep_rank) + ")") + "</span>";
				description += (category_select == "Independence" ? "</strong>" : "");
				description += "<br />"
				description += (category_select == "Policy" ? "<strong>" : "");
				description += "<span class='description_policy'><span class='description_policy_label'>Policy:</span> " + (isNaN(country.policy_score) ? "&ndash;" : roundTo(country.policy_score,2) + " (" + ordinal_super(country.policy_rank) + ")") + "</span>";
				description += (category_select == "Policy" ? "</strong>" : "");
				return description;
				break;
			case "no":
				if(country.focus.toLowerCase() == "specific" && (country.related_to_ds.toLowerCase() == "less than 25%" || country.related_to_ds.toLowerCase() == "25% - 49%")) {
					return description_exclude_both;
				} else if(country.focus.toLowerCase() == "specific") {
					return description_exclude_focus;

				} else if(country.related_to_ds.toLowerCase() == "less than 25%" || country.related_to_ds.toLowerCase() == "25% - 49%") {
					return description_exclude_ds_percentage;
				}
				return description_exclude;
				break;
		}
	}
	// console.log(name + " not in inclusion data set");
	return description_missing;
}

function set_url(name) {
	let country = data_inclusion.find(({country}) => country.toLowerCase() === name.toLowerCase());

	if(country != undefined) {
		switch(country.include.toLowerCase()) {
			case "yes":
				return "country.html#" + country.country.toLowerCase();
				break;
			case "no":
				// console.log(name + " has been excluded");
				return url_exclude;
				break;
		}
	}
	// console.log(name + " not in inclusion data set");
	return url_missing;
}

function set_image_url(name) {
	let country = data_inclusion.find(({country}) => country.toLowerCase() === name.toLowerCase());

	if(country != undefined) {
		switch(country.include.toLowerCase()) {
			case "yes":
				return image_url_include;
				break;
			case "no":
				// console.log(name + " has been excluded");
				return image_url_exclude;
				break;
		}
	}
	// console.log(name + " not in inclusion data set");
	return image_url_missing;
}

function set_image_position(name) {
	let country = data_inclusion.find(({country}) => country.toLowerCase() === name.toLowerCase());

	if(country != undefined) {
		switch(country.include.toLowerCase()) {
			case "yes":
				return image_position_include;
				break;
			case "no":
				// console.log(name + " has been excluded");
				return image_position_exclude;
				break;
		}
	}
	// console.log(name + " not in inclusion data set");
	return image_position_missing;
}

function set_hide(name) {
	let country = data_inclusion.find(({country}) => country.toLowerCase() === name.toLowerCase());

	if(country != undefined) {
		switch(country.include.toLowerCase()) {
			case "yes":
				return hide_include;
				break;
			case "no":
				// console.log(name + " has been excluded");
				return hide_exclude;
				break;
		}
	}
	// console.log(name + " not in inclusion data set");
	return hide_missing;
}

function set_inactive(name) {
	let country = data_inclusion.find(({country}) => country.toLowerCase() === name.toLowerCase());

	if(country != undefined) {
		switch(country.include.toLowerCase()) {
			case "yes":
				return inactive_include;
				break;
			case "no":
				// console.log(name + " has been excluded");
				return inactive_exclude;
				break;
		}
	}
	// console.log(name + " not in inclusion data set");
	return inactive_missing;
}

function set_zoomable(name) {
	let country = data_inclusion.find(({country}) => country.toLowerCase() === name.toLowerCase());

	if(country != undefined) {
		switch(country.include.toLowerCase()) {
			case "yes":
				return zoomable_include;
				break;
			case "no":
				// console.log(name + " has been excluded");
				return zoomable_exclude;
				break;
		}
	}
	// console.log(name + " not in inclusion data set");
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
	state_url: "",
	border_size: 1,
	border_color: "#ffffff",
	all_states_inactive: "no",
	all_states_zoomable: "no",

	//Location defaults
	location_description: "No data",
	location_color: color_include,
	location_opacity: "1",
	location_hover_opacity: 1,
	location_url: "",
	location_size: 6.5,
	location_type: "circle",
	location_border_color: "#FFFFFF",
	location_border: 1,
	location_hover_border: 1,
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
	url_new_tab: "no",
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
		AG: {
			name: "Antigua and Barbuda",
		},
		AI: {
			name: "Anguilla",
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
		AS: {
			name: "American Samoa",
		},
		AT: {
			name: "Austria",
		},
		AU: {
			name: "Australia",
		},
		AW: {
			name: "Aruba",
		},
		AZ: {
			name: "Azerbaijan",
		},
		BA: {
			name: "Bosnia and Herzegovina",
		},
		BB: {
			name: "Barbados",
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
		BL: {
			name: "Saint-Barthélemy",
		},
		BM: {
			name: "Bermuda",
		},
		BN: {
			name: "Brunei",
		},
		BO: {
			name: "Bolivia",
		},
		BQBO: {
			name: "The Netherlands",
		},
		BQSA: {
			name: "Saba (Netherlands)",
		},
		BQSE: {
			name: "St. Eustatius (Netherlands)",
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
			name: "Democratic Republic of the Congo",
		},
		CF: {
			name: "Central African Republic",
		},
		CG: {
			name: "Republic of Congo",
		},
		CH: {
			name: "Switzerland",
		},
		CI: {
			name: "Côte d'Ivoire",
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
		CW: {
			name: "Curaco (Netherlands)",
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
		DM: {
			name: "Dominica",
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
		FM: {
			name: "Micronesia",
		},
		FO: {
			name: "Faeroe Islands",
		},
		FR: {
			name: "France",
		},
		GA: {
			name: "Gabon",
		},
		GB: {
			name: "United Kingdom",
		},
		GD: {
			name: "Grenada",
		},
		GE: {
			name: "Georgia",
		},
		GF: {
			name: "France",
		},
		GH: {
			name: "Ghana",
		},
		GL: {
			name: "Greenland",
		},
		GM: {
			name: "The Gambia",
		},
		GN: {
			name: "Guinea",
		},
		GP: {
			name: "Guadeloupe (France)",
		},
		GQ: {
			name: "Equatorial Guinea",
		},
		GR: {
			name: "Greece",
		},
		GT: {
			name: "Guatemala",
		},
		GU: {
			name: "Guam",
		},
		GW: {
			name: "Guinea-Bissau",
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
			name: "Canary Islands (Spain)",
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
			name: "Jordan and Saudi Arabia",
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
		KM: {
			name: "Comoros",
		},
		KN: {
			name: "Saint Kitts and Nevis",
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
		KY: {
			name: "Cayman Islands",
		},
		KZ: {
			name: "Kazakhstan",
		},
		LA: {
			name: "Laos",
		},
		LB: {
			name: "Lebanon",
		},
		LC: {
			name: "Saint Lucia",
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
			name: "Moldova",
		},
		ME: {
			name: "Montenegro",
		},
		MF: {
			name: "Saint Martin (French)",
		},
		MG: {
			name: "Madagascar",
		},
		MH: {
			name: "Marshall Islands",
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
		MP: {
			name: "Northern Mariana Islands",
		},
		MQ: {
			name: "Martinique (France)",
		},
		MR: {
			name: "Mauritania",
		},
		MS: {
			name: "Montserrat",
		},
		MT: {
			name: "Malta",
		},
		MU: {
			name: "Mauritius",
		},
		MV: {
			name: "Maldives",
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
			name: "New Caledonia",
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
		NR: {
			name: "Nauru",
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
		PF: {
			name: "French Polynesia",
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
		PW: {
			name: "Palau",
		},
		PY: {
			name: "Paraguay",
		},
		QA: {
			name: "Qatar",
		},
		RE: {
			name: "Reunion (France)",
		},
		RO: {
			name: "Romania",
		},
		RS: {
			name: "Serbia",
		},
		RU: {
			name: "Russian Federation",
		},
		RW: {
			name: "Rwanda",
		},
		SA: {
			name: "Jordan and Saudi Arabia",
		},
		SB: {
			name: "Solomon Islands",
		},
		SC: {
			name: "Seychelles",
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
			name: "Slovakia",
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
		ST: {
			name: "São Tomé and Principe",
		},
		SV: {
			name: "El Salvador",
		},
		SX: {
			name: "Saint Martin (Dutch)",
		},
		SY: {
			name: "Syria",
		},
		SZ: {
			name: "Swaziland",
		},
		TC: {
			name: "Turks and Caicos Islands",
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
			name: "Tajikistan",
		},
		TL: {
			name: "Timor-Leste",
		},
		TM: {
			name: "Turkmenistan",
		},
		TN: {
			name: "Tunisia",
		},
		TO: {
			name: "Tonga",
		},
		TR: {
			name: "Turkey",
		},
		TT: {
			name: "Trinidad and Tobago",
		},
		TV: {
			name: "Tuvalu",
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
		VC: {
			name: "Saint Vincent and the Grenadines",
		},
		VE: {
			name: "Venezuela",
		},
		VG: {
			name: "British Virgin Islands",
		},
		VI: {
			name: "United States Virgin Islands",
		},
		VN: {
			name: "Vietnam",
		},
		VU: {
			name: "Vanuatu",
		},
		WS: {
			name: "Samoa",
		},
		XK: {
			name: "Kosovo",
		},
		YE: {
			name: "Yemen",
		},
		YT: {
			name: "Mayotte (France)",
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
	locations: {
		macau: {
			name: "Macau",
			lat: "22.210928",
			lng: "113.552971"
		},
		singapore: {
			name: "Singapore",
			lat: "1.352083",
			lng: "103.819836"
		}
	},
	regions: {},
	labels: {},
	legend: {
		entries: [
			{
				name: "Included (color darkness proportional to score)",
				color: color_include,
				type: "",
				shape: "square",
				ids: ""
			},
			{
				name: "Included, but " + category_select.toLowerCase() + " score not available",
				color: getGradientColor("#ffffff", color_overall, 0.1),
				type: "",
				shape: "square",
				ids: ""
			},
			{
				name: "Excluded",
				color: color_exclude,
				type: "",
				shape: "square",
				ids: ""
			},
			{
				name: "Survey not completed",
				color: color_missing,
				type: "",
				shape: "square",
				ids: ""
			},
		]
	}
};

for (let obj in simplemaps_worldmap_mapdata.state_specific) {
	let map_country = simplemaps_worldmap_mapdata.state_specific[obj];
	
	if(data_inclusion.find(({country}) => country.toLowerCase() === map_country.name.toLowerCase()) === undefined) {
		// console.log(map_country.name + " is not in the inclusion data set");
	} else {
		data_inclusion.find(({country}) => country.toLowerCase() === map_country.name.toLowerCase()).onMap = true;
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
	
function country_loop(map_country) {
	if(data_inclusion.find(({country}) => country.toLowerCase() === map_country.name.toLowerCase()) === undefined) {
		// console.log(map_country.name + " is not in the inclusion data set");
	} else {
		data_inclusion.find(({country}) => country.toLowerCase() === map_country.name.toLowerCase()).onMap = true;
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

for (let obj in simplemaps_worldmap_mapdata.state_specific) {
	country_loop(simplemaps_worldmap_mapdata.state_specific[obj]);
}

for (let obj in simplemaps_worldmap_mapdata.locations) {
	country_loop(simplemaps_worldmap_mapdata.locations[obj]);
}

// Print countries that are in the inclusion data set but not on the map
var dataNotOnMap = data_inclusion.filter(({onMap}) => onMap === false);
for (let obj in dataNotOnMap) {
	console.log(dataNotOnMap[obj].country + " is not on the map");
}

function repaint() {
	category_select = document.getElementById("category_select").value;

	for (let obj in simplemaps_worldmap_mapdata.state_specific) {
		country_loop(simplemaps_worldmap_mapdata.state_specific[obj]);
	}

	for (let obj in simplemaps_worldmap_mapdata.locations) {
		country_loop(simplemaps_worldmap_mapdata.locations[obj]);
	}

	simplemaps_worldmap_mapdata.legend.entries[0].color = color_include;
	simplemaps_worldmap_mapdata.legend.entries[1].name = "Included, but " + category_select.toLowerCase() + " score not available";
	switch(category_select) {
		case "Overall":
			simplemaps_worldmap_mapdata.legend.entries[0].color = color_overall;
			simplemaps_worldmap_mapdata.legend.entries[1].color = getGradientColor("#ffffff", color_overall, 0.1);
			break;
		case "Community inclusion":
			simplemaps_worldmap_mapdata.legend.entries[0].color = color_community_inclusion;
			simplemaps_worldmap_mapdata.legend.entries[1].color = getGradientColor("#ffffff", color_community_inclusion, 0.1);
			break;
		case "Education":
			simplemaps_worldmap_mapdata.legend.entries[0].color = color_education;
			simplemaps_worldmap_mapdata.legend.entries[1].color = getGradientColor("#ffffff", color_education, 0.1);
			break;
		case "Health":
			simplemaps_worldmap_mapdata.legend.entries[0].color = color_health;
			simplemaps_worldmap_mapdata.legend.entries[1].color = getGradientColor("#ffffff", color_health, 0.1);
			break;
		case "Independence":
			simplemaps_worldmap_mapdata.legend.entries[0].color = color_independence;
			simplemaps_worldmap_mapdata.legend.entries[1].color = getGradientColor("#ffffff", color_independence, 0.1);
			break;
		case "Policy":
			simplemaps_worldmap_mapdata.legend.entries[0].color = color_policy;
			simplemaps_worldmap_mapdata.legend.entries[1].color = getGradientColor("#ffffff", color_policy, 0.1);
			break;
	}

	simplemaps_worldmap.refresh();
}
