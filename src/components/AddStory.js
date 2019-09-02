import React, { Component } from 'react'
import M from 'materialize-css';
import {connect} from 'react-redux';
import {addStory} from '../action/StoryAction';

export class AddStory extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            firstname: '',
            lastname: '',
            username: '',
            headline: '',
            body : ''
        }
    }
    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    handleSubmit = event => {
        event.preventDefault();
        this.props.addStory(this.props.story);
        // console.log(this.state)
        //this.props.history.push('/');
    }
    
    componentDidMount(){
        document.addEventListener('DOMContentLoaded', function() {
            let options = { inDuration: 300, outDuration: 300, hover: true, coverTrigger: false}
            const elems = document.querySelectorAll('select');
            M.FormSelect.init(elems, options);
          });
    }
    
    render() {
        console.log(this.props)
        return (
            <React.Fragment>
                    <form onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="col l12">
                                <div className="input-field col l6">
                                    <i className="material-icons prefix">account_circle</i>
                                    <input id="firstname" type="text" className="validate"
                                        value={this.state.firstname} onChange={this.handleChange}
                                    />
                                    <label htmlFor="firstname">First Name</label>
                                </div>
                                <div className="input-field col l6">
                                    <i className="material-icons prefix">account_circle</i>
                                    <input id="lastname" type="text" className="validate"
                                        value={this.state.lastname} onChange={this.handleChange}
                                    />
                                    <label htmlFor="lastname">Last Name</label>
                                </div>
                            </div>
                            <div className="col l12">
                                <div className="input-field col l6">
                                    <i className="material-icons prefix">account_circle</i>
                                    <input id="username" type="text" className="validate"
                                        value={this.state.username} onChange={this.handleChange}
                                    />
                                    <label htmlFor="username">User Name</label>
                                </div>
                                <div className="input-field col l6">
                                    <select onChange={this.selectChange}>
                                    <option value={this.state.gender} disabled defaultValue>sex</option>
                                    <option value="1">Male</option>
                                    <option value="2">Female</option>
                                    </select>
                                    <label>Gender</label>
                                </div>
                            </div>
                            <div className="input-field col l12">
                                <i className="material-icons prefix">headline</i>
                                <input id="headline" type="text" className="validate"
                                    value={this.state.headline} onChange={this.handleChange}
                                />
                                <label htmlFor="headline">Headline</label>
                            </div>
                            <div className="row">
                                <div className="input-field col l12">
                                    <textarea id="body" className="materialize-textarea" data-length="200"
                                    value={this.state.body} onChange={this.handleChange}></textarea>
                                    <label htmlFor="body">Story</label>
                                </div>
                            </div>
                        </div>
                        <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                            <i className="material-icons right">send</i>
                        </button>
                    </form>    
            </React.Fragment>
            
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
      story: state.stories
    }
}
const mapStateToAdd = (dispatch) => {
    return{
        addStory : (story) => {dispatch(addStory(story))}
    }
}

//export default AddStory
//export default connect(mapStateToAdd)(AddStory)
export default connect(mapStateToProps, mapStateToAdd)(AddStory)
