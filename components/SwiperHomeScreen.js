import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Swiper from 'react-native-swiper'


const SwiperHomeScreen = () => {
    return (
        <View>
            <View style={styles.Swiper}>
                <Swiper autoplay={true} autoplayTimeout={5} showsButtons={false}
                    dotColor={'gray'} activeDotColor={'red'}
                    nextButton={<Text style={styles.buttonText}>›</Text>}
                    prevButton={<Text style={styles.buttonText}>‹</Text>}
                >

                    <View style={styles.slide}>
                        <Image source={{uri:'https://www.eveningtimes.co.uk/sites/default/files/proteinworld4.jpg'}} style={styles.image} />
                    </View>
                    <View style={styles.slide}>
                        <Image source={{uri:'https://creative-solution.com/wp-content/uploads/2018/12/DTC-and-Pharma-Image-_1200x675px_300dpi1.jpg'}} style={styles.image} />
                    </View>
                    <View style={styles.slide}>
                        <Image source={{uri:'https://quotefancy.com/media/wallpaper/3840x2160/70576-Charles-Bukowski-Quote-If-you-have-the-ability-to-love-love.jpg'}} style={styles.image} />
                    </View>
                </Swiper>
            </View>
        </View>
    )
}

export default SwiperHomeScreen;

const styles = StyleSheet.create({
    Swiper: {
        width: 400,
        height: 200,
        backgroundColor: 'white',
        paddingHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        left:-10
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
        height: 300,
        // borderRadius: 20,
        resizeMode:'contain',
        top:-20,
    },
    buttonText: {
        color: 'gray',
        fontSize: 40,
        fontWeight: '500',
        borderRadius: 20,
        width: 40,
        height: 40,
        textAlign: 'center',
        lineHeight: 40,
    }
})