import { faComment, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Contact = () => {
  return (
    <div className='flex flex-col w-full items-center px-2'>
        <h1 className='uppercase tracking-widest font-semibold text-2xl text-center mt-10'>Contact us</h1>
        <FontAwesomeIcon icon={ faComment} className="text-center text-red-300 text-4xl mt-12"/>
        <p className='mt-2'>Need an ASAP answer? Contact us via chat, 24/7. For existing furniture orders, please call us.</p>
        <div className='mt-2'>
            <button className='uppercase bg-black text-white px-4 py-1 '>Chat with us</button>
        </div>
        <FontAwesomeIcon icon={faEnvelopeOpenText} className="text-red-300 mt-12 text-4xl"/>
        <p className='mt-2'>You can text us at 813 9468 253 - or click on the "text us" link below on your mobile device. Please allow the system to acknowledge a simple greeting (even "Hi" wll do!) before providing your question / order details. Consent is not required for any purchase. Message and data rates may apply. Text messaging may not be available via all carriers.
        </p>
        <div className='text-center mt-2'>
            <button className='uppercase bg-black text-white px-5 py-1'>Text us</button>
        </div>
        <i className='fab fa-twitter text-center text-red-300 text-4xl mt-12'></i>
        <p className='mt-2'>To send us a private or direct message, like @Open Fashion on Facebook or follow us on Twitter. We'll get back to you ASAP. Please include your name, order numberm and email address for a faster response!</p>
    </div>
  )
}

export default Contact