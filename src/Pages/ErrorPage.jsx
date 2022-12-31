import React from 'react'
import { NavLink } from 'react-router-dom'
import AnimatedPage from '../Animations/AnimatedPage'

const ErrorPage = () => {
  return (
    <AnimatedPage>
    <>
        <div id="not-found">
            <div className='not-found'>
                <div className='not-found-404'>
                        <h1>404</h1>
                </div>
                    <h2>We are sorry Page Not Found.</h2>
                    <NavLink to='/' className='button'>Back to Homepage</NavLink>
            </div>

        </div>
    </>
    </AnimatedPage>
  )
}

export default ErrorPage