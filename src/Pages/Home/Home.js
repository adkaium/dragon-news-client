import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../Shared/NewsCard/NewsCard';

const Home = () => {
    const AllNews = useLoaderData();
    return (
        <div>
            <h1>Dragon News home{AllNews.length}</h1>
            {
                AllNews.map(news => <NewsCard
                    key={news._id}
                    news={news}
                >
                </NewsCard>)
            }
        </div>
    );
};

export default Home;