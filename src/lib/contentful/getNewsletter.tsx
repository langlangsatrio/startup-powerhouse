import contentfulClient from "./contentfulClient";
import { TypeStartupPowerhouseNewsletterSkeleton } from "./TypeStartupPowerhouseNewsletter";

const getNewsletter = async (slug: string) => {
  try {
    const newsletter =
      await contentfulClient.getEntries<TypeStartupPowerhouseNewsletterSkeleton>(
        {
          content_type: "startupPowerhouseNewsletter",
          "fields.slug[match]": slug,
        },
      );
    return newsletter.items;
  } catch (error) {
    console.log(error);
  }
};

export default getNewsletter;
