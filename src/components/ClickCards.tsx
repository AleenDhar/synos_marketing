"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import { motion } from 'framer-motion'

const images = ["/smoke-1.webp","/smoke-2.webp","/smoke-3.webp"]
const ClickCards = () => {
    const [currentImage, setCurrentImage] = React.useState("/smoke-1.webp")
    const [currentImageno, setCurrentImageno] = React.useState(0)
    useEffect(()=>{
        setCurrentImage(images[currentImageno%images.length])
    },[currentImageno])
    // useEffect(()=>{
    //   setTimeout(()=>{
    //     setCurrentImageno(currentImageno+1)
    //   },3000)
    // })
  return (
    <motion.img
     width={600} height={801} src={currentImage} alt="image" className='object-contain cursor-pointer' onClick={()=>setCurrentImageno(currentImageno+1)}
     initial={{scale:1}}
     whileHover={{scale:1.05}}
     transition={{duration:.5,type:'tween',ease:[.14,.13,.25,1]}}
    />

  )
}

export default ClickCards