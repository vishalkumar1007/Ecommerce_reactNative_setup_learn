
import { View , Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { addToCard , removeFromCard } from '../../redux/action';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import { useEffect, useState } from 'react';


const UserCard = (props) => {
    const item = props.item;
    const itemDispatch = useDispatch();
    const cardData = useSelector((state)=>state.reducer);
    const [allReadyAdded , setAllReadyAdded] = useState(false);

    const handelAddToCard = (item)=>{
        itemDispatch(addToCard(item))
    }
    
    const handelRemoveFromCard = (item)=>{
        itemDispatch(removeFromCard(item.id))
    }

    useEffect(()=>{
        if(cardData && cardData.length){   
            let isAdded = false;         
            cardData.forEach(element => {
                if(item.id===element.id){
                    isAdded=true;
                }
            });
            setAllReadyAdded(isAdded)
        }else{
            setAllReadyAdded(false)
        }
    },[cardData ])


    return (
        <View style={styles.cardMain}>
            <View style={styles.imageView}>
                <View style={styles.handelImage}>
                    <Image
                        style={styles.img}
                        source={item.image}
                    />
                </View>
            </View>
            <View style={styles.detail}>
                <View style={styles.name}>
                    <Text style={styles.cardText}>Name : {item.name}</Text>
                </View>
                <View style={styles.price}>
                    <Text style={styles.cardText}>Price : {item.price} </Text>
                </View>
            </View>
            <View style={styles.btnView}>
                {
                    allReadyAdded
                    ?
                    <TouchableOpacity style={[styles.pressBtn , {backgroundColor:'brown'}]} onPress={()=>{handelRemoveFromCard(item)}}>
                    <View style={styles.atcBtn}>
                        <Text style={styles.btnText}>Remove from Card</Text>
                    </View>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity style={[styles.pressBtn , {backgroundColor:'green'}]} onPress={()=>handelAddToCard(item)}>
                    <View style={styles.atcBtn}>
                        <Text style={styles.btnText}>Add to card</Text>
                    </View>
                    </TouchableOpacity>
                }
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    cardMain:{
        backgroundColor:'black',
        width:'70%',
        height:390,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        overflow:'hidden',
        borderColor:'gray',
        borderWidth:0.3
    },
    imageView:{
        // backgroundColor:'red',
        width:'100%',
        height:'76%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    handelImage:{
        // backgroundColor:'blue',
        width:'90%',
        height:'85%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    },
    img:{
        width:'100%',
        height:'100%',
        resizeMode:'contain'
    },
    detail:{
        // backgroundColor:'green',
        width:'100%',
        height:'12%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        gap:4,
        borderTopColor:'gray',
        // borderTopWidth:0.5
    },
    name:{
        // backgroundColor:'red',
        paddingLeft:10
    },
    price:{
        // backgroundColor:'gray',
        paddingLeft:10
    },
    cardText:{
        fontSize:12,
        // fontWeight:`500`
    },
    btnView:{
        // backgroundColor:'orange',
        width:'100%',
        height:'12%',
        display:'flex',
        justifyContent:'flex-end'
    },
    pressBtn:{
        backgroundColor:'blue',
        width:'100%',
        height:'80%',
        borderRadius:5,
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    btnText:{
        fontSize:17,
        fontWeight:`500`,
    }
})

export default UserCard;