import React, { Component } from 'react';

class Footer extends Component {
    state = {  }
    render() { 
        return (
            <div className="site-footer d-flex w-100 h-100 p-3 mx-auto flex-column">
                <footer class="mastfoot mt-auto">
                    <div class="inner">
                        <p>Copyright &copy; <a href="https://github.com/JPitters" target="_blank" rel="noopener noreferrer">Jordan Pitters</a> 2019.</p>
                    </div>
                </footer>
            </div>
        );
    }
}
 
export default Footer;