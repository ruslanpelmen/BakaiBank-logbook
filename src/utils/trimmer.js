export default function trimmer(obj) {
    const clone = { ...obj }
    for (let prop in clone) {
        clone[prop] = clone[prop].trim()
    }
    return clone
}