var settings = {
	consoleLogLevel: "debug",
	environment: "development"
};

settings.express = {
	hostName: 'localhost',
	port: 9005,
	ip: '127.0.0.1'
};

settings.db = {
	host: 'localhost',
	name: '365tidalpatterns',
	port: '27017'
};

module.exports = settings;