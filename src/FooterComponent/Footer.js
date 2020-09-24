import React from 'react'
import './Footer.css'

function Footer() {
	return (
		<React.Fragment>
			<hr className="footer-line" />
			<footer className="footer">
				<div>
					<span>FB</span>
					<span>IG</span> 
					<span>TW</span> 
					<span>WS</span>
        </div>
				<div>
					All Rights Are Reserved ®
				</div>
			</footer>
		</React.Fragment>
	)
}

export default Footer