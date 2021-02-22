// React component with function based approach to implement state

import  React, { useState }  from "react";
/* 
* useState hook came into existence in 16.8 version of react. 
* we can manage state in function based components using useState react hooks.
* Events can also be triggered, by calling functions inside functions.
* useState() is recommended to use multiple times to preserve other entries(). 
*/

const user = props => {
    const [personState,setPersonState] = useState({
        user:[
           {name:'Sameer',age:'22'},
           {name:'Danish',age:'21'},
           {name:'Sumesh',age:'35'}
         ]
    });
  const [descriptionState] =  useState({description:'Users list for particular org.'});
    const switchName =  ()=>{
        // on changing the state of one of entries, it is always recommended to preserve the existing entries, otherwise it will get vanish.
        setPersonState({user:[
            {name:'Sam',age:'25'},
            {name:'Danish',age:'21'},
            {name:'Sumesh rani',age:'45'}
          ]})
        
    }

    return (
        <div>
            <h4>{descriptionState.description}</h4>
            {personState.user.map(person => (<h2>My name is {person.name} and I am {person.age} years old.</h2>))}
            <button onClick={switchName}>Switch User</button>
        </div>    
    )
}

export default user