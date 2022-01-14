// import React, { Fragment } from 'react'
// import Nav from 'react-bootstrap/Nav'
// import Navbar from 'react-bootstrap/Navbar'
// import { Link } from 'react-router-dom'
// import '../../Header.css'

// // const linkStyle = {
// //     color: 'white',
// //     textDecoration: 'none'
// // }

// const authenticatedOptions = (
// 	<>
// 		<Nav.Link className='navBar'>
// 			<ul>
// 				<li>
// 					<Link to='change-password'>
// 						Change Password
// 					</Link>
// 				</li>
// 			</ul>
// 		</Nav.Link>
// 		<Nav.Link>
// 			<Link to='sign-out'>
// 				Sign Out
// 			</Link>
// 		</Nav.Link>
// 	</>
// )

// const unauthenticatedOptions = (
// 	<>
// 		<Nav.Link className='navBar'>
// 			<ul>
// 				<li>
// 					<Link to='sign-up'>Sign Up</Link>
// 				</li>
// 			</ul>
// 		</Nav.Link>
// 		<Nav.Link>
// 			<ul>
// 				<li>
// 			<Link to='sign-in'>Sign In</Link>
// 			</li>
// 			</ul>
// 		</Nav.Link>
// 	</>
// )

// const alwaysOptions = (
// 	<>
// 		<Nav.Link className='navBar'>
// 			<ul>
// 				<li>
// 			<Link to='/'>
// 				Home
// 			</Link>
// 			</li>
// 			</ul>
// 		</Nav.Link>
// 	</>
// )

// const Header = ({ user }) => (
// 	<Navbar className='navBar'>
// 		{/* <Navbar.Toggle aria-controls='basic-navbar-nav' /> */}
// 		<Nav>
// 			{user && (
// 				<span>Welcome!</span>
// 			)}
// 			{alwaysOptions}
// 			{user ? authenticatedOptions : unauthenticatedOptions}
// 		</Nav>
// 	</Navbar>
// )

// export default Header

import React from "react";
import { Link } from 'react-router-dom'
import "../../Header.css"

const Header = (props) => {

	if (!props.user) {
		return '';
	}

	const homeNav = (
		<div className="navBar">
			<ul>
				<li className="links">
					<div>
						<Link to="/">Welcome, {props.user.name}</Link>
					</div>
				</li>
				<li>
					<div>
						<Link to="/sign-in">Sign-in</Link>
					</div>
				</li>
				<li>
					<div>
						<Link to="/sign-up">Sign-up</Link>
					</div>
				</li>
				<li>
					<div>
						<Link to="/sign-out">Sign-out</Link>
					</div>
				</li>
			</ul>
		</div>
	)

	return (
		<div>
			{homeNav}
		</div>
	)
}

export default Header;
