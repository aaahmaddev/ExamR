import React from 'react';
import './index.css'
import IndonesiaImg from '../../images/ThirdSecImages/indonesia.jpg'
import JapanImg from '../../images/ThirdSecImages/japan.jpg'
import MountainsImg from '../../images/ThirdSecImages/mountains.jpg'
import LocationLogo from '../../images/ThirdSecImages/LocationLoogo.png'

const index = () => {
    return (
        <>
            <section className="third-sec">
                <div className="container-sm">
                    <div className="third-sec-inner">
                        <div className="third-sec-top pt-5">
                            <h1 className="third-sec-top-title fw-bold col-12 text-center">
                                Best Packages For You
                            </h1>
                            <div className="third-sec-top-button-box d-flex align-items-center justify-content-between mt-5 pt-2 pb-5">
                                <button className='third-sec-top-f-button fw-bold'>Hot Deals</button>
                                <button className='third-sec-top-button fw-bold'>Backpack</button>
                                <button className='third-sec-top-button fw-bold'>South Asia</button>
                                <button className='third-sec-top-button fw-bold'>Honeymoon</button>
                                <button className='third-sec-top-button fw-bold'>Europe</button>
                                <button className='third-sec-top-button fw-bold'>More</button>
                            </div>
                        </div>
                        <div className="third-sec-center d-flex align-items-center justify-content-between">
                            <div className="third-sec-card">
                                <div className="third-sec-card-top">
                                    <img className='third-sec-card-img' src={IndonesiaImg} alt="Indonesia" />
                                </div>
                                <div className="third-sec-card-bottom p-3">
                                    <div className="third-sec-card-bottom-text-box1 d-flex justify-content-between align-content-center">
                                        <p className='fw-medium'>3 Days, 2 NIghts</p>
                                        <p className='fw-medium'>$500 / Person</p>
                                    </div>
                                    <p className='third-sec-card-bottom-text2 fw-medium mb-0'>
                                        Explore the Beauty of the island for 3 days <br />
                                        and 2 nights with our travel agency
                                    </p>

                                    <div className="third-sec-card-bottom-text-box2 d-flex align-items-center justify-content-between mt-5">
                                        <a className='text-decoration-none third-sec-a fw-medium align-items-center d-flex gap-1' target="_blank" href='https://www.google.com/maps/place/Kepulauan+Solomon/@-8.7492464,157.3656375,6z/data=!3m1!4b1!4m15!1m8!3m7!1s0x2c4c07d7496404b7:0xe37b4de71badf485!2sIndonesia!3b1!8m2!3d-0.789275!4d113.921327!16zL20vMDNyeW4!3m5!1s0x68d351e0555009d1:0xb44cc0a017442980!8m2!3d-9.64571!4d160.156194!16zL20vMDFuOHFn?hl=id&entry=ttu&g_ep=EgoyMDI1MDMyNS4xIKXMDSoASAFQAw%3D%3D'>
                                            <img src={LocationLogo} alt="Location" />
                                            Indonesia
                                        </a>
                                        <a className='third-sec-a fw-medium' href="#">
                                            Know More
                                        </a>
                                    </div>

                                </div>
                            </div>


                            <div className="third-sec-card">
                                <div className="third-sec-card-top">
                                    <img className='third-sec-card-img' src={JapanImg} alt="Indonesia" />
                                </div>
                                <div className="third-sec-card-bottom p-3">
                                    <div className="third-sec-card-bottom-text-box1 d-flex justify-content-between align-content-center">
                                        <p className='fw-medium'>3 Days, 2 NIghts</p>
                                        <p className='fw-medium'>$800 / Person</p>
                                    </div>
                                    <p className='third-sec-card-bottom-text2 fw-medium mb-0'>
                                        Enjoy the Shrimes and blossoms here in <br />
                                        this beautiful country
                                    </p>

                                    <div className="third-sec-card-bottom-text-box2 d-flex align-items-center justify-content-between mt-5">
                                        <a className='text-decoration-none third-sec-a fw-medium align-items-center d-flex gap-1' target="_blank" href='https://www.google.co.jp/maps/place/%D0%9A%D0%BE%D0%B1%D0%B5,+%D0%A5%D1%91%D0%B3%D0%BE,+%D0%AF%D0%BF%D0%BE%D0%BD%D0%B8%D1%8F/@35.5534682,134.0770849,7z/data=!4m15!1m8!3m7!1s0x6003709e107b2365:0x2a9622d4e8ceb352!2z0J3QsNCz0L7Rjywg0JDQudGC0LgsINCv0L_QvtC90LjRjw!3b1!8m2!3d35.1814506!4d136.9065571!16zL20vMGdxZnk!3m5!1s0x60007d812aed89d9:0xc7126106c2f670f4!8m2!3d34.6900806!4d135.1956311!16zL20vMGczYmM?entry=ttu&g_ep=EgoyMDI1MDMyNS4xIKXMDSoASAFQAw%3D%3D'>
                                            <img src={LocationLogo} alt="Location" />
                                            Japan
                                        </a>
                                        <a className='third-sec-a fw-medium' href="#">
                                            Know More
                                        </a>
                                    </div>

                                </div>
                            </div>


                            <div className="third-sec-card">
                                <div className="third-sec-card-top">
                                    <img className='third-sec-card-img' src={MountainsImg} alt="Mountains" />
                                </div>
                                <div className="third-sec-card-bottom p-3">
                                    <div className="third-sec-card-bottom-text-box1 d-flex justify-content-between align-content-center">
                                        <p className='fw-medium'>3 Days, 2 NIghts</p>
                                        <p className='fw-medium'>$600 / Person</p>
                                    </div>
                                    <p className='third-sec-card-bottom-text2 fw-medium mb-0'>
                                    Explore the majestic mountains and <br />
                                    landscapes day and nights
                                    </p>

                                    <div className="third-sec-card-bottom-text-box2 d-flex align-items-center justify-content-between mt-5">
                                        <a className='text-decoration-none third-sec-a fw-medium align-items-center d-flex gap-1' target="_blank" href='#'>
                                            <img src={LocationLogo} alt="Location" />
                                            Mountains
                                        </a>
                                        <a className='third-sec-a fw-medium' href="#">
                                            Know More
                                        </a>
                                    </div>

                                </div>
                            </div>




                        </div>
                        <div className="third-sec-bottom d-flex align-items-center justify-content-center mt-5 pt-5">
                            <button className="third-sec-bottom-btn fw-medium">
                                Discover More
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default index;