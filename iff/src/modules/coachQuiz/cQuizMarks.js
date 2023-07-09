import React from "react";
import cssstyle from './index.css';

const Marks=()=>{
    const testScore = 95;
    return(
        <>
            <div className="container d-flex align-items-center justify-content-center">
                <div className="card text-center">
                    <div className="card-body">
                        <h5 className="card-title">Test Score</h5>
                        <h1 className="display-4">{testScore}</h1>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Marks;