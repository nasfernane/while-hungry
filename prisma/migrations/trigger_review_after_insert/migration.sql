DROP TRIGGER IF EXISTS `RecipeReview_after_insert`;
CREATE TRIGGER `RecipeReview_after_insert` AFTER INSERT ON `RecipeReview` FOR EACH ROW BEGIN
	IF (NEW.review IS NOT NULL) 
	THEN
	  UPDATE Recipe
	  SET avgReview = (select AVG(review) from RecipeReview where RecipeReview.recipeId = NEW.recipeId)
	  WHERE Recipe.id = NEW.recipeId;
	END IF;
END
    

