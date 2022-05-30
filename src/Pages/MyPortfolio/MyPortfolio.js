import React from 'react';
import { Link } from 'react-router-dom';
import myPic from '../../assets/images/Screenshot_20210128-201833_4.png';
const MyPortfolio = () => {
    return (
        <div>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={myPic} alt='' />
                    <div>
                        <h1 className="text-5xl font-bold">Md. Nurul Amin (Raju)</h1>
                        <h4>Address: House No: 32/2-A-(5th Floor),
                            Sonatongor-Zigatola, Dhaka-1205;
                        </h4>
                        <h5>Cell :+( 88)01817677741</h5>
                        <h5>E-mail:- mnurulamin092@outlook.com</h5>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                </div>
            </div>
            <div className="overflow-x-auto">
                <h2 className='text-3xl text-center mb-5'>Educational Attainment</h2>
                <table className="table w-full">
                    <thead>
                        <tr>

                            <th>Name</th>
                            <th>Concentration/
                                Major</th>
                            <th>Institute</th>
                            <th>CGPA</th>
                            <th>Pass year</th>
                            <th>Duration</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>

                            <td>Diploma in
                                Engineering</td>
                            <td>Computer Science</td>
                            <td>Ahsanullah Institute of Technical... (AITVET)</td>
                            <td>CGPA : 2.76
                                out of 4.00</td>
                            <td>2014</td>
                            <td>4 years</td>
                        </tr>

                        <tr>

                            <td>S.S.C.</td>
                            <td>Business Study</td>
                            <td>Hazir Para Hamidia High School</td>
                            <td>GPA : 3.59
                                out of 5.00</td>
                            <td>2010</td>
                            <td>2 years</td>
                        </tr>


                    </tbody>
                </table>
            </div>
            <div className="overflow-x-auto">
                <h2 className='text-3xl text-center my-10'>COMPUTER PROFICIENCY</h2>
                <table className="table w-full mb-20">
                    <thead>
                        <tr>

                            <th>Field</th>
                            <th>Qualification Details</th>

                        </tr>
                    </thead>
                    <tbody>

                        <tr>

                            <td>Web and Scripting
                                Languages</td>
                            <td>Html CSS Tailwind CSS(basic) React Node Express MongoDb</td>

                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="overflow-x-auto">
                <h2 className='text-3xl text-center my-10'>My Project</h2>
                <table className="table w-full mb-20">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Bicycle Manufacture</td>
                            <td><a href="https://bicycle-manufacture.web.app/home" target="_blank">Link</a></td>
                        </tr>
                        <tr>
                            <td>Doctor Service Provider</td>
                            <td><a href="https://doctor-service-provider.web.app/" target="_blank">Link</a></td>
                        </tr>
                        <tr>
                            <td>Warehouse</td>
                            <td><a href="https://laptop-warehouse-9b862.web.app/" target="_blank">Link</a></td>
                        </tr>

                    </tbody>

                </table>
            </div>


        </div>
    );
};

export default MyPortfolio;