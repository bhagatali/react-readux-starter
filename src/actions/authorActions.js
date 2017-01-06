import AuthorApi from '../api/mockAuthorApi';
import * as types from './actionTypes';

export function loadAuthorSuccess(authors){
  return {type: types.LOAD_AUTHORS_SUCCESS, authors};
}

export function loadAuthor(){
  return function(dispatch){
    return AuthorApi.getAllCourses
                    .then(authors => dispatch(loadAuthorSuccess(authors)))
                    .catch(error => {throw(error);});
  };
}
