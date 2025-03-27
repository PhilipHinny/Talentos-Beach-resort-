import { useState } from "react";
import { Calendar, CheckCircle, ChevronRight, Coffee, Facebook, Instagram, MapPin, MessageSquare, Phone, Star, Sunset, Twitter, Umbrella, Wifi } from 'lucide-react'
import './App.css';
import Booking from "./components/Booking";

function App() {

  const [showBooking, setShowBooking] = useState(false);

  return (
    <div className="container">
      <header className="header">
        <div className="header-content">
          <div className="logo">
            <Sunset className="logo-icon" />
            <span className="logo-text">Azure Shores Resort</span>
          </div>
          <nav className="nav-desktop">
            <a href="hero" className="nav-link">Home</a>
            <a href="#rooms" className="nav-link">Rooms</a>
            <a href="#amenities" className="nav-link">Amenities</a>
            <a href="#reviews" className="nav-link">Reviews</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>
          <div className="header-buttons">
            
            <a href="#contact" className="nav-link">
              <button className="btn btn-outline btn-sm desktop-only">Check Availability</button>
            </a>
            <button className="btn btn-primary btn-sm" onClick={() => setShowBooking(true)}>Book Now</button>
          </div>
        </div>
      </header>
      <main>
        <section className="hero">
          <div className="hero-overlay"></div>
          <div className="hero-image">
            <img src="/talentos.jpg" alt="Beach resort view" />
          </div>
          <div className="hero-content">
            <span className="badge badge-primary">Luxury Beachfront Resort</span>
            <h1 className="hero-title">Experience Paradise at Azure Shores</h1>
            <p className="hero-description">
              Indulge in luxury accommodations with breathtaking ocean views and world-class amenities
            </p>
            <div className="hero-buttons">
            <button className="btn btn-primary btn-lg" onClick={() => setShowBooking(true)}>Book Your Stay</button>
            <a href="#amenities" className="nav-link">
            <button className="btn btn-outline btn-lg btn-white">Take a Tour</button>
            </a>
            </div>
          </div>
        </section>

        <section className="welcome">
          <div className="section-content centered">
            <h2 className="section-title">Welcome to Azure Shores Resort</h2>
            <p className="section-description">
              Nestled on the pristine coastline, Azure Shores Resort offers an unparalleled blend of luxury, comfort, and natural beauty. 
              Our resort is designed to provide you with an unforgettable escape from the ordinary.
            </p>
            <div className="features-grid">
              <div className="feature-item">
                <Umbrella className="feature-icon" />
                <span className="feature-text">Private Beach</span>
              </div>
              <div className="feature-item">
                <Wifi className="feature-icon" />
                <span className="feature-text">Free Wi-Fi</span>
              </div>
              <div className="feature-item">
                <Coffee className="feature-icon" />
                <span className="feature-text">Restaurant</span>
              </div>
              <div className="feature-item">
                <Calendar className="feature-icon" />
                <span className="feature-text">Events</span>
              </div>
            </div>
          </div>
        </section>

        <section id="rooms" className="rooms">
          <div className="section-content">
            <div className="section-header">
              <h2 className="section-title">Our Luxurious Accommodations</h2>
              <p className="section-description">
                Choose from our selection of elegantly designed rooms and suites, each offering stunning views and premium amenities for your comfort.
              </p>
            </div>
            <div className="rooms-grid">
              <div className="room-card">
                <div className="room-image">
                  <img src="/room1.jpg" alt="Deluxe Ocean View Room" />
                </div>
                <div className="room-content">
                  <div className="room-header">
                    <h3 className="room-title">Deluxe Ocean View</h3>
                    <span className="badge">From $299/night</span>
                  </div>
                  <p className="room-description">
                    Spacious room with a private balcony overlooking the ocean, king-size bed, and luxury bathroom.
                  </p>
                  <div className="room-features">
                    <span className="badge-outline">Ocean View</span>
                    <span className="badge-outline">King Bed</span>
                    <span className="badge-outline">40m²</span>
                  </div>
                  <button className="btn btn-primary btn-full">View Details</button>
                </div>
              </div>
              <div className="room-card">
                <div className="room-image">
                  <img src="/room2.jpg" alt="Premium Suite" />
                </div>
                <div className="room-content">
                  <div className="room-header">
                    <h3 className="room-title">Premium Suite</h3>
                    <span className="badge">From $499/night</span>
                  </div>
                  <p className="room-description">
                    Luxurious suite with separate living area, panoramic ocean views, and premium amenities.
                  </p>
                  <div className="room-features">
                    <span className="badge-outline">Panoramic View</span>
                    <span className="badge-outline">King Bed</span>
                    <span className="badge-outline">75m²</span>
                  </div>
                  <button className="btn btn-primary btn-full">View Details</button>
                </div>
              </div>
              <div className="room-card">
                <div className="room-image">
                  <img src="/room2.jpg" alt="Premium Suite" />
                </div>
                <div className="room-content">
                  <div className="room-header">
                    <h3 className="room-title">Premium Suite</h3>
                    <span className="badge">From $499/night</span>
                  </div>
                  <p className="room-description">
                    Luxurious suite with separate living area, panoramic ocean views, and premium amenities.
                  </p>
                  <div className="room-features">
                    <span className="badge-outline">Panoramic View</span>
                    <span className="badge-outline">King Bed</span>
                    <span className="badge-outline">75m²</span>
                  </div>
                  <button className="btn btn-primary btn-full">View Details</button>
                </div>
              </div>
              <div className="room-card">
                <div className="room-image">
                  <img src="/room2.jpg" alt="Premium Suite" />
                </div>
                <div className="room-content">
                  <div className="room-header">
                    <h3 className="room-title">Premium Suite</h3>
                    <span className="badge">From $499/night</span>
                  </div>
                  <p className="room-description">
                    Luxurious suite with separate living area, panoramic ocean views, and premium amenities.
                  </p>
                  <div className="room-features">
                    <span className="badge-outline">Panoramic View</span>
                    <span className="badge-outline">King Bed</span>
                    <span className="badge-outline">75m²</span>
                  </div>
                  <button className="btn btn-primary btn-full">View Details</button>
                </div>
              </div>
              <div className="room-card">
                <div className="room-image">
                  <img src="/ROOM3.jpg" alt="Beachfront Villa" />
                </div>
                <div className="room-content">
                  <div className="room-header">
                    <h3 className="room-title">Beachfront Villa</h3>
                    <span className="badge">From $899/night</span>
                  </div>
                  <p className="room-description">
                    Private villa with direct beach access, multiple bedrooms, and exclusive amenities.
                  </p>
                  <div className="room-features">
                    <span className="badge-outline">Beach Access</span>
                    <span className="badge-outline">2 Bedrooms</span>
                    <span className="badge-outline">120m²</span>
                  </div>
                  <button className="btn btn-primary btn-full">View Details</button>
                </div>
              </div>
            </div>
            <div className="centered margin-top">
              <button className="btn btn-outline btn-lg">View All Accommodations</button>
            </div>
          </div>
        </section>

        <section id="amenities" className="amenities">
          <div className="section-content">
            <div className="two-columns">
              <div className="column">
                <h2 className="section-title">World-Class Amenities</h2>
                <p className="section-description">
                  At Azure Shores Resort, we offer a comprehensive range of amenities designed to enhance your stay and create unforgettable memories.
                </p>
                <div className="amenities-list">
                  <div className="amenity-item">
                    <CheckCircle className="amenity-icon" />
                    <div>
                      <h3 className="amenity-title">Private Beach Access</h3>
                      <p className="amenity-description">Exclusive access to our pristine private beach.</p>
                    </div>
                  </div>
                  <div className="amenity-item">
                    <CheckCircle className="amenity-icon" />
                    <div>
                      <h3 className="amenity-title">Infinity Pool</h3>
                      <p className="amenity-description">Stunning oceanfront infinity pool with bar service.</p>
                    </div>
                  </div>
                  <div className="amenity-item">
                    <CheckCircle className="amenity-icon" />
                    <div>
                      <h3 className="amenity-title">Spa & Wellness Center</h3>
                      <p className="amenity-description">Full-service spa offering massages, treatments, and yoga classes.</p>
                    </div>
                  </div>
                  <div className="amenity-item">
                    <CheckCircle className="amenity-icon" />
                    <div>
                      <h3 className="amenity-title">Fine Dining</h3>
                      <p className="amenity-description">Multiple restaurants featuring local and international cuisine.</p>
                    </div>
                  </div>
                  <div className="amenity-item">
                    <CheckCircle className="amenity-icon" />
                    <div>
                      <h3 className="amenity-title">Water Sports</h3>
                      <p className="amenity-description">Complimentary non-motorized water sports and equipment rental.</p>
                    </div>
                  </div>
                </div>
                <button className="btn btn-primary margin-top">
                  Explore All Amenities
                  <ChevronRight className="icon-right" />
                </button>
              </div>
              <div className="column">
                <div className="amenities-image">
                  <img src="/Amenitis.jpg" alt="Resort amenities" />
                  <img src="/room1.jpg" alt="Resort amenities" />
                  <img src="/room2.jpg" alt="Resort amenities" />
                  <img src="/Background.jpg" alt="Resort amenities" />
                  <img src="/Ameniti2jpg.jpg" alt="Resort amenities" />
                  <img src="/sahara.jpg" alt="Resort amenities" />
                  <img src="/Ameniti2jpg.jpg" alt="Resort amenities" />
                </div>
              </div>
            </div>
          </div>
        </section>

                  {showBooking && (
            <div className="modal-overlay">
              <div className="modal-container">
                <button className="close-button" onClick={() => setShowBooking(false)}>✖</button>
                <Booking />
              </div>
            </div>
          )}


        <section id="reviews" className="reviews">
          <div className="section-content">
            <div className="section-header">
              <h2 className="section-title">Guest Reviews</h2>
              <p className="section-description">
                Discover what our guests have to say about their experiences at Azure Shores Resort.
              </p>
            </div>
            <div className="reviews-grid">
              <div className="review-card">
                <div className="stars">
                  <Star className="star filled" />
                  <Star className="star filled" />
                  <Star className="star filled" />
                  <Star className="star filled" />
                  <Star className="star filled" />
                </div>
                <p className="review-text">
                  "Our stay at Azure Shores was absolutely magical. The staff went above and beyond to make our anniversary special. The ocean view from our suite was breathtaking!"
                </p>
                <div className="reviewer">
                  <div className="reviewer-avatar">
                    <img src="/sahara.jpg" alt="Sarah J." />
                  </div>
                  <div className="reviewer-info">
                    <p className="reviewer-name">Sarah J.</p>
                    <p className="reviewer-location">New York, USA</p>
                  </div>
                </div>
              </div>
              <div className="review-card">
                <div className="stars">
                  <Star className="star filled" />
                  <Star className="star filled" />
                  <Star className="star filled" />
                  <Star className="star filled" />
                  <Star className="star filled" />
                </div>
                <p className="review-text">
                  "The beachfront villa exceeded all our expectations. Private beach access, impeccable service, and the most comfortable beds we've ever slept in. We're already planning our return!"
                </p>
                <div className="reviewer">
                  <div className="reviewer-avatar">
                    <img src="/IMG_1719.JPG" alt="Hinny P." />
                  </div>
                  <div className="reviewer-info">
                    <p className="reviewer-name">Hinny P.</p>
                    <p className="reviewer-location">London, UK</p>
                  </div>
                </div>
              </div>
              <div className="review-card">
                <div className="stars">
                  <Star className="star filled" />
                  <Star className="star filled" />
                  <Star className="star filled" />
                  <Star className="star filled" />
                  <Star className="star" />
                </div>
                <p className="review-text">
                  "The spa treatments were divine and the infinity pool is stunning. The only reason for 4 stars is that the restaurant was a bit busy during peak hours, but the food was exceptional."
                </p>
                <div className="reviewer">
                  <div className="reviewer-avatar">
                    <img src="/images.jpg" alt="Elena R." />
                  </div>
                  <div className="reviewer-info">
                    <p className="reviewer-name">Elena R.</p>
                    <p className="reviewer-location">Milan, Italy</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="review-tabs">
              <div className="tabs">
                <button className="tab-button active" onClick={() => document.getElementById('leave-review').style.display = 'block'}>Leave a Review</button>
                <button className="tab-button" onClick={() => document.getElementById('all-reviews').style.display = 'block'}>View All Reviews</button>
              </div>
              <div id="leave-review" className="tab-content">
                <div className="review-form-container">
                  <form className="review-form">
                    <div className="form-group">
                      <label htmlFor="name">Your Name</label>
                      <input id="name" placeholder="Enter your name" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <input id="email" type="email" placeholder="Enter your email" />
                    </div>
                    <div className="form-group">
                      <label>Rating</label>
                      <div className="rating-buttons">
                        <button type="button" className="rating-btn">
                          <Star className="star-icon" />
                          <span className="sr-only">1 star</span>
                        </button>
                        <button type="button" className="rating-btn">
                          <Star className="star-icon" />
                          <span className="sr-only">2 stars</span>
                        </button>
                        <button type="button" className="rating-btn">
                          <Star className="star-icon" />
                          <span className="sr-only">3 stars</span>
                        </button>
                        <button type="button" className="rating-btn">
                          <Star className="star-icon" />
                          <span className="sr-only">4 stars</span>
                        </button>
                        <button type="button" className="rating-btn">
                          <Star className="star-icon" />
                          <span className="sr-only">5 stars</span>
                        </button>
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="review">Your Review</label>
                      <textarea id="review" placeholder="Share your experience with us" rows={4}></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit Review</button>
                  </form>
                </div>
              </div>
              <div id="all-reviews" className="tab-content" style={{ display: 'none' }}>
                <div className="centered">
                  <p className="margin-bottom">View all 245 reviews from our satisfied guests</p>
                  <button className="btn btn-primary">View All Reviews</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="section-content">
            <div className="two-columns">
              <div className="column">
                <h2 className="section-title">Contact Us</h2>
                <p className="section-description">
                  Have questions or ready to book your stay? Our team is here to assist you with any inquiries about Azure Shores Resort.
                </p>
                <div className="contact-info">
                  <div className="contact-item">
                    <MapPin className="contact-icon" />
                    <div>
                      <h3 className="contact-title">Location</h3>
                      <p className="contact-text">Shelly Beach, Likoni, Mombasa</p>
                    </div>
                  </div>
                  <div className="contact-item">
                    <Phone className="contact-icon" />
                    <div>
                      <h3 className="contact-title">Phone</h3>
                      <p className="contact-text">+254 703725635</p>
                    </div>
                  </div>
                  <div className="contact-item">
                    <MessageSquare className="contact-icon" />
                    <div>
                      <h3 className="contact-title">Email</h3>
                      <p className="contact-text">info@azureshoresresort.com</p>
                    </div>
                  </div>
                </div>
                <div className="separator"></div>
                <div>
                  <h3 className="social-title">Follow Us</h3>
                  <div className="social-links">
                    <a href="https://www.facebook.com/talentosbeachresort" className="social-link">
                      <Facebook className="social-icon" />
                      <span className="sr-only">Facebook</span>
                    </a>
                    <a href="https://www.instagram.com/talentosbeachresort?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="social-link">
                      <Instagram className="social-icon" />
                      <span className="sr-only">Instagram</span>
                    </a>
                    <a href="#" className="social-link">
                      <Twitter className="social-icon" />
                      <span className="sr-only">Twitter</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="inquiry-form-container">
                  <h3 className="form-title">Send an Inquiry</h3>
                  <form className="inquiry-form">
                    <div className="form-group">
                      <label htmlFor="inquiry-name">Your Name</label>
                      <input id="inquiry-name" placeholder="Enter your name" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="inquiry-email">Email Address</label>
                      <input id="inquiry-email" type="email" placeholder="Enter your email" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="inquiry-phone">Phone Number</label>
                      <input id="inquiry-phone" type="tel" placeholder="Enter your phone number" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="inquiry-subject">Subject</label>
                      <input id="inquiry-subject" placeholder="Booking inquiry, question, etc." />
                    </div>
                    <div className="form-group">
                      <label htmlFor="inquiry-message">Message</label>
                      <textarea id="inquiry-message" placeholder="How can we help you?" rows={4}></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary btn-full">Submit Inquiry</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-grid">
            <div className="footer-column">
              <div className="footer-logo">
                <Sunset className="logo-icon" />
                <span className="logo-text">Azure Shores Resort</span>
              </div>
              <p className="footer-description">
                Luxury beachfront accommodations for an unforgettable vacation experience.
              </p>
              <div className="footer-social">
                <a href="#" className="footer-social-link">
                  <Facebook className="social-icon" />
                  <span className="sr-only">Facebook</span>
                </a>
                <a href="#" className="footer-social-link">
                  <Instagram className="social-icon" />
                  <span className="sr-only">Instagram</span>
                </a>
                <a href="#" className="footer-social-link">
                  <Twitter className="social-icon" />
                  <span className="sr-only">Twitter</span>
                </a>
              </div>
            </div>
            <div className="footer-column">
              <h3 className="footer-title">Quick Links</h3>
              <ul className="footer-links">
                <li><a href="#" className="footer-link">Home</a></li>
                <li><a href="#rooms" className="footer-link">Accommodations</a></li>
                <li><a href="#amenities" className="footer-link">Amenities</a></li>
                <li><a href="#" className="footer-link">Dining</a></li>
                <li><a href="#" className="footer-link">Activities</a></li>
                <li><a href="#reviews" className="footer-link">Reviews</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3 className="footer-title">Contact</h3>
              <ul className="footer-contact">
                <li className="footer-contact-item">
                  <MapPin className="footer-icon" />
                  <span className="footer-contact-text">Shelly Beach, Likoni, Mombasa</span>
                </li>
                <li className="footer-contact-item">
                  <Phone className="footer-icon" />
                  <span className="footer-contact-text">+254 703725635</span>
                </li>
                <li className="footer-contact-item">
                  <MessageSquare className="footer-icon" />
                  <span className="footer-contact-text">info@azureshoresresort.com</span>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h3 className="footer-title">Newsletter</h3>
              <p className="footer-description">
                Subscribe to our newsletter for special offers and updates.
              </p>
              <form className="newsletter-form">
                <input type="email" placeholder="Enter your email" className="newsletter-input" />
                <button type="submit" className="btn btn-primary btn-full">Subscribe</button>
              </form>
            </div>
          </div>
          <div className="separator"></div>
          <div className="footer-bottom">
            <p className="copyright">
              © {new Date().getFullYear()} Azure Shores Resort. All rights reserved.
            </p>
            <div className="footer-legal">
              <a href="#" className="legal-link">Privacy Policy</a>
              <a href="#" className="legal-link">Terms of Service</a>
              <a href="#" className="legal-link">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
