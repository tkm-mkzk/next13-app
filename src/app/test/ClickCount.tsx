'use client'
import styles from './page.module.css'
import { useState } from 'react'

const Clicks = () => {
  const [count, setCount] = useState<number>(0)
  const Increase = () => {
    setCount((pre) => pre + 1)
  }
  return (
    <>
      <h2>クリック回数</h2>
      <div>{count}回</div>
      <button className={`${styles.btn} ${styles.btnRadiusGradientWrap}`} onClick={Increase}>
        +
      </button>
      <div>test</div>
    </>
  )
}

export default Clicks
