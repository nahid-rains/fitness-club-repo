import React from 'react';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDumbbell} from '@fortawesome/free-solid-svg-icons';
const Header = () => {
    return (
        <div className='header-sec'>
    
    <div className="my-sec">
      <FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon>
        <h1 className='title-name'>Fitness-Club</h1>
      </div>
      <div className='can-pass'>
<h1>welcome</h1>
      </div>
    </div>
      
        
    );
};

export default Header;