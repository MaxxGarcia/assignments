import { Component } from 'react';

class Toggler extends Component {
    constructor (props){
        super(props);
        this.state = {
            toggled: false
        }
        this.handleToggle = this.handleToggle.bind(this)
    }
    handleToggle(e){
        this.setState(prevState => {
            return {
                toggled: !prevState.toggled
            }
        })
    }
    render(){
        return this.props.render({
            handleToggle: this.handleToggle,
            toggled: this.state.toggled
        })
    }
}

export default Toggler;

