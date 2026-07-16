import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Feedback.css';
import { Send } from 'lucide-react';

function Feedback() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
        rating: 5
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
        // Here you would typically send the feedback to your backend
        console.log('Feedback submitted:', formData);
        setSubmitted(true);

        // Reset form after 3 seconds and redirect
        setTimeout(() => {
            setSubmitted(false);
            navigate('/');
        }, 3000);
    };

    return (
        <div className="feedback-page">
            <div className="feedback-container">
                <div className="feedback-header">
                    <h1>We'd Love Your Feedback</h1>
                    <p>Help us improve Campus Recycle by sharing your thoughts and suggestions</p>
                </div>

                {submitted ? (
                    <div className="feedback-success">
                        <div className="success-icon">✓</div>
                        <h2>Thank You!</h2>
                        <p>Your feedback has been submitted successfully. We appreciate your input!</p>
                    </div>
                ) : (
                    <form className="feedback-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name *</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="Enter your name"
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

                        <div className="form-group">
                            <label htmlFor="subject">Subject *</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                placeholder="What's this about?"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="rating">How would you rate your experience? *</label>
                            <div className="rating-group">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <label key={star} className="rating-star">
                                        <input
                                            type="radio"
                                            name="rating"
                                            value={star}
                                            checked={formData.rating === star}
                                            onChange={(e) => setFormData({ ...formData, rating: parseInt(e.target.value) })}
                                        />
                                        <span className={formData.rating >= star ? 'star-filled' : 'star-empty'}>★</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Your Feedback *</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={6}
                                placeholder="Tell us what you think..."
                            />
                        </div>

                        <div className="form-actions">
                            <button type="button" className="btn-secondary" onClick={() => navigate('/')}>
                                Cancel
                            </button>
                            <button type="submit" className="btn-primary">
                                <Send size={18} />
                                Submit Feedback
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
}

export default Feedback;
