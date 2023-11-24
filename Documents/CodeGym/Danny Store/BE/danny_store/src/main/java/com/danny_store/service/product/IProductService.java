package com.danny_store.service.product;

import com.danny_store.dto.product.*;

import java.util.List;

public interface IProductService {
    List<IProductDto> getProducts(String type_id, String category_id, String concept_id,String size_id,String color_id,String sort_name,Integer limit);

    List<IColorDto> getColorsByName(String name);

    List<ISizeDto> getSizesByNameAndColorId(String name, Integer color_id);

    IProductDto getProductByNameAndColorId(String name, Integer color_id);

    List<IChildrenTypeDto> getCategoriesByTypeId(Integer type_id);

    List<IProductDto> getLatestProducts();

    List<ISizeDto> getSizes();

    List<IProductDto> getBestsellers();

    IProductDto getProductByIdAndSizeId(Integer product_id, Integer size_id);

    Integer getQuantityByProductIdAndSizeId(Integer product_id, Integer size_id);

    IProductDto getProductById(Integer product_id);

    List<IImageDto> getImagesByProductId(Integer product_id);


}
