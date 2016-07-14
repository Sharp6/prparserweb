function check(dataElement) {
	var warning =  "Data Element " + dataElement.attrib.name + " does not start its name with a capital!";

	if (!/^[A-Z]/.test(dataElement.attrib.name)) {
	    return warning;
	} else {
		return null;
	}	
}

module.exports = {
	check: check
}