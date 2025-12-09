export function importAllImages(modules) {
  const images = {};

  Object.keys(modules).forEach((path) => {
    const fileName = path.replace("/src/assets/image/", "");
    images[fileName] = modules[path].default;
  });

  return images;
}