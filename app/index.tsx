import { Ionicons } from "@expo/vector-icons";
import { Text, View, StyleSheet, TextInput } from "react-native";

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>
          Notes App
        </Text>
      </View>
      <View style={styles.bodyContainer}>
        <View style={styles.searchContainer}>
          <Ionicons size={24} color={'red'} name="search-outline" />
          <TextInput style={styles.searchInput} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
  },
  headerContainer: {
    backgroundColor: 'lightblue',
    paddingVertical: 15,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingLeft: 10
  },
  bodyContainer: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: 'lightgray'
  },
  searchInput: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 4,
    fontSize: 15
  }
});