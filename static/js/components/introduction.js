import {
    useState,
    useEffect
} from 'react';
import IntroVideo from '../images/intro.mp4'
import videoBg from '../images/video.jpg'
import playBtn from '../images/WhatsApp Image 2021-05-07 at 5.28.09 PM.jpeg'
var vid = '';

function Introduction() {
    const [playVideo, setVidStatus] = useState(false);
    useEffect(() => {
        vid = document.getElementById("my-video");
    })

    function playMyVideo() {
        setVidStatus(true);
        vid.play();
    }

    return ( <


            
        )
    }
    export default Introduction;