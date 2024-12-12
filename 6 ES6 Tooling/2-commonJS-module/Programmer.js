class Programmer {
	constructor(name, language) {
		this.name = name;
		this.language = language;
	}

	code() {
		console.log(`${this.name} is programming in ${this.language}.`);
	}
} 

// Export the Programmer class as the module's default export
module.exports = Programmer;