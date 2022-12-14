import {} from "../actionTypes";

const initialState = {
  value: 0
};

export default function(state = initialState, action) {
  switch (action.type) {
    case :{
      const { } = action.payload;
      return {
        ..state,
        value: state.value 
      };
    }
    case :{
      const { } = action.payload;
      return {
        ..state,
        value: state.value
      };
    }
    default:
      return state;
  }
}

//the value variable can be renamed but must match what is in actions, see slides for details
//actionType variables go to where case is, after const you put variable preceding value
//this is probably the most or second hardest part of Redux, so feel free to get help online
