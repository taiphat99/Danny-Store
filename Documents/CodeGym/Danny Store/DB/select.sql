
-- Create view -- 

CREATE OR REPLACE VIEW product_view AS
    SELECT 
        p.id AS id,
        p.name AS name,
        p.price AS price,
        p.price_on_sale AS sale_price,
        p.avatar AS avatar,
        col.id as color_id,
        col.name AS color,
        con.id as concept_id,
        con.name AS concept,
        pt.id as product_type_id,
        pt.name AS type,
        pct.id as category_id,
        pct.name AS category,
        s.id as size_id,
        s.name AS size,
        ps.quantity AS quantity,
        p.input_date AS input_date
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
        order by id;
        
        
        
        
        
select * from product_view;






-- Get products by type --
SELECT 
    name, price, sale_price, input_date AS input_date
FROM
    product_view
WHERE
    product_type_id = 1
GROUP BY name , price , sale_price , input_date
ORDER BY input_date DESC;



-- Get colors by name and size --
SELECT 
    color_id
FROM
    product_view
WHERE
    name LIKE 'Polo thể thao V2'
        AND size_id = 1;
    
    

    
-- Get sizes by name and color --
Select size 
from product_view
where name like "Polo thể thao V2" and color_id = "1";



-- Get colors by product name and size --
SELECT 
    color_id, color
FROM
    product_view
WHERE
    name like "Polo thể thao V2" group by color_id;
    
    
    
-- Get avatar by product_name and color_id --alter
SELECT 
    MIN(avatar) as avatar
FROM
    product_view
WHERE
    name LIKE 'Polo thể thao V2'
        AND color_id = 3;
        
        
        
-- Get sizes by name and color_id--

select size_id from product_view where name like "Polo thể thao V2" and color_id = 4;


        