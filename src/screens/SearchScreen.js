import React, {useState} from "react";
import { Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../Components/SearchBar';
import useResults from '../Hooks/useResults';
import ResultsList from '../Components/ResultsList';


const SearchScreen  = ( ) => {
    const [term, setTerm] = useState("");
    const [searchApi, results, errorMessage] = useResults();

    const filterResults = (price) =>{
        return results.filter(result=>{
            return result.price===price;
        })
    }

    return <>
        <SearchBar
         term = {term}
         onTermChange={(newTerm)=> setTerm(newTerm) }
         onTermSubmit = {()=>searchApi(term)} />

         {errorMessage ? <Text>{errorMessage}</Text> : null}
        
        <ScrollView>
        <ResultsList  results = {filterResults("$")} title = "Cost Effective" />
        <ResultsList  results = {filterResults("$$")} title = "Bit Pricer" />
        <ResultsList  results = {filterResults("$$$")} title= "Big Splender" />
        </ScrollView>
    </>
}

var styles = StyleSheet.create({});

export default SearchScreen;