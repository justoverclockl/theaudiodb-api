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
  extend(DiscussionHero.prototype, 'oncreate', async function () {
    const artistTitle = this.attrs.discussion.title().split(/\s+/).join('%20');
    const apiKey = app.forum.attribute('justoverclock-theaudiodb-api.admin.apiKey')

    const languageCode = app.forum.attribute('justoverclock-theaudiodb-api.langCode') || 'EN';
    const isLoggedIn = app.session.user;

    // per evitare troppe richieste all'api, effettuiamo fetch solo per chi è registrato
    if (isLoggedIn && apiKey) {
      const ArtistApi = await fetch(`https://www.theaudiodb.com/api/v1/json/${apiKey}/search.php?s=${artistTitle}`)
        .then(async (response) => await response.json())
        .then((data) => {
          this.audiodb = data;
          console.log(this.audiodb)
          m.redraw();
          const arrayElem = 'strBiography' + languageCode;
          if (data.artists[0][arrayElem] === null) {
            data.artists[0][arrayElem] =
              'Oops! Description is not available in your language unfortunately. You can contribute to TheAudioDB.com by adding information about this artists in your language.';
          }
        })
        .catch((error) => console.log('This Artist/band does not exist =>', artistTitle));


    if (this.audiodb.artists === null && !apiKey) {
      const el = document.querySelector('li.item-artistDetailMusic');
      el.style.display = 'none';
    } else {
      const arrayElem = 'strBiography' + languageCode;
      const Genre = (document.getElementById('genreArtist').innerText =
        app.translator.trans('justoverclock-theaudiodb-api.forum.genres') + ': ' + this.audiodb.artists[0].strGenre);
      const DescArt = (document.getElementById('descArtist').innerText = this.audiodb.artists[0][arrayElem].substring(0, 400) + '...');
      const yearB = (document.getElementById('yearBorn').innerText =
        app.translator.trans('justoverclock-theaudiodb-api.forum.intFormedYear') + ': ' + this.audiodb.artists[0].intFormedYear);
      const Country = (document.getElementById('strcountry').innerText =
        app.translator.trans('justoverclock-theaudiodb-api.forum.countryart') + ': ' + this.audiodb.artists[0].strCountry);
      const urlImg = this.audiodb.artists[0].strArtistThumb;
      $('#imgArtists').attr('src', urlImg);
    }
    }
  });
  extend(DiscussionHero.prototype, 'items', function (items) {
    const isLoggedIn = app.session.user;
    const apiKey = app.forum.attribute('justoverclock-theaudiodb-api.admin.apiKey')
    if (isLoggedIn && apiKey) {
      console.log(apiKey)
      items.add(
        'artistDetailMusic',
        <div class="artistWrapper">
          <div id="containerArtist">
            <div id="contentArtist">
              <p class="artistDesc" id="descArtist"/>
              <div class="itemdescrip">
                <div class="genreArtist" id="genreArtist"/>
                <div class="yearBorn" id="yearBorn"/>
                <div class="strcountry" id="strcountry"/>
              </div>
            </div>
          </div>
          <div id="sidebarImgArtist">
            <img className="imgArtist" id="imgArtists" src=""/>
          </div>
        </div>
      );
    }
  });
});
