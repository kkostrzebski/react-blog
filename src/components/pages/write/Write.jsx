import './write.css'
import React, { useState } from 'react';

export default function Write() {
	const [selectedImage, setSelectedImage] = useState(null);

	return (
		<div className='write'>
			{selectedImage && (
				<img
					src={URL.createObjectURL(selectedImage)}
					alt='Selected'
					className='writeImg'
				/>
			)}
		
			<form className='writeForm'>
				<div className='writeFormGroup'>
					<label htmlFor='fileInput'>
						<i class='writeIcon fa-solid fa-plus'></i>
					</label>
					<input type='file' id='fileInput' style={{ display: 'none' }} onChange={(e) => setSelectedImage(e.target.files[0])} />
					<input type='text' placeholder='Title' className='writeInput' autoFocus={true} />
				</div>
				<div className='writeFormGroup'>
					<textarea placeholder='Tell your story...' type='text' className='writeInput writeText'></textarea>
				</div>
				<button className='writeSubmit'>Publish</button>
			</form>
		</div>
	)
}
