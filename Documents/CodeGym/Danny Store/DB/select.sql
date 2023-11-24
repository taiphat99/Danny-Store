
-- Create view -- 

CREATE OR REPLACE VIEW product_view AS
    SELECT 
        p.id AS id,
        p.name AS name,
        p.price AS price,
        p.price_on_sale AS sale_price,
        p.avatar AS avatar,
        col.id AS color_id,
        col.name AS color,
        con.id AS concept_id,
        con.name AS concept,
        pt.id AS product_type_id,
        pt.name AS type,
        pct.id AS category_id,
        pct.name AS category,
        s.id AS size_id,
        s.name AS size,
        ps.quantity AS quantity,
        p.input_date AS input_date,
        ord.sales AS sales
    FROM
        product p
            JOIN
        product_children_type pct ON p.product_children_id = pct.id
            JOIN
        product_type pt ON pct.product_type_id = pt.id
            JOIN
        product_size ps ON ps.product_id = p.id
            JOIN
        size s ON ps.size_id = s.id
            JOIN
        color col ON p.color_id = col.id
            JOIN
        concept con ON p.concept_id = con.id
            left JOIN
        (SELECT 
            p.id, SUM(od.quantity) AS sales
        FROM
            order_detail od
        JOIN product p ON p.id = od.product_id
        GROUP BY p.id) ord ON p.id = ord.id
    ORDER BY id ASC;
        
        
        
      
select * from product_view;


SELECT 
    *
FROM
    product_view
WHERE
    id = 1
LIMIT 1;
    
SELECT 
    *
FROM
    image
WHERE
    product_id = 2;







-- Get colors by name --
SELECT 
    color_id, color
FROM
    product_view
WHERE
    name LIKE 'Polo thể thao V2'
GROUP BY (color_id);	
    
    

    
-- Get sizes by name and color --
Select size_id, size
from product_view
where color_id = 4 and name like "Polo thể thao V2";

-- get all sizes --
select id as size_id, name as size
from size;
        
        
-- Get sizes by name and color_id--

SELECT 
    size_id
FROM
    product_view
WHERE
    name LIKE 'Polo thể thao V2'
        AND color_id = 4;


SELECT 
    id,
    name,
    price,
    sale_price,
    avatar,
    color_id,
    color,
    input_date
FROM
    product_view
WHERE
    name LIKE 'Polo thể thao V2'
        AND color_id = 4
GROUP BY id;





select * from product_view;


SELECT 
    id,
    name,
    price,
    sale_price,
    input_date,
    color_id,
    color,
    avatar,
    concept_id,
    concept,
    category_id,
    category,
    sales
FROM
    product_view
GROUP BY id
ORDER BY sales DESC
LIMIT 4;




-- Get products by type_id , category_id, concept_id, size_id, color_id --

WITH RankedProducts AS (
    SELECT
        id,
        name,
        price,
        sale_price,
        input_date,
        color_id,
        color,
        avatar,
        concept_id,
        concept,
        category_id,
        category,
        size_id,
        size,
        sales,
        ROW_NUMBER() OVER (PARTITION BY name) AS RowNum
    FROM
        product_view where product_type_id like "%" and category_id like "%" and concept_id like "1" and size_id like "%" and color_id like "%"
) SELECT
    id,
    name,
    price,
    sale_price,
    input_date,
    color_id,
    color,
    avatar,
    concept_id,
    concept,
    category_id,
    category,
    size_id,
	size,
    sales
FROM
    RankedProducts
WHERE
    RowNum = 1 
ORDER BY id desc;
    
    
-- Get Product by id and size_id --
SELECT 
    *
FROM
    product_view
WHERE
    id = 1 AND size_id = 1;
    
    
-- get specific product by name and color id--

SELECT 
    *
FROM
    product_view
WHERE
    name LIKE 'Combo 3 Trunk Ice Cooling'
        AND color_id = 3
LIMIT 1;

-- Get category by type --

SELECT 
    id AS category_id, name AS category
FROM
    product_children_type
WHERE
    product_type_id = 3;
    
    
    
    -- Update 1 more unit base on Product Id --
    
    UPDATE cart 
SET 
    quantity = quantity + 1
WHERE
    product_id = 1 AND size_id = 2 and user_id =1;
    

-- update cart --

UPDATE cart 
SET 
    product_id = 1,
    size_id = 1,
    quantity = 1
WHERE
    product_id = 1 AND size_id = 2
        AND user_id = 1;
    
    
    
INSERT INTO cart (user_id,product_id,size_id,quantity)
VALUES(1,2,2,1);

-- Checking exist -- 
SELECT 
    *
FROM
    cart
WHERE
    user_id = 1 AND product_id = 1
        AND size_id = 2;