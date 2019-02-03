import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
} from 'react-native';

export const Answer = ({answer}) => (
  <View style={{margin: 24, flex: 1, justifyContent: 'flex-start' , alignItems: 'center'}}>
    <Text style={{ fontSize: 24, fontWeight: 'bold'}}>
      Answer
    </Text>
    <Text style={{ fontSize: 18, marginTop: 12}}>
      {answer}
    </Text>
  </View>
);

Answer.propTypes = {
  answer: PropTypes.string.isRequired
};