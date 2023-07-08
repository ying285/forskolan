import React from 'react'
import Vekansmatsedeln from './vekansmatsedeln/page'
import styles from'../../styles/matsedeln.module.scss'
import menyData from '@/data/data'
import Tillbaka from '../utils/Tillbaka'


const Matsedeln = () => {


  
  return (
    <div className={styles.matsedeln}>
      <Tillbaka /> 
        <h4>Veckans Matsedeln</h4>
        <div className={styles.matsedeln_item}>
        {menyData && menyData.map((item:any)=>(<Vekansmatsedeln index={item.id} man={item.man} tis={item.tis} ons={item.ons} tor={item.tor} fre={item.fre} palagg={item.palagg} frukost={item.frukost} mellanmal={item.mellanmal} menyNr={item.menyNr}key={item.id}/>))} 
      
       </div>
</div>

        
  )
}

export default Matsedeln;