import React from 'react';
import { View, Text, ImageBackground, StyleSheet, SafeAreaView, StatusBar, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import MainVariables from '../main-variables.json';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class Welcome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            emailText: '',
            passwordText: '',
            e: null
        }
    }

    onChangeTextInput = (name, text) => {
        this.setState({ [name]: text })
    }

    render() {
        return(
            <SafeAreaView style={{ flex: 1 }}>
                <StatusBar translucent backgroundColor="transparent" />

                <View style={styles.container}>
                    <ImageBackground source={require('../../assets/images/welcome-background.jpg')} style={styles.image} />

                    <View style={styles.contentContainer}>
                        <View style={{ flex:1, marginHorizontal:25, marginTop: 90, marginBottom: 30}}>

                            <View style={{ alignItems: 'center' }}>
                                <Text allowFontScaling={true} style={{ color: MainVariables.appMainColor, fontSize: 50, paddingHorizontal: 10, fontFamily: 'FasterOne-Regular' }}>
                                    {MainVariables.appName}
                                </Text>
                            </View>
                            <View style={{ flex: 1, marginTop: 60 }}>
                                <Text style={styles.inputTitle}>Email</Text>
                                <View style={styles.inputFieldContainer}>
                                    <TextInput value={this.state.emailText} onChangeText={text => this.onChangeTextInput('emailText', text)} style={{ color: 'white' }} />
                                </View>
                                <Text style={styles.inputTitle}>Password</Text>
                                <View style={styles.inputFieldContainer}>
                                    <TextInput value={this.state.passwordText} onChangeText={text => this.onChangeTextInput('passwordText', text)} secureTextEntry={true} style={{ color: 'white' }} />
                                </View>
                                <TouchableOpacity activeOpacity={0.8} style={styles.loginButton}>
                                    <Text style={{ fontSize: 25, fontFamily: 'Poppins-Medium', paddingVertical: 2 }}>Login</Text>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity activeOpacity={0.6} style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 'auto', marginBottom: 0 }}>
                                <Text style={{ color: 'white', fontFamily: 'Poppins-SemiBold' }}>Dont have an account? </Text>
                                <Text style={{ color: 'white', fontFamily: 'Poppins-Bold' }}> Sign Up</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: 'black'
    },
    contentContainer: {
        flex: 1,
        width: windowWidth, 
        height: windowHeight, 
        position: 'absolute', 
        opacity: 1, 
        zIndex: 2 
    },
    image: {
        width: windowWidth,
        height: windowHeight,
        resizeMode: "cover",
        justifyContent: "center",
        opacity: 0.4,
        zIndex: 1
    },
    inputTitle: {
        color: 'white', 
        fontFamily: 'Poppins-SemiBold'
    },
    inputFieldContainer: {
        borderRadius: 3, 
        marginVertical: 5, 
        backgroundColor: 'rgba(77, 77, 77, 0.9)'
    },
    loginButton: {
        backgroundColor: 'white', 
        alignItems: 'center', 
        borderRadius: 50, 
        marginTop: 10
    }
})

export default Welcome;