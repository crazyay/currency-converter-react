
function InputBox({label,amount, setAmount, options,currency, disabled,setCurrency}){

    return(
        <>
         <div className="w-full ">
             <input type="number" className="w-full border-e-8 h-16 p-2 font-bold" value={amount} onChange={(e)=>setAmount(Number(e.target.value ) )} placeholder={label} disabled={disabled}>
            </input>
                    <select className="font-bold" value={currency} onChange={(e)=>setCurrency(e.target.value)}> 
                           {  options.map((option)=>{
                                  return (
                                    <option key={option}>
                                     { option }  
                                     </option>
                                  )
                           })
                                 
                                }
                        </select>
         </div>
        </>
    )
}
export default InputBox