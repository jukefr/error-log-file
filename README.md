# error-log-file

a package to log errors directly to an error.log file

## usage
```javascript
const log = require('error-log-file')

log('something went wrong')

// Optionnal arguments
log('there was an error', {fileName: 'error.txt'})
log('there was an error', {date: new Date('2012')})

// Output sample
// [2018-12-19|15-54-44] a very useful error message log 
```
