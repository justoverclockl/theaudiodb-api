import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import DiscussionHero from 'flarum/forum/components/DiscussionHero';
import LinkButton from 'flarum/components/LinkButton';


app.initializers.add('justoverclock/theaudiodb-api', () => {
  extend(DiscussionHero.prototype, 'oncreate', function () {
    const isLoggedIn = app.session.user;
    const artistTitle = this.attrs.discussion.title().split(/\s+/).join('-');

    // gestiamo gli errori nella risposta
    function handleErrors(response) {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response;
    }

    // per evitare troppe richieste all'api, effettuiamo fetch solo per chi è registrato
    if (isLoggedIn) {
      const GameApi = fetch('https://theaudiodb.com/api/v1/json/1/search.php?s=' + artistTitle)
        .then(handleErrors)
        .then((response) => response.json())
        .then((data) => {
          this.artist = data;
          console.log(this.artist.artists[0])
          m.redraw();
        })
        .catch((error) => console.log('This Artist does not exist ;) =>', artistTitle));
    }
  extend(DiscussionHero.prototype, 'items', function (items) {
    const imgArtist = this.artist.artists[0].strArtistThumb;
    // non mostriamo l'html se non c'è nulla da mostrare
    if (this.artist === undefined) {
      return;
    } else {
      items.remove('title');
      items.add(
        'artistDetailMusic',
        <div class="artistWrapper">
        <div id="containerArtist">
          <div id="contentArtist">
            <p class="artistDesc">{this.artist.artists[0].strBiographyIT.substring(0,400) + '...'}</p>
          </div>
        </div>
      <div id="sidebarImgArtist">
        <img className="imgArtist" src={imgArtist}/>
      </div>
        </div>
      );
    }
  })
  })
});
