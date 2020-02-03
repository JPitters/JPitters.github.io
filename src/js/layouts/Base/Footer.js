import React, { Component } from 'react';

class Footer extends Component {
    state = {  }
    render() { 
        return (
            <div className="site-foot">
                <div className="footer-container d-flex w-100 h-100 p-3 mx-auto flex-column">
                   <footer className="mastfoot mt-auto">
                        <div className="inner">
                            <p>Copyright &copy; <a href="https://github.com/JPitters" target="_blank" rel="noopener noreferrer">Jordan Pitters</a> 2019.</p>
                        </div>
                    </footer> 
                </div>
                
            </div>
        );
    }
}
 
export default Footer;