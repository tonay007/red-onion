import { default as breakfast } from "./breakfast"
import dinner from "./dinner"
import { default as lunch } from "./lunch"

const allFoods = [...breakfast, ...lunch, ...dinner];

export default allFoods;