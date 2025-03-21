console.log("Hola mundo")
export default class VariableWord {
    constructor(_item) {
        this.childs = _item.querySelector('span')
        this.childs.array.forEach(child => child.setupVar(_item))
    }

    setupVar(_item) {

    }
}