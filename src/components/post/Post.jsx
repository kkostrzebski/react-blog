import React from 'react'
import './post.css'

export default function Post({ categories }) {
	
	return (
		<div className='post'>
			<img
				className='postImg'
				src='https://images.pexels.com/photos/3773244/pexels-photo-3773244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
				alt=''
			/>
			<div className='postInfo'>
				<div className='postCats'>
					{categories.map((cat, index) => (
						<span className='postCat' key={index}>
							{cat}
						</span>
					))}
				</div>
				<span className='postTitle'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
				<hr />
				<span className='postDate'>1 hour ago</span>
				<p className='postDescription'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque dolore laborum neque corporis quo explicabo
					numquam magnam quia, temporibus earum, sit iusto ea libero sint distinctio eum! Hic, vitae amet!Lorem ipsum
					dolor sit amet consectetur adipisicing elit. Atque dolore laborum neque corporis quo explicabo numquam magnam
					quia, temporibus earum, sit iusto ea libero sint distinctio eum! Hic, vitae amet!Lorem ipsum dolor sit amet
					consectetur adipisicing elit. Atque dolore laborum neque corporis quo explicabo numquam magnam quia,
					temporibus earum, sit iusto ea libero sint distinctio eum! Hic, vitae amet!Lorem ipsum dolor sit amet
					consectetur adipisicing elit. Atque dolore laborum neque corporis quo explicabo numquam magnam quia,
					temporibus earum, sit iusto ea libero sint distinctio eum! Hic, vitae amet!
				</p>
			</div>
		</div>
	)
}
