import {useState, useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import {setUser} from "../store/userSlice"

function Interests({setActivetab}){
    const user= useSelector((state)=>state.user);
    const dispatch= useDispatch();
    const [interest, setInterest]= useState("");
    const submitHandler= (e) =>{
        e.preventDefault();
        dispatch(setUser({interest}));
        console.log(user);
        setActivetab("settings")
    }
    return (
            <form className="flex flex-col"
                onSubmit={submitHandler}>
                <label>
                    Interest    :
                    <input type="text"
                        name="interest"
                        value={interest}
                        onChange ={(e)=>{
                            setInterest(e.target.value)
                        }}
                        >
                    </input>
               </label>

                <button>
                    Next
                </button>
            </form>
                
    )
}

export default Interests;