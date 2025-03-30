import React from 'react';
import './index.css'
import MapImg from '../../images/SecondSecImages/worldmap.png'
import ThailandImg from '../../images/SecondSecImages/thailand.png'
import IndonesiaImg from '../../images/SecondSecImages/indonesia.png'
import NewZelandImg from '../../images/SecondSecImages/newzeland.png'
import RightArrow from '../../images/SecondSecImages/NextIcon.png'


const index = () => {
    return (
        <>
            <section>
                <div className="container-div">

                
                <div className="second-sec-inner">
                    <div className="second-sec-top pt-5">
                        <h1 className="second-sec-top-text text-center fw-bold">Our Popular Distinations</h1>
                    </div>

                    <div className="second-sec-bottom d-flex pt-5 align-items-center justify-content-center">
                        <div className="second-sec-left col-6 d-flex justify-content-around align-items-center">
                            <img className='img-fluid' src={MapImg} alt="" />
                        </div>

                        <div className="second-sec-right col-6 p-4">
                            <div className="second-sec-t-card d-flex mb-5">
                                <div className="second-sec-t-card-l">
                                    <img src={ThailandImg} alt="Thailand" />
                                </div>
                                <div className="second-sec-t-card-r d-flex align-items-center p-5">
                                    <p className='fw-bold'>Thailand</p>

                                    <p className='fw-bold'>20+ Spots <br />
                                        2D & 3N</p>

                                    <img className='right-arrow' src={RightArrow} alt="Right Arrow" />

                                </div>
                            </div>


                            <div className="second-sec-i-card d-flex mb-5">
                                <div className="second-sec-i-card-l">
                                    <img src={IndonesiaImg} alt="Indonesia" />
                                </div>
                                <div className="second-sec-i-card-r d-flex align-items-center p-5">
                                    <p className='fw-bold'>Indonesia</p>

                                    <p className='fw-bold'>20+ Spots <br />
                                        2D & 3N</p>

                                    <img className='right-arrow' src={RightArrow} alt="Right Arrow" />

                                </div>
                            </div>

                            <div className="second-sec-n-card d-flex">
                                <div className="second-sec-n-card-l">
                                    <img src={NewZelandImg} alt="New Zeland" />
                                </div>
                                <div className="second-sec-n-card-r d-flex align-items-center p-5">
                                    <p className='fw-bold'>New Zeland</p>

                                    <p className='fw-bold'>20+ Spots <br />
                                        2D & 3N</p>

                                    <img className='right-arrow' src={RightArrow} alt="Right Arrow" />

                                </div>
                            </div>


                        </div>
                    </div>
                </div>
                </div>
            </section>
        </>
    );
};

export default index;