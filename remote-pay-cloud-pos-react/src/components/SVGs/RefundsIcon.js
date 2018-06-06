import React from 'react';

export default class RefundsIcon extends React.Component {

    constructor() {
        super();
    }

    render(){
        let className = 'home_icon';
        if(this.props.class !== undefined){
            className = this.props.class;
        }

        return (
            <svg className={className} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 80 80">
                <path d="M18.7,21.9l1.9,1c0.2-0.3,0.4-0.7,0.6-1H18.7z"/>
                <path d="M39.9,59c7.7,0.1,14-6.1,14-13.8c0.1-7.7-6.1-13.9-13.8-14l-14,13c0,0.3,0,0.6,0,0.8
			C26,52.7,32.2,58.9,39.9,59z M38.9,36.8l0-1.8c0-0.4,0.3-0.7,0.7-0.7l1.5,0c0.4,0,0.7,0.3,0.7,0.7l0,1.6c0.8,0.1,1.5,0.2,2.1,0.3
			c0.4,0.1,0.8,0.4,1.1,0.8c0.2,0.4,0.3,0.9,0.2,1.3l0,0.1c-0.1,0.4-0.3,0.7-0.7,0.8c-0.3,0.2-0.7,0.2-1.1,0.1
			c-0.7-0.2-1.5-0.4-2.5-0.4c-1.8,0-2.3,0.7-2.3,1.5c0,0.9,0.9,1.5,3.2,2.4c3.2,1.2,4.5,2.7,4.5,5.1c0,2.3-1.7,4.3-4.6,4.9l0,2.1
			c0,0.4-0.3,0.7-0.7,0.7l-1.5,0c-0.4,0-0.7-0.3-0.7-0.7l0-1.8c-1-0.1-2.1-0.2-2.9-0.5c-0.9-0.3-1.5-1.2-1.2-2.2l0,0
			c0.1-0.4,0.4-0.7,0.7-0.9c0.4-0.2,0.8-0.2,1.1-0.1c0.9,0.3,1.9,0.6,3,0.6c1.5,0,2.6-0.6,2.6-1.7c0-1-0.9-1.7-2.8-2.4
			c-2.9-1-4.8-2.4-4.8-5C34.5,39.2,36.1,37.4,38.9,36.8z"/>
                <path d="M73.5,21.9h-12c-4.2-6.4-11.1-10.2-18.8-10.2c-9.2,0-17.7,5.9-21,14.5l-6.8-3.7c-0.8-0.4-1.7,0.3-1.4,1.1
			l5.7,21.8c0.2,0.7,1.1,1,1.6,0.5l16.5-15.3c0.6-0.6,0.3-1.7-0.6-1.7L29,28.4c3.6-8.3,14.5-11.8,22-6.5H40.3
			c-3,0.6-5.5,2.1-7.4,4.3h31.6c0.5,1.4,1.2,2.7,2.1,3.9c1.6,2,3.7,3.6,6.2,4.4v21.1c-3.9,1.3-7,4.4-8.3,8.3H15.4
			c-1.3-3.9-4.4-7-8.3-8.3V34.5c2.3-0.8,4.3-2.2,5.8-3.9L10.7,22l0-0.1H6.5c-2.1,0-3.7,1.7-3.7,3.7v38.9c0,0.5,0.1,1,0.3,1.4
			c0.6,1.4,1.9,2.3,3.4,2.3h67c1.5,0,2.9-0.9,3.4-2.3c0.2-0.4,0.3-0.9,0.3-1.4V25.6C77.2,23.6,75.5,21.9,73.5,21.9z"/>
            </svg>
        )
    }
}