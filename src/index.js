/**
 * const,let等の変数宣言
 */

// var val1 = "変数宣言";
// console.log(val1);

// //var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// //var変数は
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// //letは上書きが可能
// val2 = "let変数を上書き";
// console.log(val2);

// //letは再宣言不可能
// let val2 = "let変数を再宣言";

//const val3 = "const変数";
//console.log(val3);

//const変数は上書き賦課
//val3 = "const変数を上書き";

//const val3 = "const変数を再宣言";

//constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "じゃけえ",
//   age: 28
// };
// val4.name = "jak";
// val4.address = "Hiroshima";
// console.log(val4);

//constで定義した配列はプロパティの変更が可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monley");
// console.log(val5);

/**
 * テンプレート文字列
 */
// const name = "じゃけぇ";
// const age = 28;
// //私の名前はnameです。年齢はageです。

// //従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

// //テンプレート文字列を用いた方法（バッククォートを用いる）
// const message2 = `私の名前は${name}です。年齢は${age}です。。。`;
// console.log(message2);

/**
 * アロー関数
 */
//従来の関数
// function func1(str) {
//   return str;
// }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// //アロー関数

// const func2 = (str) => {
//   return str;
// };
// console.log(func2("func2です"));

//引数が1つの場合（）は無くても大丈夫
// const func2 = str => {
//   return str;
// };
// console.log(func2("func2です"));

//return を省略可能
// const func2 = (str) => str;
// console.log(func2("func2です"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func3(10, 20));

//return を省略可能
// const func3 = (num1, num2) => num1 + num2;
// console.log(func3(10, 20));

/**
 * 分割代入
 */

////テンプレート文字列
// const myprofile = {
//   name: "じゃけぇ",
//   age: 28
// };
// //通常のテンプレート文字列使用方法
// const message1 = `名前は${myprofile.name}です。年齢は${myprofile.age}です。`;
// console.log(message1);

// //分割代入：オブジェクトからプロパティを抜き出してプロパティ値のみで使用可能
// const { name, age } = myprofile;
// const message2 = `2名前は${name}です。年齢は${age}です。`;
// console.log(message2);

//配列の分割代入
// const myprofile = ["じゃけぇ", 28];
// const message3 = `名前は${myprofile[0]}です。年齢は${myprofile[1]}です。。`;
// console.log(message3);
//配列なので、順番に変数名が設定される
// const [name, age] = myprofile;
// const message4 = `名前は${name}です。年齢は${age}です。。`;
// console.log(message4);

/**
 * デフォルト値、引数など
 */
// const sayHello = (name) => console.log(`こんにちは。${name}さん`);
// sayHello("じゃけぇ");
// //引数を設定しないとundefinedで出力される
// sayHello();

//初期値を設定出来る（下の例はname = "じゃけ")
// const sayHello = (name = "じゃけ") => console.log(`こんにちは。${name}さん`);
// sayHello("じゃけぇ");
// //引数を設定しないとundefinedで出力される
// sayHello();

/**
 * スプレッド構文 ...
 */
//配列の展開
// const arr1 = [1, 2];
// // console.log(arr1);
// // //ドット3つを書くと、配列を順番に処理してくれる
// // console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

//１つの配列にまとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

//配列のコピーや結合
const arr4 = [10, 20];
const arr5 = [30, 40];

//スプレッド構文を用いることでarr4と同じ配列を生成可能
const arr6 = [...arr4];
arr6[0] = 100;
console.log(arr6);
console.log(arr4); //スプレッド構文を使ってコピーすれば元の値で出力する

//スプレッド構文を用いることで配列の結合可能
// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// const arr8 = arr4; //スプレッド構文ではなく普通に=でコピーすると、、、
// console.log(arr8); //同じようにコピー可能だが、、、
// arr8[0] = 100;
// console.log(arr8);
// console.log(arr4); //参照先のarr4の値も変わってしまう

/**
 * mapやfilterを使った配列の処理
 */
const nameArr = ["山田", "田中", "じゃけぇ"];
//従来のfor文
for (let index = 0; index < nameArr.length; index++) {
  console.log(nameArr[index]);
}
