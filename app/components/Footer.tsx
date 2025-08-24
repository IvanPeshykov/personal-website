import React from 'react';

const Footer = () => {
    return (
        <div className=" p-4 text-center" style={{zIndex: "-2"}}>
            All rights reserved © {new Date().getFullYear()} - Built with ❤️ by Ivan Peshykov
        </div>
    );
};

export default Footer;
