import {View , Text, StyleSheet} from 'react-native';

const Login = ()=>{
    return(
        <View style={styles.main}>
            <Text>Login Page</Text>
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

export default Login;