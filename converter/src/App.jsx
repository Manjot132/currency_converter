import { useState , useEffect} from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import InputBox from "./InputBox/InputBox";
import Usecurrency from "./hooks/Usecurrency";
import { Themecontextprovider } from "./context/context";
import Button from "./InputBox/Button";

function App() {
  const [themeMode, setThemeMode] = useState("dark")
  
  const lightTheme = () => {
    setThemeMode("light")
  }
  const clicker=()=>{
    setfrom(to);
    setto(from);
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  // actual change in theme

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])

  const [from,setfrom]=useState('usd');
  const [to,setto]=useState('inr');
  const [date,setdate]=useState('2024-04-04');
  const [amount,setamount]=useState(0);
  const [convertedAmount,setconvertedAmount]=useState(0);
  const currencyInfo=Usecurrency(from,date);
  
  const options=Object.keys(currencyInfo);
  useEffect(() => {
    setconvertedAmount((amount*currencyInfo[to]).toFixed(2));
  }, [amount,from,to,currencyInfo,date]); 
  return (
    <>
    <Themecontextprovider value={{themeMode, lightTheme, darkTheme}}>
      <div className="h-screen flex flex-row justify-center dark:bg-slate-600  ">
      
        <div className="flex flex-col bg- w-2/3 h-2/3 rounded-lg shadow-xl  dark:bg-black">
          <div className="h-4/5 w-full flex flex-row  dark:bg-black">
            <InputBox 
           label={from}
            amount={amount}
            amountChanger={(amount)=>{setamount(amount)}}
            currencyOptions={options}
            activeCurrency={from}
            currencyChanger={(currency)=>{setfrom(currency)}}
            />
             <InputBox 
           label={to}
           activeCurrency={to}
            amount={convertedAmount}
            amountChanger={(convertedAmount)=>{setconvertedAmount(convertedAmount)}}
            currencyOptions={options}
            currencyChanger={(currency)=>{setto(currency)}}
            />
          </div>
          <div className="py-6 dark:bg-black bg-slate-200 text-gray-500 font-extrabold font-serif" >This was created By ogeralt78@Gmail.com. To See more such creations check out my Github profile. See you soon.Special Thanks To Api Created By Fawaz Ahemad </div>
        </div>
       <Button/>
       <button onClick={clicker} className=" bg-red-200 dark:bg-white h-12 w-19 mx-8 mt-11 rounded-2xl px-5  ">Swap</button>
      
      </div>
      </Themecontextprovider>
    </>
  );
}

export default App;
