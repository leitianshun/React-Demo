
import React from './lib/react.js'
import reactDom from './lib/react-dom.js'



// function clickme(){
// console.log('hello')  //onClick的方法
// }

// let styleobj = {
// color:'black',
// fontSize:'50px' //style样式
// }

// let div = (<h1 className = "hello" onClick={clickme} style={styleobj}>   
// <span>hello</span>
// <span>world</span>    
// </h1>);
// console.log(div)
// reactDom.render(div,document.body)

class App extends React.Component {
    constructor(props) {
        super(props);
        this.states = { title: '123' }
    }

    handleClick() {
        this.setState({
            title: '456'

        })
    }

    render() {
        return (
            <div>
                <h1>{this.states.title}</h1>
                <span onClick={this.handleClick.bind(this)}>hello</span>

            </div>
        )

    }

}

reactDom.render((
    <App>hello</App>
), document.body)
