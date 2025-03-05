import React from 'react';
import opd from '../../assets/opd.png';
import cardio from '../../assets/cardio.jpg';
import icu from '../../assets/icu.png';
import operation from '../../assets/operation.jpg';
import ent from '../../assets/ent.jpg';
import physiotherapy from '../../assets/physiotherapy.jpg';



function Department() {
  return (
    <div className="main-dept">
        <div className="dept-heading">
            <h2>Our Departments</h2>
        </div>

        <div className="main-inner-dept">
            <div className="dept-poster">

                <img src={opd}/>

                <div className="dept-details">
                    <h2>Outpatient Care (OPD)</h2>
                    <div className="dept-readmore">
                        <a href="">Read More</a>
    
                    </div>
                </div>

            </div>

            <div className="dept-poster">

                <img src={cardio} />
                <div className="dept-details">
                    <h2>Cardiology</h2>
                    <div className="dept-readmore">
                        <a href="">Read More</a>
    
                    </div>
                </div>
            </div>

            <div className="dept-poster">

                <img src={icu} />
                <div className="dept-details">
                    <h2>Intensive & Critical Care</h2>
                    <div className="dept-readmore">
                        <a href="">Read More</a>
    
                    </div>
                </div>
            </div>

            <div className="dept-poster">

                <img src={operation} />
                <div className="dept-details">
                    <h2>Operating Theatres</h2>
                    <div className="dept-readmore">
                        <a href="">Read More</a>
    
                    </div>
                </div>
            </div>

            <div className="dept-poster">

                <img src={ent} />
                <div className="dept-details">
                    <h2>ENT</h2>
                    <div className="dept-readmore">
                        <a href="">Read More</a>
    
                    </div>

                </div>
            </div>

            <div className="dept-poster">

                <img src={physiotherapy} />

                <div className="dept-details">
                    <h2>Physiotherapy</h2>
                    <div className="dept-readmore">
                        <a href="">Read More</a>
    
                    </div>
                    
                </div>

            </div>
        </div>

    </div>




  )
}

export default Department;
