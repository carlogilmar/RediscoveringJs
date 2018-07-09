const sample = function(number) {

	factor = 4;

	if(number == 2) {
		return
    number * factor;
	}

	return number * 10;
};

console.log(sample(2));

/*
	Js Lint code
npm install -g eslint

Create the configuration for inspect a file:

eslint --init

And run the lint over the configuration

eslint messy-eslint.js

*/
