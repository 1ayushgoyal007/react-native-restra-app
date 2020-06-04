import React from 'react';

import {View, Text, Image, Button, StyleSheet} from 'react-native';
import ResultsList from './ResultsList';

const ResultsDetail = ({result}) =>{

return <View style={styles.container} >
    <Image style={styles.imageStyle} source={{  uri:result.image_url }} />
    <Text style={styles.name} >{result.name}</Text>
    <Text>{result.rating} rating {result.review_count} reviews </Text>
</View>

}

var styles = StyleSheet.create({
    container:{
        marginLeft:12
    },
    imageStyle:{
        width:250,
        borderRadius:4,
        height:150,
        marginBottom:5
    },
    name:{
        fontWeight:'bold',
        fontSize:15
    }
});

export default ResultsDetail;