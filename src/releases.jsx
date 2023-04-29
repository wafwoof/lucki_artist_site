import './css/releases.css';
import flawless_like_me_cover from './media/flawless_like_me_cover.jpg';
import wake_up_lucki_cover from './media/wake_up_lucki_cover.webp';
import almost_there_cover from './media/almost_there_cover.jpg';
import days_b4_iii_cover from './media/days_b4_iii_cover.webp';

const ClickARelease = (release) => {
  return () => {
    console.log(release);
    // wait 1 second before redirecting to bandcamp
    setTimeout(() => {
        // Doesn't do anything with release prop yet because Lucki only has one album on bandcamp...
        window.location.href = `https://en.wikipedia.org/wiki/Lucki#Discography`;
    }, 200);
  };

};

const Releases = () => {
  return (
    <>
        <div class="releases-container">

            <h1>Releases</h1>

            <div class="release" onClick={ClickARelease("flawless_like_me")}>
                <div class="release-image">
                    <img src={flawless_like_me_cover} alt="Flawless Like Me" />
                </div>
                <div class="release-info">
                    <h2>FLAWLESS LIKE ME</h2>
                    <h3>2022 • Album</h3>
                </div>
            </div>

            <div class="release" onClick={ClickARelease("wake_up_lucki")}>
                <div class="release-image">
                    <img src={wake_up_lucki_cover} alt="Wake Up Lucki" />
                </div>
                <div class="release-info">
                    <h2>WAKE UP LUCKI</h2>
                    <h3>2021 • Album</h3>
                </div>
            </div>

            <div class="release" onClick={ClickARelease("almost_there")}>
                <div class="release-image">
                    <img src={almost_there_cover} alt="Almost There" />
                </div>
                <div class="release-info">
                    <h2>Almost There</h2>
                    <h3>2020 • Album</h3>
                </div>
            </div>

            <div class="release" onClick={ClickARelease("days_b4_iii")}>
                <div class="release-image">
                    <img src={days_b4_iii_cover} alt="Days B4 III" />
                </div>
                <div class="release-info">
                    <h2>Days B4 III</h2>
                    <h3>2019 • Album</h3>
                </div>
            </div>

        </div>
    </>
  );
};

export default Releases;