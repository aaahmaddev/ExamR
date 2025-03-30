import React from 'react';
import './index.css'
import BGI from '../../images/FirstSecImages/Bgi.png'
import CalendarLogo from '../../images/FirstSecImages/calender.png'
import StatickLogo from '../../images/FirstSecImages/statik.png'
import LocLogo from '../../images/FirstSecImages/location.png'
import HistoryLogo from '../../images/FirstSecImages/history.png'


const index = () => {
    return (
        <>
            <section className='first-sec'>
                <div className="container">
                    <div className="sec-inner pt-5 pb-5">

                        <div className="sec-top text-center pb-5">
                            <h1 className='sec-top-title fw-bold'>
                                We always try to give you <br />
                                the best service
                            </h1>
                            <p className="sec-top-subtitle fw-medium mt-3">
                                We always try to make our customer Happy. We provide all kind of <br />
                                facilities. Your Satisfaction is our main priority.
                            </p>
                        </div>

                        <div className="sec-bottom d-flex align-items-center justify-content-between pt-5 pb-5">
                            <div className="sec-bottom-c-card p-5">
                                <div className='c-img-box d-flex align-items-center justify-content-center mb-4'>
                                    <img className='calender-logo' src={CalendarLogo} alt="Data" />
                                </div>
                                <h3 className='c-card-number fw-bold text-center m-0 mb-3'>15+</h3>
                                <p className="c-card-text text-center m-0">Years of <br /> Experience</p>
                            </div>


                            <div className="sec-bottom-s-card p-5">
                                <div className='s-img-box d-flex align-items-center justify-content-center mb-4'>
                                    <img className='statik-logo' src={StatickLogo} alt="Statick" />
                                </div>
                                <h3 className='s-card-number fw-bold text-center m-0 mb-3'>15k+</h3>
                                <p className="s-card-text text-center m-0">Happy <br />
                                    Travellers</p>
                            </div>

                            <div className="sec-bottom-l-card p-5">
                                <div className='l-img-box d-flex align-items-center justify-content-center mb-4'>
                                    <img className='location-logo' src={LocLogo} alt="Location" />
                                </div>
                                <h3 className='l-card-number fw-bold text-center m-0 mb-3'>650+</h3>
                                <p className="l-card-text text-center m-0">Places Visited</p>
                            </div>

                            <div className="sec-bottom-h-card p-5">
                                <div className='h-img-box d-flex align-items-center justify-content-center mb-4'>
                                    <img className='history-logo' src={HistoryLogo} alt="History" />
                                </div>
                                <h3 className='h-card-number fw-bold text-center m-0 mb-3'>650+</h3>
                                <p className="h-card-text text-center m-0">Places Visited</p>
                            </div>


                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default index;