///var a = 1; //hoisting
///console.log(a);
//identifier *標示符 單行註釋
/*var $ =1;
var _ =1;
var arg0 =1;
var 安安 =5;
多行註釋
console.log(安安)
*/
/*
 x = 1; <!-- x = 2;
 --> x = 3; ///這裡只有x=1會執行
*/
//5.Block{}
/*
{ 代碼整潔,通常不會只包var變量
 var a=1;
 console.log(a)
}
console.log(a)
*/
//6.if else(條件)js的bool只有 True false
//var var1=3;
//var var2=4;
//1.
//3== var1 true
// == var1; true
//3=='3' true
//3 === var1 true
//a=1 //0.賦值表達 x=y
//b==3 // 1.相等運算 運算元等於運算元就會回傳true
//c===1 //2.嚴格相等 運算元有相同型態才回傳true
/*var x =1;
var y =2;
if (x=y){ // x=y*賦值表達 {}block
    console.log(x);
}
 */
//6.2 if...else
/*/
if (x===3) { //嚴格相等
    //滿足執行這個
} else {
    ///反之亦然
}*/
/*
if(m===0){

} else if (m===1){
    //滿足執行這個
} else if (m===2){
    //滿足執行這個
} else{
    //都不滿足執行這個
}
*/
/*
var x=1; //賦值
var y=2;
if(x !== 1) ///不等於
    if (y === 2) console.log('hello');
else console.log('world');
*/
/*
if (m !== 1) {
  if (n === 2) {
    console.log('hello');
  } else {
    console.log('world');
  }
}
 */
/*
var y=2;
var x=2;
if (y === 2) {
    if (x !== 1) {
        console.log('hello');
    }
    ///如果上面兩個都回傳true才會console hello
} else {
    console.log('world');
}
*/
//6.3 Switch 用在多個if else連結在一起的時候
/*
var x=1;
switch (x){
    case 1:
        console.log('x = 1');
        break;
    case 2:
        console.log('x=2');
        break;
    default:
        console.log('x=其他值')
}
*/
/*
var x="1";
switch (x){
    case "1":
        console.log('x = 1');
    break;
    case 2:
        console.log('x=2');
    break;
    default:
        console.log('x=其他值')
}
*/
/*
var n=2
var even = ( n %2===0) ? true: false;
console.log(even)
while 循环*/
/*
var x =0;
while (x<100){
    console.log('x當前為:'+1);
    x=x+1
}
 */
/*for 循环
var x=3;
for (var i=0; i<x; i++){
    console.log(i);
}
for (初始化表达式; 条件; 递增表达式) {
  语句
}
初始化表达式（initialize）：确定循环变量的初始值，只在循环开始时执行一次。
条件表达式（test）：每轮循环开始时，都要执行这个条件表达式，只有值为真，才继续进行循环。
递增表达式（increment）：每轮循环的最后一个操作，通常用来递增循环变量。
 */
/* 所有for循环，都可以改写成while循环 如以下:

var x =3;
var i =0;
while (i < x){
    console.log(i);
    i++;
}
 */
///for语句的三个部分（initialize、test、increment），可以省略任何一个，也可以全部省略。
/*
for (;;){
    console.log('hello world')

}
*/
/*
do
  语句
while (条件);

// 或者
do {
  语句
} while (条件);
不管条件是否为真，do...while循环至少运行一次，
这是这种结构最大的特点。另外，while语句后面的分号注意不要省略。
 */
/*
var x=3;
var y=0;
do {
    console.log(y);
    y++;
} while (y<x);

 */
//7.4 break 语句和 continue 语句
/*
break语句和continue语句都具有跳转作用，可以让代码不按既有的顺序执行。
break语句用于跳出代码块或循环。
 */
/*

var i =0;
while(i<100){
    console.log('i當前為i+1'+i);
    i++;
    if (i === 10) break; //代碼只會執行10次
}
 */
///for也可以用break跳出
/*
for (var x =0; x < 5; x++)  { //++為增加將運算元增加1。
    // 假如使用在運算元之前 (++x)，會運算元回傳增加1後的值;假如使用在運算元之後。 (x++)， 會回傳運算元加1前的值
    console.log(x);
    if (x===3)
     break;
}

 */
//continue语句用于立即终止本轮循环，返回循环结构的头部，开始下一轮循环。
/*
var x=0;
while (x<100){
    x++;
    if(x % 2 ===0) continue;
    console.log('x當前為' +x)
}

 */
///7.5 label
// label格式如下label:标签可以是任意的标识符，但不能是保留字，语句部分可以是任意语句。
//标签通常与break语句和continue语句配合使用，跳出特定的循环。
/*
foo:{
   console.log(1);
   break foo; //執行到tree:
    for (var i=0; i<3;i++){  //x回傳0,再把x設定為1 for (初始化表达式; 条件; 递增表达式) {
        //x++ 功能:將運算元+1 如果寫在運算元之前e.g. ++x則回傳 運算元增加1後的值 反之 x++回傳運算元加1前的值
        //if x==3 ++x 把x設定為4並回傳4,x++則回傳3,再把x設定為4
        // for (初始化表达式; 条件; 递增表达式) {
        //初始化表达式（initialize）：确定循环变量的初始值，只在循环开始时执行一次。
        // 条件表达式（test）：每轮循环开始时，都要执行这个条件表达式，只有值为真，才继续进行循环。
        // 递增表达式（increment）：每轮循环的最后一个操作，通常用来递增循环变量
        for (var j =0; j<3; j++){ //for (初始化表达式; 条件; 递增表达式) {
            if (i===1 && j===1) break tree;
            console.log('i='+i+',j='+j);
        }
    }break foo 就會跳出block
   console.log('no output this line');
}
    console.log(2);
 */



 */