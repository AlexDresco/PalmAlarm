import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableHighlight} from 'react-native';
import { AppLoading, Font } from 'expo';


class HomeScreen extends React.Component {

  static navigationOptions = {
    header: null,
    };

  state = {
    loaded: false,
  }

  componentWillMount() {
    this._loadFontsAsync();
  }
   _loadFontsAsync = async () => {
    await Font.loadAsync({'argana': require('../assets/fonts/Argana.ttf')});
    this.setState({loaded: true});
  }

  render() {
    if (!this.state.loaded) {
      return <AppLoading />;
    }
    return (
      <View style={styles.container}>
        <ImageBackground
            source={require('../assets/images/homeBackground.jpg')}
            style={styles.container}
            >

              <View style={styles.headerContainer}>
                <Text style={styles.text}>PalmAlarm</Text>
              </View>

              <View style={styles.buttonContainer}>
              <TouchableHighlight
                onPress={() => this.props.navigation.navigate('InputScreen')}>
                <Text style={styles.buttonText}>Scan</Text>
                </TouchableHighlight>
              </View>
              
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'stretch',
    justifyContent: 'space-evenly',
  },
  headerContainer: {
    alignItems: 'center',
    // marginTop: '38%',
  },
  text: {
    fontFamily: 'argana',
    fontSize: 65,
    color: 'gray'
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    // marginBottom: 150,
    borderRadius: 10,
  },
  buttonText: {
    backgroundColor: "white",
    // width: '60%',
    // height: 55,
    
  }
});

export default HomeScreen;
