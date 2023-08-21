import './singlePost.css'

export default function SinglePost() {
	return (
		<div className='singlePost'>
			<div className='singlePostWrapper'>
				<img
					src='https://images.pexels.com/photos/3960036/pexels-photo-3960036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
					alt=''
					className='singlePostImg'
				/>
				<h1 className='singlePostTitle'>
					Lorem ipsum dolor sit amet.
					<div className='singlePostEdit'>
						<i class='singlePostIcon fa-regular fa-pen-to-square'></i>
						<i class='singlePostIcon fa-solid fa-trash'></i>
					</div>
				</h1>
				<div className='singlePostInfo'>
					<span className='singlePostAuthor'>
						Autor: <b>Kizia</b>
					</span>
					<span className='singlePostDate'>1 hour ago</span>
				</div>
				<p className='singlePostDesc'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus deleniti voluptates perferendis quas
					repudiandae omnis voluptatum quae dolore quibusdam corporis.Lorem ipsum dolor sit amet consectetur adipisicing
					elit. Doloribus deleniti voluptates perferendis quas repudiandae omnis voluptatum quae dolore quibusdam
					corporis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus deleniti voluptates perferendis
					quas repudiandae omnis voluptatum quae dolore quibusdam corporis.Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Doloribus deleniti voluptates perferendis quas repudiandae omnis voluptatum quae dolore
					quibusdam corporis.
				</p>
			</div>
		</div>
	)
}
