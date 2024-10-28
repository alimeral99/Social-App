import React from "react";
import "./Post.css";

import Avatar from "react-avatar";
import LikeCommentButtons from "./LikeCommentButtons/LikeCommentButtons";

function Post() {
  return (
    <div className="post">
      <div className="post-header">
        <Avatar name="Foo Bar" size="30" round="150px" />
        <div className="post-owner">
          <h4 className="postOwner-name">Jack SJ Rayner</h4>
          <span className="post-createdDate">04.03.2022</span>
          <button>Follow</button>
        </div>
      </div>

      <div className="post-body">
        <h3 className="post-name">
          What is the saddest truth about smart people?
        </h3>
        <div className="post-content">
          <p>
            He attended Harvard for a short time, and his verbal abilities were
            exceptional. It was clear from his writing that he was gifted - he
            wrote with such honesty and emotion that it was evident he had
            extensive thoughts, about a lot of things. Including depression. On
            depression, he wrote: The so-called ‘psychotically depressed’ person
            who tries to kill herself doesn’t do so out of quote ‘hopelessness’
            or any abstract conviction that life’s assets and debits do not
            square. And surely not because death seems suddenly appealing. The
            person in whom Its invisible agony reaches a certain unendurable
            level will kill herself the same way a trapped person will
            eventually jump from the window of a burning high-rise. Make no
            mistake about people who leap from burning windows. Their terror of
            falling from a great height is still just as great as it would be
            for you or me standing speculatively at the same window just
            checking out the view; i.e. the fear of falling remains a constant.
            The variable here is the other terror, the fire’s flames: when the
            flames get close enough, falling to death becomes the slightly less
            terrible of two terrors. It’s not desiring the fall; it’s terror of
            the flames. And yet nobody down on the sidewalk, looking up and
            yelling ‘Don’t!’ and ‘Hang on!’, can understand the jump. Not
            really. You’d have to have personally been trapped and felt flames
            to really understand a terror way beyond falling.
          </p>
        </div>
      </div>
      <LikeCommentButtons />
    </div>
  );
}

export default Post;
