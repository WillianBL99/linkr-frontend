import styled from "styled-components";
import LinkPreview from "./LinkPreview";
import Hashtag from "./Hashtag";
import Likes from "./Likes";
import DeletePopUp from "./DeletePost";
import { FaTrash } from "react-icons/fa";
import { useState } from "react";

function UserPost(posts) {
	console.log(posts);
	const [popUp, setPopUp] = useState(false);
	const [id, setId] = useState("");

	return (
		<PostContainer>
			<section>
				<img className="user" src={image} alt="" />
				<Likes postId={ postId } infoLikes={ infoLikes } />
			</section>
			<section className="post-body">
				<h2>{name}</h2>
				<p><Hashtag>{postBody}</Hashtag></p>
				<LinkPreview metaData={metadata} />
			</section>
		</PostContainer>
	);
}

export default UserPost;

const PostContainer = styled.article`
	display: flex;
	width: 100%;
	height: auto;
	padding: 1rem;
	overflow: hidden;
	margin-bottom: 1rem;
	background-color: var(--color-2);

	@media (min-width: 500px) {
			border-radius: 0.8rem;
	}

	& > section {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		width: 4rem;
		padding-right: 1rem;


	
		img.user {
			--size-icon: 2.5rem;
			width: var(--size-icon);
			height: var(--size-icon);

			object-fit: cover;
			object-position: center;
			background-repeat: no-repeat;

			border-radius: 50%;
		}
	}

	&>section.post-body {
		align-items: flex-start;
		width: calc(100% - 4rem);
		padding-right: 0;
		font-weight: var(--font-weight-regular);
		
		h2 {
			margin-bottom: 0.5rem;
			font-size: 1rem;
		}			

		p {
			font-size: 0.9rem;
      color: var(--text-color-secodary);
      margin-bottom: 0.8rem;
		}
	}
`;
