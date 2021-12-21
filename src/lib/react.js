import { renderComponent } from "./react-dom.js";

function createElement(tag, attrs, ...children) {
    return { tag, attrs, children }
}
// const React = {createElement} ;  //创建并返回虚拟DOM

class Component {
    constructor(props) {
        this.props = props
        this.states = {}
    }


    setState(newState) {  //修改state
        Object.assign(this.states, newState)   //把新的newstate合并到state里
        renderComponent(this);
    }

}

// const React = {
// createElement,
// Component

// }

// export default React ;
export {
    createElement,
    Component
}
export default {
    createElement,
    Component
}