import AnimatedSection from '../components/AnimatedSection';

const Contact = () => {
  return (
    <AnimatedSection id="contact">
      <h2>Contact</h2>
      <p>
        I'm open to software engineering internships and graduate opportunities. Feel free
        to reach out!
      </p>
      <ul className="contact-list">
        <li>
          Email:{' '}
          <a href="mailto:abdmuqeeta@gmail.com">abdmuqeeta@gmail.com</a>
        </li>
        <li>
          LinkedIn:{' '}
          <a
            href="https://www.linkedin.com/in/abdmuqeet"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/abdmuqeet
          </a>
        </li>
        <li>
          Phone: <span>+1 (657) 217-9622</span>
        </li>
      </ul>
    </AnimatedSection>
  );
};

export default Contact;

