export function findAllRecipes(
  recipes: string[],
  ingredients: string[][],
  supplies: string[]
): string[] {
  let recipeAddedSet = new Set(recipes);
  let supplySet = new Set(supplies);
  let result = [];
  let added = true;
  while (added) {
    added = false;
    for (let i = 0; i < recipes.length; i++) {
      if (!recipeAddedSet.has(recipes[i])) {
        continue;
      }
      const canMake = ingredients[i].every((ing) => supplySet.has(ing));
      if (canMake) {
        result.push(recipes[i]);
        supplySet.add(recipes[i]);
        recipeAddedSet.delete(recipes[i]);
        added = true;
      }
    }
  }
  return result;
}
