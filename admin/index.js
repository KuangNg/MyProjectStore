const jwt = require("jsonwebtoken");

// 作用：
// 1.防止表单重复提交（暴力破解）
// 2.用来做身份验证
// 3.防止 csrf攻击（跨站请求伪造）

// 后台生成
// token数据-存储用户信息-自己定义数据
// const payload = {
//     username:"zhangsan",
//     password:"123123",
//     iat: Math.floor(Date.now() / 1000 )-30
// }

// 密钥
const secret = "iloveyoumeinv";

// const token = jwt.sign(payload,secret);
// // 生成令牌
// console.log(token);

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InpoYW5nc2FuIiwicGFzc3dvcmQiOiIxMjMxMjMiLCJpYXQiOjE1NzQzMDEyOTB9.WI3agMjAks9x9eQoYVoU0CIWxbc4gl2VjPq4WfTYa6g

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InpoYW5nc2FuIiwicGFzc3dvcmQiOiIxMjMxMjMiLCJpYXQiOjE1NzQzMDEyOTB9.WI3agMjAks9x9eQoYVoU0CIWxbc4gl2VjPq4WfTYa6g";
// 接收传递前台token

const decoded = jwt.verify(token,secret);
console.log(decoded);
