//
//  _   _            _
// | | | |          | |
// | | | | ___ _ __ | |_ ___
// | | | |/ _ \ '_ \| __/ _ \
// \ \_/ /  __/ | | | || (_) |
//  \___/ \___|_| |_|\__\___/

const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: "Desmond",
  imageBackground: true,
  openInNewTab: true,

  // Greetings
  greetingMorning: "Good morning,",
  greetingAfternoon: "Hello,",
  greetingEvening: "Good night,",
  greetingNight: "You should go to sleep,",

  // Weather
  // Use openweathermap.org
  weatherKey: "8088996cb990beca4e385c7c4790f5d7",
  weatherIcons: "Nord", // 'Nord', 'Dark', 'White'
  weatherUnit: "C",
  // Use https://www.latlong.net/
  trackLocation: true,
  weatherLatitude: 13.128673,
  weatherLongitude: 80.229969,

  // ┌─┐┌─┐┬─┐┌┬┐┌─┐
  // │  ├─┤├┬┘ ││└─┐
  // └─┘┴ ┴┴└──┴┘└─┘

  // Links
  cards: [
    {
      id: "1",
      name: "Github",
      icon: "github",
      link: "https://github.com/",
    },
    {
      id: "3",
      name: "Mail",
      icon: "mail",
      link: "https://mail.google.com/",
    },
    {
      id: "6",
      name: "Todoist",
      icon: "twitch",
      link: "https://twitch.tv/",
    },
    {
      id: "4",
      name: "LinkedIn",
      icon: "linkedin",
      link: "https://www.linkedin.com",
    },
    {
      id: "5",
      name: "Twitter",
      icon: "twitter",
      link: "https://twitter.com",
    },
    {
      id: "2",
      name: "Youtube",
      icon: "youtube",
      link: "https://youtube.com/",
    },
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  //Icons
  firstListIcon: "book",
  secondListIcon: "tool",

  // Links
  lists: {
    firstList: [
      {
        name: "StackOverFlow",
        link: "https://stackoverflow.com/",
      },
      {
        name: "SSN LMS",
        link: "http://lms.ssn.edu.in/",
      },
      {
        name: "Overleaf",
        link: "https://www.overleaf.com/",
      },
      {
        name: "EFF",
        link: "https://www.eff.org/",
      },
    ],
    secondList: [
      {
        name: "Telegram",
        link: "https://webk.telegram.org",
      },
      {
        name: "Github",
        link: "https://github.com/",
      },
      {
        name: "Hetzner",
        link: "https://hetzner.com/",
      },
      {
        name: "Protonmail",
        link: "https://mail.protonmail.com/",
      },
    ],
  },
};
