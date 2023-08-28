import React from 'react'
import './topbar.css'
import { Link } from 'react-router-dom'

export default function TopBar() {
	const user = true
	return (
		<div className='top'>
			<div className='topLeft'>
				<i className='topIcon fa-brands fa-square-facebook'></i>
				<i className='topIcon fa-brands fa-square-twitter'></i>
				<i className='topIcon fa-brands fa-square-pinterest'></i>
				<i className='topIcon fa-brands fa-square-instagram'></i>
			</div>
			<div className='topCenter'>
				<ul className='topList'>
					<li className='topListItem'>
						<Link className='link' to='/'>
							HOME
						</Link>
					</li>
					<li className='topListItem'>
						<Link className='link' to='/about'>
							ABOUT
						</Link>
					</li>
					<li className='topListItem'>
						<Link className='link' to='/contact'>
							CONTACT
						</Link>
					</li>
					<li className='topListItem'>
						<Link className='link' to='/write'>
							WRITE
						</Link>
					</li>
					<li className='topListItem'>{user && 'LOGOUT'}</li>
				</ul>
			</div>
			<div className='topRight'>
				{user ? (
					
						<Link className='link' to='/settings'>
							<img
								className='topImg'
								src='https://scontent.fpoz4-1.fna.fbcdn.net/v/t1.15752-9/366089747_255131694082283_1746677504116927587_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=ae9488&_nc_ohc=VWR3XcqO3p8AX-vO8Bg&_nc_ht=scontent.fpoz4-1.fna&oh=03_AdSG44CUYZjnEKyOly74IKcOKtIqqFs-O3c7PcHN2IN53w&oe=6503ED78'
								alt=''
							/>
						</Link>
					
				) : (
					<ul className='topList'>
						<li className='topListItem'>
							<Link className='link' to='/login'>
								Login
							</Link>
						</li>
						<li className='topListItem'>
							<Link className='link' to='/register'>
								Register
							</Link>
						</li>
					</ul>
				)}

				<i className='topSearchIcon fa-solid fa-magnifying-glass'></i>
			</div>
		</div>
	)
}
