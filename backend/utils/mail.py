from flask import current_app, render_template
from flask_mail import Message


def send_mail(subject, recipients, template, sender=None, **ctx):
    if not isinstance(recipients, (tuple, list)):
        recipients = [recipients]

    msg = Message(subject=subject, recipients=recipients, sender=sender)
    msg.html = render_template(template, **ctx)

    msg.send('')
