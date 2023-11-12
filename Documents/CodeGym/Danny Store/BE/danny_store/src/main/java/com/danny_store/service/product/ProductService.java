package com.danny_store.service.product;

import com.danny_store.dto.product.IColorDto;
import com.danny_store.dto.product.IProductDto;
import com.danny_store.dto.product.ISizeDto;
import com.danny_store.repository.IProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService implements IProductService {
    @Autowired
    private IProductRepository productRepository;

    @Override
    public List<IProductDto> getProductsByTypeId(Integer type_id) {
        return productRepository.getProductsByType(type_id);
    }

    @Override
    public List<IColorDto> getColorsByNameAndSizeId(String name, Integer size_id) {
        return productRepository.getColorsByNameAndSizeId(name, size_id);
    }

    @Override
    public List<ISizeDto> getSizesByNameAndColorId(String name, Integer color_id) {
        return productRepository.getSizesByNameAndColorId(name, color_id);
    }
}
