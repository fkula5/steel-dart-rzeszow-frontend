export interface Game {
    id: number,
    date: string
    playerOne: {
        name: string,
        surname: string
    }
    score: string,
    playerTwo: {
        name: string,
        surname: string
    }
}