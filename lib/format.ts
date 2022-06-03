import { Date } from 'sugar';

export function relativeDate(date: Date | string):string {
    return new Date(date).relative().raw
}