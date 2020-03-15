import * as React from "react";

export default class Skills extends React.Component {
    render() {
        return (
            <div style={{ marginLeft: '20px'}}>
                <div>
                    <h3>Languages I speak</h3>
                    <p>Javascript, C/C++, Python</p>
                </div>
                <div>
                    <h3>Front-End</h3>
                    <p>HTML, (S)CSS, Reactjs</p>
                </div>
                <div>
                    <h3>Back-End</h3>
                    <p>Nodejs</p>
                </div>
                <div>
                    <h3>Databases</h3>
                    <p>MongoDB, MySQL, Firebase</p>
                </div>
                <div>
                    <h3>Design</h3>
                    <p>Adobe Illustrator, Adobe XD, Adobe Photoshop</p>
                </div>
            </div>
        )
    }
}