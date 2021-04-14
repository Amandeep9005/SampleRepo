
export const callService = () => async (dispatch) => {

    const response = await fetch(`http://localhost:1000/showAll`, {
        method: 'GET',
    });
const data = await response.json();
console.log("Data",data)

dispatch({type:"CALL_SERVICE",data});
};