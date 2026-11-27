// I spent time on this I could've spent doing actual work!
// (it was totally worth it :3)

import { Movie } from "./types"

const nouns: string[] = [
    "Knight",
    "Lesbian",
    "Cat",
    "Knight",
    "Hearthian",
    "Sock",
    "Rock",
    "Stone",
    "Robot",
    "LLM",
    "Elephant",
    "Mushroom",
    "Roommate",
    "Git Repo",
    "Emoji",
    "Catgirl"
]

const adjectives: string[] = [
    "Roaring",
    "Cute",
    "Disastrous",
    "Ambidextrous",
    "Ferocious",
    "Gay",
    "Slightly Deaf",
    "Vibrant",
    "Tiny",
    "Huge",
    "Purple",
    "Invisible",
    "Transgender"
]

const verbs: string[] = [
    "Eat",
    "Kill",
    "Paint",
    "Hack",
    "Delete",
    "Befriend",
    "Invent",
    "Pet",
    "Poke",
]

const castnames: string[] = [
    "Hatsune Miku",
    "Kasane Teto",
    "Mae Moon",
    "Kenzie Monaghan",
    "Phoebe Atuchina",
]

const templates: string[] = [
    "The {adjective} {noun}s",
    "Revenge of the {adjective} {noun}s",
    "Revenge of the {noun}s",
    "The {noun} Movie",
    "{noun}s vs. {noun}s",
    "{noun}: The Movie",
    "How to {verb} a {noun}",
    "{adjective} {noun}",
]

function pickRandom<Type>(array: Type[]) {
    return array[Math.floor(Math.random() * array.length)];
}

function pickAndRemoveRandom<Type>(array: Type[]): Type {
    return array.splice(Math.random() * array.length, 1)[0];
}

export function randomTitle(): string {
    return pickRandom(templates)
    .replace("{noun}", pickRandom(nouns))
    .replace("{adjective}", pickRandom(adjectives))
    .replace("{verb}", pickRandom(verbs))
}

export function randomCast(): string[] {
    const castRemaining: string[] = [...castnames];
    const cast: string[] = [];
    for (let i = 0; i < 3; i++) {
        cast.push(pickAndRemoveRandom(castRemaining));
    }
    console.log(castRemaining);
    return cast;
}