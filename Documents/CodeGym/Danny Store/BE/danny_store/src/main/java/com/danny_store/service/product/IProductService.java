package com.danny_store.service.product;

import com.danny_store.dto.product.IColorDto;
import com.danny_store.dto.product.IProductDto;
import com.danny_store.dto.product.ISizeDto;

import java.util.List;

public interface IProductService {
    List<IProductDto> getProductsByTypeId(Integer type_id);

    List<IColorDto> getColorsByNameAndSizeId(String name, Integer size_id);

    List<ISizeDto> getSizesByNameAndColorId(String name, Integer color_id);

}
