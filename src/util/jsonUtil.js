/**
 * parseEscaped takes a JSON string and returns an object.
 * String values are decoded using decodeURIComponent.
 */
export function parseEscaped(encodedJSON){
    return JSON.parse(encodedJSON, (key, val) => {
        return typeof val === 'string' ? decodeURIComponent(val) : val
    });
}