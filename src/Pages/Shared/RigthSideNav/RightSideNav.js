import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter,FaDiscord,FaLinkedin,FaInstagram, FaWhatsapp, FaTwitch } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';

const RightSideNav = () => {
    return (
        <div>
            <ButtonGroup vertical>
                <Button variant="outline-primary" className='mb-2'><FaGoogle/> Log In with Google</Button>
                <Button variant="outline-dark"><FaGithub/> Log In with GitHub</Button>
            </ButtonGroup>
            <div>
                <h4  className='mt-5'>find Us!</h4>
                <ListGroup>
                    <ListGroup.Item className='mb-3'><FaFacebook/> FaceBook</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaInstagram/> Instagram</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaTwitter/> Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaLinkedin/> Linkedin</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaDiscord/> Discord</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaWhatsapp/> Whatsapp</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaTwitch/> Twitch</ListGroup.Item>
                </ListGroup>
            </div>
        </div>
    );
};

export default RightSideNav;