export default function getAssetsImg(url) {
    return new URL(`./assets/${url}`, import.meta.url).href
}