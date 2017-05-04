//(function(){
//	t = 8
//})()


//1. "no-cond-assign":["error","always"],禁止在条件语句中出现赋值操作符  "always" 禁止条件语句中出现赋值语句,
//var user = {};
//if (user.jobTitle = "manager") {
//    // user.jobTitle is now incorrect
//}
//console.log(user.jobTitle);

//function nodeToFragment (node) {
//	var flag = document.createDocumentFragment();
//	var child;
//	while (child = node.firstChild) {
//		compile(child,vm);
//		flag.append(child);
//	}
//	return flag;	
//}

//2. "no-console":["warn",{"allow": ["warn", "error"]}],禁用 console, "allow" 是个字符串数组，包含允许使用的console 对象的方法 
//console.log("Log a debug level message.");
//console.info("Log a debug level message.");
//console.warn("Log a warn level message.");
//console.error("Log an error level message.");

//3. "no-constant-condition":["error",{ "checkLoops": false }]  禁止在条件中使用常量表达式  checkLoops设置该选项为 false 允许在循环中使用常量表达式。
//false typeof x  void x
//let result = 0 ? 'a' : 'b';
//
//if (false) {
//	alert(1);
//}
//
//let a = 0;
//if (a === 0) {
//    alert(1);
//}
//
//do {
//    doSomething();
//    if (condition()) {
//        break;
//    }
//} while (true)

//4. "no-control-regex": "error",  //禁止在正则表达式中使用控制字符(特殊字符、不可见的字符) ASCII表上的数字0–31分配给了控制字符，用于控制像打印机等一些外围设备 ， 数字 32–126 分配给了能在键盘上找到的字符 ，1f是第31个，20是第32个
//var pattern1 = /\x1f/;
//var pattern2 = new RegExp("\x1f");
//
//var pattern1 = /\x20/;
//var pattern2 = new RegExp("\x20");

//5. "no-debugger":"error", //禁用 debugger , debugger 语句用于告诉 JavaScript 执行环境停止执行并在代码的当前位置启动调试器。
//function isTruthy(x) {
//    debugger;
//    return Boolean(x);
//}

//6. "no-dupe-args":"error", //禁止在 function 定义中出现重复的参数  如果在一个函数定义中出现多个同名的参数，后面出现的会覆盖前面出现的参数 
//function foo(a, b, a) {
//    console.log("value of the second a:", a);
//}

//7. "no-dupe-keys":"error", //禁止对象字面量中出现重复的 key
//var foo = {
//    bar: "baz",
//    bar: "qux"
//};

//8. "no-duplicate-case":"error", //禁止出现重复的 case 标签  只会执行第一次case到的语句，后面的都不会执行  
//var a = 1,one = 1;
//
//switch (a) {
//    case 1:
//        break;
//    case 2:
//        break;
//    case 1:      
//        break;
//    default:
//        break;
//}

//9. "no-empty":"warn", //给出警告 , 禁止出现空语句块
//if (foo) {
//}

//if (foo) {
//	//这不算是空语句
//}

//10. "no-ex-assign": "error",  //禁止对 catch 子句中的异常重新赋值
//try {
//   JSON.parse('a');
//} catch (e) {
//	e = 10
//}

//11. "no-extra-boolean-cast":"warn",  //给出警告，禁止不必要的布尔类型转换  if 语句的测试表达式的结果已经被强制转化成了一个布尔值，再通过双重否定（!!）或 Boolean 转化是不必要的 
//if (foo) {
//    // ...
//}
//if (!!foo) {
//    // !!!!!!!foo
//}
//if (Boolean(foo)) {
//    // ...
//}

//12. "no-extra-parens": "off",  //关闭规则，--fix 禁止冗余的括号   ()多数情况下用于优先级的提升，暂时先关闭，比如编辑器编辑出的页面，优先级有点复杂，调查情况多了可以考虑再打开   
//((function foo() {return 1;})())

//13. "no-extra-semi":"warn", //给出警告， --fix 禁止不必要的分号 
//var x = 5;;

//14. "no-func-assign":"warn", //禁止对 function 声明重新赋值  
//function foo() {}  
//foo = 'bar';

//var foo = function(){}
//foo = 'bar';

//15. "no-inner-declarations":"warn",  //给出警告，禁止在嵌套的语句块中出现变量或 function 声明
//if (test) {
//    function doSomething() { }
//}

//16. "no-invalid-regexp":"warn",  //给出警告，禁止在 RegExp 构造函数中出现无效的正则表达式
//new RegExp('\\');
//
//new RegExp('\\\\');

//17. "no-irregular-whitespace":["warn", { "skipTemplates": true }],  //给出警告，禁止不规则的空白,"skipStrings": true (默认) 允许在字符串字面量中出现任何空白字符
//无效的或不规则的空白会导致 ECMAScript 5 解析问题，也会使代码难以调试
//function thing() {
//    return 'test'; /*<ENSP>*/
//}

//18. "no-obj-calls": "error",  //禁止将全局对象当作函数进行调用
//var math = Math();
//var json = JSON();

//19. "no-prototype-builtins": "off",  //关闭规则，禁止直接使用 Object.prototypes 的内置属性 如: var hasBarProperty = foo.hasOwnProperty("bar");
//var foo = {bar:123};
//var hasBarProperty = foo.hasOwnProperty("bar"); // {}.hasOwnProperty.call(foo,"bar");
//console.log(hasBarProperty);

//20. "no-regex-spaces": "warn",  //给出警告， --fix 禁止正则表达式字面量中出现多个空格
//var re = /foo   bar/;
//var re = /foo {3}bar/;

//21. "no-sparse-arrays": "warn",  //给出警告，禁用稀疏数组
//var items = [,];  //length 1
//var colors = [ "red",, "blue" ]; // length 3

//22. "no-template-curly-in-string": "warn",  //给出警告，禁止在普通字符串中使用 ${variable} 插入变量
//var name = 'tom';
//var str = 'Hello ${name}!';
//var std = `Hello ${name}!`;

//23. "no-unexpected-multiline": "warn",  //给出警告，禁止使用令人困惑的多行表达式 如:var foo = bar  (1 || 2).baz();
//var foo = bar
//(1 || 2).baz();

//24. "no-unreachable" : "error",  //禁止在 return、throw、continue 和 break 语句后出现不可达代码 (no-unreachable)
//function fn() {
//	x = 1; 
//	return x; 
//	x = 3;
//}

//25. "no-unsafe-finally": "error",  //禁止在 finally 语句块中出现控制流语句, JavaScript 暂停 try 和 catch 语句块中的控制流语句，直到 finally 语句块执行完毕。如: 
//(() => {
//    try {
//        throw new Error("Try"); // error is thrown but suspended until finally block ends
//    } finally {
//        return 3; // 3 is returned before the error is thrown, which we did not expect
//    }
//})();
//
//(() => {
//    try {
//        throw new Error("Try"); // error is thrown but suspended until finally block ends
//    } finally {
//        //return 3; // 3 is returned before the error is thrown, which we did not expect
//    }
//})();

//26. "no-unsafe-negation": "error",  // --fix 禁止否定符号在变量左侧 如: if (!key in object) {}
//if (!key in object) {
//    // type conversion makes it equivalent to (key ? "false" : "true") in object
//}
//
//if (!(key in object)) {
//    // key is not in object
//}

//27. "use-isnan": "error",  //要求调用 isNaN()检查 NaN   NaN !== NaN  所以用isNaN()检查是不是NaN
//if (foo == NaN) {
//	//...
//}
//
//if (isNaN(foo)) {
//	//...
//}

//28. "valid-jsdoc": "warn",  //给出警告，强制使用有效的 JSDoc 注释
/**
 * Add two numbers.
 * @param {number} num The first number.
 * @returns The sum of the two numbers.
 */
//function add(num1, num2) {
//    return num1 + num2;
//}

/**
 * Add two numbers.
 * @param {number} num1 The first number.
 * @param {number} num2 The first number.
 * @returns {number} The sum of the two numbers.
 */
//function add(num1, num2) {
//    return num1 + num2;
//}

//29. "valid-typeof": "error",  //强制 typeof 表达式与有效的字符串进行比较   对于绝大多数用例而言，typeof 操作符的结果是以下字符串字面量中的一个："undefined"、"object"、"boolean"、"number"、"string"、"function" 和 "symbol"。
//typeof foo === "strnig";
//
//typeof foo === "string";

//30. "accessor-pairs": "off", //强制getter/setter成对出现在对象中
//var o = {
//	val : 1,
//    set a(value) {
//        this.val = value;
//    },
//    get a() {
//        return this.val;
//    }
//};

//31. "array-callback-return": "off",  //强制数组方法的回调函数中有 return 语句 
//['a','b'].forEach(function(item,index,arr){	
//});
//
//var indexMap = ['a','b'].reduce(function(memo, item, index) {
//  memo[item] = index;
//  return memo;
//}, {});

//32. "block-scoped-var": "off",  //把 var 语句看作是在块级作用域范围之内
//function doIf() {
//    if (true) {
//        var build = true;
//    }
//
//    console.log(build);
//}
//
//function doIf() {
//    var build;
//
//    if (true) {
//        build = true;
//    }
//
//    console.log(build);
//}

//33. "curly":"warn", // --fix 给出warn警告，强制所有控制语句使用一致的括号风格
//var flag = true;
//if (flag) alert(1) 
//else alert(2)
//var flag=true;if(flag){alert(1)}else{alert(2)};

//34. "eqeqeq":"error", //要求使用 === 和 !==  使用类型安全的 === 和 !== 操作符代替 == 和 != 操作符是一个很好的实践
//3  == "03"
//[] == false
//[] == ![]

//35. "no-case-declarations":"warn", //给出警告,禁止在 case 或 default 子句中出现词法声明 该规则禁止词法声明 (let、const、function 和 class) 出现在 case或default 子句中。原因是，词法声明在整个 switch 语句块中是可见的，但是它只有在运行到它定义的 case 语句时，才会进行初始化操作。
//switch (foo) {
//    case 1:
//        let x = 1;
//        break;
//    case 2:
//        const y = 2;
//        break;
//    case 3:
//        function f() {alert(1)}
//        break;
//    default:
//        class C {}
//}
//
//switch (foo) {
//    case 1: {
//        let x = 1;
//        break;
//    }
//    case 2: {
//        const y = 2;
//        break;
//    }
//    case 3: {
//        function f() {}
//        break;
//    }
//    default: {
//        class C {}
//    }
//}

//36. "no-empty-function":"error", //禁止出现空函数  空函数能降低代码的可读性，因为读者需要猜测它是否是有意为之。所以，为空函数写一个清晰的注释是个很好的实践。
//function foo() {}
//function foo() {
//    // do nothing.
//}

//list.map(() => {});   // This is a block, would return undefined.
//list.map(() => ({})); // This is an empty object.

//37. "no-empty-pattern": "warn",  //给出警告，禁止使用空解构模式 从数组和对象中提取值
// var {} = foo;
// var [] = foo;
//
//var {a: { b }} = foo;  
//var {a = {}} = foo;

//38. "no-fallthrough": "warn",  //给出警告，禁止 case 语句落空 无break
//switch(foo) {
//    case 1:
//        doSomething();
//		//break  return  falls through  throw new Error("Boo!");
//    case 2:
//        doSomethingElse();
//}

//39. "no-octal": "error",  //禁用八进制字面量  八进制自面量是指那些以 0 开始的数字
//var num = 071; // 57

//40. "no-redeclare": "error",  //禁止重新声明变量 
//var a = 3; 
//var a = 10;

//41. "no-self-assign": "error", //禁止自身赋值 自身赋值不起任何作用，可能是由于不完整的重构造成的错误
//[a, b] = [a, b];
//[b, a] = [a, b];

//42. "no-self-compare":"error", //禁止自身比较 
//if (x === x) { }

//43. "no-throw-literal":"error", //禁止抛出异常字面量
//throw "error"; throw 0; throw "an " + err;
// throw new Error("error");  try {} catch (e) {  throw e;}

//44. "no-unused-labels": "warn",  //禁用未使用过的标签  只声明却没有使用的标签可能是由于不完全的重构造成的错误。 
//A: {
//    foo();
//}
//
//A:{
//    if (foo()) {
//        break A;
//    }
//    bar();
//}

//45. "no-useless-concat":"warn", //给出警告，禁止不必要的字符串字面量或模板字面量的连接 
//var a = `some` + `string`;
//var b = '1' + `0`;

//46. "no-useless-escape":"warn", //给出警告，禁用不必要的转义字符 
//"\'";  '\"';
//
//"\"";  '\'';

//47. "no-with":"error", //禁用 with 语句  在with语句块中做遍历耗时远远大于在with之外
//with (location){
//    var qs = search.substring(1);
//    var hostName = hostname;
//    var url = href;
//}

//48. "radix":["warn","as-needed"], //要求基数  "as-needed"禁止提供基数10 
//var num = parseInt("071", 10); 
//var num = parseInt("071", 8);

//49. "no-delete-var":"error", //禁止删除变量 
//var x; 
//delete x;
//
//var a = {c:1,d:2};
//delete a.c

//50. "no-shadow-restricted-names":"error", //禁止覆盖受限制的标识符
//function NaN(){};  
//var undefined;

//51. "no-undef": "warn",  //禁用未声明的变量，可以在gloabl中声明 
//b = 10;

//52. "no-unused-vars":"warn", //给出警告，禁止未使用过的变量,声明了，但是没用到
//var z = 0;
//z = z + 1;
//
//(function(foo) {
//    return 5;
//})();

//53. "global-require":"error", //要求 require() 出现在顶层模块作用域中  require() 可以在代码的任何地方被调用  require() 是同步加载的，在其它地方使用时，会导致性能问题 
//var fs = require("fs");

//54. "handle-callback-err":"warn", //给出警告,要求回调函数中有容错处理
//function loadData (err, data) {
//	if (err) { 
//		console.log(err.stack); 
//	} 
//	doSomething();
//}

//55. "computed-property-spacing":["error","never"], // --fix 禁止或强制在计算属性中使用空格  
//obj[ foo ];
//obj[ 'foo' ];
//obj[' foo '];
//
//obj[foo];
//obj['foo'];

//56. "no-mixed-spaces-and-tabs": "warn",  //禁止使用 空格 和 tab 混合缩进 大多数代码约定要求使用空格或 tab 进行缩进。因此，一行代码同时混有 tab 缩进和空格缩进，通常是错误的。
//function add(x, y) {
//	var c = '4';
//    return x + y;
//}
//
//function add(x, y) {
//	 var c = '4';
//     return x + y;
//}

//57. "arrow-parens":["warn","as-needed"], // --fix 要求箭头函数的参数使用圆括号  "as-needed" 当只有一个参数时允许省略圆括号。  箭头函数体只有一个参数时，可以省略圆括号。其它任何情况，参数都应被圆括号括起来
//a => {};
//() => {};  
//(a, b, c) => a;

//58. "constructor-super": "warn",  //验证构造函数中 super() 的调用  派生类中的构造函数必须调用 super()。非派生类的构造函数不能调用 super()
//class A {
//    constructor() { }
//}
//
//class A extends B {
//    constructor() {
//        super();
//    }
//}

//59. "no-class-assign":"error", //不允许修改类声明的变量
//class A { }
//A = 0;
//
//let A = class A { }
//A = 0;

//60. "no-const-assign":"error", //不允许改变用const声明的变量 
//const a = 0; 
//++a;

//61. "no-dupe-class-members":"error", //不允许类成员中有重复的名称 
	//class Foo {  
	//	bar() { }  
	//	bar() { } 
	//}

//62. "no-new-symbol": "error",  //Symbol(es6,一种新的原始数据类型Symbol，表示独一无二的值)不能使用 new 操作符
//var foo = new Symbol("foo");
//
//var foo = Symbol('foo');

//63. "no-this-before-super":"error", //在构造函数中禁止在调用super()之前使用this或super 
//class A extends B {
//    constructor() {
//        this.a = 0;
//        super();
//    }
//}

//64. "no-var":"warn", //给出警告,要求使用 let 或 const 而不是 var
//var a = 5;
//let b = 7;
//const c = 9;

//65. "prefer-template":"warn", //给出警告,建议使用模板而非字符串连接  
//var str = "Hello, " + name + "!";
//
//var str = `Hello, ${name} !`;

//66. "require-yield":"error", //要求 generator 函数内有 yield 
//function* foo() {
//  return 10;
//}
//
//function* foo() { 
//	yield 5; 
//	return 10;
//}
//var f = foo();
//f.next(); Object {value: 5, done: false}
//f.next(); Object {value: 10, done: true}
//f.next(); Object {value: undefined, done: true}