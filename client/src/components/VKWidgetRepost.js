import React, { useEffect } from 'react';
import '../styles/global.css';


const VKWidgetRepost = () => {
    useEffect(() => {
        document.getElementById('vk_share_button').innerHTML = `VK.Share.button('http://mysite.com', {type: 'link'})`;
    }, []);

    return <a id="vk_share_button" />;
};

export default VKWidgetRepost;