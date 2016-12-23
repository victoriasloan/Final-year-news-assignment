// This file is using the redux ducks design pattern
// Each module contains all of its related constants, actions/action creators, and it’s reducer.
//  If any of our other modules were to need any actions, they can be exported and imported where necessary

// import Apis
import newsApis from 'apis/newsApis';


// Actions assigned to constants
const GET_NEWS_STORIES = 'newsActions:GET_NEWS_STORIES';
const GET_NEWS_SOURCES = 'newsActions:GET_NEWS_SOURCES';
const SAVE_ARTICLE = 'newsActions:SAVE_ARTICLE';
const UPDATE_SEARCH_BAR = 'newsActions:UPDATE_SEARCH_BAR';

// defining the initialState
const initialState = {
    articlesForCurrentSource: [],
    newsSources: [],
    savedArticles: [],
    searchTerm: ""
};

// Reducers using es6 spread operators
// ...state means take the current state and update with anything that has changed in the state to provide the new state.
const REDUCERS = {
    [GET_NEWS_STORIES]: (state, action) => ({
        ...state,
        articlesForCurrentSource: action.stories.articles
    }),
    [GET_NEWS_SOURCES]: (state, action) => ({
        ...state,
        newsSources: action.sources
    }),
    [SAVE_ARTICLE]: (state, action) => ({
        ...state,
        savedArticles: state.savedArticles.concat(action.article)
    }),
    [UPDATE_SEARCH_BAR] : (state, action) => ({
        ...state,
        searchTerm: action.searchTerm
    })
};

// Default Reducer, takes the initial state and the action and handles it.
export default function reducer(state = initialState, action = {}) {
    const handler = REDUCERS[action.type];

    return handler ? handler(state, action) : state;
}

// Action Creators
// Get News Story from source which calls a source function which is then dispatched
export const getNewsStoriesFromSource = (source) => (dispatch) => {
    newsApis.getNewsStoriesFromSource(source)
    .done((stories) => {
        dispatch({type: GET_NEWS_STORIES, stories: stories});
    }).fail(() => {
        console.log("error");
    }).always(() => {
        console.log("getting news stories from source");
    });
};

// Get News story from category calls a category function which then calls dispatch
export const getNewsSourcesFromCategory = (category) => (dispatch) => {
    newsApis.getNewsSourcesFromCategory(category)
    .done((sources) => {
        dispatch({type: GET_NEWS_SOURCES, sources: sources.sources});
    }).fail(() => {
        console.log("error");
    }).always(() => {
        console.log("getting news sources from category");
    });
};

// Save article function
export const saveArticle = (article) => (dispatch, getState) => {
    dispatch({ type: SAVE_ARTICLE, article });
    console.table(getState().newsReducer.savedArticles);
    alert('You saved this article!');
};

// Create Search function
export const createSearch = (searchTerm) => (dispatch) => {
    dispatch({ type: UPDATE_SEARCH_BAR, searchTerm });
};
