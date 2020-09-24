import React from 'react'
import './FirstSection.css'

function FirstSection(props) {
  return (
  	<section className="first-section">
  		<h1 className="heading">{props.title} Page!</h1>
  		<p className="paragraph">
  			Lorem ipsum dolor ...
  		</p>
  		<div className="btn">Explore</div>
  	</section>
  )
}

export default FirstSection