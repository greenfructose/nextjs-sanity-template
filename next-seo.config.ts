const title = "Empires and Embers Dev Blog";
const description = "4X Strategy game";
const url = "https://dev.empiresandembers.com/";

const config = {
  title,
  description,
  canonical: url,
  openGraph: {
    type: "website",
    locale: "en_EN",
    url,
    site_name: "Empires and Embers Dev Blog",
    title,
    description,
    images: [
      {
        url: "https://dev.empiresandembers.com/favicon.png",
        alt: title,
        width: 1280,
        height: 720,
      },
    ],
  },
};

export default config;
