import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const blogs = [
  {
    id: '1',
    title: 'The Importance of Regular Health Checkups',
    image: 'https://tse2.mm.bing.net/th?id=OIP.ZzxuH304z08zvG9x0acN1AHaEK&pid=Api&P=0&h=180',
    link: 'https://www.caresathome.com/blog/importance-of-regular-health-checkup',
  },
  {
    id: '2',
    title: 'How to Improve Your Immune System Naturally',
    image: 'https://tse1.mm.bing.net/th?id=OIP.skxsZsjxhfBt-cryzKv0xwHaE7&pid=Api&P=0&h=180',
    link: 'https://www.orthocarolina.com/media/8-tips-to-strengthen-your-immune-system',
  },
  {
    id: '3',
    title: 'Top 5 Tips for Managing Diabetes',
    image: 'https://tse4.mm.bing.net/th?id=OIP.Qn9xtJWgZmdGZg4iF4oJNAHaFj&pid=Api&P=0&h=180',
    link: 'https://timesofindia.indiatimes.com/lifespan-news/Managing-diabetes-These-5-basics-will-make-it-easy/articleshow/49071670.cms',
  },
];

const BlogSection = () => {
  const navigation = useNavigation();

  const handlePress = (url) => {
    navigation.navigate('Webview', { url });
  };

  const renderBlogItem = ({ item }) => (
    <TouchableOpacity
      style={styles.blogItem}
      onPress={() => handlePress(item.link)}
    >
      <Image source={{ uri: item.image }} style={styles.blogImage} />
      <Text style={styles.blogTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.blogContainer}>
      <View style={styles.blogHeader}>
        <Text style={styles.sectionTitle}>Health Articles</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Blogs')}>
          <Text style={styles.viewAllText}>View All</Text>
        </TouchableOpacity>
      </View>

      {/* Blog List */}
      <FlatList
        data={blogs}
        horizontal
        renderItem={renderBlogItem}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.blogList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  viewAllText: {
    color: "#007AFF",
    fontSize: 16,
  },
  blogContainer: {
    marginBottom: 20,
    top: 15,
  },
  blogHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  blogList: {
    marginBottom: 20,
  },
  blogItem: {
    marginRight: 20,
  },
  blogImage: {
    width: 250,
    height: 250,
    borderRadius: 8,
  },
  blogTitle: {
    marginTop: 10,
    fontSize: 17,
    width: 250,
    fontWeight: '600',
    color: 'gray',
  },
});

export default BlogSection;
