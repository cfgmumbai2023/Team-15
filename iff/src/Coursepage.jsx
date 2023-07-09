import React from "react";
import { Link } from "react-router-dom";
import cssstyle from './index.css'

const Coursepage = () => {
    return (
        <>
            <div className="contentpage-card">
                <div class="row contentpage-card">
                    <div class="col-lg-4 col-md-6 ">
                        <div class="card">
                            <div class="card-header">
                                <h3>Chihuahua</h3>
                            </div>
                            <div class="card-body">
                                <h2>Free</h2>
                                <p>5 Matches Per Day</p>
                                <p>10 Messages Per Day</p>
                                <p>Unlimited App Usage</p>
                                <button class="btn coursepage-btn" type="button"><Link to='./coursedetails'>EXPLORE</Link></button>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 ">
                        <div class="card">
                            <div class="card-header">
                                <h3>Labrador</h3>
                            </div>
                            <div class="card-body">
                                <h2>$49 / mo</h2>
                                <p>Unlimited Matches</p>
                                <p>Unlimited Messages</p>
                                <p>Unlimited App Usage</p>
                                <button class="btn coursepage-btn" type="button"><Link to='./coursedetails'>EXPLORE</Link></button>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6">
                        <div class="card">
                            <div class="card-header">
                                <h3>Mastiff</h3>
                            </div>
                            <div class="card-body">
                                <h2>$99 / mo</h2>
                                <p>Pirority Listing</p>
                                <p>Unlimited Matches</p>
                                <p>Unlimited Messages</p>
                                <p>Unlimited App Usage</p>
                                <button class="btn coursepage-btn" type="button"><Link to='./coursedetails'>EXPLORE</Link></button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Coursepage;