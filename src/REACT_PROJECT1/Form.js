import React, {  useState } from 'react'



function Form() {

  const [input,setInput]=useState({
    FirstName : '',
    LastName :'',
    Email : '',
    Number : ''

  })

  const [data,setData]=useState([])

  const[contactDetail,setContactDetail]=useState({})
  

  const handleChange=(e)=>{
      // console.log(e.target.value)
      // console.log(e.target.name)
      setInput((prev)=>({...prev,[e.target.name]:e.target.value}))
      console.log(input)
      
  }

  const handleContact =(e)=>{
    const target=e.target.value
    console.log(target)
   
    setContactDetail(target)
    console.log(contactDetail)
   
  }


  const handleSubmit=(e)=>{
    e.preventDefault()
    setData([...data,input])
    console.log(input)
    
  }
 
  return (
    <div style={{textAlign:'center'}}>
      <form>
      <h3 style={{marginLeft:'10px',color:'Red' }}>REGISTRATION</h3>
        
        <input type='text' placeholder='UserName' onChange={handleChange} value={input.FirstName} name='FirstName'  style={{margin:'20px' , color:'Grey' , textAlign:'center'} }/>
        <input type='text' placeholder='LastName'onChange={handleChange} value={input.LastName} name='LastName' style={{margin:'20px' , color:'Grey' , textAlign:'center'} }/>
        <br/><br/>

       
	      <select name='isemailselected' onChange={handleContact} >
	      <option value='Email'>Mail</option>
	      <option value='Number'>Mobile Number</option>
	     
	      </select>
     
        { contactDetail === 'Email' ?
                   <>
                       <label>Enter Email</label>
                       <input type="text"
                           name="Email"
                           onChange={handleChange}
                       />
                   </>
                   :null

               }
        { contactDetail === 'Number' ?
                   <>
                   <label>Enter Mobile</label>
                   <input type="text"
                       name="Number"
                       onChange={handleChange}
                   />
               </>
                   :null

               }
       
        <br/><br/>

        <button onClick={handleSubmit}>SUBMIT</button>
      </form>
      

    </div>
  )
}

export default Form