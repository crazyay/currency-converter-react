import { CssSyntaxError } from "postcss";
import { useEffect, useState } from "react"

function UseCurrencyConv(currency){
    const [data,setData]=useState({});
    let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
  useEffect(()=>{
    fetch(url)
    .then((res)=>{
      console.log("hello",res);
       return  res.json()
      })
    .then((res)=> {console.log(res)
            return setData(res)})
    //  .catch((err)=>{
    //   console.log("check",data);
    //   console.log(err);
    //  })
       
},[currency])

  return data;
}
export default UseCurrencyConv;