//---------------------------------
// Create the cody object 
var cody = new Object();

// then fill the cody object with properties (using dot notation).
cody.living = true;
cody.age = 33;
cody.gender = 'male';

console.log(cody); // Logs Object {living = true, age = 33, gender = 'male' }
//---------------------------------

var cody = new Object();
cody.living = true;
cody.age = 33;
cody.gender = 'male';
cody.getGender = function() { return cody.gender; };

console.log(cody.getGender()); // Logs 'male'.

//---------------------------------

var myObject = new Object(); // Produces an Object() object.
myObject['0']= 'f';
myObject['1']= 'o';
myObject['2']= 'o';

console.log(myObject); // Logs Object {0="f", 1="o", 2="o"}

var myString = new String('foo'); // Produces a String() object.
console.log(myString); // Logs foo {0="f", 1="o", 2="o"}

//---------------------------------

// Define Person constructor function in order to create custom Person() objects later
var Person = function (living, age, gender){
    this.living = living;
    this.age = age;
    this.gender = gender;
    this.getGender = function() {return this.gender;};
}

// Instantiate a Person object and store it in the cody variable.
var cody = new Person(true, 33, 'male');

console.log(cody);

/*The String() constructor function that follows, having been defined by
Javascript, has the same pattern. Because the string constructor is native 
to Javascript, all we have to do to get a strong instance is instantiate it. But
the pattern is the same whther we use native constructors like String() or
user-defined constructors like Person(). */

// Instantiate a String object storted in the myString variable.
var myString = new String('foo');
console.log(myString);

//---------------------------------

// Create a codyA object using the Object() constructor.

var codyA = new Object();
codyA.living = true;
codyA.age = 33;
codyA.gender = 'male';
codyA.getGender = function() {return codyA.gender;};

console.log(codyA) // Logs Object {living = true, age=33, gender = 'male', ...}

/* The same cody object is created below, but instead of using the native
Object() constructor to crete a one-off cody, we first define our own
Person() constructor that can create a cody object (and any otherPerson
    Object we like) anf then instantiate it with "new". */

    var perosn = function(living, age, gender){
        this.living = living;
        this.age = age;
        this.gender = gender;
        this.getGender = function(){return gender;};
    };

    var codyB = new Person(true, 33, 'male');
    console.log(codyB) //...

//---------------------------------

/* Person is a constructor function. It was written with the intent of
 being used with the new keyword. */
 
 var Person = function(living, age, gender){
     // "this" below is the new object that is being created (i.e. this = new Object();).
     this.living = living;
     this.age = age;
     this.gender = gender;
     this.getGender = function(){return this.gender;};
     // When the function is called with the new keyword, "this" is
     // returned instead of false.
 };

 // Instantiate a Person object named cody.
 var cody = new Person(true, 33, 'male');

 // cody is an object and an instance of Person()
 console.log(typeof cody); // Logs object.
 console.log(cody); // Logs the internal properties and values of cody.
 console.log(cody.constructor); // Logs the Person() function.

//---------------------------------

// Instantiate an Array object named myArray
var myArray = new Array(); // myArray is an instance of Array.

// myArray is an object and an instance of the Array() constructor.
console.log(typeof myArray); // Logs object! What? Yes, arrays are a type of object.
console.log(myArray); // Logs [ ]
console.log(myArray.constructor); // Logs Array()

//---------------------------------

var Person = function (living, age, gender){
    this.living = living;
    this.age = age;
    this.gender = gender;
    this.getGender = function(){return this.gender;};
};
var cody = new Person(true, 33, 'male');
console.log(cody); //...
var lisa = new Person(true, 34, 'female');
console.log(lisa); // Logs Object(living=true, age=34, gender="female",..

//---------------------------------

var myString  = new String('foo');
console.log(myString); // Logs foo { 0="f", 1="o", 2="o" }

//---------------------------------

// Instantiate an instance for each native constructor using the new keyword.
var myNumber = new Number(23);
var myString = new String('male');
var myBoolean = new Boolean(false);
var myObject = new Object();
var myArray = new Array('foo','bar');
var myFunction = new Function("x","y","return x*y");
var myDate = new Date();
var myRegExp = new RegExp('\bt[a-z]+\b');
var myError = new Error('Darn!');

// Log/verify which constructor created the object.
console.log(myNumber.constructor); // Logs Number()
console.log(myString.constructor); // Logs String()
console.log(myBoolean.constructor); // Logs Boolean()
console.log(myObject.constructor); // Logs Object()
console.log(myArray.constructor); // Logs Array() in modern browsers
console.log(myFunction.constructor); // Logs Function
console.log(myDate.constructor); // Logs Date()
console.log(myRegexp.constructor); // Logs RegExp()
console.log(myError.constructor); // Logs Error()

//---------------------------------

var myNumber = new Number(23);
var myNumberLiteral = 23; 

var myString = new String('male');
var myStringLiteral = 'male'

var myBoolean = new Boolean(false);
var myBooleanLiteral = false;

var myObject = new Object();
var myObjectLiteral = {};

var myArray = new Array('foo','bar');
var myArrayLiteral = ['foo','bar'];

var myFunction = new Function("x","y","return x*y");
var myFunctionLiteral = function(x,y){return x * y;};

var myRegExp = new RegExp('\bt[a-z]+\b');
var myRegExpLiteral = /\bt[a-z]+\b/;

// Verify that the literals are created from the same constructor
console.log(myNumber.constructor, myNumberLiteral.constructor);
console.log(myString.constructor, myStringLiteral.constructor);
console.log(myBoolean.constructor, myBooleanLiteral.constructor);
console.log(myObject.constructor, myObjectLiteral.constructor);
console.log(myArray.constructor, myArrayLiteral.constructor);
console.log(myFunction.constructor, myFunctionLiteral.constructor);
console.log(myRegExp.constructor, myRegExpLiteral.constructor);

//---------------------------------

var myString = 'string'
var myNumber = 10;
var myBoolean = false; // Could be true or false, but that is it.
var myNull = null;
var myUndefined = undefined;

console.log(myString, myNumber, myBoolean, myNull, myUndefined);

/* Consider that a complex object like array or object can be made up of
multiple primitive values, and thus becomes a complex set of multiple values
*/

var myObject = {
    myString: 'string',
    myNumber: 10,
    myBoolean: false,
    myNull: null,
    myUndefined: undefined
};

console.log(myObject);
var myArray = ['string', 10, false, null, undefined];
console.log(myArray);

//---------------------------------

// No object is created when producing primitive values; notice no use of
// the "new" keyword.
var primitiveString1 = "foo";
var primitiveString2 = String('foo');
var primitiveNumber1 = 10;
var primitiveNumber2 = Number('10');
var primitiveBoolean1 = true;
var primitiveBoolean2 = Boolean('true');

// Confirm the typeof is not object.
console.log(typeof primitiveString1, typeof primitiveString2);
// Logs 'string,string'
console.log(typeof primitiveNumber1, typeof primitiveNumber2);
// Logs 'number,number'
console.log(typeof primitiveBoolean1, typeof primitiveBoolean2);
// Logs 'Boolean,Boolean'

// Using a constructor and the "new" keyword for creating objects.
var myNumber = new Number(23);
var myString = new String('male');
var myBoolean = new Boolean(false);
var myObject = new Object();
var myArray = new Array('foo','bar');
var myFunction = new Function("x","y","return x*y");
var myDate = new Date();
var myRegExp = new RegExp('\\bt[a-z]+\\b');
var myError = new Error('Darn!');

// Logs 'object object object object object function object function object.
console.log(
    typeof myNumber,
    typeof myString,
    typeof myBoolean,
    typeof myObject,
    typeof myArray,
    typeof myFunction,
    typeof myDate,
    typeof myRegExp,
    typeof myError
);

//---------------------------------

var myString = 'foo'; // Create a primitive string object.
var myStringCopy = myString; // Copy its value into a new variable.
var myString = null; // Manipulate the value stored in the myString variable.

/* The original value in myString was copied to myStringcopy. This is
confirmed by updating the value of myString then checking the value of
myStringCopy. */
console.log(myString, myStringcopy); // Logs 'null foo'

//---------------------------------

var price1 = 10;
var price2 = 10;
var price3 = new Number('10');
var price4 = price3;

console.log( price1 === price2 ); // Logs true.

/* Logs false because price3 contains a complex number object and 
price 1 is a primitive value */
console.log( price1 === price3 )

// Logs true because complex values are equal by reference, not value.
console.log( price4 === price3 );

// What if we update the price4 variable to contain a primitive value?
price4 = 10;
console.log(price4 === price3 ); // Logs false: price4 is now primitive 
// rather than complex

//---------------------------------

// Produce primitive values.
var myNull = null;
var myUndefined = undefined;
var primitiveString1 = "foo";
var primitiveString2 = String('foo'); // Did not use new, so we get primitive.
var primitiveNumber1 = 10;
var primitiveNumber2 = Number('10'); // Did not use new, so we get primitive.

/* Access the toString() property method (inherited by objects from
    object.prototype) to demonstrate that the primitive values are converted to
    objects when treated like objects. */

    // Logs "string string"
    console.log(primitiveString1.toString(), primitiveString2.toString());

    // Logs "number, number"
    console.log(primitiveNumber1.toString(). primitiveNumber2.tostring());

    // Logs "Boolean Boolean"
    console.log(primitiveBoolean1.toString(), primitiveBoolean21.toString());

    /* This will throw an error and not show up in Firebug Lite, as null and
    undefined do not convert to objects and do not have constructors. */
    console.log(myNull.toString());
    console.log(myUndefined.toString());

    //---------------------------------

    var object = {
        myString: 'string',
        myNumber: 10,
        myBoolean: false,
        myNull: null,
        myUndefined: undefined
    };

    var array = ['string', 10, false, nulll, undefined];

    /* Contrast this to the simplicity of the primitive values below. In a
    primitive form,. none of the values below can be more complex thatn what you
    see while complex values can encapsulate any of the javascript values (seen
    above). */

    var myString = 'string';
    var nyNumber = 10;
    var myBoolean = false;
    var myNull = null;
    var myUndefined = undefined;

    //---------------------------------

    var myObject = {};
    var myCopyOfObject = myObject; // Not copied by value, just the reference is copied

    myObject.foo = bar;
    /* If we log myObject and copyOfMyObject, they will have a foo property
     because they reference the same object. */
     console.log(myObject, myCopyOfObject); // Logs 'Object (foo="bar"} Object {foo="bar"}

    //---------------------------------

    var objectFoo = { same: 'same' };
    var objectBar = { same: 'same' };

    // Logs false, JS does not care that they are identicalkl abnd of the same object type.
    console.log(objectFoo === objectBar);

    // How complex objects are measured for equality.
    var objectA = {foo: "bar"};
    var objectB = objectA;

    console.log(objectA === objectB); // Logs true because they reference the same object.

    //---------------------------------

    var objA = {property: 'value'};
    var pointer1 = objA;
    var pointer2 = pointer1;

    // Update the objA.property, and all references (pointer1 and pointer2) are updated.
    objA.property = null;

    // Logs null null null' because objA, pointer1 and pointer2 all
    //reference the same object
    console.log(objA.property, pointer1.property, pointer2.property)

    //---------------------------------

    // Primitive values.
    var myNull = null;
    var myUndefined = undefined;
    var primitiveString1 = "string";
    var primitiveString2 = String('string');
    var primitiveNumber1=10;
    var primitiveNumber2 = Number('10');
    var primitiveBoolean1 = true;
    var PrimitiveBoolean2 = Boolean('true');

    console.log(typeof myNull); // Logs object? WHAT? Be aware...
    console.log(typeof myUndefined); // Logs undefined.
    console.log(typeof primitiveString1, primitiveString2); // Logs string string
    console.log(typeof primitiveNumber1, primitiveNumber2); // Logs number number
    console.log(typeof primitiveBoolean1, primitiveBoolean2); // Logs boolean boolean.

    //Complex values
    var myNumber = new Number(23);
    var myString = new String('male');
    var myBoolean = new Boolean(false);
    var myObject = new Object();
    var myArray = new Array('foo', 'bar');
    var myFunction = new Function("x","y","return x*y");
    var myDate = new Date();
    var myRegExp = new RegExp('\\bt[a-z]+\\b');
    var myError = new Error('Darn!');

    console.log(typeof myNumber); // Logs object.
    console.log(typeof myString); // Logs object.
    console.log(typeof myBoolean); // Logs object.
    console.log(typeof myObject); // Logs object.
    console.log(typeof myArray); // Logs object.
    console.log(typeof myFunction); // Logs function? WHAT? Be aware...
    console.log(typeof myDate); // Logs object.
    console.log(typeof myRegExp); // Logs function? WHAT? Be aware...
    console.log(typeof myError); // Logs object.

    //---------------------------------

    String.augmentedProperties = [];

    if(!String.prototype.trimIT){ // If the prototype does not have trimIT() add it.}
        String.prototype.trimIT = function(){
            return this.replace(/^\s+|\s+$/g,'');
        }

        //Now add trimIT string to the augmentedProperties array.
        String.augmentedProperties.push('trimIT');
    };
    var myString = '   trim me    ';
    console.log(myString.trimIT()); // Invoke our custom trimIT string methoid, logs 'trim me'.

    console.log(String.augmentedProperties.join());// Logs 'trimIT'.

    //---------------------------------

    var foo = {};

    console.log(foo.constructor === Object); // Logs true, because object)_ constructed foo.
    console.log(foo.constructor) // Points to the Object() constructor function.

    //---------------------------------

    var myNumber = new Number('23');
    var myNumberL = 23; // Literal shorthand.
    var myString = new String('male');
    var myStringL = 'male'; // Literal shorthand.
    var myBoolean = new Boolean('true');
    var myBooleanL = true; // Literal shorthand.
    var myObject = new Object();
    var myObjectL = {}; // Literal shorthand.
    var myArray = new Array();
    var myArrayL = []; // Literal shorthand.
    var myFunction = new Function();
    var myFunctionL = function(){}; // Literal shorthand.
    var myDate = new Date();
    var myRegExp = new RegExp('/./'); 
    var myRegExpL = /./; // Literal shorthand.
    var myError = new Error();
    
    consoole.log( // All of these return true.
        myNumber.constructor === Number,
        myNumberL.constructor === Number,
        myString.constructor === String,
        myStringL.constructor === String,
        myBoolean.constructor === Boolean,
        myBooleanL.constructor === Boolean, 
        myObject.constructor === Object,
        myObjectL.constructor === Object,
        myArray.constructor === Array,
        myArrayL.constructor === Array,
        myFunction.constructor === Function,
        myFunctionL.constructor === Function,
        myDate.constructor === Date,
        myRegExp.constructor === RegExp,
        myRegExpL.constructor === RegExp,
        myError.constructor === Error
    )

    //---------------------------------

    var CustomConstructor = function CustomConstructor() { return 'Wow!'; };
    var instanceOfCustomObject = new CustomConstructor();

    // Logs true.
    console.log(instanceOfCustomObject.constructor === CustomConstructor);

    // Returns a reference to CustomConstructor() function.
    // Returns 'function() { return 'wow!'; };'
    console.log(instanceOfCustomObject.constructor);

    //---------------------------------

    // User-defined object constructor.
    var CustomerConstructor = function(){ this.foo ='bar';};

    // Instantiate an instance of CustomConstructor.
    var instanceOfCustomObject = new CustomConstructor();

    console.log(instanceOfCustomObject instanceof CustomConstructor);

    // Works the same as a native object.
    console.log(new Array('foo') instanceof Array); // Logs true;

    //---------------------------------

    var myArray = new Array();
    myArray.prop = 'test';
    console.log(myArray.prop) // Logs 'test'

    //---------------------------------

    // This can be done with any of the native constructors that actuallu produce an object.
    var myString = new String();
    var myNumber = new Number();
    var myBoolean = new Boolean(true);
    var myObject = new Object();
    var myArray = new Array();
    var myFunction = new Function('return 2+2');
    var myRegExp = new RegExp('\bt[a-z]+\b');

    myString.prop = 'test';
    myNumber.prop = 'test';
    myBoolean.prop = 'test';
    myObject.prop = 'test';
    myArray.prop = 'test';
    myFunction.prop = 'test';
    myRegExp.prop = 'test';

    // Logs 'test', 'test', 'test', 'test', 'test', 'test', 'test'.
    console.log(
        myString.prop,
        myNumber.prop,
        myBoolean.prop,
        myObject.prop,
        myArray.prop,
        myFunction.prop,
        myRegExp.prop
    );

    // Be aware: Instance properties do not work with primitive/literal values.
    var myString = 'string';
    var myNumber = 1;
    var myBoolean = true;

    myString.prop = true;
    myNumber.prop = true;
    myBoolean.prop = true;

    // Logs undefined, undefined, undefined
    console.log(myString.prop, myNumber.prop, myBoolean.prop);
    
    //---------------------------------
    
    var myObject = {};

    // Contain properties inside of myObject representing most of the native Javascript values.
    myObject.myFunction = function(){ };
    myObject.myArray = [ ];
    myObject.myString = 'string';
    myObject.myNumber = 33;
    myObject.myDate = new Date();
    myObject.myRegExp = /a/;
    myObject.myNull = null;
    myObject.myUndefined = undefined;
    myObject.myObject = { };
    myObject.myMath_PI = Math.PI;
    myObject.myError = new Error('Darn!');

    console.log(
        myObject.myFunction, 
        myObject.myArray, 
        myObject.myString, 
        myObject.myNumber, 
        myObject.myDate, 
        myObject.myRegExp, 
        myObject.myNull, 
        myObject.myUndefined, 
        myObject.myObject, 
        myObject.myMath_PI, 
        myObject.myError 
    );

    /* Works the same with any of the complex objects, for exaample a function */
    var myFunction = function() { };

    myFunction.myFunction = function(){ };
    myFunction.myArray = [ ];
    myFunction.myString = 'string';
    myFunction.myNumber = 33;
    myFunction.myDate = new Date();
    myFunction.myRegExp = /a/;
    myFunction.myNull = null;
    myFunction.myUndefined = undefined;
    myFunction.myObject = { };
    myFunction.myMath_PI = Math.PI;
    myFunction.myError = new Error('Darn!');

    console.log(
        myFunction.myFunction, 
        myFunction.myArray, 
        myFunction.myString, 
        myFunction.myNumber, 
        myFunction.myDate, 
        myFunction.myRegExp, 
        myFunction.myNull, 
        myFunction.myUndefined, 
        myFunction.myObject, 
        myFunction.myMath_PI, 
        myFunction.myError 
    );

    //---------------------------------

    var object1= {
        object1_1: {
            object1_1_1: { foo: 'bar'},
            object_1_1_2: {},
        },
        object1_2: {
            object1_2_1: {},
            object1_2_2: {},
        }
    };
    console.log(object1.object1_1.object1_1_1.foo); // Logs 'bar'

    //---------------------------------

    // Encapsulation using arrays creates a multidimensional array chain.
    var myArray = [[[]]]; // An empty array, inside an empty array, inside an empty array.

    /* Here is an example of encapsulation using functions: An empty function
    inside and empty function inside an empty function. */
    var myFunction = function(){
        // Empty function.
        var myFunction = function(){
            // Empty function
            var myFunction = function(){
                // Empty function.
            };
        };
    };

    // We can get crazy and mix and match too.
    var foo = [{foo:[{bar:{ say: function(){return 'hi';} }}]}];
    console.log(foo[0].foo[0].bar.say()); // Logs 'hi'

    //---------------------------------

    // Create a cody Object() object.
    var cody = new Object();

    // Setting properties.
    cody.living = true;
    cody.age = 33;
    cody.gender = 'male';
    cody.getGender = function(){ return cody.gender; };

    // Getting properties.
    console.log(
        cody.living,
        cody.age,
        cody.gender,
        cody.getGender()
    ); // Logs 'true 33 male male'.

    // Updating properties, exactly like setting.
    cody.living = false;
    cody.age = 99;
    cody.gender = 'female';
    cody.getGender = function(){ return 'Gender = ' + cody.gender; };

    console.log(cody);

    //---------------------------------

    // Creating a cody Object() object.
    var cody = new Object();

    // Setting properties.
    cody['living'] = true;
    cody['age'] =33;
    cody['gender'] ='male';
    cody['getGender'] = function(){return cody.gender;};

    //Getting properties.
    console.log(
        cody['living'],
        cody['age'],
        cody['gender'],
        cody['getGender']() // Just slap the funciton invocation on the end!
    ); // Logs 'tuye 33 male male'.

    // Update properties, very similar to setting.
    cody['living'] = false;
    cody['age'] =99;
    cody['gender'] ='female';
    cody['getGender'] = function(){return 'Gender = ' + cody.gender;};

    console.log(cody);

    //---------------------------------

    var foobarObject = { foobar: 'Foobar is code fo no code'};
    var string1 = 'foo';
    var string2 = 'bar';
    console.log(foobarObject[string1+ + string2]); // Let's see the dot notation do this!

    //---------------------------------

    var myObject = { '123': 'zero', 'class': 'foo' };
    // Let's see dot notation do this! Keep in mind 'class' is a keyword in Javascript.
    console.log(myObject['123'], myObject['class']); // Logs 'zero foo'.

    // It can't do what bracket notation can do, in fact it causes an error.
    // Console.log(myObject.0, myObject.class);

    //---------------------------------

    var foo = { bar: 'bar' };
    delete foo.bar;
    console.log('bar' in foo); // Logs false, because bar was deleted from foo.

    //---------------------------------

    var myArray = [];
    console.log(myArray.foo); // Logs undefined.

    /* JS will look at Array.prototype for Array.prototype.foo, but it is not
    there. Then it will look for it at Object.prototype, but it is not there
    either, so undefined is returned! */

    //---------------------------------

    // myArray is an Array object.
    var myArray = ['foo','bar'];

    console.log(myArray.join()); // join() is actually defined at Array.prototype.join

    //---------------------------------

    // myArray and Array.prototype contain no toLocaleString() method.
    var myArray = ['foo', 'bar'];

    // toLocaleString() is actually defined at Object.prototype.toLocaleString
    console.log(myArray.toLocaleString()); // Logs 'foo,bar'

    //---------------------------------

    var myObject = {foo: 'value'};

    console.log(myObject.hasOwnProperty('foo')) // Logs true.

    // Versus a property from the prototype ChannelSplitterNode.
    console.log(myObject.hasOwnProperty('toString')); // Logs false.

    //---------------------------------

    var myObject = { foo: 'value'};
    console.log('foo' in myObject); // Logs true.

    //---------------------------------

    var myObject = { foo: 'value'};
    console.log('toString' in myObject); // Logs true.

    //---------------------------------

    var cody = {
        age: 23,
        gender: 'male'
    };

    for(var key in cody){ // key is a variable used to represent each property name
        // Avoid properties inherited from the prototype chain.
        if(cody.hasOwnProperty(key)){
            console.log(key);
        }
    }

    //---------------------------------

    for(x in window){
        console.log(x); // Logs all of the properties of the window/head object.
    }

    //---------------------------------

    for(x in window.document){
        console.log(x);
    }

    //---------------------------------

    // Create a string object using the new keyword and the string() constructor.
    var stringObject = new String('foo');
    console.log(stringObject); // Logs foo {0="f", 1="o", 2='o'}
    console.log(typeof stringObject); //Logs 'object'

    // Create a string literal/primitive by directly using the string constructor.
    var stringObjectWithoutNewKeyword = String('foo'); // Without new keyword.
    console.log(stringObjectWithoutNewKeyword); // Logs 'foo'.
    console.log(typeof stringObjectWithoutNewKeyword); // Logs 'string'

    // Create string literal/primitive (constructor leveraged behind the scene).
    var stringLiteral = 'foo';
    console.log(stringLiteral); // Logs foo.
    console.log(typeof stringLiteral); // Logs 'string'.

    //---------------------------------
    
    // Create string object.
    var stringObject = new String('foo');
    console.log(stringObject); // Logs 'foo {0="f", 1="o", 2="o"}

    //---------------------------------

    // Create number object using the new keyword and the Number() constructor
    var numberObject = new Number(1);
    console.log(numberObject); // Logs 1.
    console.log(typeof numberObject); // Logs 'object'.

    // Create number literal/primitive using the number constructor without new.
    var numberObjectWithoutNew = Number(1); // Without using the new keyword.
    console.log(numberObjectWithoutNew); // Logs 1
    console.log(typeof numberObjectWithoutNew); // Logs 'number'.

    // Create number literal/primitive (constructor leveraged behind the scenes).
    var numberLiteral = 1;
    console.log(numberLiteral); // Logs 1.
    console.log(typeof numberLiteral); // Logs 'number'.

    //---------------------------------

    var integer = 1232134;
    console.log(integer); // Logs '1232134'.

    var floatingPoint = 2.132;
    console.log(floatingPoint); // Logs '2.132'.

    //---------------------------------

    var numberOne = new Number(456);
    console.log(numberOne); // Logs '456{}'.

    //---------------------------------

    // Create a Boolean object using the new keyword and the Boolean constructor.
    var myBoolean1 = new Boolean(false); // using new keyword.
    console.log(typeof myBoolean); // Logs 'object'.

    // Create a Boolean literal/primitive by directly using the number constructor without new.
    var myBoolean2 = Boolean(0); // without new keyword.
    console.log(typeof myBoolean); // Logs 'boolean'.

    // Create Boolean literal/primitive (constructor leveraged behind the scenes).
    var myBoolean3 = false;
    console.log(typeof myBoolean); // Logs 'boolean'.
    console.log(myBoolean1, myBoolean2, myBoolean3); // Logs false false false.

    //---------------------------------

    // Parameter passed to Boolean() = 0 = false, thus foo = false
    var foo = new Boolean(0);
    console.log(foo);

    // Parameter passed to Boolean() = Math = true, thus bar = true;
    var bar = new Boolean(Math);
    console.log(bar);

    //---------------------------------

    var falseValue = new Boolean(false);
    console.log(falseValue); // We have a false Boolean object, but objects are truthy.

    if(falseValue){// Boolean objects, even false Boolean objects, are truthy.
        console.log('falseValue is truthy')
    }

    //---------------------------------

    // All of these return a false Boolean value.
    console.log(Boolean(0));
    console.log(Boolean(-0));
    console.log(Boolean(null));
    console.log(Boolean(false));
    console.log(Boolean(''));
    console.log(Boolean(undefined));
    console.log(Boolean(null));

    // All of these return a true Boolean value.
    console.log(Boolean(1789));
    console.log(Boolean('false')); // 'false' as a string is not false the Boolean value
    console.log(Boolean(Math));
    console.log(Boolean(Array()));

    //---------------------------------

    // String object treated like an object
    var stringObject = new String('foo');
    console.log(stringObject.length); // Logs 3.
    console.log(stringObject['length']); // Logs 3.

    // String literal/primitive converted to an object when treated as an object.
    var stringLiteral = 'foo';
    console.log(stringLiteral.length); // Logs 3.
    console.log(stringLiteral['length']); // Logs 3.
    console.log('bar'.length); // Logs 3.
    console.log('bar'['length']); // Logs 3.

    //---------------------------------

    // Number object treated like an object.
    var numberObject = new Number(1.10023);
    console.log(numberObject.toFixed()); // Logs 1.
    console.log(numberObject['toFixed']); // Logs 1.

    // Number literal/primitive converted to an object when treated as an object.
    var numberLiteral = 1.10023;
    console.log(numberLiteral.toFixed); // Logs 1.
    console.log(numberLiteral['toFixed']); // Logs 1.
    console.log((1234).toString()); // Logs '1234'.
    console.log(1234['toString']()); // Logs '1234'.

    //---------------------------------

    // Boolean object treatted like an object.
    var BooleanObject = new Boolean(0);
    console.log(booleanObject.toString()); // Logs 'false'.
    console.log(booleanObject['toString']); // Logs 'false'.
    console.log((true),toString()); // Logs 'true'.
    console.log(true['toString']()); // Logs 'true'.

    //---------------------------------

    // String, number, and Boolean objects.
    console.log(typeof new String('foo')); // Logs 'object'
    console.log(typeof new Number(1)); // Logs 'object'
    console.log(typeof new Boolean(true)); // Logs 'object'

    // String, number and Boolean literal/primitives.
    console.log(typeof 'foo'); // Logs 'string'
    console.log(typeof 1); // Logs 'number' 
    console.log(typeof true); // Logs boolean

    //---------------------------------

    // The property foo s waiting for a value, so we set its initial value to null.
    var myObjectObject = {foo: null};
    console.log(myObjectObject.foo); // Logs 'null'.

    //---------------------------------
    
    var myObject = null;
    console.log(typeof myObject); // Logs 'object', not exactly helpful.
    console.log(myObject === null); // Logs true, only for a real null value

    //---------------------------------

    var initialisedVariable; // Declare variable.
    console.log(initialisedVariable); // Logs undefined.
    console.log(typeof initialisedVariable); // Confirm that Javascript returns undefined

    var foo = {};
    console.log(foo.bar); // Logs undefined, no bar property in foo object.
    console.log(typeof foo.bar); // Confirm that Javascript returns undefined.

    //---------------------------------

    // Confirm that undefined is a property of the global scope.
    console.log(undefined in this) ; // Logs true.

    //---------------------------------

    var myStringVar = 'myString';
    var myFunctionVar = function(){};
    myString = 'myString';
    myFunction = function(){};

    console.log('myStringVar' in window); // Returns true.
    console.log('myFuncionVar' in window); // Returns true.
    console.log('myString' in window); // Returns true.
    console.log('myFunction' in window); // Returns true.

    //---------------------------------

    var foo = 'bar'; // foo is a global object and a property of the head/window object.

    var myApp = function(){ // Remember functions create scope.
        var run = function(){
            // Logs bar, foo's value is found via the scope chain in the head object.
            console.log(foo);
        }();
    }

    myApp();

    //---------------------------------

    var myFunction = function(){ var foo = 'bar'}; // foo is now in the scope of myFunction()

    var myApp = function(){
        var run = function(){
            console.log(foo); // foo is undefined, no longer in the global scope, an error occurs.
        }();
    }

    myApp();

    //---------------------------------

    var foo = 'bar';
    windowRef1 = window;
    windowRef2 = this;
    console.log(windowRef1, windowRef2); // Logs reference to window object.
    console.log(windowRef1.foo, windowRef2.foo); // Logs 'bar', 'bar'.

    //---------------------------------

    var foo = { // window is implied here, window.foo.
        fooMethod: function(){
            alert('foo' + 'bar'); // window is implied here, window.alert
            window.alert('foo' + 'bar'); // window is explicitly used, with the same effect.
        }
    }

    foo.fooMethod(); // window is implied here, window.foo.fooMethod().
    
    //---------------------------------

    var cody = new Object(); // Create an empty objectwith no properties

    for(key in cody){ // Confirm that cody is an empty generic object.
        if(cody.hasOwnProperty(key)){
            console.log(key); // Should not see any logs, because cody itself has no properties.
        }
    }

    //---------------------------------

    // Create an empty object with no properties.
    var cody1 = new Object();
    var cody2 = new Object(undefined);
    var cody3 = new Object(null);

    console.log(cody1, cody2, cody3); // Logs 'object object object'

    //---------------------------------

    /* Use the Object() constructor to create string, number, array, function, Boolean and Regex objects. */

    // The following logs confirm object creation.
    console.log(new Object('foo'));
    console.log(new Object(1));
    console.log(new Object([]));
    console.log(new Object(function(){}));
    console.log(new Object(true));
    console.log(new Object(/\bt[a-z]+\b/));

    //---------------------------------

    var cody = new Object();
    cody.living = true;
    cody.age = 33;
    cody.gender = 'male';
    cody.getGender = function(){ return gender;};

    console.log(cody); // Logs objects and properties.

    //---------------------------------

    var cody = {
        living: true,
        age: 23,
        gender: 'male',
        getGender: function() { return cody.gender;}
    }

    console.log(cody); // Logs the cody object and its properties.

    //---------------------------------

    Object.prototype.foo = 'foo';

    var myString =  'bar';

    // Logs 'foo', being found at Object.prototpye.foo via the prototype chain.
    console.log(myString.foo);

    //---------------------------------

    var addNumbersA = new Function('num1','num2', 'return num1 + num2');
    console.log(addNumbersA(2,2)); // Logs 4.

    // Could also be written the literal way, which is much more common.
    var addNumbersB = function(num1, num2){ return num1+num2 };
    console.log(addNumbersB(2,2)); // Logs 4.

    //---------------------------------

    var addFunction = new Function('num1', 'num2', 'return num1 + num2');
    /* Alternately, a single  comma-separated string with arguments can be
    the first parameter of the constructor, with the function body following. */
    var timesFunction = new Function( 'num1,num2', 'return num1 * num2');
    

    console.log(addFunction(2,2), timesFunction(2,2)); // Logs '4 4 '

    // Versus the more common patterns for instantiating a function.
    var addFunction = function(num1,num2){ return num1 + num2}; // Expression form.
    function addFunction(num1, num2){ return num1 + num2 }; // Statement form.

    //---------------------------------

    var sayHi = function(){ return 'Hi';};
    console.log(sayHi()); // Logs "Hi".

    //---------------------------------

    var yelp = function(){
        console.log('I am yelping!');
        // Functions return undefined even if we don't.
    }
    /* Logs true because a value is always returned, even if we don't specifically return one. */
    console.log(yelp() === undefined);

    //---------------------------------

    // Functions can be stored in variables (funcA), arrays (funcB), and objects(funcC).
    var funcA = function(){}; // Called like so: funcA();
    var funcB = [function(){}]; // Called like so: funcB[0]();
    var funcC = { method: function(){}}; // too.method() or funcC['method']()

    // Functions can be sent to and sent back from functions.
    var funcD = function(func){
        return func;
    };

    var runFuncPassedToFunc = funcD(function(){console.log('Hi')});
    runFuncPassedToFunc();

    // Functions are objects, which means they have properties.
    var funcE = function(){};
    funcE.answer = 'yup'; // Instance property
    console.log(funcE.answer); // Logs 'yup'.

    //---------------------------------

    var addFunction = function(number1, number2){
        var sum = number1 + number2;
        return sum;
    }

    console.log(addFunction(3, )); // Logs 6.

    //---------------------------------

    var add = function(){
        return arguments[0] + arguments[1];
    }
    console.log(add(4,4)); // Returns 8.

    //---------------------------------

    var myObject = {
        name: 'myObject1',
        myMethod: function(){ console.log(this);}
    };

    myObject1.myMethod(); // Logs 'myObject1'.

    var myObject2 = function() {console.log(this)};
    myObject2(); // Logs window.

    //---------------------------------

    var foo = function foo(){
        console.log(arguments.callee) // Logs foo()
        // Callee could be use to invoke recursively the foo function (e.eg., arguments.callee())
    }();

    //---------------------------------

    var myFunction = function(z, s, d){
        return arguments.length;
    };
    console.log(myFunction()); // Logs 0 because no parameters were passed to the function.

    //---------------------------------

    var myFunction = function(z, s, d, e, r, m, q){
        return myFunction.length;
    };
    console.log(myFunction()); // Logs 7.

    //---------------------------------

    var foo = false;
    var bar = false;

    var myFunction = function(foo, bar){
        arguments[0] = true;
        bar = true;
        console.log(arguments[0], bar); // Logs true true.
    }
    myFunction();

    //---------------------------------

    var add = function(x,y){
        // If the parameters are not numbers, return error.
        if(typeof x !== 'number' || typeof y !== 'number'){
            return 'pass in numbers';
        }
        return x + y;
    }
    console.log(add(3,3)); // Logs 6.
    console.log(add('2', '2')); // Logs 'pass in numbers'

    //---------------------------------

        /*  Function constructor: The last parameter is the function logic,
        everything before it is the parameter. */
        var addConstructor = new Function('x', 'y', 'return x + y');

        // Functions statement.
        function addStatement (x,y){
            return x + y;
        }

        // Function expression.
        var addExpression = function(x,y){ 
            return x + y;
        };

        console.log(addConstructor(2,2), addStatement(2,2), addExpression(2,2));

    //---------------------------------

    // Function pattern.
    var myFunction = function(){ return 'foo'};
    console.log(myFunction()); // Logs 'foo'.

    // Method pattern.
    var myObject = { myFunction: function() {return 'bar';}}
    console.log(myObject.myFunction()); // Logs 'bar'.

    // Constructor pattern.
    var Cody = function(){
        this.living = true;
        this.age = 33,
        this.gender = 'male',
        this.getGender = function(){ return cody.gender;};
    }
    var cody = new Cody(); // Invokes the Cody constructor.
    console.log(cody); // Logs the cody object and properties.

    // apply() and call() pattern.
    var greet = {
        runGreet: function(){
            console.log(this.name, arguments[0], arguments[1]);
        }
    }
    var cody = {name: 'cody'};
    var lisa = {name: 'lisa'};

    // Invoke the runGreet function as if it were inside of the cody object.
    greet.runGreet.call(cody, 'foo', 'bar');

    // Invoke the runGreet function as if it were inside of the lisa object.
    greet.runGreet.apply(lisa, ['foo', 'bar']);

    /* Notice the difference between call() and apply() in how parameters are
     sent to the function being invoked. */

    //---------------------------------

    // Function(){console.log('hi');}; // Anonymous function, but no way to invoke it.

    // Create a function that can invoke our anonymous function.
    var sayHi = function(f){
        f(); // Invoke the anonymous function.
    }

    // Pass an anonymous function as a parameter.
    sayHi(function(){ console.log('Hi');});

    //---------------------------------

    var sayWord = function() { console.log('Word 2 yo mo!');}(); // Logs 'Word 2 yo mo!'

    //---------------------------------

    // Most commonly used/seen in the wild.
    (function(msg){
        console.log(msg);
    })('Hi');

    // Slightly different, but achieving the same thing.
    (function(msg){
        console.log(msg);
    }('Hi'));

    // The shortest possible solution.
    !function sayHi(msg){ console.log(msf);}('Hi');

    // FYI, this does NOT work!
    // function sayHi(){console.log('Hi');};();

    //---------------------------------

    var foo = function(){
        var bar = function(){
            var goo = function(){
                console.log(this); // Logs reference to the head window object.
            }();
        }();
    }();

    //---------------------------------

    // Functions can be sent too, and sent back from, functions.
    var foo = function(f){
        return f;
    }
    var bar = foo(function(){console.log('Hi');});
    bar(); // Logs 'Hi'.

    //---------------------------------

    //Example 1.
    var speak = function(){
        sayYo(); // sayYo() has not been defined yet, but it can still be invoked, logs 'yo'.
        function sayYo() { console.log('yo');}
    }(); // Invoke.

    // Example 2.
    console.log(sum(2,2)); // Invoke sum(), which is not defined yet, but can still be invoked.
    function sum(x,y){return x + y;}

    //---------------------------------

    var countDownFrom = function countDownFrom(num){
        console.log(num);
        num--; // Change the parameter value;
        if(num <0){ return false;} // If num < 0 return function with no recursion.
        // Could have also done arguemnts.callee(num) if it was an anonymous function.
        countDownFrom(num);
    };

    countDownFrom(5); // Kick off the function, which logs separately 5,4,3,2,1,0.

    //---------------------------------

    var cody = {
        linving: true,
        age: 23,
        gender: 'male',
        getGender = function() { return cody.gender; }
    };
    console.log(cody.getGender()); // Logs 'male'.

    //---------------------------------

    var cody = {
        linving: true,
        age: 23,
        gender: 'male',
        getGender = function() { return this.gender; }
    };
    console.log(cody.getGender()); // Logs 'male'.

    //---------------------------------

    var foo = 'foo';
    var myObject = { foo: 'I am myObject.foo'};

    var sayFoo = function(){
        console.log(this['foo']);
    };

    // Give myObject a sayFoo property and have it point to the sayFoo function.
    myObject.sayFoo = sayFoo;

    myObject.sayFoo(); // Logs 'I am myObject.foo'.
    sayFoo(); // Logs 'foo'

    //---------------------------------

    window.foo = 'foo';
    window.myObject = { foo: 'I am myObject.foo'};

    window.sayFoo = function(){
        console.log(this['foo']);
    };

    window.myObject.sayFoo = window.sayFoo;

    window.myObject.sayFoo();
    window.sayFoo();

    //---------------------------------

    var myObject = {
        func1: function(){
            console.log(this); // Logs myObject.
            var func2 = function(){
                console.log(this); // Logs window, and will do so from this point on.
                var func3 = function(){
                    console.log(this); // Logs window, as it's the head object.
                }();
            }();
        }
    }
    myObject.func1();

    //---------------------------------

    var foo = {
        func1: function(bar){
            bar(); // Logs window, not foo.
            console.log(this); // The this keyword here will be a reference to the foo object.
        }
    }

    foo.func1(function(){console.log(this)});

    //---------------------------------

    var myObject = {
        myProperty: 'I can see the light',
        myMethod: function(){
            var that = this; // Store a reference to this (i.e. myObject) in myMethod scope.
            var helperFunction = function(){ // Child function.
                // Logs 'I can see the light' via scope chain because that = this.
                console.log(that.myProperty); // Logs 'I can see the light'.
                console.log(this); // Logs window object, if we don't use "that".
            }();
        }
    }
    myObject.myMethod(); // Invoke method.

    //---------------------------------

    var myObject = {};
    var myFunction = function(param1, param2){
        // Set via apply(), this points to myObject when function is invoked.
        this.foo = param1;
        this.bar = param2;
        console.log(this); // Logs Object {foo = 'foo', bar = 'bar'}
    };
    myFunction.apply(myObject,['foo','bar']); // Invoke function, set this value.
    console.log(myObject); // Logs Object {foo = 'foo', bar = 'bar'}

    //---------------------------------

    var Person = function(name){
        this.name = name || 'john doe'; // this will refer to the instance created.
    }
    var cody = new Person('Cody Lindley'); // create an instance based on the Person constructor.

    console.log(cody.name); // Logs 'Cody Lindley'.

    //---------------------------------

    var Person = function(name){
        this.name = name || 'john doe';
    }
    var cody = Person('Cody Lindley'); // Notice we did not use 'new'.

    console.log(cody.name); // Undefined. The value is actually set a window.name.
    console.log(window.name); // Logs 'Cody Lindley'.

    //---------------------------------

    var Person = function(x){
        if(x){this.fullName = x};
    };

    Person.prototype.whatIsMyFullName = function(){
        return this.fullName; // 'this' referes to the instance created from Person().
    }

    var cody = new Person('cody lindley');
    var lisa = new Person('lisa lindley');

    // Call the inherited whatIsMyFullName mtehod, which uses this to refer to the instance.
    console.log(cody.whatIsMyFullName(), lisa.whatIsMyFullName());

    /* The prototype chain is still in effect, so if the instance does not
    have a fullName property, it will look for it in the prototype chain. Next,
    we add a fullName property to both the Person prototype and the Object 
    prototype. See the notes that follow this sample. */

    Object.prototype.fullName = 'John Doe';
    var john = new Person(); // No argument is passed so fullName is not added to the instance.
    console.log(john.whatIsMyFullName()); // Logs 'John Doe'

    //---------------------------------

    var foo = 0; // Global scope.
    console.log(foo); // Logs 0.

    var myFunction = function(){
        var foo = 1; // Local scope.
        console.log(foo); // Logs 1.
        var myNestedFunction = function(){
            var foo = 2; // Local scope.
            console.log(foo); // Logs 2.
        }();
    }();

    eval('var foo = 3; console.log(foo)'); // eval() scope.

    //---------------------------------

    var foo = 1; // foo - 1.
    if(true){
        foo = 2; // foo = 2.
        for(var i  = 3; i <=5; i++){
            foo = i; // foo = 3, 4, then 5.
        }
    }

    //---------------------------------

    var foo = function(){
        var boo = function(){
            bar = 2; // No var used, so bar is placed in the global scope at window.bar.
        }();
    }();
    console.log(bar); // Logs 2, because bar is in the global scope.
    // As opposed to...
    var foo = function(){
        var bar = function(){
            var doo = 2;
        }();
    }();
    //console.log(doo): // Logs undefined. doo is in the boo function scope, so an error occurs.

    //---------------------------------

    var sayHiText = 'howdy';

    var func1 = function(){
        var func2 = function(){
            console.log(sayHiText); // func2 scope, but it finds sayHiText in global scope.
        }();
    }();

    //---------------------------------

    var x = 10;
    var foo = function(){
        var y = 20;
        var bar = function(){
            var z = 30;
            console.log(z + y + x); // z is local, ya dn z are found in the scope chain.
        }();
    }();
    foo(); // Logs 60.

    //---------------------------------

    var x = false;
    var foo = function(){
        var x = false;
        bar = function(){
            var x = true;
            console.log(x); // Local x is first in the scope so it shadows the rest.
        }();
    }
    foo(); // Logs true.

    //---------------------------------

    var parentFunction = function(){
        var foo = 'foo';
        return function(){ // Anonymous function being returned.
            console.log(foo); // Logs 'foo'.
        }
    }

    // nestedFunction refers to the nested function returned from parentFunction.
    var nestedFunction = parentFunction();
    nestedFunction(); // Logs foo because the returned function accesses foo via the scope chain.

    //---------------------------------

    var countUpFromZero = function(){
        var count = 0;
        return function(){ // Return nested child function when countUpFromZero is invoked.
            return ++count; // count is defined up the scope chain, in parent function.
        };
    }(); // Invoke immediately, returns nested function.

    console.log(countUpFromZero()); // Logs 1.
    console.log(countUpFromZero()); // Logs 2.
    console.log(countUpFromZero()); // Logs 3.

    //---------------------------------

    var myArray = new Array('foo','bar');
    console.log(myArray.join()); // Logs 'foo,bar'.

    //---------------------------------

    var myFunctino = function(){};
    console.log(myFunction.prototype) // Logs object{}
    console.log(typeof myFunction); // Logs 'object'.

    //---------------------------------

    var myFunction = function(){};
    myFunction.prototype = {}; // Add the prototype property and set it to an empty object.
    console.log(myFunction.prototype); // Logs an empty object.

    //---------------------------------

    // This code only works in browsers that support __proto__ access.
    Array.prototype.foo = 'foo';
    var myArray = new Array();
    console.log(myArray.__proto__.foo); // Logs foo, because myArray.__proto__ = Array.prototype.
    
    //---------------------------------

    Array.prototype.foo = 'foo'; // All instance of Array() now inherit a foo property.
    var myArray = new Array();

    // Trace foo in a verbose way leveraging *.constructor.prototype
    console.log(myArray.constructor.prototype.foo); // Logs foo.

    // Or, of course, leverage the chain.
    console.log(myArray.foo); // Logs foo.
    //Use prototpye chain to find property at Array.prototype.foo.

    //---------------------------------

    var myArray = [];
    console.log(myArray.foo); // Logs undefined.

    /* foo was not found at myArray.prototype.foo or Object.prorotype.foo, so it is undefined. */

    //---------------------------------

    Object.prototype.foo = 'object-foo';
    Array.prototype.foo = 'array-foo';

    console.log(myArray.foo); // Logs 'array-foo', which was found at Array.prototype.foo

    myArray.foo = 'bar';
    console.log(yArray.foo); // Logs 'bar', was found at Array.foo

    //---------------------------------

    var Foo = function Foo(){};
    Foo.prototype = {}; // Replace prototype property with an empty object.
    var FooInstance = new Foo();
    console.log(FooInstance.constructor === Foo); // Logs false, we broke the reference.
    console.log(FooInstance.constructor); // Logs Object(), not Foo();

    // Compare to code in which we do not replace the prototype value.
    var Bar = function Bar(){};

    var BarInstance = new Bar();
    console.log(BarInstance.constructor === Bar); // Logs true.
    console.log(BarInstance.constructor); // Logs Bar();
    
    //---------------------------------

    var Foo = function Foo(){};
    Foo.prototype = {constructor: Foo};
    var FooInstance = new Foo();
    console.log(FooInstance.constrcutor === Foo); // Logs true.
    console.log(FooInstance.constrcutor); // Logs Foo();

    //---------------------------------

    var Foo = function Foo(){};
    Foo.prototype.x = 1;
    var FooInstance = new Foo();
    console.log(FooInstance.x); // Logs 1.

    Foo.prototype.x = 2;
    console.log(FooInstance.x); // Logs 2, the FooInstance was updated.

    //---------------------------------

    var Foo = function Foo(){};
    Foo.prototype = { x: 1 }; // The logs that follow still work the same.
    var FooInstance = new foo();
    console.log(FooInstance.x); // Logs 1.

    Foo.prototype.x = 2;
    console.log(FooInstance.x); // Logs 2, the FooInstance was pdated.

    //---------------------------------

    var Foo = function Foo(){};
    Foo.prototype.x = 1;
    var FooInstance = new Foo();
    console.log(FooInstance.x); // Logs 1, as you think it would.

    // Now let's replace/override the prorotype object with a new object() object.
    Foo.prototype = { x: 2 };
    console.log(FooInstance.x); // Logs 1. WHAT? Shouldn't it log 2 because we just updated prototype?

    /* FooInstance still references the same state of the prototype object that was there when it was instantiated. */

    // Create a new instance of Foo()
    var NewFooInstance = new Foo();

    // The new instance is now tied to the new prototype object value (i.e. {x:2};).
    console.log(NewFooInstance.x); // Logs 2.

    //---------------------------------

    var Person = function(){};

    // All Person instances inherit the legs, arms, and CountLimbs properties.
    Person.prototype.legs = 2;
    Person.prototype.arms = 2;
    Person.prototype.CountLimbs = function(){ return this.legs + this.arms;};

    var chuck = new Person();

    console.log(chuck.CountLimbs); // Logs 4.

    //---------------------------------

    var Person = function(legs, arms){
        // Shadow prototype value.
        if(legs !== undefined) {this.legs = legs; }
        if(arms !== undefined) {this.arms = arms; }
    };

    Person.prototype.legs = 2;
    Person.prototype.arms = 2;
    Person.prototype.CountLimbs = function(){ return this.legs + this.arms;};

    var chuck = new Person(0,0);
    console.log(chuck.countLimbs); // Logs 0;

    //---------------------------------

    var Person = function(){ this.bar = 'bar'};
    Person.prototype.foo = 'foo';

    var Chef = function(){ this.goo ] 'goo'};
    Chef.prototype = new Person();
    var cody = new Chef();

    console.log(cody.foo); // Logs 'foo'.
    console.log(cody.goo); // Logs 'goo'.
    console.log(cody.bar); // Logs 'bar'.

    //---------------------------------

    var myArray = ['blue','green','orange','red'];

    console.log(myArray[0]); // Logs blue using the 0 index to access the string in myArray.

    // Versus

    var myObject = { // aka an associative array, known as an object in Javascript.
        'blue':'blue',
        'green':'green',
        'orange':'orange',
        'red':'red'
    };
    console.log(myObject['blue']); // Logs blue.

    //---------------------------------

    var foo = new Array(1,2,3);
    var bar = new Array(100);

    console.log(foo[0], foo[2]); // Logs '1 3'
    console.log(bar[0], bar.length); // Logs 'undefined 100'

    //---------------------------------

    // Array() constructor.
    var myArray1 = new Array('blue', 'green', 'orange', 'red');
    console.log(myArray1); // Logs ["blue", "green", "orange", "red"]

    // Array literal notation.
    var myArray2 = ['blue', 'green', 'orange', 'red'];
    console.log(myArray2); // Logs ["blue", "green", "orange", "red"]

    //---------------------------------

    var myArray = [];
    myArray[50] = 'blue';
    console.log(myArray.length); /* Logs 51 (0 is counted) because JS created values 0 to 50 before "blue".*/

    //---------------------------------

    var myArray = [];
    myArray[50] = 'blue';
    myArray[50] = { 'color': 'blue' }; // Change object type from string to Object() object.
    console.log(myArray[50]); // Logs 'Object {color="blue"}.

    // Using brackets to access the index in the array, then the property blue.
    console.log(myArray[50]['color']); // Logs 'blue'.

    // Using dot notation.
    console.log(myArray[50].color); // Logs 'blue'.

    //---------------------------------

    var myArray = ['blue']; // The index 0 cancontains the string value 'blue'.
    console.log(myArray[0]); // Logs 'blue'
    console.log(myArray.length); // Logs 1.

    //---------------------------------

    var myArray = new Array(3);
    console.log(myArray.length); // Logs 3 because we are passing one numeric parameter.
    console.log(myArray[0]); // Logs undefined.

    //---------------------------------

    var myArray = ['blue', 'green', 'orange', 'red'];
    console.og(myArray.length); // Logs 4.
    myArray.length = 99;
    console.log(myArray.length); // Logs 99, remember we set the length, not an index.
    myArray.length = 1; // Removed all but one value, so index[1] is gone!
    console.log(myArray[1]); // Logs undefined

    console.log(myArray); // Logs '["blue"]'.

    //---------------------------------

    var myArray = [[[['4th dimension']]]];
    console.log(myArray[0][0][0][0]); // Logs '4th dimension'.

    //---------------------------------

    var myArray = ['blue', 'green', 'orange', 'red'];
    var myArrayLength = myArray.length; // Cache the array length to avoid unnecessary lookup.
    var counter = 0; // Set up counter.

    while(counter < myArrayLength){ // Run if counter is less than array length.
        console.log(myArray[counter]); // Logs 'blue', 'green', 'orange', 'red'.
        counter++; // Add 1 to counter.
    }

    //---------------------------------

    var myArray = ['blue', 'green', 'orange', 'red'];
    var myArrayLength = myArray.length;
    while(myArrayLength--){ // If length is not zero, loop and subtract 1.
        console.log(myArray[myArrayLength]); // Logs 'red'. 'orange', 'green', 'blue'.
    }

    //---------------------------------