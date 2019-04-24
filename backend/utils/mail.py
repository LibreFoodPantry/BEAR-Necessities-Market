from flask import current_app, render_template
from flask_mail import Message
from flask_sendgrid import SendGrid


# def send_email(default_email, to_email, subject_line, text_body):
#     # Call Sendgrid's send_email method to send an email
#     mail.send_email(
#         from_email = default_email,
#         to_email = to_email,
#         subject = subject_line
#         text = text_body,
#     )