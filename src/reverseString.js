function reverseString(string) {
    const trimmedString = string.trim();
    const reversedArray = Array.from(trimmedString).reverse();
    return reversedArray.join('');
}

export { reverseString };