const initialState = {
    name:'Fulano',
    email: '',
    password: '',
    uid:'',
    status: 0
}



const AuthReducer = (state = initialState,action) => {

    if(action.type == 'changeStatus'){
        // alert("Retorno: "+action.payload.status)
        return {...state,status:action.payload.status};
    }
    if(action.type == 'changeEmail'){
        return {...state,email:action.payload.email};
    }
    if(action.type == 'changeSenha'){
        return {...state,password:action.payload.pass}
    }
    if(action.type == 'changeName '){
        return {...state,name:action.payload.name}
    }
    if(action.type == 'changeUid'){
        return {...state,uid:action.payload.uid}
    }
    return state;

};

export default AuthReducer;