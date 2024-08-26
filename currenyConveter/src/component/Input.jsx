import { useId } from "react"

const Input = ({label,
    className="",
    amount,
    onAmountChange,
    onCurrencyChange,
    selectCurrency="usd",
    currencyOptions=[],
    amountDisable=false,
    currencyDisable=false,
  }) => {

    const inputAmountId=useId();
  return (
    <div className={` p-3 rounded-lg text-sm flex bg-white ${className}`}>
      <div className="w-1/2 ">
      <label htmlFor={inputAmountId} className="text-black/40 mb-2 inline-block"
      >{label}</label>
      <input type="number" 
      id={inputAmountId}
      value={amount} 
      disabled={amountDisable} 
      onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}
      placeholder="Amount"
      className="outline-none w-full bg-transparent py-1.5"
      />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
      <p className="text-black/40 mb-2 w-full">Currency Type</p>
      <select className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none" value={selectCurrency}
      disabled={currencyDisable} onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}
      >
        {currencyOptions.map((currency)=>(
            <option key={currency} value={currency}>
           {currency}
        </option>
        ))}
      </select>

      </div>
    </div>
  )
}

export default Input
