import React from 'react'
import ContactItem from '../Components/ContactItem';
import phone from '../img/phone.svg';
import email from '../img/emailme.svg';
import location from '../img/location.svg';
import Tittle from '../Components/Tittle';

function ContactPage() {
    return (
        <div>
            <div className="title">
                <Tittle title={'About Me'} span={'About Me'} />
            </div>
            
                
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31443.145335378493!2d78.08024226970103!3d9.901175146805494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00cf9a84c8d3a3%3A0x88041af64cc73a4b!2sT%20V%20S%20Nagar%2C%20Tamil%20Nadu%20625003!5e0!3m2!1sen!2sin!4v1615394580559!5m2!1sen!2sin" width="100%" height="500"  allowfullscreen="" loading="lazy"></iframe>
                
                
                    <ContactItem icon={phone} text1={'+91 9677783098'} text2={'+0333 6782 8792'} title={'Phone'}/>
                    <ContactItem icon={email} text1={'jagatheeswar.r3@gmail.com'} text2={'123004093@sastra.ac.in'} title={'Email'}/>
                    <ContactItem icon={location} text1={'E-325,Meenakshi road,madurai,TVS Nagar,Madurai-03'} text2={'TamilNadu,India'} title={'Address'}/>
                </div>

    )
}

export default ContactPage;
