import {useState} from"react"
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../store/userSlice";

function Profile({setActivetab}){
    const [name, setName]= useState("");
    const [age, setAge] = useState(0);
    const dispatch = useDispatch();
    const user = useSelector((state)=>state.user);
    const submitHandler= (e) =>{
        e.preventDefault();
        dispatch(setUser({name,age}));
        console.log(user);
        setActivetab("interests");
    }
    return (
        <div className="flex flex-col gap-5">
            <form className="flex flex-col gap-5"
            onSubmit ={submitHandler}>
                <label >
                Name  :
                <input  type="text"
                    name="name"
                    value={name}
                    onChange ={(e)=>{
                        setName(e.target.value)
                    }}
                    >
                </input>
               </label>
              
               <label>
                    Age   :
                    <input type="number"
                        name="age"
                        value={age}
                        onChange={(e)=>{
                            setAge(e.target.value);
                        }}>
                    </input>
               </label>

                <button>
                    Next
                </button>
            </form>
        
       
            
        </div>
    )
}

export default Profile;