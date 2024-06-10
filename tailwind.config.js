/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#939393",
          "200": "#222",
          "300": "#141414",
        },
        darkgray: "#aeaeb2",
        dimgray: "#676767",
        gainsboro: "#dadada",
        white: "#fff",
      },
      spacing: {},
      fontFamily: {
        montserrat: "Montserrat",
        poppins: "Poppins",
      },
      borderRadius: {
        xl: "20px",
        "3xs": "10px",
      },
    },
    fontSize: {
      xs: "12px",
      mid: "17px",
      "3xl": "22px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
