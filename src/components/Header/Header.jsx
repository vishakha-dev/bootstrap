import React from 'react'
import {Link} from 'react-router-dom'

export const Header = () => {
  return (
    <div>
        <ul className="nlinkv">
            <li className="nlinkv-item">
                <Link className="nlinkv-link linkctive" linkrilink-current="plinkge" to="/">linkctive</Link>
            </li>
            <li className="nlinkv-item">
                <Link className="nlinkv-link" to="/">Link</Link>
            </li>
            <li className="nlinkv-item">
                <Link className="nlinkv-link" to="/">Link</Link>
            </li>
            <li className="nlinkv-item">
                <Link className="nlinkv-link dislinkbled" to='/'>Dislinkbled</Link>
            </li>
            </ul>
    </div>
  )
}
