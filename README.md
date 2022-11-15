## BASE TYPE FUNCTION

It is a project for my personal useful general function.


### Date
#### format

```
new Date().format('yyyy-MM-dd HH:mm:ss')
// 2020-01-01 00:00:00
```

#### sectionDateTimeFormat
```
new Date('2020-01-01 00:00:00').sectionDateTimeFormat(new Date(2021-01-01 01:30:20)) 
// 2022-01-01 00:00 ~ 2021-01-01 01:30
new Date('2020-01-01 00:00:00').sectionDateTimeFormat(new Date(2020-01-02 01:30:20)) 
// 2022-01-01 00:00 ~ 01-02 01:30
new Date('2020-01-01 00:00:00').sectionDateTimeFormat(new Date(2020-01-01 01:30:20)) 
// 2022-01-01 00:00 ~ 01:30
```

### Number
#### toDateTimeStr
transfer millisecond to timer count down in chinese
```
3601020.toDateTimeStr()
// 1时00分01秒
```

### String
#### randomStr
generate random string for given length, include alphabet and number
```
const a = String().randomStr(20)
// 'iB4hzHunnMSLLDRPozLl'
```