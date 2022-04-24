import ImageUrlBuilder from "@sanity/image-url";

const sanityClient = require("@sanity/client");

export const client = sanityClient({
	projectId: "bm4iimd9",
	dataset: "production",
	apiVersion: "2022-04-23",
	useCdn: true,
	token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
