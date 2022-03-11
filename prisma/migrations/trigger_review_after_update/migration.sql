DROP TRIGGER IF EXISTS `RecipeReview_after_update`;
CREATE TRIGGER `RecipeReview_after_update` AFTER UPDATE ON `RecipeReview` FOR EACH ROW BEGIN
	IF (NEW.review IS NOT NULL AND OLD.review != NEW.review)
	THEN
		UPDATE Recipe
		SET avgReview = (select AVG(review) from RecipeReview where RecipeReview.recipeId = NEW.recipeId)
		WHERE Recipe.id = NEW.recipeId;
	END IF;
END