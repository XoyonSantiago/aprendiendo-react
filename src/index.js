import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Tweet() {
    return (
        <div className="tweet">
            <Avatar />
            <div className="content">
                <NameWithHandle /><Time/>
                <Message />
                <div className="buttons">
                    <ReplyButton />
                    <RetWeetButton/>
                    <LikeButton />
                    <MoreOptionsButton/>
                </div>
            </div> 
        </div>
    );
}

function Avatar() {
    return (
        <img
            src="https://www.gravatar.com/avatar/nothing"
            className="avatar"
            alt="avatar"
        />
    );
}

function Message() {
    return (
        <div className="message">
            This is less than 140 characters.
        </div>
    );
}

function NameWithHandle() {
    return (
        <span className="name-with-handle">
            <span className="name">Santiago</span>
            <span className="handle">@tu tweet</span>
        </span>
    );
}

// otro tipos de funciones guardandolas en constante
const Time = () => (
    <span className="time">3h ago</span>
);

const ReplyButton = () => (
    <i className="fa fa-reply reply-button"/>
);

const RetWeetButton = () => (
    <i className="fa fa-retweet retweet-button"/>
);

const LikeButton = () => {
    return (
        <i className="fa fa-heart like-button" />
    );
}

// And if it's really simple,
// you can even write it on one line:
// const hi = () => <span>holisss</span>;

const MoreOptionsButton = () => (
    <i className="fa fa-ellipsis-h more-options-button" />
);

ReactDOM.render(
    <Tweet />, // componentes de funcion sin estado o componentes funcional
    document.querySelector('#root')
);
