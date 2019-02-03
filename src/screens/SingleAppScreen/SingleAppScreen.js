// @flow

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Text,
  Alert
} from 'react-native';
import { Navigation } from 'react-native-navigation';
import { get } from 'lodash';

import { pushTutorialScreen } from 'AppNavigator';
import { connectData } from 'AppRedux';
import { Question, Answer } from 'AppComponents';
const styles = StyleSheet.create({
  flex: {
    flex: 1,
    justifyContent: 'flex-start'
  }
});

class SingleAppScreen extends PureComponent {

  constructor(props) {
    super(props);

    Navigation.events().bindComponent(this);
  }

  navigationButtonPressed({ buttonId }) {
    const { data } = this.props;

    switch (buttonId) {
      case 'nav_logout_btn': {
        pushTutorialScreen();
        break;
      }
      case 'nav_user_btn': {
        Alert.alert(get(data, 'user.name', 'Unknown User'));
        break;
      }
      default:
        break;
    }
  }

  componentDidMount(){
    const { getNextQuestion, data } = this.props;
    if (!data.nextQuestion)
      getNextQuestion(data.user.id);
  }
  render() {
    const {nextQuestion} = this.props.data;
    if (!nextQuestion)
      return (
        <View style={{flex:1, justifyContent: "center", alignItems: "center"}}>
          <Text style={{ fontSize: 24}}>
            Loading..
          </Text>
      </View>
      );
    return (
      <View style={styles.flex}>
        <Question {...nextQuestion}/>
        <Answer {...nextQuestion} />
      </View>
    );
  }
}

SingleAppScreen.propTypes = {
  data: PropTypes.shape({}).isRequired,
  getNextQuestion: PropTypes.func.isRequired
};
export default connectData()(SingleAppScreen);
