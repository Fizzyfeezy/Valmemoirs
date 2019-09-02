import React, { Component } from 'react';
//import axios from 'axios';
import {Link} from 'react-router-dom';
import love from '../love.png';
import {connect} from 'react-redux';
import M from 'materialize-css';
import AddStory from './AddStory';
import CountLikes from './CountLikes';
import UnSplash from './UnSplash';

class Home extends Component {
    // constructor(props) {
    //     super(props)
    
    //     this.state = {
    //     }
    // }
    
    // componentDidMount(){
    //     axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
    //         console.log(res);
    //         this.setState({
    //             posts : res.data.slice(0,10)
    //         })
    //     })
    // }
    componentDidMount(){
        document.addEventListener('DOMContentLoaded', function() {
            let options = { inDuration: 300, outDuration: 300, hover: true, coverTrigger: false};
            const elems = document.querySelectorAll('.modal');
            M.Modal.init(elems, options);
          });
    }

    render() {
        const jumbotronStyle = {
            paddingBottom: '40px',
            boxShadow: "0px 0px 0px 0px rgba(0,0,0,0)",
            borderRadius: "20px"
          }
        const styling = {
            color : '#00695C',
        }
        const username = {
            color : '#00695C',
            fontSize: '20px',
            fontFamily: 'acumin-pro'
        }
        //const {posts} = this.state;
        const {stories} = this.props;
        const postList = stories.length ? (
            stories.map(story => {
                return (
                    <div className="row" key={story.id}>
                        <div className="col l12">
                            <div className="story card">
                            <img src={love} alt="Valentine love"/>
                            <div className="card-content">
                            <Link to = {'/' + story.id}>
                                <span className = 'card-title'>{story.headline}</span>
                            </Link> 
                                <p className = 'card-body'>{story.story}</p>
                                <h5 style = {username}><i className="material-icons prefix">account_circle</i> {story.username}</h5>
                                <CountLikes/>
                            </div>
                            </div>
                        </div>
                    </div> 
                )
            })
        ) : (
                <div className ='center'>No Story yet</div>
        )
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col l12">
                            <div className="card-panel grey lighten-2" style={jumbotronStyle}>
                                <div className="container">
                                    <h3  style={styling}>VALENTINE MEMORIES</h3>
                                    <p>Valentine’s Day, also called St. Valentine’s Day, holiday 
                                    (February 14) when lovers express their affection with greetings 
                                    and gifts. The holiday has origins in the Roman festival of 
                                    Lupercalia, held in mid-February. The festival, which celebrated 
                                    the coming of spring, included fertility rites and the pairing off 
                                    of women with men by lottery. At the end of the 5th century, P
                                    ope Gelasius I replaced Lupercalia with St. Valentine’s Day. 
                                    It came to be celebrated as a day of romance from about the 14th century.</p>
                                        <a className="waves-effect waves-light btn modal-trigger" href="#modal1">Add Story</a>
                                        <div id="modal1" className="modal">
                                            <div className="modal-content">
                                                <AddStory addStory = {this.addStory} />
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                        <UnSplash />
                    </div>
                    
                    <div className="home">
                        <h5>All Valentine Stories</h5>
                        {postList}
                    </div>
                </div>
                {/* <div className="row">
                    <div className="col l5 offset-l1">
                        <div className="home">
                            <h3>All Valentine Stories</h3>
                        </div>
                    </div>            
                </div>
                <div className="home">
                    {postList}
                </div> */}
            </React.Fragment>
            
        )
    }
}

const mapStateToProps = (state) => {
    return{
        stories: state.stories
    }
}

export default connect(mapStateToProps)(Home)
//export default Home
