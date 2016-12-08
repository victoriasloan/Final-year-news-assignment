// import compose and prop from ramda
import {
    compose,
    prop
} from 'ramda';

// compose function for searchTerm match-> converts to uppercaase and compares both uppercase terms
const searchTermMatch = (searchTerm) => (field) => field.toUpperCase().includes(searchTerm.toUpperCase());

// compose functon for key and search search term
const byKeyAndSearchTerm = (key, searchTerm) => compose(searchTermMatch(searchTerm), prop(key));

// export the composed function
export {
    byKeyAndSearchTerm
};
