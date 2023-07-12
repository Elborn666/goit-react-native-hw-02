import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import RegistrationScreen from './Screens/AuthPages/RegistrationScreen/RegistrationScreen';
// import LoginScreen from './Screens/AuthPages/LoginScreen/LoginScreen';
// import PostsScreen from './Screens/PostsScreen/PostsScreen';

export default function App() {
  return (
    <View style={styles.container}>
    <RegistrationScreen></RegistrationScreen>
    {/* <LoginScreen></LoginScreen> */}
    {/* <PostsScreen></PostsScreen> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
