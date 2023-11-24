package com.danny_store.controller.order;

import com.danny_store.dto.product.ICartDto;
import com.danny_store.service.order.IOrderService;
import com.danny_store.service.order_detail.IOrderDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/admin/home")
public class OrderController {
    @Autowired
    private IOrderService orderService;

    @Autowired
    private IOrderDetailService orderDetailService;

    @PostMapping("/add-to-order")
    public ResponseEntity<?> addToOrder(@RequestParam(name = "username") String username) {
        orderService.createOrder(username);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
