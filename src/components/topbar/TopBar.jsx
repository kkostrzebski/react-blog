import React from 'react'
import './topbar.css'

export default function TopBar() {
	return (
		<div className='top'>
			<div className='topLeft'>
				<i className='topIcon fa-brands fa-square-facebook'></i>
                <i className="topIcon fa-brands fa-square-twitter"></i>
                <i className="topIcon fa-brands fa-square-pinterest"></i>
                <i className="topIcon fa-brands fa-square-instagram"></i>
			</div>
			<div className='topCenter'>
                <ul className="topList">
                    <li className='topListItem'>HOME</li>
                    <li className='topListItem'>ABOUT</li>
                    <li className='topListItem'>CONTACT</li>
                    <li className='topListItem'>WRITE</li>
                    <li className='topListItem'>LOGOUT</li>
                </ul>
            </div>
			<div className='topRight'>
                <img className='topImg' src="https://scontent.fpoz4-1.fna.fbcdn.net/v/t1.15752-9/366089747_255131694082283_1746677504116927587_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=ae9488&_nc_ohc=VWR3XcqO3p8AX-vO8Bg&_nc_ht=scontent.fpoz4-1.fna&oh=03_AdSG44CUYZjnEKyOly74IKcOKtIqqFs-O3c7PcHN2IN53w&oe=6503ED78" alt="" />
                <i  className='topSearchIcon fa-solid fa-magnifying-glass'></i>
            </div>
		</div>
	)
}
