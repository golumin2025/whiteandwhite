import { config, collection, singleton } from "@keystatic/core";

import { blogs } from "@keystatic/collections/blogs";
import { pages } from "@keystatic/collections/pages";
import { reviews } from "@keystatic/collections/reviews";
import { email } from "@keystatic/singletons/email";
import { footer } from "@keystatic/singletons/footer";
import { general } from "@keystatic/singletons/general";
import { header } from "@keystatic/singletons/header";

export default config({
  storage: {
    kind: import.meta.env.DEV ? "local" : "cloud",
  },
  cloud: {
    project: "white-and-white-v2/marketing",
  },
  ui: {
    brand: { name: "White & White CMS" },
  },
  collections: {
    blogs: collection(blogs),
    pages: collection(pages),
    reviews: collection(reviews),
  },
  singletons: {
    general: singleton(general),
    email: singleton(email),
    header: singleton(header),
    footer: singleton(footer),
  },
});
