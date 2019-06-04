import React,{Component} from 'react'
import {View,Text,StyleSheet,FlatList} from 'react-native'
import {connect} from 'react-redux'
import ConversasItem from '../components/conversasList/ConversasItem'
import {getChatList, setActiveChat} from '../actions/ChatActions'





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
        this.props.getChatList(this.props.uid)
    }
    componentDidUpdate(){

        if(this.props.activeChat != ''){
            this.props.navigation.navigate('ConversaInterna',{title:this.props.activeChatTitle})
        }

    }
    conversaClick = (data) => {

        this.props.setActiveChat(data.key)
        // alert("Clicou em "+data.key)
        
    }

    render(){
        return(
            <View style={styles.container}>
                <FlatList
                    data={this.props.chats}
                    renderItem={({item})=><ConversasItem data={item}  onPress={this.conversaClick}/> }
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
        activeChatTitle: state.chat.activeChatTitle,
        chats:state.chat.chats
    }
}
const ConversasListConnect = connect(mapStateToProps,{getChatList,setActiveChat})(ConversasList)
export default ConversasListConnect
