// Won't use Number.isInteger() because I want to handle numeric strings too.
const isInteger = (amount) => {
    try {
        const parsedAmount = parseInt(amount) || undefined; 
        return parsedAmount;
    } catch {
        return;
    }
};

export default isInteger;