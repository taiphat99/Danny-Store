package com.danny_store.controller.product;

import com.danny_store.dto.product.IColorDto;
import com.danny_store.dto.product.IProductDto;
import com.danny_store.dto.product.ISizeDto;
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

    @GetMapping("/get-products-by-type-id")
    public ResponseEntity<List<IProductDto>> getProductByTypeId(@RequestParam(value = "type_id") Integer type_id) {
        List<IProductDto> products = productService.getProductsByTypeId(type_id);
        if (products == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        } else if (products.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(products, HttpStatus.OK);
    }

    @GetMapping("/get-colors-by-name-and-size-id")
    public ResponseEntity<List<IColorDto>> getColorsByNameAndSizeId(@RequestParam(value = "name") String name, @RequestParam(value = "size_id") Integer size_id) {
        List<IColorDto> colors = productService.getColorsByNameAndSizeId(name, size_id);
        if (colors == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        } else if (colors.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(colors, HttpStatus.OK);
    }

    @GetMapping("/get-sizes-by-name-and-color-id")
    public ResponseEntity<List<ISizeDto>> getSizesByNameAndColorId(@RequestParam(value = "name") String name, @RequestParam(value = "color_id") Integer color_id) {
        List<ISizeDto> sizes = productService.getSizesByNameAndColorId(name, color_id);
        if (sizes == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        } else if (sizes.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(sizes, HttpStatus.OK);
    }

}
