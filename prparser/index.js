var fs = require('fs');
var et = require('elementtree');

var dataElementValidations = [
	require('./validations/noSpace.dataElement.validation'),
	require('./validations/capitalName.dataElement.validation'),
	require('./validations/protectedName.dataElement.validation')
];

var fieldValidations = [
	require('./validations/noSpace.field.validation'),
	require('./validations/lowercaseName.field.validation'),
	require('./validations/testedValueTypes.field.validation')
];

function validate(model) {
	var etree = et.parse(model);

	var report = {};
	report["numberOfValidations"] = 
		dataElementValidations.length + " data element validations and " +
		fieldValidations.length + " field validations " +
		"have been performed";

	var dataElements = etree.findall('.//dataElement');
	var dataElementWarnings = [];
	dataElements.forEach(function(dataElement) {		
		dataElementValidations.forEach(function(validator) {
			var warning = validator.check(dataElement);
			if(warning) {
				dataElementWarnings.push(warning);
			}
		});
	});
	report["dataElementWarnings"] = dataElementWarnings;

	var fields = etree.findall('.//fields/field');
	var fieldWarnings = [];
	fields.forEach(function(field) {
		fieldValidations.forEach(function(validator) {
			var warning = validator.check(field);
			if(warning) {
				fieldWarnings.push(warning);
			}
		});
	});
	report["fieldWarnings"] = fieldWarnings;

	return report;
}

module.exports = {
	validate: validate
}