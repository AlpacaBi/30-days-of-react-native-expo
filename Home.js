import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

function Home({navigation, days}) {
  return (
    <View style={styles.container}>
      <View>
        <FlatList 
            data={days}
            keyExtractor={item => item.key}
            renderItem={({item}) => (
                <TouchableOpacity onPress={()=>navigation.push(item.route)}>
                  <Text style={styles.item}>{item.title}</Text>
                </TouchableOpacity>
            )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 40
  },
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
    fontSize: 16
  },
});

export default Home