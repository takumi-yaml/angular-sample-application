
export function range(st: number, en: number) {
    return Array.from(Array(1 + en - st).keys()).map(v => st + v);
}
