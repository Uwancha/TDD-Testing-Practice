function caesarCipher(string, key) {
    let encrypted_decrypted = '';

    for (let i = 0; i < string.length; i++) {
        let char = string[i];

        if (/[a-zA-Z]/.test(char)) {
            let code = string.charCodeAt(i);
            let isUpperCase = char === char.toUpperCase();
            let base = isUpperCase ? 65 : 97;
            let shiftedCode = ((code - base + key) % 26 + 26 )% 26 + base;
            let shiftedChar = String.fromCharCode(shiftedCode);
            
            encrypted_decrypted += shiftedChar;
          } else {
            // Non-alphabetical characters are unchanged
            encrypted_decrypted += char;
          }
        }
      
        return encrypted_decrypted;
}

export { caesarCipher }
