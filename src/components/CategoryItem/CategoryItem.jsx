import { useRecoilState } from "recoil"
import { filterState, categoryListState } from "../../state"
import {
  Card,
  CardContent,
  Typography,
} from "@mui/material"
import "./CategoryItem.scss";
function CategoryItem({ category: { type, detail, index, color, checkFlag }, category }) {
  const [filter, setFilter] = useRecoilState(filterState);
  const [categories, setCategories] = useRecoilState(categoryListState)

  const handleCardClick = () => {
    const i = categories.findIndex((categoryList) => category === categoryList)
    checkFlag = !checkFlag
    setCategories(prevState => {
      const newState = prevState.map(obj => {
        if (obj === category) {
          return { ...obj, checkFlag: checkFlag };
        }
        return obj;
      });
      return newState;
    })
    console.log(categories, categories[i]["checkFlag"])

  }
  const handleCardDblClick = () => {
      const flag = !filter[type]
      setFilter({
        ...filter,
        [type]: flag
      })
  }
  return (
    <Card className="Card" style={{ backgroundColor: color, margin: "2px" }} onClick={handleCardClick} onDoubleClick={handleCardDblClick}>
      <input type="checkbox" readOnly checked={checkFlag} />
      <CardContent sx={{ margin: "auto" }}>
        <Typography sx={{ textAlign: "center" }}>{detail}</Typography>
      </CardContent>
    </Card>
  );
}

export default CategoryItem;
