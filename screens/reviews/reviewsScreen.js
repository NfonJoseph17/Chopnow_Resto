import React from "react";
import { View, Image, FlatList, StyleSheet, Text } from "react-native";
import { Colors, Fonts, Sizes, CommonStyles } from "../../constants/styles";
import { MaterialIcons } from '@expo/vector-icons';
import MyStatusBar from "../../components/myStatusBar";

const reviewsList = [
    {
        id: '1',
        peopleImage: require('../../assets/images/users/user1.png'),
        peopleName: 'George Smith',
        reviewDate: 'June 25, 2020',
        rating: 4.0,
        review: 'Marine rise restaurant sit amet, consectetur adipiscing elit, sed do eiusmod tempor rise sit...',
    },
    {
        id: '2',
        peopleImage: require('../../assets/images/users/user2.png'),
        peopleName: 'Grecy John',
        reviewDate: 'June 28, 2020',
        rating: 3.0,
        review: 'Marine rise restaurant sit amet, consectetur adipiscing elit, sed do eiusmod tempor rise sit...',
    },
    {
        id: '3',
        peopleImage: require('../../assets/images/users/user4.png'),
        peopleName: 'George Smith',
        reviewDate: 'May 28, 2020',
        rating: 5.0,
        review: 'Marine rise restaurant sit amet, consectetur adipiscing elit, sed do eiusmod tempor rise sit...',
    },
    {
        id: '4',
        peopleImage: require('../../assets/images/users/user3.png'),
        peopleName: 'Grecy John',
        reviewDate: 'May 25, 2020',
        rating: 2.0,
        review: 'Marine rise restaurant sit amet, consectetur adipiscing elit, sed do eiusmod tempor rise sit...',
    },
    {
        id: '5',
        peopleImage: require('../../assets/images/users/user6.png'),
        peopleName: 'George Smith',
        reviewDate: 'May 22, 2020',
        rating: 4.0,
        review: 'Marine rise restaurant sit amet, consectetur adipiscing elit, sed do eiusmod tempor rise sit...',
    },
    {
        id: '6',
        peopleImage: require('../../assets/images/users/user5.png'),
        peopleName: 'Grecy John',
        reviewDate: 'May 20, 2020',
        rating: 3.0,
        review: 'Marine rise restaurant sit amet, consectetur adipiscing elit, sed do eiusmod tempor rise sit...',
    },
];

const ReviewsScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: Colors.bodyBackColor }}>
            <MyStatusBar />
            <View style={{ flex: 1 }}>
                {header()}
                {reviews()}
            </View>
        </View>
    )

    function reviews() {
        const renderItem = ({ item }) => (
            <View style={styles.reviewsWrapStyle}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                        <Image
                            source={item.peopleImage}
                            style={{ width: 60.0, height: 60.0, borderRadius: 30.0, }}
                        />
                        <View style={{ flex: 1, marginLeft: Sizes.fixPadding, }}>
                            <Text style={{ ...Fonts.blackColor14SemiBold }}>
                                {item.peopleName}
                            </Text>
                            <Text style={{ ...Fonts.grayColor12Medium }}>
                                {item.reviewDate}
                            </Text>
                        </View>
                    </View>
                    {showRating({ number: item.rating })}
                </View>
                <Text numberOfLines={2} style={{ marginTop: Sizes.fixPadding - 5.0, ...Fonts.grayColor12Regular }}>
                    {item.review}
                </Text>
            </View>
        )
        return (
            <FlatList
                data={reviewsList}
                keyExtractor={(item) => `${item.id}`}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingTop: Sizes.fixPadding - 5.0 }}
            />
        )
    }

    function showRating({ number }) {
        return (
            <View style={{ flexDirection: 'row' }}>
                {
                    (number == 5.0 || number == 4.0 || number == 3.0 || number == 2.0 || number == 1.0)
                        ?
                        <MaterialIcons
                            name="star"
                            size={16}
                            color={Colors.primaryColor}
                        />
                        :
                        <MaterialIcons
                            name="star"
                            size={16}
                            color={Colors.grayColor}
                        />
                }
                {
                    (number == 5.0 || number == 4.0 || number == 3.0 || number == 2.0)
                        ?
                        <MaterialIcons
                            name="star"
                            size={16}
                            color={Colors.primaryColor}
                        />
                        :
                        <MaterialIcons
                            name="star"
                            size={16}
                            color={Colors.grayColor}
                        />
                }
                {
                    (number == 5.0 || number == 4.0 || number == 3.0)
                        ?
                        <MaterialIcons
                            name="star"
                            size={16}
                            color={Colors.primaryColor}
                        />
                        :
                        <MaterialIcons
                            name="star"
                            size={16}
                            color={Colors.grayColor}
                        />
                }
                {
                    (number == 5.0 || number == 4.0)
                        ?
                        <MaterialIcons
                            name="star"
                            size={16}
                            color={Colors.primaryColor}
                        />
                        :
                        <MaterialIcons
                            name="star"
                            size={16}
                            color={Colors.grayColor}
                        />
                }
                {
                    (number == 5.0) ?
                        <MaterialIcons
                            name="star"
                            size={16}
                            color={Colors.primaryColor}
                        />
                        :
                        <MaterialIcons
                            name="star"
                            size={16}
                            color={Colors.grayColor}
                        />
                }
            </View>
        )
    }

    function header() {
        return (
            <View style={styles.headerWrapStyle}>
                <MaterialIcons
                    name="arrow-back-ios"
                    color={Colors.blackColor}
                    size={22}
                    onPress={() => navigation.pop()}
                />
                <Text style={{ marginLeft: Sizes.fixPadding - 5.0, flex: 1, ...Fonts.blackColor18SemiBold }}>
                    Reviews
                </Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    headerWrapStyle: {
        margin: Sizes.fixPadding * 2.0,
        flexDirection: 'row',
        alignItems: 'center',
    },
    reviewsWrapStyle: {
        backgroundColor: Colors.whiteColor,
        borderRadius: Sizes.fixPadding,
        paddingVertical: Sizes.fixPadding,
        paddingHorizontal: Sizes.fixPadding + 5.0,
        marginBottom: Sizes.fixPadding * 2.0,
        elevation: 0.20,
        borderColor: '#E9EAF0',
        borderWidth: 1.0,
        marginHorizontal: Sizes.fixPadding * 2.0,
        ...CommonStyles.shadow
    },
});

export default ReviewsScreen;