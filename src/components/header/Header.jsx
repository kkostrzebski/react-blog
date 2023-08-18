import './header.css'

export default function Header() {
	return (
    <div className='header'>
        <div className="headerTitles">
            <span className='headerTitleSm'>React & Node</span>
            <span className='headerTitleLg'>Blog</span>
        </div>
        <img 
        className='headerImg' 
        src="https://scontent.fpoz4-1.fna.fbcdn.net/v/t1.15752-9/366089747_255131694082283_1746677504116927587_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=ae9488&_nc_ohc=VWR3XcqO3p8AX-vO8Bg&_nc_ht=scontent.fpoz4-1.fna&oh=03_AdSG44CUYZjnEKyOly74IKcOKtIqqFs-O3c7PcHN2IN53w&oe=6503ED78" 
        alt="" />
    </div>
    )
}
