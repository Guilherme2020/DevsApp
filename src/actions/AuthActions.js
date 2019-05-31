import firebase from '../FirebaseConnection'



export const checkLogin = () => {

    return (dispatch) => {

        let user = firebase.auth().currentUser;
        if(user){
            dispatch({
                type: 'changeStatus',
                payload:{
                    status: 1
                }
            });
            //usuario logado
        }else{
            dispatch({
                type:'changeStatus',
                payload: {
                    status: 2  
                }
            })
            //usuario nao logado
        }

    }

};


export const changeName = (name) => {
    return{
        type:'changeName',
         payload:{
            name: name
         }
    }
    

}

export const changeEmail = () => {
    return{
        type:'changeEmail',
        payload:{
            email:email
        }
    }
}
export const changePassword = (pass) => {
    return{
        type:'changePassword',
        payload:{
            password:pass
        }
    }
}