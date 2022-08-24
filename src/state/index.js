import { atom, selector } from "recoil";
import emotionList from "../data/emotion.json"
/**
 * 16진수 코드표를 받아서 조금 연하게 변경함
 */
 const setEmotion = (users) => {
    const color = {
        anger: "C90000",
        sad: "5853ea",
        anxious: "f29661",
        hurt: "7c7a7a",
        embarrassed: "934689",
        happy: "ffd602",
        love: "ef96ab",
        wish: "bfd84e",
    }

    for (var i in users) {
        const el = users[i]
        let [r, g, b] = [color[el.type].substr(0, 2), color[el.type].substr(2, 2), color[el.type].substr(4, 2)]
        r = (parseInt(r, 16) + (10 * el.index)) > 255 ? "FF" : ("00" + (parseInt(r, 16) + (10 * el.index)).toString(16)).slice(-2)
        g = (parseInt(g, 16) + (10 * el.index)) > 255 ? "FF" : ("00" + (parseInt(g, 16) + (10 * el.index)).toString(16)).slice(-2)
        b = (parseInt(b, 16) + (10 * el.index)) > 255 ? "FF" : ("00" + (parseInt(b, 16) + (10 * el.index)).toString(16)).slice(-2)
        users[i].color = "#" + r + g + b
        users[i].isFold = el.level==="1"
    }
    return users

}
const setFilter = () => {
    const filter = {}
    const list = emotionList.filter( (item)=> item.level==="1")
    for( const el of list){
        filter[el.type] = false
    }
    return filter
}

const foldEmotion = (level,foldtype,type) => {
    if(level === "1" || foldtype[type])
        return true
    else
        return false
}
export const emotionListState = atom({
    key: 'emotionListState', // unique ID (with respect to other atoms/selectors)
    default: setEmotion(emotionList), // default value (aka initial value)
});
export const filterState = atom({
    key: 'filterState', // unique ID (with respect to other atoms/selectors)
    default: setFilter()
});
export const filterEmotionListState = selector({
    key: 'filterEmotionListState',
    get: ({ get }) => {
        const list = get(emotionListState);
        const filter = get(filterState)
        console.log(get(emotionListState))
        return list.filter((item) => foldEmotion(item.level, filter, item.type));
        // return list
    },
});