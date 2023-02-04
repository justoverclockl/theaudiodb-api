# TheAudioDB API

![License](https://img.shields.io/badge/license-0BSD-blue.svg) [![Latest Stable Version](https://img.shields.io/packagist/v/justoverclock/theaudiodb-api.svg)](https://packagist.org/packages/justoverclock/theaudiodb-api) [![Total Downloads](https://img.shields.io/packagist/dt/justoverclock/theaudiodb-api.svg)](https://packagist.org/packages/justoverclock/theaudiodb-api)

A [Flarum](http://flarum.org) extension. TheAudioDB API integration for Flarum. This extension will show artist/band details in the discussion hero, if the title of your discussions match with the name of an artists/band that exist on TheAudioDb.com, data will be retrieved automatically.

## Get your api KEY
Get your api key: ### https://www.theaudiodb.com/api_apply.php

## Multi-language
This extension supports multiple languages (available on TheAudioDb.com), but remember that some artists/bands may not have details in your language. You can add missed translations directly into https://www.theaudiodb.com/ website 😎

![aaafggg](https://user-images.githubusercontent.com/79002016/140955467-007cb9a3-b268-4559-a657-75bc5bf44e6f.png)
![sss](https://user-images.githubusercontent.com/79002016/140955279-927704cf-98cc-496f-b340-f28717aa41e6.png)



## Installation

Install with composer:

```sh
composer require justoverclock/theaudiodb-api:"*"
```

## Updating

```sh
composer update justoverclock/theaudiodb-api:"*"
php flarum cache:clear
```

