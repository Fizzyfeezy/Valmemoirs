import React, { Component } from 'react';
//import redlove from '../redlove.png';

export class CountLikes extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
            //  color: ''
        }
    }

    handleLoveClick = () => {
        if (this.state.count < 1) {
            this.setState(prevState => {
                return {
                    count: prevState.count + 1,
                    // color: 'red'
                }
                })
        }
        else{
            this.setState({
                count: 'Maximum reached'
            })
        }
    }
    render() {
        return (
            <div>
            <button onClick = {this.handleLoveClick}>Like - {this.state.count}</button>
                {/* <p><i className="material-icons prefix" onClick = {this.handleLoveClick}>account_circle</i> - {this.state.count}</p> */}
            </div>
        )
    }
}

export default CountLikes
