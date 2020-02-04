import React, {Component} from 'react';
import './style.css'

class BottomBar extends Component {
    render() {
        return (
            <div className='footer'>
                <div >
                    <ul className="list-unstyled">
                        <li id='fist-element'>
                            <a href="#!">DESPRE NOI|</a>
                        </li>
                        <li id ='second-element'>
                            <a href="#!">TERMENI SI CONDITII|</a>
                        </li>
                        <li id ='third-element'>
                            <a href="#!">AJUTOR</a>
                        </li>
                    </ul>
                </div>
                <div className="">all rights reserved 2019
                    <a href="https://www.bbsmedia.ro/"> ©BBS Media</a>
            </div>
            </div>
        );
    }
}


export default BottomBar;