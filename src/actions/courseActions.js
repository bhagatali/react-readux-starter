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

export function updateCourseSuccess(course){
  return {type: types.UPDATE_COURSE_SUCCESS, course};
}

export function createCourseSuccess(course){
  return {type: types.CREATE_COURSE_SUCCESS, course};
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

export function saveCourse(course){
  return function(dispatch){
    return courseApi.saveCourse(course).then(savedCourse => {
      course.id ? dispatch(updateCourseSuccess(savedCourse)) : dispatch(createCourseSuccess(savedCourse));
    }).catch(error => {
      throw(error);
    });
  };
}
