import './css/main_video.css';
import main_video from './media/super_urus_lucki_1.gif';

const GifComponent = () => {
  return (
    <>
        <div class="overlay-container">
            <div class="overlay-content">
                <h1>Super Urus</h1>
                <a href="https://www.youtube.com/watch?v=fIrSkilUvHw">
                    <h2>Watch Now</h2>
                </a>
            </div>
        
            <div class="gif-container">
                <img src={main_video} alt="GIF" />
            </div>
        </div>
    </>
  );
};

export default GifComponent;