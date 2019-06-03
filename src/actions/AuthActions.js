import firebase from '../FirebaseConnection'



export const checkLogin = () => {

    return (dispatch) => {


        firebase.auth().onAuthStateChanged((user)=>{
            if(user){
                dispatch({
                    type:'changeUid',
                    payload:{
                        uid:user.uid 
                    }
                })
            }else{
                dispatch({
                    type:'changeStatus',
                    payload:{
                        status:2
                    }
                })
            }
        })



        // let user = firebase.auth().currentUser;
        // if(user){
        //     dispatch({
        //         type: 'changeStatus',
        //         payload:{
        //             status: 1
        //         }
        //     });
        //     //usuario logado
        // }else{
        //     dispatch({
        //         type:'changeStatus',
        //         payload: {
        //             status: 2  
        //         }
        //     })
        //     //usuario nao logado
        // }

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

export const signIn = (email,password) => {

    return(dispatch) => {
        firebase.auth().signInWithEmailAndPassword(email,password)
            .then( (user) =>{
                let uid = firebase.auth().currentUser.uid
                dispatch({
                    type:'changeUid',
                    payload:{
                        uid:uid
                    }
                })
            })
            .catch((error)=>{
                switch(error.code){
                    case 'auth/invalid-email':
                        alert('email invalido')
                        break;
                    case 'auth/user-disabled':
                        alert('Usuario desativado')
                        break;
                    case 'auth/user-not-found':
                        alert('nao existe usuário')
                        break;
                    case 'auth/wrong-password':
                        alert('E-mail e/ou senha errados!')
                        break;
                    

                }
            })
    }

} 

export const signUp = (name,email,password) => {
    return(dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email,password)
            .then(()=>{
                
                let uid = firebase.auth().currentUser.uid;
                
                firebase.database().ref('users').child(uid).set({
                    name:name
                });

                dispatch({
                    type:'changeUid',
                    payload:{
                        uid:uid
                    }
                });


            })
            .catch((error)=>{
                switch(error.code){
                    case 'auth/email-already-in-use':
                        alert('Email já utilizado')
                        break;
                    case 'auth/invalid-email':
                        alert('Email inválido')
                        break;
                    case 'auth/weak-password':
                        alert('digite uma senha melhor');
                        break;
                    
                }
            })
    }
}

export const siginOunt = () => {

    firebase.auth().signOut();

    return {
        type:"changeStatus",
        payload:{
            status:2
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