import React from 'react';
import {StyleSheet, ScrollView, Text, View, Dimensions} from 'react-native';
export default function List({ayat, arti, title, key}) {
  return (
    <View>
      <Text style={styles.title_name}>{title}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.content}>
          <Text style={styles.title}>{ayat}</Text>
          <Text style={styles.title_arti}>{arti}</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: 'black',
    width: Dimensions.get('window').width,
    fontFamily: 'Nunito-ExtraLight',
    paddingRight: 30,
    paddingLeft: 30,
    backgroundColor: '#EDFCFD',
    paddingTop: 10,
    paddingBottom: 10,
    marginRight: 10,
  },
  title_arti: {
    fontSize: 15,
    padding: 10,
    color: 'black',
    width: Dimensions.get('window').width,
    fontFamily: 'Nunito-Light',
  },
  title_name: {
    fontSize: 16,
    color: '#EDFCFD',
    padding: 5,
    paddingLeft: 10,
    backgroundColor: '#0BCAD4',
    textAlign: 'left',
    fontFamily: 'Nunito-Light',
  },
  content: {
    flexDirection: 'row',
  },
});