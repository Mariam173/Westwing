import React from 'react'

export default function TopSide() {
  return (
 <>
    <div className='flex text-black bg-[#fcba4d]   justify-between '>
      <h1 className='pl-40 mt-30 text-[90px] font-bold max-w-25'>CONTACT US</h1> 
      <img src="\Images\chatbox.png" alt="" className="flex w-210 h-150 mr-20" />
    </div>
    
    <div className='bg-[#d2e5f2] justify-items-center h-250 '>
        <h1 className='text-[50px] font-bold'>Do you require assistance ?</h1>
      
      
       <div className='bg-white w-250 h-200 flex rounded-xl justify-center mb-20 shadow-2xl'>
        
        <form className='mt-20 ml-20 focus:outline-none space-y-6'>
        <input className='bg-[#d2e5f2] rounded-3xl w-95 h-15 mr-10 ' type="name" 
        placeholder='Full Name '/>

       <input className='bg-[#d2e5f2] rounded-3xl w-95 h-15' type="email" name="" id="" 
       placeholder='Email Address'/>
        
       
       <select className='bg-[#d2e5f2] rounded-3xl w-200 h-15' name="">
        <option value="">What can we help you with ?</option>
        <option value="">Enquries</option>
        <option value="">Feedback</option>
        <option value="">Support</option>
       </select>
      
       <div className='bg-[#d2e5f2] rounded-3xl w-200 h-100 placeholder-ml-10' > <input type="text" placeholder='Type message here...'/></div>
       
       <div className='bg-[#00a17f] rounded-4xl text-[60px] ml-40 w-120 text-center text-white' type="submit">
       Send</div>

       </form> 
      </div>
    </div>
    </>
  )
}
