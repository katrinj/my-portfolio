export interface SubmitPollRequest {
    email: string | null | undefined,
    likedVeggies: string[] | null | undefined,
    dislikedVeggies: string[] | null | undefined,
    percentage: number | null | undefined
}
