exports.otptemplate = (otp) => {
    return `<!DOCTYPE html>
    <html>
        <head>
        <meta charset="UTF-8">
		<title>OTP Verification Email</title>
        <style>
            body {
                font-family: 'Arial', sans-serif;
                background: linear-gradient(135deg, #10b981 0%, #059669 100%);
                margin: 0;
                padding: 40px 20px;
            }
            .container {
                max-width: 600px;
                margin: 0 auto;
                background: white;
                border-radius: 16px;
                box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
                overflow: hidden;
            }
            .header {
                background: linear-gradient(135deg, #10b981 0%, #059669 100%);
                color: white;
                padding: 40px 30px;
                text-align: center;
            }
            .header h1 {
                margin: 0;
                font-size: 28px;
                font-weight: 600;
            }
            .content {
                padding: 40px 30px;
                text-align: center;
            }
            .message {
                color: #555;
                font-size: 16px;
                line-height: 1.6;
                margin-bottom: 30px;
            }
            .otp-box {
                background: linear-gradient(135deg, #10b981 0%, #059669 100%);
                color: white;
                font-size: 36px;
                font-weight: bold;
                letter-spacing: 8px;
                padding: 20px 40px;
                border-radius: 12px;
                display: inline-block;
                margin: 20px 0;
                box-shadow: 0 8px 20px rgba(16, 185, 129, 0.4);
            }
            .note {
                color: #888;
                font-size: 14px;
                margin-top: 30px;
                padding-top: 20px;
                border-top: 1px solid #eee;
            }
            .footer {
                background: #f8f9fa;
                padding: 20px 30px;
                text-align: center;
                color: #888;
                font-size: 12px;
            }
        </style>
        </head>
        <body>
            <div class='container'>
                <div class='header'>
                    <h1>🔐 Campus Recycle</h1>
                </div>
                <div class='content'>
                    <div class='message'>
                        <p>Welcome to Campus Recycle! To complete your registration, please verify your email address.</p>
                        <p><strong>Your OTP verification code is:</strong></p>
                    </div>
                    <div class='otp-box'>${otp}</div>
                    <div class='note'>
                        <p>⏱️ This code will expire in <strong>5 minutes</strong></p>
                        <p>If you didn't request this code, please ignore this email.</p>
                    </div>
                </div>
                <div class='footer'>
                    <p>© 2026 Campus Recycle. All rights reserved.</p>
                </div>
            </div>
        </body>
    </html>
    `
}