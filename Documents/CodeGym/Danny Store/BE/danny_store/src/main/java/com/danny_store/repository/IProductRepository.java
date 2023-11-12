package com.danny_store.repository;

import com.danny_store.dto.product.IColorDto;
import com.danny_store.dto.product.IProductDto;
import com.danny_store.dto.product.ISizeDto;
import com.danny_store.model.product.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface IProductRepository extends JpaRepository<Product, Integer> {
    @Query(value = "SELECT \n" +
            "    name, price, sale_price, input_date AS input_date\n" +
            "FROM\n" +
            "    product_view\n" +
            "WHERE\n" +
            "    product_type_id = :type_id \n" +
            "GROUP BY name , price , sale_price , input_date\n" +
            "ORDER BY input_date DESC;", nativeQuery = true)
    List<IProductDto> getProductsByType(@Param("type_id") Integer type_id);

    @Query(value = "SELECT \n" +
            "    color_id, color \n" +
            "FROM\n" +
            "    product_view\n" +
            "WHERE\n" +
            "    name LIKE :name \n" +
            "        AND size_id = :size_id ;", nativeQuery = true)
    List<IColorDto> getColorsByNameAndSizeId(@Param("name") String name,@Param("size_id") Integer size_id);

    @Query(value = "SELECT \n" +
            "    size_id, size \n" +
            "FROM\n" +
            "    product_view\n" +
            "WHERE\n" +
            "    name LIKE :name \n" +
            "        AND color_id = :color_id ;", nativeQuery = true)
    List<ISizeDto> getSizesByNameAndColorId(@Param("name") String name, @Param("color_id") Integer color_id);
}
