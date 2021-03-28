import PropTypes from "prop-types"

const CATEGORIES = [
  {
    name: "react",
    color: "#00ccff",
    image: "/images/categories/react.png",
  },
  {
    name: "javascript",
    color: "#f7df1e",
    image: "/images/categories/javascript.png",
  },
  {
    name: "svelte",
    color: "#ff3e00",
    image: "/images/categories/svelte.png",
  },
  {
    name: "tailwindcss",
    color: "#47acb3",
    image: "/images/categories/tailwindcss.png",
  },
]

export default function useCategory(categoryName) {
  const category = CATEGORIES.find(
    (filteredCategory) => filteredCategory.name === categoryName
  )

  return category
}

useCategory.propTypes = {
  categoryName: PropTypes.string.isRequired,
}
