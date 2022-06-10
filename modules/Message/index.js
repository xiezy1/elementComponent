import Message from './index.vue'

const messageArr = []
export default {
    install(Vue) {
        Vue.prototype.$message = function (option) {
            let { message, duration, type } = option
            let MessageCompon = Vue.extend(Message)
            let app = new MessageCompon({ propsData: { message, duration, type } })
            app.$mount()
            messageArr.push(app)
            document.body.appendChild(app.$el)
            app.setState(true)
            setTop(app)
            hideMessage(app, duration)
        }
    }
}


function setTop(app) {
    let { height, margin, setTop } = app
    let currentIndex = messageArr.findIndex(item => item == app)
    setTop((currentIndex + 1) * margin + height * currentIndex)
}

function hideMessage(app, duration) {
    setTimeout(async () => {
        await app.setState(false)
        app.$el.remove()
        spliceMessage(app)
        renderMessage()
    }, duration)
}


function renderMessage() {
    messageArr.forEach((item, index) => {
        let { height, margin, setTop } = item
        setTop((index + 1) * margin + height * index)
    })
}

function spliceMessage(app) {
    let index = messageArr.findIndex(item => item == app)
    messageArr.splice(index, 1)
}