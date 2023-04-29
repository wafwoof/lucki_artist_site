import { useState } from 'preact/hooks'
import { render } from 'preact'
import GifComponent from './main_video'
import NavBar from './navbar'
import Releases from './releases'
import Footer from './footer'
import Events from './events'

export function App() {
  return (
    <>
      <NavBar />
      <GifComponent />
      <div class="iframe-container" style="text-align: center;">
        <iframe style="border: 0; min-width: 50%; height: 350px" src="https://bandcamp.com/EmbeddedPlayer/album=1110522239/size=large/bgcol=333333/linkcol=ffffff/tracklist=true/artwork=small/transparent=true/" seamless><a href="https://lucki.bandcamp.com/album/flawless-like-me-explicit">FLAWLESS LIKE ME [Explicit] by Lucki</a></iframe>
      </div>
      <Events />
      <Releases />
      <Footer />
    </>
  )
}

render(App(), document.getElementById('app'))