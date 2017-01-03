import React, {PropTypes} from 'react';

class CoursesPage extends React.Component {
  constructor(props,context){
    super(props,context);

    this.state = {
      course: {title : ""}
    };

    //Beacuse ES6 does not auto bind, we need to bind the this
    //of onTitleChange and onClickSave to the this of the component.
    //The 2 lines below does that for us. Without these two lines,
    //the app will not work. We will see a "Cannot read property state
    //of undefined ". This is because the this.state.course in the onTitleChange
    //is not bound to the this of the component. It is only bound to the this
    //of the caller which is onChange event in the input tag.
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onTitleChange(event){
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({course: course});
  }

  onClickSave(){
    alert(`Saving ${this.state.course.title}`);
  }

  render(){
    return(
      <div>
        <h1>Courses</h1>
        <h2>Add Course</h2>
        <input
          type="text"
          onChange={this.onTitleChange}
          value={this.state.course.title} />
        <input
          type="submit"
          value="Save"
          onClick={this.onClickSave} />
      </div>
    );
  }
}

export default CoursesPage;
