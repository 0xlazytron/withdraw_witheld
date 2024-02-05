
import './App.css'
import logo from "./assets/logo.png"
function App() {

  return (
    <div className="w-full h-[1060px] relative overflow-hidden bg-[#0a0a0a] justify-center">
      <div className="flex flex-col w-full justify-start items-center top-5 gap-10">
        <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-[1029px]">
          <img
            src={logo}
            className="flex-grow-0 flex-shrink-0 w-[70px] h-[70px] object-cover"
          />
          <div
            className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[178px] relative gap-2.5 p-2.5 rounded-lg"
            style={{
              background:
                "linear-gradient(to right, #d16ba5 0%, #9a9ae1 27.17%, #69bff8 52.44%, #52cffe 76.7%, #5ffbf1 100.81%)",
            }}
          >
            <button className="flex-grow-0 flex-shrink-0 text-base text-left text-white">Select Wallet</button>
          </div>
        </div>
        <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[649px] relative gap-2.5 p-2.5 rounded-xl bg-[#141414]">
          <p className="flex-grow-0 flex-shrink-0 text-xl text-left">
            <span className="flex-grow-0 flex-shrink-0 text-xl text-left text-[#f20000]">NOTE:</span>
            <span className="flex-grow-0 flex-shrink-0 text-xl text-left text-white">
              {" "}
              Only the token Owner can ithdraw the withheld Tokes
            </span>
          </p>
        </div>
        <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 gap-[89px] p-10 rounded-xl bg-[#141414]">
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-[237px]">
            <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 relative gap-3">
              <p className="flex-grow-0 flex-shrink-0 text-xl font-bold text-left text-white">
                Tokens Withdrawn
              </p>
              <p className="flex-grow-0 flex-shrink-0 text-base text-left text-white">200 $ASV</p>
            </div>
            <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 relative gap-3">
              <p className="flex-grow-0 flex-shrink-0 text-xl font-bold text-left text-white">
                Tokens to Withdraw
              </p>
              <p className="flex-grow-0 flex-shrink-0 text-base text-left text-white">2000 $ASV</p>
            </div>
          </div>
          <div
            className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[178px] relative gap-2.5 p-2.5 rounded-lg"
            style={{
              background:
                "linear-gradient(to right, #d16ba5 0%, #9a9ae1 27.17%, #69bff8 52.44%, #52cffe 76.7%, #5ffbf1 100.81%)",
            }}
          >
            <button className="flex-grow-0 flex-shrink-0 text-base text-left text-white">Withdraw</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
