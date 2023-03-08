import React from 'react';

const NewsCard = ({news}) => {
    return (
        <div>
            <p>{news.title}</p>
        </div>
    );
};

export default NewsCard;