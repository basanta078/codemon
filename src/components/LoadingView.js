import React from 'react';

import {
  View,
  Text,
} from 'react-native';

export const LoadingView = () => (
  <View style={{flex:1, justifyContent: "center", alignItems: "center"}}>
    <Text style={{ fontSize: 24}}>
      Loading app ...
    </Text>
  </View>
);