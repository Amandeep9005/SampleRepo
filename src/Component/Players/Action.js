
export const callService = () => async (dispatch) => {

    const response = await fetch(`http://localhost:1000/showAll`, {
        method: 'GET',
    });
const data = await response.json();
console.log("Data",data)

dispatch({type:"CALL_SERVICE",data});
};

export const getAccessCode=() => async (dispatch) => {
    const REDIRECT_URL=`http://localhost:3000/handleLogin`;


const code = new URLSearchParams(window.location.search).get('code');

const body = `code=${code}&redirect_uri=${encodeURIComponent(
    REDIRECT_URL
)}&client_id=853766637543-i8p9ldgjbgskl0ho5k9h63b02svadmlv.apps.googleusercontent.com&client_secret=F0yUFiMpqL0q4nGZq3PiKYu6&grant_type=authorization_code`;

const response = await fetch(`https://oauth2.googleapis.com/token`, {
    method: 'post',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    },
    body,
});
let data;
  try {
    data = await response.json();
  } catch (err) {
    console.log(err);
  }
    dispatch({type: "GET ACCESS TOKEN", data});
  



};