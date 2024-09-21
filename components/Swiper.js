import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Swiper from 'react-native-swiper'


const SwiperScreen = () => {
    return (
        <View>
            <View style={styles.Swiper}>
                <Swiper autoplay={true} autoplayTimeout={5} showsButtons={true}
                    dotColor={'gray'} activeDotColor={'red'}
                    nextButton={<Text style={styles.buttonText}>›</Text>}
                    prevButton={<Text style={styles.buttonText}>‹</Text>}
                >

                    <View style={styles.slide}>
                        <Image source={{uri:'https://images.squarespace-cdn.com/content/v1/5d6e5dc133f26e00011a5cad/1569453551794-14QET8F4PGUQDCHEB8II/10+01+17+-+Cancer+Prevention%2C+iStock.jpg'}} style={styles.image} />
                    </View>
                    <View style={styles.slide}>
                        <Image source={{uri:'https://media.istockphoto.com/id/1363095967/vector/national-cancer-prevention-month-vector-illustration-on-white.jpg?s=612x612&w=0&k=20&c=L2WwVF5UEEAhPE5PJf5596QbfQLlqi4Rdshv8EO8MMQ='}} style={styles.image} />
                    </View>
                    <View style={styles.slide}>
                        <Image source={{uri:'https://www.wcrf.org/wp-content/uploads/2020/12/TER-Recommendation-2018-Int-WEB.jpg'}} style={styles.image} />
                    </View>
                </Swiper>
            </View>
        </View>
    )
}

export default SwiperScreen;

const styles = StyleSheet.create({
    Swiper: {
        width: '100%',
        height: 250,
        backgroundColor: 'white',
        paddingHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        marginTop:20
    },
    slide: {
        width: '100%',
        height: 250,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: 250,
        borderRadius: 20,
        resizeMode:'cover'
    },
    buttonText: {
        color: 'blue',
        fontSize: 40,
        fontWeight: '500',
        borderRadius: 20,
        width: 40,
        height: 40,
        textAlign: 'center',
        lineHeight: 40,
    }
})