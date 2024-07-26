import Header from '../Headers/Header';
import UserCard from '../UserCard/UserCard';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import iphone from '../../src/img/iphone_photo.png'

const Product = () => {
    const productsData = [
        {   
            id: 1,
            image:iphone,
            name:'iphone 15 pro max Mobile',
            price: '1,50,000'
        },
        {   
            id: 2,
            image:iphone,
            name:'Samsung Star Mobile',
            price: '110,000'
        },
        {   
            id: 3,
            image:iphone,
            name:'Lava Mobile',
            price: '1,30,000'
        },
        {   
            id: 4,
            image:iphone,
            name:'Poco Mobile',
            price: '20,000'
        },
        {   
            id: 5,
            image:iphone,
            name:'Nothing Mobile',
            price: '60,000'
        },
        {   
            id: 6,
            image:iphone,
            name:'laptop Dell',
            price: '1,25,000'
        },
        {   
            id: 7,
            image:iphone,
            name:'ASUS Laptop',
            price: '2,60,000'
        },
        {   
            id: 8  ,
            image:iphone,
            name:'Mi Laptop',
            price: '20,000'
        },
    ]
    return (
        <SafeAreaView style={styles.main}>
            <View style={styles.head}>
                <Header/>
            </View>
            <ScrollView style={styles.products}>
                <View style={styles.pCard}>
                    {
                        productsData.map((item)=>
                            <UserCard key={item.id} item={item}/>
                        )
                    }
                </View>
            </ScrollView>
        </SafeAreaView>
    )
};


const styles = StyleSheet.create({
    main:{
        backgroundColor:'black',
        width:'100%',
        height:'100%',

    },
    head:{
        backgroundColor:'green',
        width:'100%',
        height:'7%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    products:{
        // backgroundColor:'purple',
        display:'flex',
        width:'100%',
        height:'93%',
        // justifyContent:'center',
        // alignItems:'center'
    },
    pCard:{
        // backgroundColor:'red',
        width:'100%',
        display:'flex',
        alignItems:'center',
        paddingTop:20,
        paddingBottom:20,
        gap:15
    }
})


export default Product;