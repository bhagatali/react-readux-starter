import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function courseReducer(state = initialState.courses, action){
  switch (action.type) {
    // case types.CREATE_COURSE:
    //     // The spread operator creates an inline spread of the state array
    //     // i.e. the ... takes the state array passed in and creates an inline
    //     // spread here in this new array. To this, we then add the Object.assign
    //     // and add the action.course that is passed in.
    //
    //     //This syntax from ES6 is very useful to create a new array and add a new
    //     //value to it.

    //     return [...state,
    //         Object.assign({},action.course)
    //     ];
    case types.LOAD_COURSES_SUCCESS:
        return action.courses;
    default:
        return state;
  }
}
