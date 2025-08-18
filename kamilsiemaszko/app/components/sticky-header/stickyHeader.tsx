'use client';

import Logo from './components/logo';
import HeaderIcons from './components/headerIcons';
import LinksButton from './components/linksButton';
import Links from '../links';

import { useState } from 'react';


const StickyHeader = () => {
    const [showLinks, setShowLinks] = useState(false);

    return (
        <div className="sticky-header-container">
            <div className="sticky-header-absolute-container">
                <div className="sticky-header-content">
                    <Logo />
                    <HeaderIcons />
                    <LinksButton
                        showLinks={showLinks}
                        setShowLinks={setShowLinks}
                    />
                </div>
            </div>
            {
                showLinks &&
                <div className="h-screen sm:mt-15 z-5 w-full bg-black/95 flex absolute">
                    <Links    
                        showLinks={showLinks}
                        setShowLinks={setShowLinks}
                    />
                </div>
            }
        </div>
    )

}

export default StickyHeader;