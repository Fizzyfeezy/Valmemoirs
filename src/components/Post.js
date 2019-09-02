import React, { Component } from 'react'
import Rainbow from '../hoc/Rainbow';
//import axios from 'axios';
import {connect} from 'react-redux';
import {deleteStory} from '../action/StoryAction';

export class Post extends Component {
    // constructor(props) {
    //     super(props)
    
    //     this.state = {
    //          post : null
    //     }
    // }
    // componentDidMount(){
    //     let id = this.props.match.params.post_id;
    //     axios.get('https://jsonplaceholder.typicode.com/posts/' + id).then(res => {
    //         console.log(res);
    //         this.setState({
    //             post : res.data
    //         })
    //     })
    // }
    handleClick = (e) => {
        this.props.deleteStory(this.props.story.id);
        this.props.history.push('/');
    }
    
    render() {
        const head = {
           fontWeight: 'bold'
        }
        const username = {
            color : '#00695C',
            fontSize: '20px',
            fontFamily: 'acumin-pro'
        }
        console.log(this.props.story)
        const story = this.props.story ? (
            <div className="story card">
                <div className="card-content">
                    <span className = 'card-title center' style = {head}>{this.props.story.headline}</span>
                    <p>{this.props.story.story}</p>
                    <h5 style = {username}><i className="material-icons prefix">account_circle</i> {this.props.story.firstname} {this.props.story.lastname}</h5>
                    <h5 style = {username}><i className="material-icons prefix">account_circle</i> {this.props.story.username}</h5>
                </div>
                <div className="center">
                    <button className="btn red" onClick = {this.handleClick}>Delete Story</button>
                </div>
            </div>
        ) : (
            <div className ='center'>Loading story....</div>
        )
        return (
            <div className="container">
                <h3>Story Details</h3>
                {story}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) =>{
    let id =  parseInt(ownProps.match.params.post_id);
    console.log(id)
    return{
        story: state.stories.find(story => story.id === id)
    }
    
}
const mapStateToDispatch = (dispatch) => {
    return{
        deleteStory : (id) => {dispatch(deleteStory(id))}
    }
}

export default connect(mapStateToProps, mapStateToDispatch)(Rainbow(Post))
