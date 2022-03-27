import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';


function App() {

  return (

    <SafeAreaView>

      <View style={sytles.container} ></View>
      <View style={sytles.box_1} ></View>
      <View style={sytles.box_2} ></View>
      <View style={sytles.box_3} ></View>
      <View style={sytles.box_4} ></View>
    </SafeAreaView>

  );

}

const sytles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection : 'row',
    backgroundColor: 'Gray',
    justifyContent : 'space-between',
    alignItems : 'center'
  },
  box_1:{

    width : 100,
    height: 100,
    backgroundColor : 'blue'

  },
  box_2:{

    width : 100,
    height: 100,
    backgroundColor : 'yellow'

  },
  box_3:{

    width : 100,
    height: 100,
    backgroundColor : 'green'

  },
  box_4:{

    width : 100,
    height: 100,
    backgroundColor : 'red'

  },
});



export default App;