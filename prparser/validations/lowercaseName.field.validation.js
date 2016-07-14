function check(field) {
	var warning =  "Field " + field.attrib.name + " does not start its name with a lowercase!";

	if (!/^[a-z]/.test(field.attrib.name)) {
	    return warning;
	} else {
		return null;
	}	
}

module.exports = {
	check: check
}