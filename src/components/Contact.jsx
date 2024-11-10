import EmailSender from "../utility/EmailJs";
import "./Contact.css"

function Contact () {
    return (
        <div id="contact">
            <section className="contact">
                <div className="title">
                    <h1>Contact</h1>
                </div>
                <div className="contact-box">
                    <EmailSender />
                </div>
                <div className="location-box">
                <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2849.258286581864!2d26.101965075059322!3d44.42786380198674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDTCsDI1JzQwLjMiTiAyNsKwMDYnMTYuMyJF!5e0!3m2!1sro!2sro!4v1730385043451!5m2!1sro!2sro" width="600" height="450" allowFullScreen loading="fast" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </section>
        </div>
    )
}

export default Contact;