module.exports = function recursion(tree) {
    return (recurs = (tree, index, arr) => {
        for(var obj in tree){
            if(typeof(tree[obj]) !== 'object'){
                if (typeof arr[index] === 'undefined') arr[index] = [];
                arr[index].push(tree[obj]);
            }
            else{
                recurs(tree[obj], index + 1, arr);
            } 
        }    
        return arr;
    })(tree, 0, [])
};
