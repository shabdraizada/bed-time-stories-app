import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
export default function appHeader(){<Text style={styles.instructions}> Bedtime Stories App</Text>}

export default function UselessTextInputMultiline() {
  const [value, onChangeText] = React.useState('Type yor story here');
  return (
    <View
      style={{
        backgroundColor: value,
        borderBottomColor: '#000000',
        borderBottomWidth: 1,
      }}>
      <UselessTextInput
        multiline
        numberOfLines={4}
        onChangeText={text => onChangeText(text)}
        value={value}
      />
    </View>
  );
}
function UselessTextInput(props) {
  return (
    <TextInput
      {...props} 
      editable
      maxLength={40}
    />
  );
}


export default function app(){
  <View>
  <TouchableOpacity
style={{ backgroundColor: 'red' }}>
<Text style={{ fontSize: 20, color: '#fff' }}>Submit your story </Text>
</TouchableOpacity>
</View>
}

const styles = StyleSheet.create({
  instructions: {
    color: '#FDFDFD',
  marginHorizontal: 15,
    marginBottom: 10,
    marginLeft: 10,
    marginEnd:15,
    padding: 22,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
     backgroundColor: 'black',
  }
})