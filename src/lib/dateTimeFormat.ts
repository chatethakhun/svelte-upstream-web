import moment from "moment";

export const formatToRelativeTime = (date: Date) => moment(date).fromNow();