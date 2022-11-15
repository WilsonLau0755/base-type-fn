/**
 * 修复微信小程序端部分IOS手机型号对带T时间日期格式进行new Date时出错
 */
String.prototype.fixIOSDateTimeStr = function() {
  return this.replace(/-/g, '/').replace('T', ' ')
}

/**
 * 生成随机字符串，包含大小写字母及数字
 * @param length 字符串长度
 * @return 随机字符串
 */
String.prototype.randomStr = function(length: number) {
  const FIXED_STR = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';
  let result = '';
  for(let i = 0; i < length; i++) {
    result += FIXED_STR.charAt(Math.floor(Math.random() * FIXED_STR.length))
  }
  return result;
}
