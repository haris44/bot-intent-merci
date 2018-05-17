import test from 'ava'
import { logic } from '../src/logic'
import { help } from '../src/help'

test(t => {
    return logic({ message: { content: 'hello' } }).then(element => {
        t.true(help.includes(element.content))
    })
})