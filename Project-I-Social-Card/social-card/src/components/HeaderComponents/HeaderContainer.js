import React from 'react';
import './Header.scss';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent'

const HeaderContainer = () => {
    return(
        <div className='header-container'>
            <ImageThumbnail />
            <div class="header-main">
                <HeaderTitle />                   <HeaderContent />
            </div>
        </div>
    )
}

export default HeaderContainer;