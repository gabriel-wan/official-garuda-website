const IMG_PATH = "../../assets/home/eventsBanner/"

const imgs = [
    new URL(`${IMG_PATH}garuween.jpg`, import.meta.url).href,
    new URL(`${IMG_PATH}formalDinner.jpg`, import.meta.url).href,
    new URL(`${IMG_PATH}hotpot.jpg`, import.meta.url).href,
    new URL(`${IMG_PATH}ing.jpg`, import.meta.url).href,
]

export default imgs