import React,{Component} from 'react'
import {View,TextInput,Image,Platform,KeyboardAvoidingView,FlatList,StyleSheet,TouchableHighlight,BackHandler} from 'react-native'
import {connect} from 'react-redux'
import {setActiveChat,sendMessage,monitorChat,monitorChatOff} from '../actions/ChatActions'
import MenssagemItem from '../components/conversaInterna/MenssagemItem'


export class ConversaInterna extends Component {
    
    static navigationOptions = ({navigation}) => ({
        // title:'Conversa Interna',
        tabBarVisible: false,
        title:navigation.state.params.title,
        headerLeft: (
            <TouchableHighlight onPress={()=>{navigation.state.params.voltarFunction()}} 
                underlayColor={false}>
                <Image 
                    source={
                        require('react-navigation/src/views/assets/back-icon.png')
                    } 
                    style={{width:25,height:25,marginLeft:20}} 
                />
            </TouchableHighlight>
        )
      
    })

    constructor(props){
        super(props)
        this.state = {
            tmpMsg:[
                {
                    key:1,m:'oi,tudo bem?',
                    uid:123
                },
                {
                    key:2,m:'tudo, e voce?',
                    uid:123
                },
                {
                    key:3,m:"Ok, legal",
                    uid:123,
                },
                {
                    key:4,
                    uid:123,
                    m:"Esta é uma menssagem bem grande para que ela aparecça quando deve aparecer"
                }
            ],
            inputText:''
        }
       
    }
    componentDidMount(){
        this.props.navigation.setParams({voltarFunction:this.voltar})
        BackHandler.addEventListener('hardwareBackPress',this.voltar)
        this.props.monitorChat(this.props.activeChat)
    }
    componentWillUnmount(){
        BackHandler.removeEventListener('hardwareBackPress',this.voltar)
    }
    voltar = () => {
        this.props.monitorChatOff(this.props.activeChat)

        this.props.setActiveChat('')
        this.props.navigation.goBack()
        return true
    }
    sendMsg = () => {
        let txt = this.state.inputText

        let state = this.state;
        state.inputText = ''
        this.setState(state)
       
        this.props.sendMessage(txt,this.props.uid,this.props.activeChat )

    }
    render(){
        let AreaBehavior = Platform.select({ios:'padding',android:null})
        let AreaOffset = Platform.select({ios:64,android:null})

        return(
            <KeyboardAvoidingView  behavior={AreaBehavior} keyboardVerticalOffset={AreaOffset} style={styles.container}>
                <FlatList 
                    ref={(ref)=>{ this.chatArea = ref }}
                    onContentSizeChange={()=>{this.chatArea.scrollToEnd({animated:true})}}
                    onLayout={()=>{this.chatArea.scrollToEnd({animated:true})}}

                    style={styles.chatArea}
                    data={this.props.activeChatMessages}
                    renderItem={({item})=><MenssagemItem data={item} me={this.props.uid} />}

                />
                <View style={styles.sendArea}>
                   <TextInput value={this.state.inputText} onChangeText={(inputText)=>this.setState({inputText})}  style={styles.sendInput} />
                   <TouchableHighlight 
                         underlayColor={false}
                         style={styles.sendButton}
                         onPress={null}   
                    >
                        
                         <Image style={styles.sendImage} source={require('../assets/images/send.png')}  />
                   </TouchableHighlight>
                </View>
            </KeyboardAvoidingView>
        )
    }
        



}
const styles = StyleSheet.create({
    container: {
       flex:1
    },
    chatArea:{
        flex:1,
        backgroundColor:'#CCCCCC'
    },
    sendArea:{
        height:50,
        backgroundColor:'#EEEEEE',
        flexDirection: 'row',
    },
    sendInput:{
        height:50,
        flex:1
    },
    sendButton:{
        width:50,
        height:50,
        justifyContent:'center',
        alignItems: 'center',
    },
    sendImage:{
        width:40,
        height:40
    }
})

const mapStateToProps = (state) => {
    return{
        status:state.auth.status,
        uid:state.auth.uid,
        activeChat:stat.chat.activeChat,
        activeChatMessages:state.chat.activeChatMessages
    }
}
const ConversaInternaConnect = connect(mapStateToProps,{setActiveChat,sendMessage})(ConversaInterna)
export default ConversaInternaConnect
