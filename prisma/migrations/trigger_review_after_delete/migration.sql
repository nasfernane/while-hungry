DROP TRIGGER IF EXISTS `RecipeReview_after_delete`;
CREATE TRIGGER `RecipeReview_after_delete` AFTER DELETE ON `RecipeReview` FOR EACH ROW BEGIN
	UPDATE Recipe
	SET avgReview = (select AVG(review) from RecipeReview where RecipeReview.recipeId = OLD.recipeId)
	WHERE Recipe.id = OLD.recipeId;
END