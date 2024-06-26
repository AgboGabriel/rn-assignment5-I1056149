
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function Settings({ navigation, theme, toggleTheme }) {
  return (
    <View style={styles.container}>
      <Text style={styles.Header}>Settings</Text>
      <View style={styles.mainBody}>
        <View style={styles.content}>
          <Text style={styles.categoryHeading}>Language</Text>
          <Image style={{top:-15,height:40,width:20,tintColor: '#959595'}} source={require('./Images/great.png')} />
        </View>

        <View style={styles.content}>
          <Text style={styles.categoryHeading}>My Profile</Text>
          <Image style={{top:-14,height:40,width:40,left:10,tintColor: '#959595'}} source={require('./Images/great.png')} />
        </View>

        <View style={styles.content}>
          <Text style={styles.categoryHeading}>Contact Us</Text>
          <Image style={{top:-10,height:40,width:40,tintColor: '#959595',left:10}} source={require('./Images/great.png')} />
        </View>

        <View style={styles.content}>
          <Text style={styles.categoryHeading}>Change Password</Text>
          <Image style={{top:-10,height:40,width:40,left:10,tintColor: '#959595'}} source={require('./Images/great.png')} />
        </View>

        <View style={styles.content}>
          <Text style={styles.categoryHeading}>Privacy Policy</Text>
          <Image style={{height:40,width:30, tintColor: '#959595',top: -11,marginRight: 0,}} source={require('./Images/great.png')} />
        </View>

        <View style={styles.themeSection}>
          <Text style={styles.Theme}>Theme</Text>
          <TouchableOpacity onPress={toggleTheme}>
            <Image style={styles.toggleButton} source={require('./Images/toggle.png')} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.section}>
        <View>
          <Image style={styles.HomeIcon} source={require('./Images/home.png')} />
          <TouchableOpacity onPress={() => navigation.navigate('Homescreen')}>
          <Text style={styles.Home}>Home</Text>
          </TouchableOpacity>
        </View>

        <View>
          <Image source={require('./Images/myCards.png')} />
          <Text style={styles.sectionText}>My Cards</Text>
        </View>

        <View>
          <Image source={require('./Images/statistics.png')} />
          <Text style={styles.sectionText}>Statistics</Text>
        </View>

        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
            <Image style={styles.settings} source={require('./Images/settings.png')} />
            <Text style={styles.settingsText}>Settings</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  section: {
    height: 70,
    top: 155,
    left: 23,
    marginRight: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  Home: {
    color: '#ababab',
    left: -8,
  },
  HomeIcon: {
    tintColor: '#ababab',
  },
  sectionText: {
    color: '#ababab',
    left: -17.5,
  },
  settings: {
    tintColor: '#2e6bcd',
  },
  settingsText: {
    color: '#2e6bcd',
    left: -17.5,
  },
  Header: {
    fontSize: 30,
    top: 70,
    textAlign: 'center',
  },
  content: {
    top: 110,
    left: 13,
    height: 45,
    marginBottom: 30,
    marginRight: 25,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: '#ededed',
    borderBottomWidth: 2,
  },
  categoryHeading: {
    fontSize: 20,
  },
  Theme: {
    top: 130,
    fontSize: 30,
    left: 13,
  },
  toggleButton: {
    height: 60,
    width: 80,
    top: 120,
    left: 155,
  },
  themeSection: {
    display: 'flex',
    flexDirection: 'row',
  },
});
