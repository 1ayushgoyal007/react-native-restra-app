import React from 'react';

import {withNavigation} from 'react-navigation';


import {Text,TouchableOpacity, View,StyleSheet,FlatList} from 'react-native';
import ResultsDetail from '../Components/ResultsDetail';
const ResultsList = ( { title, results, navigation } ) =>{

    if(!results.length){
        return null;
    }

    return (
    <View style={styles.container} >
        <Text style = {styles.title} >{title}</Text>
        <FlatList 
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={results}
            keyExtractor={(item)=>item.id}
            renderItem={({ item })=>{
                return (
                <TouchableOpacity onPress={()=>navigation.navigate('ResultShow',{id: item.id })} >
                    <ResultsDetail result = {item} />
                </TouchableOpacity>
                );
            }}
        />
    </View>
);
}

const styles = StyleSheet.create({
    title:{
        fontSize:20,
        fontWeight:'bold',
        marginLeft:10,
        marginBottom:5
    },
    container:{
        marginBottom:12
    }
});

export default withNavigation(ResultsList);