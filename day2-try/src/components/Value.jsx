import { useState } from 'react';

function Category(){
  const [inv,setInv]= useState({

   books:0,
   notebooks:0,
   pens:0,

  });
  // const handle= (n,z)=>{
  //     console.log(inv.books)
  //     if(z=="books"){
  //         inv.z = inv.z+n
  //     }
  //     setInv({
  //        ...inv
  //     })
  // }
  const handle=(n,z)=>{
    console.log(inv['books'])
   
      inv[`${z}`]=inv[`${z}`]+n
    
   
    setInv({
      ...inv
    })
  }
    return (<div >
       <p>books:{inv.books}</p>
       <button onClick={()=>handle(1,"books")}>add</button>
       <button onClick={()=>handle(-1,"books")}>remove</button>


       <p>pens:{inv.pens}</p>
       <button onClick={()=>handle(1,"pens")}>add</button>
       <button onClick={()=>handle(-1,"pens")}>remove</button>


       <p>notebooks:{inv.notebooks}</p>
       <button onClick={()=>handle(1,'notebooks')}>add</button>
       <button onClick={()=>handle(-1,'notebooks')}>remove</button>
     <p>total:{inv.pens+inv.books+inv.notebooks}</p>
    </div>
    )

}

export { Category };