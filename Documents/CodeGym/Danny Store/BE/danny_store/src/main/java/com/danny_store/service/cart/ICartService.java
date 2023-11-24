package com.danny_store.service.cart;

import com.danny_store.dto.product.ICartDto;

import java.util.List;

public interface ICartService {
    List<ICartDto> getCartDetailsByUserId(Integer user_id);

    ICartDto findCartByUserIdAndProductIdAndSizeId(Integer user_id, Integer product_id, Integer size_id);

    void createACart(Integer user_id, Integer product_id, Integer size_id,Double price);

    void updateCart(Integer cart_id, Integer product_id, Integer size_id);

    void increaseAUnit(Integer user_id, Integer product_id, Integer size_id);

    void deleteSingleProductByCartId(Integer cart_id);

    void deleteCart(Integer user_id);

    void updateQuantity(Integer cart_id,Integer quantity);

    void updateProductIdInCart(Integer cart_id,Integer product_id);

    void updateSizeIdInCart(Integer cart_id, Integer size_id);
}
