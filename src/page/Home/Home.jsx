import {View , Text, StyleSheet} from 'react-native';

const Home = ()=>{
    return(
        <View style={styles.main}>
            <Text>Home Page</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    main:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }
})

export default Home;