import React , {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {callService} from "./Action";
import { Box,Button } from '@material-ui/core';



const PlayerAction =()=>{
const {name,team,data}=useSelector((state)=>({
    name:state.Players.name,
    team:state.Players.team,
    data:state.Players.data
}));
const dispatch = useDispatch();

useEffect (()=>{
    if(!name){
    dispatch({type:"ADD_PLAYER"})}
    if(!team){
        dispatch({type:"ADD_TEAM"})}
    
},[name]);
return (<><Box>
        Hello {name} from {team}        
    </Box>
   
    <Button onClick={()=>dispatch(callService())}>Show Data from the</Button></>);
}


export default PlayerAction; 