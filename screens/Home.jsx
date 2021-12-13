import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { AntDesign, EvilIcons } from '@expo/vector-icons';
import Button from "../UI/Button";


const Home = () => {
    return (
        <View  >
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, paddingHorizontal: 22 }}>

                <View style={styles.searchBar}>
                    <EvilIcons name="search" size={24} color="#1A237E" />
                    <TextInput
                        placeholder="Search Customer"
                        underlineColorAndroid="transparent"
                    />


                </View>




                <AntDesign name="filter" size={26} color="#1A237E" />


                <AntDesign name="pdffile1" size={26} color="#1A237E" />
            </View>

            

            <View style={styles.Button}>
           
                <Button style={styles.b1}

                    label="Add Customer"


                />
            </View>






        </View>

    )
}
const styles = StyleSheet.create({


    searchBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: 12,
        fontFamily: 'open-sans',
        borderWidth: 1,
        width: "70%",
        paddingVertical: 5,
        marginBottom: 10,
        borderRadius: 5,
        borderColor: "#1A237E",
        borderWidth: 1.2,
        color: "black",

        paddingHorizontal: 30,
    },

    Button: {
        paddingHorizontal: 50,
        marginTop: 325,
        marginLeft: 70,
        width: "93%",
        borderRadius: 50

    },
    b1: {
        borderRadius: 50,
        height: 45


    }


})
export default Home


