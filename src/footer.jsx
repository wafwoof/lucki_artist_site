import './css/footer.css';
import instagram_logo from './media/icon-instagram.svg';
import youtube_logo from './media/icon-youtube.svg';
import github_logo from './media/icon-github.svg';
import bandcamp_logo from './media/icon-bandcamp.svg';

const Footer = () => {
  return (
    <div class="footer">
        <div class="footer-icon-container">
            <a href="https://www.instagram.com/deadboylife/?hl=en">
                <img src={instagram_logo} alt="Instagram" />
            </a>
            <a href="https://www.youtube.com/channel/UCnWiTG19_2QzYuxW5M94d0A">
                <img src={youtube_logo} alt="YouTube" />
            </a>
            <a href="https://github.com/wafwoof">
                <img src={github_logo} alt="GitHub" />
            </a>
            <a href="https://lucki.bandcamp.com/album/flawless-like-me-explicit">
                <img src={bandcamp_logo} alt="Bandcamp" />
            </a>
        </div>
    </div>
  );
};

export default Footer;