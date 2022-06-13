import './LeftNav.css';

export const LeftNav = ()=> {


return (

<>
   
   <div id="leftNav">

     <b className='navcat'>CATEGORY</b>
    
    <div  id="checkboxcss">
        
    <div id="ckeckboxdiv">
      <input type="checkbox" id="bye" />
      <span>Perfume (294)</span>
      </div>
      <div id="ckeckboxdiv">
      <input type="checkbox" />
       <span>Deodorant (6)</span>
       </div>
    </div>
       <div id="checkboxcss">
       <div id="ckeckboxdiv">
           <input type="checkbox" />
           <span>New Arrivals (7)</span>
       </div>
       <div id="ckeckboxdiv">
           <input type="checkbox" />
           <span>On Sale (22)</span>
       </div>
       </div>

       
       <p className='navfilter'>FILTER BY</p>   
           <div id='btn'>
          
      <button><span>Brand</span><b>></b></button>
      <button><span>Size</span><b>></b></button>
      <button><span>Color</span><b>></b></button>
      <button><span>Promotion</span><b>></b></button>
      <button><span>Price</span><b>></b></button>
      <button><span>Store</span><b>></b></button>


       </div>
  
   </div>
   








</>



)



    
}