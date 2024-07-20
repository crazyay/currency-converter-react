import { useState } from 'react'
import UseCurrencyConv from './hooks/useCurrencyConv'
import InputBox from './components/InputBox'
function App() { 
  // const [currency, setCurrency]=useState("usd")
  const [disabled,setdisabled]=useState(true);
  const [from, setFrom]=useState('usd')
  const data=UseCurrencyConv(from);
  const [amount, setAmount] = useState()
  const [to,setTo]=useState('inr')
  const [changedAmount,setChangedAmount]=useState()
  const [options,setOptions]=useState([]);
  let currencies=[]
  if(data[from]){
    //  setOptions( Object.keys(data[from]))
    currencies=Object.keys(data[from])
  }else{
    console.log("data is undefined");
  }
  const convert=()=>{
    // console.log(data[from][to]);
    setChangedAmount(Number(amount*data[from][to]));
    // console.log(changedAmount);
  }


const swap = ()=>{
  const f=from;
  setFrom(to);
  setTo(from);
}

 

  return (   
    <>
     <div className=' flex  justify-center w-screen h-screen items-center bg-no-repeat bg-cover bg-center  bg-gray-600' style={{ backgroundImage: "url('https://img.freepik.com/free-vector/foreign-exchange-background_24908-54953.jpg') "}}>
     <div  className= ' border-4 border-gray-600   p-4 w-[50%]  h-fit flex flex-col justify-center items-center' style={{backdropFilter: 'blur(5px)'}} >
     <h1 className='text-2xl font-bold mb-4'>Currency Converter</h1>
      <InputBox  label='From' amount={amount} setAmount={setAmount} options={currencies} setCurrency={setFrom} currency={from}
        />
        <div className='w-full flex justify-center'>
          <button onClick={swap} className='bg-green-600 p-2 px-4 rounded-lg'>
            swap
          </button>
        </div>
        <InputBox  label='To' amount={changedAmount} setAmount={setChangedAmount} options={currencies} disabled={disabled}  currency={to} setCurrency={setTo}
        />
        <div className='mt-4 '> <button onClick={convert} className='bg-green-700 p-2 px-8 rounded-xl'>{from } to {to}</button></div>
    </div>
    </div>
    </>
  )
}

export default App
