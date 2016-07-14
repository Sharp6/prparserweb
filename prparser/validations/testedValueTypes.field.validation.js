function check(field) {
	var checkedValueTypes = [
		"Boolean",
		"String",
		"StringMultiLine",
		"Integer",
		"Date",
		"StringFile",
		"DataRef"
	];

	if (field.findtext('fieldType') === "VALUE_FIELD") {
		if(checkedValueTypes.indexOf(field.findall('./valueField/valueFieldType/')[0].attrib.name) === -1) {
			var warning = "Field " + field.attrib.name + "  does not have a tested value type! (" + field.findall('./valueField/valueFieldType/')[0].attrib.name + ")";
			return warning;
		} else {
			return null;
		}
	} else {
		// field is not a value type, so it should not be tested
		return null;
	}
}

module.exports = {
	check: check
};