import * as types from './actionTypes';

export function createCourse(course){
  // return {type: 'CREATE_COURSE', course: course};
  //In ES6 because the left hand side matches the right hande we can use
  //course only instead of course:course
  return {type: types.CREATE_COURSE, course};
}
