package com.danny_store.service.order;

import com.danny_store.dto.product.ICartDto;
import com.danny_store.model.order.Cart;
import com.danny_store.model.order.Order;
import com.danny_store.model.user.AppUser;
import com.danny_store.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;

@Service
public class OrderService implements IOrderService{
    @Autowired
    private IOrderRepository orderRepository;
    @Autowired
    private IAppUserRepository appUserRepository;
    @Autowired
    private ICartRepository cartRepository;
    @Autowired
    private IOrderDetailRepository orderDetailRepository;
    @Autowired
    private IProductRepository productRepository;
    @Override
    public void createOrder(String username) {
        LocalDate currentDate = LocalDate.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        String formattedDate = currentDate.format(formatter);
        Date date = Date.valueOf(formattedDate);

        AppUser user = appUserRepository.findAppUserByUsername(username);
        Order order = new Order(date,user,true,user.getAddress(),user.getPhone());
        Order ord = orderRepository.save(order);

        List<ICartDto> cartList = cartRepository.getCartDetailsByUserId(user.getId());
        for (ICartDto cart :cartList) {
            System.out.println(cart);
            orderDetailRepository.createOrderDetail(ord.getId(),cart.getProduct_id(),cart.getSize_id(),cart.getQuantity(),cart.getPrice());
            productRepository.updateQuantityInStock(cart.getProduct_id(),cart.getSize_id(),cart.getQuantity());
        }
        cartRepository.deleteCart(user.getId());
    }
}
