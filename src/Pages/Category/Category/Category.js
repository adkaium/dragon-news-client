import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../../Shared/NewsCard/NewsCard';

const Category = () => {
    const categoryNews = useLoaderData()
    return (
        <div>
            <h1>This is Category{categoryNews.length}</h1>
            {
                categoryNews.map(news =><NewsCard
                    key={news._id}
                    news={news}
                ></NewsCard>)
            }
        </div>
    );
};

export default Category;