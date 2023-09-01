function Capitalize(string) {
    const trimmedString = string.trim();
    return trimmedString.charAt(0).toUpperCase() + trimmedString.slice(1);

}

export { Capitalize }