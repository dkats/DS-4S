function header(level = 0) {
	if(level == 0) {
		dir = '';
	} else if(level == -1) {
		dir = '../';
	}

	document.write('<header>');
	document.write('<ul class="menu">');
	document.write('	<li class="homeclick" onclick="window.open(\'' + dir + 'index.html\',\'_self\')" id="header_home">DS-4S</li>');
	document.write('	<li onclick="window.open(\'' + dir + 'map.html\',\'_self\')" id="header_map">Map</li>');
	document.write('	<li onclick="window.open(\'' + dir + 'country.html\',\'_self\')" id="header_country">Country data</li>');
	// document.write('	<li onclick="window.open(\'https://redcap.partners.org/redcap/surveys/?s=J3ANH9LRYEC8CLYK\',\'_blank\')" id="header_survey">Request Access to the Survey</li>');
	document.write('	<li style="float:right;" onclick="window.open(\'' + dir + 'citation.html\',\'_self\')" id="header_citation">Publication and Citation Information</li>');
	document.write('	<li style="float:right;" onclick="window.open(\'' + dir + 'about.html\',\'_self\')" id="header_about">About Us</li>');
	document.write('</ul>');
	document.write('</header>');
}