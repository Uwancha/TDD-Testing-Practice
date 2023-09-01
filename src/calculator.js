function calculator() {

    return {

        add (a, b) {
            const A = Number(a);
            const B = Number(b);
            if (isNaN(A) || isNaN(B)) {
                return 'Invalid input.';
            }
            
            return A + B;
        },

        subtract (a, b) {
            const A = Number(a);
            const B = Number(b);
            if (isNaN(A) || isNaN(B)) {
                return 'Invalid input.';
            }
            
            return A - B;
        },

        divide (a, b) {
            const A = Number(a);
            const B = Number(b);
            if (isNaN(A) || isNaN(B)) {
                return 'Invalid input.';
            }
            
            if (B === 0) {
                return 'Division by zero is not allowed.';
            }
            
            return A / B;
        },

        multiply (a, b) {
            const A = Number(a);
            const B = Number(b);
            if (isNaN(A) || isNaN(B)) {
                return 'Invalid input.';
            }
            
            return A * B;
        }
    }
}

export { calculator };