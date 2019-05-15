import React from 'react';
import { Alert, StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
        <View style={styles.container}>
            <Text>this app is your app!</Text>
            <Text>This app is my app!</Text>
            <Button
                onPress={() => {
                    Alert.alert('Fine!');
                }}
                title="Nope"
            />
            <Button
                onPress={() => {
                    Alert.alert('Okay!');
                }}
                title="Yes"
            />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
