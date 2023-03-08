import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import { FaRegBookmark, FaShareAlt } from 'react-icons/fa';

const NewsCard = ({news}) => {
    console.log(news);
    const {title,author,image_url,total_view,details,_id,
    } = news
    return (
        <Card className='mt-3'>
      <Card.Header className='d-flex justify-content-between align-items-center'>
        <div className='d-flex align-items-center'>
            <div className='me-2'>
                <Image
                    src={author.img}
                    style={{height: "60px"}}
                    roundedCircle
                >
                </Image>
            </div>
            <div>
                <p>{author.name}</p>
                <small>{author.published_date}</small>
            </div>
        </div>
        <div>
        <FaRegBookmark className='me-2'></FaRegBookmark>
        <FaShareAlt></FaShareAlt>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img src={image_url}/>
        <Card.Text>
          {
            details.length > 250 ? 
            <p>{details.slice(0,250)+ '...'}<Link to={`/news/${_id}`}>Read More</Link> </p>
            :<p>{details}</p>
          }
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">{total_view}</Card.Footer>
    </Card>
    );
};

export default NewsCard;