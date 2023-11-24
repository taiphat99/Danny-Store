package com.danny_store.repository;

import com.danny_store.model.order.OrderDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

public interface IOrderDetailRepository extends JpaRepository<OrderDetail,Integer> {
    @Transactional
    @Modifying
    @Query(value = "INSERT INTO order_detail (order_id,product_id,size_id,quantity,price)\n" +
            "VALUES(:order_id,:product_id,:size_id,:quantity,:price);", nativeQuery = true)
    void createOrderDetail(@Param("order_id") Integer order_id, @Param("product_id") Integer product_id, @Param("size_id") Integer size_id,@Param("quantity") Integer quantity, @Param("price") Double price);


}
