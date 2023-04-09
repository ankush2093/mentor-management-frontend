import React from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";

export default function StudentListTabel() {
    return (
        <div className="container mt-4">
            <div className="card border border-dark">
                <div className="card-body">
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>Sl.No</th>
                                <th>Course Name </th>
                                <th>Course Short Name </th>
                                <th>Course Code</th>
                                <th>Attended/Delivered</th>
                                <th>Percent</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>ADVANCE JAVA PROGRAMMING</td>
                                <td>
                                    CUST2011-PR
                                </td>
                                <td>CUST2011</td>
                                <td>
                                    88/98
                                </td>
                                <td>
                                    89.8
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>ADVANCE JAVA PROGRAMMING</td>
                                <td>
                                    CUST2011-TUT
                                </td>
                                <td>CUST2011</td>
                                <td>
                                    40/40
                                </td>
                                <td>
                                    100
                                </td>

                            </tr>
                            <tr>
                                <td>3</td>
                                <td>WEB SERVICE USING JAVA</td>
                                <td>
                                    CUST2010-PR
                                </td>
                                <td>CUST2010</td>
                                <td>
                                    26/26
                                </td>
                                <td>
                                    100
                                </td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>WEB SERVICE USING JAVA</td>
                                <td>
                                    CUST2010-TUT
                                </td>
                                <td>CUST2010</td>
                                <td>
                                    16/20
                                </td>
                                <td>
                                    80
                                </td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>WEB PROGRAMMING USING REACT</td>
                                <td>
                                    CUST2012-PR
                                </td>
                                <td>CUST2012</td>
                                <td>
                                    5/5
                                </td>
                                <td>
                                    100
                                </td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>WEB PROGRAMMING USING REACT</td>
                                <td>
                                    CUST2012-TUT
                                </td>
                                <td>CUST2012</td>
                                <td>
                                    4/5
                                </td>
                                <td>
                                    80
                                </td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>PRODUCT DEVLOPMENT</td>
                                <td>
                                    CUST2013-TUT
                                </td>
                                <td>CUST2013</td>
                                <td>
                                    0/0
                                </td>
                                <td>
                                    0
                                </td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>JOB READINESS</td>
                                <td>
                                    CUTM1016-PR
                                </td>
                                <td>CUTM1016</td>
                                <td>
                                    33/47
                                </td>
                                <td>
                                    70.21
                                </td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>DAIRY FARMING</td>
                                <td>
                                    CUTM3082-PR
                                </td>
                                <td>CUTM3072</td>
                                <td>
                                    28/28
                                </td>
                                <td>
                                    100
                                </td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>MUSHROOM FARMING</td>
                                <td>
                                    CUTM3082-TUT
                                </td>
                                <td>CUTM3082</td>
                                <td>
                                    27/29
                                </td>
                                <td>
                                    93.1
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    );
}
