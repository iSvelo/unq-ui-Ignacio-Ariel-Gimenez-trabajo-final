export const ERRORS = {
    NOT_FOUND: "La palabra no existe.",
    ALREADY_USED: "La palabra ya fue utilizada.",
    BAD_CHAIN: "La palabra no respeta la regla de encadenamiento.",

};

const ACCENTS = { á: "a", é: "e", í: "i", ó: "o", ú: "u", ü: "u" };

const comparable = (word) =>
    word.trim().toLowerCase().replace(/[áéíóúü]/g, (c) => ACCENTS[c]);

export const isAlreadyUsed = (word, chain) =>
    chain.some((used) => comparable(used) === comparable(word));

export const respectsChain = (word, chain) => {
    if (chain.length === 0) return true;

    const last = comparable(chain[chain.length - 1]);
    return comparable(word)[0] === last[last.length - 1];
};