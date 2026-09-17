import Profile from "./Profile"
import Interests from "./Interests"
import Settings from "./Settings"
import {useState} from "react"
import  {useDispatch, useSelector} from "react-redux";
import {setUser} from "../store/userSlice"

function TabForm(){
    const user = useSelector((state)=>state.user);
    const dispatch= useDispatch();
    const [activetab, setActivetab] = useState("profile");

    const tabHandler= (tab)=>{
        setActivetab(tab);
    }

    const submitHandler = ()=>{
        console.log(user);
        dispatch(setUser(user));
    }
    return (
        <div className="flex flex-col justify-center">
            
            <div className="flex flex-row justify-center ">
            <div className={`w-16 h-32 ${activetab==="profile"? "text-yellow-500 border-green-500": "text-black"}`}
            onClick={()=> tabHandler("profile")}>
                <h3>Profile</h3>
            </div>
          <div className={`w-20 h-32 ${activetab==="interests"? "text-yellow-500 border-green-500": 'text-black'}`}
           onClick ={()=> tabHandler("interests")}>
            <h3>Interests</h3>
          </div>
          <div className={`w-16 h-32 ${activetab==="settings"? "text-yellow-500 border-green-500": 'text-black'}`}
           onClick ={()=> tabHandler("settings")}>
            <h3>Settings</h3>
           </div>

            </div>
         {/* Content */}
           <div className="flex justify-center">
                {
                    (activetab === "profile")? <Profile setActivetab={setActivetab}/>:
                        activetab === "interests"? <Interests setActivetab={setActivetab}/>: <div>
                            <Settings setActivetab={setActivetab}/>
                            <button className="my-10"
                             onClick={()=>{submitHandler()}}>
                                Submit
                            </button>
                        </div>
                }
           </div>
        </div>
    )
}

export default TabForm;