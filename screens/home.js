import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { View, ScrollView, TextInput, Button} from 'react-native';

import Data from './data';

export default function Home({navigation,route}){
    
    const [search, setSearch] = useState('');
    const [books,getbook] = useState([]);
    const [query, getQuery] = useState('');

   
    useEffect(()=>{
        if(search!=''){
        getBooks();
        }
    },[query])


    const  getBooks = async ()  =>{
        
        
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=AIzaSyDO4pA9zuCWzTvl3dsgSKBPve2GlRJKiZc&maxResults=40`);
        const data = await response.json();

        
        if(data.totalItems!=0){
            getbook(data.items)         
        }
        else{
            alert("The entered book can not be found. Please check the name agian.");
            getbook([])
        }

            
    }

    const getSearch = () =>{
        
        if(search!=''){
            getQuery(search);
        }
        else{
            alert("book name required");
        }
        
    }

    
    const booksTobeDisplayed = [];

    books.forEach(book=>{
        if(booksTobeDisplayed.filter(b=>b.id==book.id).length==0){
            booksTobeDisplayed.push(book);
        }
     
    });

    return(
        
        
        <ScrollView>

            <View key={1}>

                <TextInput style={{margin: 20,}} onChangeText={text => setSearch(text)} value={search} placeholder="Find your favourite books"/>

                <View >
                    <Button title="click me"  onPress={getSearch}/>
                </View>

                {booksTobeDisplayed.filter(book=> book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail).map((book,idx) =>(
                    <Data 
                        key = {book.id}
                        src={book.volumeInfo.imageLinks.thumbnail} 
                        buy = {book.volumeInfo.infoLink}
                        navigation = {navigation}
                    />
                ))}
    
            </View>

        </ScrollView>

    );
}