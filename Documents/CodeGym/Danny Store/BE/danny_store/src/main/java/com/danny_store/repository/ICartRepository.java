package com.danny_store.repository;

import com.danny_store.dto.product.ICartDto;
import com.danny_store.model.order.Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface ICartRepository extends JpaRepository<Cart, Integer> {

    @Query(value = "SELECT \n" +
            "    *\n" +
            "FROM\n" +
            "    cart\n" +
            "WHERE\n" +
            "    user_id = :user_id", nativeQuery = true)
    List<ICartDto> getCartDetailsByUserId(@Param("user_id") Integer user_id);

    /**
     * This method is for checking whether a product with a specific size exists in the cart list or not.
     *
     * @param user_id
     * @param product_id
     * @param size_id
     * @return
     */
    @Query(value = "SELECT \n" +
            "    *\n" +
            "FROM\n" +
            "    cart\n" +
            "WHERE\n" +
            "    user_id = :user_id AND product_id = :product_id AND size_id = :size_id ;", nativeQuery = true)
    ICartDto findCartByUserIdAndProductIdAndSizeId(@Param("user_id") Integer user_id, @Param("product_id") Integer product_id, @Param("size_id") Integer size_id);

    @Transactional
    @Modifying
    @Query(value = "INSERT INTO cart (user_id,product_id,size_id,quantity,price)\n" +
            "VALUES(:user_id,:product_id,:size_id,1,:price);", nativeQuery = true)
    void createACart(@Param("user_id") Integer user_id, @Param("product_id") Integer product_id, @Param("size_id") Integer size_id, @Param("price") Double price);


    /**
     * Add one more unit (+1) to a product in cart
     * Using this method when clicking on a size button in List Product on Home or List Page
     *
     * @param user_id
     * @param product_id
     * @param size_id
     */
    @Transactional
    @Modifying
    @Query(value = "UPDATE cart \n" +
            "SET \n" +
            "    quantity = quantity + 1 \n" +
            "WHERE\n" +
            "    product_id = :product_id AND size_id = :size_id AND user_id = :user_id ", nativeQuery = true)
    void increaseAUnit(@Param("user_id") Integer user_id, @Param("product_id") Integer product_id, @Param("size_id") Integer size_id);


    @Transactional
    @Modifying
    @Query(value = "UPDATE cart \n" +
            "SET \n" +
            "    product_id = :product_id,\n" +
            "    size_id = :size_id,\n " +
            "WHERE \n " +
            "    cart_id = :cart_id", nativeQuery = true)
    void updateCart(@Param("cart_id") Integer cart_id, @Param("product_id") Integer product_id, @Param("size_id") Integer size_id);

    @Transactional
    @Modifying
    @Query(value = "DELETE FROM cart WHERE id = :cart_id", nativeQuery = true)
    void deleteSingleProductByCartId(@Param("cart_id") Integer cart_id);

    @Transactional
    @Modifying
    @Query(value = "DELETE FROM cart WHERE user_id = :user_id", nativeQuery = true)
    void deleteCart(@Param("user_id") Integer user_id);

    @Transactional
    @Modifying
    @Query(value = "UPDATE cart \n" +
            "SET \n" +
            "    quantity = :quantity\n" +
            "WHERE\n" +
            "    id = :cart_id ",nativeQuery = true)
    void updateQuantityByCartId(@Param("cart_id") Integer cart_id,@Param("quantity") Integer quantity);

    @Transactional
    @Modifying
    @Query(value = "UPDATE cart \n" +
            "SET \n" +
            "    product_id = :product_id\n" +
            "WHERE\n" +
            "    id = :cart_id ",nativeQuery = true)
    void updateProductIdByCartId(@Param("cart_id") Integer cart_id,@Param("product_id") Integer product_id);

    @Transactional
    @Modifying
    @Query(value = "UPDATE cart \n" +
            "SET \n" +
            "    size_id = :size_id\n" +
            "WHERE\n" +
            "    id = :cart_id ",nativeQuery = true)
    void updateSizeIdByCartId(@Param("cart_id") Integer cart_id,@Param("size_id") Integer size_id);

}
