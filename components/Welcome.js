import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Welcome = () => {
    return (
        <div>
            <div className='welcome-card'>
                <h4>Welcome Back,</h4>
                <h1>Tomasz!</h1>
            </div>
            <div className='story-container'>
                <div className="row story-section">
                    <div className="col d-flex align-items-center justify-content-center">
                        <div>
                            <FontAwesomeIcon icon={faCirclePlus} width="45"/>
                            <h6 className='text-center'>Create</h6>
                        </div>
                    </div>
                    <div className="col story-view">
                        <div className="story-box">

                        </div>
                    </div>
                    <div className="col story-view">
                        <div className="story-box">
                            
                        </div>
                    </div>
                    <div className="col story-view">
                        <div className="story-box">
                            
                        </div>
                    </div>
                    <div className="col story-view">
                        <div className="story-box">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Welcome;