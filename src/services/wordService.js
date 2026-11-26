import api from "./api"

export const validateWord = (word) =>
    api.get("/api/validate",{ params: {word}}).then((res)=> res.data.exists)