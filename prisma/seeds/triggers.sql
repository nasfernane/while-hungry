DROP TRIGGER IF EXISTS `RecipeReview_after_insert`;
DELIMITER //
CREATE TRIGGER `RecipeReview_after_insert` AFTER INSERT ON `RecipeReview` FOR EACH ROW BEGIN
	IF (NEW.review IS NOT NULL) 
	THEN
	  UPDATE Recipe
	  SET avgReview = (select AVG(review) from RecipeReview where RecipeReview.recipeId = NEW.recipeId)
	  WHERE Recipe.id = NEW.recipeId;
	END IF;
END//
DELIMITER ;

DROP TRIGGER IF EXISTS `RecipeReview_after_update`;
DELIMITER //
CREATE TRIGGER `RecipeReview_after_update` AFTER UPDATE ON `RecipeReview` FOR EACH ROW BEGIN
	IF (NEW.review IS NOT NULL AND OLD.review != NEW.review)
	THEN
		UPDATE Recipe
		SET avgReview = (select AVG(review) from RecipeReview where RecipeReview.recipeId = NEW.recipeId)
		WHERE Recipe.id = NEW.recipeId;
	END IF;
END//
DELIMITER ;

DROP TRIGGER IF EXISTS `RecipeReview_after_delete`;
DELIMITER //
CREATE TRIGGER `RecipeReview_after_delete` AFTER DELETE ON `RecipeReview` FOR EACH ROW BEGIN
	UPDATE Recipe
	SET avgReview = (select AVG(review) from RecipeReview where RecipeReview.recipeId = OLD.recipeId)
	WHERE Recipe.id = OLD.recipeId;
END//
DELIMITER ;
    
