    // const response = await fetch('https://fintelvalues-70aea147fb44.herokuapp.com/api/v1/users/account',{
        const baseUrl =  'http://localhost:3000/api/v1/'

    let token 
   
const get_access_token = ()=>{

    try {
     token =  JSON.parse(localStorage.getItem("dashboard"))
    //  console.log("worked",token)
    } catch (error) {
        console.log(error)
    }

    return token
}
const set_access_token = (key)=>{

    try {
     localStorage.setItem("dashboard", JSON.stringify(key) )
    //  console.log("worked",token)
    } catch (error) {
        console.log(error)
    }

}




export {baseUrl, get_access_token, set_access_token}