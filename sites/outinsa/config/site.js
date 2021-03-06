const ads = require('./ads');

module.exports = {
  ads,
  company: 'Euclid Media Group',
  logos: {
    navbar: {
      src: 'https://base.imgix.net/files/base/euclid/osa/logo.png?h=60',
      srcset: [
        'https://base.imgix.net/files/base/euclid/osa/logo.png?h=120 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/euclid/osa/logo.png?h=60',
      srcset: [
        'https://base.imgix.net/files/base/euclid/osa/logo.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/OutinSA/' },
    { provider: 'twitter', href: 'https://twitter.com/OutInSA' },
    { provider: 'instagram', href: 'http://instagram.com/outinsa' },
  ],
  navigation: {
    primary: {
      items: [
        { href: '/news', label: 'News' },
        { href: '/food', label: 'Food' },
        { href: '/arts-culture', label: 'Arts & Culture' },
        { href: '/health-fitness', label: 'Health & Fitness' },
        { href: '/nightlife', label: 'Nightlife' },
        { href: '/columns', label: 'Columns' },
        { href: '/living', label: 'Living' },
      ],
    },
    secondary: {
      items: [
        { href: '/calendar', label: 'Calendar' },
        { href: '/slideshows', label: 'Slideshows' },
        { href: '/jobs', label: 'Job Listings' },
        { href: '/page/about-us', label: 'About Us' },
        { href: '/contact-us', label: 'Contact Us' },
        { href: '/subscribe', label: 'Subscribe' },
      ],
    },
    footer: {
      items: [
        { href: '/contact-us', label: 'Contact Us' },
        { href: '/page/advertise', label: 'Advertise' },
        { href: '/jobs', label: 'Work Here' },
        { href: '/page/about-us', label: 'About Us' },
        { href: '/page/privacy-policy', label: 'Privacy Policy' },
        { href: '/page/terms-use', label: 'Terms of Use' },
      ],
    },
    menu: {
      topics: {
        label: 'Topics',
        items: [
          { href: '/news', label: 'News' },
          { href: '/food', label: 'Food' },
          { href: '/arts-culture', label: 'Arts & Culture' },
          { href: '/health-fitness', label: 'Health & Fitness' },
          { href: '/nightlife', label: 'Nightlife' },
          { href: '/columns', label: 'Columns' },
          { href: '/living', label: 'Living' },
        ],
      },
      resources: {
        label: 'Resources',
        items: [
          { href: '/magazine', label: 'Magazine' },
          { href: '/videos', label: 'Videos' },
          { href: '/white-papers', label: 'White Papers' },
          { href: '/events', label: 'Events' },
        ],
      },
      userTools: {
        label: 'User Tools',
        items: [
          { href: '/subscribe', label: 'Subscribe' },
          { href: '/page/advertise', label: 'Advertise' },
          { href: '/page/about-us', label: 'About Us' },
          { href: '/contact-us', label: 'Contact Us' },
          { href: '/page/privacy-policy', label: 'Privacy Policy' },
        ],
      },
    },
  },
  gtmContainer: '',
  search: {
    engine: 'google',
    apiKey: '003355913687346718228:mb2grfhfx08',
  },
  // subscriptions: {
  //   newsletters: 'https://www.metrotimes.com/detroit/NewsletterSignup/Page',
  // },
  // magazines: {
  //   description: 'Detroit\'s Weekly Alternative',
  // },
  contactUs: {
    branding: {
      bgColor: '#89ba44',
      logo: 'https://base.imgix.net/files/base/euclid/osa/logo.png?h=60',
    },
  },
};
