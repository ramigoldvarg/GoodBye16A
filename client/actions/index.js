export const NEXT_ID = 'NEXT_ID';
export const PREV_ID = 'PREV_ID';

export function nextId(currentId) {
    return ({
        type: NEXT_ID,
        payload: currentId + 1
    });
}

export function prevId(currentId) {
    return ({
        type: PREV_ID,
        payload: currentId - 1
    });
}