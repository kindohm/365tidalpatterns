var settings = {
	consoleLogLevel: "debug",
	environment: "production"
};

settings.express = {
	hostName: 'localhost',
	port: 80,
	ip: '0.0.0.0'
};

settings.db = {
	host: 'localhost',
	name: '365tidalpatterns',
	port: '27017'
};

module.exports = settings;