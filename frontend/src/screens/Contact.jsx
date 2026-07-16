import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Contact.css';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

function Contact() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Contact form submitted:', formData);
        setSubmitted(true);

        setTimeout(() => {
            setSubmitted(false);
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
        }, 3000);
    };

    return (
        <div className="contact-page">
            <div className="contact-hero">
                <h1>Get In Touch</h1>
                <p>Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
            </div>

            <div className="contact-content">
                <div className="contact-info">
                    <h2>Contact Information</h2>
                    <p className="contact-description">
                        We're here to help and answer any question you might have. We look forward to hearing from you!
                    </p>

                    <div className="contact-details">
                        <div className="contact-item">
                            <div className="contact-icon">
                                <Mail />
                            </div>
                            <div className="contact-text">
                                <h3>Email</h3>
                                <p>nitaecell@gmail.com</p>
                            </div>
                        </div>



                        <div className="contact-item">
                            <div className="contact-icon">
                                <MapPin />
                            </div>
                            <div className="contact-text">
                                <h3>Location</h3>
                                <p>NIT AGARTALA, TRIPURA, INDIA</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contact-form-container">
                    {submitted ? (
                        <div className="contact-success">
                            <div className="success-icon">✓</div>
                            <h2>Message Sent!</h2>
                            <p>Thank you for contacting us. We'll get back to you shortly.</p>
                        </div>
                    ) : (
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <h2>Send us a Message</h2>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="name">Name *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="Your name"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="your.email@example.com"
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="subject">Subject *</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    placeholder="What's this regarding?"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={6}
                                    placeholder="Your message..."
                                />
                            </div>

                            <button type="submit" className="submit-btn">
                                <Send size={18} />
                                Send Message
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Contact;
