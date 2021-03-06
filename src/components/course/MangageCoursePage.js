import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';

class ManageCoursePage extends React.Component{
  constructor(props, context){
    super(props,context);

    this.state = {
      course: Object.assign({},this.props.initialCourse),
      errors: {}
    };

    this.updateCourseState = this.updateCourseState.bind(this);
  }

  updateCourseState(event){
      const field = event.target.name;
      let course = this.state.course;
      course[field] = event.target.value;
      return this.setState({course: course});
  }

  render(){
    return (
        <CourseForm
          allAuthors={this.props.initialAuthors}
          onChange={this.updateCourseState}
          course={this.state.course}
          errors={this.state.errors}
        />
    );
  }
}

ManageCoursePage.propTypes = {
  initialCourse: PropTypes.object.isRequired,
  initialAuthors: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps){
  let blankCourse = {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''};

  const authorsFormattedForDropdown = state.authorReducer.map(author => {
      return {
        value: author.id,
        text: author.firstName + ' ' + author.lastName
      };
  });

  return {
    initialCourse: blankCourse,
    initialAuthors: authorsFormattedForDropdown
  };
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
