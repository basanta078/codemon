// @flow

import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
} from 'react-native';

export const Question = ({title, question}) => (
  <View style={{margin: 24}}>
    <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
      {title}
    </Text>
    <Text style={{ fontSize: 18, marginTop: 12}}>
      {question}
    </Text>
  </View>
);

Question.propTypes = {
  title: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
};



