import React,{useState} from 'react';
import {View, TextInput,Text, Button,StyleSheet} from 'react-native'; 
import {Feather} from   '@expo/vector-icons';


const SearchBar=( {term, onTermChange, onTermSubmit} ) =>{

    const [name, setName] = useState("");

    return <View style = {styles.backgroundStyle} >
        <Feather name="search" style={styles.iconStyle} />
        <TextInput 
        style = {styles.inputStyle}
        placeholder="Search"
        autoCorrect={false}
        autoCapitalize="none"
        value = {term}
        onChangeText = {(newTerm)=>onTermChange(newTerm)}
        onEndEditing = {()=>onTermSubmit()}
        />
    </View>
}

const styles = StyleSheet.create({
    backgroundStyle:{
        backgroundColor:"#f0EFEF",
        height:50,
        borderRadius:10,
        margin:10,
        marginBottom:10,
        flexDirection:"row"
    },
    inputStyle:{

        flex:1,
        fontSize:18
    },
    iconStyle:{
        fontSize:35,
        alignSelf:"center",
        marginHorizontal:10


    }
});

export default SearchBar