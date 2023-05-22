// https://stackoverflow.com/questions/196972/convert-string-to-title-case-with-javascript
function toTitleCase(str) {
	return str.replace(
		/\w\S*/g,
		function(txt) {
			return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
		}
	);
}

function roundTo(num, places) {
	return (Math.round(num * Math.pow(10,places)) / Math.pow(10,places)).toFixed(places);
}

// https://www.sitepoint.com/convert-numbers-to-ordinals-javascript/
function ordinal_suffix(n) {
	let ord = 'th';

	if (n % 10 == 1 && n % 100 != 11) {
		ord = 'st';
	}
	else if (n % 10 == 2 && n % 100 != 12) {
		ord = 'nd';
	}
	else if (n % 10 == 3 && n % 100 != 13) {
		ord = 'rd';
	}

	return ord;
}

function ordinal_super(n) {
	return n + "<sup>" + ordinal_suffix(n) + "</sup>";
}

var data_scores = [
	{country: 'Albania', all_domain_score: '-2.567181', all_domain_rank: '23', community_score: '-1.756504', community_rank: '40', edu_score: '1.596031', edu_rank: '20', health_score: '-4.097375', health_rank: '33', indep_score: '0.9746428', indep_rank: '21', policy_score: '1.188768', policy_rank: '22'},
	{country: 'Argentina', all_domain_score: '6.166677', all_domain_rank: '17', community_score: '1.204246', community_rank: '18', edu_score: '1.470649', edu_rank: '21', health_score: '1.66459', health_rank: '21', indep_score: '1.17078', indep_rank: '19', policy_score: '1.266054', policy_rank: '19'},
	{country: 'Australia', all_domain_score: '', all_domain_rank: '45', community_score: '2.093473', community_rank: '9', edu_score: '', edu_rank: '50', health_score: '9.227876', health_rank: '9', indep_score: '6.8682', indep_rank: '6', policy_score: '0.9282979', policy_rank: '25'},
	{country: 'Austria', all_domain_score: '', all_domain_rank: '45', community_score: '1.284046', community_rank: '15', edu_score: '3.606231', edu_rank: '11', health_score: '3.817502', health_rank: '18', indep_score: '', indep_rank: '49', policy_score: '2.378768', policy_rank: '7'},
	{country: 'Bangladesh', all_domain_score: '-21.16762', all_domain_rank: '40', community_score: '-1.68726', community_rank: '38', edu_score: '-5.332008', edu_rank: '40', health_score: '-8.778022', health_rank: '45', indep_score: '-3.824578', indep_rank: '40', policy_score: '-4.13449', policy_rank: '47'},
	{country: 'Botswana', all_domain_score: '-13.33278', all_domain_rank: '35', community_score: '-0.3239484', community_rank: '29', edu_score: '-6.430181', edu_rank: '43', health_score: '-1.905494', health_rank: '29', indep_score: '-2.827256', indep_rank: '31', policy_score: '-1.087834', policy_rank: '37'},
	{country: 'Brazil', all_domain_score: '1.854759', all_domain_rank: '19', community_score: '-2.417189', community_rank: '45', edu_score: '3.017418', edu_rank: '14', health_score: '0.2899922', health_rank: '24', indep_score: '0.675795', indep_rank: '23', policy_score: '-0.2452657', policy_rank: '31'},
	{country: 'Canada', all_domain_score: '34.2384', all_domain_rank: '2', community_score: '2.689899', community_rank: '6', edu_score: '9.488381', edu_rank: '5', health_score: '12.93892', health_rank: '2', indep_score: '9.256637', indep_rank: '2', policy_score: '2.497025', policy_rank: '4'},
	{country: 'Chile', all_domain_score: '-5.029226', all_domain_rank: '29', community_score: '-0.947077', community_rank: '32', edu_score: '1.317973', edu_rank: '22', health_score: '-4.138247', health_rank: '34', indep_score: '-2.628432', indep_rank: '29', policy_score: '1.631456', policy_rank: '15'},
	{country: 'Colombia', all_domain_score: '-4.21042', all_domain_rank: '28', community_score: '-2.091973', community_rank: '44', edu_score: '2.5903', edu_rank: '18', health_score: '-1.499326', health_rank: '28', indep_score: '-3.232953', indep_rank: '38', policy_score: '1.75746', policy_rank: '13'},
	{country: 'Dominican Republic', all_domain_score: '-3.927835', all_domain_rank: '26', community_score: '0.4746195', community_rank: '21', edu_score: '1.293273', edu_rank: '24', health_score: '-6.529232', health_rank: '38', indep_score: '-0.4191923', indep_rank: '25', policy_score: '1.070511', policy_rank: '23'},
	{country: 'El Salvador', all_domain_score: '-2.192515', all_domain_rank: '22', community_score: '-1.607762', community_rank: '37', edu_score: '-2.311964', edu_rank: '31', health_score: '1.955264', health_rank: '20', indep_score: '1.153614', indep_rank: '20', policy_score: '-2.284398', policy_rank: '40'},
	{country: 'Estonia', all_domain_score: '5.684959', all_domain_rank: '18', community_score: '1.204549', community_rank: '17', edu_score: '-4.952159', edu_rank: '37', health_score: '10.01668', health_rank: '6', indep_score: '-2.859', indep_rank: '32', policy_score: '2.905161', policy_rank: '2'},
	{country: 'Germany', all_domain_score: '22.7866', all_domain_rank: '6', community_score: '2.689899', community_rank: '6', edu_score: '3.808162', edu_rank: '10', health_score: '7.379616', health_rank: '11', indep_score: '7.401897', indep_rank: '5', policy_score: '2.740446', policy_rank: '3'},
	{country: 'Ghana', all_domain_score: '-25.95732', all_domain_rank: '42', community_score: '-3.22601', community_rank: '47', edu_score: '-3.598813', edu_rank: '34', health_score: '-8.339553', health_rank: '41', indep_score: '-5.599891', indep_rank: '46', policy_score: '-7.70541', policy_rank: '50'},
	{country: 'Guatemala', all_domain_score: '-12.08875', all_domain_rank: '33', community_score: '-0.2283069', community_rank: '26', edu_score: '-3.332946', edu_rank: '33', health_score: '-5.705337', health_rank: '37', indep_score: '-2.763077', indep_rank: '30', policy_score: '-0.3867356', policy_rank: '34'},
	{country: 'Indonesia', all_domain_score: '-25.51609', all_domain_rank: '41', community_score: '-3.971783', community_rank: '49', edu_score: '-7.698163', edu_rank: '47', health_score: '-8.380908', health_rank: '42', indep_score: '-5.599891', indep_rank: '46', policy_score: '-0.6944386', policy_rank: '35'},
	{country: 'Italy', all_domain_score: '33.02215', all_domain_rank: '3', community_score: '2.01337', community_rank: '11', edu_score: '10.65626', edu_rank: '1', health_score: '12.55315', health_rank: '3', indep_score: '7.528155', indep_rank: '4', policy_score: '2.497025', policy_rank: '4'},
	{country: 'Jamaica', all_domain_score: '-2.042979', all_domain_rank: '21', community_score: '1.1881', community_rank: '19', edu_score: '-0.778222', edu_rank: '28', health_score: '0.5136256', health_rank: '23', indep_score: '-2.972399', indep_rank: '34', policy_score: '-0.1162566', policy_rank: '30'},
	{country: 'Japan', all_domain_score: '6.852149', all_domain_rank: '16', community_score: '-0.1485091', community_rank: '22', edu_score: '4.5872', edu_rank: '9', health_score: '0.0506046', health_rank: '26', indep_score: '1.223101', indep_rank: '17', policy_score: '1.710097', policy_rank: '14'},
	{country: 'Jordan and Saudi Arabia', all_domain_score: '-15.6195', all_domain_rank: '36', community_score: '-1.756504', community_rank: '40', edu_score: '-5.673582', edu_rank: '42', health_score: '-4.534724', health_rank: '35', indep_score: '-1.527648', indep_rank: '27', policy_score: '-3.241877', policy_rank: '45'},
	{country: 'Kenya', all_domain_score: '-16.57191', all_domain_rank: '38', community_score: '-0.2547043', community_rank: '27', edu_score: '-3.99203', edu_rank: '35', health_score: '-8.563013', health_rank: '43', indep_score: '-2.975631', indep_rank: '35', policy_score: '-2.977232', policy_rank: '43'},
	{country: 'Kosovo', all_domain_score: '1.361124', all_domain_rank: '20', community_score: '-0.2177531', community_rank: '25', edu_score: '3.56421', edu_rank: '12', health_score: '-3.705624', health_rank: '32', indep_score: '1.749637', indep_rank: '15', policy_score: '1.513968', policy_rank: '16'},
	{country: 'Kyrgyzstan', all_domain_score: '', all_domain_rank: '45', community_score: '', community_rank: '50', edu_score: '-6.430181', edu_rank: '43', health_score: '-7.143251', health_rank: '40', indep_score: '-2.976444', indep_rank: '36', policy_score: '-3.655567', policy_rank: '46'},
	{country: 'Liberia', all_domain_score: '-29.29021', all_domain_rank: '44', community_score: '-3.162962', community_rank: '46', edu_score: '-8.379048', edu_rank: '48', health_score: '-9.070185', health_rank: '46', indep_score: '-4.781097', indep_rank: '43', policy_score: '-7.43038', policy_rank: '49'},
	{country: 'Lithuania', all_domain_score: '20.51555', all_domain_rank: '9', community_score: '1.880472', community_rank: '14', edu_score: '4.870491', edu_rank: '7', health_score: '9.648301', health_rank: '7', indep_score: '3.839057', indep_rank: '12', policy_score: '0.4403304', policy_rank: '29'},
	{country: 'Malta', all_domain_score: '21.89665', all_domain_rank: '7', community_score: '2.013975', community_rank: '10', edu_score: '9.783462', edu_rank: '2', health_score: '6.594948', health_rank: '13', indep_score: '4.39896', indep_rank: '11', policy_score: '1.070511', policy_rank: '23'},
	{country: 'Myanmar', all_domain_score: '', all_domain_rank: '45', community_score: '-1.010731', community_rank: '33', edu_score: '-4.471612', edu_rank: '36', health_score: '', health_rank: '49', indep_score: '-4.407949', indep_rank: '42', policy_score: '1.373061', policy_rank: '17'},
	{country: 'New Zealand', all_domain_score: '13.09251', all_domain_rank: '13', community_score: '-0.2019094', community_rank: '24', edu_score: '1.126059', edu_rank: '26', health_score: '6.129208', health_rank: '15', indep_score: '5.311267', indep_rank: '8', policy_score: '0.9282979', policy_rank: '25'},
	{country: 'Nigeria', all_domain_score: '-28.06241', all_domain_rank: '43', community_score: '-3.242459', community_rank: '48', edu_score: '-8.379048', edu_rank: '48', health_score: '-11.07251', health_rank: '48', indep_score: '-5.599891', indep_rank: '46', policy_score: '-2.750627', policy_rank: '42'},
	{country: 'Pakistan', all_domain_score: '-3.946321', all_domain_rank: '27', community_score: '1.231251', community_rank: '16', edu_score: '1.225582', edu_rank: '25', health_score: '-3.422125', health_rank: '31', indep_score: '-4.781097', indep_rank: '43', policy_score: '3.738577', policy_rank: '1'},
	{country: 'Peru', all_domain_score: '', all_domain_rank: '45', community_score: '1.960575', community_rank: '13', edu_score: '1.317973', edu_rank: '22', health_score: '', health_rank: '49', indep_score: '-1.177578', indep_rank: '26', policy_score: '2.02619', policy_rank: '9'},
	{country: 'Poland', all_domain_score: '-2.951689', all_domain_rank: '25', community_score: '-1.02718', community_rank: '35', edu_score: '-1.839063', edu_rank: '30', health_score: '1.071377', health_rank: '22', indep_score: '1.439421', indep_rank: '16', policy_score: '-3.00401', policy_rank: '44'},
	{country: 'Ireland', all_domain_score: '20.80459', all_domain_rank: '8', community_score: '3.499326', community_rank: '1', edu_score: '3.291863', edu_rank: '13', health_score: '9.374876', health_rank: '8', indep_score: '3.190134', indep_rank: '13', policy_score: '1.993134', policy_rank: '10'},
	{country: 'Russian Federation', all_domain_score: '-5.72843', all_domain_rank: '30', community_score: '-1.08058', community_rank: '36', edu_score: '1.107724', edu_rank: '27', health_score: '-2.289422', health_rank: '30', indep_score: '-4.165112', indep_rank: '41', policy_score: '1.248956', policy_rank: '20'},
	{country: 'Rwanda', all_domain_score: '-15.98311', all_domain_rank: '37', community_score: '-0.2711535', community_rank: '28', edu_score: '-3.127645', edu_rank: '32', health_score: '-4.678878', health_rank: '36', indep_score: '-5.121632', indep_rank: '45', policy_score: '-2.498923', policy_rank: '41'},
	{country: 'Singapore', all_domain_score: '-2.829631', all_domain_rank: '24', community_score: '2.770002', community_rank: '5', edu_score: '-7.111066', edu_rank: '46', health_score: '2.566303', health_rank: '19', indep_score: '-0.2539158', indep_rank: '24', policy_score: '-1.124649', policy_rank: '38'},
	{country: 'South Africa', all_domain_score: '-5.938873', all_domain_rank: '31', community_score: '-1.010731', community_rank: '33', edu_score: '-1.81317', edu_rank: '29', health_score: '-0.1666707', health_rank: '27', indep_score: '-3.45143', indep_rank: '39', policy_score: '0.7151279', policy_rank: '28'},
	{country: 'Spain', all_domain_score: '27.20638', all_domain_rank: '5', community_score: '-0.9051408', community_rank: '31', edu_score: '9.783462', edu_rank: '2', health_score: '8.466339', health_rank: '10', indep_score: '8.086061', indep_rank: '3', policy_score: '2.378768', policy_rank: '7'},
	{country: 'Sri Lanka', all_domain_score: '-9.948199', all_domain_rank: '32', community_score: '-0.1904453', community_rank: '23', edu_score: '-5.62653', edu_rank: '41', health_score: '0.2007619', health_rank: '25', indep_score: '-2.015182', indep_rank: '28', policy_score: '-1.995723', policy_rank: '39'},
	{country: 'Sweden', all_domain_score: '20.33737', all_domain_rank: '10', community_score: '3.499326', community_rank: '1', edu_score: '4.7203', edu_rank: '8', health_score: '6.958357', health_rank: '12', indep_score: '4.590271', indep_rank: '9', policy_score: '0.7281172', policy_rank: '27'},
	{country: 'Switzerland', all_domain_score: '19.96647', all_domain_rank: '11', community_score: '3.499326', community_rank: '1', edu_score: '2.732119', edu_rank: '17', health_score: '11.27377', health_rank: '5', indep_score: '2.790753', indep_rank: '14', policy_score: '1.238458', policy_rank: '21'},
	{country: 'The Netherlands', all_domain_score: '28.30252', all_domain_rank: '4', community_score: '2.689899', community_rank: '6', edu_score: '2.965855', edu_rank: '15', health_score: '14.15676', health_rank: '1', indep_score: '6.73713', indep_rank: '7', policy_score: '2.497025', policy_rank: '4'},
	{country: 'Togo', all_domain_score: '', all_domain_rank: '45', community_score: '-1.687865', community_rank: '39', edu_score: '-6.842386', edu_rank: '45', health_score: '-6.561554', health_rank: '39', indep_score: '', indep_rank: '49', policy_score: '-5.077653', policy_rank: '48'},
	{country: 'Turkey', all_domain_score: '9.312178', all_domain_rank: '15', community_score: '0.5808147', community_rank: '20', edu_score: '2.149049', edu_rank: '19', health_score: '5.248494', health_rank: '16', indep_score: '0.7285233', indep_rank: '22', policy_score: '1.365974', policy_rank: '18'},
	{country: 'Uganda', all_domain_score: '-18.42211', all_domain_rank: '39', community_score: '-2.020397', community_rank: '43', edu_score: '-5.110188', edu_rank: '38', health_score: '-8.66786', health_rank: '44', indep_score: '-3.140888', indep_rank: '37', policy_score: '-0.2642702', policy_rank: '32'},
	{country: 'United Kingdom', all_domain_score: '36.78927', all_domain_rank: '1', community_score: '3.499326', community_rank: '1', edu_score: '9.783462', edu_rank: '2', health_score: '12.50807', health_rank: '4', indep_score: '11.572', indep_rank: '1', policy_score: '1.993134', policy_rank: '10'},
	{country: 'United States', all_domain_score: '15.66853', all_domain_rank: '12', community_score: '2.01337', community_rank: '11', edu_score: '5.396393', edu_rank: '6', health_score: '4.050433', health_rank: '17', indep_score: '4.561389', indep_rank: '10', policy_score: '-0.7069763', policy_rank: '36'},
	{country: 'Uruguay', all_domain_score: '10.43609', all_domain_rank: '14', community_score: '-1.767362', community_rank: '42', edu_score: '2.811599', edu_rank: '16', health_score: '6.329782', health_rank: '14', indep_score: '1.206136', indep_rank: '18', policy_score: '1.869865', policy_rank: '12'},
	{country: 'Zimbabwe', all_domain_score: '-12.40988', all_domain_rank: '34', community_score: '-0.60632', community_rank: '30', edu_score: '-5.137825', edu_rank: '39', health_score: '-9.242934', health_rank: '47', indep_score: '-2.951284', indep_rank: '33', policy_score: '-0.3401802', policy_rank: '33'},
];
let max_rank_overall = 0;
let max_rank_community = 0;
let max_rank_education = 0;
let max_rank_health = 0;
let max_rank_independence = 0;
let max_rank_policy = 0;
let max_score_overall = 0;
let max_score_community = 0;
let max_score_education = 0;
let max_score_health = 0;
let max_score_independence = 0;
let max_score_policy = 0;
let min_score_overall = 0;
let min_score_community = 0;
let min_score_education = 0;
let min_score_health = 0;
let min_score_independence = 0;
let min_score_policy = 0;
for (let obj in data_scores) {
	let val = data_scores[obj];
	val['all_domain_score'] = Number.parseFloat(val['all_domain_score']);
	val['all_domain_rank'] = Number.parseInt(val['all_domain_rank']);
	val['community_score'] = Number.parseFloat(val['community_score']);
	val['community_rank'] = Number.parseInt(val['community_rank']);
	val['edu_score'] = Number.parseFloat(val['edu_score']);
	val['edu_rank'] = Number.parseInt(val['edu_rank']);
	val['health_score'] = Number.parseFloat(val['health_score']);
	val['health_rank'] = Number.parseInt(val['health_rank']);
	val['indep_score'] = Number.parseFloat(val['indep_score']);
	val['indep_rank'] = Number.parseInt(val['indep_rank']);
	val['policy_score'] = Number.parseFloat(val['policy_score']);
	val['policy_rank'] = Number.parseInt(val['policy_rank']);
	if(!isNaN(val['all_domain_score'])) {
		max_rank_overall = max_rank_overall + 1;
	}
	if(!isNaN(val['community_score'])) {
		max_rank_community = max_rank_community + 1;
	}
	if(!isNaN(val['edu_score'])) {
		max_rank_education = max_rank_education + 1;
	}
	if(!isNaN(val['health_score'])) {
		max_rank_health = max_rank_health + 1;
	}
	if(!isNaN(val['indep_score'])) {
		max_rank_independence = max_rank_independence + 1;
	}
	if(!isNaN(val['policy_score'])) {
		max_rank_policy = max_rank_policy + 1;
	}
	if(max_score_overall < val['all_domain_score']) {
		max_score_overall = val['all_domain_score'];
	}
	if(max_score_community < val['community_score']) {
		max_score_community = val['community_score'];
	}
	if(max_score_education < val['edu_score']) {
		max_score_education = val['edu_score'];
	}
	if(max_score_health < val['health_score']) {
		max_score_health = val['health_score'];
	}
	if(max_score_independence < val['indep_score']) {
		max_score_independence = val['indep_score'];
	}
	if(max_score_policy < val['policy_score']) {
		max_score_policy = val['policy_score'];
	}
	if(min_score_overall > val['all_domain_score']) {
		min_score_overall = val['all_domain_score'];
	}
	if(min_score_community > val['community_score']) {
		min_score_community = val['community_score'];
	}
	if(min_score_education > val['edu_score']) {
		min_score_education = val['edu_score'];
	}
	if(min_score_health > val['health_score']) {
		min_score_health = val['health_score'];
	}
	if(min_score_independence > val['indep_score']) {
		min_score_independence = val['indep_score'];
	}
	if(min_score_policy > val['policy_score']) {
		min_score_policy = val['policy_score'];
	}
}
