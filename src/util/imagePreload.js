export default function imagePreload(images) {
  for (let i = 0; i < images.length; i++) {
    const image = new Image()
    image.src = images[i]
  }
}
