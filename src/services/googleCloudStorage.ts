import { Storage } from '@google-cloud/storage';

const storage = new Storage();

async function uploadFile(bucketName: string, filename: string) {
  await storage.bucket(bucketName).upload(filename, {
    gzip: true,
    metadata: {
      cacheControl: 'public, max-age=31536000',
    },
  });

  console.log(`${filename} uploaded to ${bucketName}.`);
}

export { uploadFile };