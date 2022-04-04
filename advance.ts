interface IArrayItem {
    id: number;
    name: string;
    parentId: number;
}

interface ITreeNode {
    id: number;
    name: string;
    children?: ITreeNode[];
}

/**
 * 数组转树
 * @date 2022-03-19
 */
const convert = (arr: IArrayItem[]): ITreeNode | null => {
    let root = null;
    let idToTreeNode: Map<number, ITreeNode> = new Map();

    arr.forEach((item) => {
        const { id, name, parentId } = item;
        // 定义 treeNode 并加入到 
        idToTreeNode.set(id, item);
        const treeNode: ITreeNode = { id, name };

        const parentNode = idToTreeNode.get(parentId);
        if(parentNode){
            if(!Array.isArray(parentNode.children)){
                parentNode.children = [];
            }
            parentNode.children.push(treeNode);
        }
        // 找到的根节点
        if(parentId === 0){
            root = treeNode;
        }
    });

    return root;
}

const arr = [
    {
        name: '部门A',
        id: 1,
        parentId: 0,
    },
    {
        name: '部门B',
        id: 2,
        parentId: 1,
    },
    {
        name: '部门C',
        id: 3,
        parentId: 1,
    },
    {
        name: '部门D',
        id: 4,
        parentId: 2,
    },
    {
        name: '部门E',
        id: 5,
        parentId: 2,
    },
    {
        name: '部门F',
        id: 6,
        parentId: 3,
    },
];

console.log(convert(arr));


// enum EnumProps {
//     YES = 1,
//     NO = 2,
// }

const enum EnumProps2 {
    YES = 1,
    NO = 2,
}