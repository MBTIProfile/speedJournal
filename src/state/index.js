import { atom, selector } from "recoil";
import categoryList from "../data/category/emotion.json"
/**
 * 16진수 코드표를 받아서 조금 연하게 변경함
 */
 const setCategory = (categories) => {
    const colorArr = [
        "C90000",
        "5853ea",
        "f29661",
        "7c7a7a",
        "934689",
        "ffd602",
        "ef96ab",
        "bfd84e",
    ]
    const color = {}
    let cnt = 0
    categories.forEach((el) => {
        if(!color.hasOwnProperty(el.type)){
            color[el.type] = colorArr[cnt++]
        }
    })

    for (var i in categories) {
        const el = categories[i]
        let [r, g, b] = [color[el.type].substr(0, 2), color[el.type].substr(2, 2), color[el.type].substr(4, 2)]
        r = (parseInt(r, 16) + (10 * el.index)) > 255 ? "FF" : ("00" + (parseInt(r, 16) + (10 * el.index)).toString(16)).slice(-2)
        g = (parseInt(g, 16) + (10 * el.index)) > 255 ? "FF" : ("00" + (parseInt(g, 16) + (10 * el.index)).toString(16)).slice(-2)
        b = (parseInt(b, 16) + (10 * el.index)) > 255 ? "FF" : ("00" + (parseInt(b, 16) + (10 * el.index)).toString(16)).slice(-2)
        categories[i].color = "#" + r + g + b
        categories[i].isFold = el.level==="1"
    }
    return categories

}
const foldCategory = (level,foldtype,type) => {
    if(level === "1" || foldtype===type)
        return true
    else
        return false
}
export const categoryListState = atom({
    key: 'categoryListState', // unique ID (with respect to other atoms/selectors)
    default: setCategory(categoryList), // default value (aka initial value)
});
export const filterState = atom({
    key: 'filterState', // unique ID (with respect to other atoms/selectors)
    default: ""
});
export const filterCategoryListState = selector({
    key: 'filterCategoryListState',
    get: ({ get }) => {
        const list = get(categoryListState);
        const filter = get(filterState)
        return list.filter((item) => foldCategory(item.level, filter, item.type));
        // return list
    },
});
export const currentCategoryState = atom({
    key: 'currentCategoryState', // unique ID (with respect to other atoms/selectors)
    default: {},
});
