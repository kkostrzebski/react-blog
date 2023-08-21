import Sidebar from '../../sidebar/Sidebar'
import './setting.css'

export default function setting() {
	return (
		<div className='settings'>
			<div className='settingsWrapper'>
				<div className='settingsTitle'>
					<span className='settingsUpdateTitle'>Update Your Account</span>
					<span className='settingsDeleteTitle'>Delete Account</span>
				</div>
				<form className='settingsForm'>
					<label>Profile Picture</label>
					<div className='settingsPP'>
						<img src='' alt='' />
						<label htmlFor='fileInput'>
							<i class='settingsPPIcon fa-solid fa-user'></i>
						</label>
                        <input type="file" id='fileInput' style={{display:"none"}} />
					</div>
                    <label>Username</label>
                    <input type="text" placeholder='Kizia' />
                    <label>Email</label>
                    <input type="email" placeholder='Kizia@gmail.com' />
                    <label>Password</label>
                    <input type="password"/>
                    <button className="settingsSubmit">Update</button>
				</form>
			</div>
			<Sidebar />
		</div>
	)
}
