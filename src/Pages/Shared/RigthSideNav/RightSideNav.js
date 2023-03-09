import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter,FaDiscord,FaLinkedin,FaInstagram, FaWhatsapp, FaTwitch } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarusel from '../BrandCarusel/BrandCarusel';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const RightSideNav = () => {
    const { googleSignIn} = useContext(AuthContext);
    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(res =>{
            const guser = res.user
            console.log(guser);
        }).catch(error =>console.error(error))
    }
    return (
        <div>
            <ButtonGroup vertical>
                <Button onClick={handleGoogleSignIn} variant="outline-primary" className='mb-2'><FaGoogle/> Log In with Google</Button>
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
            <div>
                <BrandCarusel></BrandCarusel>
            </div>
        </div>
    );
};

export default RightSideNav;