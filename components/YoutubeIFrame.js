import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet, ActivityIndicator } from 'react-native';
import YoutubeIframe from 'react-native-youtube-iframe';

const YouTubeChannelScreen = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideoId, setSelectedVideoId] = useState(null);
  const [nextPageToken, setNextPageToken] = useState(null); // To track next page token for pagination
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [showAllVideos, setShowAllVideos] = useState(false); // To show all videos

  const API_KEY = 'AIzaSyD7DRkKTIBkjOGkEnnJkAyz1DfXqqzUq58';
  const CHANNEL_ID = 'UCJPg1xTH9GT6ZUAxoc2HUWQ';

  const fetchVideos = async (pageToken = '') => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet&type=video&order=date&maxResults=5&pageToken=${pageToken}`
      );
      const data = await response.json();
      const videoList = data.items.map((item) => ({
        id: item.id.videoId,
        title: item.snippet.title,
        thumbnail: item.snippet.thumbnails.medium.url,
      }));

      setVideos((prevVideos) => [...prevVideos, ...videoList]); 
      setNextPageToken(data.nextPageToken);
    } catch (error) {
      console.error('Error fetching videos:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  const loadMoreVideos = () => {
    if (nextPageToken) {
      setIsLoadingMore(true);
      fetchVideos(nextPageToken).then(() => setIsLoadingMore(false));
    }
  };


  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.videoItem}
      onPress={() => setSelectedVideoId(item.id)}
    >
      <View style={{ flexDirection: 'column' }}>
        <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />
        <Text
          numberOfLines={2}
          ellipsizeMode="tail"
          style={styles.videoTitle}
        >
          {item.title}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.heading}>Channel Videos</Text>
        {!showAllVideos && (
          <TouchableOpacity onPress={() => setShowAllVideos(true)}>
            <Text style={{ color: '#007AFF', fontSize: 16, right: -150 }}>
              View All
            </Text>
          </TouchableOpacity>
        )}
      </View>

      {selectedVideoId && (
        <View style={{alignItems:'center'}}>
          <YoutubeIframe height={250} width={400} play={true} videoId={selectedVideoId} />
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setSelectedVideoId(null)}
          >
            <Text style={styles.closeButtonText}>Close Player</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Display only the first video when not showing all */}
      {!showAllVideos && videos.length > 0 && (
        <TouchableOpacity
          style={styles.videoItem}
          onPress={() => setSelectedVideoId(videos[0]?.id)}
        >
          <View style={{ flexDirection: 'column' }}>
            <Image source={{ uri: videos[0]?.thumbnail }} style={styles.thumbnail} />
            <Text
              numberOfLines={2}
              ellipsizeMode="tail"
              style={styles.videoTitle}
            >
              {videos[0]?.title}
            </Text>
          </View>
        </TouchableOpacity>
      )}

      {/* Show all videos with pagination */}
      {showAllVideos && (
        <>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={videos}
            renderItem={renderItem}
            keyExtractor={(item, index) => item.id ? item.id : index.toString()}
            style={styles.videoList}
          />
          {isLoadingMore ? (
            <ActivityIndicator size="large" color="#007AFF" />
          ) : nextPageToken ? (
            <TouchableOpacity style={styles.loadMoreButton} onPress={loadMoreVideos}>
              <Text style={styles.loadMoreText}>Load More Videos</Text>
            </TouchableOpacity>
          ) : null}
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
    top: -20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    left: -15,
  },
  videoList: {
    marginTop: 10,
    left: -10,
    width: 380,
  },
  videoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginRight: 10,
    marginTop:10
  },
  thumbnail: {
    width: 340,
    height: 200,
    marginRight: 10,
    borderRadius: 4,
  },
  videoTitle: {
    fontSize: 24,
    fontWeight: '500',
    flex: 1,
    flexWrap: 'wrap',
    color: 'gray',
    marginTop: 10,
    width: 340,
  },
  loadMoreButton: {
    backgroundColor: '#008080',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  loadMoreText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  closeButton: {
    backgroundColor: '#C60C30',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    width:'100%'
  },
  closeButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});

export default YouTubeChannelScreen;
