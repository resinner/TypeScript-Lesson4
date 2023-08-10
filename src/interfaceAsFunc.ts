//type AddFunc = (n1: number, n2: number) => number;

interface AddFunc {
    (n1: number, n2: number): number;
}

const foo: AddFunc = (n1: number, n2: number) => {
    return n1 + n2;
};