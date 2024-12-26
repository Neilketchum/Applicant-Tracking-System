import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
    projectId: 'nf002ajm',
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    token: "skWdNg3000RF4f61f42pV94FZcrYRGuIXoAqj1CoHWXaup1z6zE2E53nyXL5qZbh9CQ0zx3tUtwfFHI7zTI4rYLBsBdW16z5rhafdxUh2yffLRewXVF91kT1pwPlK5gtc9Q5cphe1QbMd1cICNxFotI4sh8kjKaUdB0fyya5NLWiBogLr8Yp"
})

const builder = imageUrlBuilder(client)
export const urlFor = (source) => builder.image(source)