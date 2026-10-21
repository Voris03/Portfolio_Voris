const theme = {
    colors: {
        primaryBg: "#1F1F20",
        secondBg: "#252527",
        accent: "#7572D5",

        font: "#FFFFFF",

        borderColor: "#4A4A4A",

        placeholderColor: "#495057",
    },

    media: {
        tablet: "screen and (max-width: 768px)",
        mobile: "screen and (max-width: 576px)",
        desktop: "screen and (max-width: 1140px)",
    },

    // Poppins and Josefin Sans have no Cyrillic: Russian glyphs come from Montserrat
    fonts: {
        main: '"Poppins", "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        title: '"Josefin Sans", "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    },

    animations: {
        transition: ".2s ease-in-out",
    }


}

export default theme;