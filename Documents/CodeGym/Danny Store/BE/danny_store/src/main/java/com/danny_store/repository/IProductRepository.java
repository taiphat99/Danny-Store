package com.danny_store.repository;

import com.danny_store.dto.product.*;
import com.danny_store.model.product.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.List;

public interface IProductRepository extends JpaRepository<Product, Integer> {

    @Query(value = "WITH RankedProducts AS (\n" +
            "    SELECT\n" +
            "        id,\n" +
            "        name,\n" +
            "        price,\n" +
            "        sale_price,\n" +
            "        input_date,\n" +
            "        color_id,\n" +
            "        color,\n" +
            "        avatar,\n" +
            "        concept_id,\n" +
            "        concept,\n" +
            "        category_id,\n" +
            "        category,\n" +
            "        size_id,\n" +
            "        size,\n" +
            "        sales,\n" +
            "        ROW_NUMBER() OVER (PARTITION BY name) AS RowNum \n" +
            "    FROM\n" +
            "        product_view where product_type_id like :type_id and category_id like :category_id and concept_id like :concept_id and size_id like :size_id and color_id like :color_id" +
            ") SELECT\n" +
            "    id,\n" +
            "    name,\n" +
            "    price,\n" +
            "    sale_price,\n" +
            "    input_date,\n" +
            "    color_id,\n" +
            "    color,\n" +
            "    avatar,\n" +
            "    concept_id,\n" +
            "    concept,\n" +
            "    category_id,\n" +
            "    category,\n" +
            "    size_id,\n" +
            "    size,\n" +
            "    sales \n" +
            "FROM\n" +
            "    RankedProducts\n" +
            "WHERE\n" +
            "    RowNum = 1 \n" +
            "ORDER BY CASE WHEN :sort_name = 'latest' THEN input_date END DESC, CASE WHEN :sort_name = 'bestsellers' THEN sales END DESC, CASE WHEN :sort_name = 'price_desc' THEN price END DESC, CASE WHEN :sort_name = 'price_asc' THEN price END ASC LIMIT :limit ;", nativeQuery = true)
    List<IProductDto> getProducts(@Param("type_id") String type_id, @Param("category_id") String category, @Param("concept_id") String concept_id, @Param("size_id") String size_id, @Param("color_id") String color_id, @Param("sort_name") String sort_name, @Param("limit") Integer limit);


    @Query(value = "WITH RankedProducts AS (\n" +
            "    SELECT\n" +
            "        id,\n" +
            "        name,\n" +
            "        price,\n" +
            "        sale_price,\n" +
            "        input_date,\n" +
            "        color_id,\n" +
            "        color,\n" +
            "        avatar,\n" +
            "        concept_id,\n" +
            "        concept,\n" +
            "        category_id,\n" +
            "        category,\n" +
            "        size_id,\n" +
            "        size,\n" +
            "        sales,\n" +
            "        ROW_NUMBER() OVER (PARTITION BY name) AS RowNum \n" +
            "    FROM\n" +
            "        product_view " +
            ") SELECT\n" +
            "    id,\n" +
            "    name,\n" +
            "    price,\n" +
            "    sale_price,\n" +
            "    input_date,\n" +
            "    color_id,\n" +
            "    color,\n" +
            "    avatar,\n" +
            "    concept_id,\n" +
            "    concept,\n" +
            "    category_id,\n" +
            "    category,\n" +
            "    size_id,\n" +
            "    size,\n" +
            "    sales \n" +
            "FROM\n" +
            "    RankedProducts\n" +
            "WHERE\n" +
            "    RowNum = 1 \n" +
            "ORDER BY input_date DESC LIMIT 4", nativeQuery = true)
    List<IProductDto> getLatestProducts();


    @Query(value = "SELECT \n" +
            "    size_id, size \n" +
            "FROM\n" +
            "    product_view\n" +
            "WHERE\n" +
            "    name LIKE :name \n" +
            "        AND color_id = :color_id ;", nativeQuery = true)
    List<ISizeDto> getSizesByNameAndColorId(@Param("name") String name, @Param("color_id") Integer color_id);

    @Query(value = "SELECT \n" +
            "    color_id, color\n" +
            "FROM\n" +
            "    product_view\n" +
            "WHERE\n" +
            "    name LIKE :name \n" +
            "GROUP BY color_id;", nativeQuery = true)
    List<IColorDto> getColorsByName(@Param("name") String name);

    @Query(value = "SELECT \n" +
            "    *\n" +
            "FROM\n" +
            "    product_view \n" +
            "WHERE\n" +
            "    name LIKE :name\n" +
            "        AND color_id = :color_id \n" +
            "LIMIT 1;", nativeQuery = true)
    IProductDto getProductByNameAndColorId(@Param("name") String name, @Param("color_id") Integer id);


    @Query(value = "SELECT \n" +
            "        id AS category_id, name AS category \n" +
            "FROM\n" +
            "    product_children_type\n" +
            "WHERE\n" +
            "    product_type_id = :type_id ;", nativeQuery = true)
    List<IChildrenTypeDto> getCategoriesByTypeId(@Param("type_id") Integer type_id);

    @Query(value = "select id as size_id, name as size\n" +
            "from size;", nativeQuery = true)
    List<ISizeDto> getSizes();

    @Query(value = "\n" +
            "SELECT \n" +
            "    id,\n" +
            "    name,\n" +
            "    price,\n" +
            "    sale_price,\n" +
            "    input_date,\n" +
            "    color_id,\n" +
            "    color,\n" +
            "    avatar,\n" +
            "    concept_id,\n" +
            "    concept,\n" +
            "    category_id,\n" +
            "    category,\n" +
            "    sales\n" +
            "FROM\n" +
            "    product_view\n" +
            "GROUP BY id\n" +
            "ORDER BY sales DESC\n" +
            "LIMIT 4;", nativeQuery = true)
    List<IProductDto> getBestsellers();

    @Query(value = "SELECT \n" +
            "    *\n" +
            "FROM\n" +
            "    product_view\n" +
            "WHERE\n" +
            "    id = :product_id AND size_id = :size_id ", nativeQuery = true)
    IProductDto getProductByIdAndSizeId(@Param("product_id") Integer product_id, @Param("size_id") Integer size_id);

    @Query(value = "SELECT \n" +
            "    quantity\n" +
            "FROM\n" +
            "    product_view\n" +
            "WHERE\n" +
            "    id = :product_id AND size_id = :size_id ", nativeQuery = true)
    Integer getQuantityByProductIdAndSizeId(@Param("product_id") Integer product_id, @Param("size_id") Integer size_id);

    @Query(value = "SELECT \n" +
            "    *\n" +
            "FROM\n" +
            "    product_view\n" +
            "WHERE\n" +
            "    id = :product_id \n" +
            "LIMIT 1 ", nativeQuery = true)
    IProductDto getProductsById(@Param("product_id") Integer product_id);

    @Query(value = "SELECT \n" +
            "    *\n" +
            "FROM\n" +
            "    image\n" +
            "WHERE\n" +
            "    product_id = :product_id ", nativeQuery = true)
    List<IImageDto> getImagesByProductId(@Param("product_id") Integer product_id);

    @Modifying
    @Transactional
    @Query(value = "UPDATE product_size \n" +
            "SET \n" +
            "    quantity = quantity - :quantity \n" +
            "WHERE\n" +
            "    product_id = :product_id AND size_id = :size_id ", nativeQuery = true)
    void updateQuantityInStock(@Param("product_id") Integer product_id, @Param("size_id")Integer size_id,@Param("quantity") Integer quantity);

}
