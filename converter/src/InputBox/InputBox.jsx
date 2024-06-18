import React from 'react'

function InputBox({
    label,
    amount,
    amountChanger,
    activeCurrency,
    currencyChanger,
    currencyOptions

}) {
  return (
    <div className=' dark:bg-black bg-slate-200  flex w-1/2 h-full flex-col ' >
    <h1 className='font-serif dark:text-white text-6xl font-semibold mt-4 mx-auto'>{label.toUpperCase()}</h1>
    <select onChange={(e)=>{currencyChanger(e.target.value)}} value={activeCurrency} className='shadow-2xl border border-black h-4/10 py-4  w-2/3 rounded-lg mx-4  mt-11 '  name="" id="" >
    {currencyOptions.map((currency) => (
                            <option key={currency} value={currency}>
                            {currency}
                            </option>
                        ))}
    </select >
       <input  placeholder="Amount" className='px-4 shadow-2xl border-1 border-black py-5 h-4/10   w-2/3 rounded-lg mx-4 mt-11 ' name="" id="" type="text" value={amount} onChange={(e)=>{amountChanger(e.target.value)}} />

        </div>
       
  )
}

export default InputBox