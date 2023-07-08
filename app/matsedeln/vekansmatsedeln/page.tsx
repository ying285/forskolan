'use client';

import React from 'react'
import styels from '../../../styles/vekansmatsedeln.module.scss'
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../globalRedux/store";
import { tabActions } from "../../globalRedux/features/tab/tabSlice";


interface veckansmeny {
  index: any;
   menyNr:string;
   man:string;
   tis:string;
   ons:string;
   tor:string;
   fre:string;
   palagg:string;
   frukost:string;
   mellanmal:string;
 }

const Vekansmatsedeln:React.FC<veckansmeny>= ({index, menyNr, man,tis, ons,tor,fre,palagg,frukost,mellanmal}) => {

  const dispatch=useDispatch()
  const  tabActive= useSelector((state: RootState) => state.tab.tabActive);
  const  isActive1= useSelector((state: RootState) => state.tab.isActive1);
  const  isActive2= useSelector((state: RootState) => state.tab.isActive2);


  return (
    
    <div className={styels.vekansmatsedeln}>
      <div className={styels.vekansmatsedeln_header}   onClick={()=>{dispatch(tabActions.collapseActiveHandler(`${index}`)); dispatch(tabActions.isCollapseActiveHandler(`${index}`)) }}>
        
          <h4>
      {menyNr}
    </h4>
        
    
      <i className={`bi  ${ tabActive===`${index}`|| isActive1 || isActive2? 'bi-chevron-up' : 'bi-chevron-down'}` } > 
  </i>
    
     
  </div>
<div >
  {(tabActive==`${index}` || isActive1 || isActive2)  && <div>
 
 <div className={styels.vekansmatsedeln_meny}>
     <div className={styels.vekansmatsedeln_items}>
     <h5>Mån</h5>  
     <h5>Tis</h5>  
     <h5>Ons</h5>  
     <h5>Tor</h5>  
     <h5>Fri</h5>  
     <h5><div ><span className={styels.vekansmatsedeln_span}>Veckans</span><span>pålägg</span></div></h5>
     <h5>Frukost</h5>
     <h5>Mellanmål</h5>
     </div>
     <div className={styels.vekansmatsedeln_detaljer}>
 <p>{man}</p>
 <p>{tis}</p>
 <p>{ons}</p>
 <p>{tor}</p>
 <p>{fre}</p>
 <p>{palagg}</p>
 <p>{frukost}</p>
 <p>{mellanmal}</p>
     </div>
  </div>
  
  </div>
  }
   </div>
   </div>
   
   
  
)

}




   

export default Vekansmatsedeln;