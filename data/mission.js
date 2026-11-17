/* ============================================================
   MISSION CONFIG  —  edit this file to update the facts.
   Anything marked TODO is a guess or a blank you should fill in.
   ============================================================ */

window.MISSION = {

  missionary: {
    firstName: "Eloise",
    lastName: "Malley",
    title: "Sister",
    get fullName() { return this.title + " " + this.firstName + " " + this.lastName; },
    email: "eloise.malley@missionary.org",
    portrait: "photos/eloise.jpg",           // her mission photo
    tagline: "From Old Town San Diego to the Golden Gate, sharing the good news of Jesus Christ.",
    homeWard: "Naperville 1st Ward",
    farewellDate: ""                         // TODO: optional, YYYY-MM-DD
  },

  mission: {
    name: "California San Diego Mormon Battalion Historic Site and California Oakland/San Francisco Mission",
    shortName: "Oakland/San Francisco",
    country: "US",
    language: "English",
    languageNative: "English",
    presidentName: "President Tom Holmoe and Sister Lori Holmoe",
    // The About page's "mission president" section. bio is in our own words from
    // the source; the section stays hidden while names or bio are empty.
    // These are the leaders of the California Oakland/San Francisco Mission, her
    // teaching mission. Sisters called to a historic site serve there first under
    // the historic site's own president, then transfer to the teaching mission.
    president: {
      names: "President Tom Holmoe and Sister Lori Holmoe",   // no middle initials given in the sources found
      since: "2026-07-01",
      photo: "",                             // optional: a photo of them, e.g. one she sends
      bio: [
        "President and Sister Holmoe began leading the California Oakland/San Francisco Mission in July 2026, taking over from President James D. and Sister Martha A. Lash. They came from the Grandview 6th Ward in Provo, Utah, and they have four children.",
        "Both of them are Californians by birth: President Holmoe was born in Glendale and Sister Holmoe in San Diego. He has served as a bishopric counselor, a counselor in a stake presidency and on a high council. She has served on a Relief Society service committee, as a counselor in a stake Relief Society presidency and as a ward Young Women president."
      ],
      source: { label: "Church News", url: "https://www.thechurchnews.com/leaders/2026/01/30/new-mission-presidents-companions-2026-california-cameroon/" }
    },
    officeAddress: [                         // TODO: confirm the mailing address with the mission office
      "California San Diego Mormon Battalion Historic Site and California Oakland/San Francisco Mission",
      "US"
    ],
    mapCenter: [37.8044, -122.2712],         // Oakland, California (mission headquarters city)
    mapZoom: 7,
    // Rough box around the San Francisco Bay Area. Decorative only.
    // (Her first months are at the Mormon Battalion Historic Site in San Diego, well outside this box.)
    boundsHint: [[38.4, -123.1], [37.1, -121.5]]
  },

  dates: {
    mtcStart: "2026-07-01",                  // entered the Provo MTC
    manilaMtcStart: "",                      // no second MTC for this mission
    fieldStart: "",                          // TODO: not known yet
    release: "2027-12-15",                   // expected release / homecoming
    transferLength: 6                        // weeks per transfer
  },

  links: {
    // The shared Google Photos album
    googlePhotos: "https://photos.app.goo.gl/UwjqVNY3tZJqQmem7"
  },

  /* ------------------------------------------------------------
     GOOGLE MAPS
     Paste your Maps JavaScript API key below and the map page turns
     on. See "Setting up the map" in README.md for how to get one.
     Until a key is here, the page shows a friendly notice instead of
     a broken map. The key is visible in the page source — that is
     normal for Google Maps — so restrict it by website in the Google
     Cloud console once the site is deployed.
     ------------------------------------------------------------ */
  maps: {
    apiKey: "AIzaSyAFgOVCbW4-VKrasthQZ4g2PvMfPcQm0J4",           // <-- paste the key between the quotes
    defaultZoom: 17,      // how close the map starts. 15 = neighbourhood, 18 = rooftops
    mapType: "hybrid"     // "hybrid" = satellite with street names, "satellite" = imagery only
  },

  /* ------------------------------------------------------------
     AREAS — add a new entry every time she gets transferred.
     Set `current: true` on exactly one, and give the previous one
     an `end` date. Look up lat/lng by searching the town on
     Google Maps and copying the two numbers from the URL.
     ------------------------------------------------------------ */
  areas: [
    {
      name: "Provo MTC",
      region: "Provo, Utah, USA",
      type: "mtc",
      start: "2026-07-01",
      end: "2026-08-03",
      lat: 40.259166,
      lng: -111.645602,
      zoom: 17,                              // optional: overrides maps.defaultZoom for this area
      companion: "Sister Zwygart",
      note: "",
      current: false
    },
    {
      name: "Mormon Battalion Historic Site",
      region: "San Diego, California",
      type: "area",
      start: "2026-08-03",
      end: null,
      lat: 32.7542,
      lng: -117.1940,
      companion: "Hermana Gomez",
      note: "",
      current: true
    }
  ]
};
