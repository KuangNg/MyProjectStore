// 倒计时效果
// 1.核心算法：输入的时间减去现在的时间就是剩余的时间，即倒计时，但是不能拿着时分秒相减，比如05分减去25分，结果会是负数的
// 2.用时间戳来做，用户输入时间总的毫秒数减去现在时间的总的毫秒数，得到的就是剩余时间的毫秒数。
// 3.把剩余时间总的毫秒数转换为天、时、分、秒（时间戳转换为时分秒）
// 转换公式如下
//     · d = parseInt(总秒数/60/60/24)  计算天数
//     · h = parseInt(总秒数/60/60%24)  计算小时
//     · m = parseInt(总秒数/60%60)     计算分数
//     · s = parseInt(总秒数%60)        计算当前秒数

function conutDown(time) {
  var nowTime = +new Date();
  var inputTime = +new Date(time);
  var times = (inputTime - nowTime) / 1000;
  var d = parseInt(times / 60 / 60 / 24);
  d = d < 10 ? '0' + d : d;
  var h = parseInt(times / 60 / 60 % 24);
  h = h < 10 ? '0' + h : h;
  var m = parseInt(times / 60 % 60);
  m = m < 10 ? '0' + m : m;
  var s = parseInt(times % 60);
  s = s < 10 ? '0' + s : s;
  return d + '天' + h + '时' + m + '分' + s + '秒';
}
conutDown('2019-12-7 21:00:00');
console.log(conutDown('2019-12-7 21:00:00'));
