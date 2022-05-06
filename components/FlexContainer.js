import React from 'react'
import styles from '../styles/FlexContainer.module.css'

// Function to create flexable table to display students on index page
function FlexContainer({children}) {



return (
  <div className={styles.FlexContainer}> 
    {children} {/* */}
  </div>
    
    
  )
}

export default FlexContainer