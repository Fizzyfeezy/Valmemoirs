
const initState = {
    stories : [
        {userId: 1, id: 1, firstname: 'Clark', lastname: 'Lincoln', username: 'lenx', headline: "sunt aut facere repellat provident", story: "quia et suscipit↵suscipit recusandae consequuntur …strum rerum est autem sunt rem eveniet architecto"},
        {userId: 1, id: 2, firstname: 'Bruce', lastname: 'Tyson', username: 'david', headline: "qui est esse", story: "est rerum tempore vitae↵sequi sint nihil reprehend…aperiam non debitis possimus qui neque nisi nulla"},
        {userId: 1, id: 3, firstname: 'Fredrick', lastname: 'Lugard', username: 'isaac', headline: "ea molestias quasi exercitationem", story: "et iusto sed quo iure↵voluptatem occaecati omnis e…↵molestiae porro eius odio et labore et velit aut"},
        {userId: 1, id: 4, firstname: 'Stephinie', lastname: 'Curry', username: 'fatimah', headline: "eum et est occaecati", story: "ullam et saepe reiciendis voluptatem adipisci↵sit … ipsam iure↵quis sunt voluptatem rerum illo velit"},
        {userId: 1, id: 5, firstname: 'Marry', lastname: 'Becurie', username: 'faith', headline: "nesciunt quas odio", story: "repudiandae veniam quaerat sunt sed↵alias aut fugi…sse voluptatibus quis↵est aut tenetur dolor neque"}
    ]
}

function rootReducer(state = initState, action) {
    switch (action.type) {
        case 'DELETE_STORY':
            let newStories = state.stories.filter(story => {
                return action.id !== story.id
            });
            return{
                ...state,
                stories: newStories
            }
        case 'ADD_STORY':
            //story.id = Math.random();
            // const story = [action.story, ...state];
            return {
                ...state,
                story: action.story
            }
    
        default:
            return state;
    }
    // if (action.type === 'DELETE_STORY') {
    //     let newStories = state.stories.filter(story => {
    //         return action.id !== story.id
    //     });
    //     return{
    //         ...state,
    //         stories: newStories
    //     }
    // }
    // else if (action.type == 'ADD_STORY') {
    //     story.id = Math.random();
    //     const story = [...state.stories, story];
    //     return {
    //         story
    //     }
    // }
    // return state;
}

export default rootReducer
