/**
 * The main gulp file
 */

// Importing the dependencies
var gulp = require('gulp');
var args = require('./tasks/utils/args');
var main = require('./tasks/main/main')
var bot = require('./tasks/bot/bot');

/**
 * Updates the version of the main package
 */
gulp.task('version:main', function () {

	// Extracting the arguments
	var argmnts = args.extract(process.argv);

	// Getting the type of the versioning
	var type = argmnts['bump'];

	// Checking if the bump is valid
	if (type) {

		// Bumping the version
		return main.version(type);
	} else {

		// Raising an error
		console.error('[ERROR]: The “version” tasks is missing the bump argument (patch, minor, major, 1.36.3, 5.6.1...)');
	}
});

/**
 * Updates the version of the bot package
 */
gulp.task('version:bot', function () {

	// Extracting the arguments
	var argmnts = args.extract(process.argv);

	// Getting the type of the versioning
	var type = argmnts['bump'];

	// Checking if the bump is valid
	if (type) {

		// Bumping the version
		return bot.version(type);
	} else {

		// Raising an error
		console.error('[ERROR]: The “version” tasks is missing the bump argument (patch, minor, major, 1.36.3, 5.6.1...)');
	}
});
