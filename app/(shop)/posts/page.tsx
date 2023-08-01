'use client'
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from "./page.module.css";
import Link from 'next/link'


export default function posts() {
  
  return (
    
         <main className= {styles.main}>
          <div className= {styles.center}>
            <h1>Habiba Nabeel</h1></div>
          <Link href ="/">
            Home
          </Link>
          {/* <button type="button" onClick={() => router.push('/')}>
          Home
            </button> */}
         </main>
  );
}
