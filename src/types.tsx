export interface Photo {
    id: number, 
    url: string,
    description?: string,
    publisher?: string,
    likes: number,
    category?: string,
    createdAt: Date,
}