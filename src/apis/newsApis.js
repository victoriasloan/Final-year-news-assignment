import $ from 'jquery';
import {
    NEWS_API_URL,
    NEWS_API_KEY
} from 'constants/apiConstants';

const getNewsStoriesFromSource = (source, sortBy) => $.getJSON(`${NEWS_API_URL}?source=${source}&sortBy=${sortBy}&apiKey=${NEWS_API_KEY}`);

export default {
    getNewsStoriesFromSource
}
