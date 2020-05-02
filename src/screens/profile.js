import React, {useContext} from 'react';
import {
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity
} from 'react-native';
import Icon from './icons';
import {LocalizationContext} from '../resources/localizationContext';
import translations from '../resources/translations';

const Profile = (props) => {

  const { setAppLanguage } = useContext(LocalizationContext);

  const onClickSelectLanguage = () => {
    setAppLanguage('tr');
  }

  return (
    <>
      <StatusBar backgroundColor={"black"} barStyle="light-content" />

      <View style={{ flex: 1, backgroundColor: 'black' }} >
        
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ color: 'white', fontSize: 32, fontFamily: 'Poppins-SemiBold' }}>{translations.PROFILE}</Text>
        </View>
        {/* PROFILE */}
        <View style={{ flexDirection: 'row', marginVertical: 10 }}>
            <View style={{ flex: 2, backgroundColor: 'black', marginTop: 10, paddingHorizontal: 10 }}>
              <Text style={{ color: 'white', fontSize: 18, fontFamily: 'Poppins-Medium' }}>{translations.R_USERNAME}</Text>
              <View style={{ borderWidth: 1, backgroundColor: '#444444', borderRadius: 4, paddingHorizontal: 10 }}>
                <Text style={{ color: 'white', fontSize: 15, fontFamily: 'Poppins-Light' }}>stark23_2</Text>
              </View>
              <Text style={{ color: 'white', fontSize: 18, fontFamily: 'Poppins-Medium', marginTop: 8 }}>{translations.R_EMAIL}</Text>
              <View style={{ borderWidth: 1, backgroundColor: '#444444', borderRadius: 4, paddingHorizontal: 10 }}>
                <Text style={{ color: 'white', fontSize: 15, fontFamily: 'Poppins-Light' }}>stark-mrfds@gmail.com</Text>
              </View>
            </View>
            <View style={{ flex: 1, alignItems: 'center' }}>
              <View style={{ backgroundColor: 'grey', marginTop: 10, width: 120, height: 120, borderRadius: 100 }}>
              </View>
              <View style={{ borderRadius: 16, borderWidth: 1, borderColor: 'grey', paddingHorizontal: 16, paddingTop: 2, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 8 }}>
                <Text style={{ color: 'white', fontSize: 13, fontFamily: 'Poppins-Regular' }}>{translations.R_EDIT} </Text>
                <Icon.MaterialCommunityIcons name="pencil" size={14} style={{ color: 'white', paddingBottom: 4 }} />
              </View>
            </View>
        </View>

        <View style={{ backgroundColor: '#444444', height: 1, marginHorizontal: 10 }}></View>

        {/* INFO FIELD */}
        <View style={{ marginHorizontal: 10, marginVertical: 10 }}>
          <Text style={{ fontSize: 26, color: 'white', fontFamily: 'Poppins-Medium' }}>{translations.R_YOUR_STATS}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ backgroundColor: '#29b6f6', borderRadius: 100, width: 6, height: 6 }}></View>
            <Text style={{ fontSize: 15, color: 'white', marginTop: 3, marginLeft: 5, fontFamily: 'Poppins-Regular' }}>Comments: </Text>
            <Text style={{ fontSize: 15, color: 'white', marginTop: 3, marginLeft: 5, fontFamily: 'Poppins-Regular' }}>233</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ backgroundColor: '#8bc34a', borderRadius: 100, width: 6, height: 6 }}></View>
            <Text style={{ fontSize: 15, color: 'white', marginTop: 3, marginLeft: 5, fontFamily: 'Poppins-Regular' }}>Likes: </Text>
            <Text style={{ fontSize: 15, color: 'white', marginTop: 3, marginLeft: 5, fontFamily: 'Poppins-Regular' }}>67</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ backgroundColor: '#d32f2f', borderRadius: 100, width: 6, height: 6 }}></View>
            <Text style={{ fontSize: 15, color: 'white', marginTop: 3, marginLeft: 5, fontFamily: 'Poppins-Regular' }}>Dislike: </Text>
            <Text style={{ fontSize: 15, color: 'white', marginTop: 3, marginLeft: 5, fontFamily: 'Poppins-Regular' }}>25</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ backgroundColor: '#cddc39', borderRadius: 100, width: 6, height: 6 }}></View>
            <Text style={{ fontSize: 15, color: 'white', marginTop: 3, marginLeft: 5, fontFamily: 'Poppins-Regular' }}>Favorites: </Text>
            <Text style={{ fontSize: 15, color: 'white', marginTop: 3, marginLeft: 5, fontFamily: 'Poppins-Regular' }}>35</Text>
          </View>
        </View>

        <View style={{ backgroundColor: '#444444', height: 1, marginHorizontal: 10 }}></View>

        {/* Settings */}
        <View style={{ marginHorizontal: 10, marginVertical: 10 }}>
          <Text style={{ fontSize: 26, color: 'white', fontFamily: 'Poppins-Medium' }}>{translations.R_SETTINGS}</Text>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: 15, color: 'white', marginLeft: 5, fontFamily: 'Poppins-Regular' }}>{translations.R_SELECTED_LANGUAGE}</Text>
            <TouchableOpacity onPress={() => onClickSelectLanguage()} style={{ flexDirection: 'row', marginRight:5, marginLeft: 'auto', alignItems: 'center' }}>
              <Text style={{ fontSize: 15, color: 'white', marginLeft: 5, marginRight:1, fontFamily: 'Poppins-Regular' }}>English</Text>
              <Icon.MaterialIcons name="keyboard-arrow-down" size={20} style={{ color: 'white' }} />
            </TouchableOpacity>
          </View>
        </View>

      </View>
    </>
  );
};

export default Profile;
