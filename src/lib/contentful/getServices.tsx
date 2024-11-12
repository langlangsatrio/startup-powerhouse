import contentfulClient from "./contentfulClient";
import { TypeStartupPowerhouseServicesSkeleton } from "./types";

const getServices = async () => {
  try {
    const services =
      await contentfulClient.getEntries<TypeStartupPowerhouseServicesSkeleton>({
        content_type: "startupPowerhouseServices",
      });
    console.log(services.items);
    return services;
  } catch (error) {
    console.log(error);
  }
};

export default getServices;
