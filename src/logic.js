import { help } from './help'

export const logic = ($message) => {
    return new Promise((resolve, reject) => {
        const newMessage = Object.assign({}, $message, { content: help[Math.floor(Math.random() * help.length)] })
        console.log($message.conversationId)
        resolve(newMessage)
    })
}