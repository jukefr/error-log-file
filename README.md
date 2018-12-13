# error.log
a package to log errors directly to a error.log file with helpers

## usage
```javascript
const log = require('error.log')

await log('something went wrong')

// Optionnal arguments
await log('there was an error', {fileName: 'error.txt'})
await log('there was an error', {date: new Date('2012')})
```