import React from 'react'
import {View, Text, StyleSheet,TextInput} from 'react-native'

const CustomInput = ({value,setValue,placeholder,secureTextEntry,Length,onBlur,keyType})=> {
    return (
        <View style={styles.root}>
                    <TextInput value={value} 
                    onChangeText={setValue}
                    placeholder={placeholder} 
                    secureTextEntry={secureTextEntry}
                    style={styles.input}
                    minLength={Length}
                    onBlur={onBlur}
                    keyboardType={keyType}
                    />
        </View>
    )
}
const styles = StyleSheet.create({
    root : {
       
        width : '100%',
     
    },
    input : {

    }


})
export default CustomInput;