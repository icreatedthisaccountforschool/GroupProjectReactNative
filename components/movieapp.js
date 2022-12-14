import * as React from 'react';
import {View} from 'react-native';
import { connect} from 'react-redux';
import {} from '../redux/actions';

const movieApp = ({movie}) => {
  const handle = () => {();};
  const handle = () => {();};
  return(
    <View></View>
  );
};

const styles = StyleSheet.create(

);

const mapStateToProps = (state) => ({movie: movie.state.value});
const mapDispatchToProps = {};

export default connect(mapStateToProps,mapDispatchToProps)(movieApp);

//write the action after handle, such as handleIncrease instead of handle increase
//action goes inside the brackets with semicolon, modify as you desire
//whatever other react native components you need, you can add it in yourself
//the typical app code stuff goes between view which i'm sure you already know
