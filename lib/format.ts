import moment from 'moment';

export function relativeDate(date: string):string {
    return moment(date).startOf('day').fromNow()
}