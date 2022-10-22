import { Photo } from "../types";

export const sortByDate = (arr: Photo[]) => {
    const sortedAsc = arr.sort(
        (objA, objB) => Number(objA.createdAt) - Number(objB.createdAt)
    );
    return sortedAsc;
}