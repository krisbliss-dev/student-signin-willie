import React from 'react'
import styles from '../styles/StudentPill.module.css'

function studentPill(firstName, lastName) {
  return (
    <div className={styles.pill}>
      {`${firstName} ${lastName[0]}`}
    </div>
  )
}

export default studentPill

