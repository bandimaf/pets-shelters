import React, { useContext, useEffect } from 'react';
import '../styles/global.css'


const VKWidgetMail = () => {

    // useEffect(() => {
    //     const script = document.createElement('script');
    //     script.type = 'text/javascript';
    //     script.innerHTML = `VK.Widgets.ContactUs('vk_contact_us', {text: 'Напишите нам'}, {shelter.vkID});`;
    //     document.getElementById('vk_contact_us').appendChild(script);
    // }, []);

    return <div id='vk_contact_us'></div>;


};

export default VKWidgetMail;



