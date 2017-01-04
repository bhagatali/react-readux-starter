export default function courseReducer(state = [], action){
  switch (action.type) {
    case 'CREATE_COURSE':
        // The spread operator creates an inline spread of the state array
        // i.e. the ... takes the state array passed in and creates an inline
        // spread here in this new array. To this, we then add the Object.assign
        // and add the action.course that is passed in.

        //This syntax from ES6 is very useful to create a new array and add a new
        //value to it.
        return [...state,
            Object.assign({},action.course)
        ];
    default:
        return state;
  }
}
