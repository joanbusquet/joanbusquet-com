import PropTypes from "prop-types"

import CATEGORIES from "constants/services"
export default function useCategory(categoryName) {
  const category = CATEGORIES.find(
    (filteredCategory) => filteredCategory.name === categoryName
  )

  return category
}

useCategory.propTypes = {
  categoryName: PropTypes.string.isRequired,
}
