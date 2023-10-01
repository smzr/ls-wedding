import smzr from './smzr.json'

export const handler = async () => {
    const randomIndex = Math.floor(Math.random() * smzr.length)
    const randomExpansion = smzr[randomIndex]
    return {
        statusCode: 200,
        body: randomExpansion
    }
}