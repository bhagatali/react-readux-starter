import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';

class CoursesPage extends React.Component {
  constructor(props,context){
    super(props,context);

    // this.state = {
    //   course: {title : ""}
    // };

    //Beacuse ES6 does not auto bind, we need to bind the this
    //of onTitleChange and onClickSave to the this of the component.
    //The 2 lines below does that for us. Without these two lines,
    //the app will not work. We will see a "Cannot read property state
    //of undefined ". This is because the this.state.course in the onTitleChange
    //is not bound to the this of the component. It is only bound to the this
    //of the caller which is onChange event in the input tag.

    //The bind can be done in the render function as well but it is
    //recommended to do the bind in the constructor because doing a
    //bind in the render leads to performance issues.

    // this.onTitleChange = this.onTitleChange.bind(this);
    // this.onClickSave = this.onClickSave.bind(this);
  }

  // onTitleChange(event){
  //   const course = this.state.course;
  //   course.title = event.target.value;
  //   this.setState({course: course});
  // }
  //
  // onClickSave(){
  //   this.props.actions.createCourse(this.state.course);
  // }

  courseRow(course,index){
    return <div key={index}>{course.title}</div>;
  }

  render(){
    //Destructuring to keep things clean.
    const {courseProp} = this.props;

    //  {this.props.courseProp.map(this.courseRow)}
    return(
      <div>
        <h1>Courses</h1>
        <CourseList courses={courseProp}/>
      </div>
    );
  }
}

// CoursesPage.propTypes = {
//   courseProp: PropTypes.arr.isRequired,
//   actions: PropTypes.object.isRequired
// };

function mapStateToProps(state, ownProps){
  return {
    courseProp: state.courseReducer
  };
}

function mapDispatchToProps(dispatch){
  return {
    //dispatch() sets up the flow through redux. If the createCourse() call was
    // not wrapped in the dispatch call, the redux flow will never execute.
    //Instead the createCourse would return the object that is defined in the
    // courseActions.js file.

    //createCourse: course => dispatch(courseActions.createCourse(course))

    actions: bindActionCreators(courseActions,dispatch)
  };
}

//the ()() means that the connect() returns a function which is then used
// to wrap the CoursesPage.

// const connectedStateAndProps = connect(mapStateToProps,mapDispatchToProps);
// export defaule connectedStateAndProps(CoursesPage);

export default connect(mapStateToProps,mapDispatchToProps)(CoursesPage);
