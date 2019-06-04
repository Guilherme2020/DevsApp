import React,{Component} from 'react'
import {View,Text,StyleSheet} from 'react-native'
import {connect} from 'react-redux'
import {checkLogin} from '../actions/AuthActions'
import {NavigationActions,StackActions} from 'react-navigation'



export class Preload extends Component {
    static navigationOptions = {
        title:'',
        header: null
    }
    constructor(props){
        super(props)
        this.state = {

        }
        this.props.checkLogin();

        window.globalNavigator = this.props.navigation;
    }

    directPages(){


        if (this.props.status == 1) {
            // this.props.navigation.navigate('Home')
            this.props.navigation.dispatch(StackActions.reset({
                index:0,
                actions: [
                    NavigationActions.navigate({
                        routeName:'Conversas'
                    })
                ]
            }))
        }else if (this.props.status == 2) {
            // this.props.navigation.navigate('Home')
            this.props.navigation.dispatch(StackActions.reset({
                index:0,
                actions: [
                    NavigationActions.navigate({
                        routeName:'Home'
                    })
                ]
            }))
        }

    }

    componentDidMount(){

        this.directPages()


    }
    componentDidUpdate(){
        this.directPages()

    }

    render(){
        return(
            <View style={styles.container}>
                <Text>Carregando...{this.state.status}</Text>
            </View>
        )
    }
        



}
const styles = StyleSheet.create({
    container: {
        margin:10
    }
})

const mapStateToProps = (state) => {
    return{
        status:state.auth.status
    }
}
const PreloadConnect = connect(mapStateToProps,{checkLogin})(Preload)
export default PreloadConnect
