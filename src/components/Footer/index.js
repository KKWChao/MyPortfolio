import React from "react";



function Footer() {
  return(
    <footer className="footer">
      <div className='text-center'>
        <a
            className='btn btn-link btn-floating btn-lg text-dark m-1'
            href='#!'
            role='button'
            data-mdb-ripple-color='dark'
          >
          <i className="bi bi-twitter"/>
        </a>
        <a
            className='btn btn-link btn-floating btn-lg text-dark m-1'
            href='#!'
            role='button'
            data-mdb-ripple-color='dark'
          >
            <i className="bi bi-google" />
          </a>
          <a
            className='btn btn-link btn-floating btn-lg text-dark m-1'
            href='#!'
            role='button'
            data-mdb-ripple-color='dark'
          >
            <i className="bi bi-github" />
          </a>
          <a
            className='btn btn-link btn-floating btn-lg text-dark m-1'
            href='#!'
            role='button'
            data-mdb-ripple-color='dark'
          >
            <i className="bi bi-linkedin" />
          </a>
      </div>
      <div className='text-center text-dark p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2020 Copyright:
        <a className='text-dark' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
    </footer>
  )
}



export default Footer