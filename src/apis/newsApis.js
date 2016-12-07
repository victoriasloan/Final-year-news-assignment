import $ from 'jquery';
//Import contants from constants directory
import {
    NEWS_ARTICLES_URL,
    NEWS_SOURCES_URL,
    NEWS_API_KEY
} from 'constants/apiConstants';

//Api call using ES6 functional programming to construct the URL.
const getNewsStoriesFromSource = (source) => $.getJSON(`${NEWS_ARTICLES_URL}?source=${source}&apiKey=${NEWS_API_KEY}`);

// Logic to get the appropriate news sources by passing category as a function
const getNewsSourcesFromCategory = (category) => {
 //if the category is not all get the news sources by category
 if (category !== "all") {
    return $.getJSON(`${NEWS_SOURCES_URL}?category=${category}`);
 } else {
     //else return news sources
     return $.getJSON(`${NEWS_SOURCES_URL}`);
 }
};

//Export the two news functions
export default {
    getNewsStoriesFromSource,
    getNewsSourcesFromCategory
};
