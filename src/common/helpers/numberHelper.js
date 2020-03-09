export function toInt(value) {
    if (isNaN(value)) {
        return "";
    }

    return parseInt(value);
}