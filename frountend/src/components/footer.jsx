import React from 'react'
import './footer.style.css'

export default function Footer() {
  return (
    <div className='sticky-bottom'>
      <div className=" footerBack flex-x align-center mt-2" style={{ height: "50px" }}>
        <div className="flex-1 fs-13 bold-text footer-text">
          © 2024 User Management.
        </div>
        <div>
        </div>
      </div>
    </div>
  )
}