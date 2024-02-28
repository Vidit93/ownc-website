import React, { useEffect } from 'react';
import '../Css/Numbers.css';

const StatisticsSection = () => {
    useEffect(() => {
        // Function to animate the counters
        const animateCounters = () => {
            const counters = document.querySelectorAll('.counter-value');
            const speed = 200; // The lower the slower

            counters.forEach(counter => {
                const updateCount = () => {
                    const target = +counter.getAttribute('data-target');
                    const count = +counter.innerText;

                    // Lower inc to slow and higher to slow
                    const inc = target / speed;

                    // Check if target is reached
                    if (count < target) {
                        // Add inc to count and update DOM
                        counter.innerText = Math.ceil(count + inc);
                        // Call function every frame
                        requestAnimationFrame(updateCount);
                    } else {
                        counter.innerText = target;
                    }
                };

                updateCount();
            });
        };

        animateCounters();
    }, []);

    return (
        <div className="statistics">
            <div className="container">
                <div className="counter">
                <i className="fas fa-rocket fa-3x"></i>
                    <div className="counter-value" data-target="100">0</div>
                    <div className="counter-description">Finished Projects</div>
                </div>
                <div className="counter">
                <i className="fas fa-users fa-3x"></i>
                    <div className="counter-value" data-target="50">0</div>
                    <div className="counter-description">Happy Customers</div>
                </div>
                <div className="counter">
                <i className="fas fa-gem fa-3x"></i>
                    <div className="counter-value" data-target="300">0</div>
                    <div className="counter-description">Years Of Experience</div>
                </div>
            </div>
        </div>
    );
};

export default StatisticsSection;
