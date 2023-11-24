package com.danny_store.service.product;

import com.danny_store.dto.product.*;
import com.danny_store.repository.IProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService implements IProductService {
    @Autowired
    private IProductRepository productRepository;

    @Override
    public List<IProductDto> getProducts(String type_id, String category_id, String concept_id, String size_id, String color_id,String sort_name,Integer limit) {
        return productRepository.getProducts(type_id, category_id, concept_id, size_id, color_id, sort_name, limit);
    }

    @Override
    public List<IColorDto> getColorsByName(String name) {
        return productRepository.getColorsByName(name);
    }

    @Override
    public List<ISizeDto> getSizesByNameAndColorId(String name, Integer color_id) {
        return productRepository.getSizesByNameAndColorId(name, color_id);
    }

    @Override
    public IProductDto getProductByNameAndColorId(String name, Integer color_id) {
        return productRepository.getProductByNameAndColorId(name, color_id);
    }

    @Override
    public List<IChildrenTypeDto> getCategoriesByTypeId(Integer type_id) {
        return productRepository.getCategoriesByTypeId(type_id);
    }

    @Override
    public List<IProductDto> getLatestProducts() {
        return productRepository.getLatestProducts();
    }

    @Override
    public List<ISizeDto> getSizes() {
        return productRepository.getSizes();
    }

    @Override
    public List<IProductDto> getBestsellers() {
        return productRepository.getBestsellers();
    }

    @Override
    public IProductDto getProductByIdAndSizeId(Integer product_id, Integer size_id) {
        return productRepository.getProductByIdAndSizeId(product_id, size_id);
    }

    @Override
    public Integer getQuantityByProductIdAndSizeId(Integer product_id, Integer size_id) {
        return productRepository.getQuantityByProductIdAndSizeId(product_id,size_id);
    }

    @Override
    public IProductDto getProductById(Integer product_id) {
        return productRepository.getProductsById(product_id);
    }

    @Override
    public List<IImageDto> getImagesByProductId(Integer product_id) {
        return productRepository.getImagesByProductId(product_id);
    }


}
