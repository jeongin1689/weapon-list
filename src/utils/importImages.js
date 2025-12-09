export function importAllImages(modules) {
  const images = {};

  Object.keys(modules).forEach((path) => {
    const fileName = path.split("/").pop();
    images[fileName] = modules[path];
  });

  return images;
}