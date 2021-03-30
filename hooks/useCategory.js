import PropTypes from "prop-types"

import CATEGORIES from "constants/categories"
export default function useCategory(categoryId) {
  const category = CATEGORIES.find(
    (filteredCategory) => filteredCategory.id === categoryId
  )

  return category
}

useCategory.propTypes = {
  categoryId: PropTypes.string.isRequired,
}
