
import { View  , Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux'

const Header = () => {
    const cardData = useSelector((state)=>state.reducer)
    // console.warn(cardData);
    return (
        <View style={styles.main}>
            <Text style={styles.itemText}>Product : {cardData.length}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    main:{
        backgroundColor:'black',
        width:'100%',
        height:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    itemText:{
        fontSize:20
    }
})


export default Header;