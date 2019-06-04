import React,{Component} from 'react'
import {View,Text,StyleSheet} from 'react-native'
import {NavigationActions} from 'react-navigation'
import {connect} from 'react-redux'
import {siginOunt} from '../actions/AuthActions'



export class Config extends Component {
    static navigationOptions = {
        title:'',
        header: null,
        tabBarLabel:'Config'
    }
    constructor(props){
        super(props)
        this.state = {

        }
       
    }
    logout = () => {
        this.props.siginOunt();

        window.globalNavigator.navigate('Home')

        // this.props.navigation.dispatch(navigationOptions.reset({
        //     index:0,
        //     actions:[
        //         NavigationActions.navigate({routeName:'Home'})
        //     ]
        // }));
        
    }

    render(){
        return(
            <View style={styles.container}>
                <Text>Paagina Config...
                </Text>
                <Button
                    title='Sair'
                    onPress={this.logout}
                />
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
        status:state.auth.status,
        uid:state.auth.uid
    }
}
const ConfigConnect = connect(mapStateToProps,{siginOunt})(Config)
export default ConfigConnect
