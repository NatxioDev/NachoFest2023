import { Helmet } from "react-helmet-async";

function SEO() {
  return (
    <Helmet>
      <title>Invitacion NachoFest 2023</title>
      <meta name="description" content="Que se repita " />

      <meta property="og:url" content="https://nachofest23.netlify.app/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Invitacion NachoFest 2023" />
      <meta property="og:description" content="Que se repita " />
      <meta
        property="og:image"
        content="https://cdn.discordapp.com/attachments/391794006146940939/1125465910849839214/MetaTagImage.png"
      />

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="nachofest23.netlify.app" />
      <meta property="twitter:url" content="https://nachofest23.netlify.app/" />
      <meta name="twitter:title" content="Invitacion NachoFest 2023" />
      <meta name="twitter:description" content="Que se repita " />
      <meta
        name="twitter:image"
        content="https://cdn.discordapp.com/attachments/391794006146940939/1125465910849839214/MetaTagImage.png"
      />
    </Helmet>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export default SEO;
