export interface SubmitPollRequest {
    email: string | null | undefined,
    likedVeggies: number[] | null | undefined,
    dislikedVeggies: number[] | null | undefined,
    percentage: number | null | undefined
}
