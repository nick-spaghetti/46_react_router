import React from "react";
import "../Joke.css";

// function Joke({ vote, votes, text, id }) {
// 	const upVote = () => vote(id, +1);
// 	const downVote = () => vote(id, -1);

// 	return (
// 		<div className="Joke">
// 			<div className="Joke-votearea">
// 				<button onClick={upVote}>
// 					<i className="fas fa-thumbs-up" />
// 				</button>

// 				<button onClick={downVote}>
// 					<i className="fas fa-thumbs-down" />
// 				</button>

// 				{votes}
// 			</div>

// 			<div className="Joke-text">{text}</div>
// 		</div>
// 	);
// }

class Joke extends React.Component {
	constructor(props) {
		super(props);
		this.upVote = this.upVote.bind(this);
		this.downVote = this.downVote.bind(this);
		this.toggleLock = this.toggleLock.bind(this);
	}
	upVote() {
		this.props.vote(this.props.id, +1);
	}
	downVote() {
		this.props.vote(this.props.id, -1);
	}
	toggleLock() {
		this.props.toggleLock(this.props.id);
	}
	render() {
		return (
			<div className={`Joke ${this.props.locked ? "Joke-locked" : ""}`}>
				<div className="Joke-votearea">
					<button onClick={this.upVote}>👍</button>
					<button onClick={this.downVote}>👎</button>
					<button onClick={this.toggleLock}>
						{this.props.locked ? "🔒" : "🔓"}
					</button>
					{this.props.vote}
				</div>
				<div className="Joke-text">{this.props.text}</div>
			</div>
		);
	}
}

export default Joke;
