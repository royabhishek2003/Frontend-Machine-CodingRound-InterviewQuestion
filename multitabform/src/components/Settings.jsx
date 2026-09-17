import {Link } from 'react-router-dom';

function Settings({setActivetab}){
    return (
        <div className="flex flex-col">
            <div className="">
            <div onClick={()=>{setActivetab("profile")}}>
                change profile
            </div>
            <div onClick={()=>{setActivetab("interests")}}>
                change Interest
            </div>
        </div>
      
        </div>
        
         

    )
}

export default Settings;