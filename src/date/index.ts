declare interface Date {
  format(fmt: string): string,
  sectionDateTimeFormat(endDate: Date): string
}

/**
 * date format function
 */
Date.prototype.format = function(fmt: string) {
  const o: {[key: string]: any} = {
    "M+": this.getMonth() + 1, //月份 
    "d+": this.getDate(), //日 
    "H+": this.getHours(), //小时 
    "m+": this.getMinutes(), //分 
    "s+": this.getSeconds(), //秒 
    "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
    "S": this.getMilliseconds() //毫秒 
  };
  if (/(y+)/.test(fmt)){
    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  }
  for (var k in o){
    if (new RegExp("(" + k + ")").test(fmt)){
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));    
    }
  }
  return fmt;
}

/**
 * 对两个时间区间进行格式化显示
 * @param endDate 结束日期时间
 * @returns YYYY-MM-DD HH:mm ~ HH:mm or YYYY-MM-DD HH:mm ~ YYYY-MM-DD HH:mm
 */
Date.prototype.sectionDateTimeFormat = function(endDate: Date) {
  if (this.getFullYear() === endDate.getFullYear()) {
    if (this.getMonth() === endDate.getMonth()) {
      if (this.getDate() === endDate.getDate()) {
        return `${this.format('yyyy-MM-dd HH:mm')} ~ ${endDate.format('HH:mm')}`
      } else {
        return `${this.format('yyyy-MM-dd HH:mm')} ~ ${endDate.format('MM-dd HH:mm')}`
      }
    } else {
      return `${this.format('yyyy-MM-dd HH:mm')} ~ ${endDate.format('MM-dd HH:mm')}`
    }
  } else {
    return `${this.format('yyyy-MM-dd HH:mm')} ~ ${endDate.format('yyyy-MM-dd HH:mm')}`
  }
}
