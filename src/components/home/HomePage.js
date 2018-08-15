import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <h1>Pluralsight Admin</h1>
                <p>responsive web apps.</p>
                <Link to="about">Learn More</Link>
            </div>
        );
    }
}

export default HomePage;
