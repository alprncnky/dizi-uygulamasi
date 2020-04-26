import React from 'react';
import { View, Text, TextInput, NativeModules, LayoutAnimation, TouchableOpacity, StatusBar, ScrollView, Image
} from 'react-native';
import Icon from './icons';

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      paddingHorizontal: 8, 
      paddingVertical: 6, 
      borderRadius: 6,
      searchTextOpacity: 1,
      searchInputOpacity: 0,
      onSearch: false,
      isPastSearchExist: true
    }
  }

  onClickSearch = () => {
    LayoutAnimation.configureNext(
      LayoutAnimation.create(
        250,
        LayoutAnimation.Types.easeInEaseOut,
        LayoutAnimation.Properties.scaleXY
      )
    );
    this.setState({ paddingHorizontal: 0, paddingVertical: 0, borderRadius: 0, searchTextOpacity: 0, onSearch: true, searchInputOpacity: 1 })
  }

  onClickBack = () => {
    LayoutAnimation.configureNext(
      LayoutAnimation.create(
        250,
        LayoutAnimation.Types.easeInEaseOut,
        LayoutAnimation.Properties.scaleXY
      )
    );
    this.setState({ paddingHorizontal: 8, paddingVertical: 6, borderRadius: 6, searchInputOpacity: 0, onSearch: false, searchTextOpacity: 1 })
  }

  onClickDeleteItem = (index) => {
    alert('Sil bunu kayıtlardan:' + index)
  }

  render() {
    const array = [1,2,3,4,5,6,7,8,9,10]
    return (
      <>
        <StatusBar backgroundColor={"black"} barStyle="light-content" />
        <View style={{ flex: 1, backgroundColor: 'black' }} >
          <ScrollView>

              <View key="search-container" style={{ backgroundColor: '#171717', height: 55, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingHorizontal: this.state.paddingHorizontal, paddingVertical: this.state.paddingVertical }}>
                <View key="search-alani" style={{ backgroundColor: '#444444', flex: 1, flexDirection: 'row', alignItems: 'center', borderRadius: this.state.borderRadius, height: '100%', width: '100%'}}>
                    
                  {!this.state.onSearch &&
                    <TouchableOpacity onPress={() => this.onClickSearch()} style={{ flex:1, alignItems: 'center', justifyContent: 'center', opacity: this.state.searchTextOpacity }}>
                      <Text style={{ fontSize: 20, color: 'white', paddingTop: 5, fontFamily: 'Poppins-SemiBold' }}>Search</Text>
                    </TouchableOpacity>
                  }
                  {this.state.onSearch &&
                    <>
                      <TouchableOpacity onPress={() => this.onClickBack()} key="iconn" style={{ flex: 1, alignItems: 'center', justifyContent: 'center', opacity: this.state.searchInputOpacity }}>
                        <Icon.Ionicons name="md-arrow-back" size={22} style={{ color:'white' }} />
                      </TouchableOpacity>
                      <View key="txt" style={{ flex: 10 }}>
                        <TextInput style={{ color: 'white', fontSize: 16, flexWrap: 'wrap', opacity: this.state.searchInputOpacity}} placeholderTextColor={'#999999'} placeholder={'Movie,Tv-shows,artists..'} />
                      </View>
                    </>
                  }
                </View>
              </View>

              {/* TODO: buraya arama sonucundan donenleri yerlestir */}

              {/* Önceden yapılmıi bir arama varsa listele burada yoksa bos alan goster */}
              {this.state.isPastSearchExist ?
                <View key="recent-search-alani">
                    <View style={{ marginHorizontal: 15, marginVertical: 10}}>
                      <Text style={{ fontSize: 18, fontFamily: 'Poppins-Medium', color:'white' }}>Recent searches</Text>
                    </View>
                    <View style={{ marginHorizontal: 15 }}>
                        {array.map((item, index) => 
                          <View key={item} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10, height: 70 }}>
                            <Image style={{ width: 54, height: 70 }} source={{ uri: 'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg' }} />
                            <Text style={{ color: 'white', fontSize: 16, marginHorizontal: 10 }}>The Avengers</Text>
                            <Icon.Ionicons onPress={() => this.onClickDeleteItem(index)} name="md-close" size={32} style={{ color: '#666666', marginRight: 10, marginLeft: 'auto' }}  />
                          </View>
                        )}
                    </View>
                </View>
                :
                <View key="bos-alan" style={{ marginTop: 100, width: '100%', alignItems: 'center',justifyContent: 'center' }}>
                    <View>
                      <Text style={{ color: 'white', opacity: 0.8, fontSize: 20, fontFamily: 'Poppins-Light' }}>No recent search found</Text>
                    </View>
                </View>
              }

          </ScrollView>
        </View>
      </>
    );
  }
};

export default Search;

// search alani içinde animasyonlu degistir
/*
<View key="iconn" style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
<Icon.Ionicons name="md-arrow-back" size={22} style={{ color:'white' }} />
</View>
<View key="txt" style={{ flex: 10 }}>
<TextInput style={{ color: 'white', fontSize: 16, flexWrap: 'wrap'}} placeholderTextColor={'#999999'} placeholder={'Movie,Tv-shows,artists..'} />
</View>
*/

// degistir **********************

/*
<TouchableOpacity onPress={() => {alert('uyari')}} style={{ flex:1, alignItems: 'center', justifyContent: 'center' }}>
<Text style={{ fontSize: 19, color: 'white', paddingTop: 5, fontFamily: 'Poppins-SemiBold' }}>Search</Text>
</TouchableOpacity>
*/