import React from 'react';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-neutral text-neutral-content">
            <div>
                <span className="footer-title">Services</span>
                <a className="link link-hover" href='/'>Selling</a>
                <a className="link link-hover" href='/'>Refunding</a>
                <a className="link link-hover" href='/'>Marketing</a>
                <a className="link link-hover" href='/'>Advertisement</a>
            </div>
            <div>
                <span className="footer-title">Horse Trade Sale</span>
                <a className="link link-hover" href='/'>About us</a>
                <a className="link link-hover" href='/'>Contact</a>
                <a className="link link-hover" href='/'>Jobs</a>

            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a className="link link-hover" href='/'>Terms of use</a>
                <a className="link link-hover" href='/'>Privacy policy</a>
                <a className="link link-hover" href='/'>Cookie policy</a>
            </div>
        </footer>
    );
};

export default Footer;