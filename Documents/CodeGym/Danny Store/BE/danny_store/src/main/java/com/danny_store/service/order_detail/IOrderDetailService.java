package com.danny_store.service.order_detail;

public interface IOrderDetailService {
    void createOrderDetail(Integer order_id, Integer product_id, Integer size_id,Integer quantity, Double price);
}
