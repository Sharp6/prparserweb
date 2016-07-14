function check(dataElement) {
	var warning =  "Data Element " + dataElement.attrib.name + " has a protected name!";

	var protecedNames = [
		"account",
		"agent",
		"boolean",
		"case",
		"date",
		"export",
		"function",
		"import",
		"integer",
		"interface",
		"long",
		"package",
		"parameters",
		"proxy",
		"string",
		"var"
	];

	if (protecedNames.indexOf(dataElement.attrib.name.toLowerCase()) > -1) {
		return warning;
	} else {
		return null;
	}	
}

module.exports = {
	check: check
}