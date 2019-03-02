import _ from 'lodash'

console.log(_.concat('lodash', 'in', 'B'))
console.log('here is b.js')

export default {
    log: function(str) {
        console.log(`%c ${str}`, 'background: #222; color: #bada55')
    }
}