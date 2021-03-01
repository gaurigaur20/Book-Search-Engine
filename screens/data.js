import React from 'react';
import {Image, View, Pressable} from 'react-native';

export default function Data({src,buy, navigation }){
   
  let url = {buy};
  let sour = {src};


  return(

    <View>
        
      <Pressable onPress={()=>navigation.navigate('Description',{URL: url.buy})} >

        <Image source={{uri: sour.src}}
        style={{ width: 128,
        height: 199, margin: 10,}}    
        />

      </Pressable>

    </View>

  )
}

