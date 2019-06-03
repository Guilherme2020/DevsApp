import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { getContactList,createChat } from '../actions/ChatActions'
import ContatoItem from '../components/contatoList/ContatoItem'


export class ContatoList extends Component {
    static navigationOptions = {
        title: '',
        header: null,
        tabBarLabel: 'Contatos'
    }
    constructor(props) {
        super(props)
        this.state = {

        }
        this.props.getContactList(this.props.uid)

    }

    contatoClick = (item) => {

        this.props.createChat(this.props.uid,item.key)

        this.props.navigation.navigate('ConversasStack')
        
        
        
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Paagina Contao...
                </Text>

                <FlatList
                    data={this.props.contacts}
                    renderItem={({ item }) => <ContatoItem data={item} onPress={this.contatoClick(item)} /> }
                />

            </View>
        )
    }




}
const styles = StyleSheet.create({
    container: {
        margin: 10
    }
})

const mapStateToProps = (state) => {
    return {
        contacts: state.chat.contacts,
        uid: state.auth.uid,
        // activeChat: state.chat.activeChat
    }
}
const ContatoListConnect = connect(mapStateToProps, { getContactList,createChat })(ContatoList)
export default ContatoListConnect
