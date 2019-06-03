
import React,{Component} from 'react'
import {View,Text,TextInput,StyleSheet,Button,Keyboard} from 'react-native'
import {connect} from 'react-redux'
import {checkLogin,changeEmail,changePassword,changeName,signUp} from '../actions/AuthActions'




export class SignUp extends Component {
    static navigationOptions = {
        title:'Cadastrar',

    }
    constructor(props){
        super(props)
        this.state = {

        }
        this.props.checkLogin();
    }

    componentDidUpdate(){
        if(this.props.status == 1){
            Keyboard.dismiss()
            this.props.navigation.navigate('Conversas')
        }
    }
    

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text}>Digite seu email</Text>
                <TextInput 
                    style={styles.input}
                    value={this.props.name}
                    onChangeText={this.props.changeName}
                />
                <TextInput 
                    style={styles.input}
                    value={this.props.email}
                    onChangeText={this.props.changeEmail}
                />
                <Text style={styles.text}>Digite sua senha </Text>
                <TextInput 
                    secureTextEntry={true}
                    style={styles.input}
                    value={this.props.password}
                    onChangeText={this.props.changePassword}
                />
                <View>
                    <Button 
                        title='Cadastrar'
                        onPress={()=>{
                            this.props.signUp(this.props.email,this.props.password)
                        }}
                    />
                </View>
            </View>
        )
    }
        



}
const styles = StyleSheet.create({
    input:{
        height:40,width:'80%',
        backgroundColor:'#DDDDDD'
    },
    container: {
        margin:10,flex:1,justifyContent:'center',
        alignItems: 'center',
    },

    text:{
        fontSize:30
    },
    buttonArea:{
        flexDirection:'row',
        justifyContent:'space-around',
        width:'100%'
    }

})

const mapStateToProps = (state) => {
    return{
        name:state.auth.name,
        email:state.auth.email,
        password:state.auth.password,
        status:state.auth.status
    }
}
const SignUpConnect = connect(mapStateToProps,{checkLogin,changeEmail,changePassword,changeName,signUp})(SignUp)
export default SignUpConnect
