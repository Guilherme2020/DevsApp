import React,{Component} from 'react'
import {View,Text,StyleSheet} from 'react-native'

let bgColor = '#EEEEEE'
let align = 'flex-start'
textAlign = 'left'
export default class MenssagemItem extends Component {

    constructor(props){
        super(props)
        
        if(this.props.data.uid == this.props.me){
            bgColor = '#9999FF'
            align = 'flex-end'
            textAlign = right
        }

        this.state = {
            bgColor:bgColor,
            align:align,
            textAlign:textAlign,
            dateMsg:this.getFormattedDate(this.props.data.date)
        }
    }


    getFormattedDate = (originalDate) => {

        let cDate = new Date()

        let mDate = originalDate.split(' ')

        let todayDate = cDate.getFullYear()+'-'+(cDate.getMonth()+1)+'-'+cDate.getDate()

        let newDate = mDate[1].split(':')
        // newDate = newDate[0]+':'+newDate[1]
        newDate = ((newDate[0]<10)?'0'+newDate[0]:newDate[0]+':'+((newDate[1]<10)?'0'+newDate[1]:newDate[0]))


        if(todayDate != mDate[0]){
            let newDateDays = newDate[0].split('-')
            newDate = newDateDays[2]+'/'+newDateDays[1]+'/'+newDateDays[0]+' '+newDate
              
        }

        return newDate

    }


  

    render(){
        return (
          <View style={[MenssagemItemStyles.area,{alignSelf: this.state.align,backgroundColor:this.state.bgColor}]}>
                <Text
                    style={{textAlign:this.state.textAlign}}
                >
                    {this.props.data.m}
                </Text>
                <Text style={MenssagemItemStyles.dateTxt}>
                    {this.state.dateMsg}
                </Text>
          </View>
        );
    }

}


const MenssagemItemStyles =  StyleSheet.create({
   area:{
        marginLeft:10,
        marginRight: 10,
        marginTop:5,
        marginBottom: 5,
        padding:10,
        maxWidth:'80%',borderRadius:5
   },
   dateTxt:{
       fontSize:11
   }

})