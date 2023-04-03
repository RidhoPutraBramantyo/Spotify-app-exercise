import "../css/sidebar.css";
import logo from "../assets/Spotify.png";
// import { AiFillHome } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
// BsSearch;
// AiFillHome;
export default function Sidebar() {
	return (
		<div className="sidebar">
			<div className="image">
				<img src={logo} alt="" className="logo" />
			</div>
			<div className="main">
				<div className="fitur">
					<div className="icon">
						<svg
							role="img"
							height="24"
							width="24"
							// fill="rgb(189, 191, 193)"
							stroke="rgb(189, 191, 193)"
							stroke-width="2"
							aria-hidden="true"
							class="Svg-sc-ytk21e-0 gQUQL home-active-icon"
							viewBox="0 0 24 24"
							data-encore-id="icon"
						>
							<path d="M13.5 1.515a3 3 0 0 0-3 0L3 5.845a2 2 0 0 0-1 1.732V21a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6h4v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V7.577a2 2 0 0 0-1-1.732l-7.5-4.33z"></path>
						</svg>
					</div>
					<div className="text">Home</div>
				</div>
				<div className="fitur">
					<div className="icon">
						<BsSearch className="sizeIcon" />
					</div>
					<div className="text">Search</div>
				</div>
				<div className="fitur">
					<div className="icon">
						<svg
							role="img"
							height="15"
							width="15"
							aria-hidden="true"
							fill="rgb(189, 191, 193)"
							class="Svg-sc-ytk21e-0 gQUQL collection-icon"
							viewBox="0 0 24 24"
							data-encore-id="icon"
						>
							<path d="M14.5 2.134a1 1 0 0 1 1 0l6 3.464a1 1 0 0 1 .5.866V21a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V3a1 1 0 0 1 .5-.866zM16 4.732V20h4V7.041l-4-2.309zM3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zm6 0a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1z"></path>
						</svg>
					</div>
					<div className="text">Library</div>
					{/* </div> */}
				</div>
			</div>
			<div className="main2">
				<div className="fitur">
					<div className="icon">
						<svg
							role="img"
							height="15"
							width="15"
							aria-hidden="true"
							fill="black"
							data-encore-id="icon"
							class="Svg-sc-ytk21e-0 gQUQL"
							// className="sizeIcon"
						>
							<path d="M15.25 8a.75.75 0 0 1-.75.75H8.75v5.75a.75.75 0 0 1-1.5 0V8.75H1.5a.75.75 0 0 1 0-1.5h5.75V1.5a.75.75 0 0 1 1.5 0v5.75h5.75a.75.75 0 0 1 .75.75z"></path>
						</svg>
					</div>
					<div className="text">Create Playlist</div>
				</div>
				<div className="fitur">
					<div className="iconLove">
						<svg
							role="img"
							height="15"
							width="15"
							fill="#fff"
							aria-hidden="true"
							viewBox="0 0 16 16"
							data-encore-id="icon"
							class="Svg-sc-ytk21e-0 gQUQL"
							className="love"
						>
							<path d="M15.724 4.22A4.313 4.313 0 0 0 12.192.814a4.269 4.269 0 0 0-3.622 1.13.837.837 0 0 1-1.14 0 4.272 4.272 0 0 0-6.21 5.855l5.916 7.05a1.128 1.128 0 0 0 1.727 0l5.916-7.05a4.228 4.228 0 0 0 .945-3.577z"></path>
						</svg>
					</div>
					<div className="text">Liked Songs</div>
				</div>
				<hr className="line" />
			</div>
			<div className="playlist">
				<div className="list">
					<span>My Playlist #7</span>
				</div>
				<div className="list">
					<span>My Playlist #6</span>
				</div>
				<div className="list">
					<span>My Playlist #5</span>
				</div>
				<div className="list">
					<span>My Playlist #4</span>
				</div>
				<div className="list">
					<span>My Playlist #7</span>
				</div>
				<div className="list">
					<span>My Playlist #6</span>
				</div>
				<div className="list">
					<span>My Playlist #5</span>
				</div>
				<div className="list">
					<span>My Playlist #4</span>
				</div>
				<div className="list">
					<span>My Playlist #7</span>
				</div>
				<div className="list">
					<span>My Playlist #6</span>
				</div>
				<div className="list">
					<span>My Playlist #5</span>
				</div>
				<div className="list">
					<span>My Playlist #4</span>
				</div>
			</div>
		</div>
	);
}
