const ads = require('./ads');

module.exports = {
  ads,
  logos: {
    navbar: {
      src: 'https://base.imgix.net/files/base/pennwell/su/logo.png?h=30',
      srcset: [
        'https://base.imgix.net/files/base/pennwell/su/logo.png?h=60 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/pennwell/su/logo.png?h=50',
      srcset: [
        'https://base.imgix.net/files/base/pennwell/su/logo.png?h=100 2x',
      ],
    },
  },
  primaryNavItems: [],
  secondaryNavItems: [
    { href: '/subscribe', label: 'Subscribe' },
    { href: '/magazine', label: 'Magazine' },
    { href: '/videos', label: 'Videos' },
    { href: '/page/about-us', label: 'About Us' },
  ],
  menuItems: {
    resources: [
      { href: '/magazine', label: 'Magazine' },
      { href: '/videos', label: 'Videos' },
      { href: '/white-papers', label: 'Whitepapers' },
      { href: '/webcasts', label: 'Webcasts' },
    ],
    userTools: [
      { href: '/subscribe', label: 'Subscribe' },
      { href: '/advertise', label: 'Advertise' },
      { href: '/page/about-us', label: 'About Us' },
      { href: '/contact-us', label: 'Contact Us' },
      { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy Policy' },
      { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms & Conditions' },
    ],
  },
  gtmContainer: 'GTM-56MD64K',
  search: {
    engine: 'google',
    apiKey: '003355913687346718228:ghlhotakfl0',
  },
  subscriptions: {
    publications: {
      '/subscribe/print/leds': 'https://eforms.kmpsgroup.com/PaidForms/paidform.aspx?formid=94&promoCode-NW2019PD=&utm_source=mag_sub&utm_medium=website&utm_campaign=NW2019PD&utm_content=2019-02-25',
      '/subscribe/print/lfw': 'https://formdesigner.ecn5.com/GetForm?tokenuid=28d2fe32-119b-468e-a58a-a7b564581eaf&promoCode=NW2019&utm_source=mag_sub&utm_medium=website&utm_campaign=NW2019&utm_content=2019-02-25',
      '/subscribe/print/bow': 'https://formdesigner.ecn5.com/GetForm?tokenuid=12d55674-b05c-4726-864f-83b3402778a1&promoCode=WENL2019&utm_source=enl_sub&utm_medium=website&utm_campaign=WENL2019&utm_content=2019-02-25',
      '/subscribe/print/ils': 'http://eforms.kmpsgroup.com/jointforms/Forms/Subscription.aspx?pubcode=ILSD&promoCode=WS702',
    },
  },
  magazines: {
    description: 'Strategies Unlimited offers comprehensive coverage of high-brightness LEDs and LED lighting and laser market sectors.',
  },
};
