'use strict';

module.exports = ({ env }) => ({
  // i18n plugin voor meertalige content
  i18n: {
    enabled: true,
    config: {
      defaultLocale: 'nl',
      locales: ['nl', 'en'],
    },
  },
});
