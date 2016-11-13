import $ from 'jquery';
import {
    NEWS_ARTICLES_URL,
    NEWS_SOURCES_URL,
    NEWS_API_KEY
} from 'constants/apiConstants';

const getNewsStoriesFromSource = (source) => $.getJSON(`${NEWS_ARTICLES_URL}?source=${source}&apiKey=${NEWS_API_KEY}`);

const getNewsSourcesFromCategory = (category) => {
 if (category !== "all") {
    return $.getJSON(`${NEWS_SOURCES_URL}?category=${category}`);
 } else {
     return $.getJSON(`${NEWS_SOURCES_URL}`);
 }
};


export default {
    getNewsStoriesFromSource,
    getNewsSourcesFromCategory
};
