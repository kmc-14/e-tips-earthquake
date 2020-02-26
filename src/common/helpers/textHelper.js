export function capitalize(value, type = "first") {
    switch (type) {
        case "first":
            return value.charAt(0).toUpperCase() + value.slice(1);
        case "all":
            return value.toUpperCase();
        default:
            return value;
    }
}