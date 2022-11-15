interface Number {
  toDateTimeStr(): string
}

/**
 * 将毫秒数转化成时间格式
 * @return 返回字符串格式：%d天?%h时?%m分。 如：1天10时01分
 */
Number.prototype.toDateTimeStr = function () {
  const thisMins = Math.ceil(this / (1000 * 60))
  const minNumber = thisMins % 60
  const hourNumber = Math.floor(thisMins % (60 * 24) / 60)
  const dayNumber = Math.floor(thisMins / (60 * 24))
  if (dayNumber) {
    return `${dayNumber}天${String(hourNumber).padStart(2, '0')}时${String(minNumber).padStart(2, '0')}分`
  } else if (hourNumber) {
    return `${hourNumber}时${String(minNumber).padStart(2, '0')}分`
  } else {
    return `${String(minNumber).padStart(2, '0')}分`
  }
}
