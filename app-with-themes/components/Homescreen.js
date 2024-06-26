
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity,FlatList } from 'react-native';

export default function Homescreen({ navigation }) {
  const Activities=[
    { id: 1, name: 'Apple Store', category: 'Entertainment',Pay:'$-5,99',img:require('./Images/apple.png')},
    { id: 2, name: 'spotify', category: 'music',Pay:'$-12,00',img:require('./Images/spotify.png')},
    { id: 3, name: 'Money Transfer', category: 'Transaction',Pay:'$300',img:require('./Images/moneyTransfer.png') },
    { id: 4, name: 'Grocery', category: 'grocery shopping',Pay:'$300',img:require('./Images/grocery.png') }

  
  ]

  return (
    <View style={styles.container}>
      <View style={{ position: 'absolute', top: 30, width: 110, left: -150 }}>
        <Image style={{left:150}} source={require('./Images/profile.png')} />
        <View style={styles.profileText}>
          <Text style={{ color: "#95969D", fontSize: 15 }}>Welcome back,</Text>
          <Text style={{ fontSize: 20 }}>Eric Atsu</Text>
        </View>
        <View style={styles.search}>
          <Image style={{ height: 30, width: 30, left: 10 }} source={require('./Images/search.png')} />
        </View>
        <View style={{ position: 'relative', left: 160, top: 50 }}>
          <Image source={require('./Images/Card.png')} />
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ position: 'relative', top: 40,left: 10, backgroundColor: '#EEEEEE', borderRadius: 38, height: 60, width: 60, justifyContent: 'center' }}>
              <Image style={{ position: 'absolute', left: 20 }} source={require('./Images/send.png')} />
            </View>
            <View style={{ position: 'relative', top: 40,left: 40, backgroundColor: '#EEEEEE', borderRadius: 38, height: 60, width: 60, justifyContent: 'center' }}>
              <Image style={{ position: 'absolute', left: 20 }} source={require('./Images/recieve.png')} />
            </View>
            <View style={{ position: 'relative', top: 40,left: 69, backgroundColor: '#EEEEEE', borderRadius: 38, height: 60, width: 60, justifyContent: 'center' }}>
              <Image style={{ position: 'absolute', left: 20 }} source={require('./Images/loan.png')} />
            </View>
            <View style={{ position: 'relative', top: 40,left: 80, backgroundColor: '#EEEEEE', borderRadius: 38, height: 60, width: 60, justifyContent: 'center' }}>
              <Image style={{position:'absolute',left:20  }} source={require('./Images/topUp.png')} />
            </View>
          </View>
        </View>
      </View>
      <View>

        <View style={{position:'absolute',top:450,height:300,left:20,width:300}}>
          <Text style={{fontSize:20,paddingBottom:10}}>Transactions</Text>
        <FlatList 
        data={Activities}
        renderItem={({item})=>{return(
          <View key={item.id}>
            
            <Text style={{ height:40,backgroundColor:'#fff',fontSize:15 ,left:10}}>
           
            <Image style={{position:'absolute',}} source={item.img} />
            <Text style={{position:'absolute' ,left:20,}}>{item.name}</Text>
            
            
            
            
            </Text>
            
            <Text style={{position:'absolute',top:400, left:70,color:'#95969D'}}>{item.category}</Text>
            <Text style={{position:'absolute',left:230, top:20}}>{item.Pay}</Text>
            <Text style={{position:'absolute',left:220, top:60 , color:'#95969D'}}>{item.location}</Text>
          </View>
        )}}
      />
        </View>

      </View>
      <View style={styles.section}>
        <View style={{position:'static',top:480}}>
          <Image style={styles.HomeIcon} source={require('./Images/home.png')} />
          <Text style={styles.Home}>Home</Text>
        </View>
        <View style={{position:'static',top:480}}>
          <Image source={require('./Images/myCards.png')} />
          <Text style={styles.sectionText}>My Cards</Text>
        </View>
        <View style={{position:'static',top:480}}>
          <Image source={require('./Images/statistics.png')} />
          <Text style={styles.sectionText}>Statistics</Text>
        </View>
        <View style={{position:'static',top:480}}>
          <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
            <Image style={{tintColor: '#ababab'}} source={require('./Images/settings.png')} />
            <Text style={styles.settingsText}>Settings</Text>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    position: 'relative'
  },
  profileText: {
    position: 'absolute',
    left: 250,
    top: 10,
  },
  search: {
    position: 'absolute',
    left: 440,
    borderRadius: 30,
    backgroundColor: '#EEEEEE',
    borderColor: '#95969D',
    height: 50,
    width: 50,
    justifyContent: 'center'
  },
  icons: {
    position: 'relative',
    top: 70,
    backgroundColor: '#EEEEEE',
    borderRadius: 38,
    height: 60,
    width: 60,
    justifyContent: 'center',
    left: 20
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
    color: '#2e6bcd',
    left: -8,
  },
  HomeIcon: {
    tintColor: '#2e6bcd',
  },
  sectionText: {
    color: '#ababab',
    left: -17.5,
  },
  settings: {
    
  },
  settingsText: {
    color: '#ababab',
    
    left: -17.5,
  },
});
