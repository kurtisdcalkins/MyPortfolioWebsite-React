import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export const ContactLinks = () => {
  return (
    <div className="contact-info">
      <div className="contact-details">
        <a href="mailto: kurtiscalkins@yahoo.com">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>
      <div class="contact-details">
        <a href="https://www.linkedin.com/in/kurtis-calkins/" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
      <div class="contact-details">
        <a href="https://github.com/kurtisdcalkins" target="_blank">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </div>
  );
};
