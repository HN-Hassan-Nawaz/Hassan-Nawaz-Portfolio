import React from "react";

export default function Education() {
    return (
        <div className="container my-5">
            <h1 className="mb-4">Education</h1>

            <div className="row">
                {/* FSC */}
                <div className="col-md-6 mb-4">
                    <div className="border p-3 rounded shadow-sm h-100 education-card">
                        <h4 className="mb-2">FSC (Pre-Engineering)</h4>
                        <p className="mb-1"><strong>Institution:</strong> Divisional Public School And Inter College, Sahiwal</p>
                        <p className="mb-1"><strong>Year:</strong> 2018 – 2020</p>
                        <p className="mb-0"><strong>Marks:</strong> 883/1100</p>
                    </div>
                </div>

                {/* Bachelor */}
                <div className="col-md-6 mb-4">
                    <div className="border p-3 rounded shadow-sm h-100 education-card">
                        <h4 className="mb-2">Bachelor of Science (Major in Computer Science)</h4>
                        <p className="mb-1"><strong>Institution:</strong> Capital University of Science and Technology, Islamabad</p>
                        <p className="mb-1"><strong>Year:</strong> 2021 – 2025</p>
                        <p className="mb-0"><strong>CGPA:</strong> 3.2 / 4.00</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
