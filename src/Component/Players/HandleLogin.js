import React , {useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {getAccessCode} from "./Action";

 const HandleLogin =()=>{

    const {token}=useSelector((state)=>({
        token:state.Players.token,
    }));
    const dispatch = useDispatch();
    
    
    useEffect (()=>{
        dispatch(getAccessCode());
    },[]);

    
    return(
    <div>
        You are logeed in! {token}
    </div>)
}


export default HandleLogin; 