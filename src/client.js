import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  dataset: 'production',
  apiVersion: '2022-07-04',
  useCdn: true,
  projectId: "g54oq7ef",
  token: "skZ5CUetfH0w6gmmJomdFYCAF1CSec1HWUaRDB8VhEO2NKL5UUrpEWj96e2x30ZqOi6edxrkYzsuVNJLhNjkuXbCOb614WIZAFz7wDhdFNM4c4qSbRo8boXXvoIOXfYUByk0gTQjpwinmktRxQWjrIjBjhUt9nP7GsPwUw1wc36EqkpRwlw6",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
