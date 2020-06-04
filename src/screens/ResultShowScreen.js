import React,{useState , useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import yelp from '../api/yelp';

const ResultShowScreen = ( {navigation} ) =>{
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');
    

    const getResult = async (id) =>{
        var response = await yelp.get(`/${id}`);
        setResult(response.data);
    }

    useEffect(()=>{
        getResult(id);
    },[]);

    if(!result){
        return null;
    }

    return <View>
        <Text style={styles.name} >{result.name}</Text>
        <FlatList 
            data={result.photos}
            keyExtractor={(photo)=>photo}
            renderItem={({ item })=>{
                return <Image style={styles.image} source={{ uri: item }} />
            }}
        />
    </View>
}

var styles = StyleSheet.create({
    image:{
        height:200,
        width:300,
        marginBottom:10,
        marginLeft:10
    },
    name:{
        marginLeft:10,
        marginTop:10,
        fontSize:18,
        fontWeight:"bold"
    }
});

export default ResultShowScreen;