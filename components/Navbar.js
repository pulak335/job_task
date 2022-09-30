import { faMessage } from '@fortawesome/free-regular-svg-icons';
import { faBagShopping, faBell, faBorderAll, faFaceGrinWide, faFireAlt, faGrin, faHeart, faUserGroup, faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon, faMessageLines } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Lady from '../assets/lady.jpg'

const Navbar = () => {
    return (
        <div className='d-flex justify-content-between position-sticky container-coms'>
            <div className='d-flex nav-last-contaner'>
                <h2>Logo</h2>
            </div>

            <div className='d-flex justify-content-between nav-mid-contaner mt-2'>
                <div className='link-nav'>
                <Link href="/">
                    <FontAwesomeIcon icon={faHeart} width='26'/>
                </Link>
                </div>

                <div className='link-nav'>
                <Link href="/">
                <FontAwesomeIcon icon={faUserGroup} width='26'/>
                </Link>
                </div>

                <div className='link-nav'>
                <Link href="/">
                    <FontAwesomeIcon icon={faVideo} width='26'/>
                </Link>
                </div>

                <div className='link-nav'>
                <Link href="/">
                    <FontAwesomeIcon icon={faFireAlt} width='26'/>
                </Link>
                </div>

                <div className='link-nav'>
                <Link href="/">
                    <FontAwesomeIcon icon={faBagShopping} width='26' alignmentBaseline='center'/>
                </Link>
                </div>
            </div>

            <div className='d-flex justify-content-between nav-last-contaner'>

                

                <FontAwesomeIcon icon={faBorderAll} width='26'/>

                <FontAwesomeIcon icon={faBell} width='26'/>
            

                <div className="position-relative btn-msg mt-3">
                    
                <FontAwesomeIcon icon={faMessage} width='26' />
                <span className="position-absolute  translate-middle badge rounded-circle bg-alert">

                    5+
                </span>
                </div>

                <div className='box-user mt-1'>
                    <div className='user-img'>
                        <Image src={Lady} alt="lady"/>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Navbar;