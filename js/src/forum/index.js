/*
  __ _                              _ _
 / _| |                            (_) |
| |_| | __ _ _ __ _   _ _ __ ___    _| |_
|  _| |/ _` | '__| | | | '_ ` _ \  | | __|
| | | | (_| | |  | |_| | | | | | |_| | |_
|_| |_|\__,_|_|   \__,_|_| |_| |_(_)_|\__|
     https://flarum.it - Marco Colia
 */

import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import DiscussionHero from 'flarum/forum/components/DiscussionHero';

app.initializers.add('justoverclock/theaudiodb-api', () => {
  extend(DiscussionHero.prototype, 'oncreate', function () {
    const artistTitle = this.attrs.discussion.title().split(/\s+/).join('%20');
    const languageCode = app.forum.attribute('justoverclock-theaudiodb-api.langCode') || 'EN';
    const isLoggedIn = app.session.user;

    // gestiamo gli errori nella risposta
    function handleErrors(response) {
      if (!response.ok) {
        console.clear()
        throw Error(response.statusText);
      }
      return response;
    }

    // per evitare troppe richieste all'api, effettuiamo fetch solo per chi è registrato
    if (isLoggedIn) {
      const ArtistApi = fetch('https://theaudiodb.com/api/v1/json/1/search.php?s=' + artistTitle)
        .then(handleErrors)
        .then((response) => response.json())
        .then((data) => {
          this.audiodb = data;
          m.redraw();
          const arrayElem = 'strBiography' + languageCode;
          if (data.artists[0][arrayElem] === null) {
            data.artists[0][arrayElem] =
              'Oops! Description is not available in your language unfortunately...You can contribute to TheAudioDB.com by adding information about this artists in your language.';
          }
        })
        .catch((error) => console.log('This Game title does not exist ;) =>', artistTitle));
    }
  });
  extend(DiscussionHero.prototype, 'items', function (items) {
    const languageCode = app.forum.attribute('justoverclock-theaudiodb-api.langCode') || 'EN';
    const arrayElem = 'strBiography' + languageCode;
    console.log(this.audiodb)
    // non mostriamo l'html se non c'è nulla da mostrare
    if (this.audiodb === undefined) {
      return;
    } else {
      items.add(
        'artistDetailMusic',
        <div class="artistWrapper">
          <div id="containerArtist">
            <div id="contentArtist">
              <p class="artistDesc" id="descArtist">{this.audiodb.artists[0][arrayElem].substring(0,400) + '...'}</p>
              <div class="itemdescrip">
                <div class="genreArtist" id="genreArtist">{app.translator.trans('justoverclock-theaudiodb-api.forum.genres')}: {this.audiodb.artists[0].strGenre}</div>
                <div class="yearBorn" id="yearBorn">{app.translator.trans('justoverclock-theaudiodb-api.forum.intFormedYear')}: {this.audiodb.artists[0].intFormedYear}</div>
                <div class="strcountry" id="strcountry">{app.translator.trans('justoverclock-theaudiodb-api.forum.countryart')}: {this.audiodb.artists[0].strCountry}</div>
              </div>
            </div>
          </div>
          <div id="sidebarImgArtist">
            <img className="imgArtist" id="imgArtists" src={this.audiodb.artists[0].strArtistThumb}/>
          </div>
        </div>
      );
    }
  });
});
