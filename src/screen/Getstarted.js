import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity, Animated, PanResponder, } from 'react-native'
import React, { useRef, useState } from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { ScreenStackHeaderSearchBarView } from 'react-native-screens';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import AntDesign from 'react-native-vector-icons/AntDesign'

export default function Getstarted() {
  const iconRef = useRef(null);
  const [iconCoordinates, setIconCoordinates] = useState({ x: '', y: '' });
  const handleLayout = () => {
    iconRef.current.measure((x, y, width, height, pageX, pageY) => {
      setIconCoordinates({ x: pageX, y: pageY });
      console.log('Icon Coordinates:', { x: pageX, y: pageY });
    });
  };
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (e, gesture) => {
        const { width, height } = StyleSheet.flatten(styles.draggableContainer);
        const containerWidth = width - 130; // Adjust this based on the width of the draggable view
        const containerHeight = height - 60; // Adjust this based on the height of the draggable view

        let newX = gesture.dx;
        let newY = gesture.dy;

        // Limit movement within container boundaries
        if (newX < 0) {
          newX = 0;
        } else if (newX > containerWidth) {
          newX = containerWidth;
        }
        if (newY < 0) {
          newY = 0;
        } else if (newY > containerHeight) {
          newY = containerHeight;
        }

        pan.setValue({ x: newX, y: newY });
      },
      onPanResponderRelease: (e, gesture) => {

        const releaseX = gesture.moveX;
        const releaseY = gesture.moveY;
        if (releaseX >= 260) {

          console.log('releasex', releaseX)
          // navigation.navigate('login')
        }
        console.log('coordinates', iconCoordinates)

        Animated.spring(pan, { toValue: { x: 0, y: 0 }, useNativeDriver: false }).start();
      },
    })
  ).current;

  return (
    <LinearGradient colors={['#3a3837', '#1d1d1f', 'black']} style={styles.linearGradient}>



      <View>

        <View style={{ flexDirection: 'row', justifyContent: 'center', paddingHorizontal: 20, marginTop: 40 }}>

          <Text style={{ fontSize: 40, color: "white", fontFamily: "Poppins-Italic", }}>Enjoy Your </Text>

          <Text style={{ fontSize: 40, color: "#b57746", fontFamily: "Poppins-BlackItalic" }}>Music</Text>

        </View>
        <View style={{ alignItems: 'center', }}>

          <Text style={{ fontSize: 30, color: 'white', fontFamily: "Poppins-Italic" }}>Time With Clasical </Text>
          <Text style={{ fontSize: 40, color: "#b57746", justifyContent: 'center', fontFamily: "Poppins-BlackItalic" }}>Sound </Text>
        </View>
        <View style={{ marginTop: 50, justifyContent: 'center', alignItems: 'center' }}>



          <Image source={require("../assest/images/anime.png")}
            style={{ height: 350, width: 350 }}

          ></Image>


        </View>
        <View style={{ backgroundColor: '#FFFFFF', alignSelf: 'center', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: 60, width: 300, marginTop: 30, borderRadius: 30, }}>

          <Animated.View
            {...panResponder.panHandlers}
            style={[
              styles.draggableItem,
              {
                transform: [{ translateX: pan.x }, { translateY: pan.y }],
                backgroundColor: '#b57746', width: 145, zIndex: 20, height: 60, borderRadius: 30, alignItems: 'center', justifyContent: 'center'
              },
            ]}
          >
            <Text style={{ color: 'white', fontSize: 15, fontFamily: "Poppins-Regular" }}>GET STARTED</Text>
          </Animated.View>

          <TouchableOpacity
            ref={iconRef}
            // onPress={() => navigation.navigate('login')}
            onLayout={handleLayout}
            style={{ backgroundColor: '#b57746', zIndex: 10, width: 60, height: 60, alignItems: 'center', justifyContent: 'center', borderRadius: 30 }}
          >
            <AntDesign color='white' name='right' size={20} />
          </TouchableOpacity>
        </View>
      </View>

    </LinearGradient>


  )
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Background color
  },
  // container2: {
  //     transform: [{ translateX: pan.x }, { translateY: pan.y }],
  // },
  image: {
    width: '80%',
    height: 250,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#333', // Title text color
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 30,
    textAlign: 'center',
    color: '#666', // Subtitle text color
  },
  button: {
    backgroundColor: '#007bff', // Button background color
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff', // Button text color
  },
  draggableContainer: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    borderRadius: 28,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    width: 300,
    marginTop: 20,
  },
  draggableItem: {
    backgroundColor: '#171E5B',
    width: 130,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
})