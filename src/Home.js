import React,{Component} from 'react'
import {View,Text,Button,StyleSheet} from 'react-native'
import {connect} from 'react-redux'
import {checkLogin} from './actions/AuthActions'




export class Home extends Component {
    static navigationOptions = {
        title:'',
        header: null
    }
    constructor(props){
        super(props)
        this.state = {

        }
        this.props.checkLogin();
    }

    signinButton = () => {


    }
    signupButton = () => {
        this.props.navigation.navigate('SignUp')
    }

    render(){
        return(
            <View style={styles.container}>
                <Text styl={styles.text}>Devsapp 1.0</Text>
                <View style={styles.buttonArea}>
                    <Button
                        onPress={this.signinButton}
                        title='Login'
                    />
                    <Button
                        onPress={this.signupButton}
                        title='Cadastrar'
                    />
                </View>
            </View>
        )
    }
        



}
const styles = StyleSheet.create({
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
        status:state.auth.status
    }
}
const HomeConnect = connect(mapStateToProps,{checkLogin})(Home)
export default HomeConnect
