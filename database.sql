-- CREATE TABLESSSSSSS yay!

CREATE TABLE "gallery" (
	"id" SERIAL PRIMARY KEY,
	"path" VARCHAR(150),
	"description" VARCHAR(200),
	"likes" INT,
);

INSERT INTO "gallery" ("path", "description", "likes")
VALUES  
('images/bello-close-up.jpg', 'close up photo of tan cat', 0),
('images/eugene.jpg', 'black cat in a paper bag', 0),
('images/hammock.jpg', 'tan cat in a hammock', 0),
('images/pants-close.jpg', 'close up photo of an orange cat', 0),
('images/pants-nap.jpg', 'orange cat napping', 0),
('images/pants-sun.jpg', 'orange cat sitting in the sun', 0),
('images/paw.jpg', 'tan cat licking its paw', 0),
('images/shower-cat.jpg', 'tan cat laying in a shower basin', 0),
('images/sniff.jpg', 'orange cat sniffs the camera', 0),
('images/sun-nap.jpg', 'tan cat naps in the sun', 0);
    	
SELECT * FROM "gallery" ORDER BY "id";

UPDATE  "gallery"
SET "likes" = "likes" + 1
WHERE "id" = 2;

DELETE FROM "gallery"
WHERE "id" = $1;

-- TEST PIC FOR DELETING PICS
INSERT INTO "gallery" ("path", "description", "likes")
VALUES  
('images/bello-close-up.jpg', 'close up photo of tan cat', 0);