import $ from 'jquery';
import {
    NEWS_ARTICLES_URL,
    NEWS_SOURCES_URL,
    NEWS_API_KEY
} from 'constants/apiConstants';

const getNewsStoriesFromSource = (source, sortBy) => $.getJSON(`${NEWS_API_URL}?source=${source}&sortBy=${sortBy}&apiKey=${NEWS_API_KEY}`);

const getNewsSources = () => $.getJSON(`${NEWS_SOURCES_URL}`);


export default {
    getNewsStoriesFromSource,
    getNewsSources
}
