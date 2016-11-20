import newsApis from 'apis/newsApis';

// Actions
const GET_NEWS_STORIES = 'newsActions:GET_NEWS_STORIES';
const GET_NEWS_SOURCES = 'newsActions:GET_NEWS_SOURCES';

const initialState = {
    newsCards: [],
    newsSources: []
};

// Reducers
const REDUCERS = {
    [GET_NEWS_STORIES]: (state, action) => {
        return {
            ...state,
            newsCards: {
                ...state.newsCards,
                [action.stories.source]: action.stories.articles
            }
        };
    },
    [GET_NEWS_SOURCES]: (state, action) => ({
        ...state,
        newsSources: action.sources
    })
};

// Default Reducer
export default function reducer(state = initialState, action = {}) {
    const handler = REDUCERS[action.type];

    return handler ? handler(state, action) : state;
}

// Action Creators
// Get News Story
export const getNewsStoriesFromSource = (source) => (dispatch) => {

    newsApis.getNewsStoriesFromSource(source)
    .done((stories) => {
        dispatch({type: GET_NEWS_STORIES, stories: stories});
    }).fail(() => {
        console.log("error");
    }).always(() => {
        console.log("complete");
    });
};

//Get News story from category
export const getNewsSourcesFromCategory = (category) => (dispatch) => {
    newsApis.getNewsSourcesFromCategory(category)
    .done((sources) => {
        dispatch({type: GET_NEWS_SOURCES, sources: sources.sources});
    }).fail(() => {
        console.log("error");
    }).always(() => {
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
