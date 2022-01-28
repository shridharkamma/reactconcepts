import react from 'react';
import NewsItem from './new-item-list';

const NewsList = (props) => {
  const news = props.jsonNews.map((item) => (
    <NewsItem item={item} key={item.id} />
  ));

  return (
    <>
      {news}
      {props.children}
    </>
  );
};

export default NewsList;
