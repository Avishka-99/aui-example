import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { PortalProvider } from '@avi99/aui/src';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import ButtonPage from './src/Button';
import BottomSheetPage from './src/BottomSheet';
import LoaderPage from './src/LoaderPage';
import ProgressBarPage from './src/ProgressBarPage';
import OtpInputPage from './src/OtpInputPage';
import SeperatorPage from './src/SeperatorPage';
import SwitchPage from './src/SwitchPage';
import TextInputPage from './src/TextInputPage';
import Main from './src/Main';
function App() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
      initialRouteName='Main'

    >
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Button" component={ButtonPage} />
      <Stack.Screen name="Bottomsheet" component={BottomSheetPage} />
      <Stack.Screen name='Loaders' component={LoaderPage} />
      <Stack.Screen name='OtpInput' component={OtpInputPage} />
      <Stack.Screen name='ProgressBar' component={ProgressBarPage} />
      <Stack.Screen name='Seperator' component={SeperatorPage} />
      <Stack.Screen name='Switch' component={SwitchPage} />
      <Stack.Screen name='TextInput' component={TextInputPage} />
    </Stack.Navigator>
  );
}
const AppWrapper = () => {
  return (
    <PortalProvider>
      <StatusBar style='dark' />
      <NavigationContainer>
        <App />
      </NavigationContainer>

    </PortalProvider>
  )
}
export default AppWrapper;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
