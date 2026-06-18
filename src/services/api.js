export async function getRate(from, to) {
    const response = await fetch(`/api/latest?base=${from}&symbols=${to}`)
    const data = await response.json()
    return data // retourne tout l'objet
}

export async function getPopularRate(from) {
    const response = await fetch(`/api/latest?base=${from}`)
    const data = await response.json()
    return data
}

export async function getYesterdayRate(from, to) {
    const yesterday = new Date()
    yesterday.setDate(yesterday.getDate() - 2)
    const date = yesterday.toISOString().split("T")[0] // "2026-06-15"

    const response = await fetch(`/api/${date}?base=${from}&symbols=${to}`)
    const data = await response.json()
    return data
}

export async function getYesterdayPopularRate(from) {
    const yesterday = new Date()
    yesterday.setDate(yesterday.getDate() - 2)
    const date = yesterday.toISOString().split("T")[0] // "2026-06-15"

    const response = await fetch(`/api/${date}?base=${from}`)
    const data = await response.json()
    return data
}