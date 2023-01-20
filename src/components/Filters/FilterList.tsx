import { categories } from '../../utils/constants';
import Button from '../Button/Button';

const FilterList = () => {
    return (
        <nav className="filter-list">
            {
                categories?.map((category) => {
                    return <Button key={category} className="filter-button" type="button" route={`/${category}`}>{category}</Button>
                })
            }
        </nav>
    );

}

export default FilterList;