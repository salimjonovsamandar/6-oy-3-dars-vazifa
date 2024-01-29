import React from 'react'
import '../Card/index.css'

export default function Card() {
    return (
        <>
            <div className="container">
                <div className="header">
                    <div className="logo">
                        <p>Kreed</p>
                    </div>
                    <div className="nav">
                        <a href="#">Headphones</a>
                        <a href="#">Speakers</a>
                        <a href="#">Backstage</a>
                        <a href="#">Studio</a>
                        <a href="#">Accessories</a>
                        <button>Login</button>
                    </div>
                </div>
            </div>
            <div className="main">
                <div className="text">
                    <h1>Build your own wall of sound.</h1>
                    <p>Winners aren't made overnight. Over 50 years of sound and design expertise has been distilled into each and every Marshall speaker, bringing that big stage presence home for your listening enjoyment.</p>
                    <button>View All Products</button>
                </div>
            </div>
        </>
    )
}
