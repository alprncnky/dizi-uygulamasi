import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from '../icons';
import translations from '../../resources/translations';

const icons = [
    "md-home",
    "ios-search",
    "md-person"
]

class TabBar extends React.Component {
    render() {
        var isFocused = this.props.state.index;
        return(
            <View style={{ height: 52 }}>
                <View style={styles.container}>
                    {this.props.state.routes.map((item, index) => 
                        <TouchableOpacity key={item.key} onPress={() => this.props.navigation.navigate(item.name)} style={styles.iconContainer}>
                            <Icon.Ionicons name={icons[index]} size={28} color={isFocused === index ? 'white' : '#b3b3b3'} />
                            <Text style={[styles.iconText, { color: isFocused === index ? 'white' : '#b3b3b3'}]}>{translations[item.name.toUpperCase()]}</Text>
                        </TouchableOpacity>
                    )}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#272A29', 
        flex: 1, 
        flexDirection: 'row', 
        justifyContent: 'space-around'
    },
    iconContainer: {
        width: 50 , 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    iconText: {
        fontSize: 10, 
        fontWeight: '700',
        fontFamily: 'Poppins-Regular'
    }
})

export default TabBar;