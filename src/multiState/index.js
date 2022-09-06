import { atomFamily, selectorFamily } from "recoil";
const setCategory = (categories) => {
    const colorArr = [
        "f44336",
        "e91e63",
        "9c27b0",
        "673ab7",
        "3f51b5",
        "2196f3",
        "03a9f4",
        "00bcd4",
        "009688",
        "4caf50",
        "8bc34a",
        "cddc39",
        "ffeb3b",
        "ffc107",
        "ff5722",
        "795548",
        "607d8b"
    ]

    const color = {}
    let cnt = 0
    categories.forEach((el) => {
        if (!color.hasOwnProperty(el.type)) {
            color[el.type] = colorArr[cnt++]
        }
    })
    if (categories[0].hasOwnProperty("color") === false) {
        for (var i in categories) {
            const el = categories[i]
            let [r, g, b] = [color[el.type].substr(0, 2), color[el.type].substr(2, 2), color[el.type].substr(4, 2)]
            r = (parseInt(r, 16) + (10 * el.index)) > 255 ? "FF" : ("00" + (parseInt(r, 16) + (10 * el.index)).toString(16)).slice(-2)
            g = (parseInt(g, 16) + (10 * el.index)) > 255 ? "FF" : ("00" + (parseInt(g, 16) + (10 * el.index)).toString(16)).slice(-2)
            b = (parseInt(b, 16) + (10 * el.index)) > 255 ? "FF" : ("00" + (parseInt(b, 16) + (10 * el.index)).toString(16)).slice(-2)
            categories[i].color = "#" + r + g + b
            categories[i].isFold = el.level === "1"
        }
    }
    return categories

}
const setCategoryState = (key, id) => ({ onSet, setSelf }) => {
    setSelf(() => {
        console.log(key, id)
        return setCategory(id[1])
    });

    // Trigger 가 발동이 되어야 실행된다. (atom 의 값이 변경이 되었을 경우에 초기화된다.)
    onSet((newValue, _, isReset) => {
        console.log(newValue, isReset, _);
    });
};

export const multiCategoryList = atomFamily({
    key: 'multiCategoryList', // unique ID (with respect to other atoms/selectors)
    default: [],
    effects: (param) => [setCategoryState("multiCategoryList", param)],
});

export const filterMultiCategoryListState = selectorFamily({
    key: 'filterMultiCategoryListState',
    get: (param) => ({ get }) => {
        const list = get(multiCategoryList(param));

        return list
    }
});

// /**
//  * 16진수 코드표를 받아서 조금 연하게 변경함
//  */
//  const setCategory = (categories) => {
//     const colorArr = [
//         "C90000",
//         "5853ea",
//         "f29661",
//         "7c7a7a",
//         "934689",
//         "ffd602",
//         "ef96ab",
//         "bfd84e",
//     ]
//     const color = {}
//     let cnt = 0
//     categories.forEach((el) => {
//         if(!color.hasOwnProperty(el.type)){
//             color[el.type] = colorArr[cnt++]
//         }
//     })

//     for (var i in categories) {
//         const el = categories[i]
//         let [r, g, b] = [color[el.type].substr(0, 2), color[el.type].substr(2, 2), color[el.type].substr(4, 2)]
//         r = (parseInt(r, 16) + (10 * el.index)) > 255 ? "FF" : ("00" + (parseInt(r, 16) + (10 * el.index)).toString(16)).slice(-2)
//         g = (parseInt(g, 16) + (10 * el.index)) > 255 ? "FF" : ("00" + (parseInt(g, 16) + (10 * el.index)).toString(16)).slice(-2)
//         b = (parseInt(b, 16) + (10 * el.index)) > 255 ? "FF" : ("00" + (parseInt(b, 16) + (10 * el.index)).toString(16)).slice(-2)
//         categories[i].color = "#" + r + g + b
//         categories[i].isFold = el.level==="1"
//     }
//     return categories

// }
// const foldCategory = (level,foldtype,type) => {
//     if(level === "1" || foldtype===type)
//         return true
//     else
//         return false
// }
// export const categoryListState = atom({
//     key: 'categoryListState', // unique ID (with respect to other atoms/selectors)
//     default: setCategory(categoryList), // default value (aka initial value)
// });
// export const filterState = atom({
//     key: 'filterState', // unique ID (with respect to other atoms/selectors)
//     default: ""
// });
// export const filterCategoryListState = selector({
//     key: 'filterCategoryListState',
//     get: ({ get }) => {
//         const list = get(categoryListState);
//         const filter = get(filterState)
//         return list.filter((item) => foldCategory(item.level, filter, item.type));
//         // return list
//     },
// });
// export const currentCategoryState = atom({
//     key: 'currentCategoryState', // unique ID (with respect to other atoms/selectors)
//     default: {},
// });
