import app from 'flarum/admin/app';

app.initializers.add('justoverclock/theaudiodb-api', () => {
  app.extensionData
    .for('justoverclock-theaudiodb-api')
    .registerSetting({
      setting: 'justoverclock-theaudiodb-api.langCode',
      name: 'justoverclock-theaudiodb-api.langCode',
      type: 'text',
      label: app.translator.trans('justoverclock-theaudiodb-api.admin.langcode'),
      help: app.translator.trans('justoverclock-theaudiodb-api.admin.langcode-help'),
    })
    .registerSetting({
      setting: 'justoverclock-theaudiodb-api.apiKey',
      name: 'justoverclock-theaudiodb-api.apiKey',
      type: 'text',
      label: app.translator.trans('justoverclock-theaudiodb-api.admin.apiKey'),
      help: app.translator.trans('justoverclock-theaudiodb-api.admin.apiKeyHelp'),
    });
});
