export const deleteStory = (id) => {
    return {
        type : 'DELETE_STORY',
        id
    }
}

export const addStory = (story) => {
    return {
        type : 'ADD_STORY',
        story
    }
}

