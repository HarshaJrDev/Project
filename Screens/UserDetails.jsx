import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width, height } = Dimensions.get('window');

const DetailsScreen = ({ route, navigation }) => {
  const { user } = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileSection}>
        <Image
          source={{ uri: `https://picsum.photos/seed/${user.id}/300` }}
          style={styles.profileImage}
        />
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.username}>
          <Ionicons name="at-circle-outline" size={18} /> @{user.username}
        </Text>
      </View>

      {/* User Details Section */}
      <View style={styles.detailsSection}>
        <Text style={styles.sectionTitle}>Contact Info</Text>
        <Text style={styles.detailItem}>
          <Ionicons name="mail-outline" size={18} /> Email: {user.email}
        </Text>
        <Text style={styles.detailItem}>
          <Ionicons name="call-outline" size={18} /> Phone: {user.phone}
        </Text>
        <Text style={styles.detailItem}>
          <Ionicons name="globe-outline" size={18} /> Website: {user.website}
        </Text>

        <Text style={styles.sectionTitle}>Address</Text>
        <Text style={styles.detailItem}>Street: {user.address.street}</Text>
        <Text style={styles.detailItem}>Suite: {user.address.suite}</Text>
        <Text style={styles.detailItem}>City: {user.address.city}</Text>
        <Text style={styles.detailItem}>Zipcode: {user.address.zipcode}</Text>
        <Text style={styles.detailItem}>
          Coordinates: Lat {user.address.geo.lat}, Lng {user.address.geo.lng}
        </Text>

        <Text style={styles.sectionTitle}>Company</Text>
        <Text style={styles.detailItem}>Name: {user.company.name}</Text>
        <Text style={styles.detailItem}>
          Catchphrase: {user.company.catchPhrase}
        </Text>
        <Text style={styles.detailItem}>BS: {user.company.bs}</Text>
      </View>

      {/* Go Back Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={20} color="#fff" />
        <Text style={styles.buttonText}>Go Back</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    paddingHorizontal: width * 0.05,
  },
  profileSection: {
    alignItems: 'center',
    marginVertical: height * 0.02,
  },
  profileImage: {
    width: width * 0.4,
    height: width * 0.4,
    borderRadius: width * 0.2,
    marginBottom: height * 0.02,
  },
  name: {
    fontSize: width * 0.06,
    fontWeight: '700',
    color: '#333',
    marginBottom: height * 0.01,
  },
  username: {
    fontSize: width * 0.045,
    color: '#555',
  },
  detailsSection: {
    marginVertical: height * 0.02,
  },
  sectionTitle: {
    fontSize: width * 0.05,
    fontWeight: '600',
    marginVertical: height * 0.01,
    color: '#616dc7',
  },
  detailItem: {
    fontSize: width * 0.045,
    color: '#333',
    marginVertical: height * 0.005,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#616dc7',
    paddingHorizontal: width * 0.05,
    paddingVertical: height * 0.015,
    borderRadius: width * 0.02,
    marginVertical: height * 0.03,
  },
  buttonText: {
    color: '#fff',
    fontSize: width * 0.045,
    marginLeft: width * 0.02,
  },
});
