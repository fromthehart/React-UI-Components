import React from 'react';
import './Header.scss';

const HeaderTitle = () => {
    return (
      <div className='header-title'>
          <strong>Lambda School</strong> <span  className='header-social'>@LambdaSchool</span> <span class="header-timestamp">- 26 Jan</span>
      </div>
    )
}


export default HeaderTitle;