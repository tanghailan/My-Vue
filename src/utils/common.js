// 日期格式化
export function parseTime(time, pattern) {
  if (arguments.length === 0 || !time) {
    return null
  }
  const format = pattern || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if ((typeof time === 'string') && (/^[0-9]+$/.test(time))) {
      time = parseInt(time)
    }
    if ((typeof time === 'number') && (time.toString().length === 10)) {
      time = time * 1000
    }
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key]
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') {
      return ['日', '一', '二', '三', '四', '五', '六'][value]
    }
    if (result.length > 0 && value < 10) {
      value = '0' + value
    }
    return value || 0
  })
  return time_str
}

export function removeHTMLTag(str) {
  if(!str)
  {
    return "";
  }
  str = str.replace(/<\/?[^>]*>/g, ''); //去除HTML tag
  str = str.replace(/[ | ]*\n/g, '\n'); //去除行尾空白
  str = str.replace(/\n[\s| | ]*\r/g, '\n'); //去除多余空行
  str = str.replace(/&nbsp;/ig, '');//去掉&nbsp;
  return str;
}


// 回显数据字典, value多个逗号分隔
export function selectDictLabel(datas, value) {
  var actions = []
  Object.keys(datas).map((key) => {
    if (('' + value).indexOf(datas[key].dictValue) > -1) {
      actions.push(datas[key].dictLabel)
      return false
    }
  })
  return actions.join(',')
}

//时间比较
export function compareTime(date, endTime) {
  date = date.replace(/-/g, "/");
  endTime = endTime.replace(/-/g, "/");
  const a = (Date.parse(endTime) - Date.parse(date)) / 3600 / 1000;
  if (a < 0) {
    return false
  } else if (a > 0) {
   return true
  } else if (a == 0) {
    return true
  }
}
