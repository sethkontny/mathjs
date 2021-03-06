# Extend

The library can easily be extended with functions and variables using the
`import` function. The function `import` accepts a filename or an object with
functions and variables.

```js
var math = require('mathjs');

// define new functions and variables
math.import({
    myvalue: 42,
    hello: function (name) {
        return 'hello, ' + name + '!';
    }
});

// defined functions can be used in both JavaScript as well as the parser
math.myvalue * 2;               // 84
math.hello('user');             // 'hello, user!'

var parser = math.parser();
parser.eval('myvalue + 10');    // 52
parser.eval('hello("user")');   // 'hello, user!'
```

External libraries like
[numbers.js](https://github.com/sjkaliski/numbers.js) and
[numeric.js](http://numericjs.com/) can be imported as well.
The libraries must be installed using npm:

    npm install numbers
    npm install numeric

The libraries can be easily imported into math.js using `import`. By default,
existing functions will not be overwritten, and math.js will create a wrapper
function around the imported functions which converts data types like `Matrix`
to primitive types like `Array`.

```js
var math = require('mathjs');

// import the numbers.js and numeric.js libraries into math.js
math.import('numbers');
math.import('numeric');

// use functions from numbers.js
math.fibonacci(7);                          // 13
math.eval('fibonacci(7)');                  // 13

// use functions from numeric.js
math.eval('eig([1, 2; 4, 3])').lambda.x;    // [5, -1]
```
