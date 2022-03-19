import React from 'react';


function ArticleCard(props) {
  const { title, author, url, created_at, comments, points } = props;
  const date = new Date(created_at).toLocaleDateString(
    'en-US'
  );
  return(
    <li style={ {listStyle: "none"} }>
      <div class="articleHeader">
        <h2 class="title-container"><a class="title" href={ url } >{ title }</a></h2>
        <h3 class="author">by: { author }</h3>
        <a class="link" href={ url }>({ url })</a>
      </div>
      <div class="articleFooter">
        <p>{date} | {comments} Comments | {points} Points</p>
      </div>
    </li>
  )
}

export default ArticleCard