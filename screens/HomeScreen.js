import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList
} from 'react-native';
import { Ionicons, Entypo, Feather } from '@expo/vector-icons';

const POLO_BLUE_COLOR = 'rgb(51,60,87)';
const FOLLOW_COLOR = 'rgb(71,113,246)';
const SEND_MESSAGE_COLOR = 'rgb(120,213,250)';

const imgData = [
  { id: 1, imgSource: require('../assets/images/1.jpeg') },
  { id: 2, imgSource: require('../assets/images/2.jpeg') },
  { id: 3, imgSource: require('../assets/images/3.jpeg') },
  { id: 4, imgSource: require('../assets/images/4.jpeg') },
  { id: 5, imgSource: require('../assets/images/5.jpeg') },
  { id: 6, imgSource: require('../assets/images/6.jpeg') }
];

HomeScreen.navigationOptions = {
  header: null
};

export default function HomeScreen() {
  renderItem = ({ item }) => {
    return <Image source={item.imgSource} style={styles.image} />;
  };
  return (
    <View style={styles.container}>
      <View style={styles.infoWrapper}>
        <View style={styles.column1}>
          <Image
            source={require('../assets/images/profile.jpg')}
            style={styles.avatar}
          />
        </View>
        <View style={styles.column2}>
          <Text style={styles.nameText}>Sieu Thai</Text>
          <Text style={styles.jobText}>Developer</Text>
          <View style={styles.row}>
            <TouchableOpacity style={styles.followButton}>
              <Text style={styles.followText}>Follow</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sendMessageButton}>
              <Feather name="send" size={20} color={'white'} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.columnWrapper}>
        <View style={styles.columnCount}>
          <Text style={styles.countText}>210</Text>
          <Text style={styles.countTitle}>Photos</Text>
        </View>
        <View style={styles.columnCount}>
          <Text style={styles.countText}>15k</Text>
          <Text style={styles.countTitle}>Followers</Text>
        </View>
        <View style={styles.columnCount}>
          <Text style={styles.countText}>605</Text>
          <Text style={styles.countTitle}>Following</Text>
        </View>
      </View>
      <FlatList
        data={imgData}
        renderItem={this.renderItem}
        numColumns={2}
        keyExtractor={item => item.id}
        contentContainerStyle={{
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center'
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  row: {
    flexDirection: 'row'
  },
  header: {
    height: 60,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between'
  },
  infoWrapper: {
    marginTop: 45,
    height: 100,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  column1: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  column2: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-start'
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 15
  },
  followButton: {
    backgroundColor: FOLLOW_COLOR,
    width: 100,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5
  },
  nameText: {
    color: POLO_BLUE_COLOR,
    fontWeight: 'bold',
    fontSize: 20
  },
  jobText: {
    color: 'gray',
    fontSize: 15
  },
  followText: {
    color: 'white',
    fontWeight: 'bold'
  },
  sendMessageButton: {
    backgroundColor: SEND_MESSAGE_COLOR,
    width: 50,
    marginLeft: 10,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5
  },
  columnWrapper: {
    marginTop: 18,
    paddingBottom: 18,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  columnCount: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  countText: {
    color: POLO_BLUE_COLOR,
    fontSize: 20,
    fontWeight: 'bold'
  },
  countTitle: {
    color: 'gray',
    fontSize: 12,
    fontWeight: '500',
    marginTop: 5
  },
  image: {
    width: 155,
    height: 155,
    borderRadius: 8,
    margin: 10
  }
});
