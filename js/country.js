let country_select = document.getElementById("country_select");
let rank_overall = document.getElementById("rank_overall");
let rank_community = document.getElementById("rank_community");
let rank_education = document.getElementById("rank_education");
let rank_health = document.getElementById("rank_health");
let rank_independence = document.getElementById("rank_independence");
let rank_policy = document.getElementById("rank_policy");
let rank_overall_outof = document.getElementById("rank_overall_outof");
let rank_community_outof = document.getElementById("rank_community_outof");
let rank_education_outof = document.getElementById("rank_education_outof");
let rank_health_outof = document.getElementById("rank_health_outof");
let rank_independence_outof = document.getElementById("rank_independence_outof");
let rank_policy_outof = document.getElementById("rank_policy_outof");
let score_overall = document.getElementById("score_overall");
let score_community = document.getElementById("score_community");
let score_education = document.getElementById("score_education");
let score_health = document.getElementById("score_health");
let score_independence = document.getElementById("score_independence");
let score_policy = document.getElementById("score_policy");
let score_overall_range = document.getElementById("score_overall_range");
let score_community_range = document.getElementById("score_community_range");
let score_education_range = document.getElementById("score_education_range");
let score_health_range = document.getElementById("score_health_range");
let score_independence_range = document.getElementById("score_independence_range");
let score_policy_range = document.getElementById("score_policy_range");
let score_rounding = 2;
let score_none = "&ndash;";
let rank_none = "&ndash;";
let responses_el = document.getElementById("responses");

for (let obj in ds4s_scores) {
	let val = ds4s_scores[obj];
	
	// Add country to drop down options list
	let option = document.createElement("option");
	option.value = val['country'];
	option.innerHTML = toTitleCase(val['country']);
	country_select.options.add(option);
}

function loadData() {
	let country_name = country_select.value;
	if(country_name.length > 0) {
		window.location.hash = country_name.toLowerCase();
	}

	let url_country = window.location.hash.replaceAll("%20"," ");
	if(url_country.length > 0) {
		url_country = url_country.substring(1);
	}

	// LOAD SCORE DATA
	let data = ds4s_scores.find(({country}) => country.toLowerCase() === url_country.toLowerCase());
	if(data != undefined) {
		if(country_name.length == 0) {
			country_select.value = data.country;
		}
		rank_overall.innerHTML = ordinal_super(data['all_domain_rank']);
		rank_overall_outof.innerHTML = "/" + ds4s_summary.max_rank_overall;
		score_overall.innerHTML = roundTo(data['all_domain_score'],score_rounding);
		score_overall_range.innerHTML = "(" + roundTo(ds4s_summary.min_score_overall,score_rounding) + "&ndash;" + roundTo(ds4s_summary.max_score_overall,score_rounding) + ")"
		rank_community.innerHTML = ordinal_super(data['community_rank']);
		rank_community_outof.innerHTML = "/" + ds4s_summary.max_rank_community;
		score_community.innerHTML = roundTo(data['community_score'],score_rounding);
		score_community_range.innerHTML = "(" + roundTo(ds4s_summary.min_score_community,score_rounding) + "&ndash;" + roundTo(ds4s_summary.max_score_community,score_rounding) + ")"
		rank_education.innerHTML = ordinal_super(data['edu_rank']);
		rank_education_outof.innerHTML = "/" + ds4s_summary.max_rank_education;
		score_education.innerHTML = roundTo(data['edu_score'],score_rounding);
		score_education_range.innerHTML = "(" + roundTo(ds4s_summary.min_score_education,score_rounding) + "&ndash;" + roundTo(ds4s_summary.max_score_education,score_rounding) + ")"
		rank_health.innerHTML = ordinal_super(data['health_rank']);
		rank_health_outof.innerHTML = "/" + ds4s_summary.max_rank_health;
		score_health.innerHTML = roundTo(data['health_score'],score_rounding);
		score_health_range.innerHTML = "(" + roundTo(ds4s_summary.min_score_health,score_rounding) + "&ndash;" + roundTo(ds4s_summary.max_score_health,score_rounding) + ")"
		rank_independence.innerHTML = ordinal_super(data['indep_rank']);
		rank_independence_outof.innerHTML = "/" + ds4s_summary.max_rank_independence;
		score_independence.innerHTML = roundTo(data['indep_score'],score_rounding);
		score_independence_range.innerHTML = "(" + roundTo(ds4s_summary.min_score_independence,score_rounding) + "&ndash;" + roundTo(ds4s_summary.max_score_independence,score_rounding) + ")"
		rank_policy.innerHTML = ordinal_super(data['policy_rank']);
		rank_policy_outof.innerHTML = "/" + ds4s_summary.max_rank_policy;
		score_policy.innerHTML = roundTo(data['policy_score'],score_rounding);
		score_policy_range.innerHTML = "(" + roundTo(ds4s_summary.min_score_policy,score_rounding) + "&ndash;" + roundTo(ds4s_summary.max_score_policy,score_rounding) + ")"
	} else {
		console.log(url_country + " not found");
	}

	if(score_overall.innerHTML == "NaN") {
		rank_overall.innerHTML = rank_none;
		rank_overall_outof.innerHTML = "";
		score_overall.innerHTML = score_none;
		score_overall_range.innerHTML = "";
	}
	if(score_community.innerHTML == "NaN") {
		rank_community.innerHTML = rank_none;
		rank_community_outof.innerHTML = "";
		score_community.innerHTML = score_none;
		score_community_range.innerHTML = "";
	}
	if(score_education.innerHTML == "NaN") {
		rank_education.innerHTML = rank_none;
		rank_education_outof.innerHTML = "";
		score_education.innerHTML = score_none;
		score_education_range.innerHTML = "";
	}
	if(score_health.innerHTML == "NaN") {
		rank_health.innerHTML = rank_none;
		rank_health_outof.innerHTML = "";
		score_health.innerHTML = score_none;
		score_health_range.innerHTML = "";
	}
	if(score_independence.innerHTML == "NaN") {
		rank_independence.innerHTML = rank_none;
		rank_independence_outof.innerHTML = "";
		score_independence.innerHTML = score_none;
		score_independence_range.innerHTML = "";
	}
	if(score_policy.innerHTML == "NaN") {
		rank_policy.innerHTML = rank_none;
		rank_policy_outof.innerHTML = "";
		score_policy.innerHTML = score_none;
		score_policy_range.innerHTML = "";
	}

	// LOAD RESPONSE DATA
	data = data_responses.find(({country}) => country.toLowerCase() === url_country.toLowerCase());

	responses_el.innerHTML = "";
	if(data != undefined) {
		if(country_name.length == 0) {
			country_select.value = data.country;
		}
		let out = "";
		for(let i in data_dictionary) {
			out += "<div class='question_wrapper " + data_dictionary[i].variable.split("_")[0] + "'>";
			out += "<p class='question'>" + data_dictionary[i].question + "</p>";
			out += (data_dictionary[i].scale === "null" ? "null" : "<p class='scale'>(Scale:&nbsp;&nbsp;&nbsp;&nbsp;" + data_dictionary[i].scale.replaceAll(/[0-9],/g, '').replaceAll('<br>', '').replaceAll(" | ","&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;") + ")</p>");
			out += "<p class='response'>" + (data[data_dictionary[i].variable] === "null" ? "<span class='response_unanswered'>Not answered</span>" : data[data_dictionary[i].variable]) + "</p>";
			out += "</div>";
		}
		responses_el.innerHTML = out;
	} else {
		console.log(url_country + " not found");
	}
}
loadData();
