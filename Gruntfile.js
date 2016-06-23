module.exports = function (grunt) {

	require('grunt-dojo2').initConfig(grunt);
	grunt.registerTask('dev', [
		'typings',
		'tslint',
		'clean:dev',
		'ts:dev',
		'copy:staticTestFiles',
		'updateTsconfig'
	]);
};

