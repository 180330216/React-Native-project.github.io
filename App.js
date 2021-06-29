import React, { Component ,animatedStyle,image} from 'react';
import { Button, Text, View,AppRegistry,Image,StyleSheet, Animated, Easing,ScrollView,TouchableOpacity,ImageBackground,Linking} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';




function SettingsScreen({ navigation }) {
  return (
    
    <View style={{ flex: 1000, justifyContent: 'right', alignItems: 'right' }}>
      <Text>Settings!</Text>
      
      <Button title="Go to Home" onPress={() => navigation.navigate('WELCOME TO LANGUAGE LEARNER APP')} />
    </View>
    
  );
}
 function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1000, justifyContent: 'right', alignItems: 'right' }}>
      <Text>WELCOME TO LANGUAGE LEARNER APP</Text>
      <Button
        title="REGISTRATION PROCESS"
        onPress={() => navigation.navigate('SELECT A LANGUAGE')}
      />
      <Button
        title="ABOUT THE APP"
        onPress={() => navigation.navigate('BASIC DETAILS')}
      />
    </View>
  );
}

function Ccourse({ navigation }) {
  return (
    <View style={{ flex: 1000, justifyContent: 'right', alignItems: 'right' }}>
    <ScrollView >
      <Text>C LANGUAGE</Text>
      <Button
        title="basic Information"
         onPress={ ()=> Linking.openURL('https://www.programiz.com/c-programming') } /> 
      />
      <Button
        title=" C COMPILER"
         onPress={ ()=> Linking.openURL('https://www.programiz.com/c-programming/online-compiler/') } /> 
      />
      <Button
        title="GO BACK TO MAIN SCREEN"
        onPress={() => navigation.navigate('WELCOME TO LANGUAGE LEARNER APP')}
      />
      </ScrollView >
    </View>
  );
}

function Pythoncourse({ navigation }) {
  return (
    <View style={{ flex: 1000, justifyContent: 'right', alignItems: 'right' }}>
    <ScrollView >
      <Text>PYTHON LANGUAGE</Text>
      <Button
        title="basic Information"
         onPress={ ()=> Linking.openURL('https://www.geeksforgeeks.org/python-programming-language/#:~:text=Python%20allows%20programming%20in%20Object,them%20readable%20all%20the%20time.') } /> 
      />
      <Button
        title="PYTHON COMILER"
         onPress={ ()=> Linking.openURL('https://www.programiz.com/python-programming/online-compiler/') } /> 
      />
      <Button
        title="GO BACK TO MAIN SCREEN"
        onPress={() => navigation.navigate('WELCOME TO LANGUAGE LEARNER APP')}
      />
      </ScrollView >
    </View>
  );
}
function Javacourse({ navigation }) {
  return (
    <View style={{ flex: 1000, justifyContent: 'right', alignItems: 'right' }}>
    <ScrollView >
      <Text>JAVA LANGUAGE</Text>
      <Button
        title="basic Information"
         onPress={ ()=> Linking.openURL('https://www.tutorialspoint.com/java/java_basic_syntax.htm') } /> 
      />
      <Button
        title="JAVA COMPILER"
         onPress={ ()=> Linking.openURL('https://www.onlinegdb.com/online_java_compiler') } /> 
      />
      <Button
        title="GO BACK TO MAIN SCREEN"
        onPress={() => navigation.navigate('WELCOME TO LANGUAGE LEARNER APP')}
      />
      </ScrollView >
    </View>
  );
}
function Javascriptcourse({ navigation }) {
  return (
    <View style={{ flex: 1000, justifyContent: 'right', alignItems: 'right' }}>
    <ScrollView >

      <Text>JAVASCRIPT LANGUAGE</Text>
      <Button
        title="basic Information"
         onPress={ ()=> Linking.openURL('https://www.geeksforgeeks.org/introduction-to-javascript/') } /> 
      />
      <Button
        title="JAVASCRIPT COMPILER"
         onPress={ ()=> Linking.openURL('https://www.tutorialspoint.com/online_javascript_editor.php') } /> 
      />
      <Button
        title="GO BACK TO MAIN SCREEN"
        onPress={() => navigation.navigate('WELCOME TO LANGUAGE LEARNER APP')}
      />
      </ScrollView >
    </View>
  );
}

function Matlabcourse({ navigation }) {
  return (
    <View style={{ flex: 1000, justifyContent: 'right', alignItems: 'right' }}>
    <ScrollView >
      <Text>MATLAB LANGUAGE</Text>
      <Button
        title="basic Information"
         onPress={ ()=> Linking.openURL('https://www.tutorialspoint.com/matlab/index.htm') } /> 
      />
      <Button
        title="GO BACK TO MAIN SCREEN"
        onPress={() => navigation.navigate('WELCOME TO LANGUAGE LEARNER APP')}
      />
      </ScrollView >
    </View>
  );
}

function Cythoncourse({ navigation }) {
  return (
    <View style={{ flex: 1000, justifyContent: 'right', alignItems: 'right' }}>
    <ScrollView >
      <Text>CYTHON LANGUAGE</Text>
      <Button
        title="basic Information"
         onPress={ ()=> Linking.openURL('http://okigiveup.net/an-introduction-to-cython/') } /> 
      />
      
      <Button
        title="GO BACK TO MAIN SCREEN"
        onPress={() => navigation.navigate('WELCOME TO LANGUAGE LEARNER APP')}
      />
      </ScrollView >
    </View>
  );
}
function Cpluspluscourse({ navigation }) {
  return (
    <View style={{ flex: 1000, justifyContent: 'right', alignItems: 'right' }}>
    <ScrollView >
      <Text>C++ LANGUAGE</Text>
      <Button
        title="basic Information"
         onPress={ ()=> Linking.openURL('https://www.tutorialspoint.com/cplusplus/index.htm') } /> 
      />
       <Button
        title="C++ COMPILER"
         onPress={ ()=> Linking.openURL('https://www.onlinegdb.com/online_c++_compiler') } /> 
      />
      <Button
        title="GO BACK TO MAIN SCREEN"
        onPress={() => navigation.navigate('WELCOME TO LANGUAGE LEARNER APP')}
      />
      </ScrollView >
    </View>
  );
}

function Htmlcourse({ navigation }) {
  return (
    <View style={{ flex: 1000, justifyContent: 'right', alignItems: 'right' }}>
    <ScrollView >
      <Text>HTML LANGUAGE</Text>
      <Button
        title="basic Information"
         onPress={ ()=> Linking.openURL('https://www.w3schools.com/html/html_basic.asp') } /> 
      />
      <Button
        title="HTML COMPILER"
         onPress={ ()=> Linking.openURL('https://www.tutorialspoint.com/online_html_editor.php')} /> 
      />
      <Button
        title="GO BACK TO MAIN SCREEN"
        onPress={() => navigation.navigate('WELCOME TO LANGUAGE LEARNER APP')}
      />
      </ScrollView >
    </View>
  );
}
function Csscourse({ navigation }) {
  return (
    <View style={{ flex: 1000, justifyContent: 'right', alignItems: 'right' }}>

    <ScrollView >

      <Text>CSS LANGUAGE</Text>
      <Button
        title="basic Information"
         onPress={ ()=> Linking.openURL('https://www.w3schools.com/css/css_intro.asp') } /> 
      />
      <Button
        title="CSS COMPILER"
         onPress={ ()=> Linking.openURL('https://www.tutorialspoint.com/online_css_editor.php') } /> 
      />
      <Button
        title="GO BACK TO MAIN SCREEN"
        onPress={() => navigation.navigate('WELCOME TO LANGUAGE LEARNER APP')}
      />
      </ScrollView >
    </View>
  );
}









function Language({ navigation }) {
  return (
    <View style={{ flex: 1000, justifyContent: 'right', alignItems: 'right' }}>
      <Text>SELECT A LANGUAGE</Text>
      <Button
        title="CLICK ON ANY LANGUAGE"
        onPress={() => navigation.navigate('LANGUAGE SELECTION')}
      />
      <Button
        title="GO BACK TO MAIN SCREEN"
        onPress={() => navigation.navigate('WELCOME TO LANGUAGE LEARNER APP')}
      />
    </View>
  );
}

function Details({ navigation }) {
  return (
    <View style={{ flex: 1000, justifyContent: 'right', alignItems: 'right' }}>
      <Text>BASIC DETAILS</Text>
      This app has salient features. Here A person can Learn new Programming Languages and also Explore many new things. Here we can able to compile and Run our Programs also. This app has 2 things in it.We can Learn the basics and we can Run our programs
      
      <Button
        title="GO BACK TO MAIN SCREEN"
        onPress={() => navigation.navigate('WELCOME TO LANGUAGE LEARNER APP')}
      />
      
    </View>
  );
}
function PROGRAMMING({ navigation }) {
  return (
    <View style={{ flex: 100, justifyContent: 'right', alignItems: 'left' }}>
     
        <ScrollView >  
                 
                
                <Text style={{fontSize:20}}>Press below button for C Language</Text>  
                 <Button
        title="C"
                 onPress={() => navigation.navigate('C LANGAUGE')}
                 />
                <Text style={{fontSize:20}}>Press below button for Python Language</Text>  
                 <Button
        title="PYTHON"
                 onPress={() => navigation.navigate('PYTHON LANGAUGE')}
                 />
                <Text style={{fontSize:20}}>Press below button for Java Language</Text>  
                <Button
        title="JAVA"
                 onPress={() => navigation.navigate('JAVA LANGAUGE')}
                 />  
                <Text style={{fontSize:20}}>Press below button for C++ Language</Text>
                 <Button
        title="C++"
                 onPress={() => navigation.navigate('C++ LANGAUGE')}
                 />
                <Text style={{fontSize:20}}>Press below button for HTML Language</Text>  
                                 <Button
        title="HTML"
                 onPress={() => navigation.navigate('HTML LANGAUGE')}
                 /> 
                <Text style={{fontSize:20}}>Press below button for CSS Language</Text>  
                 <Button
        title="CSS"
                 onPress={() => navigation.navigate('CSS LANGAUGE')}
                 />
                <Text style={{fontSize:20}}>Press below button for JavaScript Language</Text>  
                <Button
        title="JAVASCRIPT"
                 onPress={() => navigation.navigate('JAVASCRIPT LANGAUGE')}
                 />
                <Text style={{fontSize:20}}>Press below button for Matlab PROGRAMMING Language</Text>  
                <Button
        title="MATLAB"
                 onPress={() => navigation.navigate('MATLAB LANGAUGE')}
                 />
                <Text style={{fontSize:20}}>Press below button for Cython PROGRAMMING Language</Text>  
              <Button
        title="CYTHON"
                 onPress={() => navigation.navigate('CYTHON LANGAUGE')}
                 />
            
            
            <Button
        title="GO BACK TO MAIN SCREEN"
        onPress={() => navigation.navigate('WELCOME TO LANGUAGE LEARNER APP')}
      />
                 <Button
        title="GO BACK"
        onPress={() => navigation.navigate('SELECT A LANGUAGE')}
      />

            </ScrollView>  
      
    </View>



  );
}





const Tab = createBottomTabNavigator();

export default class DisplayAnImage extends Component 
  {
     





     onPressButton() {  
        alert('You clicked the button!')  
    }  
      
    constructor () {  
        super()  
        this.animatedValue = new Animated.Value(0)  
    }  
    componentDidMount () {  
        this.animate()  
    }//animate method is call from componentDidMount  
    animate () {  
        this.animatedValue.setValue(0)  
        Animated.timing(  
            this.animatedValue,  
            {  
                toValue: 1,  
                duration: 2000,  
                easing: Easing.linear  
            }  
        ).start(() => this.animate())  
    }  
  
    render() {  
        const marginLeft = this.animatedValue.interpolate({  
            inputRange: [0, 1],  
            outputRange: [0, 3000]  
        })  
        const opacity = this.animatedValue.interpolate({  
            inputRange: [0, 0.5, 1],  
            outputRange: [0, 1, 0]  
        })  
        const movingMargin = this.animatedValue.interpolate({  
            inputRange: [0, 0.5, 1],  
            outputRange: [0, 300, 0]  
        })  
        const textSize = this.animatedValue.interpolate({  
            inputRange: [0, 0.5, 1],  
            outputRange: [18, 32, 18]  
        })  
        const rotateX = this.animatedValue.interpolate({  
            inputRange: [0, 0.5, 1],  
            outputRange: ['0deg', '180deg', '0deg']  
        })  
return(
   <View style={styles.container}>  
   	                <View style={styles.powderblue} />  
	                <View style={styles.skyblue} />  
              <View style={styles.steelblue} />  

                <Animated.View //returns Animated.View  
                    style={{  
                        marginLeft,  
                        height: 30,  
                        width: 40,  
                        backgroundColor: 'red'}} />  
                <Animated.View  
                    style={{  
                        opacity,  
                        marginTop: 10,  
                        height: 30,  
                        width: 40,  
                        backgroundColor: 'blue'}} />  
                <Animated.View  
                    style={{  
                        marginLeft: movingMargin,  
                        marginTop: 10,  
                        height: 30,  
                        width: 40,  
                        backgroundColor: 'orange'}} />  
                <Animated.Text // returns Animated.Text  
                    style={{  
                        fontSize: textSize,  
                        marginTop: 10,  
                        color: 'green'}} >  
                    LANGUAGE  LEARNER 
                </Animated.Text>  
                <Animated.View   
                    style={{  
                        transform: [{rotateX}],  
                        marginTop: 30,  
                        height: 100,  
                        width: 70,  
                        backgroundColor: 'black'}}>  
                    <Text style={{color: 'white'}}>A PLACE WHERE YOU CAN EXPLORE YOURSELF</Text>  
                </Animated.View>  
                  <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="WELCOME TO LANGUAGE LEARNER APP" component={HomeScreen} />
        <Tab.Screen name="SELECT A LANGUAGE" component={Language} />
        <Tab.Screen name="LANGUAGE SELECTION" component={PROGRAMMING} />
        <Tab.Screen name="BASIC DETAILS" component={Details}/>
        <Tab.Screen name="C LANGAUGE" component={Ccourse}/>
        <Tab.Screen name="PYTHON LANGAUGE" component={Pythoncourse}/>
         <Tab.Screen name="JAVA LANGAUGE" component={Javacourse}/>
          <Tab.Screen name="JAVASCRIPT LANGAUGE" component={Javascriptcourse}/>
           <Tab.Screen name="MATLAB LANGAUGE" component={Matlabcourse}/>
 <Tab.Screen name="CYTHON LANGAUGE" component={Cythoncourse}/>
 <Tab.Screen name="C++ LANGAUGE" component={Cpluspluscourse}/>
 <Tab.Screen name="HTML LANGAUGE" component={Htmlcourse}/>
 <Tab.Screen name="CSS LANGAUGE" component={Csscourse}/>
 





        

      </Tab.Navigator>
    </NavigationContainer>
        <TouchableOpacity style = {styles.container} onPress = {this.animatedBox}>
            <Animated.View style = {[styles.box, animatedStyle]}/>
         </TouchableOpacity>
         
         
            </View>  
        
     

  );
}
}

const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
        paddingTop: 1
         },
         
powderblue:{  
           height: 50, backgroundColor: 'black'  
	    },  
	    skyblue:{  
	         height: 50, backgroundColor: 'red'  
	    },  
	    steelblue:{  
	        height: 50, backgroundColor: 'green'  
	    },  
     

    
  
})   
// skip this line if you are using Create React Native App  
AppRegistry.registerComponent('DisplayAnImage', () => DisplayAnImage);