import { categories } from "../../utils/constants";
import Button from "../Button/Button";

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
                className={`filter-button filter-button-${category}`}
                type="button"
                route={`/${category}`}
              >
                <img
                  src={require(`../../assets/${category}.svg`)}
                  alt={`${category}.svg`}
                />
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
