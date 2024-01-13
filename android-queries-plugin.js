const { withAndroidManifest } = require("@expo/config-plugins");

const withAndroidQueries = (config) => {
  return withAndroidManifest(config, (config) => {
    config.modResults.manifest.queries = [
      {
        intent: [
          {
            action: [{ $: { "android:name": "android.intent.action.SENDTO" } }],
            data: [{ $: { "android:scheme": "mailto" } }],
          },
          {
            action: [{ $: { "android:name": "android.intent.action.DIAL" } }],
            data: [{ $: { "android:scheme": "tel" } }],
          },
          {
            action: [{ $: { "android:name": "android.intent.action.VIEW" } }],
            category: [
              { $: { "android:name": "android.intent.category.BROWSABLE" } },
            ],
            data: [{ $: { "android:scheme": "https" } }],
          },
        ],
      },
    ];

    return config;
  });
};

module.exports = withAndroidQueries;
