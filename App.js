import React from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';

const App = () => {
  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        backgroundColor: '#3498DB',
        flex: 1,
      }}>
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          backgroundColor: 'white',
          margin: 10,
          flex: 1,
          borderRadius: 10,
        }}>
        <View
          style={{
            flex: 1,
            marginVertical: 20,
          }}>

          {/* header */}
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                fontSize: 30,
                fontWeight: 'bold',
                color: 'black',
              }}>
              Login
            </Text>
          </View>

          {/* body */}
          <View
            style={{
              flex: 6,
            }}>
            <View
              style={{
                margin: 30,

              }}>
              {/* username */}
              <View
                style={{
                  marginBottom: 20,
                }}>
                <Text
                  style={{
                    color: 'black',
                  }}>
                  Username
                </Text>

                <View
                  style={{
                    flexDirection: 'row',
                    borderBottomColor: 'grey',
                    borderBottomWidth: 1,
                  }}>
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: 10,
                    }}>
                    <Icon name="user" size={15} />
                  </View>
                  <View
                    style={{
                      flex: 1,
                    }}>
                    <TextInput placeholder={'Type your name'} />
                  </View>
                </View>
              </View>

              {/* password */}
              <View>
                <Text
                  style={{
                    color: 'black',
                  }}>
                  Password
                </Text>

                <View
                  style={{
                    flexDirection: 'row',
                    borderBottomColor: 'grey',
                    borderBottomWidth: 1,
                  }}>
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: 10,
                    }}>
                    <Icon name="lock" size={15} />
                  </View>
                  <View
                    style={{
                      flex: 1
                    }}>
                    <TextInput
                      secureTextEntry={true}
                      placeholder={'Type your password'}
                    />
                  </View>
                </View>
              </View>

              {/* forgot password */}
              <View
                style={{
                  marginTop: 10,
                  alignItems: 'flex-end',
                }}>
                <Text
                  style={{
                    color: 'black',
                  }}>
                  Forgot password?
                </Text>
              </View>

              {/* login button */}
              <View
                style={{
                  marginVertical: 20,
                }}>
                <TouchableOpacity activeOpacity={0.5}>
                  <LinearGradient
                    style={{
                      padding: 10,
                      borderRadius: 50,
                      width: '100%',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                    colors={['#AED6F1', '#3498DB', '#2EB6C1']}
                    useAngle={true}
                    angle={45}>
                    <Text
                      style={{
                        color: 'white',
                        fontWeight: 'bold',
                      }}>
                      LOGIN
                    </Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </View>

            <View style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <Text>Or Sign Up Using</Text>
              <View
                style={{
                  marginTop: 10,
                  flexDirection: 'row',
                }}>
                {/* fb */}
                <TouchableOpacity
                  style={{
                    width: 50,
                    height: 50,
                    padding: 10,
                    backgroundColor: '#3b5998',
                    borderRadius: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: 5,
                  }}>
                  <Icon name="facebook-f" size={15} color={'white'} />
                </TouchableOpacity>
                {/* tw */}
                <TouchableOpacity
                  style={{
                    width: 50,
                    height: 50,
                    padding: 10,
                    backgroundColor: '#1dcaff',
                    borderRadius: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: 5,
                  }}>
                  <Icon name="twitter" size={15} color={'white'} />
                </TouchableOpacity>
                {/* gg */}
                <TouchableOpacity
                  style={{
                    width: 50,
                    height: 50,
                    padding: 10,
                    backgroundColor: '#EA4335',
                    borderRadius: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: 5,
                  }}>
                  <Icon name="google" size={15} color={'white'} />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* footer */}
          <View
            style={{
              flex: 2,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>Or Sign Up Using</Text>

            {/* button sign up */}
            <TouchableOpacity
              style={{
                padding: 20,
              }}>
              <Text
                style={{
                  color: 'black',
                  fontWeight: '500',
                }}>SIGN UP</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default App;
