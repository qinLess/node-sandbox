// 过检测
this.exports = undefined;
this.module = undefined;
delete define;
delete exports;
delete GLOBAL;
delete module;
delete VMError;
delete Buffer;
delete KNBCore;
this.i = 1;
delete i;
delete global;
globalMy.console.log("js沙箱环境框架初始化耗时:", +new Date - a, "毫秒");
delete a;
debugger;


// a = +new Date;
// document.all;
// console.log("document.all.length -> ",document.all.length)
// console.log("document.all 耗时:", +new Date - a, );

// 是否打印日志
globalMy.is_log = true;
// globalMy.is_log = false;

// js开始运行时的时间戳, 用来计算整个js耗时
globalMy.memory.end_time = globalMy.memory.begin_time = Date.now();