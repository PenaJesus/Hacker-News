import React from 'react';
import ArticleCard from './ArticleCard'

function ListArticles(props) {
  return(
    <li style= { {listStyle: "none"} }>
      {props.article.map((article, index) => {
        return (
          <ArticleCard 
            key={index}
            title={article.title}
            author={article.author}
            url={article.url}
            created_at={article.created_at}
            comments={article.num_comments}
            points={article.points}
          />
        )
      })}
    </li>
  )
}

export default ListArticles