import React, { useState } from 'react'
import Header from '../../header/Header'
import Posts from '../../posts/Posts'
import Sidebar from '../../sidebar/Sidebar'
import './home.css'

export default function Home() {
	const [selectedCategory, setSelectedCategory] = useState('')

	const handleCategoryChange = category => {
		setSelectedCategory(category)
	}

	return (
		<>
			<Header />
			<div className='home'>
				<Posts selectedCategory={selectedCategory} />
				<Sidebar handleCategoryChange={handleCategoryChange} />
			</div>
		</>
	)
}
