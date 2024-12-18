import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  Dimensions,
  Button,
} from 'react-native';
import {TextInput, Card, Text} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const {width} = Dimensions.get('window');
const API_URL = 'https://jsonplaceholder.typicode.com/users';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState(null);

  const fetchUserData = async () => {
    try {
      setLoading(true);
      const response = await fetch(API_URL);
      const data = await response.json();
      setUserData(data);
    } catch (err) {
      console.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const filteredData = userData
    .filter(user => user.name.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => {
      if (sortOption === 'name') {
        return a.name.localeCompare(b.name);
      }
      if (sortOption === 'email') {
        return a.email.localeCompare(b.email);
      }
      return 0;
    });

  return (
    <View style={styles.container}>
      <TextInput
        label="Search Users"
        value={searchQuery}
        onChangeText={setSearchQuery}
        mode="outlined"
        style={styles.searchBar}
        right={<TextInput.Icon name="magnify" />}
      />
      <View style={styles.sortButtons}>
        <TouchableOpacity>
          <Text onPress={() => setSortOption('name')}>By name</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text onPress={() => setSortOption('email')}>By name</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={filteredData}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('UserDetails', {user: item})}>
            <Card style={styles.card}>
              <Card.Title
                title={item.name}
                subtitle={item.email}
                left={() => (
                  <Ionicons
                    name="person-circle-outline"
                    size={40}
                    color="#616dc7"
                  />
                )}
                right={() => (
                  <Card.Cover
                    source={{
                      uri: `https://picsum.photos/id/${item.id * 10}/50`,
                    }}
                    style={styles.profileImage}
                  />
                )}
              />
            </Card>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id.toString()}
        ListFooterComponent={
          loading ? <ActivityIndicator size="large" color="#616dc7" /> : null
        }
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: width * 0.05,
    backgroundColor: '#f7f7f7',
  },
  searchBar: {
    marginBottom: width * 0.05,
  },
  sortButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: width * 0.03,
  },
  card: {
    marginBottom: width * 0.03,
    elevation: 3,
    backgroundColor: '#fff',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
});
