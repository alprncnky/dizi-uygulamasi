import React from 'react';
import {
  ScrollView,
  View,
  Text,
  StatusBar,
  Image
} from 'react-native';
import MainVariables from '../main-variables.json';
import TabBar from './components/tab-bar';

class Home extends React.Component {
  render() {
    return (
      <>
        <StatusBar backgroundColor={"black"} barStyle="light-content" />

        <View style={{ flex: 1, backgroundColor: 'black' }} >
          <ScrollView>
              <View>
                <Text allowFontScaling={true} style={{ color: MainVariables.appMainColor, fontSize: 40, paddingHorizontal: 10 }}>
                  ₺ {MainVariables.appName}
                </Text>
              </View>
              
              <View style={{ paddingHorizontal: 10 }}>

                  <View key="burasi-alan0" style={{ marginVertical: 10 }}>
                    <View style={{ flexDirection: 'row' }}>
                      <ScrollView horizontal={true}>
                        <View style={{ width: 100, marginRight: 12 }}>
                          <Image style={{ width: 100, height: 100, borderRadius: 50, borderWidth: 1, borderColor: 'white' }} source={{uri: 'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg'}} />
                          <Text style={{ color: 'white', fontSize: 11, fontFamily: 'Poppins-Regular', textAlign: 'center' }}>The Avengers</Text>
                        </View>
                        <View style={{ width: 100, marginRight: 12 }}>
                          <Image style={{ width: 100, height: 100, borderRadius: 50, borderWidth: 1, borderColor: 'white' }} source={{uri: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg'}} />
                          <Text style={{ color: 'white', fontSize: 11, fontFamily: 'Poppins-Regular', textAlign: 'center' }}>Inception</Text>
                        </View>
                        <View style={{ width: 100, marginRight: 12 }}>
                          <Image style={{ width: 100, height: 100, borderRadius: 50, borderWidth: 1, borderColor: 'white' }} source={{uri: 'https://m.media-amazon.com/images/M/MV5BZmUwNGU2ZmItMmRiNC00MjhlLTg5YWUtODMyNzkxODYzMmZlXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg'}} />
                          <Text style={{ color: 'white', fontSize: 11, fontFamily: 'Poppins-Regular', textAlign: 'center' }}>Batman Begins</Text>
                        </View>
                        <View style={{ width: 100, marginRight: 12 }}>
                          <Image style={{ width: 100, height: 100, borderRadius: 50, borderWidth: 1, borderColor: 'white' }} source={{uri: 'https://m.media-amazon.com/images/M/MV5BMzgxMmQxZjQtNDdmMC00MjRlLTk1MDEtZDcwNTdmOTg0YzA2XkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_SX300.jpg'}} />
                          <Text style={{ color: 'white', fontSize: 11, fontFamily: 'Poppins-Regular', textAlign: 'center' }}>Mr.robot</Text>
                        </View>
                        <View style={{ width: 100, marginRight: 12 }}>
                          <Image style={{ width: 100, height: 100, borderRadius: 50, borderWidth: 1, borderColor: 'white' }} source={{uri: 'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg'}} />
                          <Text style={{ color: 'white', fontSize: 11, fontFamily: 'Poppins-Regular', textAlign: 'center' }}>The Avengers</Text>
                        </View>
                        <View style={{ width: 100, marginRight: 12 }}>
                          <Image style={{ width: 100, height: 100, borderRadius: 50, borderWidth: 1, borderColor: 'white' }} source={{uri: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg'}} />
                          <Text style={{ color: 'white', fontSize: 11, fontFamily: 'Poppins-Regular', textAlign: 'center' }}>Inception</Text>
                        </View>
                      </ScrollView>
                    </View>
                  </View>

                  <View key="burasi-alan1" style={{ marginVertical: 10 }}>
                    <View>
                      <Text style={{ fontSize: 22, color: 'white', fontFamily: 'Poppins-Medium' }}>Tavsiye edilenler</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                      <ScrollView horizontal={true}>
                        <View style={{ backgroundColor: 'black', width: 100, marginRight: 12 }}>
                          <Image style={{ width: 100, height: 150, resizeMode: 'stretch' }} source={{uri: 'https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg'}} />
                          <Text style={{ color: 'white', fontSize: 11, fontFamily: 'Poppins-Regular' }}>Guardians of the Galaxy..</Text>
                        </View>
                        <View style={{ backgroundColor: 'black', width: 100, marginRight: 12 }}>
                          <Image style={{ width: 100, height: 150, resizeMode: 'stretch' }} source={{uri: 'https://m.media-amazon.com/images/M/MV5BMWY3NTljMjEtYzRiMi00NWM2LTkzNjItZTVmZjE0MTdjMjJhL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTQ4NTc5OTU@._V1_SX300.jpg'}} />
                          <Text style={{ color: 'white', fontSize: 11, fontFamily: 'Poppins-Regular' }}>Sherlock</Text>
                        </View>
                        <View style={{ backgroundColor: 'black', width: 100, marginRight: 12 }}>
                          <Image style={{ width: 100, height: 150, resizeMode: 'stretch' }} source={{uri: 'https://m.media-amazon.com/images/M/MV5BMTA4MDM0NDg1ODZeQTJeQWpwZ15BbWU3MDQ5NzA2ODQ@._V1_SX300.jpg'}} />
                          <Text style={{ color: 'white', fontSize: 11, fontFamily: 'Poppins-Regular' }}>Neşeli Hayat</Text>
                        </View>
                        <View style={{ backgroundColor: 'black', width: 100, marginRight: 12 }}>
                          <Image style={{ width: 100, height: 150, resizeMode: 'stretch' }} source={{uri: 'https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg'}} />
                          <Text style={{ color: 'white', fontSize: 11, fontFamily: 'Poppins-Regular' }}>Star Wars - A New Hope</Text>
                        </View>
                        <View style={{ backgroundColor: 'black', width: 100, marginRight: 12 }}>
                          <Image style={{ width: 100, height: 150, resizeMode: 'stretch' }} source={{uri: 'https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg'}} />
                          <Text style={{ color: 'white', fontSize: 11, fontFamily: 'Poppins-Regular' }}>Guardians of the Galaxy..</Text>
                        </View>
                        <View style={{ backgroundColor: 'black', width: 100, marginRight: 12 }}>
                          <Image style={{ width: 100, height: 150, resizeMode: 'stretch' }} source={{uri: 'https://m.media-amazon.com/images/M/MV5BMWY3NTljMjEtYzRiMi00NWM2LTkzNjItZTVmZjE0MTdjMjJhL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTQ4NTc5OTU@._V1_SX300.jpg'}} />
                          <Text style={{ color: 'white', fontSize: 11, fontFamily: 'Poppins-Regular' }}>Sherlock</Text>
                        </View>
                        <View style={{ backgroundColor: 'black', width: 100, marginRight: 12 }}>
                          <Image style={{ width: 100, height: 150, resizeMode: 'stretch' }} source={{uri: 'https://m.media-amazon.com/images/M/MV5BMTA4MDM0NDg1ODZeQTJeQWpwZ15BbWU3MDQ5NzA2ODQ@._V1_SX300.jpg'}} />
                          <Text style={{ color: 'white', fontSize: 11, fontFamily: 'Poppins-Regular' }}>Neşeli Hayat</Text>
                        </View>
                        <View style={{ backgroundColor: 'black', width: 100, marginRight: 12 }}>
                          <Image style={{ width: 100, height: 150, resizeMode: 'stretch' }} source={{uri: 'https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg'}} />
                          <Text style={{ color: 'white', fontSize: 11, fontFamily: 'Poppins-Regular' }}>Star Wars - A New Hope</Text>
                        </View>
                      </ScrollView>
                    </View>
                  </View>

                  <View key="burasi-alan2" style={{ marginVertical: 10 }}>
                    <View>
                      <Text style={{ fontSize: 22, color: 'white', fontFamily: 'Poppins-Medium' }}>En çok izlenenler</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                      <ScrollView horizontal={true}>
                        <View style={{ backgroundColor: 'black', width: 100, marginRight: 12 }}>
                          <Image style={{ width: 100, height: 150, resizeMode: 'stretch' }} source={{uri: 'https://m.media-amazon.com/images/M/MV5BODM1MDU2NjY5NF5BMl5BanBnXkFtZTgwMDkxNTcwNjM@._V1_SX300.jpg'}} />
                          <Text style={{ color: 'white', fontSize: 11, fontFamily: 'Poppins-Regular' }}>House of Cards</Text>
                        </View>
                        <View style={{ backgroundColor: 'black', width: 100, marginRight: 12 }}>
                          <Image style={{ width: 100, height: 150, resizeMode: 'stretch' }} source={{uri: 'https://m.media-amazon.com/images/M/MV5BYjFhN2RjZTctMzA2Ni00NzE2LWJmYjMtNDAyYTllOTkyMmY3XkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg'}} />
                          <Text style={{ color: 'white', fontSize: 11, fontFamily: 'Poppins-Regular' }}>Italian Spiderman</Text>
                        </View>
                        <View style={{ backgroundColor: 'black', width: 100, marginRight: 12 }}>
                          <Image style={{ width: 100, height: 150, resizeMode: 'stretch' }} source={{uri: 'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg'}} />
                          <Text style={{ color: 'white', fontSize: 11, fontFamily: 'Poppins-Regular' }}>Iron Man</Text>
                        </View>
                        <View style={{ backgroundColor: 'black', width: 100, marginRight: 12 }}>
                          <Image style={{ width: 100, height: 150, resizeMode: 'stretch' }} source={{uri: 'https://m.media-amazon.com/images/M/MV5BOGE4NzU1YTAtNzA3Mi00ZTA2LTg2YmYtMDJmMThiMjlkYjg2XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg'}} />
                          <Text style={{ color: 'white', fontSize: 11, fontFamily: 'Poppins-Regular' }}>Thor</Text>
                        </View>
                        <View style={{ backgroundColor: 'black', width: 100, marginRight: 12 }}>
                          <Image style={{ width: 100, height: 150, resizeMode: 'stretch' }} source={{uri: 'https://m.media-amazon.com/images/M/MV5BODM1MDU2NjY5NF5BMl5BanBnXkFtZTgwMDkxNTcwNjM@._V1_SX300.jpg'}} />
                          <Text style={{ color: 'white', fontSize: 11, fontFamily: 'Poppins-Regular' }}>House of Cards</Text>
                        </View>
                        <View style={{ backgroundColor: 'black', width: 100, marginRight: 12 }}>
                          <Image style={{ width: 100, height: 150, resizeMode: 'stretch' }} source={{uri: 'https://m.media-amazon.com/images/M/MV5BYjFhN2RjZTctMzA2Ni00NzE2LWJmYjMtNDAyYTllOTkyMmY3XkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg'}} />
                          <Text style={{ color: 'white', fontSize: 11, fontFamily: 'Poppins-Regular' }}>Italian Spiderman</Text>
                        </View>
                        <View style={{ backgroundColor: 'black', width: 100, marginRight: 12 }}>
                          <Image style={{ width: 100, height: 150, resizeMode: 'stretch' }} source={{uri: 'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg'}} />
                          <Text style={{ color: 'white', fontSize: 11, fontFamily: 'Poppins-Regular' }}>Iron Man</Text>
                        </View>
                        <View style={{ backgroundColor: 'black', width: 100, marginRight: 12 }}>
                          <Image style={{ width: 100, height: 150, resizeMode: 'stretch' }} source={{uri: 'https://m.media-amazon.com/images/M/MV5BOGE4NzU1YTAtNzA3Mi00ZTA2LTg2YmYtMDJmMThiMjlkYjg2XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg'}} />
                          <Text style={{ color: 'white', fontSize: 11, fontFamily: 'Poppins-Regular' }}>Thor</Text>
                        </View>
                      </ScrollView>
                    </View>
                  </View>

                  <View key="burasi-alan3" style={{ marginVertical: 10 }}>
                    <View>
                      <Text style={{ fontSize: 22, color: 'white', fontFamily: 'Poppins-Medium' }}>Gündemdekiler</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                      <ScrollView horizontal={true}>
                        <View style={{ backgroundColor: 'black', width: 100, marginRight: 12 }}>
                          <Image style={{ width: 100, height: 150, resizeMode: 'stretch' }} source={{uri: 'https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg'}} />
                          <Text style={{ color: 'white', fontSize: 11, fontFamily: 'Poppins-Regular' }}>Guardians of the Galaxy..</Text>
                        </View>
                        <View style={{ backgroundColor: 'black', width: 100, marginRight: 12 }}>
                          <Image style={{ width: 100, height: 150, resizeMode: 'stretch' }} source={{uri: 'https://m.media-amazon.com/images/M/MV5BMWY3NTljMjEtYzRiMi00NWM2LTkzNjItZTVmZjE0MTdjMjJhL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTQ4NTc5OTU@._V1_SX300.jpg'}} />
                          <Text style={{ color: 'white', fontSize: 11, fontFamily: 'Poppins-Regular' }}>Sherlock</Text>
                        </View>
                        <View style={{ backgroundColor: 'black', width: 100, marginRight: 12 }}>
                          <Image style={{ width: 100, height: 150, resizeMode: 'stretch' }} source={{uri: 'https://m.media-amazon.com/images/M/MV5BMTA4MDM0NDg1ODZeQTJeQWpwZ15BbWU3MDQ5NzA2ODQ@._V1_SX300.jpg'}} />
                          <Text style={{ color: 'white', fontSize: 11, fontFamily: 'Poppins-Regular' }}>Neşeli Hayat</Text>
                        </View>
                        <View style={{ backgroundColor: 'black', width: 100, marginRight: 12 }}>
                          <Image style={{ width: 100, height: 150, resizeMode: 'stretch' }} source={{uri: 'https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg'}} />
                          <Text style={{ color: 'white', fontSize: 11, fontFamily: 'Poppins-Regular' }}>Star Wars - A New Hope</Text>
                        </View>
                        <View style={{ backgroundColor: 'black', width: 100, marginRight: 12 }}>
                          <Image style={{ width: 100, height: 150, resizeMode: 'stretch' }} source={{uri: 'https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg'}} />
                          <Text style={{ color: 'white', fontSize: 11, fontFamily: 'Poppins-Regular' }}>Guardians of the Galaxy..</Text>
                        </View>
                        <View style={{ backgroundColor: 'black', width: 100, marginRight: 12 }}>
                          <Image style={{ width: 100, height: 150, resizeMode: 'stretch' }} source={{uri: 'https://m.media-amazon.com/images/M/MV5BMWY3NTljMjEtYzRiMi00NWM2LTkzNjItZTVmZjE0MTdjMjJhL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTQ4NTc5OTU@._V1_SX300.jpg'}} />
                          <Text style={{ color: 'white', fontSize: 11, fontFamily: 'Poppins-Regular' }}>Sherlock</Text>
                        </View>
                        <View style={{ backgroundColor: 'black', width: 100, marginRight: 12 }}>
                          <Image style={{ width: 100, height: 150, resizeMode: 'stretch' }} source={{uri: 'https://m.media-amazon.com/images/M/MV5BMTA4MDM0NDg1ODZeQTJeQWpwZ15BbWU3MDQ5NzA2ODQ@._V1_SX300.jpg'}} />
                          <Text style={{ color: 'white', fontSize: 11, fontFamily: 'Poppins-Regular' }}>Neşeli Hayat</Text>
                        </View>
                        <View style={{ backgroundColor: 'black', width: 100, marginRight: 12 }}>
                          <Image style={{ width: 100, height: 150, resizeMode: 'stretch' }} source={{uri: 'https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg'}} />
                          <Text style={{ color: 'white', fontSize: 11, fontFamily: 'Poppins-Regular' }}>Star Wars - A New Hope</Text>
                        </View>
                      </ScrollView>
                    </View>
                  </View>

              </View>
          </ScrollView>
        </View>
      </>
    );
  }
};

export default Home;
