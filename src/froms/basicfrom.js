import React,{useState} from "react";

const Basicfrom =()=> {
    const [email,setEmail]=useState("");
    const [password,setPassword]= useState("");

    const [newEntry,setnewEntry]=useState([]);

    const submitFrom=(e)=>{

        e.preventDefault();
        
        const newEntry={email:email,password}:
        setAllEntry([allEntry,newEntery]);
        console.log(allEntry);

    }
    return (
        <>
            <from action="" onSubmit={submit}>
                <div>
                    <label htmlFor="email">Email</label>
                        <input type="text" name="email" autoComplete="off"
                            value={email}
                            onchange={(e)=>setEmail(e.target.value)}
                        />
                </div>

                <div>
                    <label htmlFor="password">password</label>
                        <input type="password" name="password" id="password" autoComplete="off"
                            value={password}
                                onchange={(e)=> setEmail(e.target.value)}
                        />
                
                </div>


            <button type="submit">Login</button>
            </from>
            <div>
               {
                    allEntry.map((curElem)=>{
                        return (
                            <div className="showDataStyle">
                                <p>{curElem.email}</p>
                                <p>{curElem.password}</p>


                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}
export default Basicfrom
    
        
                      
                              
    