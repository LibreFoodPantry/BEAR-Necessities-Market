from flask import current_app, render_template
from flask_mail import Message
from flask_sendgrid import SendGrid


def send_email(from_email='someone@yourdomain.com',to_email='test@example.com',
    subject='Subject', text = 'Body'):
    #if not isinstance(to_email, (tuple, list)):
        #to_email = [to_email]

    #msg = Message(subject=subject, recipients=to_email, sender=from_email)
    #msg.html = render_template(template, **ctx)

    #msg.send('')



#subject: str, recipients: list, template, sender=None, **ctx
