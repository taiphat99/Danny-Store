package com.danny_store.controller.cart;

import com.danny_store.dto.product.ICartDto;
import com.danny_store.service.cart.ICartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/admin/home")
public class CartController {
    @Autowired
    private ICartService cartService;

    @GetMapping("/get-cart-detail")
    public ResponseEntity<List<ICartDto>> getCartDetail(@RequestParam(name = "user_id") Integer user_id) {
        List<ICartDto> cartDetail = cartService.getCartDetailsByUserId(user_id);
        if (cartDetail == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        } else if (cartDetail.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(cartDetail, HttpStatus.OK);
    }

    @PostMapping("/add-to-cart")
    public ResponseEntity<?> addToCart(@RequestParam(name = "user_id") Integer user_id,
                                       @RequestParam(name = "product_id") Integer product_id,
                                       @RequestParam(name = "size_id") Integer size_id,
                                       @RequestParam(name="price") Double price) {
        ICartDto cart = cartService.findCartByUserIdAndProductIdAndSizeId(user_id, product_id, size_id);
        if (cart != null) {
            cartService.increaseAUnit(user_id, product_id, size_id);
            return new ResponseEntity<>(HttpStatus.OK);
        }
        cartService.createACart(user_id, product_id, size_id,price);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @DeleteMapping("/delete-single-product")
    public ResponseEntity<?> deleteSingleProduct(@RequestParam("cart_id") Integer cart_id) {
        cartService.deleteSingleProductByCartId(cart_id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PatchMapping("/update-cart")
    public ResponseEntity <?> updateCart(@RequestParam("cart_id") Integer cart_id,@RequestParam("product_id") Integer product_id,@RequestParam("size_id") Integer size_id){
        cartService.updateCart(cart_id,product_id,size_id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/delete-cart")
    public ResponseEntity<?> deleteCart(@RequestParam("user_id") Integer user_id) {
        cartService.deleteCart(user_id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/check-existence")
    public ResponseEntity<ICartDto> checkExistence(@RequestParam(name = "user_id") Integer user_id,
                                                   @RequestParam(name = "product_id") Integer product_id,
                                                   @RequestParam(name = "size_id") Integer size_id) {
        ICartDto cart = cartService.findCartByUserIdAndProductIdAndSizeId(user_id, product_id, size_id);
        if (cart == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(cart, HttpStatus.OK);
    }

    @PatchMapping("/update-quantity")
    public ResponseEntity<?> updateQuantity(@RequestParam(name = "cart_id") Integer cart_id,
                                            @RequestParam(name = "quantity") Integer quantity){
        cartService.updateQuantity(cart_id,quantity);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PatchMapping("/update-product-id")
    public ResponseEntity<?> updateProductId(@RequestParam(name = "cart_id") Integer cart_id,
                                            @RequestParam(name = "product_id") Integer product_id){
        cartService.updateProductIdInCart(cart_id,product_id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PatchMapping("/update-size-id")
    public ResponseEntity<?> updateSizeId(@RequestParam(name = "cart_id") Integer cart_id,
                                             @RequestParam(name = "size_id") Integer size_id){
        cartService.updateSizeIdInCart(cart_id,size_id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
