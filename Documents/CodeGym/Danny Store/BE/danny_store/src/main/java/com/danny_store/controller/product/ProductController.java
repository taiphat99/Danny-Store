package com.danny_store.controller.product;

import com.danny_store.dto.product.*;
import com.danny_store.service.product.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/admin/home")
public class ProductController {
    @Autowired
    private IProductService productService;

    @GetMapping("/get-products")
    public ResponseEntity<List<IProductDto>> getProductByTypeId(@RequestParam(name = "type_id", defaultValue = "%") String type_id,
                                                                @RequestParam(name = "category_id", defaultValue = "%") String category_id,
                                                                @RequestParam(name = "concept_id", defaultValue = "%") String concept_id,
                                                                @RequestParam(name = "color_id", defaultValue = "%") String color_id,
                                                                @RequestParam(name = "size_id", defaultValue = "%") String size_id,
                                                                @RequestParam(name = "sort_name", defaultValue = "latest") String sort_name,
                                                                @RequestParam(name = "limit", defaultValue = "80") Integer limit) {
        List<IProductDto> products = productService.getProducts(type_id, category_id, concept_id, size_id, color_id, sort_name, limit);
        if (products == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        } else if (products.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(products, HttpStatus.OK);
    }

    @GetMapping("/get-latest-products")
    public ResponseEntity<List<IProductDto>> getProductByTypeId() {
        List<IProductDto> products = productService.getLatestProducts();
        if (products == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        } else if (products.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(products, HttpStatus.OK);
    }


    @GetMapping("/get-bestsellers")
    public ResponseEntity<List<IProductDto>> getBestsellers() {
        List<IProductDto> products = productService.getBestsellers();
        if (products == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        } else if (products.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(products, HttpStatus.OK);
    }

    @GetMapping("/get-colors-by-name")
    public ResponseEntity<List<IColorDto>> getColorsByName(@RequestParam(name = "name", defaultValue = "%") String name) {
        List<IColorDto> colors = productService.getColorsByName(name);
        if (colors == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        } else if (colors.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(colors, HttpStatus.OK);
    }

    @GetMapping("/get-sizes-by-name-and-color-id")
    public ResponseEntity<List<ISizeDto>> getSizesByNameAndColorId(@RequestParam(name = "name") String name, @RequestParam(value = "color_id") Integer color_id) {
        List<ISizeDto> sizes = productService.getSizesByNameAndColorId(name, color_id);
        if (sizes == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        } else if (sizes.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(sizes, HttpStatus.OK);
    }

    @GetMapping("/get-product-by-name-and-color-id")
    public ResponseEntity<IProductDto> getProductByNameAndColorId(@RequestParam(name = "name") String name, @RequestParam(value = "color_id") Integer color_id) {
        IProductDto product = productService.getProductByNameAndColorId(name, color_id);
        if (product == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(product, HttpStatus.OK);
    }

    @GetMapping("/get-categories-by-type-id")
    public ResponseEntity<List<IChildrenTypeDto>> getCategoriesByTypeId(@RequestParam(name = "type_id") Integer type_id) {
        List<IChildrenTypeDto> categories = productService.getCategoriesByTypeId(type_id);
        if (categories == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        } else if (categories.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(categories, HttpStatus.OK);
    }

    @GetMapping("/get-sizes")
    public ResponseEntity<List<ISizeDto>> getSizes() {
        List<ISizeDto> sizes = productService.getSizes();
        if (sizes == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        } else if (sizes.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(sizes, HttpStatus.OK);
    }

    @GetMapping("/get-product-by-id-and-size-id")
    public ResponseEntity<IProductDto> getProductByIdAndSizeId(@RequestParam(name = "product_id") Integer product_id,
                                                               @RequestParam(name = "size_id") Integer size_id) {
        IProductDto product = productService.getProductByIdAndSizeId(product_id, size_id);
        if (product != null) {
            return new ResponseEntity<>(product, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @GetMapping("/check-sold-out")
    public ResponseEntity<?> checkSoldOut(@RequestParam(name = "product_id") Integer product_id,
                                          @RequestParam(name = "size_id") Integer size_id) {
        Integer quantity = productService.getQuantityByProductIdAndSizeId(product_id, size_id);
        if (quantity != null) {
            return new ResponseEntity<>(quantity, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @GetMapping("/get-product-by-id")
    public ResponseEntity<IProductDto> getProductById(@RequestParam(name = "id") Integer id){
        IProductDto product = productService.getProductById(id);
        if (product != null) {
            return new ResponseEntity<>(product, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @GetMapping("/get-images-by-product-id")
    public ResponseEntity<List<IImageDto>> getImagesByProductId(@RequestParam(name = "product_id") Integer product_id) {
        List<IImageDto> list = productService.getImagesByProductId(product_id);
        if (list == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        } else if (list.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(list, HttpStatus.OK);
    }

}
