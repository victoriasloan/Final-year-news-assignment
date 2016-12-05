import newsApis from 'apis/newsApis';

// Actions
const GET_NEWS_STORIES = 'newsActions:GET_NEWS_STORIES';
const GET_NEWS_SOURCES = 'newsActions:GET_NEWS_SOURCES';
const SAVE_ARTICLE = 'newsActions:SAVE_ARTICLE';

const initialState = {
    newsCards: [],
    newsSources: [],
    savedArticles: []
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
    }),
    [SAVE_ARTICLE]: (state, action) => ({
        ...state,
        savedArticles: state.savedArticles.concat(action.article)
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

export const saveArticle = (article) => (dispatch, getState) => {
    dispatch({ type: SAVE_ARTICLE, article });
    console.table(getState().newsReducer.savedArticles);
    alert('You saved this article!');
};
