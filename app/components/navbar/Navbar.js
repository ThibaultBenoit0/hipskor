
"use client"
import Link from 'next/link';

const Navbar = () => {
    return (
        <>
        <div className='nav-main-container'>
            <div className='left-links-conainer'>
                <Link href="/bio">BIO</Link>
                <Link href="/releases">RELEASES</Link>
                <Link href="/tour">TOUR</Link>
            </div>
            <div className='center-logo-conainer'>
                <img src=".\img\logo-hipskor.png"></img>
                </div>
            <div className='right-links-conainer'>
                <Link href="/medias">MEDIAS</Link>
                <Link href="/store">STORE</Link>
                <Link href="/contact">CONTACT</Link>
            </div>
        </div>
        </>
    );
};

export default Navbar;