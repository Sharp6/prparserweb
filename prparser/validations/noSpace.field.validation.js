function check(field) {
	var warning = "Field " + field.attrib.name + " contains a space within its name!";

	// Whitespace checker from SO http://stackoverflow.com/questions/17616624/detect-if-string-contains-any-spaces
	if (/\s/.test(field.attrib.name)) {
	    return warning;
	} else {
		return null;
	}	
}

module.exports = {
	check: check
}