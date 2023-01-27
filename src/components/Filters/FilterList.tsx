import { categories } from "../../utils/constants";
import Button from "../Button/Button";
import SVGLoader from "../SVGLoader/SVGLoader";

type Props = {
  isMobileScreen?: boolean;
};

const FilterList = ({ isMobileScreen }: Props) => {
  return (
    <>
      {isMobileScreen ? null : (
        <nav className="filter-list">
          {categories?.map((category) => {
            if (category === "News by search") {
              return null;
            }

            return (
              <Button
                key={category}
                className="filter-button"
                type="button"
                route={`/${category}`}
              >
                <SVGLoader category={category} />
                {category}
              </Button>
            );
          })}
        </nav>
      )}
    </>
  );
};

export default FilterList;
