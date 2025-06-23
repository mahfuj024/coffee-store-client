import React from 'react'
import { Link } from 'react-router'

function BannerDetails() {
    return (
        <section className="p-6 dark:bg-gray-100 dark:text-gray-800">
            <div className="container p-4 mx-auto text-center">
                <h2 className="text-4xl font-bold">Espresso Emporium</h2>
            </div>
            <div className='mt-10'>
                <h1 className='text-xl font-semibold mb-3'>Espresso Emporium: Where Every Sip Tells a Story</h1>
                <p>Welcome to Espresso Emporium, your cozy corner of warmth, aroma, and unforgettable flavor. Nestled in the heart of the city, our coffee shop is more than just a place to grab your daily caffeine fix — it’s a carefully crafted experience designed for coffee lovers, thinkers, creators, and friends.

                    At Espresso Emporium, we believe coffee is an art, and every cup tells a story. From the moment you step through our doors, you’re greeted with the comforting aroma of freshly ground beans, soft music, and a welcoming atmosphere that makes you feel right at home. Whether you're starting your morning, taking a midday break, or winding down your day — this is your perfect stop.</p>
            </div>
            <div className='mt-10'>
                <h1 className='text-xl font-semibold mb-3'>Our Coffee</h1>
                <p>We source our beans from sustainable farms around the world, including Ethiopia, Colombia, Brazil, and Vietnam. Each blend is handpicked and roasted locally to ensure maximum freshness and flavor. From bold and robust espressos to creamy lattes and rich cold brews — every drink at Espresso Emporium is brewed to perfection by skilled baristas who love what they do. <br /><br />

                    If you’re not sure what to order, our friendly team will guide you based on your taste preferences. Want something sweet and smooth? Try our caramel macchiato. Looking for something bold? Go for a double-shot espresso. We also offer dairy-free and sugar-free options, because your comfort is our priority.</p>
            </div>
            <div className='mt-10'>
                <h1 className='text-xl font-semibold mb-3'>More Than Coffee</h1>
                <p>Our menu doesn't stop at coffee. Enjoy a delightful selection of fresh pastries, sandwiches, and desserts made in-house every day. From buttery croissants to rich chocolate brownies and vegan treats — there’s something to pair with every cup.

                    Looking for a brunch spot? Our avocado toast, omelets, and signature breakfast platters are loved by regulars and new visitors alike. Every item on the menu is made with care and served with a smile.</p>
            </div>
            <div className='mt-10'>
                <h1 className='text-xl font-semibold mb-3'>Our Mission</h1>
                <p>At Espresso Emporium, we’re not just serving coffee — we’re building community. We believe in sustainability, fair trade, and supporting local farmers and artists. Our mission is to create a space where everyone feels welcome and every visit brings a little joy.</p>
            </div>
            <div className='my-6 text-end'>
                <Link to="/" className='btn btn-lg  transition-all duration-300 overflow-hidden group hover:scale-105 hover:tracking-wide shadow-md hover:shadow-lg'>Go back</Link>
            </div>
        </section>
    )
}

export default BannerDetails