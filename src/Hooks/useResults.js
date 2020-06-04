import React, {useEffect,useState} from 'react';
import yelp from '../api/yelp';

export default () =>{
    const [results, setResults] = useState([]);
    const [errorMessage,setErrorMessage] = useState("");

    const searchApi = async (searchTerm) => {
        console.log("times");
        try {
            var response = await yelp.get("/search",{
                params:{
                    limit:50,
                    term:searchTerm,
                    location: 'san jose'
                }
            });
            setResults(response.data.businesses);
            setErrorMessage("");
        }
        catch (err){
            setResults([]);
            console.log(err);
            setErrorMessage("Something Went Wrong");
        }
    }

    useEffect(()=>{
        searchApi("noodle");
    },[]);

    return [searchApi, results, errorMessage];

}