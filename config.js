/* =====================================================================
   PARKING FINDER: CLIENT CONFIGURATION (Klink Digital Group)
   ---------------------------------------------------------------------
   Everything that is specific to the client lives in this one file.
   Change a value here (by hand or with "Settings Editor.html"), publish,
   and the app picks it up. No need to touch index.html.

   Note: the <title>, description and social-share tags at the top of
   index.html are plain HTML (Google/WhatsApp read them without running
   this file). If you change brand.appName / brand.company, update those
   few lines in index.html too. They are marked "CONFIG: keep in sync".

   Saved with the Settings Editor on 2026/11/03, 18:20:08
   ===================================================================== */
window.APP_CONFIG = {

  /* ---------- Brand ---------- */
  brand: {
    company: "Klink Digital Group",          // shown in footer + byline
    appName: "Parking Finder",               // product name
    heading: "Parking nearby",               // big heading in the blue sign
    byline:  "by Klink Digital Group"        // small text next to the heading ("" to hide)
  },

  /* ---------- Contact (used on the privacy page) ---------- */
  contact: {
    email: "info@klinkdigitalgroup.co.za"    // shown on the privacy page; must be a mailbox you read
  },

  /* ---------- Where the site lives ---------- */
  site: {
    productionHost: "klinkdigitalgroup.co.za",
    // Any other address (e.g. a test copy) gets a "noindex" tag,
    // so Google only lists the main site.
    noindexOutsideProduction: true
  },

  /* ---------- Colours ----------
     Use hex colours like "#1B5FC1" (the Settings Editor has colour pickers). */
  colours: {
    sign:    "#1B5FC1",   // main brand colour (header sign, buttons, route line, map pins)
    paint:   "#F5C518",   // accent (Go button, dashed line, "Search this area")
    ink:     "#14202E",   // main text
    inkSoft: "#4A5868",   // secondary text
    paper:   "#EEF1F4",   // page background
    open:    "#17804B",   // "Open now" / "Free"
    closed:  "#B5402E"    // "Closed" / "Private"
  },

  /* ---------- Search behaviour ---------- */
  search: {
    defaultRadius: 1000,                     // metres; must be one of radiusOptions
    radiusOptions: [500, 1000, 2000, 5000],  // metres
    maxResults: 40,                          // how many lots are shown (nearest first)
    freshForMinutes: 360,                    // saved results for an area are reused (no server call) for this long; Refresh always re-checks
    fetchLimit: 300,                         // how many lots to ask the server for before picking the nearest
    hideClosedByDefault: false,
    freeOnlyByDefault: false,
    publicOnlyByDefault: false               // "Hide restricted lots" ticked by default
  },

  /* ---------- Naming unnamed lots ----------
     Most lots on OpenStreetMap have no name, so the app names them after the nearest named
     place ("Somerset Mall parking", "Parking near Spar") or the street ("Parking on Main Road"). */
  naming: {
    placeRadius: 80,     // metres from the lot's edge to look for named places
    streetRadius: 50,    // metres from the lot's edge to look for a named street
    timeoutMs: 20000     // this lookup runs after results show, so it can wait longer
  },

  /* ---------- Distance units ----------
     "auto"     = miles only for US/Liberia/Myanmar devices (recommended)
     "metric"   = always m / km
     "imperial" = always ft / mi */
  units: "auto",

  /* ---------- Map & data services ----------
     Overpass servers are tried in order until one answers.
     maps.mail.ru is a Russian mirror kept as a last resort: remove it if you
     would rather not send search areas there (the privacy page mentions servers abroad). */
  services: {
    overpass: [
      "https://overpass-api.de/api/interpreter",
      "https://overpass.openstreetmap.fr/api/interpreter",
      "https://overpass.private.coffee/api/interpreter",
      "https://maps.mail.ru/osm/tools/overpass/api/interpreter"
    ],
    overpassTimeoutMs: 8000,   // give up on one server after this long
    overpassHedgeMs: 2500,    // no answer yet after this long? ask the next server as well
    geocoder: "https://nominatim.openstreetmap.org/search",   // free; app keeps to 1 request/second + remembers answers
    geocoderCountries: "za",   // address search only returns places in these countries ("za,na,bw" for more, "" for any)
    // In-app turn-by-turn directions: OFF ("") because the free OSRM demo server only allows
    // non-commercial use. Users tap Google Maps / Waze / Apple Maps instead (free, no API key).
    router:   "",
    tiles:    "https://tile.openstreetmap.org/{z}/{x}/{y}.png"   // free; fine at low traffic (see the Start Here guide)
  },

  /* ---------- Usage counter (tally.yuki.sh, free, shared service) ----------
     Read counts without bumping them:
     https://tally.yuki.sh/hits/<id>/visits.json?mode=read
     https://tally.yuki.sh/hits/<id>/directions.json?mode=read */
  analytics: {
    enabled: true,
    id: "keanuklink-parking-finder"          // keep the same so existing counts continue
  },

  /* ---------- Footer ---------- */
  footer: {
    disclaimer: "Map data from OpenStreetMap volunteers. Hours and fees are often missing or out of date, and nobody reports how many spaces are free."
  }
};
