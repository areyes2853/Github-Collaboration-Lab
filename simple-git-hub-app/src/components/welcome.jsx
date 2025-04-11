const Welcome =() =>{
    return(
        <>
            <div>  
                <header>
                    <h1>Saving Old Pet Stores</h1>
                    <nav>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#donate">Donate</a></li>
                        </ul>
                    </nav>
                </header>

                <section className="hero">
                    <h1>Preserving the Heart of Our Communities</h1>
                    <p>Help us save the unique charm and history of beloved old pet stores.</p>
                    <a href="#donate" className="button">Donate Now</a>
                </section>

                <div className="container" id="about">
                    <h2>About Us</h2>
                    <p>We are a nonprofit organization dedicated to the preservation of traditional, independently-owned pet stores. These stores often hold historical significance within their communities and provide a unique, personalized experience that is disappearing in the face of large corporations and online retailers. We aim to provide resources, support, and raise awareness to ensure these cherished establishments can continue to thrive.</p>
                </div>

                <div className="container" id="why-save">
                    <h2>Why Save Old Pet Stores?</h2>
                    <ul>
                        <p>
                        They often have deep roots in the community, fostering local connections.
                        They provide expert advice and personalized service from knowledgeable owners and staff.
                        They contribute to the unique character and charm of our neighborhoods.
                        Many carry specialty items and support local breeders and suppliers.
                        They offer a tangible experience, allowing customers to interact with animals and products firsthand.
                        </p>
                    </ul>
                </div>

                <div className="container how-to-help" id="donate">
                    <h2>How You Can Help</h2>
                    <ul>
                        <p>
                        <strong>Donate:</strong> Your financial contribution will directly support our initiatives to provide grants, business advice, and marketing assistance to struggling old pet stores.
                         <a href="#" className="button small-button">Donate</a> <strong>
                        Volunteer:</strong> Lend your time and skills to help with fundraising events, outreach programs, and administrative tasks.
                          <a href="#">Learn More About Volunteering</a>
                         <strong>Spread the Word:</strong> Share our mission with your friends, family, and social media networks. Help us raise awareness about the importance of saving these local treasures.
                         <strong>Support Local Pet Stores:</strong> Choose to shop at your local, independently-owned pet stores whenever possible.
                        </p>
                    </ul>
                </div>

                <footer>
                    &copy; 2025 Saving Old Pet Stores - A Nonprofit Organization
                </footer>
            </div>
        </>
    );
}

export default Welcome;