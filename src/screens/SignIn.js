
import React,{Component} from 'react'
import {View,Text,TextInput,StyleSheet,Button,Keyboard} from 'react-native'
import {connect} from 'react-redux'
import {checkLogin,changeEmail,changePassword,signIn} from '../actions/AuthActions'




export class SignIn extends Component {
    static navigationOptions = {
        title:'Login',
        header:null

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

                <Text>
                    Usuário Logado: {this.props.uid }
                </Text>

                <Text>
                    Status de Login : {this.props.status}
                </Text>

                <Text style={styles.text}>Digite seu email</Text>
               
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
                        title='Entrar'
                        onPress={()=>{
                            this.props.signin(this.props.email,this.props.password)
                        }}
                    />
                </View>
            </View>
        )
    }
        



}
const mapStateToProps = (state) => {
    return{
        uid: state.auth.uid, 
        email:state.auth.email,
        password:state.auth.password,
        status: state.auth.status

    }
}
const SignInConnect = connect(mapStateToProps,{checkLogin,changeEmail,changePassword,signIn})(SignIn)
export default SignInConnect


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