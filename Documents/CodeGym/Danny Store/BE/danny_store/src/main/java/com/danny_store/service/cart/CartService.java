package com.danny_store.service.cart;

import com.danny_store.dto.product.ICartDto;
import com.danny_store.repository.ICartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartService implements ICartService {

    @Autowired
    private ICartRepository cartRepository;

    @Override
    public List<ICartDto> getCartDetailsByUserId(Integer user_id) {
        return cartRepository.getCartDetailsByUserId(user_id);
    }

    @Override
    public ICartDto findCartByUserIdAndProductIdAndSizeId(Integer user_id, Integer product_id, Integer size_id) {
        return cartRepository.findCartByUserIdAndProductIdAndSizeId(user_id, product_id, size_id);
    }

    @Override
    public void createACart(Integer user_id, Integer product_id, Integer size_id, Double price) {
        cartRepository.createACart(user_id, product_id, size_id, price);
    }

    @Override
    public void updateCart(Integer cart_id, Integer product_id, Integer size_id) {
        cartRepository.updateCart(cart_id, product_id, size_id);
    }

    @Override
    public void increaseAUnit(Integer user_id, Integer product_id, Integer size_id) {
        cartRepository.increaseAUnit(user_id, product_id, size_id);
    }

    @Override
    public void deleteSingleProductByCartId(Integer cart_id) {
        cartRepository.deleteSingleProductByCartId(cart_id);
    }

    @Override
    public void deleteCart(Integer user_id) {
        cartRepository.deleteCart(user_id);
    }

    @Override
    public void updateQuantity(Integer cart_id, Integer quantity) {
        cartRepository.updateQuantityByCartId(cart_id, quantity);
    }

    @Override
    public void updateProductIdInCart(Integer cart_id, Integer product_id) {
        cartRepository.updateProductIdByCartId(cart_id, product_id);
    }

    @Override
    public void updateSizeIdInCart(Integer cart_id, Integer size_id) {
        cartRepository.updateSizeIdByCartId(cart_id, size_id);
    }
}
