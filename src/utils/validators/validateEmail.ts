export function validateEmail(email: string): boolean {
    const re = /\S+@\S+\.\S+/; // TODO: improve this regex
    return re.test(email);
}