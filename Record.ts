/**
 * Record
 * @date 2022-03-16
 */
type key = 'name' | 'age';
const tree: Record<key, unknown> = {
    name: '若川',
    age: 18,
}


// type nonameTree = Omit<tree, 'name'>;