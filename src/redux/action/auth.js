import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl, get_access_token } from "../baseUrl";

// console.log(get_access_token())



const getUserProfile = createAsyncThunk('user/profile',  async(data, {rejectWithValue})=> {
   try {      
   
        const response = await fetch(`${baseUrl}users/account`,{ 

        method: 'get',
         headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${get_access_token()}`

         },

  })
  if(response.status === 401){

   const error = await response.json();

   console.log(error)
   // return error
   return rejectWithValue(error);
  }
  const result = await response.json();
  console.log(result, "hey")
  return result
} catch (error) {
   // return error
   return rejectWithValue({ message: 'Network error, please try again later.' });

}
 
})

const userLogin = createAsyncThunk('user/login', async(data, {rejectWithValue })=> {
   try{
           const response = await fetch(`${baseUrl}users/login`,{ 
   
           method: 'POST',
           headers: {
             'Content-type': 'application/json',
           },
           body: JSON.stringify({user: data}),
         })

         if (!response.ok) {
            // Extract error message from the response if available
            const error = await response.json();
            return rejectWithValue(error);
          }
      
          const result = await response.json();
          return result;
      //   return response
         } catch (error){
            return rejectWithValue({ message: 'Network error, please try again later.' });

         }
})

export {getUserProfile, userLogin}