import React from 'react'
import '../assets/styles/components/Categories.css'

const Categories = ({children,title}) => (
  <>
      <h3 className="categories__title">{title}</h3>
      {children}
  </>
)

export default Categories