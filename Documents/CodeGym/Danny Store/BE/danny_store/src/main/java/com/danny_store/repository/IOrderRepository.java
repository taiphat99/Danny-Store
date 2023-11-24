package com.danny_store.repository;

import com.danny_store.model.order.Order;
import org.springframework.data.jpa.repository.JpaRepository;


public interface IOrderRepository extends JpaRepository<Order,Integer> {

    Order save(Order order);

}
