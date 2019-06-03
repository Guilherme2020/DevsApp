import React,{Component} from 'react'
import {View,Text,StyleSheet} from 'react-native'
import {connect} from 'react-redux'




export class ConversasList extends Component {
    static navigationOptions = {
        title:'Conversas',
        // header: null,
        tabBarLabel:'Conversas'
    }
    constructor(props){
        super(props)
        this.state = {

        }
       
    }
    componentDidUpdate(){

        if(this.props.activeChat != ''){
            this.props.navigation.navigate('ConversaInterna')
        }

    }
    render(){
        return(
            <View style={styles.container}>
                <FlatList
                    data={this.props.chats}
                    renderItem={({item})=>{
                        return(<TexT>...</TexT>)
                    }}
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
        uid:state.auth.uid,
        activeChat:state.chat.activeChat,
        chats:state.chat.chats
    }
}
const ConversasListConnect = connect(mapStateToProps,{})(ConversasList)
export default ConversasListConnect
