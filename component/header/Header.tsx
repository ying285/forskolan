import React from 'react'
import Navbar from './Navbar'
import styles from '../../styles/header.module.scss'
import Image from 'next/image'

const Header = () => {
  return (
    <div className={styles.header}>
      <Navbar />
      <div>
        <h3 >VÄLKOMMEN TILL SKOGSGLÄNTANS FÖRSKOLA</h3>
        <h3 className={styles.header_h3} >”En trygg och stimulerande värld full av möjligheter”
          </h3>
          <Image 
        className={styles.header_image}
        src='/forskolan1.png'
        width={600}
        height={350}
        priority={true}
        alt="picture1"
        />
      </div>
    </div>
  )
}

export default Header