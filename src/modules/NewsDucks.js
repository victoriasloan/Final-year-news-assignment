import newsApis from 'apis/newsApis';

// Actions
const GET_NEWS_STORIES = 'newsActions:GET_NEWS_STORIES';

const initialState = {
    newsStories: []
};

// Reducers
const REDUCERS = {
    [GET_NEWS_STORIES]: (state, action) => ({
        ...state,
        newsStories: action.stories
    })
};

// Default Reducer
export default function reducer(state = initialState, action = {}) {
    const handler = REDUCERS[action.type];

    return handler ? handler(state, action) : state;
}

// Action Creators
// addNewsStory action
export const getNewsStoriesFromSource = (source, sortBy) => (dispatch) => {

    newsApis.getNewsStoriesFromSource(source, sortBy)
    .done((stories) => {
        dispatch({type: GET_NEWS_STORIES, stories: stories.articles});
    }).fail(() => {
        console.log("error");
    }).always(function() {
        console.log("complete");
    });
};

// This is the equivalent of the above arrow function in ES5 syntax
// export function addNewsStory(story) {
//     return function(dispatch) {
//         dispatch({
//             type: ADD_NEWS_STORY,
//             story
//         });
//     }
// }
