import React from 'react'
import './Home.css'
import ImgL from '../Imgs/left.png'
// import ImgR from '../Imgs/rit.png'
import Logo from '../Imgs/logo.png'


export default function Home() {
    return (
        <div className='whole'>
            <div className='container-fluid home py-5' >
                <div className="row align-items-center">
                    <div className="col-12 col-md-3">

                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={ImgL} className="d-block SliderImg w-100 rounded-circle" alt="Cinque Terre"></img>

                                </div>
                                <div className="carousel-item">
                                    <img className="d-block SliderImg w-100 rounded-circle" src={ImgL} alt="Second slide"></img>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block SliderImg w-100 rounded-circle" src={ImgL} alt="Third slide"></img>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>



                    </div>
                    <div className="col-12 col-md-6 box text-white text-center py-4 m x-md-5">
                        <img src={Logo} className="Limg mx-auto d-block" alt="..."></img>
                        <br></br>
                        <table className="table">
                            <tbody>
                                <tr>
                                    <th className='border-0' scope="row">NFT name:</th>
                                    <td className='border-0 text-dark  '>Kook'd</td>
                                </tr>
                                <tr>
                                    <th className='border-0' scope="row">Total Supply:</th>
                                    <td className=' border-0 text-dark'>5,000</td>
                                </tr>
                                <tr>
                                    <th className='border-0' scope="row">Whitelist:</th>
                                    <td className=' border-0 text-dark'>.03 ETH</td>
                                </tr>
                                <tr>
                                    <th className='border-0' scope="row">Public Sale:</th>
                                    <td className='border-0 text-dark'>.06 ETH</td>
                                </tr>
                                <tr>
                                    <th className='border-0' scope="row">Donation Amount:</th>
                                    <td className=' border-0 text-dark'>  $750,000</td>
                                </tr>
                                <tr>
                                    <th className='border-0' scope="row">Charities:</th>
                                    <td className='border-0 text-dark'>SES, CFS, Animal Rescues</td>
                                </tr>
                                <tr>
                                    <th className='border-0' scope="row">Amount Per Charity:</th>
                                    <td className='border-0 text-dark'>$20,000</td>
                                </tr>
                                <tr>
                                    <th className='border-0' scope="row">Initial Release</th>
                                    <td className='border-0 text-dark'>2,500</td>
                                </tr>
                            </tbody>
                        </table>
                        <br />
                        <button type="button" className="btn btnA text-white   ">BUY TOKEN</button><br /><br />
                        <button type="button" class="btn btnB text-white btn-sm">Join the Kommunity</button><br></br>
                        <br />
                        <p>The art work is somewhat important so that it looks cool but we are hyper focused on making this NFT line have actual use case and give people a reason to hold it long term.</p>
                    </div>
                    <div className="col-12 col-md-3">
                        {/* <img src={ImgL} alt="..." className="img-thumbnail rounded-circle d-block  Img"></img> */}
                        {/* <img src={ImgR} alt="..." className="img-thumbnail rounded-circle d-block Img"></img> */}

                        
                    </div>
                </div>
            </div>
        </div >
    )
}