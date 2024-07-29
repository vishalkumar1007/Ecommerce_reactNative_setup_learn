import {View , Text, StyleSheet} from 'react-native';

const SignUp = ()=>{
    return(
        <View style={styles.main}>
            <Text>SignUp Page</Text>
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

export default SignUp;