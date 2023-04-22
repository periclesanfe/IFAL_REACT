import React from 'react';
import { View, ScrollView, Text, StyleSheet, Image, ImageBackground, StatusBar, TouchableOpacity } from 'react-native';

class JavaScript extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
    <ScrollView style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="black" />


    </ScrollView>
    );
  };
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      height: 1000,
    },
  });

export default JavaScript;