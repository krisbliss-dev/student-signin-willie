import React from 'react'
import styles from '../styles/StudentPill.module.css'

function StudentPill({student}) {
  return (
    <div className={styles.pill}>
      {`${student.firstName} ${student.lastName[0]}`}
    </div>
  )
}

export default StudentPill

