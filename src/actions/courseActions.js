import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';

// export function createCourse(course){
//   // return {type: 'CREATE_COURSE', course: course};
//   //In ES6 because the left hand side matches the right hande we can use
//   //course only instead of course:course
//   return {type: types.CREATE_COURSE, course};
// }

export function loadCoursesSuccess(courses){
  // return {type: 'CREATE_COURSE', course: course};
  //In ES6 because the left hand side matches the right hande we can use
  //course only instead of course:course
  return {type: types.LOAD_COURSES_SUCCESS, courses};
}

export function loadCourses(){
  return function(dispatch){
    return courseApi.getAllCourses().then(
      courses => dispatch(loadCoursesSuccess(courses))
     ).catch(
       //curly braces are needed for the fat arrow when using throw.
       //something to do with
      error => {throw(error);});
  };
}
