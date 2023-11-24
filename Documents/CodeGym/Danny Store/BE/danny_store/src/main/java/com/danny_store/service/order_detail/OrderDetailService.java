package com.danny_store.service.order_detail;

import com.danny_store.repository.IOrderDetailRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderDetailService implements IOrderDetailService{
    @Autowired
    private IOrderDetailRepository orderDetailRepository;
    @Override
    public void createOrderDetail(Integer order_id, Integer product_id, Integer size_id, Integer quantity, Double price) {
        orderDetailRepository.createOrderDetail(order_id,product_id,size_id,quantity,price);
    }
}
