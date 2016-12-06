import {
    compose,
    prop
} from 'ramda';

const searchTermMatch = (searchTerm) => (field) => field.toUpperCase().includes(searchTerm.toUpperCase());

const byKeyAndSearchTerm = (key, searchTerm) => compose(searchTermMatch(searchTerm), prop(key));

export {
    byKeyAndSearchTerm
};
