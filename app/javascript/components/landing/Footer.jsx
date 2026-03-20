import React from 'react'

function Footer() {
    return (
        <>
        <div className="bg-stone-900 w-full mt-25 flex flex-col items-center justify-center gap-10 py-8 text-white">
        <div>
        <div className="flex justify-center items-center gap-2">
        <div className="border p-2 rounded-full"><p class="font-bold text-2xl">AG</p></div>
        
        <div className="flex gap-2"><span class="font-medium font-xl">ADVENTURE</span> <p class="font-light">Guides</p></div>
        </div>
        </div>
        <div className="flex gap-5 text-2xl">
        <i className="ri-facebook-fill"></i>
        <i className="ri-twitter-x-line"></i>
        <i className="ri-instagram-line"></i>
        <i className="ri-pinterest-line"></i>
        </div>
        <div className="flex">
        <p className="px-5 border-r-2 border-gray-300">ABOUT US</p>
        <p className="px-5 border-r-2 border-gray-300">CONTACT</p>
        <p className="px-5 border-r-2 border-gray-300">SUPPORT US</p>
        <p className="px-5 border-r-2 border-gray-300">ADVERTISE</p>
        <p className="px-5 border-r-2 border-gray-300">PRIVACY POLICY</p>
        </div>
        <div className="text-sm font-thin">© 2026 Adventure guides. All Rights Reserved. No part of this site may be reproduced without our written permission.</div>
        </div>
        </>
    )
}

export default Footer
