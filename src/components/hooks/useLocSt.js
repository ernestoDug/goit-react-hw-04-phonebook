import { useState, useEffect } from "react";

 const useLocSt = (key, begincontact) => {
    const [state, setState] = useState(() => {
     return JSON.parse(localStorage.getItem('contacts')) ?? begincontact;});
     // завантаження в л/с
   useEffect(() => { 
     localStorage.setItem('contacts', JSON.stringify(state));
       }, 
     [key, state]);
     return [state, setState]
    }
   

    export default useLocSt