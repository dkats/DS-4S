function header(level = 0) {
	if(level == 0) {
		dir = '';
	} else if(level == -1) {
		dir = '../';
	}

	document.write('<header>');
	document.write('<ul class="menu">');
	document.write('	<li class="homeclick" onclick="window.open(\'' + dir + 'index.html\',\'_self\')" id="header_home">Data</li>');
	document.write('	<li onclick="window.open(\'' + dir + 'citation.html\',\'_self\')" id="header_citation">Publication and Citation Information</li>');
	document.write('</ul>');
	document.write('</header>');
}