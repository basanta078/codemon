import { Navigation } from 'react-native-navigation';
import { pushSingleScreenApp } from 'AppNavigator';

Navigation.events().registerAppLaunchedListener(() => pushSingleScreenApp());
